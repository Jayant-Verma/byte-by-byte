import './globals.css';

export const metadata = {
    title: 'My Blog',
    description: 'A blog built with Next.js, TypeScript, and TailwindCSS',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="bg-gray-100 text-gray-900">{children}</body>
        </html>
    );
}