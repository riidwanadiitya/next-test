import { useEffect, useState } from 'react'
import Layouts from '../components/layout'
import HeaderContent from '../components/content/headerContent'
import BodyContent from '../components/content/bodyContent'
import FooterContent from '../components/content/footerContent'

function Home(props) {
  const [search, setSearch] = useState('')

  const handleSearch = (e) => {
    setSearch(e)
  }
  return (
    <>
      <Layouts>
        <HeaderContent handleSearch={(e)=>handleSearch(e)} searchData={search}/>
        <BodyContent searchData={search}/>
        <FooterContent />
      </Layouts>
    </>
  )
}

export default Home
