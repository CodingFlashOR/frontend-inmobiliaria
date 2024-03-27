import { useEffect, useRef, useState, useCallback } from 'react'
import { data, DataType } from './data'

import './Carousel.css'

export default function Carousel () {
  const listRef = useRef<HTMLUListElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const scrollStep = useCallback((now: number, listNode: HTMLUListElement, startScroll: number, scrollLeft: number, scrollDuration: number, startTime: number) => {
    const elapsed = now - startTime
    const t = Math.min(elapsed / scrollDuration, 1)
    listNode.scrollLeft = startScroll + (scrollLeft - startScroll) * t
    if (t < 1) {
      window.requestAnimationFrame((now) => scrollStep(now, listNode, startScroll, scrollLeft, scrollDuration, startTime))
    }
  }, [])

  useEffect(() => {
    const listNode = listRef.current
    const imgNode = listNode?.querySelectorAll('li > div > img')[currentIndex]

    if (imgNode && listNode) {
      const imgElement = imgNode as HTMLImageElement
      const scrollLeft = imgElement.offsetLeft - (listNode.offsetWidth / 2) + (imgElement.offsetWidth / 2)

      const scrollDuration = 500
      const startTime = performance.now()
      const startScroll = listNode.scrollLeft

      window.requestAnimationFrame((now) => scrollStep(now, listNode, startScroll, scrollLeft, scrollDuration, startTime))
    }
  }, [currentIndex, scrollStep])

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length)
    }, 6000)

    return () => clearInterval(intervalId)
  }, [])

  const goToSlide = (indice: number) => {
    setCurrentIndex(indice)
  }

  const scrollToImage = (dir: string) => {
    if (dir === 'prev') {
      setCurrentIndex((curr) => {
        const isFirstSlide = currentIndex === 0
        return isFirstSlide ? 0 : curr - 1
      })
    } else {
      const isLastSlide = currentIndex === data.length - 1
      if (!isLastSlide) {
        setCurrentIndex(currentIndex + 1)
      }
    }
  }

  return (
    <div className=''>
      <div className='slider-container'>
        <div
          className='leftArrow'
          onClick={() => scrollToImage('prev')}
        >
          ❬
        </div>
        <div
          className='rightArrow'
          onClick={() => scrollToImage('next')}
        >
          ❭
        </div>
        <div className='container-images'>
          <ul ref={listRef} className=''>
            {data.map((item: DataType) => {
              return (
                <li key={item.id}>
                  <div aria-hidden='true'>
                    <img src={item.imgUrl} className='imagen' />
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
        <div className='dots-container'>
          {data.map((_, idx) => (
            <div
              key={idx}
              className={`dot-container-item ${
                idx === currentIndex ? 'active' : ''
              }`}
              onClick={() => goToSlide(idx)}
              tabIndex={-1}
              onMouseDown={(e) => e.preventDefault()}
            >
              ⚉
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
