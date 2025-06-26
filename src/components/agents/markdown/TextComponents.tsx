// Text formatting components for markdown rendering
export const Paragraph = ({ children }: any) => (
  <p className="mb-4 leading-relaxed text-gray-700">
    {children}
  </p>
);

export const Strong = ({ children }: any) => (
  <strong className="font-semibold text-gray-900">
    {children}
  </strong>
);

export const Emphasis = ({ children }: any) => (
  <em className="italic text-gray-800">
    {children}
  </em>
);

export const Blockquote = ({ children }: any) => (
  <blockquote className="border-l-4 border-blue-400 pl-4 py-2 mb-4 bg-blue-50 text-gray-700 italic">
    {children}
  </blockquote>
);

export const HorizontalRule = () => (
  <hr className="my-8 border-t border-gray-300" />
);

export const Link = ({ href, children }: any) => (
  <a 
    href={href} 
    className="text-blue-600 hover:text-blue-800 underline transition-colors"
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
);
