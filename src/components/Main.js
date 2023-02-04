import React from 'react'

export default function Main({address}) {
  return (
    <div className="details">
        <div className="card-container">
            <div className="card">
                <div className="card-main">
                <label>IP address</label>
                <p id="ip">{address.ip}</p>
                </div>
            </div>
            <div className="card">
                <div className="divider"></div>
                <div className="card-main">
                <label>location</label>
                <p id="location">{address.location.city}, {address.location.region}</p>
                </div>
            </div>
            <div className="card">
                <div className="divider"></div>
                <div className="card-main">
                <label>timezone</label>
                <p id="timezone">UTC{address.location.timezone}</p>
                </div>
            </div>
            <div className="card">
                <div className="divider"></div>
                <div className="card-main">
                <label>ISP</label>
                <p id="isp">{address.isp}</p>
                </div>
            </div>
        </div>
    </div>
  )
}
