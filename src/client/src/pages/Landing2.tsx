import Header from '../components/LandingHeader'
import {About} from '../components/LandingAbout'
import {Features} from '../components/LandingFeatures'
import landingimg from '../assets/landingimg1.png'
import landingimg3 from '../assets/landingimg3.png'
import Footer from '../components/common/Footer'

import person1 from '../assets/person1.png'
import person2 from '../assets/person2.png'
import person3 from '../assets/person3.png'

const testimonials = [
  {
    id: 1,
    name: 'John',
    message: '"I absolutely love Calpyso! It\'s the perfect platform for emerging artists like me to showcase our art and connect with a supportive community."',
    image: person1,
  },
  {
    id: 2,
    name: 'Alexi',
    message: '"Calpyso has made selling my art a breeze! The user-friendly interface and secure payment system make managing my storefront effortless." ',
    image: person2, 
  },
  {
    id: 3,
    name: 'Jannet',
    message: '"I\'ve gained exposure and recognition that I couldn\'t have imagined before. It\'s truly a platform that values and empowers artists!"',
    image: person3, 
  },
];


const buttonStyle = {
  padding: '12px 24px',
  fontSize: '15px',
  fontWeight: 'bold',
  color: '#ffffff',
  backgroundColor: '#9EDFD9',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
};

export default function Landing2() {

  return (
    <div>
      <div data-aos='fade-down' data-aos-delay='1200' data-aos-duration='1000' >
        <Header />
      </div>

      <section>
        <div className="container items-center flex justify-center">
          {/*Text*/}
          <div className="ml-[60px] place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl" data-aos='fade-down' data-aos-delay='400'>Embrace the Fusion of Art and Melody</h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl" data-aos='fade-down' data-aos-delay='500'>Discover and Collect Masterpieces at Your Fingertips!</p>
            <a data-aos='fade-down' data-aos-delay='600' href="/register" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white" style={buttonStyle}>
              Get started
              <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
          </div>

          {/*Image*/}
          <div data-aos='fade-up' data-aos-delay='700'>
            <img style={{width: 800, height: 600}} src={landingimg} alt=""/>
          </div>
        </div>
      </section>
      
      <div className='mx-auto items-center flex justify-center'>
        <About />
      </div>

      <div>
        <Features />
      </div>

      <section id='testimonial-section' className='my-[150px]'>
        <h2 data-aos='fade-down' data-aos-delay='100' className='mb-6 xl:mb-12 text-[#222B4E] font-bold font-3xl text-center' style={{ fontFamily: 'sans-serif', fontSize: '36px' }} >Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-purple-400  rounded-lg shadow-md p-6 flex flex-col items-center justify-center max-w-sm mx-auto" data-aos='zoom-in' data-aos-offset='100' data-aos-delay='600' >
              <div className="mb-4">
                <img
                  src={testimonial.image}
                  alt=""
                  className="w-20 h-20 rounded-full inline-block mr-4 ml-4"
                />
              </div>
              <span className="text-black font-bold uppercase mb-2">{testimonial.name}</span>
              <p className="text-[#ffffff] text-lg font-semibold mb-4">{testimonial.message}</p>
            </div>
          ))}
        </div>
      </section>

      <div data-aos='fade-up' data-aos-delay='100' >
        <Footer />
      </div>
    </div>
  )
}