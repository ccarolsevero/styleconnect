import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function TermosDeUso() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold gradient-text-elegant">
                StyleConnect
              </Link>
            </div>
            <Link 
              href="/"
              className="flex items-center gap-2 text-gray-700 hover:text-secondary-500 transition-colors"
            >
              <ArrowLeft size={20} />
              Voltar ao site
            </Link>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Termos de Uso
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Última atualização:</strong> {new Date().toLocaleDateString('pt-BR')}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Aceitação dos Termos</h2>
              <p className="text-gray-700 mb-4">
                Ao utilizar o sistema Beauty Management Pro, você concorda em cumprir e estar sujeito a estes Termos de Uso. 
                Se você não concordar com qualquer parte destes termos, não deve utilizar nosso serviço.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Descrição do Serviço</h2>
              <p className="text-gray-700 mb-4">
                O StyleConnect é um sistema de gestão completo desenvolvido especificamente para salões de beleza 
                e clínicas de estética, oferecendo funcionalidades como:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Agendamento digital e gestão de horários</li>
                <li>Controle financeiro e relatórios</li>
                <li>Gestão de clientes e profissionais</li>
                <li>Sistema de fidelização</li>
                <li>Site profissional integrado</li>
                <li>Loja online para produtos</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Licença de Uso</h2>
              <p className="text-gray-700 mb-4">
                Ao adquirir o StyleConnect, você recebe uma licença vitalícia para uso do sistema, 
                incluindo:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Acesso completo a todas as funcionalidades</li>
                <li>Atualizações gratuitas do sistema</li>
                <li>Suporte técnico por 1 ano</li>
                <li>Treinamento completo</li>
                <li>Garantia de 30 dias</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Responsabilidades do Usuário</h2>
              <p className="text-gray-700 mb-4">
                Você é responsável por:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Fornecer informações verdadeiras e atualizadas</li>
                <li>Manter a confidencialidade de sua conta</li>
                <li>Utilizar o sistema de acordo com a legislação vigente</li>
                <li>Não realizar atividades que possam prejudicar o sistema</li>
                <li>Fazer backup regular de seus dados importantes</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Propriedade Intelectual</h2>
              <p className="text-gray-700 mb-4">
                O StyleConnect e todo seu conteúdo, incluindo código, design, funcionalidades e documentação, 
                são propriedade exclusiva da empresa e estão protegidos por leis de propriedade intelectual. 
                Você não pode copiar, modificar, distribuir ou revender o sistema.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Limitação de Responsabilidade</h2>
              <p className="text-gray-700 mb-4">
                O StyleConnect é fornecido "como está". Não garantimos que o sistema estará sempre 
                disponível ou livre de erros. Nossa responsabilidade está limitada ao valor pago pela licença.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Privacidade e Proteção de Dados</h2>
              <p className="text-gray-700 mb-4">
                Respeitamos sua privacidade e protegemos seus dados conforme a LGPD (Lei Geral de Proteção de Dados). 
                Seus dados são utilizados apenas para fornecer o serviço e não são compartilhados com terceiros 
                sem seu consentimento.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Modificações dos Termos</h2>
              <p className="text-gray-700 mb-4">
                Reservamo-nos o direito de modificar estes termos a qualquer momento. As alterações serão 
                comunicadas através do sistema ou por email. O uso continuado do serviço após as modificações 
                constitui aceitação dos novos termos.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Rescisão</h2>
              <p className="text-gray-700 mb-4">
                Você pode cancelar sua conta a qualquer momento. Podemos suspender ou encerrar sua conta 
                em caso de violação destes termos. Em caso de rescisão, você terá 30 dias para fazer backup 
                de seus dados.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Lei Aplicável</h2>
              <p className="text-gray-700 mb-4">
                Estes termos são regidos pelas leis brasileiras. Qualquer disputa será resolvida nos 
                tribunais competentes do Brasil.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Contato</h2>
              <p className="text-gray-700 mb-4">
                Para dúvidas sobre estes termos, entre em contato conosco:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700"><strong>Email:</strong> ccarolsevero@gmail.com</p>
                <p className="text-gray-700"><strong>Telefone:</strong> (11) 99793-2185</p>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="gradient-elegant text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p>&copy; 2024 StyleConnect. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
