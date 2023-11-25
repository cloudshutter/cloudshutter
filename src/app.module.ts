import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PreviewController } from './preview/preview.controller';
import { PreviewService } from './preview/preview.service';
import { PreviewModule } from './preview/preview.module';

@Module({
  imports: [PreviewModule],
  controllers: [AppController, PreviewController],
  providers: [AppService, PreviewService],
})
export class AppModule {}
