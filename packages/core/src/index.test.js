import { test } from 'node:test';
import assert from 'node:assert/strict';
import { can } from './index.js';

test('viewer reads', () => assert.equal(can('viewer', 'read'), true));
test('viewer cannot write', () => assert.equal(can('viewer', 'write'), false));
test('admin writes', () => assert.equal(can('admin', 'write'), true));
test('missing role is denied', () => {
  assert.equal(can(null, 'read'), false);
  assert.equal(can(undefined, 'read'), false);
});
test('unknown role is denied', () => assert.equal(can('root', 'read'), false));
