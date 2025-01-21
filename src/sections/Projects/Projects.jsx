// import styles from './ProjectsStyles.module.css';
// import multiagent from '../../assets/multiagent.png';
// import siam from '../../assets/siam.png';
// import system from '../../assets/system.png';
// import scatter from '../../assets/scatter.png';
// import ProjectCard from '../../common/ProjectCard';

// function Projects() {
//   return (
//     <section id="projects" className={styles.container}>
//       <h1 className="sectionTitle">Projects</h1>
//       <div className={styles.projectsContainer}>
//         {/* <ProjectCard
//           src={multiagent}
//           link="https://github.com/alicechen216/EML6930"
//           h3="Multi-Agnet"
//           p="Robust Adaptive Control"
//         /> */}
//         <ProjectCard
//           src={siam}
//           link="https://www.youtube.com/watch?v=akEbDMUDqUs&t=4s"
//           h3="SIAM Testimonials Invitation "
//           p="Youtube Link"
//         />
//         <ProjectCard
//           src={system}
//           link="https://github.com/alicechen216/Fractional-Order-System-Identification-With-Occupation-Kernel-Regression"
//           h3="System Identification"
//           p="Fracational RKHS"
//         />
//         <ProjectCard
//           src={scatter}
//           link="https://github.com/alicechen216/MAT6932"
//           h3="Scattered Data Approximation"
//           p="Franke Function"
//         />
//       </div>
//     </section>
//   );
// }

// export default Projects;

import styles from './ProjectsStyles.module.css';
import myProject1 from '../../assets/1.jpg';  // 你的项目图片
import myProject2 from '../../assets/myProject2.jpg';
import myProject3 from '../../assets/myProject3.jpg';
// import myProject4 from '../../assets/myProject4.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
      <ProjectCard
          src={myProject1}
          link="https://github.com/yourusername/RecordManagement"
          h3="Record Management System"
          p="React, Node.js, MySQL - A web-based platform for managing and organizing music records."
        />
        <ProjectCard
          src={myProject2}
          link="https://github.com/yourusername/MedicalManagement"
          h3="Medical Examination Management System"
          p="Java, MVC, SOLID Principles - Automated patient scheduling & notifications with dynamic rule-based scheduling."
        />
        <ProjectCard
          src={myProject3}
          link="https://github.com/yourusername/AIProject"
          h3="AI Sentiment Analysis System"
          p="Python, TensorFlow, NLP - An AI-powered sentiment analyzer for user reviews and feedback."
        />
        {/* <ProjectCard
          src={myProject4}
          link="https://github.com/YilinZang/MyProject4"
          h3="Distributed System Performance Optimization"
          p="Redis, Kafka - Improved caching efficiency & reduced system load."
        /> */}
      </div>
    </section>
  );
}

export default Projects;
