import Link from "next/link";

export default function NotFound() {
  return (
    <main className="state-page">
      <div className="state-emoji">🍳</div>
      <h1>Recipe not found</h1>
      <p>We couldn&apos;t find that page. Maybe it&apos;s still in the oven.</p>
      <Link href="/" className="button">
        Back to all recipes
      </Link>
    </main>
  );
}
