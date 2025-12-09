"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div className="flex min-h-screen items-center justify-center bg-slate-950 px-4">
          <div className="max-w-md text-center">
            <h1 className="mb-4 text-4xl font-bold text-slate-50">Something went wrong!</h1>
            <p className="mb-8 text-slate-300">
              {error.message || "An unexpected error occurred"}
            </p>
            <button
              onClick={reset}
              className="rounded-full bg-cyan-500 px-6 py-3 text-slate-950 font-medium transition-colors hover:bg-cyan-400"
            >
              Try again
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}

