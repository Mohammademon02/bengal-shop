import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import brand1 from '../../../assets/brand-icons/brand-1.png'
import brand2 from '../../../assets/brand-icons/brand-2.png'
import brand3 from '../../../assets/brand-icons/brand-3.png'
import brand4 from '../../../assets/brand-icons/brand-4.png'
import brand5 from '../../../assets/brand-icons/brand-5.png'
import brand6 from '../../../assets/brand-icons/brand-6.png'
import HotDealSection from "./HotDealSection";
import SupportSection from "./SupportSection";


const PopularBrandSection = () => {
    return (
        <section className="mt-14">
            <div className='flex items-center justify-between pb-4 border-b-2'>
                <h1 className='text-[#333333] text-2xl font-semibold'>Popular Brands</h1>
                <div className='flex'>
                    <Link className='mr-3 p-3 rounded-full bg-[#F2F2F2] hover:bg-[#27AE60] hover:text-white'><FiChevronLeft></FiChevronLeft></Link>
                    <Link className='p-3 rounded-full bg-[#F2F2F2] hover:bg-[#27AE60] hover:text-white'><FiChevronRight></FiChevronRight></Link>
                </div>
            </div>


            <div className="grid grid-cols-6 gap-5 items-center justify-between mt-7">
                <img className="mx-auto" src={brand1} alt="" />
                <img className="mx-auto" src={brand2} alt="" />
                <img className="mx-auto" src={brand3} alt="" />
                <img className="mx-auto" src={brand4} alt="" />
                <img className="mx-auto" src={brand5} alt="" />
                <img className="mx-auto" src={brand6} alt="" />
            </div>

            <HotDealSection></HotDealSection>
            <SupportSection></SupportSection>
        </section>
    );
};

export default PopularBrandSection;