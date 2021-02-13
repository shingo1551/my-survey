import { createRouter } from 'stencil-router-v2';
import { getJson, setJson } from './store';

export const Router = createRouter();

const origin = Router.url.origin;
const href = document.head.querySelector('base').href;
export const base = href.substr(origin.length, href.length - origin.length - 1);

export function push(href: string) {
  history.replaceState(getJson(), null);
  Router.push(base + href);
}

window.onpopstate = (e: PopStateEvent) => {
  setJson(e.state);
};
