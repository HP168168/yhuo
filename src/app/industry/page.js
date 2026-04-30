import PageHeader from '@/components/layout/PageHeader';
import { 
  ShoppingCart, 
  MapPin, 
  Stethoscope, 
  GraduationCap, 
  Briefcase, 
  Settings, 
  Rocket,
  CheckCircle2,
  Lightbulb
} from 'lucide-react';

const industries = [
  {
    id: 'ecommerce',
    title: '电商行业',
    subtitle: '多维度参数与口碑优化',
    icon: <ShoppingCart size={32} />,
    pain: '产品同质化严重，用户决策依赖真实评价和详细参数对比。',
    strategies: [
      '产品信息结构化：对商品材质、规格参数进行 Schema 标记，确保 AI 精准解析。',
      '真实口碑整合：将真实用户评价和使用体验结构化展示，提升 AI 采信度。',
      '场景化推荐植入：针对选购指南等长尾意图输出内容，让 AI 在特定场景下优先推荐。'
    ],
    result: '某电商案例显示，通过 GEO 优化，曝光时长增长 3 倍。'
  },
  {
    id: 'local',
    title: '本地生活与服务业',
    subtitle: 'LBS 区域锁定与场景渗透',
    icon: <MapPin size={32} />,
    pain: '流量具有极强的地域性，需要精准触达周边高意向客群。',
    strategies: [
      '地理标签与 POI 绑定：精准标注地址、覆盖半径及营业时间，锁定 3-5 公里内客群。',
      '区域+需求长尾词优化：围绕区域商圈词，发布“本地人私藏清单”系列内容。',
      '政策与热词绑定：绑定地方政策热词，提升 AI 推荐权重。'
    ],
    result: '智能锁门店 3 公里内客源占比从 35% 提升至 78%；餐饮品牌暑期订单增长 320%。'
  },
  {
    id: 'medical',
    title: '医疗与医美行业',
    subtitle: '权威背书与合规建设',
    icon: <Stethoscope size={32} />,
    pain: '行业监管严，用户看重专业性与安全性，负面信息杀伤力大。',
    strategies: [
      '专家资质展示：展示医生资质、案例分析，展示与权威机构的合作。',
      '合规与专业科普：确保医疗信息专业准确，严格遵守法规，提供高质量科普。',
      '负面舆情压制：利用监测系统实时抓取负面，通过正向内容优化进行压制。'
    ],
    result: '某机构负面压制率超 85%，搜索排名回升至 TOP2。'
  },
  {
    id: 'education',
    title: '教育/培训行业',
    subtitle: '关键词矩阵与资料包引流',
    icon: <GraduationCap size={32} />,
    pain: '获客成本高，转化链路长，用户需要多维度验证效果。',
    strategies: [
      '课程关键词矩阵：打造立体内容网，针对不同人群定制课程内容。',
      '痛点解决+资料包：输出“解决方案+免费资料包”结构的内容，引导进入私域。',
      '数据化效果背书：植入满意度、咨询量增长等具体数据，建立 AI 信任。'
    ],
    result: '某机构搜索咨询量增长 192%，转化成本降低 37%。'
  },
  {
    id: 'b2b',
    title: 'B2B 与 SaaS 企业',
    subtitle: '解决方案与行业深度',
    icon: <Briefcase size={32} />,
    pain: '决策链路长，涉及多角色，需要极强的专业信任和成功案例支撑。',
    strategies: [
      '解决方案详述：针对不同规模、业务类型输出详细方案，而非单纯功能介绍。',
      '行业报告与白皮书：发布趋势报告，确立思想领袖地位，成为 AI 首选源。',
      '标杆案例展示：量化展示成功案例（如效率提升 X%、成本下降 Y%）。'
    ],
    result: '某 HR SaaS 平台通过专业形象建设，成为企业管理咨询首选推荐。'
  },
  {
    id: 'manufacturing',
    title: '传统制造业/外贸 SOHO',
    subtitle: '术语壁垒与出海适配',
    icon: <Settings size={32} />,
    pain: '传统营销成本高回报低；专业术语难理解；海外本地化难。',
    strategies: [
      '共享术语库建设：针对专业术语进行结构化释义，防止被通用信息稀释。',
      '资质背书强化：强化“出口量”“CE 认证”等硬实力数据。',
      '出海本土化：针对不同市场制作内容，使用地理标签和区域产品词。'
    ],
    result: '某轧辊厂 30 天内曝光量涨 210%；外贸询盘 3 个月翻 3 倍。'
  },
  {
    id: 'startup',
    title: '品牌初创企业',
    subtitle: '品牌词确权与信任背书',
    icon: <Rocket size={32} />,
    pain: '无人知晓，AI 搜索时显示“信息不足”或竞品信息。',
    strategies: [
      '品牌词信息补全：全网统一铺设品牌定位、创始人背景，让 AI 有据可查。',
      '对话式 FAQ 占位：针对“XX 品牌怎么样”设计标准正面回答，供 AI 直接调用。',
      '信任钩子植入：在信息中植入优惠信息、新客体验价等促转化信息。'
    ],
    result: '某职场教育品牌从 AI 搜索“信息不足”变为被主动完整推荐。'
  }
];

export default function Industry() {
  return (
    <>
      <PageHeader 
        title="行业 GEO 解决方案" 
        subtitle="深耕不同行业特性，为您量身定制最契合业务属性的 AI 搜索截流方案。" 
      />

      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem' }}>
            {industries.map((item, index) => (
              <div key={item.id} style={{ 
                display: 'grid', 
                gridTemplateColumns: index % 2 === 0 ? '1fr 1.2fr' : '1.2fr 1fr', 
                gap: '4rem', 
                alignItems: 'center',
                padding: '4rem',
                background: index % 2 === 0 ? 'white' : '#f8fbff',
                borderRadius: '40px',
                border: '1px solid #eee'
              }}>
                {index % 2 === 0 ? (
                  <>
                    <div style={{ textAlign: 'center', padding: '2rem' }}>
                      <div style={{ 
                        width: '100px', 
                        height: '100px', 
                        borderRadius: '30px', 
                        background: 'rgba(30, 82, 137, 0.1)', 
                        color: '#1E5289', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        margin: '0 auto 2rem'
                      }}>
                        {item.icon}
                      </div>
                      <h2 style={{ fontSize: '2.2rem', color: '#1E5289', marginBottom: '0.5rem' }}>{item.title}</h2>
                      <p style={{ color: '#C12A2D', fontWeight: 'bold', fontSize: '1.1rem' }}>{item.subtitle}</p>
                    </div>
                    <div>
                      <div style={{ marginBottom: '2rem' }}>
                        <h4 style={{ color: '#333', marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <span style={{ color: '#C12A2D' }}>●</span> 核心痛点
                        </h4>
                        <p style={{ color: '#666', fontSize: '1.05rem', lineHeight: '1.6' }}>{item.pain}</p>
                      </div>
                      <div style={{ marginBottom: '2rem' }}>
                        <h4 style={{ color: '#333', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <span style={{ color: '#1E5289' }}>●</span> 优化策略
                        </h4>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                          {item.strategies.map((s, i) => (
                            <li key={i} style={{ display: 'flex', gap: '0.8rem', color: '#555', lineHeight: '1.6' }}>
                              <CheckCircle2 size={18} style={{ color: '#1E5289', flexShrink: 0, marginTop: '0.2rem' }} />
                              <span>{s}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div style={{ background: 'rgba(193, 42, 45, 0.05)', padding: '1.5rem', borderRadius: '15px', borderLeft: '4px solid #C12A2D' }}>
                        <p style={{ color: '#C12A2D', fontWeight: 'bold', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <CheckCircle2 size={18} /> 参考效果：{item.result}
                        </p>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <div style={{ marginBottom: '2rem' }}>
                        <h4 style={{ color: '#333', marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <span style={{ color: '#C12A2D' }}>●</span> 核心痛点
                        </h4>
                        <p style={{ color: '#666', fontSize: '1.05rem', lineHeight: '1.6' }}>{item.pain}</p>
                      </div>
                      <div style={{ marginBottom: '2rem' }}>
                        <h4 style={{ color: '#333', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <span style={{ color: '#1E5289' }}>●</span> 优化策略
                        </h4>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                          {item.strategies.map((s, i) => (
                            <li key={i} style={{ display: 'flex', gap: '0.8rem', color: '#555', lineHeight: '1.6' }}>
                              <CheckCircle2 size={18} style={{ color: '#1E5289', flexShrink: 0, marginTop: '0.2rem' }} />
                              <span>{s}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div style={{ background: 'rgba(30, 82, 137, 0.05)', padding: '1.5rem', borderRadius: '15px', borderLeft: '4px solid #1E5289' }}>
                        <p style={{ color: '#1E5289', fontWeight: 'bold', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <CheckCircle2 size={18} /> 参考效果：{item.result}
                        </p>
                      </div>
                    </div>
                    <div style={{ textAlign: 'center', padding: '2rem' }}>
                      <div style={{ 
                        width: '100px', 
                        height: '100px', 
                        borderRadius: '30px', 
                        background: 'rgba(193, 42, 45, 0.1)', 
                        color: '#C12A2D', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        margin: '0 auto 2rem'
                      }}>
                        {item.icon}
                      </div>
                      <h2 style={{ fontSize: '2.2rem', color: '#1E5289', marginBottom: '0.5rem' }}>{item.title}</h2>
                      <p style={{ color: '#C12A2D', fontWeight: 'bold', fontSize: '1.1rem' }}>{item.subtitle}</p>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>

          {/* Footer Advice */}
          <div style={{ marginTop: '6rem', padding: '4rem', background: '#1E5289', borderRadius: '40px', color: 'white', textAlign: 'center' }}>
            <Lightbulb size={48} style={{ marginBottom: '1.5rem', color: 'rgba(255,255,255,0.8)' }} />
            <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>“言火 GEO” 服务建议</h3>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.8', maxWidth: '900px', margin: '0 auto', color: 'rgba(255,255,255,0.9)' }}>
              不同行业的 GEO 打法差异巨大，切忌生搬硬套。“言火 GEO” 团队提供行业专属模型与深度诊断，能为您量身定制最契合业务属性的 GEO 落地方案，助您在 AI 搜索中精准截流。
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
