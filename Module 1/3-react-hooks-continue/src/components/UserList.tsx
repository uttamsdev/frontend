import React from 'react'

const UserList = ({isLoading, error, data}) => {
    if(isLoading){
        return <p>Loading....</p>
    }
    if(error){
        return <>Something went wrong..</>
    }
  return (
    <div>
        {
            data?.map(item => <p>{item?.name}</p>)
        }
    </div>
  )
}

export default UserList