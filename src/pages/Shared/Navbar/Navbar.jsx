import logo from '../../../assets/logo.png'
import { MdOutlineShoppingBag } from 'react-icons/md';
import { FiUser } from 'react-icons/fi';
import { CgMenuLeftAlt } from 'react-icons/cg';
import { FiChevronDown } from 'react-icons/fi';
import { BiSearch } from 'react-icons/bi';
import { AiFillCaretDown, AiOutlineHeart } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>

            <div className='flex items-center justify-between'>
                {/* nav logo */}
                <div className='flex items-center'>
                    <img src={logo} alt="" />
                    <h3 className='text-2xl font-semibold ml-2 text-[#333333]'>Bengal Shop</h3>
                </div>

                {/* navbar search input */}
                <div className='relative w-1/3'>
                    <input
                        type="text"
                        placeholder="Search here......"
                        className="w-full px-10 py-3 border border-gray-300 rounded-full focus:outline-none "
                    />
                    <BiSearch className='absolute left-4 top-4 text-lg text-[#4F4F4F]' />
                    <button
                        type="button"
                        className="absolute right-2 bottom-2 px-4 py-1.5 bg-[#4F4F4F] text-white rounded-full focus:outline-none "
                    >
                        Search
                    </button>
                </div>

                {/* account and cart section */}
                <div className='flex items-center'>
                    <p className='text-[#4F4F4F] mr-4'>
                        <AiOutlineHeart/>
                    </p>
                    <p className='ml-4 text-[#4F4F4F]'>
                        <MdOutlineShoppingBag />
                    </p>
                    <span className='p-3 bg-[#F2F2F2] rounded-full ml-6'>
                        <FiUser />
                    </span>
                    <p className='text-[#4F4F4F] ml-2'>Account</p>
                </div>

            </div>

            {/* all Categories button and menu button */}
            <div className='mt-4 flex items-center justify-between'>
                <div className='bg-[#27AE60] inline-flex items-center text-white px-4 py-2 rounded-full '>
                    <CgMenuLeftAlt /> <span className='px-12'>All Categories</span> <FiChevronDown />
                </div>
                <div className='flex'>
                    <Link className='mr-9 inline-flex items-center text-[#4F4F4F]'>Home <AiFillCaretDown className='ml-2' /> </Link>
                    <Link className='mr-9 inline-flex items-center text-[#4F4F4F]'>Shop  <AiFillCaretDown className='ml-2' /></Link>
                    <Link className='mr-9 inline-flex items-center text-[#4F4F4F]'>Page  <AiFillCaretDown className='ml-2' /></Link>
                    <Link className='mr-9 inline-flex items-center text-[#4F4F4F]'>Blogs  <AiFillCaretDown className='ml-2' /></Link>
                    <Link className='mr-9 inline-flex items-center text-[#4F4F4F]'>Contract  <AiFillCaretDown className='ml-2' /></Link>
                    <Link className='mr-9 inline-flex items-center text-[#4F4F4F]'>Track Order  <AiFillCaretDown className='ml-2' /></Link>
                </div>
                <div>
                    <p className='text-[#FF5C00] font-semibold'>
                        <span className='mr-2'>%</span>
                        Special Offers!
                    </p>
                </div>
            </div>

        </nav>
    );
};

export default Navbar;