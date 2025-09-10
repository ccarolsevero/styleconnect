'use client'

import { useState } from 'react'
import RevealOnScroll from '../components/RevealOnScroll'
import { 
  Calendar, 
  Users, 
  DollarSign, 
  BarChart3, 
  Smartphone, 
  Shield, 
  CheckCircle, 
  Star,
  ArrowRight,
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Clock,
  Target,
  TrendingUp,
  Globe,
  Award,
  Zap,
  Heart,
  ShoppingBag,
  Database,
  UserCheck,
  Gift,
  CreditCard,
  Package,
  AlertTriangle,
  CheckCircle2,
  Percent,
  Timer,
  Users2,
  Monitor
} from 'lucide-react'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
    setIsMenuOpen(false) // Fecha o menu mobile após clicar
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message')
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitMessage('Mensagem enviada com sucesso! Entraremos em contato em breve.')
        e.currentTarget.reset()
      } else {
        setSubmitMessage('Erro ao enviar mensagem. Tente novamente.')
      }
    } catch (error) {
      setSubmitMessage('Erro ao enviar mensagem. Tente novamente.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const challenges = [
    {
      icon: AlertTriangle,
      title: 'Agendamentos manuais e confusos',
      description: 'Perda de clientes por falhas na organização de horários'
    },
    {
      icon: DollarSign,
      title: 'Controle financeiro desorganizado',
      description: 'Dificuldade para acompanhar receitas, despesas e lucros'
    },
    {
      icon: Users,
      title: 'Falta de fidelização dos clientes',
      description: 'Ausência de estratégias para reter e engajar clientes'
    },
    {
      icon: Target,
      title: 'Dificuldade no controle de comissões e metas',
      description: 'Gestão complexa de equipe e objetivos de vendas'
    },
    {
      icon: Globe,
      title: 'Ausência de presença digital profissional',
      description: 'Falta de visibilidade online e credibilidade digital'
    }
  ]

  const solutions = [
    {
      icon: Calendar,
      title: 'Agenda digital inteligente e lembretes automáticos',
      description: 'Sistema 24/7 com notificações automáticas para clientes e profissionais'
    },
    {
      icon: BarChart3,
      title: 'Gestão financeira completa e transparente',
      description: 'Controle total de receitas, despesas, comissões e relatórios detalhados'
    },
    {
      icon: Heart,
      title: 'Sistema de fidelização integrado',
      description: 'Programas de pontos, pacotes e promoções para reter clientes'
    },
    {
      icon: TrendingUp,
      title: 'Dashboard executivo com métricas em tempo real',
      description: 'Visão completa do negócio com indicadores de performance'
    },
    {
      icon: Globe,
      title: 'Site profissional e presença digital otimizada',
      description: 'Vitrine digital completa com agendamento online integrado'
    }
  ]

  const fourPillars = [
    {
      icon: Users2,
      title: 'Gestão Administrativa',
      description: 'Controle completo de profissionais, clientes e operações'
    },
    {
      icon: Calendar,
      title: 'Agendamento Inteligente',
      description: 'Sistema automatizado com lembretes e otimização de horários'
    },
    {
      icon: DollarSign,
      title: 'Gestão Financeira',
      description: 'Controle de caixa, comissões, metas e relatórios financeiros'
    },
    {
      icon: Globe,
      title: 'Presença Digital',
      description: 'Site profissional, loja online e marketing digital integrado'
    }
  ]

  const includedFeatures = [
    { icon: Globe, text: 'Site profissional responsivo como vitrine digital' },
    { icon: Calendar, text: 'Agenda digital 24/7 com lembretes automáticos' },
    { icon: BarChart3, text: 'Gestão financeira completa e relatórios detalhados' },
    { icon: Users, text: 'Controle de profissionais, metas e comissões' },
    { icon: TrendingUp, text: 'Dashboard executivo em tempo real' },
    { icon: Gift, text: 'Sistema de fidelização com pacotes e promoções' },
    { icon: ShoppingBag, text: 'Loja online integrada para venda de produtos' },
    { icon: Shield, text: 'Segurança empresarial com backup diário' },
    { icon: UserCheck, text: 'Painel exclusivo para clientes' },
    { icon: Award, text: 'Treinamento e suporte premium' }
  ]

  const competitiveAdvantages = [
    {
      category: 'Tecnologia de Ponta',
      icon: Zap,
      features: [
        'Next.js 14 com performance otimizada',
        'Interface moderna e intuitiva',
        'Responsivo para todos os dispositivos',
        'Segurança de dados empresarial'
      ]
    },
    {
      category: 'Funcionalidades Únicas',
      icon: Star,
      features: [
        'Sistema de Prontuários digitais completos',
        'Gestão de Pacotes personalizados',
        'Sistema de Comissões flexível e transparente',
        'Integração com Pagamentos (Sicoob e outros)',
        'Sistema de Recomendações para clientes',
        'Controle de estoque de produtos'
      ]
    },
    {
      category: 'Experiência do Cliente',
      icon: Heart,
      features: [
        'Agendamento online 24/7',
        'Painel personalizado do cliente',
        'Sistema de avaliações integrado',
        'Histórico completo de atendimentos',
        'Notificações automáticas'
      ]
    }
  ]

  const roiBenefits = [
    { icon: TrendingUp, value: '+35%', description: 'aumento médio no faturamento' },
    { icon: Timer, value: '-70%', description: 'tempo administrativo' },
    { icon: Users, value: '+40%', description: 'retenção de clientes' },
    { icon: Globe, value: '+300%', description: 'presença digital' }
  ]


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50">
      {/* Header */}
      <header className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold gradient-text-elegant">StyleConnect</div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('solution')} className="text-gray-700 hover:text-secondary-500 transition-colors">Solução</button>
              <button onClick={() => scrollToSection('pillars')} className="text-gray-700 hover:text-secondary-500 transition-colors">Pilares</button>
              <button onClick={() => scrollToSection('included')} className="text-gray-700 hover:text-secondary-500 transition-colors">Funcionalidades</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-secondary-500 transition-colors">Contato</button>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <a 
                href="https://wa.me/5511997932185?text=Olá! Gostaria de saber mais sobre o StyleConnect e como adquirir o sistema."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary px-6 py-2 rounded-full inline-block text-center"
              >
                Comprar Agora
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <nav className="flex flex-col space-y-4">
                <button onClick={() => scrollToSection('solution')} className="text-gray-700 hover:text-secondary-500 transition-colors text-left">Solução</button>
                <button onClick={() => scrollToSection('pillars')} className="text-gray-700 hover:text-secondary-500 transition-colors text-left">Pilares</button>
                <button onClick={() => scrollToSection('included')} className="text-gray-700 hover:text-secondary-500 transition-colors text-left">Funcionalidades</button>
                <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-secondary-500 transition-colors text-left">Contato</button>
                <a 
                  href="https://wa.me/5511997932185?text=Olá! Gostaria de saber mais sobre o StyleConnect e como adquirir o sistema."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary px-6 py-2 rounded-full w-full inline-block text-center"
                >
                  Comprar Agora
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <RevealOnScroll direction="up">
              <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6">
                Sistema de Gestão Completo para{' '}
                <span className="text-purple-800 animate-pulse-subtle">Salões de Beleza</span>
              </h1>
            </RevealOnScroll>
            <RevealOnScroll direction="up" delay={200}>
              <p className="text-xl md:text-2xl text-slate-800 mb-6 max-w-4xl mx-auto">
                Solução tecnológica completa e moderna desenvolvida especificamente para salões de beleza e clínicas de estética.
              </p>
            </RevealOnScroll>
            <RevealOnScroll direction="up" delay={400}>
              <p className="text-lg md:text-xl text-slate-700 mb-8 max-w-5xl mx-auto leading-relaxed">
                Uma plataforma que integra todas as funcionalidades essenciais para uma gestão eficiente e acessível de negócios do setor de beleza, oferecendo uma experiência digital completa tanto para proprietários e clientes.
              </p>
            </RevealOnScroll>
            <RevealOnScroll direction="scale" delay={600}>
              <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl p-4 mb-8 max-w-2xl mx-auto border border-blue-200 hover-lift">
                <p className="text-lg font-semibold text-blue-800">
                  Transforme seu salão com tecnologia de ponta
                </p>
              </div>
            </RevealOnScroll>
            <RevealOnScroll direction="up" delay={800}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="btn-clean px-8 py-4 rounded-full text-lg font-semibold flex items-center gap-2 hover-glow"
                >
                  Agendar Demonstração Gratuita
                  <ArrowRight size={20} />
                </button>
                <button 
                  onClick={() => scrollToSection('included')}
                  className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-full text-lg font-semibold hover:border-purple-500 hover:text-purple-500 transition-all duration-300 hover-glow"
                >
                  Ver Funcionalidades
                </button>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section id="challenges" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <RevealOnScroll direction="up">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Desafios do Mercado
              </h2>
            </RevealOnScroll>
            <RevealOnScroll direction="up" delay={200}>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Os principais problemas que impedem o crescimento do seu salão
              </p>
            </RevealOnScroll>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {challenges.map((challenge, index) => (
              <RevealOnScroll key={index} direction="up" delay={index * 200}>
                <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-slate-400 hover-lift">
                  <div className="bg-slate-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 hover-scale">
                    <challenge.icon className="text-slate-600" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{challenge.title}</h3>
                  <p className="text-gray-600">{challenge.description}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <RevealOnScroll direction="up">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Nossa Solução
              </h2>
            </RevealOnScroll>
            <RevealOnScroll direction="up" delay={200}>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Como o StyleConnect resolve todos esses problemas
              </p>
            </RevealOnScroll>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <RevealOnScroll key={index} direction="up" delay={index * 200}>
                <div className="bg-gradient-to-br from-white to-accent-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-accent-500 hover-lift">
                  <div className="gradient-accent w-16 h-16 rounded-2xl flex items-center justify-center mb-6 hover-scale animate-float">
                    <solution.icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{solution.title}</h3>
                  <p className="text-gray-600">{solution.description}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Four Pillars Section */}
      <section id="pillars" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-accent-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <RevealOnScroll direction="up">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Os 4 Pilares do Sistema
              </h2>
            </RevealOnScroll>
            <RevealOnScroll direction="up" delay={200}>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Fundamentos sólidos para o sucesso do seu salão
              </p>
            </RevealOnScroll>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {fourPillars.map((pillar, index) => (
              <RevealOnScroll key={index} direction="up" delay={index * 200}>
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center hover-lift">
                  <div className="gradient-accent w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto hover-scale animate-float">
                    <pillar.icon className="text-white" size={40} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{pillar.title}</h3>
                  <p className="text-gray-600">{pillar.description}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Included Features Section */}
      <section id="included" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <RevealOnScroll direction="up">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                O que está incluso
              </h2>
            </RevealOnScroll>
            <RevealOnScroll direction="up" delay={200}>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Tudo que você precisa para transformar seu salão
              </p>
            </RevealOnScroll>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {includedFeatures.map((feature, index) => (
              <RevealOnScroll key={index} direction="left" delay={index * 100}>
                <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl hover:shadow-md transition-all duration-300 hover-lift">
                  <div className="gradient-accent w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 hover-scale">
                    <feature.icon className="text-white" size={24} />
                  </div>
                  <span className="text-gray-700 font-medium">{feature.text}</span>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Competitive Advantages Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-accent-50 to-secondary-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <RevealOnScroll direction="up">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Diferenciais Competitivos
              </h2>
            </RevealOnScroll>
            <RevealOnScroll direction="up" delay={200}>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Por que escolher o StyleConnect
              </p>
            </RevealOnScroll>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {competitiveAdvantages.map((advantage, index) => (
              <RevealOnScroll key={index} direction="up" delay={index * 300}>
                <div className="bg-white p-8 rounded-2xl shadow-lg hover-lift">
                  <div className="text-center mb-6">
                    <div className="gradient-accent w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 hover-scale animate-float">
                      <advantage.icon className="text-white" size={32} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{advantage.category}</h3>
                  </div>
                  <ul className="space-y-3">
                    {advantage.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <CheckCircle2 className="text-green-500 mt-1 flex-shrink-0" size={20} />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section id="roi" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-accent-50 to-gold-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <RevealOnScroll direction="up">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Retorno sobre Investimento
              </h2>
            </RevealOnScroll>
            <RevealOnScroll direction="up" delay={200}>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Resultados comprovados que você pode esperar
              </p>
            </RevealOnScroll>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {roiBenefits.map((benefit, index) => (
              <RevealOnScroll key={index} direction="scale" delay={index * 200}>
                <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover-lift">
                  <div className="gradient-gold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 hover-scale animate-float">
                    <benefit.icon className="text-white" size={32} />
                  </div>
                  <div className="text-4xl font-bold gradient-text-elegant mb-2">{benefit.value}</div>
                  <p className="text-gray-600 font-medium">{benefit.description}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          <RevealOnScroll direction="up" delay={800}>
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center">
              <div className="bg-gradient-to-r from-purple-100 to-accent-100 rounded-2xl p-6 mb-8 border border-purple-200 hover-lift">
                <h4 className="text-lg font-semibold text-slate-800 mb-4">Transforme seu salão agora mesmo!</h4>
                <p className="text-slate-700 mb-4">
                  Agende uma demonstração gratuita e veja como o StyleConnect pode revolucionar sua gestão.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="btn-clean px-8 py-3 rounded-full font-semibold hover-glow"
                  >
                    Agendar Demonstração Gratuita
                  </button>
                  <a 
                    href="https://wa.me/5511997932185?text=Olá! Gostaria de falar com um especialista sobre o StyleConnect."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-slate-300 text-slate-700 px-8 py-3 rounded-full font-semibold hover:border-purple-500 hover:text-purple-500 transition-all duration-300 hover-glow"
                  >
                    Falar com Especialista
                  </a>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-purple-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <RevealOnScroll direction="up">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Pronto para transformar seu salão?
              </h2>
            </RevealOnScroll>
            <RevealOnScroll direction="up" delay={200}>
              <p className="text-xl text-gray-600">
                Entre em contato conosco e tire suas dúvidas
              </p>
            </RevealOnScroll>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <RevealOnScroll direction="left">
              <div className="space-y-6">
                <div className="flex items-center gap-4 hover-lift">
                  <div className="gradient-accent w-12 h-12 rounded-full flex items-center justify-center hover-scale">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Telefone</div>
                    <div className="text-gray-600">(11) 99793-2185</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 hover-lift">
                  <div className="gradient-accent w-12 h-12 rounded-full flex items-center justify-center hover-scale">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Email</div>
                    <div className="text-gray-600">ccarolsevero@gmail.com</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 hover-lift">
                  <div className="gradient-accent w-12 h-12 rounded-full flex items-center justify-center hover-scale">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Endereço</div>
                    <div className="text-gray-600">Curitiba, PR - Brasil</div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll direction="right">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nome</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Telefone</label>
                  <input 
                    type="tel" 
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Mensagem</label>
                  <textarea 
                    rows={4} 
                    name="message"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  ></textarea>
                </div>
                {submitMessage && (
                  <div className={`p-3 rounded-lg text-sm ${
                    submitMessage.includes('sucesso') 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {submitMessage}
                  </div>
                )}
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full btn-primary py-3 rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                </button>
              </form>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="gradient-elegant text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="text-2xl font-bold gradient-text-elegant mb-4">StyleConnect</div>
            <p className="text-slate-300 mb-4">
              Sistema completo de gestão para salões de beleza e clínicas de estética. Transforme seu negócio com nossa solução inovadora.
            </p>
              <div className="flex space-x-4">
                <a 
                  href="https://wa.me/5511997932185?text=Olá! Gostaria de saber mais sobre o StyleConnect e como adquirir o sistema."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary px-6 py-2 rounded-full inline-block text-center"
                >
                  Comprar Agora
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Produto</h3>
              <ul className="space-y-2 text-slate-300">
                <li><a href="#solution" className="hover:text-white transition-colors">Solução</a></li>
                <li><a href="#pillars" className="hover:text-white transition-colors">Pilares</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contato</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Empresa</h3>
              <ul className="space-y-2 text-slate-300">
                <li><a href="#" className="hover:text-white transition-colors">Sobre Nós</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contato</a></li>
                <li><a href="/termos-de-uso" className="hover:text-white transition-colors">Termos de Uso</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-300">
            <p>&copy; 2025 StyleConnect. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
