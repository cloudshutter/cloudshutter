import { Body, Controller, Post } from '@nestjs/common';
import { PreviewService } from './preview.service';
import { CreatePreviewDto } from './dto/create-preview.dto';
import { AjaxResult } from 'src/shared/utils/ajax-result';

@Controller('preview')
export class PreviewController {
  constructor(private readonly previewService: PreviewService) {}

  @Post()
  async getPreview(@Body() previewBody: CreatePreviewDto) {
    const imageBuffer = await this.previewService.generateWebsitePre(
      previewBody.url,
    );
    return AjaxResult.success(imageBuffer);
  }
}
