import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, message } = await request.json()

    // Validação básica
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Nome, email e mensagem são obrigatórios' },
        { status: 400 }
      )
    }

    // Aqui você pode integrar com um serviço de email como:
    // - Nodemailer
    // - SendGrid
    // - Resend
    // - EmailJS
    
    // Por enquanto, vamos simular o envio
    console.log('Nova mensagem de contato:')
    console.log('Nome:', name)
    console.log('Email:', email)
    console.log('Telefone:', phone)
    console.log('Mensagem:', message)

    // Simular delay de envio
    await new Promise(resolve => setTimeout(resolve, 1000))

    return NextResponse.json(
      { message: 'Mensagem enviada com sucesso!' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Erro ao processar contato:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}
