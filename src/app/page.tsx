"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  Award,
  BellRing,
  Building2,
  Calendar,
  Check,
  CheckCircle2,
  ChevronDown,
  Clock,
  Compass,
  Droplets,
  HeartPulse,
  LineChart,
  Lock,
  MapPin,
  Menu,
  MessageCircle,
  Microscope,
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
  UserCheck,
  X,
  Zap,
} from "lucide-react";

export default function Home() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeProgramTab, setActiveProgramTab] = useState<number>(0);
  const [activeAppTab, setActiveAppTab] = useState<"glicemia" | "rotina" | "mensagens">("glicemia");
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [currentGlucose, setCurrentGlucose] = useState<number>(98);
  const [waterGlasses, setWaterGlasses] = useState<number>(6);
  const [medsChecked, setMedsChecked] = useState<{ [key: string]: boolean }>({
    coq10: true,
    magnesio: true,
    creatina: false,
  });

  // Telemetria ao vivo simulada
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGlucose((prev) => {
        const delta = Math.floor(Math.random() * 5) - 2;
        const next = prev + delta;
        return next >= 92 && next <= 106 ? next : prev;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const phoneNumber = "(31) 98440-0076";
  const whatsappUrl =
    "https://wa.me/5531984400076?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta%20presencial%20na%20Cl%C3%ADnica%20FAAZ.";
  const whatsappCirurgiaUrl =
    "https://wa.me/5531984400076?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20em%20Cirurgia%20Pl%C3%A1stica%20na%20Cl%C3%ADnica%20FAAZ%20em%20Belo%20Horizonte.";

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const programs = [
    {
      id: "metabolico",
      title: "Método FAAZ: Emagrecimento Metabólico",
      subtitle: "Consulta presencial completa com exames no local e acompanhamento diário pelo aplicativo exclusivo da Clínica FAAZ.",
      tag: "Mais Procurado",
      highlights: [
        "Avaliação presencial com bioimpedância médica segmentada no consultório",
        "Investigação de bloqueios hormonais e resistência à insulina",
        "Estratégia farmacológica e suplementar desenhada sob medida",
        "Monitoramento diário de calorias, saciedade e peso pelo aplicativo exclusivo",
        "Ajuste quinzenal das diretrizes diretamente pelo corpo clínico da FAAZ",
      ],
      idealFor: "Pessoas com efeito sanfona, esteatose hepática ou desaceleração metabólica.",
    },
    {
      id: "longevidade",
      title: "Método FAAZ: Longevidade Ativa & Hormonal",
      subtitle: "Equilíbrio hormonal, proteção cardiovascular e vitalidade celular com suporte contínuo no app.",
      tag: "Prevenção & Vigor",
      highlights: [
        "Mapeamento estendido de biomarcadores de inflamação e estresse oxidativo",
        "Avaliação presencial do eixo hormonal completo (tireoide, adrenais, eixos sexuais)",
        "Otimização do ritmo circadiano, profundidade do sono e combate à fadiga",
        "Protocolos de preservação óssea e muscular para envelhecimento saudável",
        "Vigilância contínua de biomarcadores pela equipe médica através do aplicativo",
      ],
      idealFor: "Homens e mulheres buscando disposição de alta performance e envelhecimento vigoroso.",
    },
    {
      id: "endocrino",
      title: "Método FAAZ: Diabetes & Tireoide Integrado",
      subtitle: "Rigor científico no consultório e tecnologia contínua no celular para normalizar seus parâmetros.",
      tag: "Rigor Clínico",
      highlights: [
        "Instalação e pareamento presencial do sensor de glicose contínua (CGM)",
        "Detecção de picos glicêmicos ocultos e correção alimentar sob medida",
        "Regulação personalizada de reposição para hipotireoidismo e Hashimoto",
        "Prevenção ativa de complicações vasculares, renais e neuropáticas",
        "Alertas imediatos no aplicativo para a equipe médica em caso de desvios críticos",
      ],
      idealFor: "Pacientes com diagnóstico recente ou resistente de Diabetes Tipo 1, Tipo 2 ou Tireoidopatias.",
    },
  ];

  const faqs = [
    {
      question: "Quais especialidades a Clínica FAAZ atende e como funciona o aplicativo?",
      answer:
        "A Clínica FAAZ é especializada em Endocrinologia Avançada e Cirurgia Plástica. O acompanhamento contínuo diário via aplicativo EnDoc 2.0 é uma tecnologia desenvolvida especificamente para os pacientes de endocrinologia, permitindo a sincronização em tempo real de glicemia, peso, rotina e biofeedback com os médicos da clínica ao longo de todo o ano.",
    },
    {
      question: "Vocês realizam teleconsultas?",
      answer:
        "Não realizamos consultas à distância por vídeo. Acreditamos que a endocrinologia avançada de alta precisão exige exame físico minucioso, acolhimento presencial e bioimpedância de padrão hospitalar feita no consultório. A tecnologia da FAAZ é focada no ACOMPANHAMENTO pós-consulta, através do nosso aplicativo exclusivo, garantindo que o plano prescrito seja cumprido com segurança diária.",
    },
    {
      question: "Como funciona o aplicativo exclusivo da Clínica FAAZ (EnDoc 2.0)?",
      answer:
        "O EnDoc 2.0 é um aplicativo proprietário desenvolvido pela Clínica FAAZ para uso exclusivo dos nossos pacientes. Nele você registra sua rotina, curva de glicose, peso, sono e metas prescritas na consulta presencial. Os dados são sincronizados em tempo real com o prontuário da clínica, permitindo que nossos médicos façam intervenções, ajustes e orientações sem que você precise esperar meses pelo retorno.",
    },
    {
      question: "A Clínica FAAZ atende por convênio médico ou apenas particular?",
      answer:
        "A Clínica FAAZ atende exclusivamente no modelo particular para garantir a máxima excelência, tempo estendido e atendimento humanizado. Emitimos nota fiscal detalhada e relatório médico completo para que você possa solicitar o reembolso (total ou parcial) junto ao seu plano de saúde.",
    },
    {
      question: "Moro em outra cidade ou estado. Posso ser paciente da Clínica FAAZ?",
      answer:
        "Sim, recebemos pacientes de todo o Brasil e do exterior que viajam a Belo Horizonte para realizar a consulta presencial e os exames na nossa sede. Todo o restante do acompanhamento, monitoramento de biomarcadores e suporte com a equipe médica ao longo dos meses seguintes é feito confortavelmente pelo nosso aplicativo exclusivo.",
    },
    {
      question: "Onde fica localizada a sede presencial da Clínica FAAZ?",
      answer:
        "Nossa sede está localizada em endereço nobre e de fácil acesso em Belo Horizonte - MG, com estacionamento privativo com manobrista, salas de atendimento confortáveis, privacidade total e estrutura completa para exames diagnósticos no local.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#06090a] text-zinc-100 flex flex-col selection:bg-emerald-500 selection:text-black overflow-x-hidden">
      {/* Background glow & subtle medical grid */}
      <div className="pointer-events-none fixed inset-0 bg-radial-glow z-0" />
      <div className="pointer-events-none fixed inset-0 bg-grid-pattern opacity-25 z-0" />

      {/* TOP ANNOUNCEMENT BAR */}
      <div className="relative z-30 bg-gradient-to-r from-emerald-950/90 via-[#0a1714] to-emerald-950/90 border-b border-emerald-500/20 text-center py-2 px-3 sm:px-4">
        <p className="text-[11px] sm:text-xs md:text-sm text-emerald-200 font-medium flex items-center justify-center gap-1.5 sm:gap-2 flex-wrap">
          <img
            src="/logo-faaz.png"
            alt="Logo FAAZ"
            className="w-4 h-4 object-contain inline-block flex-shrink-0 filter drop-shadow"
          />
          <span><strong>Clínica FAAZ</strong>: Consultas presenciais em Belo Horizonte com acompanhamento no App</span>
          <span className="hidden md:inline text-emerald-400 font-bold">•</span>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 font-semibold text-emerald-300 hover:text-white transition-colors"
          >
            Falar com Recepção
          </a>
        </p>
      </div>

      {/* NAVBAR RESPONSIVA SEM ENCAVALAMENTO */}
      <header className="relative z-40 border-b border-white/[0.08] backdrop-blur-xl bg-[#06090a]/90 sticky top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          {/* Logo & Brand Clínica FAAZ */}
          <Link href="/" className="flex items-center gap-3.5 group flex-shrink-0">
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center flex-shrink-0">
              <img
                src="/logo-faaz.png"
                alt="Clínica FAAZ Logo"
                className="w-full h-full object-contain filter drop-shadow-[0_0_14px_rgba(212,175,55,0.4)] group-hover:scale-105 group-hover:drop-shadow-[0_0_18px_rgba(212,175,55,0.6)] transition-all duration-300"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-black text-lg sm:text-xl tracking-tight text-white leading-none">
                CLÍNICA <span className="text-emerald-400">FAAZ</span>
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-wider uppercase text-zinc-400 font-medium mt-1">
                Endocrinologia & Cirurgia Plástica
              </span>
            </div>
          </Link>

          {/* Navegação Desktop (Aparece apenas em telas grandes sem encavalar) */}
          <nav className="hidden xl:flex items-center gap-5 2xl:gap-7 text-sm text-zinc-300 font-medium">
            <a href="#a-clinica" className="hover:text-emerald-400 transition-colors">
              A Clínica
            </a>
            <a href="#especialidades" className="hover:text-emerald-400 transition-colors">
              Especialidades
            </a>
            <a href="#cirurgia-plastica" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5 font-semibold text-cyan-300">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Cirurgia Plástica</span>
            </a>
            <a href="#app-showcase" className="hover:text-emerald-400 transition-colors">
              App Exclusivo
            </a>
            <a href="#programas" className="hover:text-emerald-400 transition-colors">
              Método FAAZ
            </a>
            <a href="#depoimentos" className="hover:text-emerald-400 transition-colors">
              Resultados
            </a>
            <a href="#faq" className="hover:text-emerald-400 transition-colors">
              Dúvidas
            </a>
          </nav>

          {/* Ações / Botões */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-bold px-4 sm:px-5 py-2.5 rounded-xl bg-emerald-500 text-black hover:bg-emerald-400 transition-all shadow-md shadow-emerald-500/20 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-black flex-shrink-0" />
              <span>Agendar Consulta</span>
            </a>

            {/* Botão Hamburger Mobile */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Abrir menu"
              className="xl:hidden p-2 rounded-xl border border-white/[0.1] bg-white/[0.03] text-zinc-300 hover:text-white hover:bg-white/[0.08] transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU DRAWER */}
        {mobileMenuOpen && (
          <div className="xl:hidden fixed inset-x-0 top-20 bg-[#070b0d]/98 border-b border-white/[0.1] backdrop-blur-2xl px-6 py-8 flex flex-col gap-5 shadow-2xl transition-all z-50">
            <nav className="flex flex-col gap-4 text-base font-semibold text-zinc-200">
              <a
                href="#a-clinica"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-white/[0.06] hover:text-emerald-400 transition-colors flex items-center justify-between"
              >
                <span>A Clínica FAAZ</span>
                <ChevronDown className="w-4 h-4 -rotate-90 text-zinc-500" />
              </a>
              <a
                href="#especialidades"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-white/[0.06] hover:text-emerald-400 transition-colors flex items-center justify-between"
              >
                <span>Especialidades Médicas</span>
                <ChevronDown className="w-4 h-4 -rotate-90 text-zinc-500" />
              </a>
              <a
                href="#cirurgia-plastica"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-white/[0.06] text-cyan-300 hover:text-cyan-200 transition-colors flex items-center justify-between"
              >
                <span className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  <span>Cirurgia Plástica</span>
                </span>
                <ChevronDown className="w-4 h-4 -rotate-90 text-cyan-500" />
              </a>
              <a
                href="#app-showcase"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-white/[0.06] hover:text-emerald-400 transition-colors flex items-center justify-between"
              >
                <span>App Exclusivo FAAZ</span>
                <ChevronDown className="w-4 h-4 -rotate-90 text-zinc-500" />
              </a>
              <a
                href="#programas"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-white/[0.06] hover:text-emerald-400 transition-colors flex items-center justify-between"
              >
                <span>Método FAAZ</span>
                <ChevronDown className="w-4 h-4 -rotate-90 text-zinc-500" />
              </a>
              <a
                href="#depoimentos"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-white/[0.06] hover:text-emerald-400 transition-colors flex items-center justify-between"
              >
                <span>Casos de Sucesso</span>
                <ChevronDown className="w-4 h-4 -rotate-90 text-zinc-500" />
              </a>
              <a
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-white/[0.06] hover:text-emerald-400 transition-colors flex items-center justify-between"
              >
                <span>Perguntas Frequentes</span>
                <ChevronDown className="w-4 h-4 -rotate-90 text-zinc-500" />
              </a>
            </nav>

            <div className="pt-4 flex flex-col gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-500 text-black font-bold text-sm shadow-lg shadow-emerald-500/25"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Falar no WhatsApp com a Recepção</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* MAIN CONTENT */}
      <main className="relative z-10 flex-1 flex flex-col">
        {/* HERO SECTION */}
        <section className="relative pt-10 pb-16 sm:pt-16 sm:pb-20 md:pt-20 md:pb-28 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
              {/* Coluna de Texto Principal */}
              <div className="lg:col-span-7 flex flex-col items-start text-left">
                {/* Badge */}
                <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/60 text-emerald-300 text-xs sm:text-sm font-semibold mb-6 backdrop-blur-md shadow-inner shadow-emerald-500/20">
                  <img
                    src="/logo-faaz.png"
                    alt="Logo FAAZ"
                    className="w-4 h-4 object-contain filter drop-shadow flex-shrink-0"
                  />
                  <span>ENDOCRINOLOGIA & CIRURGIA PLÁSTICA • BELO HORIZONTE</span>
                </div>

                {/* Título Responsivo */}
                <h1 className="text-3xl sm:text-5xl lg:text-[3.8rem] font-black tracking-tight text-white leading-[1.12] mb-5 sm:mb-6">
                  Na <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200 bg-clip-text text-transparent">Clínica FAAZ</span>, 
                  sua consulta presencial é o início de um cuidado de elite.
                </h1>

                {/* Subtítulo */}
                <p className="text-sm sm:text-base md:text-lg text-zinc-300 font-normal leading-relaxed max-w-2xl mb-8">
                  Centro médico de referência em <strong>Endocrinologia Avançada</strong> e <strong>Cirurgia Plástica</strong> em Belo Horizonte. 
                  Para nossos pacientes de endocrinologia, oferecemos a tecnologia exclusiva do <strong>aplicativo EnDoc 2.0</strong> com 
                  acompanhamento médico contínuo durante os 365 dias do ano.
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-10">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 sm:py-4 rounded-xl text-sm sm:text-base font-bold bg-emerald-500 hover:bg-emerald-400 text-black shadow-xl shadow-emerald-500/30 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
                    <span>Agendar Consulta Presencial</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
                  </a>

                  <a
                    href="#app-showcase"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-4 rounded-xl text-sm sm:text-base font-semibold text-zinc-200 bg-zinc-900/70 hover:bg-zinc-800/80 border border-white/[0.12] hover:border-emerald-500/40 hover:text-white transition-all duration-300"
                  >
                    <Smartphone className="w-4 h-4 text-emerald-400" />
                    <span>Ver o App do Paciente</span>
                  </a>
                </div>

                {/* Selos de Confiança */}
                <div className="pt-6 border-t border-white/[0.08] grid grid-cols-3 gap-3 sm:gap-8 w-full max-w-xl">
                  <div>
                    <div className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                      Presencial
                    </div>
                    <div className="text-[11px] sm:text-xs text-zinc-400 mt-1">Exame Físico & Bioimpedância</div>
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl md:text-3xl font-extrabold text-emerald-400 tracking-tight">
                      App Próprio
                    </div>
                    <div className="text-[11px] sm:text-xs text-zinc-400 mt-1">Acompanhamento Contínuo</div>
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                      365 Dias
                    </div>
                    <div className="text-[11px] sm:text-xs text-zinc-400 mt-1">Médicos Conectados</div>
                  </div>
                </div>
              </div>

              {/* Coluna Visual: Prontuário Clínico com Gráfico em Tempo Real */}
              <div className="lg:col-span-5 relative w-full">
                <div className="absolute -inset-1.5 bg-gradient-to-tr from-emerald-500/25 via-teal-500/15 to-emerald-500/25 rounded-3xl blur-2xl opacity-60" />

                {/* Card Clínico Presencial + App */}
                <div className="relative rounded-3xl border border-emerald-500/30 bg-[#0a0f12]/95 backdrop-blur-2xl p-4 sm:p-7 shadow-2xl shadow-black/90 space-y-5 sm:space-y-6 overflow-hidden">
                  <div className="pointer-events-none absolute left-0 right-0 h-24 bg-gradient-to-b from-transparent via-emerald-500/[0.08] to-transparent animate-scan-line" />

                  {/* Topo do Card */}
                  <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] relative z-10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-400 p-[1.5px] shadow-md shadow-emerald-500/20">
                        <div className="w-full h-full bg-[#080d0f] rounded-[14px] flex items-center justify-center font-black text-xs text-emerald-400">
                          FAAZ
                        </div>
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm font-bold text-white flex items-center gap-1.5">
                          <span>CLÍNICA FAAZ</span>
                          <span className="text-[9px] sm:text-[10px] text-emerald-400 font-mono">• BELO HORIZONTE</span>
                        </div>
                        <div className="text-[11px] sm:text-xs text-zinc-400 flex items-center gap-1.5">
                          <Stethoscope className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Consulta Presencial Realizada</span>
                        </div>
                      </div>
                    </div>
                    <span className="px-2 sm:px-2.5 py-1 rounded-full bg-emerald-950/70 border border-emerald-500/30 text-[9px] sm:text-[10px] font-bold text-emerald-300 flex items-center gap-1.5 shadow-sm">
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400 animate-ping" />
                      App Ativo
                    </span>
                  </div>

                  {/* Curva CGM do sensor instalado presencialmente - ULTRA COLORIDO & IMPACTANTE */}
                  <div className="p-3.5 sm:p-4 rounded-2xl bg-gradient-to-b from-[#0c1417] via-black/80 to-[#0c1417] border border-emerald-500/30 relative z-10 space-y-3 shadow-lg shadow-emerald-950/30">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-300">
                          <Droplets className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" />
                        </span>
                        <div>
                          <span className="text-[11px] sm:text-xs font-bold text-white block">Glicemia Contínua (Sensor CGM)</span>
                          <span className="text-[9px] text-zinc-400">Telemetria ao vivo pareada na FAAZ</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 sm:gap-2 bg-emerald-950/60 px-2.5 py-1 rounded-xl border border-emerald-500/30">
                        <span className="text-xl sm:text-2xl font-black text-white font-mono tracking-tight text-emerald-400">
                          {currentGlucose}
                        </span>
                        <span className="text-[10px] sm:text-xs text-emerald-300 font-bold">mg/dL</span>
                      </div>
                    </div>

                    {/* Gráfico SVG Ultra Colorido com Faixas de Alerta */}
                    <div className="relative h-22 sm:h-26 w-full overflow-hidden rounded-xl bg-gradient-to-b from-white/[0.02] to-transparent p-1">
                      {/* Faixas coloridas de fundo */}
                      <div className="absolute inset-x-0 top-0 h-4 bg-amber-500/[0.07] border-b border-amber-500/20 flex items-center justify-end px-2">
                        <span className="text-[8px] font-mono font-bold text-amber-400">Pico &gt;140</span>
                      </div>
                      <div className="absolute inset-x-0 top-4 bottom-4 bg-emerald-500/[0.07] border-y border-dashed border-emerald-500/30 flex items-center justify-end px-2">
                        <span className="text-[8px] font-mono font-bold text-emerald-400">Alvo Ideal FAAZ (70-140)</span>
                      </div>
                      <div className="absolute inset-x-0 bottom-0 h-4 bg-cyan-500/[0.07] border-t border-cyan-500/20 flex items-center justify-end px-2">
                        <span className="text-[8px] font-mono font-bold text-cyan-400">Base &lt;70</span>
                      </div>

                      <svg viewBox="0 0 400 100" className="w-full h-full overflow-visible relative z-10">
                        <defs>
                          {/* Gradiente vibrante multicolorido para a linha da onda */}
                          <linearGradient id="vividHeroLine" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#06b6d4" />
                            <stop offset="30%" stopColor="#10b981" />
                            <stop offset="65%" stopColor="#f59e0b" />
                            <stop offset="85%" stopColor="#a855f7" />
                            <stop offset="100%" stopColor="#38bdf8" />
                          </linearGradient>

                          {/* Gradiente de preenchimento multicolorido luminoso */}
                          <linearGradient id="vividHeroFill" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#10b981" stopOpacity="0.55" />
                            <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.25" />
                            <stop offset="80%" stopColor="#a855f7" stopOpacity="0.1" />
                            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.0" />
                          </linearGradient>
                        </defs>

                        {/* Área multicolorida */}
                        <path
                          d="M 0 65 Q 45 28, 90 48 T 180 38 T 270 58 T 350 34 T 400 42 L 400 100 L 0 100 Z"
                          fill="url(#vividHeroFill)"
                        />

                        {/* Linha multicolorida pulsante */}
                        <path
                          d="M 0 65 Q 45 28, 90 48 T 180 38 T 270 58 T 350 34 T 400 42"
                          fill="none"
                          stroke="url(#vividHeroLine)"
                          strokeWidth="3"
                          className="animate-dash-flow"
                          filter="drop-shadow(0 0 8px rgba(16, 185, 129, 0.7))"
                        />

                        {/* Ponto pulsante neon */}
                        <circle cx="395" cy="42" r="5" fill="#38bdf8" className="animate-pulse" />
                        <circle cx="395" cy="42" r="10" fill="#a855f7" opacity="0.4" className="animate-ping" />
                      </svg>
                    </div>

                    {/* Barra de Tempo no Alvo Multicolorida (TIR) */}
                    <div className="space-y-1 pt-1">
                      <div className="flex items-center justify-between text-[10px] sm:text-[11px]">
                        <span className="font-bold text-white flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-emerald-400" /> TIR (Tempo no Alvo): 96.4%
                        </span>
                        <span className="text-zinc-400 font-mono text-[10px]">Padrão Ouro FAAZ</span>
                      </div>
                      <div className="w-full h-2 rounded-full overflow-hidden flex bg-zinc-900 border border-white/[0.08]">
                        <div className="h-full bg-cyan-400 w-[4%]" title="Baixo (4%)" />
                        <div className="h-full bg-emerald-400 w-[92.4%] shadow-sm shadow-emerald-500/50" title="No Alvo (92.4%)" />
                        <div className="h-full bg-amber-400 w-[3.6%]" title="Elevado (3.6%)" />
                      </div>
                      <div className="flex justify-between text-[9px] text-zinc-400 font-mono">
                        <span className="text-cyan-400">&lt;70 (4%)</span>
                        <span className="text-emerald-400 font-bold">70-140 (92.4%)</span>
                        <span className="text-amber-400">&gt;140 (3.6%)</span>
                      </div>
                    </div>
                  </div>

                  {/* Biomarcadores & Bioimpedância Multicoloridos */}
                  <div className="grid grid-cols-2 gap-2.5 sm:gap-3 relative z-10">
                    <div className="p-3 sm:p-3.5 rounded-2xl bg-gradient-to-br from-amber-950/20 via-black/40 to-black/60 border border-amber-500/30 hover:border-amber-400 transition-colors">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] sm:text-[11px] font-semibold text-amber-200">Gordura Visceral</span>
                        <TrendingDown className="w-3.5 h-3.5 text-amber-400" />
                      </div>
                      <div className="text-lg sm:text-xl font-black text-white tracking-tight flex items-baseline gap-1">
                        -4.2 <span className="text-xs font-normal text-amber-300">kg</span>
                      </div>
                      <div className="w-full bg-zinc-900 h-2 rounded-full overflow-hidden mt-2 p-[1px] border border-amber-500/20">
                        <div className="bg-gradient-to-r from-amber-500 via-rose-500 to-emerald-400 h-full w-[76%] rounded-full animate-pulse" />
                      </div>
                      <span className="text-[9px] text-amber-300/80 mt-1 block font-medium">Redução de risco hepático</span>
                    </div>

                    <div className="p-3 sm:p-3.5 rounded-2xl bg-gradient-to-br from-purple-950/20 via-black/40 to-black/60 border border-purple-500/30 hover:border-purple-400 transition-colors">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] sm:text-[11px] font-semibold text-purple-200">Massa Muscular</span>
                        <TrendingUp className="w-3.5 h-3.5 text-purple-400" />
                      </div>
                      <div className="text-lg sm:text-xl font-black text-white tracking-tight flex items-baseline gap-1">
                        +1.6 <span className="text-xs font-normal text-purple-300">kg</span>
                      </div>
                      <div className="w-full bg-zinc-900 h-2 rounded-full overflow-hidden mt-2 p-[1px] border border-purple-500/20">
                        <div className="bg-gradient-to-r from-purple-500 via-indigo-400 to-cyan-400 h-full w-[88%] rounded-full animate-pulse" />
                      </div>
                      <span className="text-[9px] text-purple-300/80 mt-1 block font-medium">Proteção metabólica ativa</span>
                    </div>
                  </div>

                  {/* Rodapé do Card */}
                  <div className="flex items-center justify-between pt-2 text-[10px] sm:text-[11px] text-zinc-400 border-t border-white/[0.06] relative z-10">
                    <span className="flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5 text-emerald-400" /> Consulta Presencial FAAZ
                    </span>
                    <span className="text-emerald-400 font-mono font-bold">App EnDoc Conectado</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO INSTITUCIONAL: A CLÍNICA FAAZ */}
        <section id="a-clinica" className="py-16 sm:py-20 md:py-24 border-t border-white/[0.08] bg-[#050809] relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <span className="text-xs uppercase tracking-widest text-emerald-400 font-semibold mb-2 block">
                O Modelo FAAZ
              </span>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                Avaliação Médica Presencial & Acompanhamento Digital
              </h2>
              <p className="text-zinc-400 mt-3 sm:mt-4 text-sm sm:text-base md:text-lg">
                Não fazemos teleconsultas. Acreditamos no valor insubstituível do exame físico e da bioimpedância hospitalar no consultório, 
                potencializados pelo nosso aplicativo exclusivo no seu dia a dia.
              </p>
            </div>

            {/* Grid dos 4 Pilares da Instituição FAAZ */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
              <div className="p-6 sm:p-7 rounded-3xl bg-[#0b1114] border border-white/[0.08] hover:border-emerald-500/40 transition-all duration-300 group flex flex-col justify-between">
                <div>
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400 mb-5 sm:mb-6 group-hover:scale-110 transition-transform">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-2">Consulta Presencial Estendida</h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    Sessões de 60 a 90 minutos em nossa sede em Belo Horizonte. Tempo exclusivo para anamnese profunda, escuta empática e exame físico completo.
                  </p>
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 mt-5 sm:mt-6 block">
                  Presencial em Belo Horizonte
                </span>
              </div>

              <div className="p-6 sm:p-7 rounded-3xl bg-[#0b1114] border border-white/[0.08] hover:border-teal-500/40 transition-all duration-300 group flex flex-col justify-between">
                <div>
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-teal-500/10 border border-teal-500/25 flex items-center justify-center text-teal-400 mb-5 sm:mb-6 group-hover:scale-110 transition-transform">
                    <Scale className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-2">Exames no Próprio Consultório</h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    Bioimpedância segmentada multifrequencial e colocação/ativação de sensor de glicose durante sua visita à clínica.
                  </p>
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-teal-400 mt-5 sm:mt-6 block">
                  Tecnologia Diagnóstica
                </span>
              </div>

              <div className="p-6 sm:p-7 rounded-3xl bg-[#0b1114] border border-white/[0.08] hover:border-cyan-500/40 transition-all duration-300 group flex flex-col justify-between">
                <div>
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center text-cyan-400 mb-5 sm:mb-6 group-hover:scale-110 transition-transform">
                    <Smartphone className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-2">App Exclusivo (Endocrinologia)</h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    Exclusivo para pacientes de endocrinologia: glicemia contínua, rotina e treinos acompanhados diariamente pela nossa equipe via app EnDoc 2.0.
                  </p>
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 mt-5 sm:mt-6 block">
                  Exclusivo Endocrinologia
                </span>
              </div>

              <div className="p-6 sm:p-7 rounded-3xl bg-[#0b1114] border border-white/[0.08] hover:border-emerald-500/40 transition-all duration-300 group flex flex-col justify-between">
                <div>
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400 mb-5 sm:mb-6 group-hover:scale-110 transition-transform">
                    <Award className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-2">Corpo Clínico com RQE</h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    Médicos especialistas em Endocrinologia & Metabologia e Cirurgia Plástica, com membros das sociedades oficiais e conduta de padrão ouro.
                  </p>
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 mt-5 sm:mt-6 block">
                  Especialistas Registrados
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* O APP EXCLUSIVO DA CLÍNICA FAAZ (SHOWCASE INTERATIVO E RESPONSIVO) */}
        <section id="app-showcase" className="py-16 sm:py-20 md:py-24 border-t border-white/[0.08] relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <span className="text-xs uppercase tracking-widest text-emerald-400 font-semibold mb-2 block">
                Aplicativo Exclusivo para Pacientes de Endocrinologia
              </span>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                Seu Acompanhamento Endócrino na Palma da Mão
              </h2>
              <p className="text-zinc-400 mt-3 sm:mt-4 text-sm sm:text-base md:text-lg">
                Para nossos pacientes de endocrinologia, a consulta presencial na FAAZ é apenas o ponto de partida. O <strong>App EnDoc 2.0</strong> mantém
                você conectado ao seu médico durante todo o tratamento.
              </p>

              {/* Botões seletores responsivos */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 max-w-2xl mx-auto mt-8">
                <button
                  onClick={() => setActiveAppTab("glicemia")}
                  className={`px-3 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center justify-center gap-2 ${
                    activeAppTab === "glicemia"
                      ? "bg-emerald-500 text-black shadow-lg shadow-emerald-500/30 scale-[1.02]"
                      : "bg-white/[0.04] text-zinc-300 hover:text-white border border-white/[0.08]"
                  }`}
                >
                  <Droplets className="w-4 h-4 flex-shrink-0" />
                  <span>1. Glicemia & Saúde</span>
                </button>
                <button
                  onClick={() => setActiveAppTab("rotina")}
                  className={`px-3 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center justify-center gap-2 ${
                    activeAppTab === "rotina"
                      ? "bg-emerald-500 text-black shadow-lg shadow-emerald-500/30 scale-[1.02]"
                      : "bg-white/[0.04] text-zinc-300 hover:text-white border border-white/[0.08]"
                  }`}
                >
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  <span>2. Hábitos Prescritos</span>
                </button>
                <button
                  onClick={() => setActiveAppTab("mensagens")}
                  className={`px-3 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center justify-center gap-2 ${
                    activeAppTab === "mensagens"
                      ? "bg-emerald-500 text-black shadow-lg shadow-emerald-500/30 scale-[1.02]"
                      : "bg-white/[0.04] text-zinc-300 hover:text-white border border-white/[0.08]"
                  }`}
                >
                  <MessageCircle className="w-4 h-4 flex-shrink-0" />
                  <span>3. Canal Direto FAAZ</span>
                </button>
              </div>
            </div>

            {/* MOCKUP DO SMARTPHONE INTERATIVO */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-14 max-w-5xl mx-auto">
              {/* Smartphone Frame Responsivo */}
              <div className="relative w-full max-w-[320px] sm:max-w-[340px] h-[640px] sm:h-[670px] rounded-[44px] sm:rounded-[48px] border-[5px] sm:border-[6px] border-zinc-800 bg-[#070b0c] p-2.5 sm:p-3 shadow-2xl shadow-emerald-500/10 ring-1 ring-white/[0.15]">
                {/* Notch */}
                <div className="absolute top-4 sm:top-5 left-1/2 -translate-x-1/2 w-24 sm:w-28 h-4 sm:h-5 bg-black rounded-full z-30 flex items-center justify-between px-3">
                  <div className="w-2 h-2 rounded-full bg-zinc-900 border border-zinc-700" />
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/80 animate-pulse" />
                </div>

                {/* Tela do App */}
                <div className="w-full h-full rounded-[34px] sm:rounded-[38px] bg-[#0a0f12] overflow-hidden flex flex-col justify-between pt-6 sm:pt-7 pb-4 px-3.5 sm:px-4 text-left border border-white/[0.04]">
                  {/* Top Bar do App com Logo FAAZ */}
                  <div className="flex items-center justify-between pt-2 pb-3 border-b border-white/[0.06]">
                    <div>
                      <span className="text-[9px] sm:text-[10px] text-emerald-400 block font-mono font-bold tracking-wider">
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

                  {/* CONTEÚDO DINÂMICO MULTICOLORIDO */}
                  <div className="flex-1 py-3 overflow-y-auto space-y-3">
                    {activeAppTab === "glicemia" && (
                      <div className="space-y-3">
                        {/* Cartão de Glicemia com Cores Vibrantes */}
                        <div className="p-3.5 rounded-2xl bg-gradient-to-br from-indigo-950/60 via-zinc-900/90 to-emerald-950/40 border border-emerald-500/40 shadow-lg">
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
                              <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-emerald-300 to-amber-300 tracking-tight">
                                {currentGlucose}
                              </span>
                              <span className="text-xs text-zinc-400 ml-1 font-semibold">mg/dL</span>
                            </div>
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/25 border border-emerald-400/40 text-emerald-300 font-bold">
                              Alvo Ideal ✓
                            </span>
                          </div>

                          {/* Curva SVG no App com Gradiente Multicolorido */}
                          <div className="h-16 w-full pt-1">
                            <svg viewBox="0 0 200 60" className="w-full h-full">
                              <defs>
                                <linearGradient id="appCurveColor" x1="0%" y1="0%" x2="100%" y2="0%">
                                  <stop offset="0%" stopColor="#06b6d4" />
                                  <stop offset="35%" stopColor="#10b981" />
                                  <stop offset="70%" stopColor="#f59e0b" />
                                  <stop offset="100%" stopColor="#a855f7" />
                                </linearGradient>
                                <linearGradient id="appFillColor" x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="0%" stopColor="#10b981" stopOpacity="0.4" />
                                  <stop offset="100%" stopColor="#a855f7" stopOpacity="0.0" />
                                </linearGradient>
                              </defs>
                              <path
                                d="M 0 35 Q 25 15, 50 30 T 100 25 T 150 35 T 200 20 L 200 60 L 0 60 Z"
                                fill="url(#appFillColor)"
                              />
                              <path
                                d="M 0 35 Q 25 15, 50 30 T 100 25 T 150 35 T 200 20"
                                fill="none"
                                stroke="url(#appCurveColor)"
                                strokeWidth="2.5"
                                className="animate-dash-flow"
                              />
                            </svg>
                          </div>
                        </div>

                        {/* Meta de Hidratação com Ondas Cyan/Azul */}
                        <div className="p-3 rounded-2xl bg-gradient-to-br from-cyan-950/30 via-zinc-900/60 to-blue-950/30 border border-cyan-500/30">
                          <div className="flex items-center justify-between text-xs mb-2">
                            <span className="font-bold text-white flex items-center gap-1.5">
                              <Droplets className="w-3.5 h-3.5 text-cyan-400" /> Meta Hídrica Prescrita
                            </span>
                            <span className="text-cyan-300 font-extrabold text-xs">{waterGlasses * 250} ml / 2.500 ml</span>
                          </div>

                          <div className="flex items-center justify-between gap-1 pt-1">
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                              <button
                                key={num}
                                onClick={() => setWaterGlasses(num)}
                                className={`flex-1 h-6 rounded-md text-[9px] font-bold transition-all ${
                                  num <= waterGlasses
                                    ? "bg-gradient-to-t from-cyan-500 to-blue-400 text-black shadow-md shadow-cyan-500/30 scale-105"
                                    : "bg-zinc-800/80 text-zinc-500"
                                }`}
                              >
                                {num}
                              </button>
                            ))}
                          </div>
                          <span className="text-[9px] text-cyan-300/80 mt-1.5 block text-center font-medium">Toque para registrar copos de 250ml</span>
                        </div>

                        {/* Registro de Sono com Fases Coloridas (REM, Profundo, Leve) */}
                        <div className="p-3 rounded-2xl bg-gradient-to-br from-purple-950/30 via-zinc-900/60 to-indigo-950/30 border border-purple-500/30 space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className="w-7 h-7 rounded-lg bg-purple-500/20 text-purple-300 flex items-center justify-center">
                                <Moon className="w-4 h-4" />
                              </div>
                              <div>
                                <span className="text-xs font-bold text-white block">Sono & Ciclo Hormonal</span>
                                <span className="text-[10px] text-purple-200">7h 45m de descanso</span>
                              </div>
                            </div>
                            <span className="text-[10px] text-purple-300 font-bold bg-purple-900/40 px-2 py-0.5 rounded-full border border-purple-500/30">
                              Ótimo (94%)
                            </span>
                          </div>

                          {/* Mini barra de estágios de sono coloridos */}
                          <div className="w-full h-2 rounded-full overflow-hidden flex bg-zinc-950">
                            <div className="h-full bg-purple-500 w-[30%]" title="Profundo (GH)" />
                            <div className="h-full bg-cyan-400 w-[25%]" title="REM (Memória)" />
                            <div className="h-full bg-emerald-400 w-[45%]" title="Leve" />
                          </div>
                          <div className="flex justify-between text-[8px] font-mono text-zinc-400 pt-0.5">
                            <span className="text-purple-400">Profundo: 2h 15m</span>
                            <span className="text-cyan-400">REM: 1h 55m</span>
                            <span className="text-emerald-400">Leve: 3h 35m</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeAppTab === "rotina" && (
                      <div className="space-y-2.5">
                        <span className="text-[10px] text-zinc-400 uppercase tracking-wider font-semibold block">
                          Metas Definidas na Sua Consulta Presencial:
                        </span>

                        <div
                          onClick={() => setMedsChecked({ ...medsChecked, coq10: !medsChecked.coq10 })}
                          className="p-3 rounded-2xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between cursor-pointer hover:border-emerald-500/40 transition-colors"
                        >
                          <div className="flex items-center gap-2.5">
                            <div className="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                              <Pill className="w-3.5 h-3.5" />
                            </div>
                            <div>
                              <span className={`text-xs font-medium block ${medsChecked.coq10 ? "line-through text-zinc-500" : "text-white"}`}>
                                CoQ10 + Magnésio Inositol
                              </span>
                              <span className="text-[9px] text-zinc-400">Manhã • Prescrição FAAZ</span>
                            </div>
                          </div>
                          <div className={`w-5 h-5 rounded-md flex items-center justify-center ${medsChecked.coq10 ? "bg-emerald-500 text-black" : "border border-zinc-600"}`}>
                            {medsChecked.coq10 && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                          </div>
                        </div>

                        <div
                          onClick={() => setMedsChecked({ ...medsChecked, magnesio: !medsChecked.magnesio })}
                          className="p-3 rounded-2xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between cursor-pointer hover:border-emerald-500/40 transition-colors"
                        >
                          <div className="flex items-center gap-2.5">
                            <div className="w-7 h-7 rounded-lg bg-teal-500/10 text-teal-400 flex items-center justify-center">
                              <Activity className="w-3.5 h-3.5" />
                            </div>
                            <div>
                              <span className={`text-xs font-medium block ${medsChecked.magnesio ? "line-through text-zinc-500" : "text-white"}`}>
                                Treino de Resistência Muscular
                              </span>
                              <span className="text-[9px] text-zinc-400">Preservação de massa magra</span>
                            </div>
                          </div>
                          <div className={`w-5 h-5 rounded-md flex items-center justify-center ${medsChecked.magnesio ? "bg-emerald-500 text-black" : "border border-zinc-600"}`}>
                            {medsChecked.magnesio && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                          </div>
                        </div>

                        <div
                          onClick={() => setMedsChecked({ ...medsChecked, creatina: !medsChecked.creatina })}
                          className="p-3 rounded-2xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between cursor-pointer hover:border-emerald-500/40 transition-colors"
                        >
                          <div className="flex items-center gap-2.5">
                            <div className="w-7 h-7 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                              <Pill className="w-3.5 h-3.5" />
                            </div>
                            <div>
                              <span className={`text-xs font-medium block ${medsChecked.creatina ? "line-through text-zinc-500" : "text-white"}`}>
                                Creatina Monohidratada 5g
                              </span>
                              <span className="text-[9px] text-zinc-400">Pós-treino com água</span>
                            </div>
                          </div>
                          <div className={`w-5 h-5 rounded-md flex items-center justify-center ${medsChecked.creatina ? "bg-emerald-500 text-black" : "border border-zinc-600"}`}>
                            {medsChecked.creatina && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                          </div>
                        </div>

                        <div className="p-3 rounded-xl bg-emerald-950/30 border border-emerald-500/20 text-[10px] text-emerald-300 flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                          <span>Seu médico na FAAZ recebe a confirmação de adesão diariamente.</span>
                        </div>
                      </div>
                    )}

                    {activeAppTab === "mensagens" && (
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 p-2 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                          <div className="w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs">
                            FAAZ
                          </div>
                          <div>
                            <span className="text-xs font-semibold text-white block">Dr. / Dra. Clínica FAAZ</span>
                            <span className="text-[9px] text-emerald-400 font-mono">Médico Responsável • Ativo no App</span>
                          </div>
                        </div>

                        <div className="p-3 rounded-2xl rounded-tl-none bg-zinc-800/80 border border-white/[0.06] text-xs text-zinc-200 space-y-1">
                          <span className="text-[9px] font-semibold text-emerald-400 block">Corpo Clínico FAAZ</span>
                          <p className="leading-relaxed">
                            Analisamos seus últimos 5 dias de sensor CGM recebidos pelo app: excelente adaptação! Quase sem oscilações glicêmicas após o almoço.
                          </p>
                          <span className="text-[8px] text-zinc-400 block text-right">Hoje, 09:14</span>
                        </div>

                        <div className="p-3 rounded-2xl rounded-tr-none bg-emerald-900/40 border border-emerald-500/30 text-xs text-white space-y-1 ml-6">
                          <p className="leading-relaxed">
                            Perfeito doutor! Estou me sentindo com muito mais energia à tarde, sem aquele sono pesado.
                          </p>
                          <span className="text-[8px] text-emerald-300 block text-right">Hoje, 09:22</span>
                        </div>

                        <div className="p-3 rounded-2xl rounded-tl-none bg-zinc-800/80 border border-white/[0.06] text-xs text-zinc-200 space-y-1">
                          <p className="leading-relaxed">
                            Excelente. Mantemos o protocolo e nos vemos na revisão de bioimpedância dia 18 na nossa sede!
                          </p>
                          <span className="text-[8px] text-zinc-400 block text-right">Hoje, 09:28</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Bottom Navigation do App */}
                  <div className="pt-2 border-t border-white/[0.06] grid grid-cols-3 gap-2 text-center">
                    <button
                      onClick={() => setActiveAppTab("glicemia")}
                      className={`flex flex-col items-center gap-1 py-1 rounded-lg ${
                        activeAppTab === "glicemia" ? "text-emerald-400" : "text-zinc-500"
                      }`}
                    >
                      <Droplets className="w-4 h-4" />
                      <span className="text-[8px] font-medium">Saúde</span>
                    </button>
                    <button
                      onClick={() => setActiveAppTab("rotina")}
                      className={`flex flex-col items-center gap-1 py-1 rounded-lg ${
                        activeAppTab === "rotina" ? "text-emerald-400" : "text-zinc-500"
                      }`}
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      <span className="text-[8px] font-medium">Rotina</span>
                    </button>
                    <button
                      onClick={() => setActiveAppTab("mensagens")}
                      className={`flex flex-col items-center gap-1 py-1 rounded-lg ${
                        activeAppTab === "mensagens" ? "text-emerald-400" : "text-zinc-500"
                      }`}
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span className="text-[8px] font-medium">Clínica FAAZ</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Descrição e Benefícios ao Lado do Celular */}
              <div className="flex-1 space-y-5 sm:space-y-6 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
                  <Smartphone className="w-4 h-4" /> Tecnologia Exclusiva da Clínica FAAZ
                </div>

                <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight">
                  A sua saúde acompanhada dia a dia pelo médico que te atendeu no consultório.
                </h3>

                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                  Com o <strong>aplicativo exclusivo da Clínica FAAZ</strong>, você não precisa esperar meses no escuro para saber se o seu
                  tratamento está funcionando. A cada refeição, treino ou noite de sono, os dados alimentam
                  o algoritmo da FAAZ e mantêm o médico sincronizado com seus resultados.
                </p>

                <div className="space-y-3.5 pt-2">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/15 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">Visualização de Curvas Glicêmicas</h4>
                      <p className="text-xs text-zinc-400 mt-0.5">Entenda como cada alimento altera sua energia ao longo das horas do dia.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/15 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">Lembretes de Suplementação & Medicamentos</h4>
                      <p className="text-xs text-zinc-400 mt-0.5">Notificações inteligentes para nunca esquecer as dosagens prescritas na consulta.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/15 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">Canal Seguro com a Equipe Médica da FAAZ</h4>
                      <p className="text-xs text-zinc-400 mt-0.5">Esclarecimento de dúvidas sobre sintomas, exames e receitas de forma rápida.</p>
                    </div>
                  </div>
                </div>

                <div className="pt-2 sm:pt-4">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold bg-emerald-500 hover:bg-emerald-400 text-black shadow-lg shadow-emerald-500/20 transition-all hover:scale-[1.02]"
                  >
                    <Calendar className="w-4 h-4 text-black" />
                    <span>Agendar Consulta Presencial</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ESPECIALIDADES MÉDICAS */}
        <section id="especialidades" className="py-16 sm:py-20 md:py-24 border-t border-white/[0.08] bg-[#050809]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <span className="text-xs uppercase tracking-widest text-emerald-400 font-semibold mb-2 block">
                Nossos Pilares Médicos
              </span>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                Endocrinologia Avançada & Cirurgia Plástica
              </h2>
              <p className="text-zinc-400 mt-3 sm:mt-4 text-sm sm:text-base md:text-lg">
                Excelência médica integrada na Clínica FAAZ. Cuidado metabólico aprofundado e cirurgias plásticas de alta precisão.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {/* Card 1: Endocrinologia Avançada */}
              <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#0d1416] to-[#070b0c] border border-emerald-500/30 hover:border-emerald-400 transition-all duration-300 group shadow-lg flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-5 sm:mb-6">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                      <Stethoscope className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      App EnDoc Incluso
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2.5 sm:mb-3">Endocrinologia Avançada</h3>
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6">
                    Tratamento minucioso de tireoide, diabetes, resistência insulínica, hormônios e metabolismo com acompanhamento diário no aplicativo.
                  </p>
                  <ul className="space-y-2.5 text-xs text-zinc-300 mb-6 sm:mb-8">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <span>Hipotireoidismo, Nódulos e Tireoidite de Hashimoto</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <span>Controle Glicêmico e Pareamento de Sensor CGM</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <span>Modulação Hormonal Segura e Menopausa/Andropausa</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <span>Emagrecimento Clínico com Preservação Muscular</span>
                    </li>
                  </ul>
                </div>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors pt-4 border-t border-white/[0.06]"
                >
                  <span>Consulta com Endocrinologista</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Card 2: Cirurgia Plástica */}
              <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#0d1416] to-[#070b0c] border border-cyan-500/30 hover:border-cyan-400 transition-all duration-300 group shadow-lg flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-5 sm:mb-6">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                      <HeartPulse className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                      Rigor Cirúrgico
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2.5 sm:mb-3">Cirurgia Plástica</h3>
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6">
                    Procedimentos cirúrgicos estéticos e reparadores realizados em centros hospitalares de referência com segurança absoluta e foco em resultados naturais.
                  </p>
                  <ul className="space-y-2.5 text-xs text-zinc-300 mb-6 sm:mb-8">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span>Contorno Corporal e Lipoaspiração de Alta Definição</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span>Abdominoplastia e Correção de Diástase Muscular</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span>Mamoplastia de Aumento (Prótese) e Redutora / Mastopexia</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span>Cirurgias Faciais (Blefaroplastia, Rinoplastia e Face)</span>
                    </li>
                  </ul>
                </div>
                <a
                  href="#cirurgia-plastica"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors pt-4 border-t border-white/[0.06]"
                >
                  <span>Conhecer Procedimentos & Segurança</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Card 3: Sinergia & Pré/Pós-Operatório */}
              <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#0d1416] to-[#070b0c] border border-purple-500/30 hover:border-purple-400 transition-all duration-300 group shadow-lg flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-5 sm:mb-6">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-purple-500/10 border border-purple-500/25 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                      <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                      Sinergia FAAZ
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2.5 sm:mb-3">Preparo & Sinergia Clínica</h3>
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6">
                    A harmonia entre endocrinologia e cirurgia plástica: otimização metabólica pré-operatória e suporte avançado para cicatrização e manutenção dos resultados.
                  </p>
                  <ul className="space-y-2.5 text-xs text-zinc-300 mb-6 sm:mb-8">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0" />
                      <span>Preparo Metabólico para Redução de Risco Cirúrgico</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0" />
                      <span>Otimização da Cicatrização e Resposta Imunológica</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0" />
                      <span>Manutenção a Longo Prazo do Contorno Corporal</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0" />
                      <span>Equipe Integrada para Cuidado Completo do Paciente</span>
                    </li>
                  </ul>
                </div>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-purple-400 hover:text-purple-300 transition-colors pt-4 border-t border-white/[0.06]"
                >
                  <span>Saber Mais sobre os Protocolos</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO ÉPICA: CIRURGIA PLÁSTICA DE ALTA PRECISÃO */}
        <section id="cirurgia-plastica" className="py-20 sm:py-24 md:py-32 border-t border-cyan-500/20 bg-gradient-to-b from-[#04080a] via-[#060b0d] to-[#05080a] relative overflow-hidden">
          {/* Ambient light glow effects */}
          <div className="pointer-events-none absolute -top-40 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="pointer-events-none absolute bottom-10 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Header da Seção */}
            <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase tracking-widest mb-4 shadow-sm shadow-cyan-500/20">
                <img
                  src="/logo-faaz.png"
                  alt="Logo FAAZ"
                  className="w-4 h-4 object-contain filter drop-shadow flex-shrink-0"
                />
                <span>Cirurgia Plástica • Belo Horizonte</span>
              </div>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
                Harmonia Corporal & Arte Cirúrgica de Alta Precisão
              </h2>
              <p className="text-zinc-300 mt-4 sm:mt-5 text-sm sm:text-base md:text-lg leading-relaxed">
                Na Clínica FAAZ, a cirurgia plástica é planejada com rigor anatômico milimétrico e realizada exclusivamente nos hospitais mais bem equipados de Belo Horizonte. Unimos o talento cirúrgico refinado ao suporte metabólico pré e pós-operatório para resultados elegantes, naturais e com segurança inegociável.
              </p>
            </div>

            {/* Grid dos 4 Procedimentos Principais */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-14 sm:mb-20">
              {/* Procedimento 1: Lipo HD & Contorno Corporal */}
              <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#0c1619] via-[#080e10] to-[#05080a] border border-cyan-500/30 hover:border-cyan-400 transition-all duration-300 group shadow-xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300">
                      Definição Anatômica 3D
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                      <Sparkles className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-3">
                    Lipoaspiração HD & Contorno Corporal
                  </h3>
                  <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-6">
                    Escultura detalhada das transições musculares anatômicas de abdômen, flancos, dorso e braços. Utilizamos tecnologias de retração dérmica para máxima aderência da pele e enxertia estruturada para harmonia da silhueta.
                  </p>
                  <ul className="space-y-2.5 text-xs text-zinc-300 mb-6">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>Linhas anatômicas elegantes e suaves sem estigmas artificiais</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>Tecnologia de retração cutânea para minimizar a flacidez de pele</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>Lipoenxertia glútea planejada para projeção anatômica equilibrada</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>Mapeamento pré-cirúrgico da camada adiposa com foco em segurança vascular</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                  <span className="text-[11px] font-mono text-cyan-300">Centro Hospitalar em BH</span>
                  <a
                    href={whatsappCirurgiaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <span>Avaliar com Cirurgião</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Procedimento 2: Mastopexia & Implantes Mamários */}
              <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#0c1619] via-[#080e10] to-[#05080a] border border-cyan-500/30 hover:border-cyan-400 transition-all duration-300 group shadow-xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300">
                      Sustentação Avançada
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                      <HeartPulse className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-3">
                    Mastopexia & Próteses Dual Plane
                  </h3>
                  <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-6">
                    Reposicionamento da mama com firmeza, contorno nobre e sustentação de longo prazo. Utilizamos a técnica Dual Plane associada a pontos de sustentação interna ('Sutiã Interno') com cicatrizes planejadas e discretas.
                  </p>
                  <ul className="space-y-2.5 text-xs text-zinc-300 mb-6">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>Colo desenhado com transição natural e sem aspecto de 'bola'</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>Técnica de Sutiã Interno para ancoragem duradoura do polo inferior</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>Próteses de padrão ouro com microtexturização e rastreabilidade total</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>Cicatrizes reduzidas em L ou T curto com fios de alta precisão</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                  <span className="text-[11px] font-mono text-cyan-300">Dual Plane & Sutiã Interno</span>
                  <a
                    href={whatsappCirurgiaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <span>Avaliar com Cirurgião</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Procedimento 3: Abdominoplastia Funcional & Reparadora */}
              <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#0c1619] via-[#080e10] to-[#05080a] border border-cyan-500/30 hover:border-cyan-400 transition-all duration-300 group shadow-xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300">
                      Reconstrução Muscular
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-3">
                    Abdominoplastia & Fechamento de Diástase
                  </h3>
                  <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-6">
                    Correção anatômica do afastamento muscular dos retos abdominais causado por gestações ou perda ponderal severa. Reconstrução da cinta abdominal, remoção do excedente de pele e confecção de cicatriz ultra-baixa.
                  </p>
                  <ul className="space-y-2.5 text-xs text-zinc-300 mb-6">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>Plicatura muscular reforçada para devolver estabilidade ao abdômen e lombar</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>Umbigo delicado e anatomicamente proporcional sem marcas óbvias</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>Incisão cirúrgica milimetricamente desenhada para ser coberta por biquínis</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>Sinergia com controle metabólico endocrinológico para prevenir reganho</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                  <span className="text-[11px] font-mono text-cyan-300">Plicatura de Diástase</span>
                  <a
                    href={whatsappCirurgiaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <span>Avaliar com Cirurgião</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Procedimento 4: Cirurgia Facial & Blefaroplastia */}
              <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#0c1619] via-[#080e10] to-[#05080a] border border-cyan-500/30 hover:border-cyan-400 transition-all duration-300 group shadow-xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300">
                      Rejuvenescimento Natural
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                      <Award className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-3">
                    Deep Plane Face & Blefaroplastia Estruturada
                  </h3>
                  <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-6">
                    Reposicionamento profundo dos ligamentos e camadas musculares faciais (SMAS / Deep Plane) sem tracionar a pele, associado ao tratamento milimétrico das pálpebras. Rejuvenescimento expressivo com naturalidade absoluta.
                  </p>
                  <ul className="space-y-2.5 text-xs text-zinc-300 mb-6">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>Sustentação pelas camadas profundas sem o estigma de face 'repuxada'</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>Blefaroplastia superior e inferior para remoção de bolsas e olhar descansado</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>Redefinição límpida do contorno mandibular e transição com o pescoço</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>Incisões anatômicas camufladas nos contornos da orelha e linha capilar</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                  <span className="text-[11px] font-mono text-cyan-300">Deep Plane & Pálpebras</span>
                  <a
                    href={whatsappCirurgiaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <span>Avaliar com Cirurgião</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* BOX DE SEGURANÇA HOSPITALAR PADRÃO OURO EM BELO HORIZONTE */}
            <div className="rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-[#0c1619] via-[#091114] to-[#06090a] p-8 sm:p-12 md:p-14 shadow-2xl relative overflow-hidden mb-12">
              <div className="max-w-3xl mb-8 sm:mb-10">
                <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold block mb-2">
                  Segurança Inegociável • Protocolo FAAZ
                </span>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
                  Por Que Operar com a Equipe de Cirurgia Plástica da Clínica FAAZ?
                </h3>
                <p className="text-zinc-300 text-sm sm:text-base mt-3 leading-relaxed">
                  Não abrimos mão da sua vida e da sua integridade. Nossa conduta cirúrgica é estritamente pautada nos mais altos protocolos mundiais de segurança do paciente.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center text-cyan-400 mb-4">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-bold text-white mb-2">100% em Hospitais Acreditados de BH</h4>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      Nunca operamos em consultórios ou clínicas ambulatoriais. Toda intervenção cirúrgica é realizada em hospitais de grande porte com CTI/UTI e estrutura de retaguarda em Belo Horizonte.
                    </p>
                  </div>
                  <span className="text-[10px] font-mono text-cyan-400 mt-4 block">Hospitais de Referência</span>
                </div>

                <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center text-cyan-400 mb-4">
                      <Activity className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-bold text-white mb-2">Anestesista Dedicado (SBA)</h4>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      Médico especialista em anestesiologia ao seu lado em tempo integral na sala operatória e na recuperação pós-anestésica, com monitorização cerebral e hemodinâmica contínua.
                    </p>
                  </div>
                  <span className="text-[10px] font-mono text-cyan-400 mt-4 block">Presença Ininterrupta</span>
                </div>

                <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center text-cyan-400 mb-4">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-bold text-white mb-2">Profilaxia Ativa de Trombose (TVP)</h4>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      Botas de compressão pneumática intermitente durante todo o ato cirúrgico, meias antitrombo graduadas e protocolo profilático medicamentoso rigoroso.
                    </p>
                  </div>
                  <span className="text-[10px] font-mono text-cyan-400 mt-4 block">Proteção Máxima</span>
                </div>

                <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center text-cyan-400 mb-4">
                      <Stethoscope className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-bold text-white mb-2">Sinergia Metabólica FAAZ</h4>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      Preparo laboratorial com suporte de endocrinologia para otimizar glicemia, micronutrientes, síntese de colágeno e acelerar a cicatrização no pós-operatório.
                    </p>
                  </div>
                  <span className="text-[10px] font-mono text-cyan-400 mt-4 block">Recuperação Acelerada</span>
                </div>
              </div>
            </div>

            {/* AVISO DE TRANSPARÊNCIA: APP É EXCLUSIVO PARA ENDOCRINOLOGIA */}
            <div className="p-5 sm:p-6 rounded-2xl bg-zinc-900/60 border border-zinc-700/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 flex-shrink-0 mt-0.5">
                  <Lock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white">
                    Nota de Acompanhamento: App EnDoc 2.0 Exclusivo da Endocrinologia
                  </h4>
                  <p className="text-[11px] sm:text-xs text-zinc-400 mt-1 leading-relaxed">
                    O acompanhamento digital diário pelo aplicativo EnDoc 2.0 é exclusivo para os pacientes em tratamento de Endocrinologia Avançada. Na Cirurgia Plástica, todas as avaliações, revisões de pós-operatório, curativos e retiradas de pontos são realizadas presencialmente pela equipe cirúrgica em nossa clínica em Belo Horizonte.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA DA CIRURGIA PLÁSTICA */}
            <div className="text-center">
              <a
                href={whatsappCirurgiaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-sm sm:text-base font-bold bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 text-black shadow-xl shadow-cyan-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Calendar className="w-5 h-5" />
                <span>Agendar Avaliação com o Cirurgião Plástico</span>
              </a>
              <p className="text-xs text-zinc-400 mt-3">
                Consultas presenciais na Clínica FAAZ em Belo Horizonte - MG • Estacionamento com manobrista no local
              </p>
            </div>
          </div>
        </section>

        {/* PROGRAMAS CLÍNICOS ESTRUTURADOS (MÉTODO FAAZ) */}
        <section id="programas" className="py-16 sm:py-20 md:py-24 border-t border-white/[0.08] relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
              <span className="text-xs uppercase tracking-widest text-emerald-400 font-semibold mb-2 block">
                Metodologia Própria
              </span>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                Programas de Tratamento da Clínica FAAZ
              </h2>
              <p className="text-zinc-400 mt-3 sm:mt-4 text-sm sm:text-base md:text-lg">
                Protocolos desenhados para gerar resultados duradouros através da consulta presencial de precisão e acompanhamento no aplicativo.
              </p>
            </div>

            {/* Abas dos Programas Responsivas */}
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8 sm:mb-10 w-full">
              {programs.map((program, idx) => (
                <button
                  key={program.id}
                  onClick={() => setActiveProgramTab(idx)}
                  className={`w-full sm:w-auto px-4 sm:px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    activeProgramTab === idx
                      ? "bg-emerald-500 text-black shadow-lg shadow-emerald-500/25 scale-[1.01]"
                      : "bg-white/[0.03] text-zinc-300 hover:text-white hover:bg-white/[0.06] border border-white/[0.08]"
                  }`}
                >
                  {program.title}
                </button>
              ))}
            </div>

            {/* Conteúdo do Programa Ativo */}
            <div className="max-w-4xl mx-auto rounded-3xl border border-emerald-500/30 bg-[#0a0f12] p-6 sm:p-10 md:p-12 shadow-2xl relative overflow-hidden">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mb-5 sm:mb-6">
                <div>
                  <span className="text-xs uppercase tracking-widest text-emerald-400 font-bold block mb-1">
                    {programs[activeProgramTab].tag}
                  </span>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white">
                    {programs[activeProgramTab].title}
                  </h3>
                </div>
                <div className="text-xs px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 font-bold self-start sm:self-auto">
                  Presencial + App Exclusivo
                </div>
              </div>

              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
                {programs[activeProgramTab].subtitle}
              </p>

              <div className="space-y-3 sm:space-y-3.5 mb-6 sm:mb-8">
                <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider block">
                  O que está incluso no programa da Clínica FAAZ:
                </span>
                {programs[activeProgramTab].highlights.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 sm:gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/15 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span className="text-xs sm:text-sm text-zinc-200">{item}</span>
                  </div>
                ))}
              </div>

              <div className="p-3.5 sm:p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between flex-wrap gap-3 mb-6 sm:mb-8">
                <div>
                  <span className="text-xs text-zinc-400 block">Indicado prioritariamente para:</span>
                  <span className="text-xs sm:text-sm font-semibold text-white">
                    {programs[activeProgramTab].idealFor}
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-5 sm:pt-6 border-t border-white/[0.08]">
                <div className="text-xs text-zinc-400 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Emissão de recibo para reembolso</span>
                </div>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold bg-emerald-500 hover:bg-emerald-400 text-black shadow-lg shadow-emerald-500/20 transition-all hover:scale-[1.02]"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Consultar Vagas na Recepção</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CASOS DE SUCESSO / DEPOIMENTOS DE PACIENTES DA FAAZ */}
        <section id="depoimentos" className="py-16 sm:py-20 md:py-24 border-t border-white/[0.08] bg-[#050809] relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <span className="text-xs uppercase tracking-widest text-emerald-400 font-semibold mb-2 block">
                Histórias Clínicas Reais
              </span>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                Resultados Transformados na Clínica FAAZ
              </h2>
              <p className="text-zinc-400 mt-3 sm:mt-4 text-sm sm:text-base md:text-lg">
                Relatos de quem realizou a consulta presencial e segue com acompanhamento diário pelo aplicativo exclusivo da FAAZ.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {/* Depoimento 1 */}
              <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#0c1214] to-[#070b0c] border border-white/[0.08] relative flex flex-col justify-between shadow-xl">
                <div>
                  <div className="flex items-center gap-1 text-emerald-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-emerald-400" />
                    ))}
                  </div>
                  <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-6 italic">
                    “Após anos tentando dietas malucas e lidando com cansaço absurdo, fiz a consulta presencial na FAAZ e eles descobriram que minha tireoide e insulina estavam descompensadas. Em 4 meses perdi 14 kg sem passar fome, e o acompanhamento diário pelo app da clínica fez toda a diferença!”
                  </p>
                </div>
                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <div>
                    <span className="font-semibold text-white text-xs sm:text-sm block">Mariana S.</span>
                    <span className="text-[11px] text-zinc-400">Paciente Clínica FAAZ</span>
                  </div>
                  <span className="text-[10px] text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/20 font-bold">
                    -14 kg & Vigor
                  </span>
                </div>
              </div>

              {/* Depoimento 2 */}
              <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#0c1214] to-[#070b0c] border border-white/[0.08] relative flex flex-col justify-between shadow-xl">
                <div>
                  <div className="flex items-center gap-1 text-emerald-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-emerald-400" />
                    ))}
                  </div>
                  <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-6 italic">
                    “Meu maior receio era ficar perdido após sair do consultório, mas o aplicativo exclusivo da FAAZ é revolucionário. Coloquei o sensor de glicose lá na clínica e via em tempo real o impacto dos alimentos. Minha hemoglobina glicada caiu de 8.2% para 5.6% em seis meses!”
                  </p>
                </div>
                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <div>
                    <span className="font-semibold text-white text-xs sm:text-sm block">Carlos E.</span>
                    <span className="text-[11px] text-zinc-400">Paciente Clínica FAAZ</span>
                  </div>
                  <span className="text-[10px] text-teal-400 bg-teal-950/60 px-2 py-0.5 rounded border border-teal-500/20 font-bold">
                    HbA1c Normalizada
                  </span>
                </div>
              </div>

              {/* Depoimento 3 */}
              <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#0c1214] to-[#070b0c] border border-white/[0.08] relative flex flex-col justify-between shadow-xl">
                <div>
                  <div className="flex items-center gap-1 text-emerald-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-emerald-400" />
                    ))}
                  </div>
                  <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-6 italic">
                    “Moro no interior de Minas e vou a Belo Horizonte para as consultas presenciais na FAAZ. O atendimento presencial é impecável, os médicos realmente escutam você por mais de uma hora. No restante dos meses, o aplicativo exclusivo da clínica cuida de tudo com perfeição!”
                  </p>
                </div>
                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <div>
                    <span className="font-semibold text-white text-xs sm:text-sm block">Renata P.</span>
                    <span className="text-[11px] text-zinc-400">Consulta Presencial + App</span>
                  </div>
                  <span className="text-[10px] text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/20 font-bold">
                    Acompanhamento no App
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ESTRUTURA DA SEDE PRESENCIAL */}
        <section className="py-16 sm:py-20 border-t border-white/[0.08] relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
              {/* Sede Presencial */}
              <div className="p-6 sm:p-10 rounded-3xl bg-[#0c1214] border border-white/[0.08] space-y-4">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">Sede Presencial Clínica FAAZ</h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  Ambiente nobre, privativo e projetado para seu conforto absoluto. Estacionamento com manobrista no local, consultórios modernos e salas de avaliação biométrica de última geração.
                </p>
                <div className="pt-2 text-xs text-zinc-300 space-y-2">
                  <p className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                    <span>Belo Horizonte - MG • Polo Médico de Alta Complexidade</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                    <span>Atendimento Presencial de Segunda a Sexta, das 08h às 20h</span>
                  </p>
                </div>
              </div>

              {/* O Acompanhamento no Aplicativo */}
              <div className="p-6 sm:p-10 rounded-3xl bg-[#0c1214] border border-white/[0.08] space-y-4">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400">
                  <Smartphone className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">Acompanhamento Exclusivo no App</h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  Você não precisa voltar todo mês para saber se o plano está funcionando. Todas as suas métricas, glicemia, peso e prescrições são acompanhadas diariamente pela equipe médica da FAAZ através do aplicativo.
                </p>
                <div className="pt-2 text-xs text-zinc-300 space-y-2">
                  <p className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 flex-shrink-0" />
                    <span>Sincronização direta com a equipe médica da clínica</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Lock className="w-3.5 h-3.5 text-teal-400 flex-shrink-0" />
                    <span>Dados de saúde protegidos e criptografados (LGPD)</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-16 sm:py-20 md:py-24 border-t border-white/[0.08] relative bg-[#050809]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <span className="text-xs uppercase tracking-widest text-emerald-400 font-semibold mb-2 block">
                Tire Suas Dúvidas
              </span>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                Perguntas Frequentes
              </h2>
              <p className="text-zinc-400 mt-3 sm:mt-4 text-sm sm:text-base">
                Tudo o que você precisa saber sobre a consulta presencial e o acompanhamento no aplicativo da Clínica FAAZ.
              </p>
            </div>

            <div className="space-y-3.5 sm:space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = activeFaq === index;
                return (
                  <div
                    key={index}
                    className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                      isOpen
                        ? "border-emerald-500/40 bg-[#0c1214]"
                        : "border-white/[0.08] bg-white/[0.02] hover:border-white/[0.15]"
                    }`}
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full text-left p-5 sm:p-7 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                    >
                      <span className="font-semibold text-white text-sm sm:text-base md:text-lg">
                        {faq.question}
                      </span>
                      <div
                        className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                          isOpen
                            ? "bg-emerald-500 text-black rotate-180"
                            : "bg-white/[0.05] text-zinc-300"
                        }`}
                      >
                        <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </div>
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 sm:px-7 sm:pb-7 text-zinc-300 text-xs sm:text-sm leading-relaxed border-t border-white/[0.06] pt-4">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA FINAL DE AGENDAMENTO PRESENCIAL */}
        <section id="agendamento" className="py-16 sm:py-20 md:py-24 border-t border-white/[0.08] relative overflow-hidden bg-gradient-to-b from-[#06090a] via-[#091316] to-[#040708]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="p-8 sm:p-14 md:p-16 rounded-3xl border border-emerald-500/40 bg-gradient-to-b from-[#0e1618] via-[#091012] to-[#060a0b] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-1/2 translate-x-1/2 -mt-12 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

              <span className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-5 sm:mb-6">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" /> CONSULTA PRESENCIAL DE ALTO PADRÃO
              </span>

              <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-4 max-w-3xl mx-auto leading-tight">
                Sua saúde merece o cuidado da <span className="text-emerald-400">Clínica FAAZ</span>.
              </h2>

              <p className="text-zinc-300 text-sm sm:text-base md:text-lg max-w-xl mx-auto mb-8 sm:mb-10 leading-relaxed">
                Agende sua consulta presencial em nossa sede em Belo Horizonte e inicie seu acompanhamento diário pelo aplicativo exclusivo da clínica.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-3.5 sm:py-4 rounded-xl text-sm sm:text-base font-extrabold bg-emerald-500 hover:bg-emerald-400 text-black shadow-xl shadow-emerald-500/35 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
                >
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
                  <span>Agendar Consulta Presencial no WhatsApp</span>
                </a>
              </div>

              <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-zinc-300 font-medium">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" /> Consulta Presencial Privada
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-emerald-400 flex-shrink-0" /> Duração Estendida (60 a 90 min)
                </span>
                <span className="flex items-center gap-1.5">
                  <Smartphone className="w-4 h-4 text-emerald-400 flex-shrink-0" /> App Exclusivo Incluso
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* RODAPÉ INSTITUCIONAL */}
      <footer className="border-t border-white/[0.08] bg-[#030506] py-10 sm:py-14 text-zinc-400 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 sm:gap-10 pb-10 sm:pb-12 border-b border-white/[0.06]">
            {/* Coluna 1: Clínica FAAZ */}
            <div className="space-y-4 md:col-span-2">
              <div className="flex items-center gap-3.5">
                <div className="relative w-11 h-11 flex items-center justify-center flex-shrink-0">
                  <img
                    src="/logo-faaz.png"
                    alt="Clínica FAAZ"
                    className="w-full h-full object-contain filter drop-shadow-[0_0_12px_rgba(212,175,55,0.35)]"
                  />
                </div>
                <span className="font-extrabold text-xl tracking-tight text-white">
                  CLÍNICA <span className="text-emerald-400">FAAZ</span>
                </span>
              </div>
              <p className="text-xs text-zinc-400 max-w-sm leading-relaxed">
                Centro médico especializado em Endocrinologia Avançada e Cirurgia Plástica em Belo Horizonte.
                Pioneira na integração de consultas presenciais de precisão com o aplicativo de acompanhamento exclusivo EnDoc 2.0 para pacientes de endocrinologia.
              </p>
              <div className="text-xs text-zinc-500">
                Diretoria Técnica Médica com RQE específico e inscrição no Conselho Regional de Medicina de Minas Gerais (CRM-MG).
              </div>
            </div>

            {/* Coluna 2: Navegação */}
            <div>
              <h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-3 sm:mb-4">Navegação Rápida</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#a-clinica" className="hover:text-emerald-400 transition-colors">A Clínica FAAZ</a></li>
                <li><a href="#especialidades" className="hover:text-emerald-400 transition-colors">Especialidades</a></li>
                <li><a href="#app-showcase" className="hover:text-emerald-400 transition-colors">App Exclusivo FAAZ</a></li>
                <li><a href="#programas" className="hover:text-emerald-400 transition-colors">Método FAAZ</a></li>
                <li><a href="#depoimentos" className="hover:text-emerald-400 transition-colors">Casos de Sucesso</a></li>
                <li><a href="#faq" className="hover:text-emerald-400 transition-colors">Perguntas Frequentes</a></li>
              </ul>
            </div>

            {/* Coluna 3: Atendimento & Segurança */}
            <div>
              <h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-3 sm:mb-4">Atendimento Presencial</h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-zinc-300 hover:text-emerald-400 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                    <span>(31) 98440-0076 (WhatsApp)</span>
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" /> Conformidade LGPD & CFM
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" /> Sede Própria em Belo Horizonte - MG
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400 text-center sm:text-left">
            <div>
              © 2026 Clínica FAAZ. Todos os direitos reservados.
            </div>
            <div className="text-[11px] text-zinc-500">
              As informações contidas neste site possuem caráter educativo e não substituem a consulta médica individualizada.
            </div>
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP BUTTON (CONVERSÃO CONTÍNUA RESPONSIVA) */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp com a Clínica FAAZ"
        className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex items-center gap-2 px-4 py-3 sm:px-5 sm:py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-xs sm:text-sm shadow-2xl shadow-emerald-500/40 hover:scale-105 active:scale-95 transition-all duration-300"
      >
        <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 fill-black text-emerald-500 flex-shrink-0" />
        <span className="hidden sm:inline">Agendar Consulta Presencial</span>
        <span className="sm:hidden font-bold">Agendar</span>
      </a>
    </div>
  );
}
