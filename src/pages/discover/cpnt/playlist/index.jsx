import React from 'react'
import Title from '@/components/title'
import ListOfPlayList from './cpnt/listofplaylist'

export default function PlayList() {

  return (
    <>
      <div className="w2" style={{ padding: '39px' }}>
        <Title title="全部" cat={true} btn={true} mb="30px" />
        <ListOfPlayList />
      </div>
    </>
  )
}
