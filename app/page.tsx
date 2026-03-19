'use client';

import { useEffect, useRef } from 'react';
import {
  Rocket,
  Cloud,
  Factory,
  HeadphonesIcon,
  TrendingUp,
  ArrowRight,
  Gauge,
  Shield,
  BarChart3,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import StickyScrollWords from '@/components/sticky-scroll-words';
import { Button } from '@/components/ui/button';

declare global {
  interface Window {
    VANTA?: { FOG: (options: any) => any };
    THREE?: any;
  }
}

const sections = [
  {
    icon: Rocket,
    title: 'Onboarding',
    description: 'Guías paso a paso para comenzar tu viaje en la nube con TD SYNNEX',
    href: '/onboarding',
    color: '#0066cc',
  },
  {
    icon: Cloud,
    title: 'StreamOne ION',
    description: 'Portal de gestión cloud completo para tus operaciones',
    href: '/streamone-ion',
    color: '#003031',
  },
  {
    icon: Factory,
    title: 'Fabricantes',
    description: 'Información y recursos de los principales fabricantes cloud',
    href: '/fabricantes',
    color: '#2e7d32',
  },
  {
    icon: HeadphonesIcon,
    title: 'Soporte',
    description: 'Centro de ayuda y contacto con nuestro equipo de soporte',
    href: '/soporte',
    color: '#ed6c02',
  },
  {
    icon: TrendingUp,
    title: 'Growth Lab',
    description: 'Estrategias y herramientas para hacer crecer tu negocio cloud',
    href: '/growth-lab',
    color: '#9c27b0',
  },
];

const stats = [
  { label: 'Clientes Activos', value: '500+', Icon: Cloud },
  { label: 'Fabricantes Integrados', value: '25+', Icon: Factory },
  { label: 'Recursos Disponibles', value: '1000+', Icon: BarChart3 },
  { label: 'Uptime Garantizado', value: '99.9%', Icon: Gauge },
];

const features = [
  {
    Icon: Rocket,
    title: 'Onboarding Rápido',
    description: 'Comienza en minutos con nuestras guías paso a paso y herramientas automatizadas',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  },
  {
    Icon: Shield,
    title: 'Seguridad de Nivel Empresarial',
    description: 'Protección avanzada con cumplimiento de estándares internacionales',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  },
  {
    Icon: BarChart3,
    title: 'Analytics en Tiempo Real',
    description: 'Visualiza el rendimiento y métricas clave de tu infraestructura cloud',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  },
  {
    Icon: Sparkles,
    title: 'Automatización Inteligente',
    description: 'Optimiza procesos con IA y machine learning integrado',
    gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0, 0, 0.2, 1] as any } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const scaleIn = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.5, ease: [0, 0, 0.2, 1] as any } },
};

export default function Home() {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);

  const statsRef = useRef(null);
  const featuresRef = useRef(null);
  const sectionsRef = useRef(null);

  const statsInView = useInView(statsRef, { once: true, amount: 0.3 });
  const featuresInView = useInView(featuresRef, { once: true, amount: 0.2 });
  const sectionsInView = useInView(sectionsRef, { once: true, amount: 0.2 });

  useEffect(() => {
    if (!vantaEffect.current && vantaRef.current) {
      const initVanta = () => {
        if (window.VANTA && window.THREE) {
          vantaEffect.current = window.VANTA.FOG({
            el: vantaRef.current,
            THREE: window.THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            highlightColor: 0x603b,
            midtoneColor: 0x56a53,
            lowlightColor: 0x86351,
            baseColor: 0x4332b,
            blurFactor: 0.45,
            speed: 1.5,
            zoom: 2.0,
          });
        }
      };
      if (window.VANTA && window.THREE) {
        initVanta();
      } else {
        const check = setInterval(() => {
          if (window.VANTA && window.THREE) { clearInterval(check); initVanta(); }
        }, 100);
        return () => clearInterval(check);
      }
    }
    return () => { if (vantaEffect.current) vantaEffect.current.destroy(); };
  }, []);

  return (
    <div className="overflow-hidden">

      {/* ── Hero ── */}
      <div
        ref={vantaRef}
        className="relative flex items-center justify-center"
        style={{ height: '70vh' }}
      >
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center rounded-full px-4 py-2 mb-6 text-sm font-semibold text-white backdrop-blur-md"
              style={{ background: 'rgba(255,255,255,0.15)' }}>
              Bienvenido a TD SYNNEX
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4"
              style={{ textShadow: '0 2px 20px rgba(0,0,0,0.3)' }}>
              Cloud Customer
              <br />
              Success Hub
            </h1>

            <p className="text-lg md:text-2xl text-white/95 mb-8 max-w-2xl leading-relaxed"
              style={{ textShadow: '0 1px 10px rgba(0,0,0,0.2)' }}>
              Tu centro de recursos, conocimiento y herramientas para el éxito en
              soluciones cloud empresariales
            </p>

            <div className="flex flex-wrap gap-3">
              <Button href="/onboarding" variant="default" size="lg"
                className="bg-white text-[#005657] hover:bg-white/90 shadow-xl font-bold text-base px-6">
                Comenzar Ahora
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/soporte" variant="outline" size="lg"
                className="border-white/60 text-white hover:bg-white/15 backdrop-blur-sm text-base px-6">
                Contactar Soporte
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
            <div className="w-7 h-12 rounded-[20px] border-2 border-white/70 flex justify-center pt-2">
              <div className="w-1 h-2 rounded-full bg-white" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Sticky Scroll Words ── */}
      <StickyScrollWords />

      {/* ── Stats ── */}
      <div ref={statsRef} className="py-16 md:py-20 bg-gradient-to-b from-[var(--accent-subtle)]/30 to-[var(--background)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div
            initial="hidden"
            animate={statsInView ? 'visible' : 'hidden'}
            variants={stagger}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <motion.div key={stat.label} variants={scaleIn}>
                  <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-6 text-center transition-all hover:-translate-y-2 hover:shadow-lg hover:border-[#005657]/40">
                    <div className="flex justify-center mb-3 text-[#005657]">
                      <stat.Icon className="h-6 w-6" />
                    </div>
                    <p className="text-3xl font-extrabold text-[#005657] mb-1">{stat.value}</p>
                    <p className="text-xs text-[var(--muted-foreground)] font-medium">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Features ── */}
      <div ref={featuresRef} className="py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div initial="hidden" animate={featuresInView ? 'visible' : 'hidden'} variants={fadeInUp}>
            <div className="text-center mb-12">
              <span className="inline-flex items-center rounded-full bg-[var(--accent-subtle)] text-[#005657] px-3 py-1 text-xs font-semibold mb-3">
                Características
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--foreground)] mb-3">
                Todo lo que necesitas para el éxito
              </h2>
              <p className="text-[var(--muted-foreground)] max-w-xl mx-auto">
                Herramientas y recursos diseñados para maximizar tu inversión cloud
              </p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={featuresInView ? 'visible' : 'hidden'}
            variants={stagger}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {features.map((f) => (
                <motion.div key={f.title} variants={fadeInUp}>
                  <div className="group rounded-xl border border-[var(--border)] bg-[var(--background)] p-6 h-full transition-all hover:-translate-y-2 hover:shadow-xl">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center text-white mb-5 transition-transform group-hover:scale-110 group-hover:rotate-3"
                      style={{ background: f.gradient }}
                    >
                      <f.Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-bold text-[var(--foreground)] mb-2">{f.title}</h3>
                    <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">{f.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Sections Navigation ── */}
      <div
        ref={sectionsRef}
        className="py-16 md:py-20 bg-gradient-to-b from-[var(--background)] to-[var(--accent-subtle)]/20"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div initial="hidden" animate={sectionsInView ? 'visible' : 'hidden'} variants={fadeInUp}>
            <div className="text-center mb-12">
              <span className="inline-flex items-center rounded-full bg-[var(--accent-subtle)] text-[#005657] px-3 py-1 text-xs font-semibold mb-3">
                Explorar Secciones
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--foreground)] mb-3">
                Navega por nuestras áreas especializadas
              </h2>
              <p className="text-[var(--muted-foreground)] max-w-xl mx-auto">
                Cada sección está diseñada para proporcionarte información y herramientas específicas
              </p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={sectionsInView ? 'visible' : 'hidden'}
            variants={stagger}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {sections.map((section) => (
                <motion.div key={section.href} variants={scaleIn} whileHover={{ scale: 1.03 }}>
                  <Link
                    href={section.href}
                    className="group relative flex flex-col h-full rounded-xl border border-[var(--border)] bg-[var(--background)] overflow-hidden transition-all hover:-translate-y-3 hover:shadow-xl"
                  >
                    {/* Background tint */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ background: `linear-gradient(135deg, ${section.color}08 0%, transparent 100%)` }}
                    />
                    <div className="relative p-5 flex-1">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                        style={{ background: `${section.color}22`, color: section.color }}
                      >
                        <section.icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-lg font-bold text-[var(--foreground)] mb-1">{section.title}</h3>
                      <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">{section.description}</p>
                      <div
                        className="mt-3 flex items-center text-sm font-semibold transition-transform group-hover:translate-x-2"
                        style={{ color: section.color }}
                      >
                        Explorar
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── CTA ── */}
      <div className="py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="relative rounded-2xl overflow-hidden px-8 md:px-16 py-12 text-white text-center"
              style={{ background: 'linear-gradient(135deg, #003031 0%, #005657 100%)' }}
            >
              {/* Decorative circles */}
              <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-white/10" />
              <div className="absolute -bottom-36 -left-24 w-96 h-96 rounded-full bg-white/5" />

              <div className="relative z-10 max-w-2xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-extrabold mb-3">¿Listo para comenzar?</h2>
                <p className="text-white/90 text-lg mb-8">
                  Únete a cientos de empresas que ya confían en TD SYNNEX para su transformación cloud
                </p>
                <div className="flex flex-wrap gap-3 justify-center">
                  <Button href="/onboarding" variant="default" size="lg"
                    className="bg-white text-[#005657] hover:bg-white/90 font-bold text-base px-6">
                    Empezar Ahora
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button href="/soporte" variant="outline" size="lg"
                    className="border-white/50 text-white hover:bg-white/15 text-base px-6">
                    Hablar con un Experto
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
