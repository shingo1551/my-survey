import { Component, h, Prop } from '@stencil/core';
import { push } from '../../shared/router';
import state from '../../shared/store';
import { attachTo } from '../material/material';

@Component({
  tag: 'app-page',
  styleUrl: 'app-survey.css',
  shadow: false,
})
export class AppPage {
  @Prop() page: number;
  el: HTMLDivElement;

  componentWillRender() {
    state.page = +this.page;
  }

  componentDidLoad() {
    attachTo(this.el);
  }

  onClick = () => {
    if (state.last) push('/complete');
    else push('/page/' + (this.page + 1));
  };

  render() {
    return (
      <div class="mdc-card my-card" ref={el => (this.el = el)}>
        <div class="mdc-card__content my-card-content">
          <h3>Page {this.page}</h3>
          <q-question question={state.question} />
          <mdc-button onClick={this.onClick}>next</mdc-button>
        </div>
      </div>
    );
  }
}
