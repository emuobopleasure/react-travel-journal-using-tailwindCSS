import React, { useState } from 'react'
import Card from './Card'
import jsonData from "../jsonData.json"

const Main = ({theme}) => {

    const [journals, setJournals] = useState(jsonData)
  return (
    <section className={theme ? 'main-section px-[23px] py-[40px] flex flex-col gap-6 md:flex-row md:flex-wrap md:justify-center' : 'bg-gray-900 text-white px-[23px] py-[40px] flex flex-col gap-6 md:flex-row md:flex-wrap md:justify-center'}>
        {
            journals.map((journal) => (
                <Card
                    item={journal}
                    theme={theme}
                />
            ))
        }
    </section>
  )
}

export default Main