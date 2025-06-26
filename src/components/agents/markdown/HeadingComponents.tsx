// Heading components for markdown rendering
export const H1 = ({ children }: any) => (
  <h1 className="text-3xl font-bold mb-6 mt-8 text-gray-900 border-b border-gray-200 pb-2">
    {children}
  </h1>
);

export const H2 = ({ children }: any) => (
  <h2 className="text-2xl font-semibold mb-4 mt-6 text-gray-800">
    {children}
  </h2>
);

export const H3 = ({ children }: any) => (
  <h3 className="text-xl font-medium mb-3 mt-4 text-gray-700">
    {children}
  </h3>
);

export const H4 = ({ children }: any) => (
  <h4 className="text-lg font-medium mb-2 mt-3 text-gray-600">
    {children}
  </h4>
);

export const H5 = ({ children }: any) => (
  <h5 className="text-base font-medium mb-2 mt-2 text-gray-600">
    {children}
  </h5>
);

export const H6 = ({ children }: any) => (
  <h6 className="text-sm font-medium mb-1 mt-2 text-gray-500 uppercase tracking-wide">
    {children}
  </h6>
);
