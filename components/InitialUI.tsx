import Image from 'next/image'
import React from 'react'

const InitialUI = () => {
  return (
    <div className="h-full w-full flex items-center justify-center flex-col gap-5 ">
      <Image
        className="max-w-full h-auto object-cover"
        src="/inertia.png"
        alt="Image"
        height={400}
        width={400}
      />
      <h1 className="text-center font-bold gradient-text">Meet rAI</h1>
      <h1 className="text-center font-bold gradient-text">
        Your delightful AI chatbot
      </h1>
      <p className="text-center">
        Enter a topic and the AI will generate a delightful response.
      </p>
    </div>
  )
}

export default InitialUI
