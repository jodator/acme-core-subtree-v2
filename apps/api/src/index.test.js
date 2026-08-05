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
