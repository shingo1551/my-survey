import { Component, h, Prop, State } from '@stencil/core';
import { FA } from '../../shared/interface';

@Component({
  tag: 'q-fa',
  styleUrl: 'question.css',
  shadow: false,
})
export class QFA {
  @Prop() q: FA;
  @Prop() disabled = false;
  @State() t: string;

  componentWillRender() {
    this.init();
  }

  private init = () => {
    if (!this.q.answer) this.q.answer = { text: null };
    this.t = this.q.answer.text;
  };

  onKeyup = (e: CustomEvent) => {
    this.t = e.detail;
    this.q.answer.text = this.t;
  };

  render() {
    const q = this.q;
    return (
      <div>
        <mdc-textarea placeholder={q.placeholder} value={this.t} rows={4} cols={48} onText={this.onKeyup} disabled={this.disabled} />
      </div>
    );
  }
}

/*
  <mdc-textfield placeholder={q.placeholder} value={this.t} onText={this.onKeyup} disabled={this.disabled} />
*/
