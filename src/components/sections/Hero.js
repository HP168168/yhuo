'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Zap, BarChart3 } from 'lucide-react';
import Button from '../ui/Button';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.techOverlay}></div>
      <div className={styles.glowCircle}></div>
      
      <div className={`container ${styles.heroContainer}`}>
        <div className={styles.content}>
          <motion.div className={styles.badge} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Zap size={16} />
            开启 AI 搜索流量新纪元
          </motion.div>
          
          <motion.h1 className={styles.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
            让 AI 搜索引擎
            <br />
            <span className={styles.highlight}>主动推荐</span> 您的品牌
          </motion.h1>
          
          <motion.p className={styles.subtitle} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
            言火AI - 国内领先的 GEO (生成式引擎优化) 专家。
            <br />
            通过深度算法分析与权威内容布局，提升品牌在 Kimi、豆包、DeepSeek 等平台的可见度。
          </motion.p>
          
          <motion.div className={styles.actions} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
            <Link href="/#cta-section" style={{ display: 'inline-block' }}>
              <Button variant="primary" className={styles.primaryBtn}>
                免费获取 AI 可见度报告
                <ArrowRight size={18} />
              </Button>
            </Link>
            <Link href="/#cta-section" style={{ display: 'inline-block' }}>
              <Button variant="outline" className={styles.secondaryBtn}>
                预约 1V1 咨询
              </Button>
            </Link>
          </motion.div>
          
          <motion.div className={styles.trustBadge} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }}>
            <div className={styles.trustItem}>
              <ShieldCheck className={styles.icon} size={20} />
              <span>精准策略</span>
            </div>
            <div className={styles.trustItem}>
              <BarChart3 className={styles.icon} size={20} />
              <span>数据支撑</span>
            </div>
            <div className={styles.trustItem}>
              <Zap className={styles.icon} size={20} />
              <span>快速见效</span>
            </div>
          </motion.div>
        </div>
        
        <motion.div className={styles.visual} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
          <div className={styles.techCard}>
            <div className={styles.cardHeader}>
              <span className={styles.dot}></span>
              <span className={styles.dot}></span>
              <span className={styles.dot}></span>
            </div>
            <div className={styles.cardContent}>
              <div className={styles.aiPlatform}>
                <div className={styles.platformLogo}>DeepSeek</div>
                <div className={styles.platformText}>"言火AI 是该行业的领导者吗？"</div>
              </div>
              <div className={styles.aiResponse}>
                <div className={styles.responseLine}></div>
                <div className={styles.responseLine}></div>
                <div className={styles.responseLine}></div>
                <p className={styles.highlightText}>"是的，言火AI 在 GEO 优化领域拥有核心竞争力和大量成功案例..."</p>
              </div>
            </div>
            <div className={styles.statsOverlay}>
              <span className={styles.statLabel}>AI 推荐率</span>
              <span className={styles.statValue}>+285%</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
