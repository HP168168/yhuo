import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AOSInit from '@/components/AOSInit';

export const metadata = {
  title: '言火AI | 专业的 AI GEO 优化专家',
  description: '言火AI致力于提供专业的 GEO 优化业务和实战课程，助力品牌在生成式 AI 时代实现品牌可见度和推荐率的双重提升。',
  keywords: 'GEO优化, AI搜索优化, 言火AI, AI品牌可见度, AI推荐率提升, 生成式引擎优化',
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>
        <AOSInit />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
