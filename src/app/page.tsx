import Link from 'next/link';

export default function Home() {
  return (
    <div>
      Click{' '}
      <Link href="/documents">
        <span className="text-blue-500 underline">here</span> to go to
        Documents.
      </Link>
    </div>
  );
}
