'use client'

import Image from 'next/image'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const textContent = [
  {
    title: 'Cliente em 1º lugar',
    subTitle:
      'Na nossa empresa, o cliente é a prioridade máxima. Dispensamos atendimento robotizado e priorizamos o contato humano, com o menor tempo de resposta possível.',
    icon: '/work/costumerIcon.svg',
    alt: 'costumer icon',
  },
  {
    title: 'Entrega rápida',
    subTitle:
      'Efetuamos a entrega do produto de maneira rápida e eficaz, conforme as preferências do cliente, garantindo qualidade no processo.',
    icon: '/work/clockIcon.svg',
    alt: 'Clock icon',
  },
  {
    title: 'Desenvolvimento ágil',
    subTitle:
      'Utilizamos tecnologias de ponta para garantir que seu produto tenha o melhor visual e desempenho (maiores e maiores recursos tecnológicos para uma entrega com mais efetividade). Adotamos metodologias para otimizar o tempo de entrega, proporcionando eficiência e agilidade no desenvolvimento.',
    icon: '/work/rocketIcon.svg',
    alt: 'Rocket icon',
  },
]

const WorkContent = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])

  return (
    <section className="aos-init mt-[72px]" data-aos="fade-up" id="work">
      <div className="container w-full justify-center rounded-[56px] bg-deepBlue pb-24 pt-16">
        <h1 className="pb-12 text-center font-sans text-6xl font-bold text-white">
          Como trabalhamos
        </h1>
        <div className="container space-y-6">
          {textContent.map((item, index) => (
            <article
              key={index}
              className="mx-6 rounded-2xl bg-white p-12 lg:mx-auto lg:w-[75%]"
              data-aos="fade-up"
            >
              <div className="my-auto gap-12 lg:flex">
                <Image
                  src={item.icon}
                  width={180}
                  height={180}
                  alt={item.alt}
                  className="h-[140px] w-[140px] lg:h-[180px] lg:w-[180px]"
                />
                <div className="my-auto flex flex-col gap-4 pt-9">
                  <h2 className="mb-4 text-3xl font-bold text-darkText">
                    {item.title}
                  </h2>
                  <p className="font-lustria text-xl font-normal text-darkText">
                    {item.subTitle}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WorkContent
