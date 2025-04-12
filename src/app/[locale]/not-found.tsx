import Link from 'next/link';
import { Container } from '@src/components/shared/container';

export default function NotFound() {
  return (
    <Container>
      <title>Page Not Found</title>
      <h1 className="h2">Page Not Found</h1>
      <p className="mt-4">
        Sorry, we couldn’t find the page you’re looking for.{' '}
        <Link className="text-blue500" href="/">
          Go back home
        </Link>
        .
      </p>
    </Container>
  );
}
