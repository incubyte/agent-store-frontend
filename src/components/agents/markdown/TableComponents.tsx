// Enhanced table components for professional markdown rendering
export const Table = ({ children }: any) => (
  <div className="overflow-x-auto mb-8 shadow-lg rounded-lg border border-gray-200">
    <table className="min-w-full bg-white">
      {children}
    </table>
  </div>
);

export const TableHead = ({ children }: any) => (
  <thead className="bg-gradient-to-r from-gray-50 to-gray-100">
    {children}
  </thead>
);

export const TableBody = ({ children }: any) => (
  <tbody className="divide-y divide-gray-200">
    {children}
  </tbody>
);

export const TableRow = ({ children }: any) => (
  <tr className="hover:bg-gray-50 transition-colors duration-150">
    {children}
  </tr>
);

export const TableHeader = ({ children }: any) => (
  <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 uppercase tracking-wider border-b-2 border-gray-300">
    {children}
  </th>
);

export const TableData = ({ children }: any) => (
  <td className="px-6 py-4 text-sm text-gray-700 leading-relaxed border-b border-gray-100">
    {children}
  </td>
);
