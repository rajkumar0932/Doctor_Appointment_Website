import React, { useState } from 'react'
import { assets } from '../assets/assets'

const MyProfile = () => {

  const [isEdit, setIsEdit] = useState(false)

  const [userData, setUserData] = useState({
    name: 'Edward Vincent',
    image: assets.profile_pic,
    email: 'richardjameswap@gmail.com',
    phone: '+1 123 456 7890',
    address: {
      line1: '57th Cross, Richmond',
      line2: 'Circle, Church Road, London'
    },
    gender: 'Male',
    dob: '2024-07-20'
  })

  return (

    <div className='max-w-lg flex flex-col gap-2 text-sm pt-5'>

      {/* Profile Images */}
      <div className='flex gap-4'>

        <img
          className='w-36 rounded-lg object-cover border'
          src={userData.image}
          alt=""
        />

        <img
          className='w-36 rounded-lg bg-indigo-50 p-6 border'
          src={assets.upload_icon}
          alt=""
        />

      </div>

      {/* Name */}
      {
        isEdit ? (
          <input
            className='bg-gray-50 border border-gray-300 rounded-lg px-3 py-2 text-3xl font-medium max-w-72 mt-4 outline-none focus:border-primary transition-all'
            type="text"
            value={userData.name}
            onChange={(e) =>
              setUserData(prev => ({
                ...prev,
                name: e.target.value
              }))
            }
          />
        ) : (
          <p className='font-medium text-3xl text-neutral-800 mt-4'>
            {userData.name}
          </p>
        )
      }

      <hr className='bg-zinc-300 h-[1px] border-none my-2' />

      {/* Contact Information */}
      <div>

        <p className='text-neutral-500 underline mt-3 tracking-wide'>
          CONTACT INFORMATION
        </p>

        <div className='grid grid-cols-[1fr_3fr] gap-y-5 mt-4 text-neutral-700'>

          <p className='font-medium'>Email id:</p>

          {
            isEdit ? (
              <input
                className='bg-gray-50 border border-gray-300 rounded-lg px-3 py-2 max-w-72 outline-none focus:border-primary transition-all'
                type="email"
                value={userData.email}
                onChange={(e) =>
                  setUserData(prev => ({
                    ...prev,
                    email: e.target.value
                  }))
                }
              />
            ) : (
              <p className='text-sky-500'>
                {userData.email}
              </p>
            )
          }

          <p className='font-medium'>Phone:</p>

          {
            isEdit ? (
              <input
                className='bg-gray-50 border border-gray-300 rounded-lg px-3 py-2 max-w-72 outline-none focus:border-primary transition-all'
                type="text"
                value={userData.phone}
                onChange={(e) =>
                  setUserData(prev => ({
                    ...prev,
                    phone: e.target.value
                  }))
                }
              />
            ) : (
              <p className='text-sky-500'>
                {userData.phone}
              </p>
            )
          }

          <p className='font-medium'>Address:</p>

          {
            isEdit ? (
              <div className='flex flex-col gap-2'>

                <input
                  className='bg-gray-50 border border-gray-300 rounded-lg px-3 py-2 outline-none focus:border-primary transition-all'
                  type="text"
                  value={userData.address.line1}
                  onChange={(e) =>
                    setUserData(prev => ({
                      ...prev,
                      address: {
                        ...prev.address,
                        line1: e.target.value
                      }
                    }))
                  }
                />

                <input
                  className='bg-gray-50 border border-gray-300 rounded-lg px-3 py-2 outline-none focus:border-primary transition-all'
                  type="text"
                  value={userData.address.line2}
                  onChange={(e) =>
                    setUserData(prev => ({
                      ...prev,
                      address: {
                        ...prev.address,
                        line2: e.target.value
                      }
                    }))
                  }
                />

              </div>
            ) : (
              <p className='text-gray-500'>
                {userData.address.line1}
                <br />
                {userData.address.line2}
              </p>
            )
          }

        </div>

      </div>

      {/* Basic Information */}
      <div>

        <p className='text-neutral-500 underline mt-6 tracking-wide'>
          BASIC INFORMATION
        </p>

        <div className='grid grid-cols-[1fr_3fr] gap-y-5 mt-4 text-neutral-700'>

          <p className='font-medium'>Gender:</p>

          {
            isEdit ? (
              <select
                className='max-w-32 bg-gray-50 border border-gray-300 rounded-lg px-3 py-2 outline-none focus:border-primary transition-all'
                value={userData.gender}
                onChange={(e) =>
                  setUserData(prev => ({
                    ...prev,
                    gender: e.target.value
                  }))
                }
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            ) : (
              <p className='text-gray-500'>
                {userData.gender}
              </p>
            )
          }

          <p className='font-medium'>Birthday:</p>

          {
            isEdit ? (
              <input
                className='max-w-44 bg-gray-50 border border-gray-300 rounded-lg px-3 py-2 outline-none focus:border-primary transition-all'
                type="date"
                value={userData.dob}
                onChange={(e) =>
                  setUserData(prev => ({
                    ...prev,
                    dob: e.target.value
                  }))
                }
              />
            ) : (
              <p className='text-gray-500'>
                {userData.dob}
              </p>
            )
          }

        </div>

      </div>

      {/* Buttons */}
      <div className='mt-8 flex items-center gap-4'>

        {
          isEdit
            ? <button
                onClick={() => setIsEdit(false)}
                className='border border-primary px-8 py-2 rounded-full text-primary hover:bg-primary hover:text-white transition-all duration-300'
              >
                Save information
              </button>

            : <button
                onClick={() => setIsEdit(true)}
                className='border border-primary px-8 py-2 rounded-full text-primary hover:bg-primary hover:text-white transition-all duration-300'
              >
                Edit
              </button>
        }

      </div>

    </div>
  )
}

export default MyProfile