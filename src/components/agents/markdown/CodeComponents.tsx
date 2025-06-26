import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

// Enhanced code components for professional markdown rendering
export const Code = ({ node, inline, className, children, ...props }: any) => {
  const match = /language-(\w+)/.exec(className || "");
  return !inline && match ? (
    <div className="mb-6">
      <SyntaxHighlighter
        style={oneDark}
        language={match[1]}
        PreTag="div"
        className="rounded-lg shadow-lg border border-gray-300"
        {...props}
      >
        {String(children).replace(/\n$/, "")}
      </SyntaxHighlighter>
    </div>
  ) : (
    <code className="bg-gray-100 text-gray-800 px-2 py-1 rounded-md text-sm font-mono border border-gray-200">
      {children}
    </code>
  );
};

export const Pre = ({ children }: any) => (
  <pre className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto mb-6 text-sm shadow-lg border border-gray-700">
    {children}
  </pre>
);
