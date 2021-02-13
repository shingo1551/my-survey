import { Component, h } from '@stencil/core';
import { push } from '../../shared/router';
import state from '../../shared/store';

@Component({
  tag: 'app-complete',
  styleUrl: 'app-survey.css',
  shadow: false,
})
export class AppComplete {
  onClick = () => {
    state.complete = true;
    push('/');
  };

  render() {
    return (
      <div class="mdc-card my-card">
        <div class="mdc-card__content my-card-content">
          <h3>Completed.</h3>
          {state.survey.questions.map((q, i) => [<q-question question={q} name={'q-' + i} disabled={true} />, <hr />])}
          <mdc-button onClick={this.onClick}>top</mdc-button>
        </div>
      </div>
    );
  }
}
