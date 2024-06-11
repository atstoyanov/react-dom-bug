import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Product222',
  };
  return (
    <main className={styles.main}>
      <Link href='/test'>Test Page</Link>
    </main>
  );
}
