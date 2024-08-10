import {TypeAnimation} from 'react-type-animation'
const Hero = () => {
  return (
    <div className=" text-center p-16 text-white">
      <p className=''>
        {" "}<TypeAnimation
            sequence={[
              "HEY, I'M NKWOR JANE\nA Frontend Engineer",1000,
            ]}
            speed={30}
            repeat={Infinity}
            style={{whiteSpace: 'pre-line',fontSize: '4em', paddingBottom: '10px'}}
          />
      </p>
        
     
        <div className='mt-10'>
          <button className="border-2 rounded-full bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500  text-white font-bold py-2 px-6 cursor-pointer">
            <a href="https://docs.google.com/document/d/1PNKoyEgGE17Z8Midm1n6AOqnbkvQFf3a6K-0dlYn6mo/edit?usp=sharing" target='blank'>My Resume</a>
          </button>
        </div>
    </div>
  )
}

export default Hero