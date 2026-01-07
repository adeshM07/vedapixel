import React from 'react'

const SectionWrapper = ({children}) => {
  return (
   <section className='px-4 md:px-15 lg:px-15 xl:px-30 2xl:px-30'>
        {children}
   </section>
  )
}

export default SectionWrapper

//  <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" />