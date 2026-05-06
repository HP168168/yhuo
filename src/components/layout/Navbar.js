'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import Button from '../ui/Button';
import styles from './Navbar.module.css';

const navLinks = [
  { name: '首页', href: '/' },
  { name: 'GEO解决方案', href: '/solutions' },
  { name: '行业方案', href: '/industry' },
  { name: '案例中心', href: '/cases' },
  { name: '常见问题', href: '/faq' },
  { name: '关于我们', href: '/about' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo}>
          <Image src="/logo.png" alt="言火AI Logo" width={140} height={45} priority />
        </Link>

        <div className={styles.desktopMenu}>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={`${styles.navLink} ${pathname === link.href ? styles.active : ''}`}>
              {link.name}
            </Link>
          ))}
        </div>
        
        <div className={styles.navActions}>
          <Button variant="primary" size="small">免费诊断</Button>
        </div>

        <button className={styles.menuToggle} onClick={() => setIsOpen(!isOpen)} aria-label={isOpen ? '关闭菜单' : '打开菜单'}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className={`${styles.mobileMenu} ${isOpen ? styles.mobileMenuOpen : ''}`}>
        <div className={styles.mobileMenuContent}>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={`${styles.mobileNavLink} ${pathname === link.href ? styles.active : ''}`} onClick={handleLinkClick}>
              {link.name}
            </Link>
          ))}
          <Button variant="primary" className={styles.mobileCtaBtn} onClick={handleLinkClick}>免费诊断</Button>
        </div>
      </div>
    </nav>
  );
}
