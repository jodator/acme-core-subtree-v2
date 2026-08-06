import { severityFor } from '@acme/core';

export function auditDetail(entry) {
  return { ...entry, severity: severityFor(entry.action) };
}
