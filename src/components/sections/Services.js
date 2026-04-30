'use client';

import { motion } from 'framer-motion';
import { 
  Search, 
  Target, 
  Database, 
  TrendingUp, 
  FileText, 
  Shield, 
  UserCircle, 
  Activity 
} from 'lucide-react';
import styles from './Services.module.css';

const services = [
  {
    title: 'AI品牌可见度诊断',
    description: '多维度检测品牌在各大 AI 平台的提及率与推荐占位，锁定流量黑洞。',
    icon: <Search size={32} />
  },
  {
    title: 'GEO策略规划',
    description: '基于 AI 推荐机制，量身定制从内容到权重的全链路优化路径。',
    icon: <Target size={32} />
  },
  {
    title: '品牌知识库建设',
    description: '构建标准化的品牌百科与 FAQ 体系，让 AI 引擎精准抓取核心信息。',
    icon: <Database size={32} />
  },
  {
    title: 'AI推荐率提升',
    description: '优化推荐路径设计，确保品牌在竞品对比中脱颖而出，获得高权推荐。',
    icon: <TrendingUp size={32} />
  },
  {
    title: '权威内容布局',
    description: '在高权重媒体与行业平台占位，通过第三方背书强化 AI 对品牌的信任感。',
    icon: <FileText size={32} />
  },
  {
    title: '媒体信任体系建设',
    description: '构建多维度的媒体矩阵，提升品牌全网声量，建立权威的 AI 信任链路。',
    icon: <Shield size={32} />
  },
  {
    title: '创始人IP打造',
    description: '将创始人观点转化为高价值训练数据，塑造行业专家形象，带动品牌增长。',
    icon: <UserCircle size={32} />
  },
  {
    title: '持续监测与复盘',
    description: '实时监控 AI 推荐动向与竞品动态，动态调整策略，锁定持续增长。',
    icon: <Activity size={32} />
  }
];

export default function Services() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className={styles.header}>
          <span className={styles.sub}>核心业务 / CORE SERVICES</span>
          <h2 className={styles.title}>全方位的 GEO 优化解决方案</h2>
          <p className={styles.description}>
            我们不仅是 SEO 的进化者，更是 AI 时代品牌增长的引擎。
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className={styles.card}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={styles.iconWrapper}>
                {service.icon}
              </div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDesc}>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
