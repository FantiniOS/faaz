"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  Award,
  Building2,
  Calendar,
  Check,
  CheckCircle2,
  ChevronDown,
  Clock,
  Droplets,
  HeartPulse,
  Lock,
  MapPin,
  Menu,
  MessageCircle,
  Moon,
  Phone,
  Pill,
  Radio,
  Scale,
  Shield,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star,
  Stethoscope,
  TrendingDown,
  TrendingUp,
  X,
  Zap,
} from "lucide-react";

export default function Home() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<"endocrino" | "cirurgia" | "app">("endocrino");
  const [activeAppTab, setActiveAppTab] = useState<"glicemia" | "rotina" | "mensagens">("glicemia");
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [currentGlucose, setCurrentGlucose] = useState<number>(98);
  const [waterGlasses, setWaterGlasses] = useState<number>(6);
  const [medsChecked, setMedsChecked] = useState<{ [key: string]: boolean }>({
    coq10: true,
    magnesio: true,
    creatina: false,
  });

  // Simulação de telemetria em tempo real
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGlucose((prev) => {
        const delta = Math.floor(Math.random() * 5) - 2;
        const next = prev + delta;
        return next >= 92 && next <= 104 ? next : prev;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // ===== Estado do menu superior =====
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [activeSection, setActiveSection] = useState<string>("");
  const [megaOpen, setMegaOpen] = useState<boolean>(false);
  const megaTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openMega = () => {
    if (megaTimer.current) clearTimeout(megaTimer.current);
    setMegaOpen(true);
  };
  const closeMega = () => {
    if (megaTimer.current) clearTimeout(megaTimer.current);
    megaTimer.current = setTimeout(() => setMegaOpen(false), 180);
  };

  // Navbar compacta ao rolar + barra de progresso de leitura
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 30);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(max > 0 ? Math.min(100, (y / max) * 100) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Destaque automático da seção ativa no menu
  useEffect(() => {
    const ids = ["jornada-faaz", "cirurgia-plastica", "app-showcase", "a-clinica", "depoimentos", "faq"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const navLinks: { id: string; label: string; accent: "emerald" | "cyan" | "amber" }[] = [
    { id: "cirurgia-plastica", label: "Cirurgia Plástica", accent: "cyan" },
    { id: "app-showcase", label: "App EnDoc", accent: "amber" },
    { id: "a-clinica", label: "A Clínica", accent: "emerald" },
    { id: "depoimentos", label: "Resultados", accent: "emerald" },
    { id: "faq", label: "Dúvidas", accent: "emerald" },
  ];

  const activeLinkClass = {
    emerald: "text-emerald-800 bg-emerald-50 ring-1 ring-emerald-200",
    cyan: "text-cyan-800 bg-cyan-50 ring-1 ring-cyan-200",
    amber: "text-amber-800 bg-amber-50 ring-1 ring-amber-200",
  };
  const activeDotClass = {
    emerald: "bg-emerald-500",
    cyan: "bg-cyan-500",
    amber: "bg-amber-500",
  };

  const megaItems: {
    tab: "endocrino" | "cirurgia" | "app";
    href: string;
    img: string;
    tag: string;
    title: string;
    desc: string;
    tagClass: string;
    linkClass: string;
  }[] = [
    {
      tab: "endocrino",
      href: "#jornada-faaz",
      img: "/doctor-consultation.jpg",
      tag: "Presencial + App",
      title: "Endocrinologia Avançada",
      desc: "Tireoide, metabolismo, hormônios e emagrecimento com bioimpedância.",
      tagClass: "bg-emerald-500/90",
      linkClass: "text-emerald-700",
    },
    {
      tab: "cirurgia",
      href: "#cirurgia-plastica",
      img: "/body-contour.jpg",
      tag: "100% Hospitalar",
      title: "Cirurgia Plástica",
      desc: "Lipo HD, mamas, abdominoplastia e face em hospitais de BH.",
      tagClass: "bg-cyan-500/90",
      linkClass: "text-cyan-700",
    },
    {
      tab: "app",
      href: "#app-showcase",
      img: "/patient-vitality.jpg",
      tag: "Exclusivo Endócrino",
      title: "App EnDoc 2.0",
      desc: "Glicemia, hábitos e chat com o médico 365 dias por ano.",
      tagClass: "bg-amber-500/90",
      linkClass: "text-amber-700",
    },
  ];

  const phoneNumber = "(31) 98440-0076";
  const whatsappUrl =
    "https://wa.me/5531984400076?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta%20presencial%20na%20Cl%C3%ADnica%20FAAZ.";
  const whatsappCirurgiaUrl =
    "https://wa.me/5531984400076?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20em%20Cirurgia%20Pl%C3%A1stica%20na%20Cl%C3%ADnica%20FAAZ%20em%20Belo%20Horizonte.";

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "Como funciona a consulta presencial na Clínica FAAZ?",
      answer:
        "Nossas consultas são 100% presenciais em nossa sede nobre em Belo Horizonte, com duração estendida de 60 a 90 minutos. Realizamos exame físico detalhado, bioimpedância hospitalar segmentada no próprio consultório e, para pacientes de endocrinologia, o pareamento do sensor de glicose contínua (CGM).",
    },
    {
      question: "O aplicativo EnDoc 2.0 serve para ambas as especialidades?",
      answer:
        "O acompanhamento diário contínuo via aplicativo EnDoc 2.0 é exclusivo para pacientes em tratamento de Endocrinologia Avançada. Na Cirurgia Plástica, todo o pré, ato cirúrgico hospitalar e pós-operatório (curativos e revisões) são conduzidos presencialmente pela equipe cirúrgica em Belo Horizonte.",
    },
    {
      question: "Onde são realizadas as cirurgias plásticas?",
      answer:
        "Todas as cirurgias plásticas são realizadas exclusivamente em hospitais de grande porte acreditados de Belo Horizonte, equipados com CTI/UTI adulto e retaguarda completa de suporte intensivo e equipe de anestesiologia dedicada. Não realizamos cirurgias em consultório.",
    },
    {
      question: "Vocês atendem por convênios médicos ou somente particular?",
      answer:
        "Atendemos no modelo exclusivamente particular para garantir tempo estendido, atenção integral e medicina personalizada. Emitimos nota fiscal e relatório médico circunstanciado para solicitação de reembolso junto ao seu plano de saúde.",
    },
    {
      question: "Moro em outra cidade ou estado. É viável realizar o tratamento na FAAZ?",
      answer:
        "Sim. Recebemos pacientes de todo o Brasil para a consulta presencial e exames em Belo Horizonte. Para a Endocrinologia, todo o monitoramento de biomarcadores dos meses seguintes segue pelo aplicativo exclusivo da clínica.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#fafbfc] text-slate-800 flex flex-col selection:bg-emerald-600 selection:text-white overflow-x-hidden">
      {/* Background decorativo Clean Luxury */}
      <div className="pointer-events-none fixed inset-0 bg-luxury-glow z-0" />
      <div className="pointer-events-none fixed inset-0 bg-grid-pattern-light opacity-60 z-0" />

      {/* TOP ANNOUNCEMENT BAR */}
      <div className="relative z-30 bg-gradient-to-r from-emerald-900 via-teal-800 to-emerald-900 text-center py-2 px-3 sm:px-4 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 animate-shimmer-slow bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <p className="relative text-[11px] sm:text-xs text-emerald-50 font-medium flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
          <span className="inline-flex items-center gap-1.5 text-amber-200 font-bold tracking-widest uppercase text-[10px]">
            <MapPin className="w-3 h-3" /> Belo Horizonte
          </span>
          <span className="hidden sm:inline text-emerald-400/50">|</span>
          <span className="hidden sm:inline">Endocrinologia Avançada & Cirurgia Plástica • Consultas presenciais</span>
          <span className="hidden md:inline text-emerald-400/50">|</span>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-amber-200 hover:text-white font-semibold transition-colors"
          >
            Falar com a recepção <ArrowRight className="w-3 h-3" />
          </a>
        </p>
      </div>

      {/* NAVBAR FLUTUANTE PREMIUM */}
      <header className="sticky top-0 z-40 px-3 sm:px-5 pt-3 pb-1">
        <div
          className={`relative mx-auto transition-all duration-500 ease-out ${
            scrolled ? "max-w-6xl" : "max-w-7xl"
          }`}
        >
          {/* Borda em gradiente dourado → esmeralda → ciano */}
          <div
            className={`rounded-full p-[1.5px] bg-gradient-to-r from-amber-300 via-emerald-300 to-cyan-300 transition-shadow duration-500 ${
              scrolled
                ? "shadow-[0_18px_50px_-12px_rgba(15,23,42,0.25)]"
                : "shadow-[0_10px_40px_-15px_rgba(16,185,129,0.35)]"
            }`}
          >
            <div
              className={`relative rounded-full bg-white/85 backdrop-blur-2xl flex items-center justify-between gap-3 pl-2 pr-2 transition-all duration-500 ${
                scrolled ? "h-14" : "h-[70px]"
              }`}
            >
              {/* Logo com anel dourado giratório */}
              <Link href="/" className="flex items-center gap-3 group flex-shrink-0 pl-1">
                <div
                  className={`relative rounded-full overflow-hidden flex-shrink-0 transition-all duration-500 ${
                    scrolled ? "w-10 h-10" : "w-12 h-12"
                  }`}
                >
                  <div
                    className="absolute -inset-1 animate-spin-slow"
                    style={{
                      background:
                        "conic-gradient(from 0deg, #f59e0b, #fde68a, #10b981, #22d3ee, #f59e0b)",
                    }}
                  />
                  <div className="absolute inset-[2px] rounded-full bg-white flex items-center justify-center">
                    <img
                      src="/logo-faaz.png"
                      alt="Clínica FAAZ"
                      className="w-[70%] h-[70%] object-contain group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="font-black text-base sm:text-lg tracking-tight text-slate-900 leading-none">
                    CLÍNICA{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-600">
                      FAAZ
                    </span>
                  </span>
                  <span
                    className={`text-[9px] sm:text-[10px] tracking-[0.18em] uppercase text-slate-500 font-semibold overflow-hidden transition-all duration-500 ${
                      scrolled ? "max-h-0 opacity-0 mt-0" : "max-h-4 opacity-100 mt-1"
                    }`}
                  >
                    Endocrinologia & Cirurgia Plástica
                  </span>
                </div>
              </Link>

              {/* Navegação Desktop */}
              <nav className="hidden xl:flex items-center gap-1 text-[13px] font-semibold">
                {/* Especialidades com Mega Menu */}
                <div onMouseEnter={openMega} onMouseLeave={closeMega}>
                  <button
                    onClick={() => setMegaOpen((v) => !v)}
                    className={`relative inline-flex items-center gap-1 px-3.5 py-2 rounded-full transition-all duration-300 cursor-pointer ${
                      megaOpen || activeSection === "jornada-faaz"
                        ? activeLinkClass.emerald
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/80"
                    }`}
                  >
                    <span>Especialidades</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-300 ${megaOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                </div>

                {navLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <a
                      key={link.id}
                      href={`#${link.id}`}
                      className={`relative px-3.5 py-2 rounded-full transition-all duration-300 ${
                        isActive
                          ? activeLinkClass[link.accent]
                          : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/80"
                      }`}
                    >
                      {link.id === "cirurgia-plastica" && (
                        <Sparkles className="inline w-3.5 h-3.5 mr-1 -mt-0.5 text-cyan-500" />
                      )}
                      {link.label}
                      <span
                        className={`absolute left-1/2 -translate-x-1/2 -bottom-1 h-1 rounded-full transition-all duration-300 ${
                          isActive ? `w-4 ${activeDotClass[link.accent]}` : "w-0 bg-transparent"
                        }`}
                      />
                    </a>
                  );
                })}
              </nav>

              {/* Ações */}
              <div className="flex items-center gap-2 flex-shrink-0">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden inline-flex items-center gap-2 rounded-full pl-1.5 pr-4 sm:pr-5 py-1.5 bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-emerald-600/30 hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
                >
                  <span className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 bg-gradient-to-r from-transparent via-white/45 to-transparent skew-x-[-20deg] animate-shimmer" />
                  <span className="relative w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/20 ring-1 ring-white/30 flex items-center justify-center">
                    <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </span>
                  <span className="relative">
                    Agendar<span className="hidden sm:inline"> Consulta</span>
                  </span>
                  <span className="relative flex w-2 h-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-200 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-300" />
                  </span>
                </a>

                {/* Hamburger Mobile */}
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  aria-label="Abrir menu"
                  className="xl:hidden w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-slate-800 transition-colors"
                >
                  {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
              </div>

              {/* Barra de progresso de leitura */}
              <div className="pointer-events-none absolute bottom-0 left-10 right-10 h-[2px] rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-amber-400 via-emerald-500 to-cyan-500 transition-[width] duration-150"
                  style={{ width: `${scrollProgress}%` }}
                />
              </div>
            </div>
          </div>

          {/* MEGA MENU — ESPECIALIDADES */}
          <div
            onMouseEnter={openMega}
            onMouseLeave={closeMega}
            className={`hidden xl:block absolute left-0 right-0 top-full pt-3 transition-all duration-300 ${
              megaOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2 pointer-events-none"
            }`}
          >
            <div className="rounded-3xl bg-white/95 backdrop-blur-2xl border border-slate-200 shadow-[0_30px_80px_-20px_rgba(15,23,42,0.35)] p-4">
              <div className="grid grid-cols-3 gap-4">
                {megaItems.map((item) => (
                  <a
                    key={item.tab}
                    href={item.href}
                    onClick={() => {
                      setActiveTab(item.tab);
                      setMegaOpen(false);
                    }}
                    className="group rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="relative h-36 overflow-hidden">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent" />
                      <span
                        className={`absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider text-white px-2.5 py-1 rounded-full ${item.tagClass}`}
                      >
                        {item.tag}
                      </span>
                      <span className="absolute bottom-3 left-3 text-white font-black text-lg drop-shadow">
                        {item.title}
                      </span>
                    </div>
                    <div className="p-3.5">
                      <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                      <span className={`mt-2 inline-flex items-center gap-1 text-xs font-bold ${item.linkClass}`}>
                        Conhecer <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </a>
                ))}
              </div>
              <div className="mt-4 flex items-center justify-between rounded-2xl bg-gradient-to-r from-amber-50 via-emerald-50 to-cyan-50 border border-slate-200/70 px-4 py-3 text-xs">
                <span className="flex items-center gap-2 text-slate-700 font-medium">
                  <Clock className="w-4 h-4 text-emerald-600" />
                  Consultas presenciais em Belo Horizonte • Seg a Sex, 08h às 20h
                </span>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-bold text-emerald-700 hover:text-emerald-800"
                >
                  Agendar pelo WhatsApp <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* MENU MOBILE */}
          {mobileMenuOpen && (
            <div className="xl:hidden absolute left-0 right-0 top-full mt-3 rounded-3xl bg-white/97 backdrop-blur-2xl border border-slate-200 shadow-2xl p-4 max-h-[calc(100vh-8rem)] overflow-y-auto animate-menu-in">
              <div className="grid grid-cols-3 gap-2.5 mb-4">
                {megaItems.map((item) => (
                  <a
                    key={item.tab}
                    href={item.href}
                    onClick={() => {
                      setActiveTab(item.tab);
                      setMobileMenuOpen(false);
                    }}
                    className="relative h-28 rounded-2xl overflow-hidden"
                  >
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                    <span className="absolute bottom-2 left-2 right-2 text-white text-[11px] font-bold leading-tight">
                      {item.title}
                    </span>
                  </a>
                ))}
              </div>

              <nav className="flex flex-col text-sm font-semibold text-slate-700">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-3 py-3 rounded-xl flex items-center justify-between transition-colors ${
                      activeSection === link.id ? activeLinkClass[link.accent] : "hover:bg-slate-50"
                    }`}
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                  </a>
                ))}
              </nav>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-bold text-sm shadow-lg shadow-emerald-600/25"
              >
                <Calendar className="w-4 h-4" />
                Agendar Consulta no WhatsApp
              </a>
            </div>
          )}
        </div>
      </header>

      {/* CONTEÚDO PRINCIPAL */}
      <main className="relative z-10 flex-1 flex flex-col">
        {/* HERO SECTION DE ALTO IMPACTO (CLEAN LUXURY) */}
        <section className="relative pt-8 pb-16 sm:pt-14 sm:pb-24 lg:pt-16 lg:pb-28 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Lado Esquerdo: Mensagem e Ação */}
              <div className="lg:col-span-7 flex flex-col items-start text-left">
                {/* Badge Dourada com Logo */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-200/80 bg-amber-50/80 text-amber-900 text-xs font-semibold mb-5 backdrop-blur-md shadow-xs">
                  <img
                    src="/logo-faaz.png"
                    alt="Logo FAAZ"
                    className="w-4 h-4 object-contain flex-shrink-0"
                  />
                  <span>CLÍNICA FAAZ • SEDE PRÓPRIA EM BELO HORIZONTE</span>
                </div>

                {/* Título de Impacto */}
                <h1 className="text-3xl sm:text-5xl lg:text-[3.6rem] font-black tracking-tight text-slate-900 leading-[1.12] mb-5">
                  Medicina de Alta Precisão &{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600">
                    Cirurgia Plástica de Elite
                  </span>
                </h1>

                {/* Subtítulo Sintético e Direto */}
                <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl mb-8">
                  Consultas presenciais detalhadas com bioimpedância hospitalar no consultório e suporte contínuo
                  via <strong>aplicativo exclusivo EnDoc 2.0</strong> para pacientes de endocrinologia.
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-10">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 sm:py-4 rounded-xl text-sm sm:text-base font-bold bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-emerald-600/25 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <Calendar className="w-5 h-5 text-white" />
                    <span>Agendar Consulta Presencial</span>
                    <ArrowRight className="w-4 h-4 text-white" />
                  </a>

                  <a
                    href="#cirurgia-plastica"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-4 rounded-xl text-sm sm:text-base font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200/90 shadow-xs hover:border-slate-300 transition-all duration-300"
                  >
                    <Sparkles className="w-4 h-4 text-cyan-600" />
                    <span>Cirurgia Plástica</span>
                  </a>
                </div>

                {/* 3 Métricas de Impacto em Destaque */}
                <div className="pt-6 border-t border-slate-200 grid grid-cols-3 gap-3 sm:gap-6 w-full max-w-xl">
                  <div>
                    <div className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                      60-90 min
                    </div>
                    <div className="text-[11px] sm:text-xs text-slate-500 mt-1 font-medium">
                      Consulta Presencial Exclusiva
                    </div>
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl md:text-3xl font-extrabold text-emerald-600 tracking-tight">
                      365 Dias
                    </div>
                    <div className="text-[11px] sm:text-xs text-slate-500 mt-1 font-medium">
                      Suporte no App (Endócrino)
                    </div>
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl md:text-3xl font-extrabold text-cyan-600 tracking-tight">
                      100%
                    </div>
                    <div className="text-[11px] sm:text-xs text-slate-500 mt-1 font-medium">
                      Hospitais Acreditados em BH
                    </div>
                  </div>
                </div>
              </div>

              {/* Lado Direito: Composição Visual com Imagem Real + Widgets Flutuantes */}
              <div className="lg:col-span-5 relative w-full flex justify-center">
                <div className="relative w-full max-w-md lg:max-w-none">
                  {/* Foto de Alto Padrão da Consulta Médica */}
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] sm:aspect-[16/11]">
                    <img
                      src="/doctor-consultation.jpg"
                      alt="Consulta Médica de Alta Precisão na Clínica FAAZ"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white text-xs">
                      <span className="font-bold block text-sm">Clínica FAAZ • Belo Horizonte</span>
                      <span className="text-slate-200 text-[11px]">Avaliação Presencial & Exames no Consultório</span>
                    </div>
                  </div>

                  {/* Widget Flutuante 1: Sensor CGM ao Vivo */}
                  <div className="absolute -top-4 -left-4 sm:-left-6 p-3 sm:p-4 rounded-2xl glass-card-light shadow-xl animate-float-slow max-w-[200px] sm:max-w-[230px]">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="flex items-center gap-1.5 text-[10px] font-bold text-cyan-700">
                        <Radio className="w-3 h-3 text-cyan-600 animate-pulse" /> Sensor CGM FAAZ
                      </span>
                      <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800">
                        Ao Vivo
                      </span>
                    </div>
                    <div className="flex items-baseline gap-1 my-1">
                      <span className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                        {currentGlucose}
                      </span>
                      <span className="text-xs text-slate-500 font-semibold">mg/dL</span>
                      <span className="ml-auto text-[10px] text-emerald-700 font-bold bg-emerald-50 px-1.5 py-0.5 rounded">
                        Alvo Ideal ✓
                      </span>
                    </div>
                    {/* Mini Curva SVG */}
                    <div className="w-full h-8 pt-1">
                      <svg viewBox="0 0 100 25" className="w-full h-full">
                        <path
                          d="M 0 16 Q 25 6, 50 12 T 80 8 T 100 10"
                          fill="none"
                          stroke="#059669"
                          strokeWidth="2.5"
                          className="animate-dash-flow"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Widget Flutuante 2: Tempo no Alvo */}
                  <div className="absolute -bottom-5 -right-3 sm:-right-5 p-3 sm:p-4 rounded-2xl glass-card-light shadow-xl animate-float-reverse max-w-[210px] sm:max-w-[240px]">
                    <div className="flex items-center justify-between text-[11px] mb-1">
                      <span className="font-bold text-slate-800 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-500" /> TIR (No Alvo)
                      </span>
                      <span className="text-emerald-700 font-black">96.4%</span>
                    </div>
                    <div className="w-full h-2 rounded-full overflow-hidden flex bg-slate-100 border border-slate-200 my-1.5">
                      <div className="h-full bg-cyan-500 w-[4%]" />
                      <div className="h-full bg-emerald-500 w-[92.4%]" />
                      <div className="h-full bg-amber-400 w-[3.6%]" />
                    </div>
                    <span className="text-[10px] text-slate-500 block">Padrão Ouro Clínico FAAZ</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EXPLORADOR DE JORNADA CLÍNICA (INTERATIVO) */}
        <section id="jornada-faaz" className="py-16 sm:py-20 bg-slate-50/70 border-y border-slate-200/80 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="text-xs uppercase tracking-widest text-emerald-700 font-bold mb-2 block">
                Nossos Pilares de Atuação
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Selecione sua Especialidade de Interesse
              </h2>
              <p className="text-slate-600 mt-2 text-sm sm:text-base">
                Interaja com os cards para conhecer os diferenciais de cada núcleo na Clínica FAAZ.
              </p>

              {/* Botões das Abas */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 max-w-xl mx-auto mt-6">
                <button
                  onClick={() => setActiveTab("endocrino")}
                  className={`px-4 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center justify-center gap-2 ${
                    activeTab === "endocrino"
                      ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/25 scale-[1.02]"
                      : "bg-white text-slate-700 hover:text-slate-900 border border-slate-200 shadow-xs"
                  }`}
                >
                  <Stethoscope className="w-4 h-4 flex-shrink-0" />
                  <span>1. Endocrinologia</span>
                </button>
                <button
                  onClick={() => setActiveTab("cirurgia")}
                  className={`px-4 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center justify-center gap-2 ${
                    activeTab === "cirurgia"
                      ? "bg-cyan-600 text-white shadow-md shadow-cyan-600/25 scale-[1.02]"
                      : "bg-white text-slate-700 hover:text-slate-900 border border-slate-200 shadow-xs"
                  }`}
                >
                  <HeartPulse className="w-4 h-4 flex-shrink-0" />
                  <span>2. Cirurgia Plástica</span>
                </button>
                <button
                  onClick={() => setActiveTab("app")}
                  className={`px-4 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center justify-center gap-2 ${
                    activeTab === "app"
                      ? "bg-amber-600 text-white shadow-md shadow-amber-600/25 scale-[1.02]"
                      : "bg-white text-slate-700 hover:text-slate-900 border border-slate-200 shadow-xs"
                  }`}
                >
                  <Smartphone className="w-4 h-4 flex-shrink-0" />
                  <span>3. App EnDoc 2.0</span>
                </button>
              </div>
            </div>

            {/* Conteúdo Dinâmico das Abas */}
            <div className="max-w-5xl mx-auto rounded-3xl bg-white border border-slate-200 shadow-xl overflow-hidden p-6 sm:p-10">
              {activeTab === "endocrino" && (
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                  <div className="md:col-span-5 rounded-2xl overflow-hidden shadow-lg border border-slate-200 aspect-[4/3]">
                    <img
                      src="/doctor-consultation.jpg"
                      alt="Endocrinologia Avançada"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:col-span-7 flex flex-col justify-between space-y-4">
                    <div>
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                        Presencial em BH + App Contínuo
                      </span>
                      <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-2.5">
                        Endocrinologia & Metabologia Avançada
                      </h3>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-2">
                        Investigação aprofundada de resistência à insulina, tireoide, perda de peso com preservação de massa magra e regulação hormonal com bioimpedância hospitalar na consulta.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700 font-medium">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                        <span>Bioimpedância segmentada na clínica</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                        <span>Instalação de sensor de glicose (CGM)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                        <span>Acompanhamento diário no app</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                        <span>Modulação hormonal personalizada</span>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-xs text-slate-500">Duração: 60 a 90 minutos</span>
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-emerald-600 text-white hover:bg-emerald-500 shadow-md transition-all"
                      >
                        <span>Agendar Endocrinologista</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "cirurgia" && (
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                  <div className="md:col-span-5 rounded-2xl overflow-hidden shadow-lg border border-slate-200 aspect-[4/3]">
                    <img
                      src="/surgical-safety.jpg"
                      alt="Centro Cirúrgico Hospitalar em Belo Horizonte"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:col-span-7 flex flex-col justify-between space-y-4">
                    <div>
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-cyan-50 text-cyan-800 border border-cyan-200">
                        100% Hospital de Referência em BH
                      </span>
                      <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-2.5">
                        Cirurgia Plástica & Contorno Corporal
                      </h3>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-2">
                        Procedimentos cirúrgicos estéticos e reparadores realizados exclusivamente nos centros hospitalares mais modernos de Belo Horizonte, com retaguarda total de CTI e anestesiologista exclusivo.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700 font-medium">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-cyan-600 flex-shrink-0" />
                        <span>Lipoaspiração HD & Contorno 3D</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-cyan-600 flex-shrink-0" />
                        <span>Mastopexia Dual Plane (Sutiã Interno)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-cyan-600 flex-shrink-0" />
                        <span>Abdominoplastia & Reparo de Diástase</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-cyan-600 flex-shrink-0" />
                        <span>Cirurgia Facial Deep Plane & Olhar</span>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-xs text-slate-500">Segurança Hospitalar SBA</span>
                      <a
                        href={whatsappCirurgiaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-cyan-600 text-white hover:bg-cyan-500 shadow-md transition-all"
                      >
                        <span>Avaliar Cirurgia Plástica</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "app" && (
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                  <div className="md:col-span-5 rounded-2xl overflow-hidden shadow-lg border border-slate-200 aspect-[4/3]">
                    <img
                      src="/patient-vitality.jpg"
                      alt="Paciente usando o aplicativo exclusivo da FAAZ"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:col-span-7 flex flex-col justify-between space-y-4">
                    <div>
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200">
                        Exclusivo Pacientes de Endocrinologia
                      </span>
                      <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-2.5">
                        Aplicativo EnDoc 2.0: Acompanhamento 365 Dias
                      </h3>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-2">
                        Sua consulta presencial na FAAZ não termina ao sair da sala. Pelo aplicativo, nossa equipe médica monitora glicemia, hidratação, sono e peso, fazendo intervenções ágeis.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700 font-medium">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0" />
                        <span>Curva glicêmica sincronizada ao vivo</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0" />
                        <span>Canal de suporte direto pós-consulta</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0" />
                        <span>Monitoramento de adesão a metas</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0" />
                        <span>Sem necessidade de retornos frequentes</span>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-xs text-slate-500">Desenvolvido pela Clínica FAAZ</span>
                      <a
                        href="#app-showcase"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-amber-600 text-white hover:bg-amber-500 shadow-md transition-all"
                      >
                        <span>Ver Simulador do App</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* SEÇÃO ÉPICA DE CIRURGIA PLÁSTICA COM IMAGENS REAIS */}
        <section id="cirurgia-plastica" className="py-20 sm:py-28 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Header da Seção */}
            <div className="text-center max-w-3xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-bold uppercase tracking-widest mb-3">
                <img
                  src="/logo-faaz.png"
                  alt="Logo FAAZ"
                  className="w-4 h-4 object-contain flex-shrink-0"
                />
                <span>CIRURGIA PLÁSTICA • BELO HORIZONTE</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
                Harmonia Corporal & Arte Cirúrgica com Segurança Inegociável
              </h2>
              <p className="text-slate-600 mt-4 text-base sm:text-lg">
                Procedimentos realizados nos melhores hospitais de Belo Horizonte, combinando apuro estético,
                tecnologia cirúrgica avançada e suporte metabólico pré e pós-operatório.
              </p>
            </div>

            {/* Galeria Visual dos 4 Procedimentos Principais com Fotos */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {/* Card 1: Lipo HD & Contorno Corporal */}
              <div className="rounded-3xl bg-slate-50 border border-slate-200 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group">
                <div className="relative h-56 sm:h-64 overflow-hidden">
                  <img
                    src="/body-contour.jpg"
                    alt="Lipoaspiração HD e Contorno Corporal"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/90 text-cyan-800 backdrop-blur-md shadow-xs">
                      Alta Definição 3D
                    </span>
                  </div>
                </div>
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-extrabold text-slate-900 mb-2">
                      Lipoaspiração HD & Contorno Corporal
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                      Escultura tridimensional que evidencia as transições musculares anatômicas respeitando sua anatomia natural. Tecnologias de retração dérmica para evitar flacidez e lipoenxertia estruturada.
                    </p>
                    <ul className="space-y-2 text-xs text-slate-700 font-medium mb-6">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-cyan-600 flex-shrink-0" />
                        <span>Transições musculares naturais sem aspecto artificial</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-cyan-600 flex-shrink-0" />
                        <span>Tecnologia de retração cutânea contra flacidez residual</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-cyan-600 flex-shrink-0" />
                        <span>Lipoenxertia glútea planejada milimetricamente</span>
                      </li>
                    </ul>
                  </div>
                  <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                    <span className="text-xs font-mono text-cyan-700 font-semibold">Hospital Acreditado em BH</span>
                    <a
                      href={whatsappCirurgiaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-700 hover:text-cyan-800"
                    >
                      <span>Avaliar com Cirurgião</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Card 2: Cirurgia Facial Deep Plane */}
              <div className="rounded-3xl bg-slate-50 border border-slate-200 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group">
                <div className="relative h-56 sm:h-64 overflow-hidden">
                  <img
                    src="/facial-harmony.jpg"
                    alt="Cirurgia Facial Deep Plane e Rejuvenescimento"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/90 text-cyan-800 backdrop-blur-md shadow-xs">
                      Naturalidade Absoluta
                    </span>
                  </div>
                </div>
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-extrabold text-slate-900 mb-2">
                      Deep Plane Face & Blefaroplastia Estruturada
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                      Reposicionamento profundo dos ligamentos e tecidos faciais (SMAS / Deep Plane) sem tracionar a pele, associado ao tratamento das pálpebras para um olhar descansado e fresco.
                    </p>
                    <ul className="space-y-2 text-xs text-slate-700 font-medium mb-6">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-cyan-600 flex-shrink-0" />
                        <span>Sustentação profunda sem estigma de pele 'repuxada'</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-cyan-600 flex-shrink-0" />
                        <span>Blefaroplastia para remoção de bolsas e olhar pesado</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-cyan-600 flex-shrink-0" />
                        <span>Definição nítida do ângulo da mandíbula e pescoço</span>
                      </li>
                    </ul>
                  </div>
                  <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                    <span className="text-xs font-mono text-cyan-700 font-semibold">Rejuvenescimento Elegante</span>
                    <a
                      href={whatsappCirurgiaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-700 hover:text-cyan-800"
                    >
                      <span>Avaliar com Cirurgião</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Card 3: Mastopexia Dual Plane */}
              <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 inline-block mb-3">
                    Sustentação de Longo Prazo
                  </span>
                  <h3 className="text-xl font-extrabold text-slate-900 mb-2">
                    Mastopexia & Próteses Dual Plane (Sutiã Interno)
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    Técnica moderna de reposicionamento mamário. Acomodação do implante em plano dual com reforço de sustentação interna para colo desenhado e estabilidade duradoura.
                  </p>
                  <ul className="space-y-2 text-xs text-slate-700 font-medium mb-6">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-600 flex-shrink-0" />
                      <span>Colo marcado com transição suave e harmônica</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-600 flex-shrink-0" />
                      <span>Conceito de Sutiã Interno para fixação duradoura</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-600 flex-shrink-0" />
                      <span>Cicatrizes reduzidas em L ou T curto</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-xs font-mono text-cyan-700 font-semibold">Próteses Rastreáveis</span>
                  <a
                    href={whatsappCirurgiaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-700 hover:text-cyan-800"
                  >
                    <span>Avaliar Cirurgia</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Card 4: Abdominoplastia & Fechamento de Diástase */}
              <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 inline-block mb-3">
                    Reparação do Core
                  </span>
                  <h3 className="text-xl font-extrabold text-slate-900 mb-2">
                    Abdominoplastia & Plicatura de Diástase
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    Correção anatômica do afastamento muscular pós-parto ou grande emagrecimento. Reconstrução da cinta abdominal, remoção do excesso dérmico e umbigo proporcional.
                  </p>
                  <ul className="space-y-2 text-xs text-slate-700 font-medium mb-6">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-600 flex-shrink-0" />
                      <span>Fechamento muscular reforçado para suporte postural</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-600 flex-shrink-0" />
                      <span>Umbigo delicado e anatômico sem marcas cirúrgicas óbvias</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-600 flex-shrink-0" />
                      <span>Incisão baixa planejada para ocultação sob biquínis</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-xs font-mono text-cyan-700 font-semibold">Cintura Redefinida</span>
                  <a
                    href={whatsappCirurgiaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-700 hover:text-cyan-800"
                  >
                    <span>Avaliar Cirurgia</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* BOX DE SEGURANÇA HOSPITALAR PADRÃO OURO EM BELO HORIZONTE */}
            <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-slate-50 p-8 sm:p-12 shadow-xl mb-10">
              <div className="max-w-3xl mb-8">
                <span className="text-xs font-mono uppercase tracking-widest text-cyan-700 font-bold block mb-2">
                  Segurança Inegociável • Protocolo FAAZ
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Por Que Operar com a Equipe Cirúrgica da Clínica FAAZ?
                </h3>
                <p className="text-slate-600 text-sm mt-2">
                  Nossa prioridade é sua integridade física e o resultado mais elegante e natural possível.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                  <Building2 className="w-8 h-8 text-cyan-600 mb-3" />
                  <h4 className="text-sm font-bold text-slate-900 mb-1">100% Hospitalar</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Cirurgias realizadas exclusivamente em hospitais acreditados com suporte total de CTI/UTI em Belo Horizonte.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                  <Activity className="w-8 h-8 text-cyan-600 mb-3" />
                  <h4 className="text-sm font-bold text-slate-900 mb-1">Anestesista Dedicado</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Médico anestesiologista (SBA) ao seu lado em tempo integral no bloco operatório e na recuperação.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                  <ShieldCheck className="w-8 h-8 text-cyan-600 mb-3" />
                  <h4 className="text-sm font-bold text-slate-900 mb-1">Prevenção Anti-TVP</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Uso de botas pneumáticas compressivas intraoperatórias e profilaxia rigorosa contra trombose.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                  <Stethoscope className="w-8 h-8 text-cyan-600 mb-3" />
                  <h4 className="text-sm font-bold text-slate-900 mb-1">Sinergia Metabólica</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Preparo endocrinológico prévio para otimizar síntese de colágeno, cicatrização e rápida recuperação.
                  </p>
                </div>
              </div>
            </div>

            {/* Aviso de Transparência sobre o App */}
            <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/70 border border-amber-200/80 flex items-start sm:items-center gap-3.5 mb-8">
              <Lock className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5 sm:mt-0" />
              <p className="text-xs text-slate-700 leading-relaxed">
                <strong>Nota Importante:</strong> O acompanhamento diário contínuo pelo aplicativo EnDoc 2.0 é exclusivo para pacientes em tratamento de Endocrinologia Avançada. Na Cirurgia Plástica, todas as revisões, curativos e retiradas de pontos são realizadas <strong>presencialmente</strong> na Clínica FAAZ em Belo Horizonte.
              </p>
            </div>

            {/* CTA Cirurgia Plástica */}
            <div className="text-center">
              <a
                href={whatsappCirurgiaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-sm sm:text-base font-bold bg-cyan-600 hover:bg-cyan-500 text-white shadow-xl shadow-cyan-600/25 transition-all hover:scale-[1.02]"
              >
                <Calendar className="w-5 h-5" />
                <span>Agendar Avaliação com Cirurgião Plástico</span>
              </a>
            </div>
          </div>
        </section>

        {/* SHOWCASE INTERATIVO DO APP ENDOC 2.0 (ENDOCRINOLOGIA) */}
        <section id="app-showcase" className="py-20 sm:py-28 bg-slate-50 border-t border-slate-200 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs uppercase tracking-widest text-emerald-700 font-bold mb-2 block">
                Tecnologia Exclusiva para Pacientes de Endocrinologia
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
                Seu Endocrinologista Conectado o Ano Todo
              </h2>
              <p className="text-slate-600 mt-3 text-sm sm:text-base">
                O aplicativo proprietário da Clínica FAAZ transforma sua consulta presencial em um acompanhamento contínuo diário.
              </p>

              {/* Botões seletores de tela do App */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 max-w-md mx-auto mt-6">
                <button
                  onClick={() => setActiveAppTab("glicemia")}
                  className={`px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    activeAppTab === "glicemia"
                      ? "bg-emerald-600 text-white shadow-xs"
                      : "bg-white text-slate-700 border border-slate-200"
                  }`}
                >
                  1. Glicemia ao Vivo
                </button>
                <button
                  onClick={() => setActiveAppTab("rotina")}
                  className={`px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    activeAppTab === "rotina"
                      ? "bg-emerald-600 text-white shadow-xs"
                      : "bg-white text-slate-700 border border-slate-200"
                  }`}
                >
                  2. Hábitos Prescritos
                </button>
                <button
                  onClick={() => setActiveAppTab("mensagens")}
                  className={`px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    activeAppTab === "mensagens"
                      ? "bg-emerald-600 text-white shadow-xs"
                      : "bg-white text-slate-700 border border-slate-200"
                  }`}
                >
                  3. Chat com Médico
                </button>
              </div>
            </div>

            {/* Grid: Smartphone Frame + Foto de Paciente */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-12 max-w-5xl mx-auto">
              {/* Smartphone Frame Responsivo */}
              <div className="relative w-full max-w-[320px] h-[620px] rounded-[44px] border-[6px] border-slate-800 bg-slate-900 p-3 shadow-2xl ring-1 ring-slate-900/10">
                {/* Notch */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-4 bg-slate-950 rounded-full z-30 flex items-center justify-between px-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-700" />
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                </div>

                {/* Tela do App */}
                <div className="w-full h-full rounded-[34px] bg-[#0c1214] overflow-hidden flex flex-col justify-between pt-7 pb-4 px-3.5 text-left text-white">
                  {/* Top Bar do App */}
                  <div className="flex items-center justify-between pt-1 pb-3 border-b border-white/[0.08]">
                    <div>
                      <span className="text-[9px] text-emerald-400 block font-mono font-bold tracking-wider">
                        CLÍNICA FAAZ // EN DOC 2.0
                      </span>
                      <span className="text-xs font-bold text-white">Olá, Paciente FAAZ 👋</span>
                    </div>
                    <div className="w-7 h-7 flex items-center justify-center flex-shrink-0">
                      <img
                        src="/logo-faaz.png"
                        alt="Logo FAAZ"
                        className="w-full h-full object-contain filter drop-shadow"
                      />
                    </div>
                  </div>

                  {/* Conteúdo Dinâmico */}
                  <div className="flex-1 py-3 overflow-y-auto space-y-3">
                    {activeAppTab === "glicemia" && (
                      <div className="space-y-3">
                        <div className="p-3.5 rounded-2xl bg-gradient-to-br from-indigo-950/60 via-slate-900 to-emerald-950/50 border border-emerald-500/30">
                          <div className="flex items-center justify-between text-[11px] mb-1">
                            <span className="flex items-center gap-1.5 font-bold text-cyan-400">
                              <Radio className="w-3 h-3 text-cyan-400 animate-pulse" /> Sensor CGM FAAZ
                            </span>
                            <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300">
                              Ao Vivo
                            </span>
                          </div>
                          <div className="flex items-baseline justify-between my-2">
                            <div>
                              <span className="text-3xl font-black text-white tracking-tight">
                                {currentGlucose}
                              </span>
                              <span className="text-xs text-zinc-400 ml-1 font-semibold">mg/dL</span>
                            </div>
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/25 border border-emerald-400/40 text-emerald-300 font-bold">
                              Alvo Ideal ✓
                            </span>
                          </div>
                          <div className="h-14 w-full pt-1">
                            <svg viewBox="0 0 200 50" className="w-full h-full">
                              <path
                                d="M 0 30 Q 25 15, 50 25 T 100 20 T 150 28 T 200 18"
                                fill="none"
                                stroke="#10b981"
                                strokeWidth="2.5"
                                className="animate-dash-flow"
                              />
                            </svg>
                          </div>
                        </div>

                        <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/[0.08]">
                          <div className="flex items-center justify-between text-xs mb-1.5">
                            <span className="font-bold text-white flex items-center gap-1.5">
                              <Droplets className="w-3.5 h-3.5 text-cyan-400" /> Meta Hídrica Prescrita
                            </span>
                            <span className="text-cyan-300 font-bold text-xs">
                              {waterGlasses * 250} ml / 2.500 ml
                            </span>
                          </div>
                          <div className="flex items-center justify-between gap-1 pt-1">
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                              <button
                                key={num}
                                onClick={() => setWaterGlasses(num)}
                                className={`flex-1 h-5 rounded text-[8px] font-bold transition-all ${
                                  num <= waterGlasses
                                    ? "bg-cyan-400 text-black"
                                    : "bg-zinc-800 text-zinc-500"
                                }`}
                              >
                                {num}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {activeAppTab === "rotina" && (
                      <div className="space-y-3">
                        <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/[0.08] space-y-2">
                          <span className="text-xs font-bold text-white block">Suplementação Prescrita</span>
                          {[
                            { id: "coq10", name: "Coenzima Q10 100mg", time: "Manhã" },
                            { id: "magnesio", name: "Magnésio Treonato", time: "Noite" },
                            { id: "creatina", name: "Creatina Monohidratada 5g", time: "Pós-treino" },
                          ].map((med) => (
                            <div
                              key={med.id}
                              onClick={() =>
                                setMedsChecked((p) => ({ ...p, [med.id]: !p[med.id] }))
                              }
                              className={`p-2.5 rounded-xl border flex items-center justify-between cursor-pointer text-xs ${
                                medsChecked[med.id]
                                  ? "bg-emerald-950/40 border-emerald-500/40 text-emerald-200"
                                  : "bg-zinc-900 border-white/[0.06] text-zinc-400"
                              }`}
                            >
                              <div>
                                <span className="font-semibold block">{med.name}</span>
                                <span className="text-[10px] text-zinc-500">{med.time}</span>
                              </div>
                              <div
                                className={`w-4 h-4 rounded-full flex items-center justify-center border ${
                                  medsChecked[med.id]
                                    ? "bg-emerald-500 border-emerald-400 text-black"
                                    : "border-zinc-700"
                                }`}
                              >
                                {medsChecked[med.id] && <Check className="w-3 h-3 stroke-[3]" />}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {activeAppTab === "mensagens" && (
                      <div className="space-y-2.5 text-xs">
                        <div className="p-2.5 rounded-2xl bg-zinc-900 border border-white/[0.06] text-zinc-300">
                          <span className="text-[10px] text-emerald-400 font-bold block mb-1">
                            Dr. FAAZ • Endocrinologista
                          </span>
                          “Parabéns pelos biomarcadores desta semana! Curva de glicemia 100% no alvo após o almoço.”
                        </div>
                        <div className="p-2.5 rounded-2xl bg-emerald-950/50 border border-emerald-500/30 text-emerald-100 ml-4">
                          “Obrigada, Dr.! Estou me sentindo com muito mais energia e disposição durante o dia.”
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="text-[9px] text-center text-zinc-500 pt-2 border-t border-white/[0.06]">
                    Sincronizado com Prontuário Médico FAAZ
                  </div>
                </div>
              </div>

              {/* Lado Direito: Foto de Paciente com Vitalidade e Destaques */}
              <div className="max-w-md space-y-6">
                <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200 aspect-[4/3]">
                  <img
                    src="/patient-vitality.jpg"
                    alt="Paciente da Clínica FAAZ com saúde e vitalidade"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="space-y-3 text-slate-700 text-sm">
                  <h3 className="text-2xl font-black text-slate-900">
                    Acompanhamento Real. Sem Esperar Meses pelo Retorno.
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Você não fica desamparado após sair da clínica. Seus dados chegam diretamente aos médicos da FAAZ, que ajustam dosagens e orientações no próprio app.
                  </p>
                  <div className="pt-2">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-md transition-all"
                    >
                      <span>Quero Esse Acompanhamento</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEDE PRESENCIAL EM BELO HORIZONTE */}
        <section id="a-clinica" className="py-20 sm:py-24 bg-white border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6 rounded-3xl overflow-hidden shadow-xl border border-slate-200 aspect-[16/10]">
                <img
                  src="/clinic-lounge.jpg"
                  alt="Sede Nobre da Clínica FAAZ em Belo Horizonte"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="lg:col-span-6 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200 text-xs font-bold">
                  <MapPin className="w-3.5 h-3.5 text-amber-600" />
                  <span>BELO HORIZONTE - MINAS GERAIS</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                  Sede Presencial Projetada para seu Conforto e Privacidade
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Localizada em endereço nobre de Belo Horizonte, a Clínica FAAZ dispõe de infraestrutura completa para acolhimento de pacientes locais e de outras cidades.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-700 font-medium pt-2">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                    <span className="font-bold text-slate-900 block mb-1">Manobrista no Local</span>
                    <span className="text-slate-500 text-xs">Estacionamento privativo e seguro</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                    <span className="font-bold text-slate-900 block mb-1">Exames no Consultório</span>
                    <span className="text-slate-500 text-xs">Bioimpedância segmentada e sensor CGM</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                    <span className="font-bold text-slate-900 block mb-1">Privacidade Total</span>
                    <span className="text-slate-500 text-xs">Atendimento individual com hora marcada</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                    <span className="font-bold text-slate-900 block mb-1">Horário Estendido</span>
                    <span className="text-slate-500 text-xs">Segunda a Sexta, das 08h às 20h</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DEPOIMENTOS E CASOS DE SUCESSO */}
        <section id="depoimentos" className="py-20 sm:py-24 bg-slate-50 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs uppercase tracking-widest text-emerald-700 font-bold mb-2 block">
                Histórias Clínicas Reais
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Resultados Transformados na Clínica FAAZ
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-lg flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1 text-amber-500 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 italic">
                    “Após anos tentando dietas malucas, fiz a consulta presencial na FAAZ e eles ajustaram minha tireoide e insulina. Em 4 meses perdi 14 kg com saúde e o app da clínica fez toda a diferença!”
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="font-bold text-slate-900 text-xs">Mariana S.</span>
                  <span className="text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-bold">
                    -14 kg & Vigor
                  </span>
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-lg flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1 text-amber-500 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 italic">
                    “Fiz minha abdominoplastia e lipo com a equipe cirúrgica em BH. A segurança hospitalar com CTI me deu total tranquilidade e o resultado ficou super natural.”
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="font-bold text-slate-900 text-xs">Camila R.</span>
                  <span className="text-[10px] text-cyan-700 bg-cyan-50 px-2 py-0.5 rounded font-bold">
                    Cirurgia Plástica
                  </span>
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-lg flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1 text-amber-500 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 italic">
                    “Moro no interior de Minas e vou a Belo Horizonte para a consulta presencial. O atendimento é impecável e o aplicativo exclusivo cuida de tudo no meu dia a dia.”
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="font-bold text-slate-900 text-xs">Renata P.</span>
                  <span className="text-[10px] text-amber-700 bg-amber-50 px-2 py-0.5 rounded font-bold">
                    Presencial + App
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DÚVIDAS FREQUENTES (FAQ) */}
        <section id="faq" className="py-20 bg-white border-t border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-xs uppercase tracking-widest text-emerald-700 font-bold mb-2 block">
                Tire suas Dúvidas
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Perguntas Frequentes
              </h2>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 bg-slate-50/50 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 text-left font-bold text-sm sm:text-base text-slate-800 flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-100/60"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-500 transition-transform duration-200 flex-shrink-0 ${
                        activeFaq === idx ? "rotate-180 text-emerald-600" : ""
                      }`}
                    />
                  </button>
                  {activeFaq === idx && (
                    <div className="p-5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL DE AGENDAMENTO */}
        <section className="py-16 sm:py-20 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-700 text-white relative">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
              Sua Saúde e Autoestima Merecem a Excelência da Clínica FAAZ
            </h2>
            <p className="text-emerald-100 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Agende sua consulta presencial em Belo Horizonte e dê o primeiro passo para uma transformação com ciência e segurança.
            </p>
            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl text-sm sm:text-base font-bold bg-white text-slate-900 hover:bg-slate-100 shadow-2xl transition-all hover:scale-[1.02]"
              >
                <Calendar className="w-5 h-5 text-emerald-600" />
                <span>Falar no WhatsApp com a Recepção</span>
              </a>
            </div>
            <p className="text-xs text-emerald-200">
              Atendimento presencial em Belo Horizonte - MG • Telefone: (31) 98440-0076
            </p>
          </div>
        </section>
      </main>

      {/* RODAPÉ INSTITUCIONAL CLEAN */}
      <footer className="border-t border-slate-200 bg-white py-12 text-slate-500 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-slate-100">
            {/* Coluna 1: Marca FAAZ */}
            <div className="space-y-3 md:col-span-2">
              <div className="flex items-center gap-3">
                <img
                  src="/logo-faaz.png"
                  alt="Clínica FAAZ"
                  className="w-9 h-9 object-contain"
                />
                <span className="font-extrabold text-lg text-slate-900">
                  CLÍNICA <span className="text-emerald-600">FAAZ</span>
                </span>
              </div>
              <p className="text-slate-500 max-w-sm leading-relaxed">
                Centro médico especializado em <strong>Endocrinologia Avançada</strong> e <strong>Cirurgia Plástica</strong> em Belo Horizonte. Consultas presenciais aprofundadas com acompanhamento diário no aplicativo EnDoc 2.0 (Endocrinologia).
              </p>
              <div className="text-[11px] text-slate-400">
                Diretoria Técnica com RQE e CRM-MG.
              </div>
            </div>

            {/* Coluna 2: Navegação */}
            <div>
              <h4 className="text-slate-900 font-bold uppercase tracking-wider mb-3">Navegação</h4>
              <ul className="space-y-2">
                <li><a href="#a-clinica" className="hover:text-emerald-600 transition-colors">A Clínica FAAZ</a></li>
                <li><a href="#jornada-faaz" className="hover:text-emerald-600 transition-colors">Especialidades</a></li>
                <li><a href="#cirurgia-plastica" className="hover:text-cyan-700 transition-colors">Cirurgia Plástica</a></li>
                <li><a href="#app-showcase" className="hover:text-emerald-600 transition-colors">App Exclusivo FAAZ</a></li>
                <li><a href="#depoimentos" className="hover:text-emerald-600 transition-colors">Casos de Sucesso</a></li>
                <li><a href="#faq" className="hover:text-emerald-600 transition-colors">Dúvidas Frequentes</a></li>
              </ul>
            </div>

            {/* Coluna 3: Atendimento Presencial */}
            <div>
              <h4 className="text-slate-900 font-bold uppercase tracking-wider mb-3">Atendimento</h4>
              <ul className="space-y-2 text-slate-500">
                <li className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span>Belo Horizonte - MG</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span>(31) 98440-0076</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span>Seg a Sex, 08h às 20h</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
            <div>
              © 2026 Clínica FAAZ. Todos os direitos reservados.
            </div>
            <div>
              Consultas presenciais particulares com emissão de recibo para reembolso.
            </div>
          </div>
        </div>
      </footer>

      {/* BOTÃO FLUTUANTE DE WHATSAPP */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp com a Clínica FAAZ"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 text-white shadow-2xl hover:bg-emerald-500 transition-all duration-300 hover:scale-105 group"
      >
        <div className="w-2.5 h-2.5 rounded-full bg-emerald-300 animate-pulse" />
        <MessageCircle className="w-5 h-5 text-white" />
        <span className="text-xs font-bold pr-1">Agendar Consulta</span>
      </a>
    </div>
  );
}
