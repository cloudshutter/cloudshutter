import { Body, Controller, Header, Post, Res } from '@nestjs/common';
import { PreviewService } from './preview.service';
import { CreatePreviewDto } from './dto/create-preview.dto';

@Controller('preview')
export class PreviewController {
  constructor(private readonly previewService: PreviewService) {}

  @Header('Content-Type', 'image/png')
  @Post()
  async getPreview(@Res() res, @Body() previewBody: CreatePreviewDto) {
    const imageBuffer = await this.previewService.generateWebsitePre(
      previewBody.url,
    );
    res.send(imageBuffer);
    return;
  }
}
