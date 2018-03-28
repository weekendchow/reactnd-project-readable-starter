import React from 'react'
import Category from './Category'

function SideNav ({ sideNavClass }) {
  return(
    <div className={sideNavClass.join(' ')}>
      <Category />
    </div>
  )
}

export default SideNav
