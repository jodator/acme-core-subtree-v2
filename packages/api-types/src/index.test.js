import { test } from 'node:test';
import assert from 'node:assert/strict';
import { ROUTES } from './index.js';

test('routes are listed', () => assert.ok(ROUTES.includes('GET /health')));
