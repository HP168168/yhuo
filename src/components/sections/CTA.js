'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import styles from './CTA.module.css';

export default function CTA() {
  return (
    <section className="section-padding" id="cta-section">
      <div className="container">
        <motion.div
          className={styles.ctaBox}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.content}>
            <h2 className={styles.title}>
              准备好在 AI 搜索时代<br />
              <span className={styles.highlight}>重塑您的品牌影响力</span> 吗？
            </h2>
            <p className={styles.desc}>
              立即扫描二维码，添加GEO训练师微信，免费获取 AI 品牌可见度诊断报告。
            </p>
            <div className={styles.qrWrapper}>
              <div className={styles.qrCode}>
                <Image
                  src="/qr-code.jpg"
                  alt="言火AI GEO训练师微信"
                  width={160}
                  height={160}
                  className={styles.qrImage}
                />
              </div>
              <p className={styles.qrHint}>立即扫码添加GEO训练师微信</p>
            </div>
          </div>

          <div className={styles.decoration}>
            <div className={styles.circle}></div>
            <div className={styles.circleSmall}></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
