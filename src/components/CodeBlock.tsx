"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function CodeBlock({
    language,
    code,
}: {
    language: string;
    code: string;
}) {
    const handleCopy = () => {
        navigator.clipboard.writeText(code).then(() => {
            alert("Code copied to clipboard!");
        });
    };

    return (
        <div className="relative group my-6">
            {/* Language Label */}
            <div className="absolute -top-5 right-0 text-xs bg-gray-800 text-gray-200 px-2 py-0.5 rounded-t-md dark:bg-gray-600">
                {language.toUpperCase()}
            </div>

            {/* Copy Button */}
            <button
                onClick={handleCopy}
                className="absolute right-2 top-2 bg-gray-800 text-gray-100 text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition"
            >
                Copy
            </button>

            {/* Syntax Highlighter */}
            <SyntaxHighlighter
                style={atomDark}
                language={language}
                PreTag="div"
                showLineNumbers
            >
                {code}
            </SyntaxHighlighter>
        </div>
    );
}