// Enhanced list components for professional markdown rendering
export const UnorderedList = ({ children }: any) => (
  <ul className="mb-6 pl-7 space-y-2 list-disc marker:text-gray-500">
    {children}
  </ul>
);

export const OrderedList = ({ children }: any) => (
  <ol className="mb-6 pl-7 space-y-2 list-decimal marker:text-gray-500 marker:font-medium">
    {children}
  </ol>
);

export const ListItem = ({ children }: any) => (
  <li className="text-gray-700 leading-relaxed text-base pl-1">
    {children}
  </li>
);
