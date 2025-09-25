

import './App.css'
import Container from './Component/Container'
import Footer from './Component/Footer'
import Navbar from './Component/Navbar'
import IssuesManage from './Component/IssuesManage'
import CountBox from './CountBox'
import { Suspense } from 'react'

// const fetchData = async()=>{
//   const result  = await fetch("/data.json")
//   return result.json();

// }


function App() {
  const fetchPromise = fetch("/data.json").then(res => res.json())
  // const fetchPromise = fetchData;
  // console.log(fetchPromise);
  return (
    <>
      <Navbar></Navbar>

    <Container>

      <Suspense fallback="loading">
        <IssuesManage fetchPromise={fetchPromise}></IssuesManage>
      </Suspense>
      </Container>

      <Footer></Footer>
    </>
  )
}

export default App
