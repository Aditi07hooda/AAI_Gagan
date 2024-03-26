import {
    BiLogoFacebook,
    BiLogoInstagram,
    BiLogoYoutube,
    BiLogoTwitter,
    BiLogoLinkedin,
  } from "react-icons/bi";
  import logo from "../assets/logo.png";
  
  const Footer = () => {
    return (
      <>
        {/* <div className="lg:w-4/5 xl:w-2/3 px-5 lg:px-0 m-auto py-12">
          <div>
            
          </div>
          <div>
  
          </div>
        </div> */}
        <div className="bg-cyan-500 min-h-80 flex  justify-center">
          <div className="lg:w-4/5 xl:w-2/3 px-5 lg:px-0 m-auto py-12 md:pt-24">
            <div className="md:flex ">
              <div className="md:w-1/4 text-center md:text-left " >
                <h1 className="text-xl font-semibold pb-4 ">Contact Us</h1>
                <p className="leading-7 ">
                  Airports Authority of India, GAGAN Complex, ITPL Road,
                  Kundalahalli, Bangalore - 560037
                </p>
                <a href="mailto:inmcc_gaganblr@aai.aero">
                  inmcc_gaganblr@aai.aero
                </a>
                <p>Tel: +91 80 28541455</p>
              </div>
              <div className="text-center md:text-left pt-10 md:pt-0 leading-7 md:w-1/5 xl:w-1/7 xl:border-s-2 md:ml-5 xl:pl-10 xl:ml-10 border-dotted	border-black">
                <h1 className="text-xl font-semibold pb-4 ">Important Links</h1>
                <p className="leading-4">Ministry of Civil Aviation</p>
                <p className="mt-2">ISRO</p>
                <p>FAA</p>
                <p>GPS Aimanac</p>
                <p>GPS</p>
              </div>
              <div className="text-center md:text-left pt-10 md:pt-0 leading-7 flex-col mx-auto items-center justify-center">
                <h1 className="text-xl font-semibold pb-4 ">AAI Links</h1>
                <p>SAP/ESS Portal</p>
                <p>AAI Website</p>
                <p>AAI Email</p>
              </div>
  
              <div className="text-center md:text-left pt-10 md:pt-0 leading-7 md:w-1/6 xl:border-r-2 md:mr-5 xl:pr-10 xl:mr-10 border-dotted	border-black">
                <h1 className="text-xl font-semibold pb-4">
                  Related Organization
                </h1>
                <p>WAAS</p>
                <p>EGNOS</p>
                <p>MTSAT</p>
              </div>
              <div className="text-center md:text-left">
                <h1 className=" pt-10 md:pt-0 leading-7 text-xl font-semibold pb-4 ">
                  Social
                </h1>
                <div className=" flex items-center mb-2 justify-center md:justify-start">
                  <BiLogoFacebook size={20} className="mr-1" />
                  <span>Facebook</span>
                </div>
                <div className="flex items-center mb-2 justify-center md:justify-start">
                  <BiLogoInstagram size={20} className="mr-1" />
                  <span>Instagram</span>
                </div>
                <div className="flex items-center mb-2 justify-center md:justify-start">
                  <a
                    href="http://youtube.com"
                    target="blank"
                    className="flex items-center"
                  >
                    <BiLogoYoutube size={20} className="mr-1" />
                    <span>YouTube</span>
                  </a>
                </div>
  
                <div className="flex items-center mb-2 justify-center md:justify-start">
                  <BiLogoTwitter size={20} className="mr-1" />
                  <span>Twitter</span>
                </div>
                <div className="flex items-center mb-2 justify-center md:justify-start">
                  <BiLogoLinkedin size={20} className="mr-1" />
                  <span>LinkedIn</span>
                </div>
              </div>
            </div>
            <br />
            <div className="flex mt-12 my-5 justify-center items-center m-auto flex-col lg:flex-row">
              <div className="w-full text-center md:w-4/6 text-sm mb-4 font-thin md:mb-0 md:mr-4">
                The information on this site is subject to a Disclaimer, Copyright
                Notice, Cookies and Protection of personal data.
              </div>
              <div className="w-72 md:w-56 lg:w-3/12 md:text-center">
                <img src={logo} alt="logo" />
              </div>
            </div>
  
            <div className="flex justify-center font-extralight text-sm">
              AAI Copyright© 2023
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default Footer;