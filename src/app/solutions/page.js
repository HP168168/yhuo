import PageHeader from '@/components/layout/PageHeader';

export default function Solutions() {
  return (
    <>
      <PageHeader 
        title="GEO 解决方案" 
        subtitle="从品牌可见度诊断到 AI 推荐率提升，为您提供全链路的 GEO 优化服务。" 
      />
      <section className="section-padding">
        <div className="container">
          <h2>五大服务阶段</h2>
          <p>1. AI 品牌可见度诊断</p>
          <p>2. 品牌知识库建设</p>
          <p>3. 权威内容布局</p>
          <p>4. AI 推荐率提升</p>
          <p>5. 持续监测系统</p>
        </div>
      </section>
    </>
  );
}
