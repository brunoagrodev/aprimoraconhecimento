import HeaderContent from '@/components/header-content'
import DifferencesContent from '@/components/differencesContent'
import HeaderMenu from '@/components/header-menu'
import Intro from '@/components/intro'
import WorkContent from '@/components/workContent'
import Footer from '@/components/footer'
import WhatsappFloatingLink from '@/components/whatsappfloatinglink'
import Services from '@/components/services'
import Question from '@/components/question'
import { Team } from '@/components/team'

export default function Home() {
  return (
    <main className="container">
      <HeaderMenu />
      <HeaderContent />
      <Intro />
      <DifferencesContent />
      <WorkContent />
      <Services />
      <Team />
      <Question />
      <Footer />
      <WhatsappFloatingLink />
    </main>
  )
}
