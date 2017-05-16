import { TinderForMoviesPage } from './app.po';

describe('tinder-for-movies App', () => {
  let page: TinderForMoviesPage;

  beforeEach(() => {
    page = new TinderForMoviesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
