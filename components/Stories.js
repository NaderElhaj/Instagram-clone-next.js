import React, { useEffect, useState } from 'react'
import { faker } from '@faker-js/faker'
import Story from './Story'
function Stories() {
  const [suggestions, setSuggestions] = useState([])
  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      ...faker,
      id: i,
    }))
    setSuggestions(suggestions)
    console.log(suggestions)
  }, [])

  return (
    <div className="mt-8 flex space-x-2 overflow-x-scroll rounded-sm border border-gray-200 bg-white p-6 scrollbar-thin scrollbar-thumb-black ">
      {suggestions.map((profile) => (
        <Story
          key={profile.id}
          img={profile.image.image()}
          username={profile.name.findName()}
        />
      ))}
    </div>
  )
}

export default Stories