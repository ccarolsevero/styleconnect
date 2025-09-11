'use client'

import { useState } from 'react'
import { ArrowLeft, MessageCircle, Star, Users, TrendingUp, Award, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'
import RevealOnScroll from '@/components/RevealOnScroll'

export default function Cases() {
  const [activeTab, setActiveTab] = useState('sucessos')
  const [selectedGallery, setSelectedGallery] = useState<string[] | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const openGallery = (gallery: string[]) => {
    setSelectedGallery(gallery)
    setCurrentImageIndex(0)
  }

  const closeGallery = () => {
    setSelectedGallery(null)
    setCurrentImageIndex(0)
  }

  const nextImage = () => {
    if (selectedGallery) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedGallery.length)
    }
  }

  const prevImage = () => {
    if (selectedGallery) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedGallery.length) % selectedGallery.length)
    }
  }

  const cases = [
    {
      id: 1,
      title: "Espaço Guapa",
      location: "Leme - SP",
      type: "Salão de Beleza",
      image: "/imagens/espacoguapa/hero.png",
      website: "https://espacoguapa.com",
      gallery: [
        "/imagens/espacoguapa/hero.png",
        "/imagens/espacoguapa/dashboard.png",
        "/imagens/espacoguapa/loja.png",
        "/imagens/espacoguapa/menuadmin.png",
        "/imagens/espacoguapa/painelcliente.png",
        "/imagens/espacoguapa/profissionais.png",
        "/imagens/espacoguapa/servicoshome.png",
        "/imagens/espacoguapa/sobrenos.png"
      ],
      challenge: [
        "Custo elevado em mensalidade de Sistemas de Reservas e agendamento",
        "Falta de funções no painel administrativo",
        "Falta de personalização no sistema usado"
      ],
      solution: [
        "Criação de site totalmente personalizado",
        "Sistema de agendamentos, relatórios e funcionalidades que atendem as reais demandas da cliente",
        "Implementação de cálculo automático de comissões e metas",
        "Loja integrada para venda de produtos",
        "Prontuário personalizado para cada cliente",
        "Painel do Cliente com todo um sistema de pós venda e de recomendações para cada atendimento",
        "Presença digital da marca nos sistemas de busca"
      ],
      results: [
        "Redução de 70% nos custos mensais de sistema",
        "Aumento de 200% nas funcionalidades administrativas",
        "Personalização completa do sistema conforme necessidades",
        "Melhoria de 95% na eficiência operacional"
      ]
    }
  ]

  const stats = [
    { number: "98%", label: "Satisfação dos Clientes" },
    { number: "R$ 2M+", label: "Faturamento Gerado" },
    { number: "24/7", label: "Suporte Disponível" }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link 
              href="/" 
              className="flex items-center text-gray-600 hover:text-purple-600 transition-colors"
            >
              <ArrowLeft size={20} className="mr-2" />
              Voltar ao site
            </Link>
            <div className="text-sm text-gray-500">
              Cases de Sucesso
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto text-center">
          <RevealOnScroll direction="up" delay={300}>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Cases de <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Sucesso</span>
            </h1>
          </RevealOnScroll>
          <RevealOnScroll direction="up" delay={600}>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Conheça histórias reais de salões que transformaram seus negócios com o StyleConnect - totalmente sem mensalidade
            </p>
          </RevealOnScroll>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <RevealOnScroll key={index} direction="up" delay={900 + (index * 200)}>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600">
                    {stat.label}
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {cases.length > 0 ? (
            <div className="space-y-16">
              {cases.map((caseItem, index) => (
                <RevealOnScroll key={caseItem.id} direction="up" delay={300}>
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                    <div className="md:flex">
                      {/* Image */}
                      <div className="md:w-1/2">
                        <div className="h-full flex flex-col justify-start space-y-4 pt-4">
                          {/* Title */}
                          <div className="text-center">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">{caseItem.title}</h3>
                            <p className="text-gray-600 mb-1">{caseItem.location}</p>
                            <span className="inline-block px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-medium">
                              {caseItem.type}
                            </span>
                          </div>

                          {/* Main Image */}
                          <div 
                            className="h-80 bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity relative overflow-hidden rounded-lg"
                            onClick={() => caseItem.gallery && openGallery(caseItem.gallery)}
                          >
                            {caseItem.image ? (
                              <img 
                                src={caseItem.image} 
                                alt={caseItem.title}
                                className="w-full h-full object-contain"
                              />
                            ) : (
                              <div className="text-center">
                                <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                  <Award className="w-10 h-10 text-white" />
                                </div>
                                <p className="text-gray-600">Imagem não disponível</p>
                              </div>
                            )}
                            {caseItem.gallery && (
                              <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                                <div className="opacity-0 hover:opacity-100 transition-opacity duration-300 bg-white bg-opacity-90 rounded-full p-3">
                                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                  </svg>
                                </div>
                              </div>
                            )}
                          </div>

                          {/* Thumbnail Carousel */}
                          {caseItem.gallery && caseItem.gallery.length > 1 && (
                            <div className="flex justify-center">
                              <div className="flex space-x-2 overflow-x-auto pb-2 max-w-full">
                                {caseItem.gallery.map((image, index) => (
                                  <div
                                    key={index}
                                    className="flex-shrink-0 w-20 h-20 bg-gray-100 rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition-opacity border-2 border-transparent hover:border-purple-300"
                                    onClick={() => openGallery(caseItem.gallery)}
                                  >
                                    <img
                                      src={image}
                                      alt={`${caseItem.title} - Imagem ${index + 1}`}
                                      className="w-full h-full object-cover"
                                    />
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="md:w-1/2 p-8">
                        <div className="space-y-6">
                          {/* Challenge */}
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                              <TrendingUp className="w-5 h-5 text-red-500 mr-2" />
                              Desafios
                            </h4>
                            {Array.isArray(caseItem.challenge) ? (
                              <ul className="space-y-2">
                                {caseItem.challenge.map((challenge, index) => (
                                  <li key={index} className="flex items-start">
                                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                    <span className="text-gray-600">{challenge}</span>
                                  </li>
                                ))}
                              </ul>
                            ) : (
                              <p className="text-gray-600">{caseItem.challenge}</p>
                            )}
                          </div>

                          {/* Solution */}
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                              <CheckCircle2 className="w-5 h-5 text-green-500 mr-2" />
                              Soluções Implementadas
                            </h4>
                            {Array.isArray(caseItem.solution) ? (
                              <ul className="space-y-2">
                                {caseItem.solution.map((solution, index) => (
                                  <li key={index} className="flex items-start">
                                    <CheckCircle2 className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-600">{solution}</span>
                                  </li>
                                ))}
                              </ul>
                            ) : (
                              <p className="text-gray-600">{caseItem.solution}</p>
                            )}
                          </div>

                          {/* Results */}
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                              <Star className="w-5 h-5 text-yellow-500 mr-2" />
                              Resultados
                            </h4>
                            <ul className="space-y-2">
                              {caseItem.results.map((result, resultIndex) => (
                                <li key={resultIndex} className="flex items-start">
                                  <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                  <span className="text-gray-600">{result}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                        {/* Website Link */}
                        {caseItem.website && (
                          <div className="bg-gray-50 p-4 rounded-lg text-center">
                            <a
                              href={caseItem.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium transition-colors"
                            >
                              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                              Visitar Site do Salão
                            </a>
                          </div>
                        )}
                        </div>
                      </div>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          ) : (
            <RevealOnScroll direction="up" delay={300}>
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Cases de Sucesso em Breve
                </h3>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Estamos preparando cases incríveis de salões que transformaram seus negócios com o StyleConnect. 
                  Em breve você poderá conhecer essas histórias de sucesso!
                </p>
              </div>
            </RevealOnScroll>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <RevealOnScroll direction="up" delay={300}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Quer ser nosso próximo case de sucesso?
            </h2>
          </RevealOnScroll>
          <RevealOnScroll direction="up" delay={600}>
            <p className="text-xl text-purple-100 mb-8">
              Transforme seu salão com a mesma tecnologia que revolucionou o mercado de beleza
            </p>
          </RevealOnScroll>
          <RevealOnScroll direction="up" delay={900}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/5511997932185?text=Olá! Gostaria de conhecer mais sobre o StyleConnect e como ele pode transformar meu salão."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Falar com Especialista
              </a>
              <Link
                href="/"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition-colors"
              >
                Voltar ao Site
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/5511997932185?text=Olá! Gostaria de conhecer mais sobre o StyleConnect."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 hover-organic"
      >
        <MessageCircle size={24} />
      </a>

      {/* Gallery Modal */}
      {selectedGallery && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            {/* Close Button */}
            <button
              onClick={closeGallery}
              className="absolute top-4 right-4 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-full p-2 transition-all"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Previous Button */}
            {selectedGallery.length > 1 && (
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-full p-2 transition-all"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}

            {/* Next Button */}
            {selectedGallery.length > 1 && (
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-full p-2 transition-all"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}

            {/* Image */}
            <img
              src={selectedGallery[currentImageIndex]}
              alt={`Gallery image ${currentImageIndex + 1}`}
              className="max-w-full max-h-full object-contain rounded-lg"
            />

            {/* Image Counter */}
            {selectedGallery.length > 1 && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
                {currentImageIndex + 1} / {selectedGallery.length}
              </div>
            )}

            {/* Thumbnails */}
            {selectedGallery.length > 1 && (
              <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {selectedGallery.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-12 h-12 rounded overflow-hidden border-2 transition-all ${
                      index === currentImageIndex ? 'border-white' : 'border-transparent opacity-50 hover:opacity-75'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
