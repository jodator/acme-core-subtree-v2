export function fakeRequest(overrides = {}) {
  return { role: 'viewer', action: 'read', ...overrides };
}
