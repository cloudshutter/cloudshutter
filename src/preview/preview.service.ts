import { Injectable } from '@nestjs/common';
import { chromium, ChromiumBrowser, Page } from 'playwright';
import * as fs from 'fs';

@Injectable()
export class PreviewService {
  public browser: ChromiumBrowser;
  public page: Page;

  async onModuleInit() {
    this.browser = await chromium.launch();
    this.page = await this.browser.newPage();
  }

  async onModuleDestroy() {
    await this.browser.close();
  }

  async generateWebsitePre(url: string) {
    await this.page.goto(url);
    const snapshot = await this.page.screenshot();
    return snapshot;
  }
}
