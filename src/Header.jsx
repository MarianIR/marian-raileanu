// import { useState, useEffect } from "react";
// import openMenu from "/src/images/icon-hamburger (1).svg";
// import closeMenu from "/src/images/icon-close (1).svg";
// import Hero from "./Hero";
// import AboutMe from "./AboutMe";
// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   useEffect(() => {
//     const handleResize = () => {
//       setWindowWidth(window.innerWidth);
//       if (window.innerWidth > 768) {
//         setIsOpen(false);
//       }
//     };
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <header className="header">
//       <div className="menu-box" onClick={toggleMenu}>
//         {isOpen ? (
//           <img
//             src={openMenu}
//             alt="Open menu button"
//             className="open-menu-btn"
//             width={20}
//             height={20}
//           />
//         ) : (
//           <img
//             src={closeMenu}
//             alt="Close menu button"
//             className="close-menu-btn"
//             width={20}
//             height={20}
//           />
//         )}
//       </div>
//       {windowWidth > 768 || !isOpen ? (
//         <nav className="navigation">
//           <ul className="nav-list">
//             <li className="list-item">
//               <a href="#" className="list-link">
//                 Home
//               </a>
//             </li>
//             <li className="list-item">
//               <a href="#" className="list-link">
//                 About me
//               </a>
//             </li>
//             <li className="list-item">
//               <a href="#" className="list-link">
//                 Projects
//               </a>
//             </li>
//             <li className="list-item">
//               <a href="#" className="list-link">
//                 Contact
//               </a>
//             </li>
//           </ul>
//         </nav>
//       ) : null}
//     </header>
//   );
// };
// export default Header;
