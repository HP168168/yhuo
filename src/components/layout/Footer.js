import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.infoCol}>
          <Link href="/" className={styles.footerLogo}>
            <Image src="/logo.png" alt="言火AI Logo" width={140} height={45} className={styles.whiteLogo} />
          </Link>
          <p className={styles.description}>
            专业的 AI GEO 优化专家，助力品牌在生成式 AI 时代赢得流量先机。
          </p>
          <div className={styles.contactList}>
            <div className={styles.contactItem}>
              <Phone size={18} />
              <span>400-800-4439</span>
            </div>
            <div className={styles.contactItem}>
              <MessageCircle size={18} />
              <span>微信：13808875768</span>
            </div>
            <div className={styles.contactItem}>
              <MapPin size={18} />
              <span>广州市白云区三元里大道217号民生商业大厦3层.4层</span>
            </div>
          </div>
        </div>

        <div className={styles.linksCol}>
          <h3>核心业务</h3>
          <ul>
            <li><Link href="/#cta-section">免费 AI 诊断报告</Link></li>
            <li><Link href="/solutions">GEO策略规划</Link></li>
            <li><Link href="/solutions">品牌知识库建设</Link></li>
            <li><Link href="/solutions">AI推荐率提升</Link></li>
          </ul>
        </div>

        <div className={styles.linksCol}>
          <h3>关于我们</h3>
          <ul>
            <li><Link href="/about">公司介绍</Link></li>
            <li><Link href="/cases">核心案例</Link></li>
            {/* <li><Link href="/knowledge">品牌知识库</Link></li> */}
            <li><Link href="/faq">常见问题 (FAQ)</Link></li>
          </ul>
        </div>

        <div className={styles.qrCol}>
          <h3>关注我们</h3>
          <div className={styles.qrCodeBox}>
            <Image
              src="/yhuo_WeChatOfficialAccount.jpg"
              alt="言火GEO 公众号"
              width={120}
              height={120}
              className={styles.qrImage}
            />
            <p>公众号：言火GEO</p>
          </div>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <div className="container">
          <p>
            &copy; {currentYear} 言火AI (www.yhuo.com). All Rights Reserved.
            <span className={styles.icpDivider}> | </span>
            <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer" className={styles.icpLink}>
              粤ICP备2022005634号-3
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
