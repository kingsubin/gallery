export type FindImagesInboundPortInputDto = {
  count: number;
  nextPageKey: string;
};

export type FindImagesInboundPortOutputDto = {
  items: Array<{
    id: string;
    variants: any;
    createdAt: Date;
  }>;
  nextPageKey: string | null;
};

export const FIND_IMAGES_INBOUND_PORT = 'FIND_IMAGES_INBOUND_PORT' as const;

export interface FindImagesInboundPort {
  execute(
    params: FindImagesInboundPortInputDto,
  ): Promise<FindImagesInboundPortOutputDto>;
}
