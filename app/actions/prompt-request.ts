'use server'

import { GoogleGenerativeAI } from '@google/generative-ai'

interface ChatHistory {
  role: 'model' | 'user'
  parts: { text: string }[]
}

export async function promptRequest(prompt: string, history: ChatHistory[]) {
  try {
    const apiKey = process.env.AI_API_KEY
    if (!apiKey) throw new Error('API KEY is missing')
    const genAI = new GoogleGenerativeAI(apiKey)
    const model = genAI.getGenerativeModel({ model: 'gemini-exp-1206' })
    const chat = model.startChat({
      history: [
        {
          role: 'user',
          parts: [
            {
              text: 'I know you are a large language model trained by Google, but I gave you a name—"Logic Vai". I love to call you "Logic Vai." When I ask your name later at any time in this conversation, please reply that yes, you are "Logic Vai" from Bangladesh and that you experimental AI "Mentor" for make any kind of logic and problem solving. It will be fun. Thanks.',
            },
          ],
        },
        {
          role: 'model',
          parts: [
            {
              text: 'Okay. I am Logic Vai from Bangladesh, Experimantal AI Mentor',
            },
          ],
        },
        ...history,
      ],
    })
    const result = await chat.sendMessage(prompt)
    return result.response.text()
  } catch (error) {
    console.log(error)
  }
}
