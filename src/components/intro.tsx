'use client'

import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Intro = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])

  return (
    <section
      data-aos="fade-up"
      className="h-auto overflow-hidden rounded-3xl bg-deepBlue md:h-auto md:rounded-[56px]"
    >
      <div className="item-center container flex flex-col justify-center gap-8 md:py-10 lg:px-[63px] lg:text-center">
        <h1 className="mt-14 px-5 text-[40px] font-bold text-white md:text-6xl">
          Conduzimos nossos projetos com dedicação e paixão, transformando
          cliques em clientes
        </h1>
        <p className="mt-0 px-7 pb-12 font-lustria text-xl font-normal leading-relaxed text-white md:text-[25px] lg:px-[160px]">
          A Aprimora Conhecimento foi fundada em 2023 com a clara missão de
          proporcionar soluções digitais acessíveis a microempreendedores,
          impulsionando seu crescimento no ambiente online.
        </p>
      </div>
    </section>
  )
}

export default Intro
