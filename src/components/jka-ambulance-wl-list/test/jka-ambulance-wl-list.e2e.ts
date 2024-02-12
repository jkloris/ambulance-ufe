import { newE2EPage } from '@stencil/core/testing';

describe('jka-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<jka-ambulance-wl-list></jka-ambulance-wl-list>');

    const element = await page.find('jka-ambulance-wl-list');
    expect(element).toHaveClass('hydrated');
  });
});
