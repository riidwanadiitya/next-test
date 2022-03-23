import React from 'react'
import HeaderComp from '../headersComp'
import SideNavComp from '../sideNavComp'

function Layouts(props) {
  const { children } = props
  return (
    <div>
      <HeaderComp />
      <div className='d-flex'>
        <div style={{ width: '20vw'}}>
          <SideNavComp />
        </div>
        <div style={{ backgroundColor: '#f8f9fa', width: '80vw', height:"85vh" }}>{children}</div>
      </div>
    </div>
  )
}

export default Layouts
