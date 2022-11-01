import React from 'react'
import Logo from '../assets/images/logo.png'
function Footer () {
  return (
    <div className='footer2'>
      <div className='oliven-narrow-content'>
        <div className='row'>
          <div className='col-md-12 text-center'>
            <h2>
              <a href='/'>
                <img src={Logo} alt='' />
                <span>
                  Olivia <small>&</small> Enrico
                </span>
              </a>
            </h2>
            <p className='copyright'>December 15, 2021 – New York, Brooklyn</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
