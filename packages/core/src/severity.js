export const SEVERITIES = ['info', 'warn', 'critical'];

export function severityFor(action) {
  if (action === 'rotate-keys' || action === 'delete') return 'critical';
  if (action === 'write') return 'warn';
  return 'info';
}
