'use client';

import { motion } from 'framer-motion';
import styles from './Stats.module.css';

const stats = [
  { label: '服务客户数量', value: '200+', suffix: '家' },
  { label: '平均曝光增长', value: '300%', suffix: '+' },
  { label: 'AI推荐提升', value: '150%', suffix: '+' },
  { label: '平台覆盖数量', value: '9+', suffix: '个' },
  { label: '年均业绩转化提升', value: '45%', suffix: '+' }
];

export default function Stats() {
  return (
    <section className={styles.statsWrapper}>
      <div className="container">
        <div className={styles.grid}>
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className={styles.statItem}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={styles.valueWrapper}>
                <span className={styles.value}>{stat.value}</span>
                <span className={styles.suffix}>{stat.suffix}</span>
              </div>
              <p className={styles.label}>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
