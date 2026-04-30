'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';
import Button from '../ui/Button';
import styles from './Navbar.module.css';

const navLinks = [
  { name: '首页', href: '/' },
  { name: 'GEO解决方案', href: '/solutions' },
  { name: '行业方案', href: '/industry' },
  { name: '案例中心', href: '/cases' },
  { name: '品牌知识库', href: '/knowledge' },
  { name: '常见问题', href: '/faq' },
  { name: '关于我们', href: '/about' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${(scrolled || !isHome) ? styles.scrolled : ''}`}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo}>
          <Image src="/logo.png" alt="言火AI Logo" width={140} height={45} priority />
        </Link>

        {/* Desktop Menu */}
        <div className={styles.desktopMenu}>
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className={styles.navLink}>
              {link.name}
            </Link>
          ))}
          <Link href="/#cta-section">
            <Button variant="primary" className={styles.ctaBtn}>
              免费诊断
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button className={styles.mobileToggle} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className={styles.mobileMenu}>
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className={styles.mobileNavLink}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className={styles.mobileCta}>
            <Link href="/#cta-section" style={{ width: '100%' }} onClick={() => setIsOpen(false)}>
              <Button variant="primary" style={{ width: '100%' }}>
                免费诊断
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
