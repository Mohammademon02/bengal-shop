import logo from '../../../assets/logo.png'
import { MdOutlineShoppingBag } from 'react-icons/md';
import { FiUser } from 'react-icons/fi';
import { CgMenuLeftAlt } from 'react-icons/cg';
import { FiChevronDown, FiMenu } from 'react-icons/fi';
import { BiSearch } from 'react-icons/bi';
import { AiFillCaretDown, AiOutlineHeart, AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleMobileMenuToggle = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav>

            <div className='flex items-center justify-between mt-4'>
                {/* nav logo */}
                <div className='flex items-center'>
                    <img src={logo} alt="" />
                    <h3 className='text-2xl font-semibold ml-2 text-[#333333]'>Bengal Shop</h3>
                </div>

                {/* navbar search input */}
                <div className='relative w-1/3 hidden sm:block'>
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
                    <Link className='text-[#4F4F4F] mr-4'><AiOutlineHeart /></Link>

                    <Link className='ml-4 text-[#4F4F4F]'><MdOutlineShoppingBag /></Link>

                    <Link className='text-[#4F4F4F]'>
                        <span className='p-3 bg-[#F2F2F2] hover:bg-[#27AE60] hover:text-white rounded-full ml-6 mr-2 inline-flex'>
                            <FiUser />
                        </span>
                        Account
                    </Link>
                </div>

                <div className="sm:hidden">
                    <button
                        onClick={handleMobileMenuToggle}
                        className="text-[#4F4F4F] focus:outline-none"
                    >
                        {isMobileMenuOpen ? (
                            <AiOutlineClose />
                        ) : (
                            <FiMenu />
                        )}

                    </button>
                </div>

            </div>

            {/* all Categories button and menu  */}
            <div className='mt-4 flex items-center justify-between'>
                <div className={`hidden sm:flex items-center space-x-4 ${isMobileMenuOpen ? 'flex' : 'hidden'}`}>
                    <Link className='bg-[#27AE60] inline-flex items-center text-white px-4 py-2 rounded-full mr-48' ><CgMenuLeftAlt /> <span className='px-12'>All Categories</span> <FiChevronDown /></Link>
                    <Link className='mr-9 inline-flex items-center text-[#4F4F4F]'>Home <AiFillCaretDown className='ml-2' /> </Link>
                    <Link className='mr-9 inline-flex items-center text-[#4F4F4F]'>Shop  <AiFillCaretDown className='ml-2' /></Link>
                    <Link className='mr-9 inline-flex items-center text-[#4F4F4F]'>Page  <AiFillCaretDown className='ml-2' /></Link>
                    <Link className='mr-9 inline-flex items-center text-[#4F4F4F]'>Blogs  <AiFillCaretDown className='ml-2' /></Link>
                    <Link className='mr-9 inline-flex items-center text-[#4F4F4F]'>Contract  <AiFillCaretDown className='ml-2' /></Link>
                    <Link className='mr-9 inline-flex items-center text-[#4F4F4F]'>Track Order  <AiFillCaretDown className='ml-2' /></Link>
                </div>
                <div className='hidden sm:block'>
                    <p className='text-[#FF5C00] font-semibold'>
                        <span className='mr-2'>%</span>
                        Special Offers!
                    </p>
                </div>
            </div>

            {/* menu for mobile */}
            {isMobileMenuOpen && (
                <div className="sm:hidden ">
                    <Link className="block text-[#4F4F4F] ml-2">Home </Link>
                    <Link className="block text-[#4F4F4F] ml-2 mt-2">Shop </Link>
                    <Link className="block text-[#4F4F4F] ml-2 mt-2">Page </Link>
                    <Link className="block text-[#4F4F4F] ml-2 mt-2">Blogs </Link>
                    <Link className="block text-[#4F4F4F] ml-2 mt-2">Contract </Link>
                    <Link className="block text-[#4F4F4F] ml-2 mt-2">Track Order </Link>
                    <Link className='bg-[#27AE60] ml-2 mt-2 inline-flex items-center text-white px-3 py-1 rounded-full mr-48' ><CgMenuLeftAlt /> <span className='px-4'>All Categories</span> <FiChevronDown /></Link>
                </div>
            )}

        </nav>
    );
};

export default Navbar;