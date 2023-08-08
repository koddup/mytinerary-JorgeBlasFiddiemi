import React from 'react'
import { useParams } from 'react-router-dom'

const About = () => {
  let params = useParams()
  return (
    <>
    {console.log(params)}
    <div>About</div>
    </>
  )
}

export default About