import React, { useState, useEffect } from 'react'
import Title from '@/components/title'
import AlbumPic from './albumpic'
import styles from './index.module.scss'
import { Pagination } from 'antd'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { getHotAlbumAction, getAllAlbumAction } from '@/store/action/album'

export default function Album() {
  const dispatch = useDispatch()
  const [current, setCurrent] = useState(1)
  const onChange = (page) => {
    console.log(page)
  }

  const { newAlbum, allAlbum } = useSelector(state => ({
    newAlbum: state.recommandData.newAlbum,
    allAlbum: state.newAlbumData.allAlbum
  }), shallowEqual)

  useEffect(() => {
    dispatch(getAllAlbumAction())
    dispatch(getHotAlbumAction({ type: 'new', year: '2022' }))
  }, [dispatch])

  return (
    <>
      <div className='w2' style={{ padding: '40px' }}>
        {/* <Title title="热门新碟" mb="30px" />
        <div className={styles.list}>
          {
            newAlbum?.map(it => {
              return <AlbumPic picUrl={it.picUrl} songname={it.name} nickname={it.artist.name} />
            })
          }
        </div>
        <Title title="全部新碟" mb="30px" />
        <div className={styles.list}>
          {
            allAlbum?.map(it => {
              return <AlbumPic picUrl={it.picUrl} songname={it.name} nickname={it.artist.name} />
            })
          }
        </div> */}
        {
          [0, 1].map(item => {
            return <div key={item}>
              <Title title={!item ? "热门新碟" : "全部新碟"} mb="30px" />
              <div className={styles.list}>
                {
                  (!item ? newAlbum : allAlbum)?.map(it => {
                    return <AlbumPic picUrl={it.picUrl} songname={it.name} nickname={it.artist.name} key={it.id} />
                  })
                }
              </div>
            </div>
          })
        }
        <div className={styles.page}>
          <Pagination
            current={current}
            onChange={onChange}
            total="480"
            showSizeChanger={false}
            showTitle={false}
            style={{ color: 'black' }}
          />
        </div>
      </div>
    </>
  )
}
