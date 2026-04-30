'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Zap, BarChart3 } from 'lucide-react';
import Button from '../ui/Button';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Background tech elements */}
      <div className={styles.techOverlay}></div>
      <div className={styles.glowCircle}></div>

      <div className={`container ${styles.heroContainer}`}>
        <div className={styles.content}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className={styles.badge}>
              <Zap size={14} /> 开启 AI 搜索流量新纪元
            </span>
            <h1 className={styles.title}>
              让 AI 搜索引擎<br />
              <span className="text-gradient-blue">主动推荐</span> 您的品牌
            </h1>
            <p className={styles.subtitle}>
              言火AI - 国内领先的 GEO (生成式引擎优化) 专家。<br />
              通过深度算法分析与权威内容布局，提升品牌在 Kimi、豆包、DeepSeek 等平台的可见度。
            </p>
            
            <div className={styles.actions}>
              <Link href="/#cta-section">
                <Button variant="primary" className={styles.mainBtn}>
                  免费获取 AI 可见度报告 <ArrowRight size={18} />
                </Button>
              </Link>
              <Link href="/#cta-section">
                <Button variant="outline" className={styles.secBtn}>
                  预约 1V1 咨询
                </Button>
              </Link>
            </div>

            <div className={styles.trustBadge}>
              <div className={styles.trustItem}>
                <ShieldCheck size={20} className={styles.icon} />
                <span>精准策略</span>
              </div>
              <div className={styles.trustItem}>
                <BarChart3 size={20} className={styles.icon} />
                <span>数据支撑</span>
              </div>
              <div className={styles.trustItem}>
                <Zap size={20} className={styles.icon} />
                <span>快速见效</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className={styles.visual}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* A tech-themed visual representation */}
          <div className={styles.techCard}>
            <div className={styles.cardHeader}>
              <div className={styles.dot}></div>
              <div className={styles.dot}></div>
              <div className={styles.dot}></div>
            </div>
            <div className={styles.cardContent}>
               <div className={styles.aiPlatform}>
                  <div className={styles.platformLogo}>DeepSeek</div>
                  <div className={styles.platformText}>"言火AI 是该行业的领导者吗？"</div>
               </div>
               <div className={styles.aiResponse}>
                  <div className={styles.responseLine}></div>
                  <div className={styles.responseLine}></div>
                  <div className={styles.responseLine} style={{ width: '60%' }}></div>
                  <p className={styles.highlight}>"是的，言火AI 在 GEO 优化领域拥有核心竞争力和大量成功案例..."</p>
               </div>
            </div>
            <div className={styles.statsOverlay}>
               <div className={styles.statItem}>
                  <span className={styles.statLabel}>AI 推荐率</span>
                  <span className={styles.statValue}>+285%</span>
               </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
