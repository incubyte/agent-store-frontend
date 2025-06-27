// Enhanced heading components for professional markdown rendering
export const H1 = ({ children }: any) => (
  <h1 className="text-4xl font-bold mb-8 mt-10 text-gray-900 border-b-2 border-gray-300 pb-4 leading-tight">
    {children}
  </h1>
);

export const H2 = ({ children }: any) => (
  <h2 className="text-3xl font-semibold mb-6 mt-8 text-gray-800 border-b border-gray-200 pb-2 leading-tight">
    {children}
  </h2>
);

export const H3 = ({ children }: any) => (
  <h3 className="text-2xl font-semibold mb-4 mt-6 text-gray-700 leading-tight">
    {children}
  </h3>
);

export const H4 = ({ children }: any) => (
  <h4 className="text-xl font-medium mb-3 mt-5 text-gray-700 leading-tight">
    {children}
  </h4>
);

export const H5 = ({ children }: any) => (
  <h5 className="text-lg font-medium mb-3 mt-4 text-gray-600 leading-tight">
    {children}
  </h5>
);

export const H6 = ({ children }: any) => (
  <h6 className="text-base font-medium mb-2 mt-3 text-gray-600 uppercase tracking-wide leading-tight">
    {children}
  </h6>
);
