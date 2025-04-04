declare module 'sugar-high' {
  /**
   * Syntax highlights the given code string and returns HTML string with highlighted tokens
   * 
   * @param code The code to highlight
   * @param options Optional configuration options
   * @returns HTML string with highlighted syntax
   */
  export function highlight(code: string, options?: HighlightOptions): string;

  export interface HighlightOptions {
    /**
     * The theme to use for highlighting
     */
    theme?: 'light' | 'dark';
  }
} 