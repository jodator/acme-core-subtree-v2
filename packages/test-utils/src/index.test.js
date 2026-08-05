import { test } from 'node:test';
import assert from 'node:assert/strict';
import { fakeRequest } from './index.js';

test('defaults to viewer', () => assert.equal(fakeRequest().role, 'viewer'));
