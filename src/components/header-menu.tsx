'use client'

import Image from 'next/image'
import { useState, useRef } from 'react'
import { Link as ScrollLink } from 'react-scroll'

export default function HeaderMenu() {
  const [open, setOpen] = useState(false)
  const anchorRef = useRef<HTMLButtonElement>(null)

  const handleMenu = () => {
    setOpen((prev) => !prev)
  }

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return
    }

    setOpen(false)
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
        <ScrollLink to="differences" smooth={true} duration={500} offset={-70}>
          <p className="cursor-pointer" onClick={handleClose}>
            Nosso diferenciais
          </p>
        </ScrollLink>
        <ScrollLink to="work" smooth={true} duration={500} offset={-70}>
          <p className="cursor-pointer" onClick={handleClose}>
            Como trabalhamos
          </p>
        </ScrollLink>
        <ScrollLink to="services" smooth={true} duration={500} offset={-70}>
          <p className="cursor-pointer" onClick={handleClose}>
            Serviços
          </p>
        </ScrollLink>
        <ScrollLink to="team" smooth={true} duration={500} offset={-70}>
          <p className="cursor-pointer" onClick={handleClose}>
            Equipe
          </p>
        </ScrollLink>
        <ScrollLink to="contato" smooth={true} duration={500} offset={-70}>
          <p className="cursor-pointer" onClick={handleClose}>
            Contato
          </p>
        </ScrollLink>
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
              <ScrollLink
                to="differences"
                smooth={true}
                duration={1000}
                offset={-70}
              >
                <p className="cursor-pointer" onClick={handleClose}>
                  Nosso diferenciais
                </p>
              </ScrollLink>
              <ScrollLink to="work" smooth={true} duration={1000} offset={-70}>
                <p className="cursor-pointer" onClick={handleClose}>
                  Como trabalhamos
                </p>
              </ScrollLink>
              <ScrollLink
                to="services"
                smooth={true}
                duration={1000}
                offset={-70}
              >
                <p className="cursor-pointer" onClick={handleClose}>
                  Serviços
                </p>
              </ScrollLink>
              <ScrollLink to="team" smooth={true} duration={1000} offset={-70}>
                <p className="cursor-pointer" onClick={handleClose}>
                  Equipe
                </p>
              </ScrollLink>
              <ScrollLink
                to="contato"
                smooth={true}
                duration={1000}
                offset={-70}
              >
                <p className="cursor-pointer" onClick={handleClose}>
                  Contato
                </p>
              </ScrollLink>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
