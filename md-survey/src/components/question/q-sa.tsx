import { Component, h, Prop, State } from '@stencil/core';
import { SA } from '../../shared/interface';

@Component({
  tag: 'q-sa',
  styleUrl: 'question.css',
  shadow: false,
})
export class QSA {
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
  };

  onRadio = (n: number) => {
    this.n = n;
    this.q.answer.value = this.n;
  };

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
