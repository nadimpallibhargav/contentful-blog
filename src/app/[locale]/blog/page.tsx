import type { Metadata } from 'next';
import { draftMode } from 'next/headers';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { ArticleHero, ArticleTileGrid } from '@src/components/features/article';
import { Container } from '@src/components/shared/container';
import { PageBlogPostOrder } from '@src/lib/__generated/sdk';
import { client, previewClient } from '@src/lib/client';

interface BlogPageProps {
  params: {
    locale: string;
  };
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { isEnabled: preview } = draftMode();
  const gqlClient = preview ? previewClient : client;
  const landingPageData = await gqlClient.pageLanding({ locale: params.locale, preview });
  const page = landingPageData.pageLandingCollection?.items[0];

  const metadata: Metadata = {
    title: page?.seoFields?.pageTitle || 'Blog',
    description: page?.seoFields?.pageDescription || 'Latest blog posts',
    robots: {
      follow: !page?.seoFields?.nofollow,
      index: !page?.seoFields?.noindex,
    },
  };

  return metadata;
}

export default async function Page({ params: { locale } }: BlogPageProps) {
  const { isEnabled: preview } = draftMode();
  const gqlClient = preview ? previewClient : client;

  const landingPageData = await gqlClient.pageLanding({ locale, preview });
  const page = landingPageData.pageLandingCollection?.items[0];

  if (!page) {
    notFound();
  }

  const blogPostsData = await gqlClient.pageBlogPostCollection({
    limit: 6,
    locale,
    order: PageBlogPostOrder.PublishedDateDesc,
    where: {
      slug_not: page?.featuredBlogPost?.slug,
    },
    preview,
  });
  const posts = blogPostsData.pageBlogPostCollection?.items;

  if (!page?.featuredBlogPost || !posts) return;

  return (
    <>
      <Container>
        <Link href={`/${page.featuredBlogPost.slug}`}>
          <ArticleHero article={page.featuredBlogPost} />
        </Link>
      </Container>

      <Container className="my-8 md:mb-10 lg:mb-16">
        <h2 className="mb-4 md:mb-6">Latest Articles</h2>
        <ArticleTileGrid className="md:grid-cols-2 lg:grid-cols-3" articles={posts} />
      </Container>
    </>
  );
}
