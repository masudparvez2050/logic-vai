import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import AiBrain from './AiBrain'

const text =
  "It's your Logic Vai—your smart AI Mentor! 🤖✨ Here to solve problems, tackle coding 💻, and spark ideas 💡. Logic Vai brings logic and inspiration to your journey. Let’s create something amazing! 🚀"

export function BlankScreen({
  forceSubmit,
}: {
  forceSubmit: (prePrompt: string) => void
}) {
  const intervalID = useRef<NodeJS.Timeout>()
  const index = useRef(0)
  const [chunk, setChunk] = useState('')

  useEffect(() => {
    intervalID.current = setInterval(() => {
      const chunk = text.slice(index.current, index.current + 1)
      setChunk((prev) => prev + chunk)
      index.current += 1
      if (index.current > text.length) {
        clearInterval(intervalID.current)
      }
    }, 40)

    return () => {
      clearInterval(intervalID.current)
    }
  }, [])

  return (
    <div className="flex h-full flex-col py-3">
      <div className="flex flex-1 flex-col items-center justify-center gap-4">
        <Image
          src="/logic_vai.gif"
          alt="logic vai avatar"
          width={100}
          height={100}
          className="rounded-full bg-black"
        />
        <AiBrain />

        <h1 className="w-full px-4 text-xl font-medium">{chunk}</h1>
      </div>
      <div className="flex flex-wrap justify-center gap-2 text-sm">
        <button
          onClick={forceSubmit.bind(
            null,
            'Reverse the direction of a singly linked list with JavaScript!',
          )}
          className="rounded-3xl border border-indigo-500 bg-indigo-500/10 px-2 py-1 text-indigo-500"
        >
          Reverse Linked List!
        </button>
        <button
          onClick={forceSubmit.bind(
            null,
            'Given a collection of intervals, merge all overlapping intervals.',
          )}
          className="rounded-3xl border border-pink-500 bg-pink-500/10 px-2 py-1 text-pink-500"
        >
          Merge Intervals!
        </button>
        <button
          onClick={forceSubmit.bind(
            null,
            'Generate the Fibonacci sequence up to a certain number or index.',
          )}
          className="rounded-3xl border border-sky-500 bg-sky-500/10 px-2 py-1 text-sky-500"
        >
          Fibonacci Sequence
        </button>
        <button
          onClick={forceSubmit.bind(null, 'make a sort algorithm.')}
          className="rounded-3xl border border-orange-500 bg-orange-500/10 px-2 py-1 text-orange-500"
        >
          Sort Algorithm
        </button>
      </div>
    </div>
  )
}
