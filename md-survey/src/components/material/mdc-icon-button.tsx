import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'mdc-icon-button',
  shadow: false,
})
export class MdcIconButton {
  @Prop() label = '';
  @Prop() disabled = false;

  render() {
    return (
      <button class="mdc-icon-button material-icons mdc-ripple-upgraded--unbounded mdc-ripple-upgraded" aria-label={this.label}>
        <slot />
      </button>
    );
  }
}

/*
mdc-icon-button material-icons mdc-ripple-upgraded--unbounded mdc-ripple-upgraded

mdc-top-app-bar__navigation-icon
mdc-top-app-bar__action-item
*/
