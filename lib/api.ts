// Public API base; falls back to provided backend URL for convenience
export const API_BASE = process.env.NEXT_PUBLIC_API_BASE || 'https://ad-marketing-engine.onrender.com'

export function requireApiBase(): string {
  // With the fallback above, this should always be defined.
  // If you prefer strict env usage, remove the fallback and keep this error.
  return API_BASE
}

export async function apiFetch(path: string, init?: RequestInit) {
  const base = requireApiBase()
  const url = `${base}${path}`
  const res = await fetch(url, { mode: 'cors', ...init })
  return res
}
