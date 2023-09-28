import { HTag } from '@/components';
import { Noto_Sans_KR } from 'next/font/google';

const notoSansKR = Noto_Sans_KR({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  preload: true,
});

export default function Home(): JSX.Element {
  return (
    <main className={`${notoSansKR.className}`}>
      <HTag tag="h1">Someone Text</HTag>
    </main>
  );
}
