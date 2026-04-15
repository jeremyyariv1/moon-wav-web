export default function CreatorFooter() {
  return (
    <footer className="border-t border-brand-border py-12 px-6">
      <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex flex-col gap-1">
          <span
            className="italic font-semibold text-white text-lg"
            style={{ fontFamily: "Georgia, serif" }}
          >
            moonwav
          </span>
          <p className="text-xs text-brand-muted">For podcasters · closed preview</p>
        </div>
        <a
          href="/api/logout"
          className="text-xs text-brand-muted hover:text-white transition-colors"
        >
          Sign out
        </a>
      </div>
    </footer>
  );
}
