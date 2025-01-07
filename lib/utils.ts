import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function copyToClipboardUtil(text: string) {
  await navigator.clipboard.writeText(text);
}

export function truncateTokenName(name: string) {
  return name.length > 10 ? name.slice(0, 10) + '...' : name;
}