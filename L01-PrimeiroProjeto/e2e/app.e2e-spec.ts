import { L01PrimeiroProjetoPage } from './app.po';

describe('l01-primeiro-projeto App', () => {
  let page: L01PrimeiroProjetoPage;

  beforeEach(() => {
    page = new L01PrimeiroProjetoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
