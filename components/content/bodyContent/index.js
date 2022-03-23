import React, { useEffect, useState } from 'react'
import CardPersonel from '../../cardPersonel'
import { connect } from 'react-redux'
import { fetchUsers } from '../../../redux'

function BodyContent(props) {
  const { fetchUsers, userData, searchData } = props
  // const [search, setSearch] = useState('')

  const onChange = (e) => {
    setSearch(e)
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <div className='my-3 px-3 d-flex justify-content-center'>
      {searchData === '' ? (
        <>
          {userData.length !== 0 ? (
            <>
              {userData.map((data, i) => {
                return <CardPersonel key={i} data={data} index={i} />
              })}
            </>
          ) : (
            <span>tidak ada kosong</span>
          )}
        </>
      ) : (
        <span>data tidak ada</span>
      )}
      {/* {userData.map((data, i) => {
        return <CardPersonel key={i} data={data} index={i} />
      })} */}
      {/* <CardPersonel data={userData[0]}/> */}
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
