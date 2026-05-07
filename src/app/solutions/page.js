import PageHeader from '@/components/layout/PageHeader';
import {
  Radar,
  Factory,
  LayoutDashboard,
  BarChart3,
  PenTool,
  Share2,
  Target,
  Zap,
  ShieldCheck,
  FileText,
  Map,
  Tags,
  Globe
} from 'lucide-react';
import Image from 'next/image';

export default function Solutions() {

  return (
    <>
      <PageHeader
        title="GEO 解决方案"
        subtitle="从品牌可见度诊断到 AI 推荐率提升，让您的品牌成为 AI 时代的首选答案。"
      />

      {/* Section 1: Strategic Cognition */}
      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <span style={{ color: '#C12A2D', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em' }}>一、战略认知层</span>
              <h2 style={{ fontSize: '2.5rem', marginTop: '1rem', marginBottom: '1.5rem', color: '#1E5289' }}>从 SEO 到 GEO 的变革</h2>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#444', marginBottom: '1.5rem' }}>
                解决方案的前提是应对流量入口迁移。AI 搜索流量占比已超 60%，进入“零点击时代”，核心特征从“人找答案”变为“答案找人”。
              </p>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#444' }}>
                GEO (生成式引擎优化) 的目标不再是争夺排名与点击，而是让品牌成为 AI 推荐的答案，训练 AI 对企业形成记忆，从而解决企业面临的流量缺失、品牌失语、信任缺失和竞争被动四大风险。
              </p>
            </div>
            <div style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
              <div style={{
                width: '100%', height: '400px', background: 'linear-gradient(135deg, #1E5289 0%, #C12A2D 100%)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '1.5rem', fontWeight: 'bold'
              }}>
                <img src="seo2geo.png" alt="SEO 到 GEO 演进图" style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Core Technology */}
      <section className="section-padding" style={{ background: '#f8fbff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem' }}>
            <span style={{ color: '#C12A2D', fontWeight: 'bold' }}>二、核心技术层</span>
            <h2 style={{ fontSize: '2.5rem', marginTop: '1rem', color: '#1E5289' }}>三大优化引擎</h2>
            <p style={{ color: '#666', marginTop: '1rem' }}>这是解决方案的驱动核心，通过技术手段实现“占领 AI 平台流量”</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
            <div style={{ background: 'white', padding: '3rem 2rem', borderRadius: '24px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', textAlign: 'center' }}>
              <div style={{ width: '70px', height: '70px', borderRadius: '20px', background: 'rgba(30, 82, 137, 0.1)', color: '#1E5289', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem' }}>
                <Radar size={32} />
              </div>
              <h3 style={{ marginBottom: '1rem', color: '#333' }}>问题抓取引擎（问题雷达）</h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>实时监控主流 AI 平台（豆包、元宝、千问等）用户的高频搜索问题，精准洞察需求。</p>
            </div>

            <div style={{ background: 'white', padding: '3rem 2rem', borderRadius: '24px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', textAlign: 'center' }}>
              <div style={{ width: '70px', height: '70px', borderRadius: '20px', background: 'rgba(193, 42, 45, 0.1)', color: '#C12A2D', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem' }}>
                <Factory size={32} />
              </div>
              <h3 style={{ marginBottom: '1rem', color: '#333' }}>内容生产引擎（内容工厂）</h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>遵从谷歌 EEAT 标准（经验、权威性、专业性、可信度），自动生成 AI 偏爱的专业、结构化内容。</p>
            </div>

            <div style={{ background: 'white', padding: '3rem 2rem', borderRadius: '24px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', textAlign: 'center' }}>
              <div style={{ width: '70px', height: '70px', borderRadius: '20px', background: 'rgba(30, 82, 137, 0.1)', color: '#1E5289', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem' }}>
                <LayoutDashboard size={32} />
              </div>
              <h3 style={{ marginBottom: '1rem', color: '#333' }}>效果追踪引擎（仪表盘）</h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>24 小时监测品牌在 AI 平台的推荐率与达标情况，实现数据驱动优化。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Implementation Framework */}
      <section className="section-padding">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem' }}>
            <span style={{ color: '#C12A2D', fontWeight: 'bold' }}>三、实施框架层</span>
            <h2 style={{ fontSize: '2.5rem', marginTop: '1rem', color: '#1E5289' }}>六步落地闭环</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '3rem' }}>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <div style={{ flexShrink: 0, width: '24px', background: 'linear-gradient(to bottom, #1E5289, #C12A2D)', borderRadius: '20px', alignSelf: 'stretch' }}></div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', padding: '1rem 0' }}>
                <div>
                  <h4 style={{ color: '#1E5289', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><BarChart3 size={20} /> 1. 数据分析</h4>
                  <p style={{ color: '#666', fontSize: '0.95rem' }}>进行 GEO 需求洞察与语义分析，形成词包；监测现状；分析 AI 平台算法与内容信源。</p>
                </div>
                <div>
                  <h4 style={{ color: '#1E5289', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><PenTool size={20} /> 2. 内容生成</h4>
                  <p style={{ color: '#666', fontSize: '0.95rem' }}>搭建企业知识库；基于企业数据生成多模态 EEAT 内容；进行大规模、高效率 AIGC。</p>
                </div>
                <div>
                  <h4 style={{ color: '#1E5289', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Share2 size={20} /> 3. 内容分发与对抗</h4>
                  <p style={{ color: '#666', fontSize: '0.95rem' }}>通过多渠道分发；进行 RAG 数据集对抗；布局核心信源与优化信源。</p>
                </div>
                <div>
                  <h4 style={{ color: '#1E5289', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Target size={20} /> 4. 效果转化</h4>
                  <p style={{ color: '#666', fontSize: '0.95rem' }}>提高内容引用率与可信度，标定内容锚点。</p>
                </div>
                <div>
                  <h4 style={{ color: '#1E5289', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Zap size={20} /> 5. 向量语义效果提升</h4>
                  <p style={{ color: '#666', fontSize: '0.95rem' }}>提高 Prompt 适配度，增强上下文关联度。</p>
                </div>
                <div>
                  <h4 style={{ color: '#1E5289', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><ShieldCheck size={20} /> 6. 效果巩固</h4>
                  <p style={{ color: '#666', fontSize: '0.95rem' }}>加强推荐与转化，促进电商与 Agent 服务转化，实现可见度与转化率双重提升。</p>
                </div>
              </div>
            </div>
            <div style={{ background: '#f0f4f8', borderRadius: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1E5289', fontSize: '1.2rem', fontWeight: 'bold', minHeight: '400px' }}>
              <img src="6_img.png" alt="实施框架闭环图" style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Website Infrastructure */}
      <section className="section-padding" style={{ background: '#1E5289', color: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem' }}>
            <span style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 'bold' }}>四、官网基建层</span>
            <h2 style={{ fontSize: '2.5rem', marginTop: '1rem', color: 'white' }}>权威信息源构建</h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', marginTop: '1rem' }}>官网是 AI 验证企业身份的核心源头，四大技术配置优化让官网获得 AI 优先抓取与信任。</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }}>
            <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '2.5rem 1.5rem', borderRadius: '20px' }}>
              <FileText style={{ color: '#fff', marginBottom: '1.5rem' }} size={32} />
              <h4 style={{ marginBottom: '1rem' }}>Robots.txt</h4>
              <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', lineHeight: '1.6' }}>引导 AI 爬虫抓取高价值内容，保护隐私，优化抓取预算。</p>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '2.5rem 1.5rem', borderRadius: '20px' }}>
              <Globe style={{ color: '#fff', marginBottom: '1.5rem' }} size={32} />
              <h4 style={{ marginBottom: '1rem' }}>LLM.txt</h4>
              <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', lineHeight: '1.6' }}>直接告诉 AI 大模型网站核心内容，提供“VIP 通道”。</p>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '2.5rem 1.5rem', borderRadius: '20px' }}>
              <Map style={{ color: '#fff', marginBottom: '1.5rem' }} size={32} />
              <h4 style={{ marginBottom: '1rem' }}>SiteMap.xml</h4>
              <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', lineHeight: '1.6' }}>提供清晰导航，让爬虫快速完整抓取展示信息。</p>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '2.5rem 1.5rem', borderRadius: '20px' }}>
              <Tags style={{ color: '#fff', marginBottom: '1.5rem' }} size={32} />
              <h4 style={{ marginBottom: '1rem' }}>Schema 标记</h4>
              <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', lineHeight: '1.6' }}>提升品牌、产品、评分等信息的识别度与展示样式可信度。</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
