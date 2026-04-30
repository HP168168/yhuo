'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Search } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import styles from './FAQPage.module.css';

const faqCategories = [
  {
    title: '一、认知与理解类',
    items: [
      { q: 'GEO到底是什么？和传统SEO有什么区别？', a: '简单来说，传统SEO是让网站在搜索结果里排得靠前，而GEO是让AI直接把您的内容变成答案，相当于从“摆地摊”升级成“当AI的私人顾问”。这正是“言火GEO”的核心服务理念——帮企业从“被搜索”进化到“被推荐”。' },
      { q: '为什么说现在不做GEO会丢掉客户？', a: '数据显示，61%的B2B采购商“先问AI再下单”，AI搜索流量增速高达350%。如果品牌不在AI的“推荐列表”里，您可能正在失去60%的潜在客户。“言火GEO”建议您尽快布局，抢占AI流量新入口。' },
      { q: '我已经做了SEO，还需要做GEO吗？', a: '需要。传统SEO解决的是“链接排名”，GEO解决的是“答案引用”。“言火GEO”的服务经验表明，两者是互补关系，组合使用效果更佳。' },
      { q: 'GEO能解决哪些实际问题？', a: '主要解决三大核心问题：内容纠错（修正AI错误信息）、内容抓取（让AI主动抓取您的内容）、场景搜索内容占位（让AI优先推荐您）。这正是“言火GEO”一站式服务的核心价值。' },
      { q: 'GEO是玄学还是有科学逻辑？', a: 'GEO不是玄学，是科学。它有明确的筛选规则——AI看重“需求匹配度、干货价值、呈现形式”。“言火GEO”团队正是基于这套科学逻辑，为客户提供可拆解、可验证的优化方案。' }
    ]
  },
  {
    title: '二、痛点与坑点类',
    items: [
      { q: '为什么我花大价钱做的SEO，在AI搜索里没效果？', a: '传统SEO靠堆关键词、做外链，但AI要的是“直接解决问题”的内容。“言火GEO”提醒您：内容优化方向不对，钱就白花了。' },
      { q: '为什么我的品牌在AI推荐里根本“看不见”？', a: '因为您的内容可能只写了“品牌宣传稿”，而AI需要的是“用户解决方案”。“言火GEO”会帮您重新梳理内容结构，让AI“读得懂、愿意推”。' },
      { q: '做GEO最容易踩的坑是什么？', a: '最常见三个坑：用传统SEO逻辑套GEO新规则；内容“凭感觉写”不做需求验证；被“伪GEO服务”割韭菜。“言火GEO”主张“透明化交付”，帮您避开这些坑。' },
      { q: '市面上那些“保证AI首页推荐”的服务靠谱吗？', a: '不靠谱。凡是说“保证排名第一”“7天见效”的，全是忽悠。“言火GEO”坚持用真实数据和案例说话，绝不做虚假承诺。' },
      { q: '我担心被“割韭菜”，怎么识别虚假GEO服务？', a: '三招识别：看承诺（保证排名的pass）、看方案（只提写文章发外链的pass）、看报价。“言火GEO”提供免费诊断，让您先看清问题再决定。' }
    ]
  },
  {
    title: '三、成本与资源类',
    items: [
      { q: '做GEO是不是需要组建技术团队？成本很高？', a: '不需要。“言火GEO”提供“陪跑式服务”，一个人+Agent工具就能启动，无需组建技术团队。' },
      { q: 'GEO的投入产出比（ROI）大概是多少？', a: '根据行业数据，定制项目投入平均约10万元，ROI通常为1:3.5。“言火GEO”曾帮助某国际美妆品牌将AI提及率从12%提升至48%，转化率激增2.3倍。' },
      { q: '预算有限的中小企业怎么做GEO？', a: '可以选择共享术语库方案、基础服务套餐，或模块化服务。“言火GEO”专为中小企业设计了高性价比的入门方案。' },
      { q: '有没有适合小微企业的低成本GEO方案？', a: '有。“言火GEO”推出的“共享术语库”方案，定制术语成本可从200元/词降到0.8元/词，大幅降低企业门槛。' },
      { q: 'GEO服务一般怎么收费？', a: '常见有四种模式。“言火GEO”提供灵活的收费模式，包括基础服务套餐、定制项目、按效果分成等，您可以根据需求选择。' }
    ]
  },
  {
    title: '四、执行与落地类',
    items: [
      { q: '做GEO的第一步应该做什么？', a: '第一步是“找问题”。“言火GEO”在服务初期，会帮您梳理出50+个高价值长尾问题，这是GEO的流量密码。' },
      { q: '为什么我找不到客户真正在问的问题？', a: '因为您可能在凭感觉想问题。“言火GEO”使用专业工具挖掘真实用户提问，帮您精准定位需求。' },
      { q: '一个人怎么做GEO内容产出？', a: '用“一个人+Agent”模式。“言火GEO”提供全套Agent工具包和操作指南，让您轻松上手。' },
      { q: 'GEO内容应该发在哪些平台？', a: '根据您的业务选择。“言火GEO”会为您制定“平台投放地图”，指导您把内容发到AI喜欢抓取的高权重渠道。' },
      { q: '什么样的内容更容易被AI推荐？', a: '四要素：问题导向、结构化呈现、权威背书、场景覆盖。“言火GEO”的内容创作服务，严格遵循这套“AI友好公式”。' },
      { q: 'GEO实施的全流程是怎样的？', a: '一般分三步：前期诊断与规划→策略制定→内容创作与发布。“言火GEO”提供全流程陪跑，让您省心省力。' },
      { q: '网站需要做哪些技术优化才能配合GEO？', a: '需要做好“内容黄金三角”及Schema标记等技术优化。“言火GEO”的技术团队会为您提供完整的网站优化清单。' },
      { q: '如何快速找到200个用户真实问题？', a: '别凭感觉想。“言火GEO”开发了专属的问题挖掘工具，3天就能帮您生成200+个精准用户提问。' },
      { q: '我没时间写内容，Agent能帮我写吗？', a: '能。“言火GEO”的内容交付服务，包含Agent辅助写作，您只需审核，无需从零写起。' },
      { q: '做GEO需要懂“大模型原理”这些高深技术吗？', a: '不需要。“言火GEO”把复杂的技术逻辑封装成简单的方法论，您只需要按步骤执行即可。' }
    ]
  },
  {
    title: '五、效果与监测类',
    items: [
      { q: '做GEO多久能看到效果？', a: '取决于基础和投入。“言火GEO”的经验是：信息准确率1-2周见效；品牌提及率需1-3个月；长期效果需3-6个月。' },
      { q: 'GEO的效果稳定吗？会不会突然掉下来？', a: '通过构建知识图谱和持续优化机制，效果可以保持稳定。“言火GEO”的客户数据显示，合作结束后仍能保持60%的推荐稳定性。' },
      { q: '怎么监测GEO效果？看点击量吗？', a: '不看点击量。“言火GEO”提供专业的效果监测报告，核心指标包括包含频率、提示覆盖率、情感分析等。' },
      { q: '有没有工具可以监测AI有没有提到我的品牌？', a: '有。“言火GEO”为客户提供AI可见性监测系统，24小时追踪品牌在各大AI平台的提及情况。' },
      { q: '最核心的GEO指标是什么？', a: '不同阶段重点不同。“言火GEO”会根据您的业务阶段，设定匹配的核心指标，不搞“一刀切”。' }
    ]
  },
  {
    title: '六、竞争与策略类',
    items: [
      { q: '竞争对手已经布局了，我现在做还来得及吗？', a: '来得及。“言火GEO”认为：现在布局成本最低，等大家都反应过来，竞争成本会直线上升。' },
      { q: '我的品牌不出名，做GEO有用吗？', a: '更有用。刚起步的公司，GEO能帮您“刷存在感”。“言火GEO”擅长为初创品牌打造AI时代的“信任名片”。' },
      { q: '我们公司有多个产品，怎么做GEO？', a: '做“产品词GEO”。“言火GEO”会为您的每个产品建立“功能+场景”的精准说明，避免AI混淆。' },
      { q: '我们是做本地服务的，GEO有用吗？', a: '非常有用。“言火GEO”曾帮助某智能锁门店，通过区域聚焦，让3公里内客源占比从35%提升至78%。' },
      { q: '如何避免AI把我的品牌推荐给错误的客户？', a: '在内容中打上清晰的“标签”。“言火GEO”会帮您优化内容标签体系，确保精准匹配目标客群。' },
      { q: 'GEO会不会被AI自身能力的提升替代？', a: '不会。“言火GEO”认为：AI能力越强，信息过载越严重，经过专业优化的内容反而越有价值。' }
    ]
  },
  {
    title: '七、转化与成交类',
    items: [
      { q: '为什么我的品牌被AI推荐了，但没人咨询？', a: '因为您只完成了“被看见”，没完成“被选择”。“言火GEO”不仅关注推荐率，更关注咨询转化率。' },
      { q: '怎么把AI推荐变成真金白银的订单？', a: '内容不能只介绍自己，要帮用户做决定。“言火GEO”提供从流量到转化的全链路设计，帮您打通成交闭环。' },
      { q: '为什么成交率普遍只有2%-5%？', a: '因为大多数品牌的内容只管介绍自己。“言火GEO”会帮您设计“决策型内容”，有效提升成交率。' },
      { q: '怎么解决用户“再看看”就流失的问题？', a: '在内容中提供“临门一脚”的信任背书和行动指引。“言火GEO”会为您设计促转化的内容钩子，缩短用户犹豫时间。' }
    ]
  },
  {
    title: '八、服务与选择类',
    items: [
      { q: '怎么选择靠谱的GEO服务商？', a: '看六点：技术适配性、行业专精度、案例数据、数据透明度、收费模式、长期支持。“言火GEO”在这六点上，都经得起检验。' },
      { q: 'GEO服务商会提供哪些工具和报告？', a: '通常提供效果监测工具、内容创作工具等。“言火GEO”额外提供“专属GEO陪跑群”，随时响应您的需求。' },
      { q: '有没有成功案例可以参考？', a: '有。“言火GEO”已服务数百家企业，某轧辊厂30天内DeepSeek曝光量涨210%；某餐饮品牌暑期订单增长320%。' },
      { q: '服务商说要帮我做知识图谱，这是什么？', a: '这是构建“品牌-产品-场景-价值”的知识网络。“言火GEO”的知识图谱服务，能有效提升AI对您品牌的理解深度。' },
      { q: '如果AI里有关于我品牌的负面信息怎么办？', a: 'GEO can handle it。“言火GEO”提供“舆情压制+正面内容优化”组合方案，通常1-3天内就能修正错误信息。' }
    ]
  },
  {
    title: '九、趋势与未来类',
    items: [
      { q: 'GEO的未来趋势是什么？', a: '两大趋势：多模态GEO、AI智能体协作。“言火GEO”已提前布局，推出了针对语音搜索 and 视频内容的优化方案。' },
      { q: '现在入局GEO是不是太早了？', a: '不早，正是时候。“言火GEO”建议：现在布局正处于红利窗口期，就像2008年做SEO、2016年做抖音。' },
      { q: '不做GEO，最坏的结果是什么？', a: '在新一代消费者心中“社会性死亡”。“言火GEO”的使命，就是帮您避免这种“隐形消失”的危机。' },
      { q: '企业如何提前布局GEO？', a: '做好六个准备：知识储备、内容资产梳理、技术基础建设、团队能力培养、战略规划、试点项目验证。“言火GEO”提供《企业GEO准备度诊断表》，助您系统评估。' },
      { q: 'GEO是短期营销活动还是长期投资？', a: '是长期投资。“言火GEO”的服务模式正是基于“长期陪伴”，帮您在AI时代持续积累品牌资产。' }
    ]
  }
];

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeItem, setActiveItem] = useState(null);

  const filteredCategories = faqCategories.map(category => ({
    ...category,
    items: category.items.filter(item => 
      item.q.toLowerCase().includes(searchTerm.toLowerCase()) || 
      item.a.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.items.length > 0);

  return (
    <>
      <PageHeader 
        title="GEO 常见问题 (FAQ)" 
        subtitle="深入了解 AI 搜索优化，解答您在 GEO 布局中的所有疑问。" 
      />
      
      <section className="section-padding">
        <div className="container">
          {/* Search Bar */}
          <div className={styles.searchWrapper}>
            <div className={styles.searchBar}>
              <Search className={styles.searchIcon} size={20} />
              <input 
                type="text" 
                placeholder="搜索您感兴趣的问题..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className={styles.faqContent}>
            {filteredCategories.map((category, catIndex) => (
              <div key={catIndex} className={styles.categorySection}>
                <h2 className={styles.categoryTitle}>{category.title}</h2>
                <div className={styles.faqGrid}>
                  {category.items.map((item, itemIndex) => {
                    const itemId = `${catIndex}-${itemIndex}`;
                    const isActive = activeItem === itemId;
                    
                    return (
                      <div key={itemIndex} className={`${styles.faqItem} ${isActive ? styles.active : ''}`}>
                        <button 
                          className={styles.question}
                          onClick={() => setActiveItem(isActive ? null : itemId)}
                        >
                          <span className={styles.qNum}>Q:</span>
                          <span className={styles.qText}>{item.q}</span>
                          <div className={styles.icon}>
                            {isActive ? <Minus size={18} /> : <Plus size={18} />}
                          </div>
                        </button>
                        
                        <AnimatePresence>
                          {isActive && (
                            <motion.div 
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className={styles.answerWrapper}
                            >
                              <div className={styles.answer}>
                                <span className={styles.aNum}>A:</span>
                                <p>{item.a}</p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}

            {filteredCategories.length === 0 && (
              <div className={styles.noResults}>
                <p>没有找到相关问题，请换个关键词试试。</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
