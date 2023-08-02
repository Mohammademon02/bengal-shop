import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Groceries from '../../../assets/category-items/Groceries.png'
import Fish from '../../../assets/category-items/Fish.png'
import Meat from '../../../assets/category-items/Meat.png'
import Vegetables from '../../../assets/category-items/Vegetables.png'
import Fruits from '../../../assets/category-items/Fruits.png'
import IceCream from '../../../assets/category-items/Ice-Cream.png'
import herobanner from '../../../assets/category-hero-bg.png'
import herobanner2 from '../../../assets/category-hero-bg-2.png'



const SearchCategory = () => {
    return (
        <section>
            {/* category heading */}
            <div className='flex items-center justify-between pb-4 border-b-2'>
                <h1 className='text-[#333333] text-2xl font-semibold'>Search by Category</h1>
                <div className='flex'>
                    <Link className='mr-3 p-3 rounded-full bg-[#F2F2F2] hover:bg-[#27AE60] hover:text-white'><FiChevronLeft></FiChevronLeft></Link>
                    <Link className='p-3 rounded-full bg-[#F2F2F2] hover:bg-[#27AE60] hover:text-white'><FiChevronRight></FiChevronRight></Link>
                </div>
            </div>

            {/* category menu list */}
            <div className='grid grid-cols-6 gap-5 mt-5 font-semibold'>

                <div className='p-6 bg-[#F7F7F7] hover:bg-[#EBFAEB] text-center cursor-pointer rounded-md'>
                    <img className='mx-auto' src={Groceries} alt="" />
                    <p>Groceries</p>
                </div >
                <div className='p-6 bg-[#F7F7F7] hover:bg-[#EBFAEB] text-center cursor-pointer rounded-md'>
                    <img className='mx-auto' src={Fish} alt="" />
                    <p>Fish</p>
                </div>
                <div className='p-6 bg-[#F7F7F7] hover:bg-[#EBFAEB] text-center cursor-pointer rounded-md'>
                    <img className='mx-auto' src={Meat} alt="" />
                    <p>Meat</p>
                </div>
                <div className='p-6 bg-[#F7F7F7] hover:bg-[#EBFAEB] text-center cursor-pointer rounded-md'>
                    <img className='mx-auto' src={Vegetables} alt="" />
                    <p>Vegetables</p>
                </div>
                <div className='p-6 bg-[#F7F7F7] hover:bg-[#EBFAEB] text-center cursor-pointer rounded-md'>
                    <img className='mx-auto' src={Fruits} alt="" />
                    <p>Fruits</p>
                </div>
                <div className='p-6 bg-[#F7F7F7] hover:bg-[#EBFAEB] text-center cursor-pointer rounded-md'>
                    <img className='mx-auto' src={IceCream} alt="" />
                    <p>Ice-Cream</p>
                </div>

            </div>

            {/* category banner */}
            <div className='mt-16 flex gap-5'>
                <div>
                    <img className='relative' src={herobanner} alt="" />
                    <div className='absolute top-1/2 transform translate-y-40 ml-16'>
                        <p className='text-[#FF5C00] font-semibold mb-1'>Buy 1 Get 1</p>
                        <h1 className='text-[#333333] text-5xl font-bold mb-7'>Fresh Fruits <br /> Collection</h1>
                        <button className='rounded-full px-6 py-2 bg-[#FFFFFF] hover:bg-[#F7F7F7] text-sm text-[#FF5C00] font-semibold'> <Link>Order Now</Link> </button>
                    </div>
                </div>

                <div>
                    <img className='relative' src={herobanner2} alt="" />
                    <div className='absolute top-1/2 transform translate-y-40 ml-16'>
                        <p className='text-[#FF5C00] font-semibold mb-1'>Buy 1 Get 1</p>
                        <h1 className='text-[#333333] text-5xl font-bold mb-7'>Fresh Fruits <br /> Collection</h1>
                        <button className='rounded-full px-6 py-2 bg-[#FFFFFF] hover:bg-[#F7F7F7] text-sm text-[#FF5C00] font-semibold'> <Link>Order Now</Link> </button>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default SearchCategory;