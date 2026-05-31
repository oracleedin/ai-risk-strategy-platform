import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const VIDEO_URL = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOottwIXH07lWA1P/hf_20260418_063509_7d167302-4fd4-480b-8260-18ab572333d4.mp4';

const navItems = [
  { label: '平台能力', href: '#features' },
  { label: '风险场景', href: '#scenarios' },
  { label: '策略闭环', href: '#solution' },
  { label: 'Vibe Coding', href: '#workflow' },
];

const stats = [
  { label: '今日风险案件', value: '128' },
  { label: '高风险命中率', value: '37%' },
  { label: '误杀率预估', value: '4.8%' },
];

export const HeroSection: React.FC = () => {
  const navigate = useNavigate();
  const [videoError, setVideoError] = useState(false);

  return (
    <section className="relative w-full overflow-hidden" style={{ height: '100vh', background: '#000' }}>
      {/* ── Background Video ─────────────────────────────── */}
      {!videoError && (
        <video
          src={VIDEO_URL}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.45 }}
          onError={() => setVideoError(true)}
        />
      )}

      {/* Fallback gradient if video fails */}
      {videoError && (
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at 30% 50%, #1a1a2e 0%, #0a0a0a 50%, #000 100%)',
          }}
        />
      )}

      {/* Dark overlay for text readability */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.55) 60%, rgba(0,0,0,0.9) 100%)',
        }}
      />

      {/* ── Floating Navbar ─────────────────────────────── */}
      <nav className="relative z-20 flex items-center justify-between mx-auto mt-6" style={{ maxWidth: 1200, padding: '0 24px' }}>
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm"
            style={{ background: '#2563eb' }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <span className="text-sm font-semibold text-white tracking-tight">AI 风控策略配置平台</span>
        </div>

        {/* Nav pills — center */}
        <div className="hidden md:flex items-center gap-1 p-1 rounded-full" style={{ background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.12)' }}>
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="px-4 py-1.5 text-sm text-white/70 hover:text-white rounded-full transition-colors duration-150"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA pill — right */}
        <button
          onClick={() => navigate('/risk-console')}
          className="px-4 py-2 rounded-full text-sm font-semibold text-white transition-all duration-150 hover:opacity-90"
          style={{ background: '#2563eb', boxShadow: '0 0 20px rgba(37,99,235,0.4)' }}
        >
          进入后台
        </button>
      </nav>

      {/* ── Hero Content ──────────────────────────────── */}
      <div
        className="relative z-20 flex flex-col items-center justify-center text-center mx-auto"
        style={{ height: 'calc(100vh - 96px)', maxWidth: 900, padding: '0 24px' }}
      >
        {/* Eyebrow */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium text-white/80 mb-8"
          style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)' }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          风控策略产品 Demo · 面向 PM 求职作品集
        </div>

        {/* Staggered Headline */}
        <h1 className="text-white leading-none mb-8 tracking-tight" style={{ fontSize: 'clamp(3.5rem, 10vw, 7.5rem)', fontWeight: 800 }}>
          <span className="block" style={{ opacity: 0.9 }}>智能识别</span>
          <span
            className="block"
            style={{
              background: 'linear-gradient(135deg, #60a5fa 0%, #818cf8 50%, #c084fc 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            风险交易
          </span>
          <span className="block" style={{ opacity: 0.9 }}>策略闭环</span>
        </h1>

        {/* Subheading */}
        <p
          className="text-lg md:text-xl text-white/60 leading-relaxed mb-10"
          style={{ maxWidth: 640, fontWeight: 400 }}
        >
          面向交易平台风控 / 治理 / 策略团队，支持风险案件识别、规则策略配置、AI 风险解释、人工复核和策略效果看板，帮助团队平衡风险拦截率、误杀率与审核成本。
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <button
            onClick={() => navigate('/risk-console')}
            className="px-7 py-3.5 rounded-lg font-semibold text-white transition-all duration-150 hover:-translate-y-px"
            style={{ background: '#2563eb', boxShadow: '0 4px 20px rgba(37,99,235,0.45)' }}
          >
            进入风控后台
          </button>
          <button
            onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-7 py-3.5 rounded-lg font-semibold text-white transition-all duration-150 hover:-translate-y-px"
            style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', backdropFilter: 'blur(8px)' }}
          >
            查看核心功能
          </button>
        </div>

        {/* Stats Row */}
        <div className="flex items-center gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p
                className="text-3xl font-bold text-white mb-1"
                style={{ fontWeight: 700 }}
              >
                {s.value}
              </p>
              <p className="text-xs text-white/40 uppercase tracking-wider">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Bottom Gradient Fade ─────────────────────── */}
      <div
        className="absolute bottom-0 left-0 right-0 z-10"
        style={{ height: 120, background: 'linear-gradient(to bottom, transparent, #f8fafc)' }}
      />
    </section>
  );
};

export default HeroSection;