import type { Metadata } from 'next';

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
    <main className="p-8">
      <h1 className="text-4xl font-bold">Homepage</h1>
      <p className="mt-4 text-lg">
        Welcome to our new localized homepage! This page is now a text-based landing page with no
        blog content.
      </p>
    </main>
  );
}
