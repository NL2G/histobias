/** Supports GitHub project Pages (/repository/) and root-domain hosting. */
export function assetPath(path: string): string {
  return `${process.env.NEXT_PUBLIC_BASE_PATH || ""}${path}`;
}
