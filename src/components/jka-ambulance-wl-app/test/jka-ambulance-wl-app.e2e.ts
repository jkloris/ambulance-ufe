import { newE2EPage } from '@stencil/core/testing';

describe('jka-ambulance-wl-app', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<jka-ambulance-wl-app></jka-ambulance-wl-app>');

    const element = await page.find('jka-ambulance-wl-app');
    expect(element).toHaveClass('hydrated');
  });
});
