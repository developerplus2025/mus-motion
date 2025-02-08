'use client';
import SearchDialog from 'fumadocs-ui/components/dialog/search-default';
import type { SharedProps } from 'fumadocs-ui/components/dialog/search';
 
export default function CustomDialog(props: SharedProps) {
  // your own logic here
  return <SearchDialog {...props} />;
}