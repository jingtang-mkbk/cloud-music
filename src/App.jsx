import React from "react"
import routes from "./routes"
import { useRoutes } from "react-router-dom"
import Layout from "./components/layout"
import LoginPop from './components/loginpop'
import './App.scss'

export default function App() {
  const element = useRoutes(routes)

  return (
    <>
      <Layout />
      {element}
      <LoginPop />
    </>
  )
}


