import React from 'react'
import { useParams } from 'react-router-dom'

const About = () => {
  let params = useParams()
  return (
    <>
      {console.log(params)}
      <div className='flex-grow'>
        Params example: {params.miVariable} 
      </div>
    </>
  )
}

export default About