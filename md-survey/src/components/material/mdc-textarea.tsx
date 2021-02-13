import { Component, h, Prop, Method, Event, EventEmitter } from '@stencil/core';
import { attachTo } from './material';

@Component({
  tag: 'mdc-textarea',
  shadow: false,
})
export class MdcTextArea {
  @Prop() value: string;
  @Prop() placeholder: string;
  @Prop() disabled = false;
  @Prop() rows = 24;
  @Prop() cols = 48;
  @Event() text: EventEmitter<string>;
  el1: HTMLLabelElement;
  el2: HTMLTextAreaElement;

  componentDidLoad() {
    attachTo(this.el1);
    attachTo(this.el2);
  }

  @Method()
  async getValue() {
    return JSON.parse(this.el2.value);
  }

  onKeyUp = (_e: KeyboardEvent) => {
    this.text.emit(this.el2.value);
  };

  render() {
    return (
      <div>
        <label ref={el => (this.el1 = el)} class="mdc-text-field mdc-text-field--outlined mdc-text-field--textarea mdc-text-field--no-label">
          <span class="mdc-notched-outline">
            <span class="mdc-notched-outline__leading"></span>
            <span class="mdc-notched-outline__trailing"></span>
          </span>
          <span class="mdc-text-field__resizer">
            <textarea
              class="mdc-text-field__input"
              ref={el => (this.el2 = el)}
              placeholder={this.placeholder}
              rows={this.rows}
              cols={this.cols}
              onKeyUp={this.onKeyUp}
              disabled={this.disabled}
              value={this.value}
            />
          </span>
        </label>
      </div>
    );
  }
}

/*
  <input
    type="text"
    class="mdc-text-field__input"
    ref={el => (this.el = el)}
    placeholder={this.placeholder}
    value={this.value}
    onKeyUp={this.onKeyUp}
    disabled={this.disabled}
  />
*/
