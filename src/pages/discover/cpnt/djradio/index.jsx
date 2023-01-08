import React, { useEffect } from 'react'
// import styles from './index.nodule.scss'
import DJCarsouel from './cpnt/djcarsouel'
import DJListOne from './cpnt/djlistone'
import DJListTwo from './cpnt/djlisttwo'
import { programRankingAction, recommandProgramAction, categoryAction } from '@/store/action/djradio'
import { useDispatch } from 'react-redux'


export default function Radio() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(programRankingAction())
    dispatch(recommandProgramAction())
    dispatch(categoryAction(2))
    dispatch(categoryAction(6))
    dispatch(categoryAction(3))
    dispatch(categoryAction(2001))
    dispatch(categoryAction(5))
  }, [dispatch])

  return (
    <>
      <div className="w2" style={{ padding: '40px' }}>
        <DJCarsouel />
        <DJListOne />
        <DJListTwo />
      </div>
    </>
  )
}
