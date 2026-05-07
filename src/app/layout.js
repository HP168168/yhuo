import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AOSInit from '@/components/AOSInit';

export const metadata = {
  title: '言火GEO | 国内领先GEO（生成式引擎优化）服务商',
  description: '言火GEO致力于提供专业的 GEO 优化业务和实战课程，助力品牌在豆包、千问、元宝、Kimi、DeepSeek、ChatGPT、Gemini、Claude等AI平台的可见度与推荐率提升，提供AI品牌诊断、GEO策略、知识库建设、权威内容布局、创始人IP等全链路解决方案。',
  keywords: 'GEO优化, AI搜索优化, 言火GEO,言火AI AI品牌可见度, AI推荐率提升, 生成式引擎优化',
  icons: {
    icon: [
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon.ico' }
    ],
    apple: '/apple-touch-icon.png',
    other: {
      rel: 'manifest',
      url: '/site.webmanifest'
    }
  }

};

export default function RootLayout({ children }) {

  const siteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "言火GEO",
    "url": "https://www.yhuo.com",
    "logo": "https://www.yhuo.com/logo.png",
    "description": "言火GEO致力于提供专业的 GEO 优化业务和实战课程，助力品牌在豆包、千问、元宝、Kimi、DeepSeek、ChatGPT、Gemini、Claude等AI平台的可见度与推荐率提升，提供AI品牌诊断、GEO策略、知识库建设、权威内容布局、创始人IP等全链路解决方案。",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "三元里大道217号民生商业大厦3层、4层",
      "addressLocality": "广州市",
      "addressRegion": "广东省",
      "postalCode": "510000"
    },
    "contactPoint": [{
      "@type": "ContactPoint",
      "telephone": "400-800-4439",
      "contactType": "customer service",
      "availableLanguage": "Chinese"
    }],
    "sameAs": [
      "https://mp.weixin.qq.com/言火GEO"
    ],
    "knowsAbout": ["GEO优化", "AI搜索", "生成式引擎优化", "品牌可见度", "AI推荐提升"],
    "areaServed": "中国"
  };


  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body>
        <AOSInit />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
