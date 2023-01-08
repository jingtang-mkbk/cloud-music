import React, { lazy, Suspense } from 'react'
import { Navigate } from 'react-router-dom'

import Discover from '../pages/discover'
// import My from '../pages/my'
// import Friend from '../pages/friend'
// import Download from '../pages/download'
// import TopList from '../pages/discover/cpnt/toplist'
// import PlayList from '../pages/discover/cpnt/playlist'
// import DJRadio from '../pages/discover/cpnt/djradio'
// import Artist from '../pages/discover/cpnt/artist'
// import Album from '../pages/discover/cpnt/album'
// import Recommand from '../pages/discover/cpnt/recommand'
// import PlayListDetail from '../pages/playlistdetail'

const My = lazy(()=>import('../pages/my'))
const Download = lazy(()=>import('../pages/download'))
const Friend = lazy(()=>import('../pages/friend'))
const TopList = lazy(()=>import('../pages/discover/cpnt/toplist'))
const PlayList = lazy(()=>import('../pages/discover/cpnt/playlist'))
const DJRadio = lazy(()=>import('../pages/discover/cpnt/djradio'))
const Artist = lazy(()=>import('../pages/discover/cpnt/artist'))
const Album = lazy(()=>import('../pages/discover/cpnt/album'))
const Recommand = lazy(()=>import('../pages/discover/cpnt/recommand'))
const PlayListDetail = lazy(()=>import('../pages/playlistdetail'))

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    path: '/',
    exact: true,
    element: <Navigate to='/discover' />
  },
  {
    path: '/discover',
    element: <Discover/>,
    children: [
      {
        path: '/discover',
        exact: true,
        element: <Navigate to='recommand' />
      },
      {
        path: 'recommand',
        exact: true,
        element: <Recommand />
      },
      {
        path: 'toplist',
        element: <Suspense fallback={<></>}><TopList/></Suspense>
        
      },
      {
        path: 'playlist',
        element: <Suspense fallback={<></>}><PlayList/></Suspense>
      },
      {
        path: 'djradio',
        element: <Suspense fallback={<></>}><DJRadio/></Suspense>
      },
      {
        path: 'artist',
        element: <Suspense fallback={<></>}><Artist/></Suspense>
      },
      {
        path: 'album',
        element: <Suspense fallback={<></>}><Album/></Suspense>
      }
    ]
  },
  {
    path: '/my',
    element: <Suspense fallback={<></>}><My/></Suspense>
  },
  {
    path: '/friend',
    element: <Suspense fallback={<></>}><Friend/></Suspense>
  },
  {
    path: '/download',
    element: <Suspense fallback={<></>}><Download/></Suspense>
  },
  {
    path: '/playlist',
    element: <Suspense fallback={<></>}><PlayListDetail/></Suspense>
  }
]