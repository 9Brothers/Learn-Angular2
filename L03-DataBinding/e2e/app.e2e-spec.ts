import { L03DataBindingPage } from './app.po';

describe('l03-data-binding App', () => {
  let page: L03DataBindingPage;

  beforeEach(() => {
    page = new L03DataBindingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
