export default function Navigator() {
  return (
    <nav className="border-b sticky top-0 @dark:border-[#666] @light:border-[#eee] max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
      <header className="font-600 text-2xl">
        <a href="/">ACOM</a>
      </header>
      <div className="flex items-center justify-center gap-x-9 text-[1.4rem]">
        <a href="/me">
          <div className="i-ph-user-bold" />
        </a>
        <a href="/cart">
          <div className="i-ph-shopping-cart-bold" />
        </a>
      </div>
    </nav>
  );
}
