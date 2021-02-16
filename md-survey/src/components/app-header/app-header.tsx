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
            <button class="mdc-icon-button material-icons mdc-top-app-bar__navigation-icon mdc-ripple-upgraded--unbounded mdc-ripple-upgraded">menu</button>
            <span class="mdc-top-app-bar__title">Survey Execute</span>
          </section>
          <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end">
            <button class="mdc-icon-button material-icons mdc-top-app-bar__action-item mdc-ripple-upgraded--unbounded mdc-ripple-upgraded" aria-label="Download">
              file_download
            </button>
            <button class="mdc-icon-button material-icons mdc-top-app-bar__action-item mdc-ripple-upgraded--unbounded mdc-ripple-upgraded" aria-label="Print this page">
              print
            </button>
            <button class="mdc-icon-button material-icons mdc-top-app-bar__action-item mdc-ripple-upgraded--unbounded mdc-ripple-upgraded" aria-label="Bookmark this page">
              bookmark
            </button>
          </section>
        </div>
      </header>
    );
  }
}
