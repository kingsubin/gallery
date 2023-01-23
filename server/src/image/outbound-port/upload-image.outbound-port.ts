import { ImageEntity } from '../image.entity';

export type UploadImageOutboundPortInputDto = any;

export type UploadImageOutboundPortOutputDto = ImageEntity;

export const UPLOAD_IMAGE_OUTBOUND_PORT = 'UPLOAD_IMAGE_OUTBOUND_PORT' as const;

export interface UploadImageOutboundPort {
  execute(
    params: UploadImageOutboundPortInputDto,
  ): Promise<UploadImageOutboundPortOutputDto>;
}
