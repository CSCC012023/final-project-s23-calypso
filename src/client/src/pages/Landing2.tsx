import Header from '../components/LandingHeader'
import {About} from '../components/LandingAbout'
import {Features} from '../components/LandingFeatures'
import landingimg from '../assets/landingimg1.png'
import Footer from '../components/common/Footer'

import CollectionCard from '../components/home/CollectionCard'
import previewArt from '../assets/previewArt.jpg'
import sampleProductImage2 from '../assets/sampleProductImage2.jpg'
import sampleLargeProductImage from '../assets/sampleLargeProductImage.jpg'
import person1 from '../assets/person1.png'
import person2 from '../assets/person2.png'
import person3 from '../assets/person3.png'

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet tellus vitae velit condimentum, ut convallis velit sagittis.',
    image: person1,
  },
  {
    id: 2,
    name: 'Jane Smith',
    message: 'In hac habitasse platea dictumst. Sed tincidunt, eros quis congue ultrices, lacus est volutpat purus, vitae ullamcorper arcu elit sit amet tellus.',
    image: person2, 
  },
  {
    id: 3,
    name: 'Jane Smith',
    message: 'In hac habitasse platea dictumst. Sed tincidunt, eros quis congue ultrices, lacus est volutpat purus, vitae ullamcorper arcu elit sit amet tellus.',
    image: person3, 
  },
];

const collections = [
  {
    id: 1,
    name: 'Best Sceneries of 2023',
    description: 'The very best.',
    imageSrc: previewArt,
    imageAlt: 'BEST SCENERIES OF 2023',
    href: '/login',
  },
  {
    id: 2,
    name: 'The Lonely Classical Collection',
    description: 'All things lonely and dark.',
    imageSrc: sampleProductImage2,
    imageAlt: 'LONELY COLLECTION',
    href: '/login',
  },
  {
    id: 3,
    name: 'Futuristic Digital Collection',
    description: '2070 is calling!',
    imageSrc: sampleLargeProductImage,
    imageAlt: 'FUTURE COLLECTION',
    href: '/login',
  },
]


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

      <div className="container mx-auto items-center flex justify-center">
        {/*Text*/}
        <div>
          <h1 style={{ fontFamily: 'sans-serif', fontSize: '40px' }} className="text-[#222B4E] font-bold mb-6" data-aos='fade-down' data-aos-delay='400'>Shop Art Like Never Before</h1>
          <p className="text-[#000000] text-2xl font-semibold mb-6" data-aos='fade-down' data-aos-delay='500'>Discover and Collect Masterpieces at Your Fingertips!</p>
          <a href="/register">
            <button className="btn btn-primary mb-8" data-aos='fade-down' data-aos-delay='600' style={buttonStyle}>
              Get Started
            </button>
          </a>
        </div>
        {/*Image*/}
        <div data-aos='fade-up' data-aos-delay='700'>
          <img style={{width: 600, height: 500}} src={landingimg} alt=""/>
        </div>
      </div>

      <div className='mx-auto items-center flex justify-center'>
        <About />
      </div>

      <div>
        <Features />
      </div>

      <section id='testimonial-section' className='my-[150px]'>
      <h2 data-aos='fade-down' data-aos-delay='100' className='mb-6 xl:mb-12 text-[#222B4E] font-bold font-3xl text-center' style={{ fontFamily: 'sans-serif', fontSize: '36px' }} >Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
          {/* Changed grid-cols-2 to grid-cols-3 and added justify-items-center */}
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-purple-600 bg-opacity-50 rounded-lg shadow-md p-6 flex flex-col items-center justify-center max-w-sm mx-auto" data-aos='zoom-in' data-aos-offset='100' data-aos-delay='600' >
              {/* Added flex-col class to center image and name vertically */}
              <div className="mb-4">
                <img
                  src={testimonial.image}
                  alt=""
                  className="w-20 h-20 rounded-full inline-block mr-4 ml-4"
                />
              </div>
              <span className="text-black font-bold uppercase mb-2">{testimonial.name}</span>
              <p className="text-[#ffffff] text-lg mb-4">{testimonial.message}</p>
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