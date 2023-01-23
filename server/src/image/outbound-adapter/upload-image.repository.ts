import {
  UploadImageOutboundPort,
  UploadImageOutboundPortInputDto,
  UploadImageOutboundPortOutputDto,
} from '../outbound-port/upload-image.outbound-port';
import { ImageEntity } from '../image.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

export class UploadImageRepository implements UploadImageOutboundPort {
  constructor(
    @InjectRepository(ImageEntity)
    private readonly imageRepository: Repository<ImageEntity>,
  ) {}

  async execute(
    params: UploadImageOutboundPortInputDto,
  ): Promise<UploadImageOutboundPortOutputDto> {
    const entity = new ImageEntity();
    entity.variants = params;

    return await this.imageRepository.save(entity);
  }
}
