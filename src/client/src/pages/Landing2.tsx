import Header from '../components/LandingHeader'
import {About} from '../components/LandingAbout'
import {Features} from '../components/LandingFeatures'
import landingimg from '../assets/landingimg1.png'
import Footer from '../components/common/Footer'


const buttonStyle = {
  padding: '12px 24px',
  fontSize: '15px',
  fontWeight: 'bold',
  color: '#fff',
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
      <div >
        <Footer />
      </div>
    </div>
  )
}