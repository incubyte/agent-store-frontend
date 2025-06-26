import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { markdownComponents } from "./markdown/markdownComponents";

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

export const MarkdownRenderer = ({
  content,
  className = "",
}: MarkdownRendererProps) => {
  return (
    <div className={`
      prose prose-lg max-w-none 
      bg-white 
      p-8 
      rounded-lg 
      shadow-sm 
      border border-gray-200
      text-gray-900
      leading-relaxed
      ${className}
    `}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={markdownComponents}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};
