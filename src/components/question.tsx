'use client'

import * as Collapsible from '@radix-ui/react-collapsible'
import { ChevronDown } from 'lucide-react'
import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Question = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])

  const textAccord = [
    {
      question: 'O que oferecemos como produto ou serviço?',
      reply:
        'Oferecemos soluções digitais exclusivas para profissionais autônomos e pequenos negócios, incluindo sites, landing pages, identidade visual, SEO e suporte. Nosso objetivo é impulsionar o crescimento online de seus negócios.',
    },
    {
      question: 'Quais são os nossos valores de produtos/serviços?',
      reply:
        'Nossos valores centrais são qualidade, acessibilidade e inovação. Oferecemos soluções digitais de alta qualidade a preços que cabem no seu bolso, garantindo uma presença online extraordinária.',
    },
    {
      question: 'Qual o tempo de entrega para o meu pedido?',
      reply:
        'O tempo de entrega varia de acordo com o serviço contratado. Mas, como a gente sabe que você está ansioso para ver o seu negócio decolar, vamos fazer o possível para entregar o mais rápido possível.',
    },
    {
      question: 'Garantia/Política de reembolso?',
      reply:
        'Oferecemos garantia de satisfação de 7 dias para todos os nossos serviços. Se você não estiver satisfeito com o resultado, poderá solicitar o reembolso do valor pago.',
    },
    {
      question: 'Como funciona o suporte ao cliente, e como posso contatá-los?',
      reply:
        'Nosso suporte ao cliente está disponível 24 horas por dia, 7 dias por semana. Você pode entrar em contato conosco por e-mail, telefone ou WhatsApp.',
    },
    {
      question: 'Formas de pagamento?',
      reply: (
        <>
          <p>Aceitamos as seguintes formas de pagamento:</p>
          <ul className="ml-5 list-disc">
            <li className="">Pix</li>
            <li>Transferência bancária</li>
            <li>Boleto bancário</li>
          </ul>
        </>
      ),
    },
  ]

  return (
    <section data-aos="fade-up">
      <div className="container max-w-[1160px] px-6 pb-14 pt-14 md:flex md:pt-20">
        <h1 className="text-5xl font-bold text-darkBlue md:text-6xl">
          Perguntas frequentes
        </h1>
        <div className="flex basis-5/6 flex-col space-y-5">
          {textAccord.map((item, index) => (
            <Collapsible.Root
              key={index}
              className="group mt-12 w-full rounded-[33px] border-2 border-darkBlue  p-3 font-lustria font-normal md:mt-0"
              data-aos="fade-up"
            >
              <Collapsible.Trigger className="flex w-full transform items-center justify-center text-start text-lg text-darkBlue lg:text-xl">
                <p>{item.question}</p>
                <ChevronDown className="ml-auto min-w-[30px] duration-200 group-data-[state='open']:rotate-180" />
              </Collapsible.Trigger>
              <Collapsible.Content className="data-[state='open']:slideUp CollapsibleContent mt-3 duration-100 ease-out">
                {item.reply}
              </Collapsible.Content>
            </Collapsible.Root>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Question
