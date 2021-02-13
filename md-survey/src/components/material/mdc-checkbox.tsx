import { Component, h, Prop } from '@stencil/core';
import { attachTo } from './material';

@Component({
  tag: 'mdc-checkbox',
  shadow: false,
})
export class MdcCheckBox {
  @Prop() checked: boolean;
  @Prop() disabled = false;
  el1: HTMLDivElement;
  el2: HTMLDivElement;

  componentDidLoad() {
    const f = attachTo(this.el1);
    const r = attachTo(this.el2);
    f.input = r;
  }

  render() {
    return (
      <div class="mdc-form-field" ref={el => (this.el1 = el)}>
        <div class="mdc-checkbox" ref={el => (this.el2 = el)}>
          <input type="checkbox" class="mdc-checkbox__native-control" checked={this.checked} disabled={this.disabled} />
          <div class="mdc-checkbox__background">
            <svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
              <path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59" />
            </svg>
            <div class="mdc-checkbox__mixedmark"></div>
          </div>
          <div class="mdc-checkbox__ripple"></div>
        </div>
      </div>
    );
  }
}
