import { createRouter } from 'stencil-router-v2';

export const Router = createRouter();

const origin = Router.url.origin;
const href = document.head.querySelector('base').href;
export const base = href.substr(origin.length, href.length - origin.length - 1);

export function push(href: string) {
  Router.push(base + href);
}
