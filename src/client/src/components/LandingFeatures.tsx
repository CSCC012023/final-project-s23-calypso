import landingimg from '../assets/landingimg1.png'
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
        title: 'Seemless Online Payments',
        description: 'idk bro',
    },
    {
        image: feature3,
        bgImg: bg2,
        title: 'Analytics',
        description: 'idk2 bro'
    },
    {
        image: feature4,
        bgImg: bg3,
        title: 'Recommendations',
        description: 'idk3 bro'
    },
    {
        image: feature1,
        bgImg: bg4,
        title: 'Chat With Your Favourtie Artists',
        description: 'idk4 bro'
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
                        <div>{ title }</div>
                    </div>
                );
            })}
        </div>

      </div>
    </section>
  )
}
