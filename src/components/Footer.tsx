export default function Footer() {
  return (
    <footer className="border-t border-brand-border py-12">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Logo + tagline */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-brand-primary to-brand-accent flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <rect x="1" y="6" width="2" height="6" rx="1" fill="white" opacity="0.7" />
                  <rect x="4" y="3" width="2" height="9" rx="1" fill="white" />
                  <rect x="7" y="1" width="2" height="12" rx="1" fill="white" />
                  <rect x="10" y="4" width="2" height="7" rx="1" fill="white" />
                  <rect x="13" y="6" width="1" height="5" rx="0.5" fill="white" opacity="0.7" />
                </svg>
              </div>
              <span className="text-white font-semibold text-[15px]">MoonWav</span>
            </div>
            <p className="text-brand-subtle text-sm">Short-Form Audio, Personalized to Your Day</p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-brand-subtle">
            {["Privacy", "Terms", "Contact", "For Creators"].map((link) => (
              <a key={link} href="#" className="hover:text-white transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-brand-border flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-brand-muted">
          <p>© {new Date().getFullYear()} MoonWav. All rights reserved.</p>
          <p>moonwav.ai</p>
        </div>
      </div>
    </footer>
  );
}
