import {
  Controller,
  Inject,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import {
  UPLOAD_IMAGE_INBOUND_PORT,
  UploadImageInboundPort,
  UploadImageInboundPortOutputDto,
} from '../inbound-port/upload-image.inbound-port';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('images')
export class UploadImageController {
  constructor(
    @Inject(UPLOAD_IMAGE_INBOUND_PORT)
    private readonly uploadImageInboundPort: UploadImageInboundPort,
  ) {}

  @UseInterceptors(FileInterceptor('file'))
  @Post()
  async handle(
    @UploadedFile() file: Express.Multer.File,
  ): Promise<UploadImageInboundPortOutputDto> {
    return this.uploadImageInboundPort.execute(file);
  }
}
