// Table components for markdown rendering
export const Table = ({ children }: any) => (
  <div className="overflow-x-auto mb-6">
    <table className="min-w-full border border-gray-200 bg-white">
      {children}
    </table>
  </div>
);

export const TableHead = ({ children }: any) => (
  <thead className="bg-gray-50">
    {children}
  </thead>
);

export const TableBody = ({ children }: any) => (
  <tbody className="divide-y divide-gray-200">
    {children}
  </tbody>
);

export const TableRow = ({ children }: any) => (
  <tr className="hover:bg-gray-50 transition-colors">
    {children}
  </tr>
);

export const TableHeader = ({ children }: any) => (
  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200">
    {children}
  </th>
);

export const TableData = ({ children }: any) => (
  <td className="px-4 py-3 text-sm text-gray-700 border-b border-gray-100">
    {children}
  </td>
);
