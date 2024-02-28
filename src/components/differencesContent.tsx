import Image from 'next/image'
import { Button } from './button'

const textContent = [
  {
    title: 'Nós faremos tudo para você.',
    subTitle:
      'Não se preocupe, pois sempre estaremos cuidando de tudo para que você cliente não tenha dor de cabeça. Utilizamos as melhores técnicas e metodologias do mercado para garantir que sua presença online seja extraordinária.',
    image: '/differences/hands.jpg',
  },
  {
    title: 'Preço Acessível',
    subTitle:
      'Aqui na AC, oferecemos soluções digitais de alta qualidade a preços que são acessíveis para o seu orçamento. A entrega é rápida, e o resultado é imediato.',
    image: '/differences/pigBank.jpg',
  },
  {
    title: 'Soluções Inovadoras.',
    subTitle:
      'Nós trazemos soluções digitais que fazem a diferença. Criamos sites incríveis, uma identidade visual única e oferecemos suporte contínuo, além de otimizar seu SEO para se destacar online.',
    image: '/differences/notebook.jpg',
  },
]

const DifferencesContent = () => {
  return (
    <section className="mt-16">
      <div className="container">
        <h1 className="text-center font-sans text-[40px] font-bold text-slate-800 sm:mb-[4.3125rem] sm:text-6xl">
          Nossos diferenciais
        </h1>
        <div className="flex flex-col flex-wrap gap-3 sm:flex-row">
          {textContent.map((text, index) => (
            <article
              key={index}
              className="mx-auto mt-10 flex max-w-[300px] flex-col sm:mt-0"
            >
              <div className="h-[300px] w-[300px]">
                <Image
                  src={text.image}
                  width={300}
                  height={300}
                  priority={true}
                  alt=""
                />
              </div>
              <div className="-mt-7 flex h-full w-[300px] flex-col">
                <h2 className="mt-12 font-sans text-3xl font-bold text-deepBlue">
                  {text.title}
                </h2>
                <p className="mt-6 font-lustria text-base font-normal leading-normal sm:text-xl">
                  {text.subTitle}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
      <div className="mb-2 mt-10 flex justify-center sm:mt-16">
        <Button size="sm">ENTRAR EM CONTATO</Button>
      </div>
    </section>
  )
}

export default DifferencesContent
