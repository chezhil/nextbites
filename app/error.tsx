"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="state-page">
      <div className="state-emoji">🔥</div>
      <h1>Something burned</h1>
      <p>An unexpected error happened. Give it another go.</p>
      <button type="button" className="button" onClick={() => reset()}>
        Try again
      </button>
    </main>
  );
}
