import { newSpecPage } from '@stencil/core/testing';
import { JkaAmbulanceWlList } from '../jka-ambulance-wl-list';

describe('jka-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JkaAmbulanceWlList],
      html: `<jka-ambulance-wl-list></jka-ambulance-wl-list>`,
    });
    const wlList = page.rootInstance as JkaAmbulanceWlList;
    const expectedPatients = wlList?.waitingPatients?.length

    const items = page.root.shadowRoot.querySelectorAll("md-list-item");
    expect(items.length).toEqual(expectedPatients);
  });
});
