import React from 'react'

const Progressbar = ({progress,color})=> {
  return (
    <div className='containeer'>
        <div className='progress-bar'>
            <div>
                {`${progress}`}
            </div>
        </div>
    </div>
  )
}
export default Progressbar;
