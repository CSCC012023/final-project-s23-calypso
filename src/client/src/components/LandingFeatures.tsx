import feature1 from '../assets/friends.png'
import bg1 from '../assets/background1.png'
import bg2 from '../assets/background2.png'
import bg3 from '../assets/background3.png'
import bg4 from '../assets/background4.png'
import feature2 from '../assets/paymentImg.png'
import feature3 from '../assets/analyticsImg.png'
import feature4 from '../assets/recommended.png'

const list = [
    {
        image: feature2,
        bgImg: bg1,
        title: 'Efficient Online Payments',
        description: 'Our app offers a hassle-free and secure way to make online payments. With a user-friendly interface and robust encryption, it ensures smooth transactions. Say goodbye to payment worries.',
    },
    {
        image: feature3,
        bgImg: bg2,
        title: 'Insightful Product Analytics',
        description: 'Discover your product\'s success with our powerful analytics tool. Our app\'s analytics page empowers you to track and visualize real-time data on product popularity. Gain valuable insights into which products are trending.'
    },
    {
        image: feature4,
        bgImg: bg3,
        title: 'Personalized Recommendations',
        description: 'Elevate your art and music experience with our cutting-edge recommendation algorithm. Our app analyzes your previous purchases to curate tailored suggestions that match your unique taste. Discover new and exciting art pieces and music tracks that resonate with your preferences.'
    },
    {
        image: feature1,
        bgImg: bg4,
        title: 'Seamless Collaboration',
        description: 'Unlock the potential of creativity with our app\'s messaging feature. Reach out to other users and talented artists for collaboration or customization requests. Our messaging platform makes it easy to spark innovation and bring artistic visions to life.'
    }
]

export const Features = () => {

  return (
    <section id='features-section' className='my-[150px]'>
      <div className="mx-auto">
        {/* Text */}
        <div className='text-center'>
            <h2 className='mb-6 xl:mb-12 text-[#222B4E]' style={{ fontFamily: 'sans-serif', fontSize: '36px' }} >Some Services We Offer</h2>
            <p className='lead max-w-[585px] mx-auto mb-16 xl:mb-24'>With our app you can do a lot of cool fun things idk what those are yet but i will change all these texts soon!</p>
        </div>
        {/* Feature List */}
        <div className='grid grid-cols-1 gap-[50px] lg:grid-cols-2'>
            {list.map((feature, index) => {
                const { image, bgImg, title, description } = feature;
                const delay = 600
                return (
                    <div className='w-full max-w-[530px] h-[360px] relative flex flex-col items-center justify-center xl:flex-row xl:justify-start mx-auto ' key={index}>
                        <div className='hidden lg:flex absolute top-0 right-0'>
                            <img style={{ width: 500, height: 320, opacity: 0.5 }} src={bgImg} alt="" />
                        </div>
                        <div style={{ position: 'relative', zIndex: 1 }}>
                            <img style={{ width: 150, height: 150 }} src={image} alt='' className='max-w-[120px] lg:max-w-[230px]'/>
                        </div>
                        <div>
                            <h3> {title} </h3>
                            <p> {description} </p>
                        </div>
                    </div>
                );
            })}
        </div>

      </div>
    </section>
  )
}