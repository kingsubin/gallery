import {
  FindImagesInboundPort,
  FindImagesInboundPortInputDto,
  FindImagesInboundPortOutputDto,
} from '../inbound-port/find-images.inbound-port';
import { Inject } from '@nestjs/common';
import {
  FIND_IMAGES_OUTBOUND_PORT,
  FindImagesOutboundPort,
} from '../outbound-port/find-images.outbound.port';

export class FindImagesService implements FindImagesInboundPort {
  constructor(
    @Inject(FIND_IMAGES_OUTBOUND_PORT)
    private readonly findImagesOutboundPort: FindImagesOutboundPort,
  ) {}

  async execute(
    params: FindImagesInboundPortInputDto,
  ): Promise<FindImagesInboundPortOutputDto> {
    const entities = await this.findImagesOutboundPort.execute(params);

    return {
      items: entities,
      nextPageKey: entities[entities.length - 1]?.id ?? null,
    };
  }
}
