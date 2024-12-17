import { ThemeProvider } from '@/context/ThemeContext';
import Navbar from '@/components/Navbar';
import './globals.css';
import ThemeSwitch from '@/components/ThemeSwitch';

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
            <body>
                <ThemeProvider>
                    <Navbar />
                    <ThemeSwitch />
                    <main>{children}</main>
                </ThemeProvider>
            </body>
        </html>
    );
}