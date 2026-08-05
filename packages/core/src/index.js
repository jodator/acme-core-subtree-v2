export const ROLES = ['viewer', 'operator', 'admin'];

export function can(role, action) {
  const rank = ROLES.indexOf(role);
  if (rank < 0) return false;
  return rank >= ROLES.indexOf(action === 'read' ? 'viewer' : 'operator');
}
