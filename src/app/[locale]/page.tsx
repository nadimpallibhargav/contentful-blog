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
      <h1 className="text-4xl font-bold">Welcome to RAK</h1>
      <p className="mt-4 text-lg">Work in progress... Launching very soon!</p>
    </main>
  );
}
