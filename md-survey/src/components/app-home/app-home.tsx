import { Component, h, State } from '@stencil/core';
import { push } from '../../shared/router';
import state from '../../shared/store';
import { survey } from '../../shared/data';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: false,
})
export class AppHome {
  @State() text: string;
  el: HTMLMdcTextareaElement;

  async connectedCallback() {
    // const o = await (await fetch('./assets/surveys/survey.json')).json();
    // state.survey = o;
    state.survey = survey as any;
    this.text = JSON.stringify(state.survey, null, '  ');
  }

  onClick = async () => {
    state.survey = await this.el.getValue();
    push('/page/1');
  };

  render() {
    return (
      <div class="mdc-card my-card">
        <div class="mdc-card__content my-card-content">
          <mdc-textarea ref={el => (this.el = el)} value={this.text} rows={24} cols={48} />
          <p>アンケート定義(編集可)</p>
          <mdc-button onClick={this.onClick}>Click me!</mdc-button>
        </div>
      </div>
    );
  }
}

/*
  <a {...href('/profile/stencil')}>
    <mdc-button>Profile page</mdc-button>
  </a>
*/
