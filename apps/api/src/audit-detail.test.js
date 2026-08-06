import { test } from 'node:test';
import assert from 'node:assert/strict';
import { auditDetail } from './audit-detail.js';

test('annotates an entry with its severity', () => {
  assert.equal(auditDetail({ actor: 'a', action: 'rotate-keys' }).severity, 'critical');
});
test('keeps the original fields', () => {
  assert.equal(auditDetail({ actor: 'a', action: 'read' }).actor, 'a');
});
