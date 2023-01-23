import {
  UploadImageInboundPort,
  UploadImageInboundPortInputDto,
  UploadImageInboundPortOutputDto,
} from '../inbound-port/upload-image.inbound-port';
import { Inject } from '@nestjs/common';
import {
  UPLOAD_IMAGE_OUTBOUND_PORT,
  UploadImageOutboundPort,
} from '../outbound-port/upload-image.outbound-port';
import {
  UPLOAD_STORAGE_OUTBOUND_PORT,
  UploadStorageOutboundPort,
} from '../outbound-port/upload-storage.outbound-port';

export class UploadImageService implements UploadImageInboundPort {
  constructor(
    @Inject(UPLOAD_IMAGE_OUTBOUND_PORT)
    private readonly uploadImageOutboundPort: UploadImageOutboundPort,
    @Inject(UPLOAD_STORAGE_OUTBOUND_PORT)
    private readonly uploadStorageOutboundPort: UploadStorageOutboundPort,
  ) {}

  async execute(
    params: UploadImageInboundPortInputDto,
  ): Promise<UploadImageInboundPortOutputDto> {
    const url = await this.uploadStorageOutboundPort.execute(params);

    const entity = await this.uploadImageOutboundPort.execute({
      url,
      size: params.size,
    });

    return {
      id: entity.id,
      variants: entity.variants,
      createdAt: entity.createdAt,
    };
  }
}
