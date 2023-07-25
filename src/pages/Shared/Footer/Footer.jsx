import logo from '../../../assets/logo.png'
import appleLogo from '../../../assets/Apple-badge.png'
import playStoreLogo from '../../../assets/Play-store-badge.png'
import paypal from '../../../assets/paypal.png'
import visa from '../../../assets/visa.png'
import applePay from '../../../assets/applePay.png'
import googlePay from '../../../assets/googlePay.png'
import { Link } from 'react-router-dom';
import { BiLogoFacebook, BiLogoInstagram, BiLogoSkype, BiLogoTwitter } from 'react-icons/bi';

const Footer = () => {
    return (
        <footer className='bg-[#F5F5F5] mt-9'>
            <section className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 py-14'>
                {/* company details area */}
                <div>
                    <div className='flex items-center mb-6'>
                        <img src={logo} alt="" />
                        <h3 className='text-2xl font-semibold ml-2 text-[#333333]'>Bengal Shop</h3>
                    </div>

                    <p className='text-sm mb-7 text-[#4F4F4F]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla diam ornare nam est gravida. <br /> Netus viverra rhoncus sit magna sapien ac eget parturient id. Est luctus dapibus quam <br /> aliquam in nisl turpis. Elit et dictum lacus morbi nec accumsan a in.</p>

                    <div className='flex gap-4'>
                        <Link><img src={appleLogo} alt="" /></Link>
                        <Link><img src={playStoreLogo} alt="" /></Link>
                    </div>
                </div>

                {/* footer menu area */}
                <div className='grid grid-cols-2' >
                    <div className='flex flex-col'>
                        <h3 className='text-[#4F4F4F] font-semibold mb-8'>About Us</h3>
                        <Link className='mb-5 text-sm text-[#828282]'>About Karte</Link>
                        <Link className='mb-5 text-sm text-[#828282]'>Contact</Link>
                        <Link className='mb-5 text-sm text-[#828282]'>Career</Link>
                        <Link className='mb-5 text-sm text-[#828282]'>Terms & Conditions</Link>
                        <Link className='mb-5 text-sm text-[#828282]'>Category</Link>
                    </div>
                    <div className='flex flex-col'>
                        <h3 className='text-[#4F4F4F] font-semibold mb-8'>Info</h3>
                        <Link className='mb-5 text-sm text-[#828282]'>Information</Link>
                        <Link className='mb-5 text-sm text-[#828282]'>Shipping</Link>
                        <Link className='mb-5 text-sm text-[#828282]'>Payment</Link>
                        <Link className='mb-5 text-sm text-[#828282]'>Return</Link>
                        <Link className='mb-5 text-sm text-[#828282]'>Blog</Link>
                    </div>
                </div>

            </section>


            {/* footer social area */}
            <section className='container mx-auto pb-8 sm:flex-none md:flex items-center justify-between '>
                <div className='flex'>
                    <Link className='px-3 py-3 rounded-lg bg-[#FFFFFF] hover:bg-[#FF5E4D] mr-4 text-black hover:text-white'> <BiLogoFacebook /> </Link>
                    <Link className='px-3 py-3 rounded-lg bg-[#FFFFFF] hover:bg-[#FF5E4D] mr-4 text-black hover:text-white'><BiLogoInstagram /> </Link>
                    <Link className='px-3 py-3 rounded-lg bg-[#FFFFFF] hover:bg-[#FF5E4D] mr-4 text-black hover:text-white'> <BiLogoTwitter /> </Link>
                    <Link className='px-3 py-3 rounded-lg bg-[#FFFFFF] hover:bg-[#FF5E4D] mr-4 text-black hover:text-white'> <BiLogoSkype /> </Link>
                </div>
                <p className='text-sm text-[#828282]'><small>@2022 Copyright All Right Reserved by Bengal Shop</small></p>

                <div className='flex gap-4'>
                    <Link><img src={paypal} alt="" /></Link>
                    <Link><img src={visa} alt="" /></Link>
                    <Link><img src={applePay} alt="" /></Link>
                    <Link><img src={googlePay} alt="" /></Link>
                </div>
            </section>
        </footer>
    );
};

export default Footer;