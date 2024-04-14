import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap/all'
import React from 'react'
import ModelView from './ModelView'

function Model() {
    const [model, setModel] = useState({
    
        title: 'Iphone 15 Pro Max in Natural Titanium'
})
    const [size, setSize] = uSeState('small')

    useGSAP(() => {
        
    gsap.to('#heading', {y: 0, opacity: 1})
    }, [])
  return (
      <section className='common-padding'>
          <div className="screen-max-width">
              <h1 id="heading" className='section-heading'> Inspect this device.</h1>
              <div className="flex flex-col items-center mt-5 ">
                  <div className="w-full h-[75vh] md:h[90vh] overflow-hidden relative">
                      <ModelView/>
                  </div>
              </div>
          </div>
      
    </section>
  )
}

export default Model
