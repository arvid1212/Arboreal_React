'use client'
import { FAQData } from '@/data/data'
import { useState } from 'react'
import FaqItem from './FaqItem'

const FaQuestion = () => {
  const [activeIndex, setActiveIndex] = useState(null)
  const handleItemClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index))
  }
  

    const forestFaq = FAQData.filter((faq) => faq.type.includes('forest'))
    return (
      <div className="ForestFaqDiv">
        <p>Forest questions</p>
        {forestFaq.map((faq) => (
          <FaqItem
            key={faq.id}
            question={faq.question}
            answer={faq.answer}
            isOpen={activeIndex === faq.id}
            onClick={() => handleItemClick(faq.id)}
          />
        ))}
      </div>

)}
/*
const heightFaq = FAQData.filter((faq) => faq.type.includes('height'))
return (
  <div className="HeightFaqDiv">
    <p>Forest questions</p>
    {forestFaq.map((faq) => (
      <FaqItem
        key={faq.id}
        question={faq.question}
        answer={faq.answer}
        isOpen={activeIndex === faq.id}
        onClick={() => handleItemClick(faq.id)}
      />
    ))}
  </div>
  )

*/
export default FaQuestion
