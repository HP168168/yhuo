'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import styles from './FAQ.module.css';

const faqs = [
  {
    question: '什么是 GEO (生成式引擎优化)？',
    answer: 'GEO (Generative Engine Optimization) 是 SEO 的进化版。它专注于优化品牌在 Kimi、豆包、ChatGPT、DeepSeek 等 AI 生成式搜索引擎中的可见度、推荐率和信任度，让 AI 在回答用户问题时能够优先、准确、正面地推荐您的品牌。'
  },
  {
    question: 'GEO 和传统的 SEO 有什么区别？',
    answer: 'SEO 针对的是传统搜索（如百度、Google）的网页排名，核心是关键词和外链。而 GEO 针对的是 AI 引擎的语义理解和知识抽取，核心是品牌权威内容布局、结构化知识库建设以及 AI 推荐算法的路径优化。'
  },
  {
    question: '为什么 AI 在回答相关问题时不推荐我的品牌？',
    answer: '通常有三个原因：1. AI 的训练数据中缺乏关于您品牌的权威信息；2. 您的品牌信息没有以 AI 易于理解的方式存在（缺乏标准化知识库）；3. 竞品牌在 AI 语义空间中的权重大于您。GEO 正是为了解决这些问题。'
  },
  {
    question: 'GEO 优化多久可以见到明显效果？',
    answer: '通常 1-3 个月可见初步成效。相比 SEO，GEO 的生效周期受 AI 平台更新频率和内容收录速度影响。通过我们专业的权威媒体占位和知识图谱构建，可以显著缩短品牌被 AI 引擎识别并推荐的时间。'
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="section-padding">
      <div className="container">
        <div className={styles.header}>
          <span className={styles.sub}>答疑解惑 / FAQ</span>
          <h2 className={styles.title}>关于 GEO 您可能关心的疑问</h2>
        </div>

        <div className={styles.faqList}>
          {faqs.map((faq, index) => (
            <div key={index} className={styles.faqItem}>
              <button 
                className={`${styles.question} ${activeIndex === index ? styles.active : ''}`}
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <span>{faq.question}</span>
                {activeIndex === index ? <Minus size={20} /> : <Plus size={20} />}
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className={styles.answerWrapper}
                  >
                    <div className={styles.answer}>
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
