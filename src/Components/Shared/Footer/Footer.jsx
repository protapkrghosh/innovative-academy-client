import logo from "../../../assets/logo1.png"
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-[#32345B] text-[#b8afa2] text-[17px]">
        <div>
          <img src={logo} alt="Innovative Academy" width={70} />
          <p>Sint metus, integer, sociis,</p>
          <p> aenean aenean nibh biben.</p>

          <span className="flex items-center mt-3">
            <FaMapMarkerAlt className="text-[#F36B22] mr-3" />
            <p>3rd Street, LA</p>
          </span>
          <span className="flex items-center">
            <BsFillTelephoneFill className="text-[#F36B22] mr-3" />
            <p>+1 (088) 456 888 (24/7)</p>
          </span>
          <span className="flex items-center">
            <MdOutlineMailOutline className="text-[#F36B22] mr-3" />
            <p>info@edumind.com</p>
          </span>
        </div>

        <div>
          <span className="text-white text-[21px] font-bold mb-3">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>

        <div>
          <span className="text-white text-[21px] font-bold mb-3">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>

        <div>
          <span className="text-white text-[21px] font-bold">Contact</span>
          <div className="form-control w-80">
            <label className="label">
              <span className="label-text text-[#b8afa2]">Enter your email address</span>
            </label>
            <div className="relative">
              <input type="text" placeholder="example@gmail.com" className="input input-bordered w-full pr-16" />
              <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Send</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;