import React from 'react'

const YellowBorder = ({children}) => {
  return (
    <div style={{border:'2px solid yellow', borderRadius:"12px", padding:"8px 16px"}}>
        {children}
    </div>
  )
}

export default YellowBorder