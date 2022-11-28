import React from 'react'
import Navbar from '../../components/Navbar'
import Results from '../../components/Results'
import { useMainContext } from '../../contexts/MainProvider'

const Home = () => {
  const { data, setData } = useMainContext();
  return (
    <>
      <Navbar />
      {data && data != undefined
        ? <Results items={data} setItems={setData} />
        :
        <>
          <div className='flex justify-center place-content-stretch place-items-center h-screen'>
            <p>No hay productos cargados🫠🛒</p>
          </div>
        </>
      }
    </>
  )
}

export default Home