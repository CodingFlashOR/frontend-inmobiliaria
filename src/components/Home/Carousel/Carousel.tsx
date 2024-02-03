import { useEffect, useRef, useState } from 'react'
import { data, DataType } from './data'

import './Carousel.css'

export default function Carousel () {
  const listRef = useRef<HTMLUListElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const listNode = listRef.current
    const imgNode = listNode?.querySelectorAll('li > div > img')[currentIndex]

    if (imgNode) {
      imgNode.scrollIntoView({
        behavior: 'smooth'
      })
    }
  }, [currentIndex])

  const goToSlide = (indice : number) => {
    setCurrentIndex(indice)
  }

  const scrollToImage = (dir: string) => {
    if (dir === 'prev') {
      setCurrentIndex(curr => {
        const isFirsSlide = currentIndex === 0
        return isFirsSlide ? 0 : curr - 1
      })
    } else {
      const isLastSlide = currentIndex === data.length - 1
      if (!isLastSlide) {
        setCurrentIndex(currentIndex + 1)
      }
    }
  }

  return (
    <div className='h-20 w-full sm:w-3/4 m-auto main-container'>
      <div className='slider-container'>
        <div
          className='leftArrow text-sm'
          onClick={() => scrollToImage('prev')}
        >❬
        </div>
        <div
          className='rightArrow text-sm'
          onClick={() => scrollToImage('next')}
        >❭
        </div>
        <div className='container-images '>
          <ul ref={listRef} className=''>
            {
              data.map((item: DataType) => {
                return (
                  <li key={item.id}>

                    <div className=''>
                      <img src={item.imgUrl} className='' />
                    </div>

                  </li>
                )
              })
            }
          </ul>
        </div>
        <div className='dots-container'>
          {
            data.map((_, idx) => (
              <div
                key={idx} className={`dot-container-item ${idx === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(idx)}
              >
                &#9865;
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
