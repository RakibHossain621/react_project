import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import { FiAlignJustify } from "react-icons/fi";

const navList = [
  { title: 'Home', path: '/' },
  { title: 'About', path: '/about' },
  { title: 'Services', path: '/services' },
  { title: 'Location', path: '/location' },
  { title: 'Blog', path: '/blog' }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
   console.log(location)
  let bgColor = '';
  if (location.pathname === '/blog') {
    bgColor = '#EEF2FF';
  }

  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  return (
    <header className='relative'>
      <div className="flex_container" style={{ backgroundColor: bgColor }}>
        <div className="logo">
        <svg width="207" height="38" viewBox="0 0 207 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="86.5556" height="38" fill="#2947A9"/>
            <path d="M16.2951 13.5268C16.1991 12.6752 15.8033 12.0154 15.1076 11.5476C14.4119 11.0738 13.5362 10.8369 12.4807 10.8369C11.725 10.8369 11.0713 10.9569 10.5195 11.1968C9.96775 11.4307 9.53893 11.7545 9.23306 12.1684C8.93318 12.5762 8.78325 13.041 8.78325 13.5628C8.78325 14.0006 8.8852 14.3784 9.08912 14.6963C9.29903 15.0142 9.57192 15.2811 9.90777 15.497C10.2496 15.7069 10.6155 15.8838 11.0053 16.0278C11.3951 16.1657 11.77 16.2796 12.1298 16.3696L13.9291 16.8374C14.5168 16.9813 15.1196 17.1763 15.7373 17.4222C16.3551 17.6681 16.9278 17.9919 17.4556 18.3938C17.9834 18.7956 18.4092 19.2934 18.7331 19.8871C19.0629 20.4809 19.2279 21.1916 19.2279 22.0192C19.2279 23.0628 18.958 23.9894 18.4182 24.7991C17.8844 25.6087 17.1077 26.2474 16.0882 26.7153C15.0746 27.1831 13.8481 27.417 12.4087 27.417C11.0293 27.417 9.8358 27.198 8.82823 26.7602C7.82065 26.3224 7.03199 25.7017 6.46222 24.898C5.89246 24.0884 5.5776 23.1288 5.51762 22.0192H8.30645C8.36043 22.6849 8.57633 23.2397 8.95418 23.6835C9.33801 24.1213 9.82681 24.4482 10.4206 24.6641C11.0203 24.874 11.677 24.979 12.3907 24.979C13.1764 24.979 13.8751 24.856 14.4868 24.6101C15.1046 24.3582 15.5904 24.0104 15.9442 23.5666C16.2981 23.1168 16.475 22.592 16.475 21.9922C16.475 21.4465 16.3191 20.9997 16.0072 20.6518C15.7013 20.3039 15.2845 20.0161 14.7567 19.7882C14.235 19.5603 13.6442 19.3593 12.9845 19.1854L10.8074 18.5917C9.33202 18.1898 8.16251 17.5991 7.29887 16.8194C6.44123 16.0397 6.01241 15.0082 6.01241 13.7247C6.01241 12.6632 6.30029 11.7366 6.87605 10.9449C7.45181 10.1532 8.23148 9.53848 9.21507 9.10067C10.1987 8.65685 11.3082 8.43495 12.5437 8.43495C13.7911 8.43495 14.8917 8.65385 15.8453 9.09167C16.8049 9.52949 17.5606 10.1322 18.1123 10.8999C18.6641 11.6616 18.952 12.5372 18.976 13.5268H16.2951ZM22.5497 27.1111V8.68684H25.3295V16.6935H34.5147V8.68684H37.3035V27.1111H34.5147V19.0775H25.3295V27.1111H22.5497ZM44.1316 8.68684V27.1111H41.3518V8.68684H44.1316ZM63.0506 8.68684V27.1111H60.4957L51.1307 13.5988H50.9597V27.1111H48.1799V8.68684H50.7528L60.1269 22.2171H60.2978V8.68684H63.0506ZM67.1057 27.1111V8.68684H78.6568V11.0798H69.8855V16.6935H78.0541V19.0775H69.8855V24.7181H78.7648V27.1111H67.1057Z" fill="white"/>
         <path d="M92.802 27.1111V8.68684H99.3692C100.797 8.68684 101.981 8.93274 102.923 9.42453C103.87 9.91632 104.578 10.597 105.046 11.4667C105.514 12.3303 105.748 13.3289 105.748 14.4624C105.748 15.5899 105.511 16.5825 105.037 17.4402C104.569 18.2918 103.861 18.9545 102.914 19.4283C101.972 19.9021 100.788 20.139 99.3602 20.139H94.3853V17.746H99.1083C100.008 17.746 100.74 17.6171 101.303 17.3592C101.873 17.1013 102.29 16.7265 102.554 16.2347C102.818 15.7429 102.95 15.1521 102.95 14.4624C102.95 13.7667 102.815 13.164 102.545 12.6542C102.281 12.1444 101.864 11.7545 101.294 11.4847C100.731 11.2088 99.99 11.0708 99.0723 11.0708H95.5818V27.1111H92.802ZM101.897 18.7986L106.449 27.1111H103.283L98.8204 18.7986H101.897ZM148.07 27.1111V8.68684H159.495V11.0798H150.85V16.6935H158.677V19.0775H150.85V27.1111H148.07ZM165.694 8.68684V27.1111H162.914V8.68684H165.694ZM184.613 8.68684V27.1111H182.058L172.693 13.5988H172.522V27.1111H169.742V8.68684H172.315L181.689 22.2171H181.86V8.68684H184.613ZM201.137 14.5074C200.963 13.9616 200.729 13.4728 200.435 13.041C200.147 12.6032 199.802 12.2313 199.4 11.9255C198.999 11.6136 198.54 11.3767 198.024 11.2148C197.514 11.0528 196.953 10.9719 196.342 10.9719C195.304 10.9719 194.368 11.2388 193.535 11.7725C192.701 12.3063 192.041 13.089 191.556 14.1206C191.076 15.1461 190.836 16.4026 190.836 17.89C190.836 19.3833 191.079 20.6458 191.565 21.6774C192.05 22.7089 192.716 23.4916 193.562 24.0254C194.407 24.5592 195.37 24.826 196.45 24.826C197.451 24.826 198.324 24.6221 199.067 24.2143C199.817 23.8065 200.396 23.2307 200.804 22.487C201.218 21.7373 201.425 20.8557 201.425 19.8421L202.144 19.9771H196.872V17.6831H204.114V19.7792C204.114 21.3265 203.785 22.67 203.125 23.8095C202.471 24.943 201.565 25.8186 200.408 26.4364C199.256 27.0541 197.937 27.363 196.45 27.363C194.782 27.363 193.319 26.9791 192.059 26.2115C190.806 25.4438 189.828 24.3552 189.127 22.9458C188.425 21.5304 188.074 19.8511 188.074 17.908C188.074 16.4386 188.278 15.1191 188.686 13.9496C189.094 12.7801 189.666 11.7875 190.404 10.9719C191.148 10.1502 192.02 9.52349 193.022 9.09167C194.03 8.65385 195.13 8.43495 196.324 8.43495C197.319 8.43495 198.246 8.58188 199.103 8.87576C199.967 9.16964 200.735 9.58646 201.407 10.1262C202.084 10.666 202.645 11.3077 203.089 12.0514C203.533 12.7891 203.832 13.6078 203.988 14.5074H201.137Z" fill="#211F1E"/>
        <path d="M125.134 17.899C125.134 19.8661 124.775 21.5574 124.055 22.9728C123.335 24.3822 122.349 25.4678 121.095 26.2295C119.848 26.9851 118.429 27.363 116.84 27.363C115.245 27.363 113.82 26.9851 112.567 26.2295C111.319 25.4678 110.336 24.3792 109.616 22.9638C108.896 21.5484 108.536 19.8601 108.536 17.899C108.536 15.9318 108.896 14.2435 109.616 12.8341C110.336 11.4187 111.319 10.3331 112.567 9.57747C113.82 8.81579 115.245 8.43495 116.84 8.43495C118.429 8.43495 119.848 8.81579 121.095 9.57747C122.349 10.3331 123.335 11.4187 124.055 12.8341C124.775 14.2435 125.134 15.9318 125.134 17.899ZM122.382 17.899C122.382 16.3996 122.139 15.1371 121.653 14.1116C121.173 13.08 120.513 12.3003 119.674 11.7725C118.84 11.2388 117.895 10.9719 116.84 10.9719C115.778 10.9719 114.831 11.2388 113.997 11.7725C113.163 12.3003 112.504 13.08 112.018 14.1116C111.538 15.1371 111.298 16.3996 111.298 17.899C111.298 19.3983 111.538 20.6638 112.018 21.6954C112.504 22.7209 113.163 23.5006 113.997 24.0344C114.831 24.5622 115.778 24.826 116.84 24.826C117.895 24.826 118.84 24.5622 119.674 24.0344C120.513 23.5006 121.173 22.7209 121.653 21.6954C122.139 20.6638 122.382 19.3983 122.382 17.899ZM144.604 17.899C144.604 19.8661 144.245 21.5574 143.525 22.9728C142.805 24.3822 141.819 25.4678 140.565 26.2295C139.318 26.9851 137.899 27.363 136.31 27.363C134.715 27.363 133.29 26.9851 132.037 26.2295C130.789 25.4678 129.806 24.3792 129.086 22.9638C128.366 21.5484 128.006 19.8601 128.006 17.899C128.006 15.9318 128.366 14.2435 129.086 12.8341C129.806 11.4187 130.789 10.3331 132.037 9.57747C133.29 8.81579 134.715 8.43495 136.31 8.43495C137.899 8.43495 139.318 8.81579 140.565 9.57747C141.819 10.3331 142.805 11.4187 143.525 12.8341C144.245 14.2435 144.604 15.9318 144.604 17.899ZM141.852 17.899C141.852 16.3996 141.609 15.1371 141.123 14.1116C140.643 13.08 139.983 12.3003 139.144 11.7725C138.31 11.2388 137.365 10.9719 136.31 10.9719C135.248 10.9719 134.301 11.2388 133.467 11.7725C132.633 12.3003 131.974 13.08 131.488 14.1116C131.008 15.1371 130.768 16.3996 130.768 17.899C130.768 19.3983 131.008 20.6638 131.488 21.6954C131.974 22.7209 132.633 23.5006 133.467 24.0344C134.301 24.5622 135.248 24.826 136.31 24.826C137.365 24.826 138.31 24.5622 139.144 24.0344C139.983 23.5006 140.643 22.7209 141.123 21.6954C141.609 20.6638 141.852 19.3983 141.852 17.899Z" fill="#FF5733"/>
       <rect x="90.7778" width="116.111" height="2.11111" fill="#211F1E"/>
     <rect x="90.7778" y="35.8889" width="116.111" height="2.11111" fill="#211F1E"/>
     </svg>

        </div>

        <ul className={`list_item z-20 ${isOpen ? 'show' : ''}`}>
          {navList.map(({ title, path }) => (
            <li key={title}>
              <Link to={path}>{title}</Link>
            </li>
          ))}
         <div className='flex justify-center items-center'>
         <Link to='/contact-us'>
            <button className='contact_btn'>Contact us</button>
          </Link>
         </div>
         
        </ul>

        <button onClick={handleClick} className="mobile_icon text-black">
          {isOpen ? setIsOpen  : ''}
          <FiAlignJustify />
        </button>
      </div>
    </header>
  );
}

export default Navbar;




        
// {
//   mobileIcon ? (
//     <ul className='list_item'>
//   {navList.map(({ title, path }) => (
//     <li key={title}>
//       <Link to={path}>{title}</Link>
//     </li>
//   ))}
//   <button className='contact_btn'>Contact us</button>
// </ul>
//   ) : ""
//  }
