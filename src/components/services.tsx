'use client'

import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Image from 'next/image'
import { Button } from './button'

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])

  const cards = [
    {
      title: 'Websites',
      description:
        'Criamos websites com aparência inovadoras e impactantes de alto desempenho, adaptados às necessidades do seu negócio.',
      icon: '/services/webIcon.svg',
    },
    {
      title: 'Landing Page',
      description:
        'Desenvolvemos Landing Pages visualmente atrativas e de alta performance para destacar seus produtos e serviços de uma maneira confrontante.',
      icon: '/services/landingIcon.svg',
    },
    {
      title: 'Identidade Visual',
      description:
        'Desenvolvemos logotipos e identidades visuais que capturam a essência única da sua marca de forma expressiva.',
      icon: '/services/idIcon.svg',
    },
    {
      title: 'Otimização de SEO',
      description:
        'Aumentamos sua visibilidade nas mais diversas plataformas digitais.',
      icon: '/services/seoIcon.svg',
    },
    {
      title: 'Manutenção e Suporte',
      description:
        'Traremos as melhores soluções adquiridas para solucionar os diversos problemas nas plataformas online.',
      icon: '/services/supportIcon.svg',
    },
  ]

  const width = typeof window !== 'undefined' ? window.innerWidth : 0

  return (
    <section className="aos-init mt-[72px]" data-aos="fade-up" id="services">
      <div className="container max-w-[1160px] px-6 md:px-0 lg:px-[59px]">
        <h1 className="mb-[56px] text-center text-3xl font-bold text-deepBlue md:text-6xl">
          Nossos serviços
        </h1>
        <div className="flex w-full flex-col gap-5 md:grid md:grid-cols-12">
          {cards.map((item, index) => {
            const span1 =
              index === 2 ? 'col-span-7 w-full' : 'col-span-5 w-full'
            const span2 = index === 3 ? 'col-span-5 w-full' : 'col-span-6'
            const bg =
              index === 1 || index === 2
                ? 'md:bg-darkBlue md:text-white'
                : 'md:bg-[#FCD6B9] md:text-darkText'

            return (
              <article
                key={index}
                className={`${span1} ${span2} ${bg} max-[768px]:${width < 768 && index % 2 === 0 ? ' max-[768px]:bg-[#FCD6B9] max-[768px]:text-darkText' : ' max-[768px]:bg-darkBlue max-[768px]:text-white'} mx-auto rounded-2xl`}
                data-aos="fade-up"
              >
                <div className="mx-[32px] space-y-4 py-[68px] md:my-[75px]">
                  <Image src={item.icon} width={113} height={113} alt="" />
                  <h1 className="text-3xl font-bold">{item.title}</h1>
                  <p className="text-base">{item.description}</p>
                </div>
              </article>
            )
          })}
          <article
            className={`col-span-6 flex items-center rounded-2xl bg-darkBlue p-[78px]`}
            data-aos="fade-up"
          >
            <div className="flex w-full items-center justify-center">
              <a
                href={`https://api.whatsapp.com/send?phone=${process.env.NEXT_PUBLIC_PHONE_WPP}&text=${encodeURIComponent(
                  ' Olá! Gostaria de solicitar um orçamento.',
                )}`}
                target="_blank"
              >
                <Button color="lightOrange">FALE CONOSCO!</Button>
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Services
