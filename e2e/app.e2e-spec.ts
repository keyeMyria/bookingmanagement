import { Bm2Page } from './app.po';

describe('bm2 App', () => {
  let page: Bm2Page;

  beforeEach(() => {
    page = new Bm2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
