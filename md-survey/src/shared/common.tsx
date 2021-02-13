import { h } from '@stencil/core';

export const PreJson = prop => <pre>{JSON.stringify(prop.obj, null, '  ')}</pre>;
