export type UploadStorageOutboundPortInputDto = Express.Multer.File;

export type UploadStorageOutboundPortOutputDto = string;

export const UPLOAD_STORAGE_OUTBOUND_PORT =
  'UPLOAD_STORAGE_OUTBOUND_PORT' as const;

export interface UploadStorageOutboundPort {
  execute(
    params: UploadStorageOutboundPortInputDto,
  ): Promise<UploadStorageOutboundPortOutputDto>;
}
