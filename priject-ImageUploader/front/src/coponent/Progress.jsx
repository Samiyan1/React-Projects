import React from 'react'
import  PropTypes  from 'prop-types'
function Progress({uplaodP}) {
  return (
    <div className="progress mt-3">
      <div className="progress-bar bg-success" role="progressbar" style={{ width: `${uplaodP}%` }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{`${uplaodP}%`}</div>
    </div>
  )
}
Progress.prototype={
  uplaodP : PropTypes.number.isRequired
}
export default Progress