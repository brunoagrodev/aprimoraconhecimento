import { IoLogoWhatsapp } from 'react-icons/io'
import Link from 'next/link'

export default function WhatsappFloatingLink() {
  return (
    <div className="fixed bottom-12 right-12 z-10 flex flex-col items-center gap-y-4">
      <Link
        className="rounded-full bg-[#29B53E] p-3 text-white shadow-md"
        href={`https://api.whatsapp.com/send?phone=${process.env.NEXT_PUBLIC_PHONE_WPP}&text=${encodeURIComponent(
          ' Olá! Gostaria de solicitar um orçamento.',
        )}`}
      >
        <IoLogoWhatsapp className="h-10 w-10 md:h-14 md:w-14" />
      </Link>
    </div>
  )
}
