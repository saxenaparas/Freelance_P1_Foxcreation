'use client'; // This is needed because we'll use interactivity

import { useState } from 'react';
import Image from 'next/image';
import { Link } from 'lucide-react';

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header>
      <div className="navbar-wrapper bg-slate-500">
        <nav className="navbar navbar-expand-xl">
          <div className="navbar-container ">
            <div className="logo-container">
              <a className="navbar-brand" href="/">
                <Image src="/images/shared-image.png" width={300} height={300} className="site-logo img-fluid" alt="Marko Logo" />
              </a>
              
            </div>
            <button 
              className="navbar-toggler nav-btn" 
              type="button" 
              onClick={() => setIsNavOpen(!isNavOpen)}
              aria-label="Toggle navigation"
            >
              <i className="fa-solid fa-bars"></i>
            </button>
            <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarNav">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about">About</a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link" href="/services" >
                    Services
                  </a>
                </li>
            {/*   <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button">
                    Pages <i className="fa-solid fa-angle-down accent-color"></i>
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="/case_studies">Case Studies</a></li>
                    <li><a className="dropdown-item" href="/team">Our Team</a></li>
                    <li><a className="dropdown-item" href="/partnership">Partnership</a></li>
                    <li><a className="dropdown-item" href="/pricing">Pricing Plan</a></li>
                    <li><a className="dropdown-item" href="/testimonial">Testimonial</a></li>
                    <li><a className="dropdown-item" href="/faq">FAQs</a></li>
                    <li><a className="dropdown-item" href="/404">Error 404</a></li>
                  </ul>
                </li>   
              <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button">
                    Archive <i className="fa-solid fa-angle-down accent-color"></i>
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="/blog">Blog</a></li>
                    <li><a className="dropdown-item" href="/single_post">Single Post</a></li>
                  </ul>
                </li>   */}  
                <li className="nav-item">
                  <a className="nav-link" href="/contact">Contact Us</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/blog">Blogs</a>
                </li>
              </ul>
            </div>
            <div className="navbar-action-container">
              <div className="navbar-action-button">
                <button id="themeSwitch" className="themeswitch" aria-label="Toggle Theme">
                  <i id="themeIcon" className="fas fa-moon"></i>
                </button>                      
              </div>
              <div className="navbar-icon-wrapper">
                <div className="icon-circle">
                  <i className="fa-solid fa-phone-volume"></i>
                </div>
                <h6> +91 9006016444</h6>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}