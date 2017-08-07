import { AdvantageHousingPage } from './app.po';

describe('advantage-housing App', () => {
  let page: AdvantageHousingPage;

  beforeEach(() => {
    page = new AdvantageHousingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
