import React, { useState } from 'react'
import Title from '../components/Title'
import { assets, userBookingsDummyData } from '../assets/assets'

const MyBookings = () => {
    const [bookings, setBookings] = useState(userBookingsDummyData)
    return (
        <div className='py-28 md:pb-32 md:pt-32 px-4 md:px-16 lg:px-24 xl:px-32'>
            <Title
                title='My Booking'
                subTitle='Easy upcoming hotel reservation in one place. Plan your trip seamless with just a few clicks.'
                align='left'
            />

            <div className='max-w-6xl mt-8 w-full text-gray-800'>
                <div className='hidden md:grid md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300 font-medium text-base py-3'>
                    <div>Hotels</div>
                    <div>Date & Timings</div>
                    <div>Payment</div>
                </div>

                {bookings.map((booking) => (
                    <div
                        key={booking._id}
                        className='grid grid-cols-1 md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300 py-6 first:border-t'
                    >
                        {/* HOTELS DETAILS */}
                        <div className='flex flex-col md:flex-row gap-4'>
                            <img
                                src={booking.room.images[0]}
                                alt='hotel'
                                className='md:w-44 rounded shadow object-cover'
                            />
                            <div className='flex flex-col gap-1.5 mt-3 md:mt-0 md:ml-4'>
                                <p className='font-playfair text-2xl'>
                                    {booking.hotel.name}
                                    <span> ({booking.room.roomType})</span>
                                </p>
                                <div className='flex items-center gap-1 text-sm text-gray-500'>
                                    <img
                                        src={assets.locationIcon}
                                        alt='location icon'
                                        className='w-4 h-4'
                                    />
                                    <span className='text-sm'>
                                        {booking.hotel.address}
                                    </span>
                                </div>
                                <div className='flex items-center gap-1 text-sm text-gray-500'>
                                    <img
                                        src={assets.guestsIcon}
                                        alt='guests icon'
                                        className='w-4 h-4'
                                    />
                                    <span className='text-sm'>Guests: {booking.guests}</span>
                                </div>
                                <p>Total ${booking.totalPrice}</p>
                            </div>
                        </div>

                        {/* DATE & TIME */}
                        <div className='flex flex-row md:items-center md:gap-12 mt-3 gap-8'>
                            <div className=''>
                                <p>Check-In:</p>
                                <p>{new Date(booking.checkInDate).toDateString()}</p>
                            </div>
                            <div>
                                <p>Check-Out</p>
                                <p>{new Date(booking.checkOutDate).toDateString()}</p>
                            </div>
                        </div>


                        {/* PAYMENT */}
                        <div className='flex flex-col items-start justify-center pt-3'>
                            <div className='flex items-center gap-2'>
                                <div className={`h-3 w-3 rounded-full ${booking.isPaid ? 'bg-green-500 ': 'bg-red-500'}`}></div>
                                <p className={ `text-sm ${booking.isPaid ? 'text-green-500' : 'text-red-500'}`}>
                                    {booking.isPaid ? 'Paid' : 'unPaid'}
                                </p>
                            </div>
                            {!booking.isPaid && (
                                <button className='px-4 py-1.5 mt-4  border border-gray-500 rounded-full cursor-pointer'>Pay Now</button>
                            )}
                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default MyBookings
