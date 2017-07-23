import { Assignment7.1Page } from './app.po';

describe('assignment7.1 App', () => {
  let page: Assignment7.1Page;

  beforeEach(() => {
    page = new Assignment7.1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
