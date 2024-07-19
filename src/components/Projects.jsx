import React from 'react';
import { motion } from 'framer-motion';
import { useUserData } from '../context/DataContext.jsx';
import Loader from './Loader.jsx';

const Projects = () => {
  const { projects } = useUserData(); // Destructure projects from context

  if (projects === null) {
    return <Loader />;
  }

  const sortedProjects = [...projects].sort((a, b) => a.position - b.position);

  return (
    <div className='text-white py-5'>
      <div className='container'>
        <motion.h2
          className='text-center mb-5'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
        >
          Projects 🚀
        </motion.h2>
        {sortedProjects.map((project, index) => (
          <motion.div
            key={index}
            className={`row mb-5 align-items-center ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2, type: 'spring', stiffness: 100 }}
          >
            <div className='col-md-6 d-flex justify-content-center mb-3'>
              <motion.img
                src={project.image}
                alt={project.title}
                style={{ width: '100%', height: 'auto', maxWidth: '400px', objectFit: 'contain', transition: 'transform 0.3s ease-in-out' }}
                whileHover={{ scale: 1.03 }}
              />
            </div>
            <div className='col-md-6'>
              <h3 className='mb-3' style={{ color: '#f39c12' }}>{project.title}</h3>
              <p>{project.description}</p>
              <motion.a
                href={project.github}
                target='_blank'
                rel='noopener noreferrer'
                className='btn btn-outline-info btn-block mb-2 me-2'
                whileHover={{ scale: 1.05, backgroundColor: '#17a2b8', color: '#fff' }}
                transition={{ duration: 0.2 }}
              >
                GitHub Repository
              </motion.a>
              {project.live && project.live.trim() !== '' && (
                <motion.a
                  href={project.live}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='btn btn-success btn-block mb-2'
                  whileHover={{ scale: 1.05, backgroundColor: '#28a745', color: '#fff' }}
                  transition={{ duration: 0.2 }}
                >
                  Live Project
                </motion.a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
