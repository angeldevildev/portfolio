import React from 'react'
import Image from 'next/image'
import buyMeACoffee from '../Footer/bmc-logo-yellow.png'

function BuyMeACoffee() {
    return (
        <div>
            <a href="https://buymeacoffee.com/angeldevildev" target="_blank">
                <Image src={buyMeACoffee} alt="Buy me a Coffee" style={{ height: 20, width: 20, borderRadius: '100%' }} />
            </a>
        </div>
    )
}

export default BuyMeACoffee