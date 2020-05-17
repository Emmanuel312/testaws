import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { UploadService } from './upload.service';
import { multerConfig } from 'src/config/multer.config';

@Controller('upload')
export class UploadController {
  constructor(private uploadService: UploadService) {}
  @Post()
  @UseInterceptors(FileInterceptor('file', multerConfig))
  async store(@UploadedFile() file) {
    console.log(file);
    // return this.uploadService.store();
  }
}
