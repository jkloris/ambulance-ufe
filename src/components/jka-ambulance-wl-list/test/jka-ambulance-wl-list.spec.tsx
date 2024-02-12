import { newSpecPage } from '@stencil/core/testing';
import { JkaAmbulanceWlList } from '../jka-ambulance-wl-list';

describe('jka-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JkaAmbulanceWlList],
      html: `<jka-ambulance-wl-list></jka-ambulance-wl-list>`,
    });
    expect(page.root).toEqualHtml(`
      <jka-ambulance-wl-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </jka-ambulance-wl-list>
    `);
  });
});
