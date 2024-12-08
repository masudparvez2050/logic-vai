import BgPettern from './components/BgPettern'
import { ChatForm } from './components/chat-form'
import LineAnimation from './components/LineAnimation'

export default function Home() {
  return (
    <>
      <main className="back relative h-screen bg-[#020618] backdrop-blur-xl backdrop-filter">
        <BgPettern />
        <LineAnimation />

        <ChatForm />
      </main>
    </>
  )
}
