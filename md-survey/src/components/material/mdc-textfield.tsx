import { Component, h, Host, Prop, Event, EventEmitter } from '@stencil/core';
import { attachTo } from './material';

@Component({
  tag: 'mdc-textfield',
  shadow: false,
})
export class MdcTextField {
  @Prop() placeholder: string;
  @Prop() value: string;
  @Prop() disabled = false;
  @Event() text: EventEmitter<string>;
  el: HTMLInputElement;

  componentDidLoad() {
    attachTo(this.el);
  }

  onKeyUp = (_e: KeyboardEvent) => {
    this.text.emit(this.el.value);
  };

  render() {
    return (
      <Host>
        <label class="mdc-text-field mdc-text-field--filled mdc-text-field--no-label">
          <input
            type="text"
            class="mdc-text-field__input mdc-text-field--outlined"
            ref={el => (this.el = el)}
            placeholder={this.placeholder}
            value={this.value}
            onKeyUp={this.onKeyUp}
            disabled={this.disabled}
          />
        </label>
      </Host>
    );
  }
}
