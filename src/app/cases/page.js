'use client';

import { useState } from 'react';
import PageHeader from '@/components/layout/PageHeader';
import {
  ShoppingBag,
  Smartphone,
  Coffee,
  Stethoscope,
  Dog,
  Settings,
  Globe,
  Calculator,
  Gem,
  Cloud,
  TrendingUp,
  Lightbulb
} from 'lucide-react';

const casesData = {
  b2c: [
    {
      id: 1,
      title: '美妆行业（粉底液）：隐形新品突围',
      tag: '持妆日记',
      icon: <ShoppingBag size={24} />,
      bg: '品牌背景：“持妆日记”粉底液，作为新品牌在 AI 搜索中处于隐形状态。',
      strategy: 'GEO 策略：通过“诊断、重构、生产、分发”四个阶段，重构内容结构，使产品信息高度贴合 AI 引用逻辑。',
      result: '优化效果：运行三个月后，品牌成功嵌入 AI 决策图谱，相关内容成为 AI 首推答案被高频引用。'
    },
    {
      id: 2,
      title: '消费电子行业（智能家居）：全屋智能 AI 占位',
      tag: '智能家居',
      icon: <Smartphone size={24} />,
      bg: '品牌背景：智能家居品牌在 AI 搜索推荐中被竞品挤压，缺乏曝光。',
      strategy: 'GEO 策略：针对用户长尾提问进行场景化内容布局，构建品牌专属的知识图谱以提升 AI 理解度。',
      result: '优化效果：AI 推荐率大幅提升，品牌在同品类竞品中的 GEO 可见性跃升至前列。'
    },
    {
      id: 3,
      title: '餐饮茶饮行业（煲珠公）：品牌声誉与加盟转化',
      tag: '煲珠公',
      icon: <Coffee size={24} />,
      bg: '品牌背景：茶饮品牌在海量大模型搜索中信息杂乱，影响消费者信任及加盟商决策。',
      strategy: 'GEO 策略：清洗各大大模型（如 DeepSeek、豆包等）中的品牌信息，优化客户反馈与加盟政策等核心数据结构。',
      result: '优化效果：提升了品牌在大模型中的可见度与纯净度，有效促进了 C 端消费与 B 端加盟咨询。'
    },
    {
      id: 4,
      title: '消费医疗行业（口腔扫描）：专业信任构建',
      tag: '口腔医疗',
      icon: <Stethoscope size={24} />,
      bg: '品牌背景：口腔医疗机构/设备方，专业术语难以被 AI 准确解读，且容易受到负面信息干扰。',
      strategy: 'GEO 策略：通过权威案例结构化发布、专业术语清洗和负面信息正向优化，建立 AI 信任源。',
      result: '优化效果：显著提升了品牌在 AI 医疗咨询答案中的推荐频次与权威性。'
    },
    {
      id: 5,
      title: '宠物服务行业（连锁宠物医院）：决策闭环破解低转化',
      tag: '宠物医院',
      icon: <Dog size={24} />,
      bg: '品牌背景：某杭州连锁宠物医院 GEO 优化后 AI 推荐率高达 65%，但到店转化率仅 2%。',
      strategy: 'GEO 策略：重构内容体系，设计“场景匹配、能力证明、风险对冲、行动可达”的四维决策闭环。',
      result: '优化效果：成功解决“叫好不叫座”问题，AI 推荐流量转化为实际到店订单的比率大幅提升。'
    }
  ],
  b2b: [
    {
      id: 6,
      title: '传统制造业（轧辊厂）：工业术语破壁',
      tag: '轧辊制造',
      icon: <Settings size={24} />,
      bg: '品牌背景：传统工业品企业，因专业术语生僻导致 AI 无法准确理解并推荐。',
      strategy: 'GEO 策略：建立行业“共享术语库”，对专业词汇进行结构化释义；强化出口数据与资质背书。',
      result: '优化效果：30天内 DeepSeek 曝光量暴涨 210%，精准截获大批工业采购询盘。'
    },
    {
      id: 7,
      title: '国际贸易/跨境电商（国际美妆品牌）：出海流量增长',
      tag: '国际美妆',
      icon: <Globe size={24} />,
      bg: '品牌背景：国际美妆品牌寻求在海外 AI 平台（如 DeepSeek 等）扩大声量与销量。',
      strategy: 'GEO 策略：针对海外市场进行本土化 GEO 优化，布局区域词与垂直类目词。',
      result: '优化效果：在海外市场 AI 搜索排名显著提升，订单量季度环比增长 120%。'
    },
    {
      id: 8,
      title: '企业服务业（苏州好账本财务咨询）：精准线索获取',
      tag: '好账本',
      icon: <Calculator size={24} />,
      bg: '品牌背景：代理记账等财务咨询公司，面临同质化竞争，获客成本高。',
      strategy: 'GEO 策略：利用 GEO 的问题抓取与内容生产引擎，针对企业财税痛点输出专业化解决方案内容。',
      result: '优化效果：在 AI 搜索相关问题时获得优先推荐，精准获取高意向企业线索。'
    },
    {
      id: 9,
      title: '奢侈品行业：负面公关防御',
      tag: '奢侈品牌',
      icon: <Gem size={24} />,
      bg: '品牌背景：某奢侈品品牌在 AI 搜索中经常被拿来与竞品进行不利对比，影响品牌纯净度。',
      strategy: 'GEO 策略：借助 GEO 负面公关系统，优化品牌正向信息权重，调整 AI 生成答案中的对比维度。',
      result: '优化效果：将竞品对比评价减少 78%，极大提升了品牌在 AI 环境中的纯净度与高端形象。'
    },
    {
      id: 10,
      title: '科技/SaaS 行业：全球影响力扩张',
      tag: 'SaaS 科技',
      icon: <Cloud size={24} />,
      bg: '品牌背景：科技企业寻求在国际搜索引擎和 AI 大模型中提升品牌话语权。',
      strategy: 'GEO 策略：通过全维度 GEO 优化，发布结构化技术文档、白皮书及全球化部署案例。',
      result: '优化效果：在全球搜索引擎及 AI 平台排名显著提升，品牌国际影响力大幅增强。'
    }
  ]
};

export default function Cases() {
  const [activeTab, setActiveTab] = useState('b2c');

  return (
    <>
      <PageHeader
        title="案例中心"
        subtitle="实战见证实力。看言火 AI 如何帮助不同行业实现 AI 搜索时代的跨越式增长。"
      />

      <section className="section-padding">
        <div className="container">
          {/* Tab Switcher */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '4rem', gap: '1rem' }}>
            <button
              onClick={() => setActiveTab('b2c')}
              style={{
                padding: '1rem 2.5rem',
                borderRadius: '50px',
                border: 'none',
                background: activeTab === 'b2c' ? '#1E5289' : '#f0f4f8',
                color: activeTab === 'b2c' ? 'white' : '#666',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              B2C 行业案例
            </button>
            <button
              onClick={() => setActiveTab('b2b')}
              style={{
                padding: '1rem 2.5rem',
                borderRadius: '50px',
                border: 'none',
                background: activeTab === 'b2b' ? '#1E5289' : '#f0f4f8',
                color: activeTab === 'b2b' ? 'white' : '#666',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              B2B 行业案例
            </button>
          </div>

          {/* Cards Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '2.5rem' }}>
            {casesData[activeTab].map((item) => (
              <div key={item.id} style={{
                background: 'white',
                borderRadius: '24px',
                padding: '2.5rem',
                boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                border: '1px solid #f0f4f8',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s ease',
                cursor: 'default'
              }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '15px',
                    background: activeTab === 'b2c' ? 'rgba(193, 42, 45, 0.1)' : 'rgba(30, 82, 137, 0.1)',
                    color: activeTab === 'b2c' ? '#C12A2D' : '#1E5289',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {item.icon}
                  </div>
                  <span style={{
                    background: '#f8fbff',
                    color: '#1E5289',
                    padding: '0.4rem 1rem',
                    borderRadius: '50px',
                    fontSize: '0.85rem',
                    fontWeight: 'bold',
                    border: '1px solid rgba(30, 82, 137, 0.1)'
                  }}>
                    {item.tag}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.4rem', color: '#333', marginBottom: '1.5rem', lineHeight: '1.4' }}>{item.title}</h3>

                <div style={{ flex: 1 }}>
                  <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '1rem', paddingBottom: '1rem', borderBottom: '1px dashed #eee' }}>
                    {item.bg}
                  </p>
                  <p style={{ color: '#444', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                    {item.strategy}
                  </p>
                </div>

                <div style={{
                  background: activeTab === 'b2c' ? 'rgba(193, 42, 45, 0.05)' : 'rgba(30, 82, 137, 0.05)',
                  padding: '1.2rem',
                  borderRadius: '15px',
                  display: 'flex',
                  gap: '0.8rem',
                  alignItems: 'flex-start'
                }}>
                  <TrendingUp size={20} style={{ color: activeTab === 'b2c' ? '#C12A2D' : '#1E5289', flexShrink: 0 }} />
                  <p style={{
                    color: activeTab === 'b2c' ? '#C12A2D' : '#1E5289',
                    fontWeight: 'bold',
                    fontSize: '0.9rem',
                    margin: 0,
                    lineHeight: '1.5'
                  }}>
                    {item.result}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Footer Insight */}
          <div style={{
            marginTop: '6rem',
            padding: '4rem',
            background: 'linear-gradient(135deg, #1E5289 0%, #163d66 100%)',
            borderRadius: '40px',
            color: 'white',
            textAlign: 'center',
            boxShadow: '0 20px 40px rgba(30, 82, 137, 0.2)'
          }}>
            <img src="logo_512_2.png" alt="言火 GEO服务专业建议" style={{ width: '150px', height: 'auto' }} />
            <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>“言火 GEO” 洞察</h3>
            <p style={{
              fontSize: '1.2rem',
              lineHeight: '1.8',
              maxWidth: '1000px',
              margin: '0 auto',
              color: 'rgba(255,255,255,0.9)'
            }}>
              无论是 B2C 的情绪触动与快速转化，还是 B2B 的专业信任与长效决策，<br />GEO 的底层逻辑都是
              <strong style={{ color: '#fff', borderBottom: '2px solid #C12A2D', margin: '0 0.5rem' }}>“让 AI 读懂你，并信任你”</strong>。
              <br />“言火 GEO” 拥有丰富的跨行业操盘经验，能精准诊断您的业务场景，定制从流量获取到线索转化的全链路 GEO 方案。
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
