import { ImageEntity } from '../image.entity';

export type FindImagesOutboundPortInputDto = {
  count: number;
  nextPageKey: string;
};

export type FindImagesOutboundPortOutputDto = Array<ImageEntity>;

export const FIND_IMAGES_OUTBOUND_PORT = 'FIND_IMAGES_OUTBOUND_PORT' as const;

export interface FindImagesOutboundPort {
  execute(
    params: FindImagesOutboundPortInputDto,
  ): Promise<FindImagesOutboundPortOutputDto>;
}
