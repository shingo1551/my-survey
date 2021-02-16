import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-header',
  shadow: false,
})
export class AppHeader {
  render() {
    return (
      <header class="mdc-top-app-bar mdc-top-app-bar--fixed">
        <div class="mdc-top-app-bar__row">
          <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
            <mdc-icon-button label="Download">menu</mdc-icon-button>
            <span class="mdc-top-app-bar__title">Survey Execute</span>
          </section>
          <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end">
            <mdc-icon-button label="Download">file_download</mdc-icon-button>
            <mdc-icon-button label="Print this page">print</mdc-icon-button>
            <mdc-icon-button label="Bookmark this page">bookmark</mdc-icon-button>
          </section>
        </div>
      </header>
    );
  }
}
