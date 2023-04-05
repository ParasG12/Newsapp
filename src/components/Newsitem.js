// import React, { Component } from 'react'
import React from 'react'

// export class Newsitem extends Component {
const Newsitem = (props) => {
  // render() {
  // let {title,description,imageUrl,redirect,source} =this.props;
  let { title, description, imageUrl, redirect, source } = props;
  return (
    <div className='my-3'>
      <div className="card" style={{ width: "18rem" }}>
        <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{ zIndex: "1", left: "90%" }}>
          {source}

        </span>
        <img src={imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title} </h5>
          <p className="card-text">{description}</p>
          <p className="card-text"><small className="text-muted">By {(props.author) ? props.author : "Unknown"} on {(new Date(props.date)).toGMTString() ? (new Date(props.date)).toGMTString() : "Unknown"}</small></p>
          <a href={redirect} target="blank" className="btn btn-sm btn-dark">Read more</a>
        </div>
      </div>



    </div>
  )
  // }
}

export default Newsitem
