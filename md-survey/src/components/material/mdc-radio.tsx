import { Component, h, Prop } from '@stencil/core';
import { attachTo } from './material';

@Component({
  tag: 'mdc-radio',
  shadow: false,
})
export class MdcRadio {
  @Prop() name: string;
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
        <div class="mdc-radio" ref={el => (this.el2 = el)}>
          <input class="mdc-radio__native-control" type="radio" name={this.name} checked={this.checked} disabled={this.disabled} />
          <div class="mdc-radio__background">
            <div class="mdc-radio__outer-circle"></div>
            <div class="mdc-radio__inner-circle"></div>
          </div>
          <div class="mdc-radio__ripple"></div>
        </div>
      </div>
    );
  }
}
