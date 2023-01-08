import React, { useEffect } from 'react'
import styles from './index.module.scss'
// import { getHotAnchor } from '@/api/recommand'
import { getHotAnchorAction } from '@/store/action/recommand'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

export default function HotAnchor() {
  // const [data, setData] = useState()

  // useEffect(() => {
  //   const getData = async () => {
  //     const { data } = await getHotAnchor(5)
  //     // console.log(data)
  //     setData(data.toplist)
  //   }
  //   getData()
  // }, [])

  const dispatch = useDispatch()

  const data = useSelector(state => state.recommandData.hotAnchor, shallowEqual)

  useEffect(() => {
    dispatch(getHotAnchorAction(5))
  }, [dispatch])

  return (
    <>
      <div className={styles.top}>
        <h4 className={styles.hoth4}>热门主播</h4>
      </div>
      {
        data?.map(it => {
          return <div className={styles.hotanchor} key={it.id}>
            <img className={styles.pic} src={it.picUrl} alt="加载中" />
            <div>
              <p className={styles.txt}>{it.name}</p>
              <p className={styles.txt} style={{ color: '#666666' }}>{it.rcmdtext}</p>
            </div>
          </div>
        })
      }
    </>
  )
}
