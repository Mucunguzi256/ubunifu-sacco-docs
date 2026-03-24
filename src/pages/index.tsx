import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}
    >
      {/* ── Hero ── */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-card">
          {/* Badges */}
          <div className="hero-badges">
            <span style={{
              background: 'rgba(108,99,255,0.18)',
              color: '#A78BFA',
              padding: '5px 15px',
              borderRadius: 999,
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
            }}>v1.0 Docs</span>
            <span style={{
              background: 'rgba(34,211,238,0.15)',
              color: '#22D3EE',
              padding: '5px 15px',
              borderRadius: 999,
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
            }}>Open Source</span>
          </div>

          {/* Heading */}
          <h1 style={{
            fontSize: '2.95rem',
            fontWeight: 700,
            color: '#ECEFF8',
            lineHeight: 1.2,
            marginBottom: '0.9rem',
            letterSpacing: '0.02em',
          }}>
            Technical Documentation Portal
          </h1>

          {/* Subtitle */}
          <p style={{
            fontSize: '1.08rem',
            color: '#B8BEDD',
            marginBottom: '2.25rem',
            lineHeight: 1.4,
            maxWidth: '36rem',
            margin: '0 auto 2.25rem',
          }}>
            Technical reference and implementation documentation for Ubunifu SACCO.
          </p>

          {/* CTA Buttons */}
          <div className="hero-buttons">
            <Link
              to="/docs"
              className="hero-cta"
            >
              Explore Documentation
            </Link>
          </div>
        </div>
      </div>
      </section>
    </Layout>
  );
}
