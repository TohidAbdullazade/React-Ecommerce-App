import React from 'react'
import { Typography } from 'antd'


const Footer = () => {
  return (
    <div className='h-14'>
<footer className='flex justify-evenly items-center h-20 border-t border-black opacity-80 bg-blue-200'>
<Typography.Link to='/'  >
  My Number : +0773231850
</Typography.Link>
<Typography.Link to='/' >
 Privacy Police
</Typography.Link>
<Typography.Link to='/'  >
  Terms of Use
</Typography.Link>
</footer>
    </div>
  )
}

export default Footer
