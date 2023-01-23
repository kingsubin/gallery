import { Module } from '@nestjs/common';
import { UploadImageController } from './controller/upload-image.controller';
import { UPLOAD_IMAGE_INBOUND_PORT } from './inbound-port/upload-image.inbound-port';
import { UploadImageService } from './service/upload-image.service';
import { UPLOAD_IMAGE_OUTBOUND_PORT } from './outbound-port/upload-image.outbound-port';
import { UploadImageRepository } from './outbound-adapter/upload-image.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImageEntity } from './image.entity';
import { UPLOAD_STORAGE_OUTBOUND_PORT } from './outbound-port/upload-storage.outbound-port';
import { UploadStorageService } from './outbound-adapter/upload-storage.service';
import { FIND_IMAGES_OUTBOUND_PORT } from './outbound-port/find-images.outbound.port';
import { FindImagesRepository } from './outbound-adapter/find-images.repository';
import { FIND_IMAGES_INBOUND_PORT } from './inbound-port/find-images.inbound-port';
import { FindImagesService } from './service/find-images.service';
import { FindImagesController } from './controller/find-images.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ImageEntity])],
  controllers: [UploadImageController, FindImagesController],
  providers: [
    {
      provide: UPLOAD_IMAGE_INBOUND_PORT,
      useClass: UploadImageService,
    },
    {
      provide: UPLOAD_IMAGE_OUTBOUND_PORT,
      useClass: UploadImageRepository,
    },
    {
      provide: UPLOAD_STORAGE_OUTBOUND_PORT,
      useClass: UploadStorageService,
    },
    {
      provide: FIND_IMAGES_INBOUND_PORT,
      useClass: FindImagesService,
    },
    {
      provide: FIND_IMAGES_OUTBOUND_PORT,
      useClass: FindImagesRepository,
    },
  ],
})
export class ImageModule {}
