import React from 'react'

const about = () => {
    return (
        <>
            <div className="section-banner">
                <div className="banner-layout-wrapper">
                    <div className="banner-layout">
                        <div className="d-flex flex-column text-center align-items-center gspace-2">
                            <h2
                                className="title-heading animate-box animated animate__animated"
                                data-animate="animate__fadeInRight"
                            >
                                About Marko
                            </h2>
                            <nav className="breadcrumb">
                                <a href="./index.html" className="gspace-2">
                                    Home
                                </a>
                                <span className="separator-link">/</span>
                                <p className="current-page">About Us</p>
                            </nav>
                        </div>
                        <div className="spacer" />
                    </div>
                </div>
            </div>
            {/* Section About Us */}
            <div className="section">
                <div className="hero-container">
                    <div className="d-flex flex-column flex-xl-row gspace-5">
                        <div className="about-img-layout">
                            <div className="image-container about-img">
                                <img
                                    src="./image/working-job-career-casual-showing-SJZWF3N-1024x737.jpg"
                                    alt="About Us Image"
                                    className="img-fluid animate-box animated animate__animated"
                                    data-animate="animate__fadeInUp"
                                />
                                <div className="about-layout">
                                    <div className="d-flex flex-column">
                                        <div className="card-about-wrapper">
                                            <div
                                                className="card card-about animate-box animated animate__animated"
                                                data-animate="animate__fadeInDown"
                                            >
                                                <div className="d-flex flex-row align-items-center">
                                                    <span className="counter" data-target={21} />
                                                    <span className="counter-detail">+</span>
                                                </div>
                                                <h6>Years of Experience on Digital Marketing Services</h6>
                                            </div>
                                        </div>
                                        <div className="about-spacer" />
                                    </div>
                                    <div className="about-spacer" />
                                </div>
                            </div>
                        </div>
                        <div className="about-title">
                            <div className="d-flex flex-column gspace-2">
                                <div
                                    className="sub-heading animate-box animated animate__animated"
                                    data-animate="animate__fadeInRight"
                                >
                                    <i className="fa-regular fa-circle-dot" />
                                    <span>About Us</span>
                                </div>
                                <h2
                                    className="title-heading animate-box animated animate__animated"
                                    data-animate="animate__fadeInRight"
                                >
                                    Who We Are &amp; What Drives Us
                                </h2>
                                <p>
                                    At Marko, we specialize in crafting innovative digital marketing
                                    strategies that drive real business growth. Our about ensures your
                                    brand stays ahead in the competitive digital landscape.
                                </p>
                                <p>
                                    Get to know the passionate team behind the strategies, the values
                                    that guide us, and the mission that fuels our growth.
                                </p>
                                <div className="d-flex flex-column flex-md-row gspace-1 gspace-md-5">
                                    <div className="about-list">
                                        <ul className="check-list">
                                            <li>
                                                <a href="./single_services.html">PPC &amp; Paid Ads</a>
                                            </li>
                                            <li>
                                                <a href="./single_services.html">Brand Strategy</a>
                                            </li>
                                            <li>
                                                <a href="./single_services.html">Conversion Optimization</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="about-list">
                                        <ul className="check-list">
                                            <li>
                                                <a href="./single_services.html">Performance Marketing</a>
                                            </li>
                                            <li>
                                                <a href="./single_services.html">Social Media Growth</a>
                                            </li>
                                            <li>
                                                <a href="./single_services.html">Content Marketing</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Section Partner */}
            <div className="section-partner">
                <div className="hero-container">
                    <div
                        className="card card-partner animate-box animated animate__animated"
                        data-animate="animate__fadeInRight"
                    >
                        <div className="partner-spacer" />
                        <div className="row row-cols-xl-2 row-cols-1 align-items-center px-5 position-relative z-2">
                            <div className="col">
                                <div className="d-flex flex-column justify-content-start pe-xl-3 pe-0">
                                    <h3 className="title-heading">Powering Success for Top Brands</h3>
                                </div>
                            </div>
                            <div className="col">
                                <div className="d-flex flex-column ps-xl-3 ps-0">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ex
                                        ligula, varius at rutrum et, finibus sed felis. Quisque eget
                                        tincidunt lectus. Sed quis diam sed neque mattis feugiat.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="swiperPartner-layout">
                            <div className="swiperPartner-overlay">
                                <div className="spacer" />
                            </div>
                            <div className="swiperPartner-container">
                                <div className="swiper swiperPartner">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <a href="#">
                                                <div className="partner-slide">
                                                    <img
                                                        src="./image/client-7.png"
                                                        alt="Client"
                                                        className="partner-logo img-fluid"
                                                    />
                                                </div>
                                            </a>
                                        </div>
                                        <div className="swiper-slide">
                                            <a href="#">
                                                <div className="partner-slide">
                                                    <img
                                                        src="./image/client-6.png"
                                                        alt="Client"
                                                        className="partner-logo img-fluid"
                                                    />
                                                </div>
                                            </a>
                                        </div>
                                        <div className="swiper-slide">
                                            <a href="#">
                                                <div className="partner-slide">
                                                    <img
                                                        src="./image/client-8.png"
                                                        alt="Client"
                                                        className="partner-logo img-fluid"
                                                    />
                                                </div>
                                            </a>
                                        </div>
                                        <div className="swiper-slide">
                                            <a href="#">
                                                <div className="partner-slide">
                                                    <img
                                                        src="./image/client-2.png"
                                                        alt="Client"
                                                        className="partner-logo img-fluid"
                                                    />
                                                </div>
                                            </a>
                                        </div>
                                        <div className="swiper-slide">
                                            <a href="#">
                                                <div className="partner-slide">
                                                    <img
                                                        src="./image/client-1.png"
                                                        alt="Client"
                                                        className="partner-logo img-fluid"
                                                    />
                                                </div>
                                            </a>
                                        </div>
                                        <div className="swiper-slide">
                                            <a href="#">
                                                <div className="partner-slide">
                                                    <img
                                                        src="./image/client-3.png"
                                                        alt="Client"
                                                        className="partner-logo img-fluid"
                                                    />
                                                </div>
                                            </a>
                                        </div>
                                        <div className="swiper-slide">
                                            <a href="#">
                                                <div className="partner-slide">
                                                    <img
                                                        src="./image/client-5.png"
                                                        alt="Client"
                                                        className="partner-logo img-fluid"
                                                    />
                                                </div>
                                            </a>
                                        </div>
                                        <div className="swiper-slide">
                                            <a href="#">
                                                <div className="partner-slide">
                                                    <img
                                                        src="./image/client-4.png"
                                                        alt="Client"
                                                        className="partner-logo img-fluid"
                                                    />
                                                </div>
                                            </a>
                                        </div>
                                        <div className="swiper-slide">
                                            <a href="#">
                                                <div className="partner-slide">
                                                    <img
                                                        src="./image/client-7.png"
                                                        alt="Client"
                                                        className="partner-logo img-fluid"
                                                    />
                                                </div>
                                            </a>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="partner-slide">
                                                <img
                                                    src="./image/client-6.png"
                                                    alt="Client"
                                                    className="partner-logo img-fluid"
                                                />
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="partner-slide">
                                                <img
                                                    src="./image/client-8.png"
                                                    alt="Client"
                                                    className="partner-logo img-fluid"
                                                />
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="partner-slide">
                                                <img
                                                    src="./image/client-2.png"
                                                    alt="Client"
                                                    className="partner-logo img-fluid"
                                                />
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="partner-slide">
                                                <img
                                                    src="./image/client-1.png"
                                                    alt="Client"
                                                    className="partner-logo img-fluid"
                                                />
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="partner-slide">
                                                <img
                                                    src="./image/client-3.png"
                                                    alt="Client"
                                                    className="partner-logo img-fluid"
                                                />
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="partner-slide">
                                                <img
                                                    src="./image/client-5.png"
                                                    alt="Client"
                                                    className="partner-logo img-fluid"
                                                />
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="partner-slide">
                                                <img
                                                    src="./image/client-4.png"
                                                    alt="Client"
                                                    className="partner-logo img-fluid"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Section Why Choose Us */}
            <div className="section">
                <div className="hero-container">
                    <div className="d-flex flex-column flex-xl-row gspace-5">
                        <div className="chooseus-card-container">
                            <div className="d-flex flex-column gspace-2">
                                <div
                                    className="card card-chooseus  animate-box animated fast animate__animated"
                                    data-animate="animate__fadeInLeft"
                                >
                                    <div className="chooseus-icon-wrapper">
                                        <div className="chooseus-spacer above" />
                                        <div className="chooseus-icon-layout">
                                            <div className="chooseus-icon">
                                                <img
                                                    src="./image/Icon-2.png"
                                                    alt="Why Choose Us Icon"
                                                    className="img-fluid"
                                                />
                                            </div>
                                        </div>
                                        <div className="chooseus-spacer below" />
                                    </div>
                                    <div className="chooseus-content">
                                        <h4 className="chooseus-title">Innovation &amp; Integrity</h4>
                                        <p>
                                            Every decision is backed by real-time analytics for maximum
                                            impact lorem ipsum dolor sit consectetur adipiscing elit ut
                                            elit tellus luctus nec.
                                        </p>
                                        <div className="link-wrapper">
                                            <a href="#">Read More</a>
                                            <i className="fa-solid fa-arrow-circle-right accent-color" />
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="card card-chooseus  animate-box animated animate__animated"
                                    data-animate="animate__fadeInLeft"
                                >
                                    <div className="chooseus-icon-wrapper">
                                        <div className="chooseus-spacer above" />
                                        <div className="chooseus-icon-layout">
                                            <div className="chooseus-icon">
                                                <img
                                                    src="./image/icon-1.png"
                                                    alt="Why Choose Us Icon"
                                                    className="img-fluid"
                                                />
                                            </div>
                                        </div>
                                        <div className="chooseus-spacer below" />
                                    </div>
                                    <div className="chooseus-content">
                                        <h4 className="chooseus-title">Collaboration</h4>
                                        <a href="#" className="chooseus-title" />
                                        <p>
                                            Cutting-edge marketing techniques to keep you ahead of the
                                            competition lorem ipsum dolor sit awsa consectetur adipiscing
                                            elit ut elit.
                                        </p>
                                        <div className="link-wrapper">
                                            <a href="#">Read More</a>
                                            <i className="fa-solid fa-arrow-circle-right accent-color" />
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="card card-chooseus animate-box animated slow animate__animated"
                                    data-animate="animate__fadeInLeft"
                                >
                                    <div className="chooseus-icon-wrapper">
                                        <div className="chooseus-spacer above" />
                                        <div className="chooseus-icon-layout">
                                            <div className="chooseus-icon">
                                                <img
                                                    src="./image/Icon-3.png"
                                                    alt="Why Choose Us Icon"
                                                    className="img-fluid"
                                                />
                                            </div>
                                        </div>
                                        <div className="chooseus-spacer below" />
                                    </div>
                                    <div className="chooseus-content">
                                        <a href="#" className="chooseus-title">
                                            <h4>Result Driven</h4>
                                        </a>
                                        <p>
                                            Clear insights and performance tracking, so you always know
                                            your ROI lorem ipsum dolo consectetur adipiscing elit ut elit
                                            tellus luctus nec.
                                        </p>
                                        <div className="link-wrapper">
                                            <a href="#">Read More</a>
                                            <i className="fa-solid fa-arrow-circle-right accent-color" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="chooseus-content-container">
                            <div className="d-flex flex-column gspace-5">
                                <div className="d-flex flex-column gspace-2">
                                    <div
                                        className="sub-heading  animate-box animated animate__animated"
                                        data-animate="animate__fadeInDown"
                                    >
                                        <i className="fa-regular fa-circle-dot" />
                                        <span>Our Core Values</span>
                                    </div>
                                    <h2
                                        className="title-heading animate-box animated animate__animated"
                                        data-animate="animate__fadeInDown"
                                    >
                                        The Principles That Define Us
                                    </h2>
                                    <p
                                        className="mb-0 animate-box animated animate__animated"
                                        data-animate="animate__fadeInDown"
                                    >
                                        In the fast-paced digital world, choosing the right marketing
                                        partner makes all the difference. At Marko, we don’t just create
                                        campaigns—we craft strategies that deliver measurable success.
                                    </p>
                                </div>
                                <div className="image-container">
                                    <img
                                        src="./image/collaborative-process-of-multicultural-skilled-peo-5EHBQRG-1024x683.jpg"
                                        alt="Why Choose Us Image"
                                        className="chooseus-img"
                                    />
                                    <div className="card-chooseus-cta-layout">
                                        <div className="chooseus-cta-spacer" />
                                        <div className="d-flex flex-column align-items-end">
                                            <div className="chooseus-cta-spacer" />
                                            <div className="card-chooseus-cta-wrapper">
                                                <div
                                                    className="card card-chooseus-cta animate-box animated animate__animated"
                                                    data-animate="animate__fadeInUp"
                                                >
                                                    <h5>
                                                        Partner with Marko &amp; take your brand to the next
                                                        level.
                                                    </h5>
                                                    <div className="link-wrapper">
                                                        <a href="./contact.html">Let's Talk Strategy</a>
                                                        <i className="fa-solid fa-circle-arrow-right" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Section Guide */}
            <div className="section-guide">
                <div className="guide-banner">
                    <div className="hero-container">
                        <div
                            className="guide-content  animate-box animated animate__animated"
                            data-animate="animate__fadeInUp"
                        >
                            <div className="guide-video-container">
                                <button
                                    className="request-loader"
                                    data-video="https://www.youtube.com/embed/VhBl3dHT5SY?autoplay=1"
                                >
                                    <i className="fa-solid fa-play" />
                                </button>
                                <p>See How We Help Brands Grow</p>
                            </div>
                            <div className="d-flex flex-column gspace-2">
                                <h3 className="title-heading">
                                    Transform Your Business with Marko!
                                </h3>
                                <p>
                                    Take your digital marketing to the next level with data-driven
                                    strategies and innovative solutions. Let's create something
                                    amazing together!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Section Modal Video */}
            <div className="section p-0">
                <div id="modal-overlay" className="modal-overlay">
                    <span className="modal-close">
                        <i className="fa-solid fa-xmark" />
                    </span>
                    <div className="video-modal">
                        <iframe
                            id="modal-video-frame"
                            className="ifr-video"
                            allowFullScreen=""
                        />
                    </div>
                </div>
            </div>
            {/* Section Team */}
            <div className="section">
                <div className="hero-container">
                    <div className="team-wrapper">
                        <div className="card team-layout">
                            <div
                                className="d-flex flex-column align-items-center gspace-2 animate-box animate__animated"
                                data-animate="animate__fadeInLeft"
                            >
                                <div className="sub-heading">
                                    <i className="fa-regular fa-circle-dot" />
                                    <span>Our Team</span>
                                </div>
                                <h2 className="title-heading">
                                    Meet the Minds Behind Your Digital Success
                                </h2>
                            </div>
                            <div className="row row-cols-xl-3 row-cols-md-2 row-cols-1 grid-spacer-2">
                                <div className="col">
                                    <div className="d-flex flex-column">
                                        <div className="image-team">
                                            <img
                                                src="./image/team-3.jpg"
                                                alt="Team Image"
                                                className="img-fluid"
                                            />
                                            <div className="social-team-wrapper">
                                                <div className="social-team-spacer" />
                                                <div className="d-flex flex-column align-items-end">
                                                    <div className="social-team-container">
                                                        <a href="https://facebook.com" className="social-item">
                                                            <i className="fa-brands fa-facebook" />
                                                        </a>
                                                        <a href="https://instagram.com" className="social-item">
                                                            <i className="fa-brands fa-instagram" />
                                                        </a>
                                                        <a href="https://linkedin.com" className="social-item">
                                                            <i className="fa-brands fa-linkedin" />
                                                        </a>
                                                    </div>
                                                    <div className="social-team-spacer" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="team-profile">
                                            <h4>Jordan Lee</h4>
                                            <span className="title">Head of Creative</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="d-flex flex-column">
                                        <div className="image-team">
                                            <img
                                                src="./image/team-2.jpg"
                                                alt="Team Image"
                                                className="img-fluid"
                                            />
                                            <div className="social-team-wrapper">
                                                <div className="social-team-spacer" />
                                                <div className="d-flex flex-column align-items-end">
                                                    <div className="social-team-container">
                                                        <a href="https://facebook.com" className="social-item">
                                                            <i className="fa-brands fa-facebook" />
                                                        </a>
                                                        <a href="https://instagram.com" className="social-item">
                                                            <i className="fa-brands fa-instagram" />
                                                        </a>
                                                        <a href="https://linkedin.com" className="social-item">
                                                            <i className="fa-brands fa-linkedin" />
                                                        </a>
                                                    </div>
                                                    <div className="social-team-spacer" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="team-profile">
                                            <h4>Chloe Tan</h4>
                                            <span className="title">Senior SEO Specialist</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="d-flex flex-column">
                                        <div className="image-team">
                                            <img
                                                src="./image/team-1.jpg"
                                                alt="Team Image"
                                                className="img-fluid"
                                            />
                                            <div className="social-team-wrapper">
                                                <div className="social-team-spacer" />
                                                <div className="d-flex flex-column align-items-end">
                                                    <div className="social-team-container">
                                                        <a href="https://facebook.com" className="social-item">
                                                            <i className="fa-brands fa-facebook" />
                                                        </a>
                                                        <a href="https://instagram.com" className="social-item">
                                                            <i className="fa-brands fa-instagram" />
                                                        </a>
                                                        <a href="https://linkedin.com" className="social-item">
                                                            <i className="fa-brands fa-linkedin" />
                                                        </a>
                                                    </div>
                                                    <div className="social-team-spacer" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="team-profile">
                                            <h4>Daniel Cruz</h4>
                                            <span className="title">Performance Marketing Lead</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="spacer" />
                        </div>
                    </div>
                </div>
            </div>
            {/* Section Digital Process */}
            <div className="section-wrapper-digital-process">
                <div className="section digital-process-banner">
                    <div className="hero-container">
                        <div className="digital-process-content">
                            <div className="row row-cols-xl-2 row-cols-1 grid-spacer-5">
                                <div className="col">
                                    <div
                                        className="d-flex flex-column gspace-2 animate-box animated animate__animated"
                                        data-animate="animate__fadeInDown"
                                    >
                                        <div className="sub-heading">
                                            <i className="fa-regular fa-circle-dot" />
                                            <span>How it Work</span>
                                        </div>
                                        <h2 className="title-heading">
                                            Simple Steps to Digital Success
                                        </h2>
                                    </div>
                                </div>
                                <div className="col">
                                    <div
                                        className="d-flex flex-column gspace-2 justify-content-end h-100  animate-box animated fast animate__animated"
                                        data-animate="animate__fadeInDown"
                                    >
                                        <p>
                                            Our streamlined process ensures your digital growth is
                                            seamless and effective. ipsum dolor sit amet, consectetur
                                            adipiscing elit. In ex ligula, varius at rutrum et, finibus
                                            sed felis.
                                        </p>
                                        <div className="link-wrapper">
                                            <a href="./contact.html">Get Started Now</a>
                                            <i className="fa-solid fa-arrow-circle-right" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="digital-process-steps-wrapper">
                                <div className="digital-process-steps">
                                    <div className="row row-cols-xl-4 row-cols-md-2 row-cols-1">
                                        <div className="col">
                                            <div
                                                className="digital-process-step animate-box animated animate__animated"
                                                data-animate="animate__fadeInUp"
                                            >
                                                <div className="d-flex justify-content-between">
                                                    <div>
                                                        <img
                                                            src="./image/digital-marketing-icons-N952ZWA.png"
                                                            alt="Digital Proccess Icon"
                                                            className="process-icon"
                                                        />
                                                    </div>
                                                    <span>01</span>
                                                </div>
                                                <div className="d-flex flex-column gspace-2">
                                                    <h5>Discovery &amp; Consult</h5>
                                                    <p>
                                                        Lorem ipsum dol consectetur adipiscing elit ut elit tell
                                                        luctus nec ullamcorper mattis
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div
                                                className="d-flex flex-md-row flex-column gspace-2 animate-box animated animate__animated"
                                                data-animate="animate__fadeInDown"
                                            >
                                                <div className="step-spacer" />
                                                <div className="digital-process-step">
                                                    <div className="d-flex justify-content-between">
                                                        <div>
                                                            <img
                                                                src="./image/Icon-11.png"
                                                                alt="Digital Process Icon"
                                                                className="process-icon"
                                                            />
                                                        </div>
                                                        <span>02</span>
                                                    </div>
                                                    <div className="d-flex flex-column gspace-2">
                                                        <h5>Strategy &amp; Planning</h5>
                                                        <p>
                                                            Lorem ipsum dol consectetur adipiscing elit ut elit
                                                            tell luctus nec ullamcorper mattis
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div
                                                className="d-flex flex-md-row flex-column gspace-2 animate-box animated animate__animated"
                                                data-animate="animate__fadeInUp"
                                            >
                                                <div className="step-spacer" />
                                                <div className="digital-process-step">
                                                    <div className="d-flex justify-content-between">
                                                        <div>
                                                            <img
                                                                src="./image/Icon-10.png"
                                                                alt="Digital Process Icon"
                                                                className="process-icon"
                                                            />
                                                        </div>
                                                        <span>03</span>
                                                    </div>
                                                    <div className="d-flex flex-column gspace-2">
                                                        <h5>Execution &amp; Optimize</h5>
                                                        <p>
                                                            Lorem ipsum dol consectetur adipiscing elit ut elit
                                                            tell luctus nec ullamcorper mattis
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div
                                                className="d-flex flex-md-row flex-column gspace-2 animate-box animated animate__animated"
                                                data-animate="animate__fadeInDown"
                                            >
                                                <div className="step-spacer" />
                                                <div className="digital-process-step">
                                                    <div className="d-flex justify-content-between">
                                                        <div>
                                                            <img
                                                                src="./image/Icon-12.png"
                                                                alt="Digital Process Icon"
                                                                className="process-icon"
                                                            />
                                                        </div>
                                                        <span>04</span>
                                                    </div>
                                                    <div className="d-flex flex-column gspace-2">
                                                        <h5>Result &amp; Growth</h5>
                                                        <p>
                                                            Lorem ipsum dol consectetur adipiscing elit ut elit
                                                            tell luctus nec ullamcorper mattis
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="spacer" />
            </div>
            {/* Section Testimonial */}
            <div className="section">
                <div className="hero-container">
                    <div className="d-flex flex-column gspace-5">
                        <div className="d-flex flex-column flex-xl-row gspace-5">
                            <div className="testimonial-reviewer-container">
                                <div
                                    className="testimonial-header-wrapper animate-box animated fast animate__animated"
                                    data-animate="animate__fadeInDown"
                                >
                                    <div className="card card-testimonial-reviewer">
                                        <div className="d-flex flex-column flex-md-row flex-xl-column justify-content-between gspace-3">
                                            <div className="testimonial-reviewer">
                                                <div className="avatar-container">
                                                    <img
                                                        src="./image/Photo-14.jpg"
                                                        alt="Testimonial Reviewer"
                                                        className="avatar"
                                                    />
                                                    <img
                                                        src="./image/Photo-1.jpg"
                                                        alt="Testimonial Reviewer"
                                                        className="avatar"
                                                    />
                                                    <img
                                                        src="./image/Photo-2.jpg"
                                                        alt="Testimonial Reviewer"
                                                        className="avatar"
                                                    />
                                                    <img
                                                        src="./image/Photo-6.jpg"
                                                        alt="Testimonial Reviewer"
                                                        className="avatar"
                                                    />
                                                </div>
                                                <div className="detail">
                                                    <h6>2.7k Positive</h6>
                                                    <h6>Reviews</h6>
                                                </div>
                                            </div>
                                            <div className="testimonial-rating-container">
                                                <div className="d-flex flex-column justify-content-center align-items-center gspace-1">
                                                    <div className="d-flex flex-row align-items-center">
                                                        <span className="counter" data-target={90} />
                                                        <span className="counter-detail">%</span>
                                                    </div>
                                                    <p>Improved Project</p>
                                                </div>
                                                <div className="underline-vertical" />
                                                <div className="d-flex flex-column justify-content-center align-items-center gspace-1">
                                                    <div className="d-flex flex-row align-items-center">
                                                        <span className="counter" data-target={49} />
                                                        <span className="counter-detail">%</span>
                                                    </div>
                                                    <p>New Project</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-column flex-md-row flex-xl-column justify-content-center gspace-2">
                                            <div className="testimonial-header-link-wrapper">
                                                <i className="fa-regular fa-circle-check accent-color" />
                                                <a href="#">Social Media Growth</a>
                                            </div>
                                            <div className="testimonial-header-link-wrapper">
                                                <i className="fa-regular fa-circle-check accent-color" />
                                                <a href="#">Performance Marketing</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-title-container">
                                <div
                                    className="testimonial-header-wrapper-title animate-box animated animate__animated"
                                    data-animate="animate__fadeInRight"
                                >
                                    <div className="card-testimonial-header-title">
                                        <div className="sub-heading">
                                            <i className="fa-regular fa-circle-dot" />
                                            <span>What Our Client Says</span>
                                        </div>
                                        <h2 className="title-heading">
                                            Hear from Our Satisfied Clients, Real Success Stories
                                        </h2>
                                        <p>
                                            Discover how businesses like yours achieved outstanding growth
                                            with Marko's expert digital marketing solutions.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex flex-column">
                            <div className="overflow-hidden">
                                <div className="swiper swiperTestimonial">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <div className="card card-testimonial">
                                                <div className="stars">
                                                    <i className="fa-solid fa-star" />
                                                    <i className="fa-solid fa-star" />
                                                    <i className="fa-solid fa-star" />
                                                    <i className="fa-solid fa-star" />
                                                    <i className="fa-solid fa-star" />
                                                </div>
                                                <div className="d-flex flex-row align-items-center justify-content-between">
                                                    <div className="d-flex flex-row gspace-2">
                                                        <div className="testimonial-image">
                                                            <img
                                                                src="./image/Photo-13.jpg"
                                                                alt="Testimonial Image"
                                                                className="img-fluid"
                                                            />
                                                        </div>
                                                        <div className="d-flex flex-column">
                                                            <span className="profile-name">Emma Richard</span>
                                                            <p className="profile-info">CEO Nexatech</p>
                                                        </div>
                                                    </div>
                                                    <i className="fa-solid fa-3x fa-quote-right accent-color" />
                                                </div>
                                                <p className="testimonial-description">
                                                    “Marko completely transformed our online presence! Their
                                                    digital marketing strategies helped us double our revenue
                                                    in just six months.”
                                                </p>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="card card-testimonial">
                                                <div className="stars">
                                                    <i className="fa-solid fa-star" />
                                                    <i className="fa-solid fa-star" />
                                                    <i className="fa-solid fa-star" />
                                                    <i className="fa-solid fa-star" />
                                                    <i className="fa-solid fa-star" />
                                                </div>
                                                <div className="d-flex flex-row align-items-center justify-content-between">
                                                    <div className="d-flex flex-row gspace-2">
                                                        <div className="testimonial-image">
                                                            <img
                                                                src="./image/Photo-8.jpg"
                                                                alt="Testimonial Image"
                                                                className="img-fluid"
                                                            />
                                                        </div>
                                                        <div className="d-flex flex-column">
                                                            <span className="profile-name">David Mont</span>
                                                            <p className="profile-info">Marketing Director</p>
                                                        </div>
                                                    </div>
                                                    <i className="fa-solid fa-3x fa-quote-right accent-color" />
                                                </div>
                                                <p className="testimonial-description">
                                                    “We've worked with many agencies before, but Marko stands
                                                    out. Their data-driven approach and creative solutions
                                                    gave us an edge over competitors.”
                                                </p>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="card card-testimonial">
                                                <div className="stars">
                                                    <i className="fa-solid fa-star" />
                                                    <i className="fa-solid fa-star" />
                                                    <i className="fa-solid fa-star" />
                                                    <i className="fa-solid fa-star" />
                                                    <i className="fa-solid fa-star" />
                                                </div>
                                                <div className="d-flex flex-row align-items-center justify-content-between">
                                                    <div className="d-flex flex-row gspace-2">
                                                        <div className="testimonial-image">
                                                            <img
                                                                src="./image/Photo-11.jpg"
                                                                alt="Testimonial Image"
                                                                className="img-fluid"
                                                            />
                                                        </div>
                                                        <div className="d-flex flex-column">
                                                            <span className="profile-name">Sophia Lewis</span>
                                                            <p className="profile-info">Founder</p>
                                                        </div>
                                                    </div>
                                                    <i className="fa-solid fa-3x fa-quote-right accent-color" />
                                                </div>
                                                <p className="testimonial-description">
                                                    “From SEO to paid ads, Marko nailed every aspect of our
                                                    campaign. Our website traffic skyrocketed, and lead
                                                    generation has never been better!”
                                                </p>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="card card-testimonial">
                                                <div className="stars">
                                                    <i className="fa-solid fa-star" />
                                                    <i className="fa-solid fa-star" />
                                                    <i className="fa-solid fa-star" />
                                                    <i className="fa-solid fa-star" />
                                                    <i className="fa-solid fa-star" />
                                                </div>
                                                <div className="d-flex flex-row align-items-center justify-content-between">
                                                    <div className="d-flex flex-row gspace-2">
                                                        <div className="testimonial-image">
                                                            <img
                                                                src="./image/Photo-12.jpg"
                                                                alt="Testimonial Image"
                                                                className="img-fluid"
                                                            />
                                                        </div>
                                                        <div className="d-flex flex-column">
                                                            <span className="profile-name">James Peterson</span>
                                                            <p className="profile-info">COO, BrightWave</p>
                                                        </div>
                                                    </div>
                                                    <i className="fa-solid fa-3x fa-quote-right accent-color" />
                                                </div>
                                                <p className="testimonial-description">
                                                    “Highly professional and results-oriented. Marko's
                                                    expertise in branding and content marketing helped us
                                                    build a strong online identity.”
                                                </p>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="card card-testimonial">
                                                <div className="stars">
                                                    <i className="fa-solid fa-star" />
                                                    <i className="fa-solid fa-star" />
                                                    <i className="fa-solid fa-star" />
                                                    <i className="fa-solid fa-star" />
                                                    <i className="fa-solid fa-star" />
                                                </div>
                                                <div className="d-flex flex-row align-items-center justify-content-between">
                                                    <div className="d-flex flex-row gspace-2">
                                                        <div className="testimonial-image">
                                                            <img
                                                                src="./image/Photo-13.jpg"
                                                                alt="Testimonial Image"
                                                                className="img-fluid"
                                                            />
                                                        </div>
                                                        <div className="d-flex flex-column">
                                                            <span className="profile-name">Emma Richard</span>
                                                            <p className="profile-info">CEO Nexatech</p>
                                                        </div>
                                                    </div>
                                                    <i className="fa-solid fa-3x fa-quote-right accent-color" />
                                                </div>
                                                <p className="testimonial-description">
                                                    “Marko completely transformed our online presence! Their
                                                    digital marketing strategies helped us double our revenue
                                                    in just six months.”
                                                </p>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="card card-testimonial">
                                                <div className="stars">
                                                    <i className="fa-solid fa-star" />
                                                    <i className="fa-solid fa-star" />
                                                    <i className="fa-solid fa-star" />
                                                    <i className="fa-solid fa-star" />
                                                    <i className="fa-solid fa-star" />
                                                </div>
                                                <div className="d-flex flex-row align-items-center justify-content-between">
                                                    <div className="d-flex flex-row gspace-2">
                                                        <div className="testimonial-image">
                                                            <img
                                                                src="./image/Photo-8.jpg"
                                                                alt="Testimonial Image"
                                                                className="img-fluid"
                                                            />
                                                        </div>
                                                        <div className="d-flex flex-column">
                                                            <span className="profile-name">David Mont</span>
                                                            <p className="profile-info">Marketing Director</p>
                                                        </div>
                                                    </div>
                                                    <i className="fa-solid fa-3x fa-quote-right accent-color" />
                                                </div>
                                                <p className="testimonial-description">
                                                    “We've worked with many agencies before, but Marko stands
                                                    out. Their data-driven approach and creative solutions
                                                    gave us an edge over competitors.”
                                                </p>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="card card-testimonial">
                                                <div className="stars">
                                                    <i className="fa-solid fa-star" />
                                                    <i className="fa-solid fa-star" />
                                                    <i className="fa-solid fa-star" />
                                                    <i className="fa-solid fa-star" />
                                                    <i className="fa-solid fa-star" />
                                                </div>
                                                <div className="d-flex flex-row align-items-center justify-content-between">
                                                    <div className="d-flex flex-row gspace-2">
                                                        <div className="testimonial-image">
                                                            <img
                                                                src="./image/Photo-11.jpg"
                                                                alt="Testimonial Image"
                                                                className="img-fluid"
                                                            />
                                                        </div>
                                                        <div className="d-flex flex-column">
                                                            <span className="profile-name">Sophia Lewis</span>
                                                            <p className="profile-info">Founder</p>
                                                        </div>
                                                    </div>
                                                    <i className="fa-solid fa-3x fa-quote-right accent-color" />
                                                </div>
                                                <p className="testimonial-description">
                                                    “From SEO to paid ads, Marko nailed every aspect of our
                                                    campaign. Our website traffic skyrocketed, and lead
                                                    generation has never been better!”
                                                </p>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="card card-testimonial">
                                                <div className="stars">
                                                    <i className="fa-solid fa-star" />
                                                    <i className="fa-solid fa-star" />
                                                    <i className="fa-solid fa-star" />
                                                    <i className="fa-solid fa-star" />
                                                    <i className="fa-solid fa-star" />
                                                </div>
                                                <div className="d-flex flex-row align-items-center justify-content-between">
                                                    <div className="d-flex flex-row gspace-2">
                                                        <div className="testimonial-image">
                                                            <img
                                                                src="./image/Photo-12.jpg"
                                                                alt="Testimonial Image"
                                                                className="img-fluid"
                                                            />
                                                        </div>
                                                        <div className="d-flex flex-column">
                                                            <span className="profile-name">James Peterson</span>
                                                            <p className="profile-info">COO, BrightWave</p>
                                                        </div>
                                                    </div>
                                                    <i className="fa-solid fa-3x fa-quote-right accent-color" />
                                                </div>
                                                <p className="testimonial-description">
                                                    “Highly professional and results-oriented. Marko's
                                                    expertise in branding and content marketing helped us
                                                    build a strong online identity.”
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default about
