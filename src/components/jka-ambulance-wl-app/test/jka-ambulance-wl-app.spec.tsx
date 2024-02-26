import { newSpecPage } from '@stencil/core/testing';
import { JkaAmbulanceWlApp } from '../jka-ambulance-wl-app';

describe('jka-ambulance-wl-app', () => {

  it('renders editor', async () => {
    const page = await newSpecPage({
      url: `http://localhost/entry/@new`,
      components: [JkaAmbulanceWlApp],
      html: `<jka-ambulance-wl-app base-path="/"></jka-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual ("jka-ambulance-wl-editor");

  });

  it('renders list', async () => {
    const page = await newSpecPage({
      url: `http://localhost/ambulance-wl/`,
      components: [JkaAmbulanceWlApp],
      html: `<jka-ambulance-wl-app base-path="/ambulance-wl/"></jka-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual("jka-ambulance-wl-list");
  });
});