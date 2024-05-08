import type { Metadata } from 'next';
import 'styles/globals.css';
import { Lato } from 'next/font/google';

const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
  style: ['italic', 'normal'],
});

export const metadata: Metadata = {
  title: 'Aleka',
  description: 'Build your legacy.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lato.className}>
        {/* <div className="m-auto px-16 min-h-screen max-w-screen-xl">
          <div className="lg:flex lg:justify-between lg:py-24">{children}</div>
        </div> */}
        {children}
      </body>
    </html>
  );
}
