import { Controller, Get, Inject, Query } from '@nestjs/common';
import {
  FIND_IMAGES_INBOUND_PORT,
  FindImagesInboundPort,
  FindImagesInboundPortOutputDto,
} from '../inbound-port/find-images.inbound-port';

@Controller('images')
export class FindImagesController {
  constructor(
    @Inject(FIND_IMAGES_INBOUND_PORT)
    private readonly findImagesInboundPort: FindImagesInboundPort,
  ) {}

  @Get()
  async handle(
    @Query('count') count: number,
    @Query('nextPageKey') nextPageKey: string,
  ): Promise<FindImagesInboundPortOutputDto> {
    return await this.findImagesInboundPort.execute({ count, nextPageKey });
  }
}
