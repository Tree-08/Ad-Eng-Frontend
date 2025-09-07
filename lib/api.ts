export const API_BASE = process.env.NEXT_PUBLIC_API_BASE

export function requireApiBase(): string {
  if (!API_BASE) {
    throw new Error('NEXT_PUBLIC_API_BASE is not set. Configure it in Vercel project settings or .env.local.')
  }
  return API_BASE
}

export async function apiFetch(path: string, init?: RequestInit) {
  const base = requireApiBase()
  const url = `${base}${path}`
  const res = await fetch(url, { mode: 'cors', ...init })
  return res
}

