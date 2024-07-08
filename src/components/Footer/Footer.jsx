import React from 'react'


export default function Footer() {
  return (
    <>
        <div className="footer bg-main-light p-4">
            <div className="container-fluid mx-4 border-bottom">
                <h3>Get the FreshCart app</h3>
                <p>We will send you a link, open it on your phone to download the app.</p>
                <div className="row">
                    <div className="col-md-9">
                        <input type='email' className='form-control mb-3' placeholder='Email...' />
                    </div>
                    <div className="col-md-3">
                        <button className='btn bg-main w-100 text-white'>Share App Link</button>
                    </div>
                </div>
            </div>
            <div className="container-fluid mx-4 my-4 m-0">
                <h4>Get deliveries with FreshCart</h4>
            </div>
        </div>
    </>
  )
}
