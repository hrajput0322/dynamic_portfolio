import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="container text-white py-5">
      <motion.h2
        className="text-center mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
      >
        Contact Me 📞
      </motion.h2>
      <div className="row justify-content-center p-4">
        <motion.div
          className="col-md-8 p-4 mb-4"
          style={{ backgroundColor: '#333', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)' }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
        >
          <div className="mb-4 d-flex align-items-center">
            <FaEnvelope size={30} className="me-2" />
            <div>
              <h5 className="mb-0" style={{ color: '#f39c12' }}>Email</h5>
              <p className="mb-0">hrajput0322@gmail.com</p>
            </div>
          </div>
          <div className="mb-4 d-flex align-items-center">
            <FaMapMarkerAlt size={30} className="me-2" />
            <div>
              <h5 className="mb-0" style={{ color: '#f39c12' }}>Address</h5>
              <p className="mb-0">Mahanagar, Bareilly, UP</p>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <FaPhoneAlt size={30} className="me-2" />
            <div>
              <h5 className="mb-0" style={{ color: '#f39c12' }}>Phone</h5>
              <p className="mb-0">+91 8630875700</p>
            </div>
          </div>
        </motion.div>
      </div>
      <motion.h4
        className="mb-3 text-center"
        style={{ color: '#f39c12' }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
      >
        Social Links
      </motion.h4>
      <div className="row">
        <div className="d-flex flex-wrap justify-content-center">
          <motion.a 
            href="https://www.linkedin.com/in/harsh-rajput-57951821b/" 
            className="text-white mb-2 d-flex align-items-center p-2" 
            style={{ textDecoration: 'none', backgroundColor: '#333', borderRadius: '10px', margin: '5px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)' }}
            target='_blank'
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            <img
              src="linkedin.png"
              alt="LinkedIn"
              style={{
                width: '30px',
                height: '30px',
                marginRight: '10px',
              }}
            />
            LinkedIn
          </motion.a>
          <motion.a 
            href="https://github.com/hrajput0322" 
            className="text-white mb-2 d-flex align-items-center p-2" 
            style={{ textDecoration: 'none', backgroundColor: '#333', borderRadius: '10px', margin: '5px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)' }}
            target='_blank'
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            <img
              src="github.png"
              alt="GitHub"
              style={{
                width: '30px',
                height: '30px',
                marginRight: '10px',
              }}
            />
            GitHub
          </motion.a>
          <motion.a 
            href="https://leetcode.com/u/hrajput0322/" 
            className="text-white mb-2 d-flex align-items-center p-2" 
            style={{ textDecoration: 'none', backgroundColor: '#333', borderRadius: '10px', margin: '5px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)' }}
            target='_blank'
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            <img
              src="leetcode.png"
              alt="LeetCode"
              style={{
                width: '30px',
                height: '30px',
                marginRight: '10px',
              }}
            />
            LeetCode
          </motion.a>
          <motion.a 
            href="https://www.geeksforgeeks.org/user/hrajput0322/" 
            className="text-white mb-2 d-flex align-items-center p-2" 
            style={{ textDecoration: 'none', backgroundColor: '#333', borderRadius: '10px', margin: '5px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)' }}
            target='_blank'
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            <img
              src="gfg.png"
              alt="GeeksforGeeks"
              style={{
                width: '30px',
                height: '30px',
                marginRight: '10px',
              }}
            />
            GeeksforGeeks
          </motion.a>
          <motion.a 
            href="https://www.codechef.com/users/hrajput0322" 
            className="text-white mb-2 d-flex align-items-center p-2" 
            style={{ textDecoration: 'none', backgroundColor: '#333', borderRadius: '10px', margin: '5px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)' }}
            target='_blank'
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            <img
              src="codechef.png"
              alt="CodeChef"
              style={{
                width: '30px',
                height: '30px',
                marginRight: '10px',
              }}
            />
            CodeChef
          </motion.a>
          <motion.a 
            href="https://www.instagram.com/hrajput0322" 
            className="text-white mb-2 d-flex align-items-center p-2" 
            style={{ textDecoration: 'none', backgroundColor: '#333', borderRadius: '10px', margin: '5px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)' }}
            target='_blank'
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            <img
              src="instagram.png"
              alt="Instagram"
              style={{
                width: '30px',
                height: '30px',
                marginRight: '10px',
              }}
            />
            Instagram
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
