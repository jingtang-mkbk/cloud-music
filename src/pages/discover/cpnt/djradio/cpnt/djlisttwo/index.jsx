import React from 'react'
import styles from './index.module.scss'
import Title from '@/components/title'
import category from './config'
import { useSelector, shallowEqual } from 'react-redux'

export default function DJListTwo() {

  const {
    recommendRadio,
    lifeRadio,
    emotionRadio,
    createRadio,
    knowledgeRadio
  } = useSelector(state => ({
    recommendRadio: state.radioData.recommendRadio,
    lifeRadio: state.radioData.lifeRadio,
    emotionRadio: state.radioData.emotionRadio,
    createRadio: state.radioData.createRadio,
    knowledgeRadio: state.radioData.knowledgeRadio,
  }), shallowEqual)

  const arr = [recommendRadio.slice(0, 4), lifeRadio.slice(0, 4), emotionRadio.slice(0, 4), createRadio.slice(0, 4), knowledgeRadio.slice(0, 4)]
  console.log()

  return (
    <>
      {
        category.map((item, index) => {
          return <div key={item.id}>
            <Title title={item.title} more={true} />
            <ul className={styles.listtwo}>
              {
                arr[index]?.map((it, index2) => {
                  return <li key={index2}>
                    <img src={it.picUrl} alt="" />
                    <div className={styles.right}>
                      <h2 className='sin-line'>{it.name}</h2>
                      <p className='sin-line'>{it.rcmdtext}</p>
                    </div>
                  </li>
                })
              }
            </ul>
          </div>
        })
      }
    </>
  )
}
