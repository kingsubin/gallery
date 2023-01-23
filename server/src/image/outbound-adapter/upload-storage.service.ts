import {
  UploadStorageOutboundPort,
  UploadStorageOutboundPortInputDto,
  UploadStorageOutboundPortOutputDto,
} from '../outbound-port/upload-storage.outbound-port';
import { Bucket, Storage } from '@google-cloud/storage';
import { generateId } from '../../utils/id-generator';
import { ConfigService } from '@nestjs/config';
import { Inject } from '@nestjs/common';

export class UploadStorageService implements UploadStorageOutboundPort {
  private readonly bucket: Bucket;
  private readonly keyFilename: string;
  private readonly storageName: string;

  constructor(
    @Inject(ConfigService)
    private readonly configService: ConfigService,
  ) {
    this.keyFilename = configService.getOrThrow('storage.keyFilename');
    this.storageName = configService.getOrThrow('storage.name');

    this.bucket = new Bucket(
      new Storage({
        keyFilename: this.keyFilename,
      }),
      this.storageName,
    );
  }

  async execute(
    params: UploadStorageOutboundPortInputDto,
  ): Promise<UploadStorageOutboundPortOutputDto> {
    const file = this.bucket.file(`${generateId()}-${params.originalname}`);
    await file.save(params.buffer);

    return file.publicUrl();
  }
}
