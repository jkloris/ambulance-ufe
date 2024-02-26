import { newE2EPage } from '@stencil/core/testing';

describe('jka-ambulance-wl-editor', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<jka-ambulance-wl-editor></jka-ambulance-wl-editor>');

    const element = await page.find('jka-ambulance-wl-editor');
    expect(element).toHaveClass('hydrated');
  });
});
