import { handle } from './index.js';
import { ROUTES } from './routes.js';
import { SCHEMA_VERSION } from '@acme/api-types';

const probe = handle({ role: 'admin', action: 'write', method: 'POST', path: '/policy' });
if (probe.status !== 200) {
  process.stderr.write(`boot failed: ${JSON.stringify(probe)}\n`);
  process.exit(1);
}
process.stdout.write(`acme-core up: schema=${SCHEMA_VERSION} routes=${ROUTES.length}\n`);
