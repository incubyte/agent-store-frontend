import {
  H1, H2, H3, H4, H5, H6,
  Paragraph, Strong, Emphasis, Blockquote, HorizontalRule, Link,
  UnorderedList, OrderedList, ListItem,
  Table, TableHead, TableBody, TableRow, TableHeader, TableData,
  Code, Pre
} from './index';

// Markdown components mapping for react-markdown
export const markdownComponents = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  p: Paragraph,
  ul: UnorderedList,
  ol: OrderedList,
  li: ListItem,
  strong: Strong,
  em: Emphasis,
  table: Table,
  thead: TableHead,
  tbody: TableBody,
  tr: TableRow,
  th: TableHeader,
  td: TableData,
  blockquote: Blockquote,
  hr: HorizontalRule,
  a: Link,
  code: Code,
  pre: Pre,
};
