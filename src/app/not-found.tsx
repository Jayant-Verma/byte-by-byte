import Link from "next/link";

export default function Custom404() {
    return (
        <div className="container mx-auto text-center py-10">
            <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
            <p className="text-gray-500 mt-4">
                Sorry, the page you are looking for does not exist.
            </p>
            <Link href="/" className="text-blue-600 hover:underline mt-6 block">
                Return to Homepage
            </Link>
        </div>
    );
}