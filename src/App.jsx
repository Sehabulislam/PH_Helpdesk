
import { useState } from 'react'
import './App.css'
import Container from './Component/Container'
import Footer from './Component/Footer'
import Navbar from './Component/Navbar'
import ToggleBtn from './Component/ToggleBtn'

function App() {

  // const [toggleStatus, setToggleStatus] = useState("");
  const [toggleStatus, setToggleStatus] = useState("All");
  // console.log(toggleStatus);

  return (
    <>
      <Navbar></Navbar>

    {/* Box  */}
      <Container>
      <div className='flex flex-col md:flex-row justify-center items-center gap-5 my-10 md:mr-0'>
        <div className='bg-teal-600 rounded-2xl p-7 h-[200px] w-[350px] text-white flex justify-center items-center'>
          <div className='text-center text-3xl font-semibold'>
            <h2>Pending</h2>
          <h2 className='text-2xl mt-2'>4</h2>
          </div>
        </div>
        <div className='bg-purple-500 rounded-2xl p-7 h-[200px] w-[350px] text-white flex justify-center items-center'>
          <div className='text-center text-3xl font-semibold'>
            <h2>Submitted</h2>
          <h2 className='text-2xl mt-2'>1</h2>
          </div>
        </div>
        <div className='bg-gray-600 rounded-2xl p-7 h-[200px] w-[350px] text-white flex justify-center items-center'>
          <div className='text-center text-3xl font-semibold'>
            <h2>Reviewed</h2>
          <h2 className='text-2xl mt-2'>5</h2>
          </div>
        </div>
      </div>

      {/* Toggle button  */}
      <ToggleBtn toggleStatus={toggleStatus} setToggleStatus={setToggleStatus}></ToggleBtn>
      </Container>
      <Footer></Footer>
    </>
  )
}

export default App
