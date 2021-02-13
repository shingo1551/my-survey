import { Component, h, Prop } from '@stencil/core';
import { attachTo } from './material';

@Component({
  tag: 'mdc-button',
  shadow: false,
})
export class MdcButton {
  @Prop() disabled = false;
  el: HTMLButtonElement;

  componentDidLoad() {
    attachTo(this.el);
  }

  render() {
    return (
      <button class="mdc-button mdc-button--raised" ref={el => (this.el = el)} disabled={this.disabled}>
        <div class="mdc-button__ripple"></div>
        <span class="mdc-button__label">
          <slot />
        </span>
      </button>
    );
  }
}
