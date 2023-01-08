import React from 'react'
import styles from './index.module.scss'
import Title from '@/components/title'
import { useSelector, shallowEqual } from 'react-redux'
import { Icon } from '@arco-design/web-react'

const IconFont = Icon.addFromIconFontCn({ src: '//at.alicdn.com/t/c/font_3786758_d87rp5uei8w.js' })

export default function DJListOne() {
  const { recommandProgram, programRanking } = useSelector(state => ({
    recommandProgram: state.radioData.recommandProgram,
    programRanking: state.radioData.programRanking
  }), shallowEqual)

  return (
    <>
      <div className={styles.listonebox}>
        <div className={styles.left}>
          <Title title="推荐节目" more={true} />
          <ul>
            {
              recommandProgram ?
                recommandProgram.map(it => {
                  return <li key={it.mainSong.id}>
                    <img src={it.coverUrl} alt="" />
                    <div>
                      <h4 className='sin-line'><span>{it.mainSong.name}</span></h4>
                      <p className='sin-line'><span>{it.radio.name}</span></p>
                    </div>
                    <div className={styles.borderbox}>{it.radio.category}</div>
                  </li>
                }) : <></>
            }
          </ul>
        </div>
        <div className={styles.right}>
          <Title title="节目排行榜" more={true} />
          <ul>
            {
              programRanking?.map((it, index) => {
                return <li key={it.program.mainSong.id}>
                  <div>
                    <div className={styles.num} style={{ color: index <= 2 ? '#c20c0c' : '#999' }}>{'0' + index}</div>
                    <IconFont type='icon-new' style={{ fontSize: 20, color: '#268330' }} />
                  </div>
                  <img src={it.program.coverUrl} alt="" />
                  <div>
                    <h4 className='sin-line'><span>{it.program.name}</span></h4>
                    <p className='sin-line'><span>{it.program.dj.brand}</span></p>
                  </div>
                </li>
              })
            }
          </ul>
        </div>
      </div>
    </>
  )
}
