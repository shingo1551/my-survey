import { Component, h, Host, Prop, State } from '@stencil/core';
import { Question } from '../../shared/interface';

@Component({
  tag: 'q-question',
  styleUrl: 'question.css',
  shadow: false,
})
export class QQuestion {
  @Prop() question: Question;
  @Prop() name: string;
  @Prop() disabled = false;
  @State() required: boolean;
  @State() note: string;

  componentWillRender() {
    this.init();
  }

  private init = () => {
    const q = this.question;

    switch (q.type) {
      case 'fa':
        this.required = q.required;
        this.note = q.required ? '必須です' : null;
        break;
      case 'sa':
        this.required = q.required;
        this.note = q.required ? '必須です' : null;
        break;
      case 'ma':
        this.required = !!q.min;
        this.note = q.min ? `${q.min}以上選択してください` : null;
        break;
    }
  };

  Q = () => {
    const q = this.question;

    switch (q.type) {
      case 'fa':
        return <q-fa q={q} disabled={this.disabled} />;
      case 'sa':
        return <q-sa q={q} name={this.name} disabled={this.disabled} />;
      case 'ma':
        return <q-ma q={q} disabled={this.disabled} />;
    }
  };

  render() {
    const note = this.disabled ? null : this.note;

    return (
      <Host>
        <h4>
          {this.question.html}
          {this.required ? <span class="required">*</span> : ''}
        </h4>
        {this.Q()}
        <div class="note">{note}</div>
      </Host>
    );
  }
}
