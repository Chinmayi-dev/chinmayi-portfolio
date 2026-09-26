import React from 'react';
import {
  FaCss3,
  FaEye,
  FaJava,
} from 'react-icons/fa6';
import {
  SiApachespark,
  SiFastapi,
  SiFlask,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiJsonwebtokens,
  SiMysql,
  SiNumpy,
  SiOpencv,
  SiPandas,
  SiPostgresql,
  SiPostman,
  SiPytorch,
  SiPython,
  SiReact,
  SiSqlite,
  SiTailwindcss,
  SiTensorflow,
  SiVercel,
} from 'react-icons/si';
import { TbSql } from 'react-icons/tb';

import machinelearning from '../assets/skills/machinelearning.png';
import restapi from '../assets/skills/restapi.png';
import sqlalchemy from '../assets/skills/sqlalchemy.png';
import yolov8 from '../assets/skills/yolov8.png';
import vscodeLogo from '../assets/skills/vscodeLogo.png';
import sql from '../assets/skills/sql.png';
import { image } from 'framer-motion/client';

export const profile = {
  name: 'Chinmayi D',
  role: 'Software Development · AI/ML · Data Science',
  location: 'Mysuru, Karnataka',
  photo: '/Chinmayi-D-Photo.png',
  intro: 'MCA graduate building AI-powered solutions, REST APIs, recommendation systems, computer vision applications, and full-stack web applications with Python and modern development tools.',
  email: 'dchinmayi24@gmail.com',
  linkedin: 'https://www.linkedin.com/in/chinmayid30/',
  github: 'https://github.com/Chinmayi-dev',
};

export const about = `I’m Chinmayi D, an MCA graduate with hands-on experience in AI/ML, data-driven systems, and software development. I’ve worked with Python, TensorFlow, PyTorch, PySpark, Flask, FastAPI, and React.js to build machine learning and computer vision applications, recommendation systems, REST APIs, and database-backed web applications.

I enjoy understanding complex problems, working with data, and turning ideas into practical solutions. I’m looking to contribute to meaningful products, solve real-world problems, and continue growing professionally.`;

export const skills = [
  {
    category: 'Programming Languages',
    items: [
      { name: 'Python', icon: SiPython, color: '#3776AB' },
      { name: 'Java', icon: FaJava, color: '#E76F00' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    ],
  },
  {
    category: 'Web Development',
    items: [
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS3', icon: FaCss3, color: '#1572B6' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    ],
  },
  {
    category: 'Backend & APIs',
    items: [
      { name: 'Flask', icon: SiFlask, color: '#0D0D0D' },
      { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
      { name: 'REST APIs', icon: () => React.createElement('img', { src: restapi, alt: 'REST APIs Logo', className: 'h-6 w-8', }), color: '#007ACC', },
      { 
         name: 'SQLALchemy', icon: () => React.createElement('img', { src: sqlalchemy, alt: 'SQLAlchemy logo', className: 'h-3 w-11', }), color: '#007ACC',
      },
      { name: 'JWT', icon: SiJsonwebtokens, color: '#D63AFF' },
    ],
  },
  {
    category: 'Machine Learning & Data Science',
    items: [
      { name: 'Machine Learning',
        icon: () =>
          React.createElement('img', {
            src: machinelearning,
            alt: 'Machine Learning Logo',
            className: 'h-6 w-6',
          }),
        color: '#007ACC', },
      { name: 'Computer Vision', icon: FaEye, color: '#F97316' },
      { name: 'TensorFlow', icon: SiTensorflow, color: '#FF6F00' },
      { name: 'PyTorch', icon: SiPytorch, color: '#EE4C2C' },
      { name: 'PySpark', icon: SiApachespark, color: '#E76F00' },
      { name: 'Pandas', icon: SiPandas, color: '#150458' },
      { name: 'NumPy', icon: SiNumpy, color: '#4C78A8' },
      { name: 'OpenCV', icon: SiOpencv, color: '#5C3EE8' },
      {
        name: 'Yolov8',
        icon: () =>
          React.createElement('img', {
            src: yolov8,
            alt: 'Yolov8 Logo',
            className: 'h-6 w-6',
          }),
        color: '#007ACC',
      },
    ],
  },
  {
    category: 'Databases',
    items: [
      {
        name: 'SQL',
        icon: () =>
          React.createElement('img', {
            src: sql,
            alt: 'SQL Logo',
            className: 'h-6 w-8',
          }),
        color: '#007ACC',},
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
      { name: 'MySQL', icon: SiMysql, color: '#00758F' },
      { name: 'SQLite', icon: SiSqlite, color: '#003B57' },
    ],
  },
  {
    category: 'Tools',
    items: [
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'GitHub', icon: SiGithub, color: '#111827' },
      { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
      {
        name: 'VS Code', icon: () => React.createElement('img', { src: vscodeLogo, alt: 'VS Code logo', className: 'h-6 w-6', }), color: '#007ACC',
      },
      {name: 'Vercel', icon: SiVercel, color: '#000000'},
    ],
  },
];

export const experience = [
  {
    role: 'Data Science & ML Intern',
    org: 'Zaalima Development Pvt. Ltd.',
    location: 'Remote',
    duration: 'June 2026 – September 2026',
    description: 'Built data science and machine learning applications involving recommendation systems and computer vision using Python, PySpark, TensorFlow Recommenders, YOLOv8, OpenCV, and FastAPI. Developed a two-tower recommendation system processing 31.7M+ transaction records and 1.59M user-item interactions across 78,388 products, and contributed to a YOLOv8-based industrial defect detection pipeline with image/video inference and API integration.',
  },
  {
    role: 'Web Development Intern',
    org: 'Innovant IT Solutions',
    location: 'Shivamogga, Karnataka',
    duration: 'June 2024 – August 2024',
    description: 'Developed web applications using PHP, HTML5, CSS3, JavaScript, and MySQL, including a database-driven Student Result Management System with responsive interfaces, CRUD operations, Admin and Student modules, and relational database integration. Executed and validated 11 functional test cases, identifying and resolving issues to improve application reliability and data accuracy.',
  },
];

export const projects = [
  {
    title: 'Multi-Modal Sensor Fusion and AI-Based Navigation for Delivery Robots',
    art: 'robot',
    image: '/src/assets/projects/delivery-robot.png',
    tagline: 'AI-based delivery robot simulation for Indian road conditions, combining object detection, GPS synchronization, route planning, lane detection, and obstacle-avoidance decisions.',
    stack: ['Python', 'Flask', 'React', 'REST APIs'],
    workflow: ['Dataset & Field Collection', 'Preprocessing', 'YOLOv8n Model Training', 'Route Planning & Lane Detection', 'GPS Synchronization', 'Sensor Fusion & Decision Engine', 'Flask + React Dashboard', 'Evaluation'],
    details: {
      problem: 'Indian road environments often involve unpredictable obstacles, inconsistent lane markings, and dense traffic, challenges that conventional navigation systems designed for more structured road environments may not adequately handle.',
      overview: 'Built an AI-based delivery robot simulation for Indian road conditions, combining computer vision, GPS data, road-network information, route planning, lane detection, and obstacle-avoidance decisions. Validated the navigation pipeline using real Mysuru road video.',
      highlights: [
        'Trained YOLOv8n on a 6,000-image subset of the Indian Driving Dataset for obstacle detection',
        'Synchronized GPS coordinates with road-video frames for location-aware validation',
        'Implemented OpenStreetMap-based navigation with Dijkstra shortest-path route planning',
        'Implemented lane detection using Canny Edge Detection and Hough Transform',
        'Designed a time-cost decision engine with Slow Down → Wait → Lane Change → Reroute actions',
        'Built a Flask backend and React.js dashboard for real-time route tracking and decision logs',
      ],
      results: 'Achieved 69.09% precision and 43.61% mAP@50 after 50 training epochs, with working end-to-end route tracking validated on real Mysuru road video.',
      future: 'Expand the training dataset, improve detection of underrepresented obstacle classes, and integrate real-time sensor inputs from a physical robot platform.',
    },
    github: 'https://github.com/Chinmayi-dev/delivery-robot-navigation',
    demo: null,
  },
  {
    title: 'Employee Management API',
    art: 'api',
    image: '/src/assets/projects/employee-api.png',
    tagline: 'RESTful employee management API with JWT authentication, validation, database operations, and API testing.',
    stack: ['Python', 'Flask', 'SQLAlchemy', 'Postman'],
    details: {
      problem: 'Managing employee records requires more than basic CRUD. Without authentication, validation, search, pagination, and proper error handling, an API can be difficult to use reliably and securely.',
      overview: 'Built a RESTful API for managing employee records from scratch, implementing authentication, database operations, validation, pagination, search, and error handling.',
      highlights: [
        'Implemented JWT-based authentication with bcrypt password hashing for protected routes',
        'Tested unauthorized requests and verified 401 responses for missing or invalid tokens',
        'Implemented full CRUD operations with required-field and unique-email validation.',
        'Added pagination and search using query parameters for employee records.',
        'Structured the application using the Flask app-factory pattern and Blueprints for authentication and employee routes.',
        'Debugged issues including duplicate function definitions, missing routes, and JWT configuration problems.',
      ],
      results: '7 API endpoints were tested and documented using an exportable Postman collection, with a structured GitHub repository containing the README and database schema documentation.',
      future: 'Add role-based access control for admin and employee permissions and deploy the API using a production WSGI server.',
    },
    github: 'https://github.com/Chinmayi-dev/employee-management-api',
    demo: null,
  },
  {
    title: 'Neural Recommendation Engine',
    art: 'neural',
    image: '/src/assets/projects/recommendation-engine.png',
    tagline: 'AI-powered two-tower recommendation system that learns user-item interaction patterns to generate personalized product recommendations.',
    stack: ['Python', 'FastAPI', 'PySpark', 'TensorFlow'],
    details: {
      problem: 'Traditional recommendation approaches struggle to capture complex user–item relationships, especially with sparse interaction data.',
      overview: 'Built an end-to-end deep learning recommendation engine that learns user–item interaction patterns to generate personalized product recommendations.',
      highlights: [
        'Processed 31.7M+ transaction records using PySpark, then sampled to a 1.59M-interaction training set, engineering features like recency, popularity, and cold-start indicators',
        'Designed and trained a Two-Tower Neural Network using TensorFlow Recommenders for personalized retrieval',
        'Generated 32-dimensional embeddings for users and items from interaction data',
        'Built a FastAPI service to serve recommendations using cached embeddings.',
        'Created an interactive demo interface to visualize ranked recommendations',
      ],
      results: 'Achieved a 4× improvement over a random-baseline retrieval model (Recall@100), evaluated across 1.59M user–item interactions spanning 78,388 products.',
      future: 'Improve cold-start recommendations, incorporate implicit user feedback, and use ANN-based retrieval for larger product catalogs.',
    },
    github: 'https://github.com/Chinmayi-dev/Context-Aware-Recommendation-System',
    demo: null,
  },
  {
    title: 'Real-Time Industrial Defect Detection System',
    art: 'defect',
    image: '/src/assets/projects/industrial-defect.png',
    tagline: 'Computer vision system for detecting and classifying surface defects in manufactured metal components from image, video, and webcam inputs.',
    stack: ['Python', 'PyTorch', 'OpenCV', 'FastAPI'],
    workflow: ['Camera / Image Input', 'Image Preprocessing', 'YOLOv8 Detection', 'Defect Classification', 'Defect Location & Visualization', 'Inspection Result'],
    details: {
      problem: 'Manual inspection of manufactured surfaces can be slow and inconsistent, creating a need for automated defect detection in quality-control workflows.',
      overview: "Contributed to a team project that developed a computer vision pipeline for detecting and classifying surface defects on manufactured metal components.",
      highlights: [
        'Built an OpenCV-based video/image capture pipeline supporting webcam, video file, and live stream input',
        "Integrated the team's trained YOLOv8 model for real-time defect detection with bounding box visualization",
        'Implemented FPS tracking to benchmark inference performance',
        'Built a FastAPI-based application for multi-image upload and detection visualization',
        'Debugged model integration issues including model file corruption and input-signature mismatches',
      ],
      results: "Integrated the team's trained YOLOv8 model, achieving 0.72 mAP@50 on the 6-class NEU Metal Surface Defects dataset, and validated the pipeline across image, video, and webcam inputs.",
      future: 'Deploy the detection pipeline on edge devices, integrate industrial camera feeds, and connect detection results to automated sorting systems.',
    },
    github: null,
    demo: null,
  },
  {
    title: 'Pesticide Prediction and Prescription for Coffee Leaf Disease Detection',
    art: 'leaf',
    image: '/src/assets/projects/coffee-disease.png',
    tagline: 'AI web application that detects coffee leaf diseases and provides region- and season-specific pesticide prescriptions.',
    stack: ['Python', 'Flask', 'YOLOv8', 'MySQL', 'HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
    details: {
      problem: 'Coffee farmers often lack quick, accessible ways to identify leaf diseases early and determine which pesticide treatment is suitable for their region and season.',
      overview: 'Built an AI web application that detects coffee leaf diseases from images and provides region- and season-specific pesticide prescriptions.',
      highlights: [
        'Preprocessed and prepared a 9,009-image dataset for model training and evaluation',
        'Trained and evaluated YOLOv8 for coffee leaf disease detection',
        'Built a recommendation layer mapping detected disease + region + season to pesticide guidance',
        'Added user authentication, per-user scan history, and multilingual support',
        'Built a model validation dashboard to visualize performance metrics',
        'Integrated Flask and MySQL for predictions, authentication, and pesticide prescriptions.',
      ],
      results: 'Achieved 58.9% precision, 59.9% recall, and 57.5% mAP@50 during model evaluation.',
      future: 'Expand the training dataset across more disease classes and regions to improve detection performance.',
    },
    github: null,
    demo: null,
  },
];

export const education = [
  { degree: 'Master of Computer Applications (MCA)', school: 'JSS Science and Technology University, Mysuru', duration: '2024 – 2026', cgpa: '8.58 CGPA' },
  { degree: 'Bachelor of Computer Applications (BCA)', school: 'DVS College of Arts and Science, Shivamogga', duration: '2021 – 2024', cgpa: '8.81 CGPA' },
];

export const certifications = [
  { title: 'Python for Beginners', org: 'Simplilearn', date: 'March 2025', url: null },
  { title: 'Deloitte Australia Data Analytics Job Simulation', org: 'Forage', date: 'February 2026', url: null },
  { title: 'Full-Stack AI Engineer 2026: ML, Deep Learning, Generative AI', org: 'Udemy', date: 'February 2026', url: null },
  { title: 'Tata - Data Visualisation: Empowering Business with Effective Insights Job Simulation', org: 'Forage', date: 'June 2026', url: null },
];

export const whatIBuild = [
  { title: 'AI/ML Applications', description: 'Machine learning and computer vision applications for practical, data-driven problems.' },
  { title: 'Data-Driven Systems', description: 'Data processing and machine learning systems for recommendations, analysis, and practical insights.' },
  { title: 'Full-Stack Development', description: 'Responsive web applications with frontend, backend integration, REST APIs, and database services.' },
  { title: 'Backend & REST APIs', description: 'Backend services with API development, authentication, validation, database integration, testing, and debugging.' },
];