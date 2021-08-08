import React from 'react'
import '../../assets/css/color.css'
import '../../assets/css/typography.css'
import Card from '../../components/base/card'
const ManagePhone = () => {
    return (
        <>
            <div className='wrapperContent'>
                <p className='text-18 bold'>Personal Information</p>
                <p className='text-16 c-dark desciptionContentBox'>We got your personal information from the sign up proccess. If you want to make changes on your information, contact our support.</p>
                <Card type='managePhone' title='Primary' content='+62 813-9387-7946'/>
            </div>
        </>
    )
}

export default ManagePhone
