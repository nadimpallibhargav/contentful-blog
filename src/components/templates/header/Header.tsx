'use client';

import Link from 'next/link';

import { Container } from '@src/components/shared/container';

export const Header = () => {
  return (
    <header className="py-5">
      <nav>
        <Container className="flex items-center justify-between">
          <Link href="/">
            <b className="text-[1rem]">RAK & ROLL</b>
          </Link>
          <ul className="flex items-center gap-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
        </Container>
      </nav>
    </header>
  );
};
