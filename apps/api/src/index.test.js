import { test } from 'node:test';
import assert from 'node:assert/strict';
import { handle } from './index.js';
import { fakeRequest } from '@acme/test-utils';

test('denies viewer writes', () => {
  assert.equal(handle(fakeRequest({ role: 'viewer', action: 'write' })).status, 403);
});
test('allows admin writes', () => {
  assert.equal(handle(fakeRequest({ role: 'admin', action: 'write' })).status, 200);
});
test('unknown route is 404 before any permission check', () => {
  const response = handle(fakeRequest({ role: 'admin', method: 'GET', path: '/nope' }));
  assert.equal(response.status, 404);
  assert.deepEqual(response.body, { error: 'not found' });
});
