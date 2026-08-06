import { test } from 'node:test';
import assert from 'node:assert/strict';
import { handle } from './index.js';
import { fakeRequest } from '@acme/test-utils';

test('GET /audit is routed for an operator', () => {
  const res = handle(fakeRequest({ role: 'operator', action: 'read', method: 'GET', path: '/audit' }));
  assert.equal(res.status, 200);
});

test('unknown routes still 404', () => {
  const res = handle(fakeRequest({ role: 'admin', action: 'read', method: 'GET', path: '/nope' }));
  assert.equal(res.status, 404);
});
