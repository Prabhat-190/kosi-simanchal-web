import Link from 'next/link';
const NextLink = ({ href, className, title, style }) => (
  <Link href={href} className={className} style={style}>{title}</Link>
);
export default NextLink;
