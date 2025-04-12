import type { Metadata } from 'next';
import Link from 'next/link';

interface HomePageProps {
  params: {
    locale: string;
  };
}

export async function generateMetadata({}: HomePageProps): Promise<Metadata> {
  return {
    title: 'Homepage',
    description: 'Welcome to our new text-based homepage.',
    alternates: {
      canonical: '/',
    },
  };
}

export default function Page({}: HomePageProps) {
  return (
    <div className="flex min-h-[calc(100vh-225px)] flex-col items-center justify-center px-4 text-center">
      <h1 className="text-gray-900 text-5xl font-bold">Welcome to RAK</h1>
      <p className="text-gray-700 mt-4 text-lg">Work in progress... Launching very soon!</p>
      <p className="text-gray-600 mt-2 text-lg">
        Meanwhile, relax and{' '}
        <Link
          href="/blog"
          className="text-blue-600 hover:text-blue-800 underline underline-offset-4 transition-colors"
        >
          read our blogs on RAK
        </Link>
        .
      </p>
    </div>
  );
}
