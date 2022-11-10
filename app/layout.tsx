import React from 'react';

import '@/styles/dist.css';
import '@/styles/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>Skill Extractor 1.0</title>
      </head>
      <body className="overflow-y-scroll bg-zinc-900">{children}</body>
    </html>
  );
}
