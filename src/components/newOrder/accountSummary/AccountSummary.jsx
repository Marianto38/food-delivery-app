import React from 'react'
import './stylesAccountSummary.scss'

const AccountSummary = ({descriptionOne,
                        descriptionTwo,
                        priceOne,
                        priceTwo,
                        total,
                        priceTotal,

                    }) => {
  return (
    <div className='container__summary'>
        <div className='container__summary__item'>
            <p>{descriptionOne}</p>
            <p>{priceOne}</p>
        </div>
        <div className='container__summary__item'>
            <p>{descriptionTwo}</p>
            <p>{priceTwo}</p>
        </div>
        <div className='container__summary__line'>

        </div>
        <div className='container__summary__item'>
            <p>{total}</p>
            <p className='container__summary__priceTotal'>{priceTotal}</p>
        </div>
    </div>
  )
}

export default AccountSummary