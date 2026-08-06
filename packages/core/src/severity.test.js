import { test } from 'node:test';
import assert from 'node:assert/strict';
import { severityFor, SEVERITIES } from './severity.js';

test('key rotation is critical', () => assert.equal(severityFor('rotate-keys'), 'critical'));
test('writes are warnings', () => assert.equal(severityFor('write'), 'warn'));
test('reads are informational', () => assert.equal(severityFor('read'), 'info'));
test('every level is declared', () => assert.ok(SEVERITIES.includes(severityFor('delete'))));
