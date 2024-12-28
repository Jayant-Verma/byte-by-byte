"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useState } from "react";
import { ClipboardDocumentListIcon, ClipboardDocumentCheckIcon } from "@heroicons/react/24/outline";

export default function CodeBlock({
    language,
    code,
}: {
    language: string;
    code: string;
}) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(code).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 3000); 
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
                className="absolute right-2 top-2 bg-gray-800 text-gray-100 text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition flex items-center gap-2"
            >
                {copied ? (
                    <>
                        <ClipboardDocumentCheckIcon className="text-green-500 w-4 h-4" /> 
                        Copied
                    </>
                ) : (
                    <>
                        <ClipboardDocumentListIcon className="w-4 h-4" /> 
                        Copy
                    </>
                )}
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