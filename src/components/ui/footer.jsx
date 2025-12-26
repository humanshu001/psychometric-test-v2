import Image from 'next/image';

const portalLinks = [
  { label: 'Home', href: '/' },
  { label: 'Test', href: '/test' },
  { label: 'Website', href: 'https://geetauniversity.edu.in' },
  { label: 'Contact', href: 'mailto:info@geetauniversity.edu.in' },
  { label: 'Phone', href: 'tel:09278768000' },
];

export default function Footer() {
  return (
    <footer className="bg-[#18181b] text-gray-300 border-t border-zinc-800 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & Description */}
        <div className="col-span-1 flex flex-col gap-4">
          <Image src="/gu.png" alt="Geeta University" width={120} height={60} className="mb-2" />
          <p className="text-sm leading-relaxed">
            Step into the future with AI Enabled University. Where innovation, technology, and world-class education come together to shape tomorrow’s leaders.
          </p>
        </div>
        {/* Links */}
        <div className="col-span-2 flex flex-col md:flex-row gap-8 md:gap-16">
          <div>
            <h3 className="text-lg font-bold text-white mb-3">Quick Links</h3>
            <ul className="space-y-2">
              {portalLinks.map(link => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-white transition-colors duration-150">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Socials */}
        <div className="col-span-1 flex flex-col gap-4">
          <h3 className="text-lg font-bold text-white mb-3">Connect</h3>
          <div className="flex gap-4">
            <a href="https://facebook.com/geetauniversity" target="_blank" rel="noopener" aria-label="Facebook">
              <svg width="24" height="24" fill="currentColor" className="text-blue-500 hover:text-white"><path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 5 3.657 9.127 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.632.771-1.632 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.127 22 17 22 12"/></svg>
            </a>
            <a href="https://instagram.com/geetauniversity" target="_blank" rel="noopener" aria-label="Instagram">
              <svg width="24" height="24" fill="currentColor" className="text-pink-500 hover:text-white"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5zm4.25 2.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25 1.25a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/></svg>
            </a>
            <a href="https://www.linkedin.com/school/geeta-university/" target="_blank" rel="noopener" aria-label="LinkedIn">
              <svg width="24" height="24" fill="currentColor" className="text-blue-400 hover:text-white"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.38v4.59h-3v-9h2.89v1.23h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v4.74z"/></svg>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-zinc-700 py-4 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} <span className="font-bold text-white">Geeta University</span>. All rights reserved.
      </div>
    </footer>
  );
}
