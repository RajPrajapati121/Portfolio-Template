import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-16 px-6 bg-white text-gray-800">
      <motion.div
        variants={slideIn('top', 'spring', 0.2, 1)}
        className="text-center"
      >
        <div className="flex justify-center mb-6">
          <div className="bg-gray-800 text-white p-4 rounded-full text-2xl">
            <FaEnvelope />
          </div>
        </div>
        <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 mb-10">
          {/* Location */}
          <a
            href="https://www.google.com/maps?q=Gandhinagar,+Gujarat,+India"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-4 hover:opacity-80 transition"
          >
            <div className="bg-gray-800 text-white p-3 rounded-full text-xl">
              <FaMapMarkerAlt />
            </div>
            <div>
              <h4 className="font-semibold">Location</h4>
              <p>Gandhinagar, Gujarat, India</p>
            </div>
          </a>

          {/* Email */}
          <a
            href="rajprajapatiofficial31@gmail.com"
            className="flex items-start gap-4 bg-gray-100 shadow-md px-6 py-4 rounded-xl hover:opacity-80 transition"
          >
            <div className="bg-gray-800 text-white p-3 rounded-full text-xl">
              <FaEnvelope />
            </div>
            <div>
              <h4 className="font-semibold">Email</h4>
              <p>rajprajapatiofficial31@gmail.com</p>
            </div>
          </a>

          {/* Call */}
          <a
            href="tel:+918155002230"
            className="flex items-start gap-4 hover:opacity-80 transition"
          >
            <div className="bg-gray-800 text-white p-3 rounded-full text-xl">
              <FaPhoneAlt />
            </div>
            <div>
              <h4 className="font-semibold">Call</h4>
              <p>+91 81550 02230</p>
            </div>
          </a>
        </div>

        {/* Social Media */}
        <div className="border-t pt-8 w-full max-w-lg mx-auto">
          <h4 className="text-xl font-semibold mb-4">Connect With Me</h4>
          <div className="flex gap-8 justify-center text-gray-800 text-2xl">
            <a href="https://www.linkedin.com/in/raj-prajapati-5291b8283/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://github.com/RajPrajapati121" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            {/* <a href="#" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a> */}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
