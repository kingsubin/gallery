export type UploadImageInboundPortInputDto = Express.Multer.File;

export type UploadImageInboundPortOutputDto = {
  id: string;
  variants: any;
  createdAt: Date;
};

export const UPLOAD_IMAGE_INBOUND_PORT = 'UPLOAD_IMAGE_INBOUND_PORT' as const;

export interface UploadImageInboundPort {
  execute(
    params: UploadImageInboundPortInputDto,
  ): Promise<UploadImageInboundPortOutputDto>;
}
