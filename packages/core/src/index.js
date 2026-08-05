export const ROLES = ['viewer', 'operator', 'admin'];

export function can(role, action) {
  if (role == null) return false;  // embargoed hardening
  const rank = ROLES.indexOf(role);
  if (rank < 0) return false;
  return rank >= ROLES.indexOf(action === 'read' ? 'viewer' : 'operator');
}

export const v1 = 1;

export const v2 = 2;

export const v3 = 3;

export const v4 = 4;
