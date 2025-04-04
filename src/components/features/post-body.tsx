"use client";

import markdownStyles from "./markdown-styles.module.css";
import { MdxContent } from "./mdx-content";
import { MDXRemoteSerializeResult } from "next-mdx-remote";

type Props = {
  content: string | MDXRemoteSerializeResult;
  isMdx?: boolean;
};

export function PostBody({ content, isMdx = false }: Props) {
  return (
    <div className="max-w-2xl mx-auto">
      {isMdx ? (
        <MdxContent source={content as MDXRemoteSerializeResult} />
      ) : (
        <div
          className={markdownStyles["markdown"]}
          dangerouslySetInnerHTML={{ __html: content as string }}
        />
      )}
    </div>
  );
}
