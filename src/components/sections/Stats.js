'use client';

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
            <div
              key={index}
              className={styles.statItem}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className={styles.valueWrapper}>
                <span className={styles.value}>{stat.value}</span>
                <span className={styles.suffix}>{stat.suffix}</span>
              </div>
              <p className={styles.label}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
