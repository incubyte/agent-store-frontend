// Enhanced text formatting components for professional markdown rendering
export const Paragraph = ({ children }: any) => (
  <p className="mb-5 leading-relaxed text-gray-700 text-base">
    {children}
  </p>
);

export const Strong = ({ children }: any) => (
  <strong className="font-bold text-gray-900">
    {children}
  </strong>
);

export const Emphasis = ({ children }: any) => (
  <em className="italic text-gray-800">
    {children}
  </em>
);

export const Blockquote = ({ children }: any) => (
  <blockquote className="border-l-4 border-blue-500 pl-6 py-4 mb-6 bg-blue-50 text-gray-700 italic rounded-r-lg shadow-sm">
    {children}
  </blockquote>
);

export const HorizontalRule = () => (
  <hr className="my-12 border-t-2 border-gray-300" />
);

export const Link = ({ href, children }: any) => (
  <a 
    href={href} 
    className="text-blue-600 hover:text-blue-800 underline decoration-2 underline-offset-2 transition-colors font-medium"
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
);
