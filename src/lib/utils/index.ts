import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * A utility for constructing and merging className values with Tailwind CSS.
 * This combines clsx (for conditional classes) with tailwind-merge (for handling Tailwind class conflicts).
 *
 * @param inputs - Any number of className values, objects, or arrays
 * @returns A merged className string optimized for Tailwind CSS
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Format a date string to a human-readable format.
 * 
 * @param dateString - The date string to format
 * @returns A formatted date string
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric'
  }).format(date);
}

/**
 * Truncate a string to a certain length and add ellipsis if needed.
 * 
 * @param str - The string to truncate
 * @param length - The maximum length
 * @returns The truncated string
 */
export function truncateString(str: string, length: number): string {
  if (str.length <= length) return str;
  return str.slice(0, length) + '...';
}
