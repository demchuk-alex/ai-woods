"use client";

import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import Editor from '@monaco-editor/react';

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

  const handleEditorChange = (value: string | undefined) => {
    setValue(value || "");
  };

  return (
    <div className={cn("rounded-md border p-4", className)}>
      <div className="mb-2 text-sm text-muted-foreground">
        Interactive example
      </div>
      <div className="space-y-4">
        {children}
        <div className="h-[200px] border rounded-md overflow-hidden">
          <Editor
            height="100%"
            defaultLanguage={language}
            defaultValue={defaultValue}
            value={value}
            onChange={handleEditorChange}
            theme="vs-dark"
            options={{
              minimap: { enabled: false },
              fontSize: 14,
              lineNumbers: 'on',
              scrollBeyondLastLine: false,
              automaticLayout: true,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default CodeExample; 