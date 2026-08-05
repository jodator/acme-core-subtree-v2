import { can } from '@acme/core';
import { ROUTES } from './routes.js';

export function handle(request) {
  if (!ROUTES.includes(`${request.method ?? 'GET'} ${request.path ?? '/health'}`)) {
    return { status: 404, body: { error: 'not found' } };
  }
  if (!can(request.role, request.action)) return { status: 403, body: { error: 'forbidden' } };
  return { status: 200, body: { ok: true } };
}
