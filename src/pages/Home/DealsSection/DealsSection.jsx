import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import items1 from '../../../assets/deal-items-1.png'
import items3 from '../../../assets/deal-items-3.png'
import items4 from '../../../assets/deal-items-4.png'
import items5 from '../../../assets/deal-items-5.png'


const DealsSection = () => {
    return (
        <section className="mt-16">
            {/* deals of the week heading */}
            <div className='flex items-center justify-between pb-4 border-b-2'>
                <h1 className='text-[#333333] text-2xl font-semibold'>Deals of the Week</h1>
                <div className='flex'>
                    <Link className='mr-3 p-3 rounded-full bg-[#F2F2F2] hover:bg-[#27AE60] hover:text-white'><FiChevronLeft></FiChevronLeft></Link>
                    <Link className='p-3 rounded-full bg-[#F2F2F2] hover:bg-[#27AE60] hover:text-white'><FiChevronRight></FiChevronRight></Link>
                </div>
            </div>


            {/* week deals items */}
            <div className="grid grid-cols-5 gap-5 mt-10">
                <div className="text-center">
                    <img className="mx-auto" src={items1} alt="" />
                    <div className="flex items-center justify-center mt-3">
                        <FaStar className="text-[#FABE50]"></FaStar>
                        <FaStar className="text-[#FABE50]"></FaStar>
                        <FaStar className="text-[#FABE50]"></FaStar>
                        <FaStar className="text-[#FABE50]"></FaStar>
                        <FaStar className="text-[#FABE50] mr-2"></FaStar>
                        <span > (119) </span>
                    </div>
                    <p className="text-lg font-semibold my-2">Product Name</p>
                    <p className="text-lg font-semibold mb-2">$200</p>
                    <button className='w-full py-3 rounded-full  hover:bg-[#27AE60] border text-[#27AE60] hover:text-white font-semibold'> Add to Cart</button>
                </div>
                <div className="text-center">
                    <img className="mx-auto" src={items3} alt="" />
                    <div className="flex items-center justify-center mt-3">
                        <FaStar className="text-[#FABE50]"></FaStar>
                        <FaStar className="text-[#FABE50]"></FaStar>
                        <FaStar className="text-[#FABE50]"></FaStar>
                        <FaStar className="text-[#FABE50]"></FaStar>
                        <FaStar className="text-[#FABE50] mr-2"></FaStar>
                        <span > (119) </span>
                    </div>
                    <p className="text-lg font-semibold my-2">Product Name</p>
                    <p className="text-lg font-semibold mb-2">$200</p>
                    <button className='w-full py-3 rounded-full  hover:bg-[#27AE60] border text-[#27AE60] hover:text-white font-semibold'> Add to Cart</button>
                </div>
                <div className="text-center">
                    <img className="mx-auto" src={items4} alt="" />
                    <div className="flex items-center justify-center mt-3">
                        <FaStar className="text-[#FABE50]"></FaStar>
                        <FaStar className="text-[#FABE50]"></FaStar>
                        <FaStar className="text-[#FABE50]"></FaStar>
                        <FaStar className="text-[#FABE50]"></FaStar>
                        <FaStar className="text-[#FABE50] mr-2"></FaStar>
                        <span > (119) </span>
                    </div>
                    <p className="text-lg font-semibold my-2">Product Name</p>
                    <p className="text-lg font-semibold mb-2">$200</p>
                    <button className='w-full py-3 rounded-full  hover:bg-[#27AE60] border text-[#27AE60] hover:text-white font-semibold'> Add to Cart</button>
                </div>
                <div className="text-center">
                    <img className="mx-auto" src={items5} alt="" />
                    <div className="flex items-center justify-center mt-3">
                        <FaStar className="text-[#FABE50]"></FaStar>
                        <FaStar className="text-[#FABE50]"></FaStar>
                        <FaStar className="text-[#FABE50]"></FaStar>
                        <FaStar className="text-[#FABE50]"></FaStar>
                        <FaStar className="text-[#FABE50] mr-2"></FaStar>
                        <span > (119) </span>
                    </div>
                    <p className="text-lg font-semibold my-2">Product Name</p>
                    <p className="text-lg font-semibold mb-2">$200</p>
                    <button className='w-full py-3 rounded-full  hover:bg-[#27AE60] border text-[#27AE60] hover:text-white font-semibold'> Add to Cart</button>
                </div>
                <div className="text-center">
                    <img className="mx-auto" src={items5} alt="" />
                    <div className="flex items-center justify-center mt-3">
                        <FaStar className="text-[#FABE50]"></FaStar>
                        <FaStar className="text-[#FABE50]"></FaStar>
                        <FaStar className="text-[#FABE50]"></FaStar>
                        <FaStar className="text-[#FABE50]"></FaStar>
                        <FaStar className="text-[#FABE50] mr-2"></FaStar>
                        <span > (119) </span>
                    </div>
                    <p className="text-lg font-semibold my-2">Product Name</p>
                    <p className="text-lg font-semibold mb-2">$200</p>
                    <button className='w-full py-3 rounded-full  hover:bg-[#27AE60] border text-[#27AE60] hover:text-white font-semibold'> Add to Cart</button>
                </div>
                
            </div>

        </section>
    );
};

export default DealsSection;