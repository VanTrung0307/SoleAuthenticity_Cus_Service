import React from 'react'
import Link from 'next/link'

const Download = () => {
  return (
    <section className="download">
      <div className="download-container">
        <div className="download-content">
          <h1 className="slogan-text">
            WANT TO KNOW <a className="green-text">REAL</a> OR{' '}
            <a className="red-text">REPLICA</a>?
          </h1>
          <h1 className="slogan-text">
            Download <a className="orange-text">SoleAuthenticity</a> now
          </h1>
          <h1 className="slogan-text">
            for <a className="orange-text">AUTHENTICATION</a>
          </h1>
        </div>
        <div className="download-img">
          <Link href="#">
            <img
              className="applogo"
              src="/images/logos/appstore.gif"
              alt="AppStore"
            />
          </Link>
          <Link href="#">
            <img
              className="applogo"
              src="/images/logos/googleplay.gif"
              alt="GooglePLay"
            />
          </Link>
        </div>
        <div className="logo-left">
          <img className="phone" src="/images/logos/phone.gif" alt="authen" />
        </div>
        <div className="logo-right">
          <img
            className="authen"
            src="/images/logos/applogo.png"
            alt="authen"
          />
        </div>
      </div>
    </section>
  )
}

export default Download
