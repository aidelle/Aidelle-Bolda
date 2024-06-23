import React from 'react'
import styles from './ProjectsStyles.module.css';
import lumawig from '../../assets/lumawig.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
        <h1 className="sectionTitle">Projects</h1>
        <div className={styles.projectsContainer}>
           
            <ProjectCard src={lumawig} 
            link="https://github.com/aidelle/lumawig_v.0.1"
            h3="lumawig"
            p="Browser Extension"
            
            />
        </div>
    </section>
  );
}

export default Projects