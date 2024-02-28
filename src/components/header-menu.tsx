'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function HeaderMenu() {
  const [open, setOpen] = useState(false)

  const handleMenu = () => {
    setOpen((prev) => !prev)
  }

  return (
    <div className="menu w-100% container mb-14 mt-[3.75rem] flex flex-row justify-between px-5 sm:px-0">
      <div className="logo">
        <Image
          src="/head/logo.svg"
          width={159}
          height={38}
          priority={true}
          alt="Logotipo"
        />
      </div>
      <div className="menu-buttons hidden flex-row items-center justify-center gap-5 md:flex">
        <a href="#">Nosso diferenciais</a>
        <a href="#">Como trabalhamos</a>
        <a href="#">Serviços</a>
        <a href="#">Equipe</a>
        <a href="#">Contato</a>
      </div>
      <div className="flex md:hidden">
        <button
          className="relative flex h-8 w-10 flex-col justify-between"
          onClick={handleMenu}
        >
          <div className="h-1 w-7 rounded bg-black"></div>
          <div className="h-1 w-10 rounded bg-black"></div>
          <div className="h-1 w-7 rounded bg-black"></div>
        </button>
        {open && (
          <div className="absolute left-0 top-0 z-40 flex h-full w-full flex-col items-center justify-center gap-8 bg-black text-4xl text-white">
            <div>
              <button onClick={handleMenu} className="mb-24">
                <div className="absolute h-1 w-6 rotate-45 bg-white"></div>
                <div className="absolute h-1 w-6 -rotate-45 bg-white"></div>
              </button>
            </div>
            <div className="flex flex-col items-center justify-center gap-8">
              <a href="#">Nosso diferenciais</a>
              <a href="#">Como trabalhamos</a>
              <a href="#">Serviços</a>
              <a href="#">Equipe</a>
              <a href="#">Contato</a>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
