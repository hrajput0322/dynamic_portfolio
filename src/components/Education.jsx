import React from 'react';
import { motion } from 'framer-motion';
import { useUserData } from '../context/DataContext.jsx';
import Loader from './Loader';
import { FaGraduationCap, FaSchool } from 'react-icons/fa'; // Icons

const Education = () => {
  const { userData } = useUserData(); // Destructure userData from context

  if (userData === null) {
    return <Loader />;
  }

  const educationData = [
    {
      period: '2021-PRESENT',
      institution: 'INDIAN INSTITUTE OF INFORMATION TECHNOLOGY, GUWAHATI',
      qualification: '(CSE) 4TH YEAR',
      grade: `${userData.cpi} CGPA`,
      icon: <FaGraduationCap />,
      color: '#FFD700',
    },
    {
      period: '2020-2021',
      institution: 'SHRI GULAB RAI MONTESSORI SCHOOL',
      qualification: '(PCM + CS) CLASS 12TH',
      grade: '97.4%',
      icon: <FaSchool />,
      color: '#3498db',
    },
    {
      period: '2018-2019',
      institution: 'SHRI GULAB RAI MONTESSORI SCHOOL',
      qualification: 'CLASS 10TH',
      grade: '95.8%',
      icon: <FaSchool />,
      color: '#3498db',
    }
  ];

  return (
    <div className='text-white py-5'>
      <div className='container'>
        <motion.h2
          className='text-center mb-5'
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
        >
          Education 🎓
        </motion.h2>
        <div className='timeline-container'>
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className='timeline-item'
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className='timeline-icon' style={{ backgroundColor: edu.color }}>
                {edu.icon}
              </div>
              <div className='timeline-content'>
                <h4 className='mb-1'>{edu.period}</h4>
                <h5 className='mb-2'>{edu.institution}</h5>
                <p className='mb-1'>{edu.qualification}</p>
                <p className='mb-0'>{edu.grade}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
