import PageHeader from '@/components/layout/PageHeader';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import Image from 'next/image';
import styles from '@/components/sections/CTA.module.css';

export default function About() {
  return (
    <>
      <PageHeader 
        title="关于言火AI" 
        subtitle="领先的 AI GEO 优化专家，致力于让品牌在生成式 AI 时代赢得先机。" 
      />
      
      {/* About Section */}
      <section className="section-padding">
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: '#1E5289' }}>公司介绍</h2>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#444', marginBottom: '2rem' }}>
              言火AI 是一家专注于 AI 搜索优化（GEO）的技术服务公司。我们拥有一支深耕 AI 算法与全网营销的专家团队，
              致力于帮助企业在 Kimi、豆包、DeepSeek 等生成式搜索引擎中获得更高的品牌曝光度与推荐权重。
            </p>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#444' }}>
              在 AI 时代，传统的 SEO 正在向 GEO 演进。言火AI 通过独创的 AIGC 内容建模与权重算法，
              为品牌量身打造 GEO 策略，让您的品牌成为 AI 推荐的首选答案。
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding" id="contact" style={{ background: '#f8fbff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>联系我们</h2>
              <p style={{ color: '#666', marginBottom: '2.5rem', fontSize: '1.1rem' }}>
                如果您有任何关于 GEO 优化或 AI 搜索流量的需求，欢迎通过以下方式与我们联系。
              </p>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', fontSize: '1.1rem' }}>
                  <div style={{ width: '45px', height: '45px', borderRadius: '50%', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1E5289', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                    <Phone size={20} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 'bold', color: '#333' }}>咨询热线</div>
                    <div style={{ color: '#666' }}>400-800-4439</div>
                  </div>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', fontSize: '1.1rem' }}>
                  <div style={{ width: '45px', height: '45px', borderRadius: '50%', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1E5289', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 'bold', color: '#333' }}>GEO训练师电话</div>
                    <div style={{ color: '#666' }}>13808875768</div>
                  </div>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', fontSize: '1.1rem' }}>
                  <div style={{ width: '45px', height: '45px', borderRadius: '50%', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1E5289', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 'bold', color: '#333' }}>公司地址</div>
                    <div style={{ color: '#666' }}>广州市白云区三元里大道217号民生商业大厦3层.4层</div>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className={styles.ctaBox} style={{ padding: '3rem', borderRadius: '30px', textAlign: 'center' }}>
              <div className={styles.content}>
                <h2 className={styles.title} style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: 'white' }}>
                  准备好在 AI 搜索时代<br />
                  <span className={styles.highlight}>重塑您的品牌影响力</span> 吗？
                </h2>
                <p className={styles.desc} style={{ fontSize: '1rem', marginBottom: '2rem', color: 'rgba(255,255,255,0.8)' }}>
                  立即扫描二维码，添加GEO训练师微信，免费获取 AI 品牌可见度诊断报告。
                </p>
                <div className={styles.qrWrapper} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                  <div className={styles.qrCode} style={{ width: '150px', height: '150px', background: 'white', padding: '10px', borderRadius: '12px' }}>
                    <Image
                      src="/qr-code.jpg"
                      alt="言火AI GEO训练师微信"
                      width={130}
                      height={130}
                      style={{ borderRadius: '4px' }}
                    />
                  </div>
                  <p className={styles.qrHint} style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.9)' }}>立即扫码添加GEO训练师微信</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
