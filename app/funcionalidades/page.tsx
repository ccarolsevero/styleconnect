'use client'

import { useState } from 'react'
import Link from 'next/link'
import RevealOnScroll from '../../components/RevealOnScroll'
import { 
  ArrowLeft, 
  Calendar, 
  DollarSign, 
  Users, 
  Star, 
  ShoppingCart, 
  Shield, 
  BarChart3, 
  Smartphone, 
  Globe, 
  Package, 
  CreditCard,
  Clock,
  CheckCircle2,
  ArrowRight,
  Monitor,
  Smartphone as PhoneIcon,
  Mail,
  MapPin,
  MessageCircle
} from 'lucide-react'

export default function FuncionalidadesPage() {
  const [activeTab, setActiveTab] = useState('agenda')

  const funcionalidades = {
    agenda: {
      title: 'Agenda Digital Inteligente',
      icon: Calendar,
      description: 'Sistema completo de agendamento com lembretes automáticos e gestão de horários',
      features: [
        'Agendamento online 24/7',
        'Lembretes automáticos por SMS e WhatsApp',
        'Gestão de horários e disponibilidade',
        'Bloqueio automático de horários',
        'Reagendamento fácil para clientes',
        'Sincronização com Google Calendar',
        'Controle de profissionais e serviços',
        'Histórico completo de agendamentos'
      ],
      benefits: [
        'Redução de 80% em no-shows',
        'Aumento de 35% na ocupação',
        'Economia de 10h/semana em gestão manual'
      ]
    },
    financeiro: {
      title: 'Gestão Financeira Completa',
      icon: DollarSign,
      description: 'Controle total das finanças com relatórios detalhados e projeções',
      features: [
        'Controle de receitas e despesas',
        'Relatórios financeiros automáticos',
        'Gestão de comissões e metas',
        'Controle de fluxo de caixa',
        'Integração com sistemas de pagamento',
        'Projeções e orçamentos',
        'Controle de inadimplência',
        'Relatórios de performance por profissional'
      ],
      benefits: [
        'Aumento de 25% no controle financeiro',
        'Redução de 60% no tempo de fechamento',
        'Visibilidade completa do negócio'
      ]
    },
    clientes: {
      title: 'Gestão de Clientes',
      icon: Users,
      description: 'Sistema completo de relacionamento e fidelização de clientes',
      features: [
        'Prontuários digitais completos',
        'Histórico de atendimentos',
        'Sistema de fidelização integrado',
        'Controle de aniversários e datas especiais',
        'Segmentação de clientes',
        'Campanhas de marketing personalizadas',
        'Sistema de avaliações e feedback',
        'Controle de preferências e alergias'
      ],
      benefits: [
        'Aumento de 40% na retenção',
        'Melhoria de 50% na experiência do cliente',
        'Redução de 70% no tempo de atendimento'
      ]
    },
    vendas: {
      title: 'Loja Online Integrada',
      icon: ShoppingCart,
      description: 'Venda produtos e serviços online com gestão completa de estoque',
      features: [
        'Catálogo de produtos online',
        'Gestão de estoque em tempo real',
        'Vendas online integradas',
        'Controle de comissões de vendas',
        'Relatórios de vendas detalhados',
        'Sistema de promoções e descontos',
        'Integração com marketplaces',
        'Controle de fornecedores'
      ],
      benefits: [
        'Aumento de 60% nas vendas de produtos',
        'Redução de 45% no estoque parado',
        'Nova fonte de receita online'
      ]
    },
    presenca: {
      title: 'Presença Digital',
      icon: Globe,
      description: 'Site profissional e presença digital otimizada para seu negócio',
      features: [
        'Site profissional responsivo',
        'SEO otimizado para busca local',
        'Integração com redes sociais',
        'Sistema de avaliações online',
        'Blog integrado para conteúdo',
        'Google My Business integrado',
        'Analytics e métricas detalhadas',
        'Chat online integrado'
      ],
      benefits: [
        'Aumento de 300% na presença digital',
        'Melhoria de 80% no posicionamento local',
        'Aumento de 25% em novos clientes online'
      ]
    },
    relatorios: {
      title: 'Dashboard Executivo',
      icon: BarChart3,
      description: 'Métricas em tempo real e relatórios executivos para tomada de decisão',
      features: [
        'Dashboard em tempo real',
        'Métricas de performance',
        'Relatórios personalizáveis',
        'Análise de tendências',
        'Comparativos mensais/anuais',
        'Alertas automáticos',
        'Exportação de dados',
        'Métricas por profissional'
      ],
      benefits: [
        'Tomada de decisão 50% mais rápida',
        'Identificação de oportunidades',
        'Controle total do negócio'
      ]
    }
  }

  const tabs = Object.keys(funcionalidades).map(key => ({
    key,
    title: funcionalidades[key as keyof typeof funcionalidades].title,
    icon: funcionalidades[key as keyof typeof funcionalidades].icon
  }))

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold gradient-text-elegant">
                StyleConnect
              </Link>
            </div>
            <Link
              href="/"
              className="flex items-center gap-2 text-gray-700 hover:text-purple-600 transition-colors"
            >
              <ArrowLeft size={20} />
              Voltar ao site
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <RevealOnScroll direction="up" delay={300}>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6">
              Funcionalidades do{' '}
              <span className="text-purple-800">StyleConnect</span>
            </h1>
          </RevealOnScroll>
          <RevealOnScroll direction="up" delay={600}>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Descubra todas as funcionalidades que fazem do StyleConnect a solução completa para gestão de salões e clínicas de estética.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Tabs Navigation */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <RevealOnScroll direction="up" delay={900}>
            <div className="flex flex-wrap justify-center gap-4">
              {tabs.map((tab, index) => {
                const Icon = tab.icon
                return (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 hover-organic ${
                      activeTab === tab.key
                        ? 'bg-purple-600 text-white shadow-lg hover-glow'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <Icon size={20} />
                    {tab.title}
                  </button>
                )
              })}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {Object.entries(funcionalidades).map(([key, func]) => {
            if (key !== activeTab) return null
            
            const Icon = func.icon
            return (
              <div key={key}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Left Side - Content */}
                  <div>
                    <RevealOnScroll direction="left" delay={300}>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="gradient-accent w-16 h-16 rounded-2xl flex items-center justify-center hover-breathe">
                          <Icon className="text-white" size={32} />
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900">{func.title}</h2>
                      </div>
                    </RevealOnScroll>
                    
                    <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                      {func.description}
                    </p>

                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Principais Funcionalidades:</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {func.features.map((feature, index) => (
                            <div key={index} className="flex items-center gap-3">
                              <CheckCircle2 className="text-green-500 flex-shrink-0" size={20} />
                              <span className="text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Benefícios Comprovados:</h3>
                        <div className="space-y-3">
                          {func.benefits.map((benefit, index) => (
                            <div key={index} className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              <span className="text-gray-700 font-medium">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Side - Visual */}
                  <div className="relative">
                    <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-3xl p-8 text-center hover-lift">
                      <div className="gradient-accent w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 animate-float">
                        <Icon className="text-white" size={48} />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{func.title}</h3>
                      <p className="text-gray-700 mb-6">{func.description}</p>
                      <div className="flex justify-center">
                        <a 
                          href="https://wa.me/5511997932185?text=Olá! Gostaria de saber mais sobre esta funcionalidade do StyleConnect."
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary px-6 py-3 rounded-full hover-glow"
                        >
                          Saber Mais
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 animate-fade-in-up">
            Pronto para experimentar todas essas funcionalidades?
          </h2>
          <p className="text-xl text-gray-700 mb-8 animate-fade-in-up delay-200">
            Agende uma demonstração gratuita e veja como o StyleConnect pode transformar seu negócio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300">
            <a 
              href="https://wa.me/5511997932185?text=Olá! Gostaria de agendar uma demonstração gratuita do StyleConnect."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-clean px-8 py-4 rounded-full text-lg font-semibold hover-glow"
            >
              Agendar Demonstração Gratuita
            </a>
            <a 
              href="https://wa.me/5511997932185?text=Olá! Gostaria de comprar o StyleConnect."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-8 py-4 rounded-full text-lg font-semibold hover-glow"
            >
              Comprar Agora
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold gradient-text-elegant mb-4">StyleConnect</div>
              <p className="text-slate-300 mb-4">
                Sistema completo de gestão para salões de beleza e clínicas de estética. Transforme seu negócio com nossa solução inovadora.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contato</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <PhoneIcon className="text-purple-400" size={20} />
                  <span className="text-slate-300">(11) 99793-2185</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="text-purple-400" size={20} />
                  <span className="text-slate-300">ccarolsevero@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="text-purple-400" size={20} />
                  <span className="text-slate-300">Curitiba, PR - Brasil</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Produto</h3>
              <ul className="space-y-2">
                <li><Link href="/funcionalidades" className="text-slate-300 hover:text-purple-400 transition-colors">Funcionalidades</Link></li>
                <li><Link href="/termos-de-uso" className="text-slate-300 hover:text-purple-400 transition-colors">Termos de Uso</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Suporte</h3>
              <ul className="space-y-2">
                <li><a href="https://wa.me/5511997932185" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-purple-400 transition-colors">WhatsApp</a></li>
                <li><a href="mailto:ccarolsevero@gmail.com" className="text-slate-300 hover:text-purple-400 transition-colors">Email</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-300">
            <p>&copy; 2025 StyleConnect. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/5511997932185?text=Olá! Gostaria de saber mais sobre o StyleConnect."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-pulse"
        title="Fale conosco no WhatsApp"
      >
        <MessageCircle size={28} />
      </a>
    </div>
  )
}
