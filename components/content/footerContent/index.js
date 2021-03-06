import React from 'react'

function FooterContent() {
    const handlePage=(e)=>{
        if(e.target.outerText =="Previous Page"){
            console.log("prev")
        } else {
            console.log('next')
        }
    }
  return (
    <div
      className='d-flex justify-content-center py-5 '
    >
      <div>
        <div className="px-4" onClick={(e)=>handlePage(e)} style={{cursor:"pointer"}}>Previous Page</div>
      </div>
      <div>
        <div className="px-4" onClick={(e)=>handlePage(e)} style={{cursor:"pointer"}}>Next Page</div>
      </div>
    </div>
  )
}

export default FooterContent
