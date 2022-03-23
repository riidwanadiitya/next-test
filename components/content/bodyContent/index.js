import React, { useEffect } from 'react'
import CardPersonel from '../../cardPersonel'
import { connect } from 'react-redux'
import { fetchUsers } from '../../../redux'

function BodyContent(props) {
  const { fetchUsers, userData } = props

  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <div className='my-3 px-3 d-flex justify-content-center'>
      {userData.map((data,i) => {
        return <CardPersonel key={i} data={data} index={i}/>
      })}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    userData: state.users.users,
  }
}

const mapDispatchToProps = {
  fetchUsers,
}

export default connect(mapStateToProps, mapDispatchToProps)(BodyContent)
