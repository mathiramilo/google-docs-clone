import React from 'react';

interface DocumentIdPageProps {
  params: Promise<{ documentId: string }>;
}

export default async function DocumentPage({ params }: DocumentIdPageProps) {
  const { documentId } = await params;

  return <div>DocumentPage: {documentId}</div>;
}
