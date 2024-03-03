'use client'

import Image from 'next/image'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Button } from './button'

export default function HeaderContent() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])

  return (
    <div className="header-content container mb-16 flex flex-col sm:gap-10 md:flex-row-reverse lg:gap-10 xl:gap-28">
      <div className="header-content-image mx-10 sm:m-auto md:w-1/2" data-aos="fade-left">
        <Image
          width={536}
          height={564}
          src="/head/headImage.png"
          alt="Header image"
        />
      </div>
      <div className="header-content-text flex flex-col md:w-1/2 lg:m-auto lg:justify-between" data-aos="fade-right">
        <h1 className="mx-5 flex items-center justify-center text-center font-sans text-4xl font-bold leading-tight text-[#101b2b] md:ml-0 md:text-left lg:w-full lg:text-5xl lg:leading-tight xl:text-6xl xl:leading-tight">
          Transformando seu negócio com <br /> soluções inovadoras
        </h1>
        <p className="my-16 flex justify-center text-center font-lustria text-xl text-[#101b2b] sm:text-2xl md:my-10 md:ml-0 md:text-left md:text-lg lg:text-2xl">
          Desenvolvemos soluções digitais exclusivas para profissionais
          autônomos e pequenos negócios
        </p>
        <span className="flex justify-center md:justify-start">
          <Button color="blue" size="md">
            Transforme seu negócio
          </Button>
        </span>
      </div>
    </div>
  )
}
