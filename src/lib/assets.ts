/** Prefix public asset paths with the Vite base (GitHub Project Pages path). */
export function asset(path: string): string {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
}
