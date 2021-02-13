import { Component, h, Prop, State, Event, EventEmitter } from '@stencil/core';
import { SA } from '../../shared/interface';

@Component({
  tag: 'q-sa',
  styleUrl: 'question.css',
  shadow: false,
})
export class QSA {
  @Event({ bubbles: true }) valid: EventEmitter<boolean>;
  @Prop() q: SA;
  @Prop() name: string;
  @Prop() disabled = false;
  @State() n: number;

  componentWillRender() {
    this.init();
  }

  private init = () => {
    if (!this.q.answer) this.q.answer = { value: 0 };
    this.n = this.q.answer.value;
    this.validation();
  };

  onRadio = (n: number) => {
    this.n = n;
    this.q.answer.value = this.n;
    this.validation();
  };

  validation = () => this.valid.emit(!this.q.required || !!this.n);

  render() {
    return (
      <ol>
        {this.q.selections.map((s, i) => (
          <li>
            <label>
              <mdc-radio name={this.name} checked={i + 1 === this.n} onClick={() => this.onRadio(i + 1)} disabled={this.disabled} />
              {s.html}
            </label>
          </li>
        ))}
      </ol>
    );
  }
}
