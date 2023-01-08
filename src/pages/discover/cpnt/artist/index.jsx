import React, { useEffect } from 'react'
import styles from './index.module.scss'
import Title from '@/components/title'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { getSingersAction } from '@/store/action/artist'

export default function Artist() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getSingersAction(-1))
    dispatch(getSingersAction(2))
  }, [dispatch])

  const { hotSingers, settledSingers } = useSelector(state => ({
    hotSingers: state.artistData.hotSingers,
    settledSingers: state.artistData.settledSingers
  }), shallowEqual)

  return (
    <>
      <div className='w'>
        <div className={styles.artistleft}>
          111
        </div>
        <div className={styles.artistright}>
          {
            [0, 1].map(item => {
              return <div key={item}>
                <Title title="入驻歌手" more={!item ? true : false} mb="30px" />
                <ul className={styles.piclist}>
                  {
                    (!item ? hotSingers : settledSingers)?.map(it => {
                      return <li className={styles.picbox} key={it.id}>
                        <img src={it.picUrl} alt="" />
                        <p>{it.name}</p>
                      </li>
                    })
                  }
                </ul>
              </div>
            })
          }
        </div>
      </div>
    </>
  )
}
