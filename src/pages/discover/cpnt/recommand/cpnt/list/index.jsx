import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './index.module.scss'
import { IconArrowRight, IconPlayCircle, IconFolderAdd } from '@arco-design/web-react/icon';
import { connect } from 'react-redux'
import { getTopListAction } from '@/store/action/recommand'

function List(props) {
  // 飙升、原创、新歌图片
  const content = [
    { img: 'https://p3.music.126.net/pcYHpMkdC69VVvWiynNklA==/109951166952713766.jpg?param=100y100', txt: '飙升榜' },
    { img: 'https://p3.music.126.net/wVmyNS6b_0Nn-y6AX8UbpQ==/109951166952686384.jpg?param=100y100', txt: '新歌榜' },
    { img: 'https://p4.music.126.net/iFZ_nw2V86IFk90dc50kdQ==/109951166961388699.jpg?param=100y100', txt: '原创榜' },
  ]

  const { recommandData: { upList, newList, originList } } = props

  useEffect(() => {
    // props.getTopList(19723756)
    props.getTopList(3779629)
    props.getTopList(2884035)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const clickImg = () => {
    console.log('11')
  }

  return (
    <>
      {/* 标题 */}
      < div className={styles.hotTitle} >
        <div style={{ display: 'flex' }}>
          <div className={styles.circle}></div>
          {/* 榜单 */}
          <NavLink to='discover/toplist' className={styles.title}>榜单</NavLink>
        </div>
        <NavLink to='/discover/toplist' style={{ display: 'block', marginRight: '10px' }}>更多<IconArrowRight /></NavLink>
      </div >

      {/* 内容 */}
      <div className={styles.box}>
        {
          [[...(upList?.slice(0, 10))], [...(newList?.slice(0, 10))], [...(originList.slice(0, 10))]]?.map((it, index) => {
            return <div className={styles.item} key={index}>
              <div className={styles.top}>
                {/* <NavLink to='/discover/toplist'><img className={styles.pic} src={content[index].img} alt="加载中..." /></NavLink> */}
                <img
                  className={styles.pic}
                  src={content[index].img}
                  alt="加载中..."
                  onClick={clickImg}
                />
                <div>
                  <NavLink to='#'><p>{content[index].txt}</p></NavLink>
                  <NavLink to='#'><IconPlayCircle /></NavLink>
                  <NavLink to='#'><IconFolderAdd /></NavLink>
                </div>
              </div>
              <ul className={styles.listul}>
                {
                  it?.map((ite, index1) => {
                    return <li className={styles.listli} key={ite.id}>
                      <div className={styles.left}>{index1 + 1}</div>
                      <div className={styles.right}>
                        <span>{ite.name}</span>
                        <div className={styles.ico}></div>
                      </div>
                    </li>
                  })
                }
                <li className={styles.listli}><NavLink className={styles.last} to='#'>查看全部{'>'}</NavLink></li>
              </ul>
            </div>
          })
        }
      </div>
    </>
  )
}

export default connect(
  state => (
    { recommandData: state.recommandData }
  ),
  {
    getTopList: getTopListAction
  }
)(List)
