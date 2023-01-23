import { ImageEntity } from '../image.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { LessThanOrEqual, Repository } from 'typeorm';
import {
  FindImagesOutboundPort,
  FindImagesOutboundPortInputDto,
  FindImagesOutboundPortOutputDto,
} from '../outbound-port/find-images.outbound.port';

export class FindImagesRepository implements FindImagesOutboundPort {
  constructor(
    @InjectRepository(ImageEntity)
    private readonly imageRepository: Repository<ImageEntity>,
  ) {}

  async execute(
    params: FindImagesOutboundPortInputDto,
  ): Promise<FindImagesOutboundPortOutputDto> {
    return await this.imageRepository.find({
      where: {
        id: LessThanOrEqual(params.nextPageKey),
      },
      take: params.count,
      order: {
        createdAt: 'DESC',
      },
    });
  }
}
