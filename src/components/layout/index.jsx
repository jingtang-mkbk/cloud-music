import React from 'react'
import Play from './cpnt/play';
import NavBar from './cpnt/navbar';

export default function Layout() {

  return (
    <>
      {/* 头部navbar */}
      <NavBar />
      {/* 底部play */}
      <Play />
    </>
  )
}
