import React from 'react'
import { useState } from 'react'
import Header from './Header'
const AccountDetails = () => {

  const [acc, setAcc] = useState({
    name: '',
    email: '',
    phone: '',
    oldPassword: '',
    newPassword: '',
  })
  const handleUpdate = (e) => {
    setAcc(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }


  const submit = (e, acc) => {
    e.preventDefault()

    // I will later perform an update request using Axios
    // console.log(acc)
  }
  return (
    <div>
      <Header />

      <div className="profile-container">
        <div className='main-account'>
          <div className="account-details">
            <h3>Update Your Account Details</h3>
            <p>You have to provide your former password to make changes to your current account details</p>
            <form action="" className='details-form'>
              <label htmlFor="name">Name:</label><br />
              <input type="text" name='name' placeholder='Name' value={acc.name} onChange={handleUpdate} /><br />
              <label htmlFor="email">Email:</label><br />
              <input type="email" name='email' placeholder='Email' value={acc.email} onChange={handleUpdate} /><br />
              <label htmlFor="phone">Phone number:</label><br />
              <input type="text" name='phone' placeholder='Phone Number' value={acc.phone} onChange={handleUpdate} /><br />
              <label htmlFor="newPassword">New password:</label><br />
              <input type="password" name='newPassword' placeholder='Enter your new password' onChange={handleUpdate} value={acc.newPassword} /><br />
              <label htmlFor="oldPassword">Former password:</label><br />
              <input type="password" name='oldPassword' placeholder='Enter your former password' onChange={handleUpdate} value={acc.oldPassword} /><br />
              <button onClick={(e) => submit(e, acc)} type='submit'>Submit</button>
            </form>
          </div>
          <div className="show-account-details">
            <div className='user-image'>
              <img src="/novelPics/profile.jpg" alt="" />
            </div>
            <table>
              <tr>
                <td>Name</td>
                <td>{acc.name}</td>
              </tr>
              <tr>
                <td>Phone</td>
                <td>{acc.phone}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{acc.email}</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccountDetails