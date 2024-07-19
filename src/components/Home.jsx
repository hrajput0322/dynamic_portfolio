import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Loader from './Loader';
import { useUserData } from '../context/DataContext';

const Home = () => {
  const { userData } = useUserData(); // Destructure userData from context
  const imageRef = useRef(null); // Reference to the image
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  if (userData === null) {
    return <Loader />;
  }

  // Function to handle image movement based on cursor position
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = imageRef.current.getBoundingClientRect();
    
    const x = (clientX - left) / width;
    const y = (clientY - top) / height;

    setTilt({
      x: (x - 0.5) * 20, // Adjust the multiplier for more or less tilt
      y: (y - 0.5) * -20
    });
  };

  return (
    <div className='text-white py-5'>
      <div className='container'>
        {/* Center the content using Flexbox */}
        <div className='text-center mb-4 d-flex justify-content-center align-items-center flex-column'>
          {/* Animated profile image */}
          <motion.div
            ref={imageRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setTilt({ x: 0, y: 0 })}
            initial={{ opacity: 0, scale: 0.8, y: -50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, type: 'spring', stiffness: 120 }}
          >
            <motion.img
              src={userData.pic}
              alt='Profile'
              style={{
                width: '300px',
                height: '300px',
                objectFit: 'cover',
                borderRadius: '50%',
              }}
              whileHover={{ 
                scale: 1.15, 
                rotate: 5,
                transition: { type: 'spring', stiffness: 300, damping: 10 }
              }}
              animate={{ 
                rotateX: tilt.x,
                rotateY: tilt.y,
                transition: { type: 'spring', stiffness: 300, damping: 15 }
              }}
            />
          </motion.div>
          {/* Animated bio text */}
          <motion.p
            className='mt-3'
            style={{ fontSize: '1.2rem', color: '#e0e0e0' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {userData.bio}
          </motion.p>
        </div>
        <div className='row'>
          {userData.extra.map((item, index) => (
            <div key={index} className='col-md-3 mb-3 d-flex justify-content-center'>
              <motion.div
                className='p-3 bg-secondary rounded'
                style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)' }}
                initial={{ opacity: 0, scale: 0.85 }}
                whileHover={{ scale: 1.1 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <motion.p
                  className='text-center mb-0'
                  style={{ fontSize: '1rem', color: '#f8f9fa' }}
                >
                  {item}
                </motion.p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
