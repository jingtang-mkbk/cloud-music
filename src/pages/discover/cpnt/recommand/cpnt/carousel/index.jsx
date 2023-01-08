import React, { useEffect } from 'react'
import { Carousel } from "@arco-design/web-react"
// import { getCarousel } from '@/api/recommand.js'
import { getCarouselAction } from '@/store/action/recommand'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

export default function CarouselCpnt() {

  const dispatch = useDispatch()

  const carouselImg = useSelector(state => state.recommandData.carousel, shallowEqual)

  useEffect(() => {
    dispatch(getCarouselAction())
  }, [dispatch])

  return (
    <Carousel
      style={{ width: 730, height: 285 }}
      autoPlay={true}
      indicatorType='dot'
    >
      {carouselImg?.map((it, index) => (
        <div key={index}>
          <img
            src={it.imageUrl}
            style={{ height: '283px', width: '100%' }}
            alt='图片加载中'
          />
        </div>
      ))}
    </Carousel>
  )
}
