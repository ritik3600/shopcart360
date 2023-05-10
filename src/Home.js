import React from 'react'
import './Home.css'
import Product  from './Product'

function Home() {
  return (
    <div className='home'>
        <div className='hconatiner'>
            <img className='homeimg' src='https://images-eu.ssl-images-amazon.com/images/G/31/img2020/Vernac/2021/Gw-Hero/Mobile_tall_Hero_revision_3000x1200._CB604857279_.jpg' alt='not found'/>

        
            <div className='homerow'>
                <Product title='Best Watches' price={600} image="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wearables/PC_CategoryCard_379X304_1._SY304_CB614835787_.jpg" alt="not found" />

                <Product title='Laptop' price={30000} image="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Electronics/Clearance/Clearance_store_Desktop_CC_1x._SY304_CB628315133_.jpg" alt="not found" />

                <Product title='Mobile Phone' price={25000} image="https://rukminim1.flixcart.com/image/200/200/xif0q/cases-covers/back-cover/j/i/6/mycas-black-vv-y35-qcase-original-imagj87uwxzarrzk.jpeg?q=70" alt="not found" />
                
            </div>

            <div className='homerow'>
                <Product title='Gear cycle' price={8000} image="https://rukminim1.flixcart.com/image/200/200/l58iaa80/electric-cycle/i/y/f/-original-imagfykthgudy4qz.jpeg?q=70" alt="not found" />

                <Product title='Camera' price={15000} image="https://rukminim1.flixcart.com/image/200/200/kokdci80/dslr-camera/v/e/x/z-24-200mm-z5-nikon-original-imag2zuekuxgxsgg.jpeg?q=70" alt="not found" />

                <Product title='Slippers' price={199} image="https://rukminim1.flixcart.com/image/200/200/l3vxbbk0/sandal/m/h/m/9-2132-9-kzaara-white-original-imagewqrrnsgz6zf.jpeg?q=70" alt="not found" />

                <Product title='Best Book' price={299} image="https://m.media-amazon.com/images/I/71g2ednj0JL._AC_UY327_FMwebp_QL65_.jpg" alt="not found" />

                

            </div>

            <div className='homerow'>
                <Product title='Cashews' price={220} image="https://m.media-amazon.com/images/I/71tYPz++3+L._AC_UL600_FMwebp_QL65_.jpg" alt="not found" />

                <Product title='Matress' price={1000} image="https://m.media-amazon.com/images/I/81f2P-POnWL._AC_SY200_.jpg" alt="not found" />

                <Product title='Shoes' price={999} image="https://rukminim1.flixcart.com/image/200/200/l51d30w0/shoe/z/w/c/10-mrj1914-10-aadi-white-black-red-original-imagft9k9hydnfjp.jpeg?q=70" alt="not found" />
                
                <Product title='Laptop Bag' price={699} image="https://rukminim1.flixcart.com/image/200/200/ksnjp8w0/bag/6/l/8/46-stylish-tuff-quality-college-school-casual-bag-boys-girls-22-original-imag66bxhe7aedez.jpeg?q=70" alt="not found" />
                

            </div>
        </div>
    </div>
  )
}

export default Home