// List components for markdown rendering
export const UnorderedList = ({ children }: any) => (
  <ul className="mb-4 pl-6 space-y-1 list-disc">
    {children}
  </ul>
);

export const OrderedList = ({ children }: any) => (
  <ol className="mb-4 pl-6 space-y-1 list-decimal">
    {children}
  </ol>
);

export const ListItem = ({ children }: any) => (
  <li className="text-gray-700 leading-relaxed">
    {children}
  </li>
);
