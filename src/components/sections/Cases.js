'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '../ui/Button';
import styles from './Cases.module.css';

const cases = [
  {
    category: 'ToB 企业服务',
    title: '某知名财税软件品牌 GEO 优化',
    results: ['AI 推荐率提升 240%', '核心关键词全覆盖', '获客成本下降 35%'],
    tag: '行业标杆'
  },
  {
    category: '教育行业',
    title: '头部电商教育机构品牌重塑',
    results: ['豆包 搜索首位推荐', '品牌提及率增长 400%', '月咨询量翻倍'],
    tag: '快速增长'
  },
  {
    category: '高客单服务',
    title: '高端定制家居品牌信任建设',
    results: ['深度内容布局 100+ 篇', '权威媒体背书提升', '转化提升 50%'],
    tag: '高转化'
  }
];

export default function Cases() {
  return (
    <section className={`section-padding ${styles.casesBg}`}>
      <div className="container">
        <div className={styles.header}>
          <div className={styles.headerTitle}>
            <span className={styles.sub}>核心案例 / CASE STUDIES</span>
            <h2 className={styles.title}>实战效果见证品牌实力</h2>
          </div>
          <Button variant="outline"><a href="/cases">查看更多案例</a></Button>
        </div>

        <div className={styles.grid}>
          {cases.map((item, index) => (
            <motion.div
              key={index}
              className={styles.caseCard}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={styles.tag}>{item.tag}</div>
              <div className={styles.content}>
                <span className={styles.category}>{item.category}</span>
                <h3 className={styles.caseTitle}>{item.title}</h3>
                <div className={styles.results}>
                  {item.results.map((res, i) => (
                    <div key={i} className={styles.resultItem}>
                      <div className={styles.dot}></div>
                      <span>{res}</span>
                    </div>
                  ))}
                </div>
                <Button variant="ghost" className={styles.moreBtn}>
                  案例详情
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
