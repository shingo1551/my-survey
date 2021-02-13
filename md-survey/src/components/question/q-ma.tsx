import { Component, h, Prop, State, Event, EventEmitter } from '@stencil/core';
import { MA } from '../../shared/interface';

@Component({
  tag: 'q-ma',
  styleUrl: 'question.css',
  shadow: false,
})
export class QMA {
  @Event({ bubbles: true }) valid: EventEmitter<boolean>;
  @Prop() q: MA;
  @Prop() disabled = false;
  @State() c: boolean[];
  @State() t: string[];

  componentWillRender() {
    this.init();
  }

  init = () => {
    const q = this.q;

    this.c = Array(q.selections.length).fill(false);
    this.t = Array(q.selections.length).fill(null);

    if (!q.answers) q.answers = [];
    else
      q.answers.forEach(a => {
        const i = a.value - 1;
        this.c[i] = true;
        this.t[i] = a.text;
      });

    this.validation();
  };

  onClick = (n: number) => {
    if (this.disabled) return;

    this.c[n] = !this.c[n];
    this.c = [...this.c];
    this.setAnswer();

    this.validation();
  };

  private setAnswer = () => {
    this.q.answers = [];
    this.c.forEach((c, i) => {
      if (c) this.q.answers.push({ value: i + 1, text: this.t[i] });
    });
  };

  validation = () => this.valid.emit(this.q.min <= this.q.answers.length);

  render() {
    return (
      <ol>
        {this.q.selections.map((s, i) => (
          <li>
            <label>
              <mdc-checkbox checked={this.c[i]} onClick={() => this.onClick(i)} disabled={this.disabled} />
              {s.html}
            </label>
          </li>
        ))}
      </ol>
    );
  }
}
