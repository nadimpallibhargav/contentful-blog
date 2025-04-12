'use client';

import { Container } from '@src/components/shared/container';
import Image from 'next/image';

export const Footer = () => {
  return (
    <footer className="border-t-color border-t border-gray200">
      <Container className="py-8">
        <div className="flex flex-col items-center justify-center">
          <h2 className="h4 mb-4">RAK & ROLL</h2>
          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
            <a
              className="border-transparent bg-white flex items-center justify-center rounded-full text-sm transition-colors sm:text-base"
              href="https://www.linkedin.com/in/adi9/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/assets/svg/linkedin.svg" alt="Vercel logomark" width={60} height={60} />
            </a>
            <a
              className="border-transparent bg-white flex items-center justify-center rounded-full text-sm transition-colors sm:text-base"
              href="tel:+971506017274"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/assets/svg/call.svg" alt="Vercel logomark" width={60} height={60} />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};
