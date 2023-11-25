import { Injectable } from '@nestjs/common';
import { chromium, ChromiumBrowser, Page } from 'playwright';

@Injectable()
export class PreviewService {
  public browser: ChromiumBrowser;
  public page: Page;

  async onModuleInit() {
    this.browser = await chromium.launch();
    this.page = await this.browser.newPage();
  }

  async onModuleDestroy() {
    console.log('closing browser');
    await this.browser.close();
  }

  async generateWebsitePre(url: string) {
    await this.page.goto(url);
    await this.page.setViewportSize({ width: 1280, height: 720 });
    const snapshot = await this.page.screenshot();
    return snapshot;
  }
}
