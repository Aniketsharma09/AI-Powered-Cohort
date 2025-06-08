import v from '../images/vegitable.png'
import v1 from '../images/vegitable 1.png'
import v2 from '../images/vegitable 2.png'
import v3 from '../images/vegitable 3.png'
import v4 from '../images/vegitable 4.png'
import v6 from '../images/vegitable 6.png'
const About = () => {
  return (
    <div className="flex flex-col h-[86vh] w-full items-center justify-center">
      <h1 className="text-7xl tracking-wide text-[var(--heading-color)] ">About Us</h1>
      <h3 className="w-[75%] mt-10 text-center text-xl ">We believe that cooking should be joyful, not complicated. Whether you're a beginner in the kitchen or a seasoned home chef, our carefully curated recipes are designed to help you make delicious meals with ease.</h3>
    <img className='w-60 absolute bottom-0 left-10' src={v}/>
    <img className='w-60 absolute top-25 right-10 rotate-[-100deg]' src={v1}/>
    <img className='w-50 absolute top-25 -z-10 left-130 rotate-[-30deg]' src={v2}/>
    <img className='w-80 absolute bottom-0 right-10' src={v3}/>
    <img className='w-50 absolute bottom-0 left-135' src={v4}/>
    {/* <img className='w-30 absolute bottom-5 left-100' src={v5}/> */}
    <img className='w-60 absolute top-25 left-10' src={v6}/>
    </div>
  )
}

export default About