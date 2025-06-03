import React from 'react'

const Hero = (props) => {
    return (
        <section className='section-7'>
            <div className='hero d-flex align-items-center'>
                <div className='container'>
                    <div className='text-left'>
                        <span>{props.data.preheading}</span>
                        <h1>{props.data.heading}</h1>
                        <p dangerouslySetInnerHTML={{ __html: props.data.text }} ></p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
