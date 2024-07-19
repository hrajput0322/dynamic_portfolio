import React from 'react';
import { motion } from 'framer-motion';
import { useUserData } from '../context/DataContext.jsx';
import Loader from './Loader';

const Skills = () => {
  const { userData } = useUserData(); // Destructure userData from context

  if (userData === null) {
    return <Loader />;
  }

  return (
    <div className='text-white py-5'>
      <div className='container'>
        <motion.h2
          className='text-center mb-4'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
        >
          Skills 💪
        </motion.h2>
        <div className='row p-4'>
          {userData.skills.map((url, index) => (
            <div key={index} className='col-md-3 mb-3 d-flex justify-content-center'>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2, type: 'spring', stiffness: 100 }}
              >
                <motion.img
                  src={url}
                  alt={`Skill ${index}`}
                  className='img-fluid m-1 skill-image'
                  style={{ width: '100px', height: '100px', objectFit: 'contain' }}
                  whileHover={{
                    scale: 1.1,
                    rotateX: '15deg',
                    rotateY: '15deg',
                    transition: { duration: 0.3 },
                  }}
                  whileTap={{ scale: 0.9 }}
                  drag
                  dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                  onMouseMove={(e) => {
                    const { clientX, clientY } = e;
                    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();

                    const x = (clientX - left) / width;
                    const y = (clientY - top) / height;

                    e.currentTarget.style.transform = `rotateX(${(y - 0.5) * 20}deg) rotateY(${(x - 0.5) * -20}deg)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'rotateX(0deg) rotateY(0deg)';
                  }}
                />
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
