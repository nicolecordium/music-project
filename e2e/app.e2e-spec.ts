import { MUSICPROJECTPage } from './app.po';

describe('music-project App', () => {
  let page: MUSICPROJECTPage;

  beforeEach(() => {
    page = new MUSICPROJECTPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
