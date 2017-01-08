import { L04DiretivasPage } from './app.po';

describe('l04-diretivas App', function() {
  let page: L04DiretivasPage;

  beforeEach(() => {
    page = new L04DiretivasPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
