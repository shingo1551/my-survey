import { Component, h, Host, Prop } from '@stencil/core';
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
    return (
      <Host>
        <h4>{this.question.html}</h4>
        {this.Q()}
      </Host>
    );
  }
}
