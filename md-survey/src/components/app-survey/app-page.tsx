import { Component, h, Prop, State, Listen } from '@stencil/core';
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
  @State() disabled = false;

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

  @Listen('valid')
  onValid(e: CustomEvent) {
    this.disabled = !e.detail;
  }

  render() {
    return (
      <div class="mdc-card my-card" ref={el => (this.el = el)}>
        <div class="mdc-card__content my-card-content">
          <h3>Page {this.page}</h3>
          <q-question question={state.question} />
          <mdc-button onClick={this.onClick} disabled={this.disabled}>
            next
          </mdc-button>
        </div>
      </div>
    );
  }
}
