import { useEffect } from 'react'
import Layouts from '../components/layout'
import HeaderContent from '../components/content/headerContent'
import BodyContent from '../components/content/bodyContent'
import FooterContent from '../components/content/footerContent'

function Home(props) {
  return (
    <>
      <Layouts>
        <HeaderContent />
        <BodyContent />
        <FooterContent />
      </Layouts>
    </>
  )
}

export default Home
