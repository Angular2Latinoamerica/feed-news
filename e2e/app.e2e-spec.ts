import { FeedNewsPage } from './app.po';

describe('feed-news App', () => {
  let page: FeedNewsPage;

  beforeEach(() => {
    page = new FeedNewsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
