import { Component, h } from '@stencil/core';
import { Route, match } from 'stencil-router-v2';
import { base, Router } from '../../shared/router';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: false,
})
export class AppRoot {
  render() {
    return (
      <main>
        <Router.Switch>
          <Route path={base + '/'}>
            <app-home />
          </Route>
          <Route path={base + '/survey'}>
            <app-survey />
          </Route>
          <Route path={base + '/complete'}>
            <app-complete />
          </Route>
          <Route path={match(base + '/page/:n')} render={({ n }) => <app-page page={+n} />} />
          <Route path={match(base + '/profile/:name')} render={({ name }) => <app-profile name={name} />} />
        </Router.Switch>
      </main>
    );
  }
}
