import React from 'react'
import vid from '../assets/vid.gif'

function About() {
  return (
    <div className='w-100 mx-auto bg-slate-200 pt-5 p-5 mt-5'>
          <h1  className='text-violet-800 text-4xl text-center'>About <span className='text-violet-600'>Dream</span><span className='text-violet-800'>Home</span></h1>
          <img className='img-fluid mx-auto p-4'  src={vid} alt="" />
          <p>Dream Home is a leading real estate agency that specializes in helping users buy, sell, and rent properties in the most desirable neighborhoods. Our team of experienced agents is dedicated to providing exceptional service and making the buying and selling process as smooth as possible.</p>
          <p>Our mission is to help our clients achieve their real estate goals by providing expert advice, personalized service, and a deep understanding of the local market. Whether you are looking to buy, sell, or rent a property, we are here to help you every step of the way.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ratione aliquam perferendis excepturi, placeat magni? Ab molestias autem eveniet. Enim consequuntur dolor veritatis minus ullam aliquam eos et nostrum natus!</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio dolores omnis quo quasi, rerum, vel beatae soluta officiis distinctio voluptates possimus voluptatem ad repellendus. Odio expedita ullam incidunt ea culpa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis sit vero eaque maiores dolorem consectetur fugit optio ipsam aliquam numquam, asperiores amet dolorum excepturi recusandae esse odio voluptate fugiat possimus!</p>
    </div>
  )
}

export default About