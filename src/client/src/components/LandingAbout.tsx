import landingimg from '../assets/landingimg1.png'

export const About = () => {

  return (
    <section id='about-section' className="my-[30px] xl:mt-[100px]" data-aos='fade-up' data-aos-offeset='350'>
      <div className="container mx-auto">
        <div className='bg-menu/[15%] rounded-[50px] min-h-[560px] px-12 pb-0 flex flex-col xl:flex-row xl: items-center text-left gap-x-[60px]'>
          {/* Image */}
          <div className='flex-1' data-aos='zoom-in-left'>
            <img src={ landingimg } alt="" />
          </div>

          {/* Text */}
          <div className='flex-1 pr-12'>
            <h2 data-aos='fade-up' data-aos-delay='300' className='mb-10 text-[#222B4E]' style={{ fontFamily: 'sans-serif', fontSize: '36px' }}>Find Out More About Us</h2>
            <p data-aos='fade-up' data-aos-delay='400' className='max-w-[470px] mx-0'>We are a small start up company bla hblah flsfnklsfn skfsl;kafkldfjnsdkljfnslkfjnaskljfn sklfnaslkfansflksnfklasfjnlsk jfnasklfnslkjfnslkfjsnflkjsnfa.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
