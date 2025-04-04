"use client";

import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface CodeExampleProps {
  defaultValue?: string;
  children?: React.ReactNode;
  language?: string;
  className?: string;
}

export function CodeExample({
  defaultValue = "",
  children,
  language = "tsx",
  className,
}: CodeExampleProps) {
  const [value, setValue] = useState(defaultValue);
  
  return (
    <div className={cn("rounded-md border p-4", className)}>
      <div className="mb-2 text-sm text-muted-foreground">
        Interactive example
      </div>
      <div className="space-y-4">
        {children}
        <pre className={`language-${language} rounded-md bg-muted p-4`}>
          <code className={`language-${language}`}>
            {value || defaultValue || "// Your code here"}
          </code>
        </pre>
      </div>
    </div>
  );
}

export default CodeExample; 