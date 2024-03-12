import { motion } from "framer-motion";
import "./footer.scss";

const Footer: React.FC = () => {
    return (
        <div className='bar-hero'>
            <div className='footer-flex bar-contain'>
                <img src='../images/logo.svg' alt='logo' />
                <a
                    className='download'
                    href='/'
                >
                    <h4>Download Brochure</h4>
                </a>
            </div>
        </div>
    );
};

export default Footer;
