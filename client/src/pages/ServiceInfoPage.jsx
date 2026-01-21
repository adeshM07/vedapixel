import React, { useEffect } from "react";
import "../CSS/ServiceInfoPage.css";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import "../CSS/Body.css";
import up from "../assets/upwards.png";
import down from "../assets/downwards.png";
import { ChevronUp, ChevronDown } from "lucide-react";

const ServiceInfoPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [showFAQ, setShowFAQ] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: ["0%", "-50%"],
      transition: {
        ease: "linear",
        duration: 20,
        repeat: Infinity,
      },
    });
  }, []);

  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth < 1024);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const handleToggle = (index) => {
    if (isMobile) {
      setActiveIndex(activeIndex === index ? null : index);
    }
  };
  const location = useLocation();
  const [service, setService] = useState();
  useEffect(() => {
    if (location.state && location.state.askedService) {
      const { askedService } = location.state;
      console.log("Service key received:", askedService);
      setService(askedService);
    } else {
      console.warn("No service received in state");
    }
  }, [location.state]);

  const [openIndex, setOpenIndex] = useState(null);
  let serviceInfo = {
    mobile: {
      title: "Mobile Application Development",
      intro:
        "Vedapixel builds production-ready mobile applications designed for performance, scalability and real-world usage. We develop Android, iOS and cross-platform apps with a strong focus on stability, clean architecture and long-term maintainability.",
      technologies: [
        "Swift",
        "Kotlin",
        "Dart",
        "Java",
        "JavaScript",
        "Flutter",
        "React Native",
        "Node.js",
        "Python",
        "Firebase",
        "Laravel",
        "MySQL",
        "PostgreSQL",
        "MongoDB",
        "AWS",
        "Google Cloud",
        "Docker",
      ],
      buttonText: "Connect with our Experts",
      expertise: [
        {
          title: "Native Mobile Applications",
          desc: "High-performance Android and iOS apps built for platform stability.",
        },
        {
          title: "Cross-Platform Mobile Apps",
          desc: "Single-codebase apps ensuring consistent experience across devices.",
        },
        {
          title: "Enterprise Mobility Solutions",
          desc: "Secure mobile systems supporting internal business workflows.",
        },
        {
          title: "On-Demand Applications",
          desc: "Real-time apps built for services, bookings, and marketplaces.",
        },
        {
          title: "UI/UX-Focused App Design",
          desc: "User-centric designs that improve engagement and usability.",
        },
      ],
      whyUs: [
        "Expertise across native and cross-platform ecosystems",
        "Scalable and secure mobile architectures",
        "Transparent, agile, and deadline-driven development process",
        "Dedicated post-launch support and analytics-driven optimization",
        "Proven success across multiple industry verticals",
      ],
      process: [
        {
          title: "Discovery & Research",
          desc: "Understanding business goals, users, and technical feasibility.",
        },
        {
          title: "UI/UX Design",
          desc: "Designing intuitive and consistent mobile interfaces.",
        },
        {
          title: "Architecture Planning",
          desc: "Defining scalable and secure application structure.",
        },
        {
          title: "Development & Integration",
          desc: "Building features and integrating third-party services.",
        },
        {
          title: "Testing & Optimization",
          desc: "Ensuring performance across devices and OS versions.",
        },
        {
          title: "Deployment & Support",
          desc: "Launching the app with continuous updates and monitoring.",
        },
      ],
      faq: [
        {
          question: "What type of mobile apps do you build?",
          answer:
            "We build consumer apps, enterprise apps, and on-demand platforms.",
        },
        {
          question: "How do you ensure app scalability?",
          answer:
            "We design architecture that supports future growth and features.",
        },
        {
          question: "Can you integrate payment gateways and APIs?",
          answer:
            "Yes, we integrate payments, maps, analytics, and cloud services.",
        },
        {
          question: "Do you manage app store submissions?",
          answer: "We handle publishing, compliance, and updates.",
        },
        {
          question: "What support is provided after launch?",
          answer:
            "Ongoing maintenance, performance monitoring, and enhancements.",
        },
        {
          question: "Can you improve an existing app?",
          answer: "We audit, optimize, and extend existing applications.",
        },
      ],
    },

    web: {
      title: "Web Development",
      intro:
        "We build secure and scalable web applications that support digital operations, automation, and customer engagement.",
      technologies: [
        "React.js",
        "Next.js",
        "Angular",
        "Vue.js",
        "Node.js",
        "Express.js",
        "Django",
        "Laravel",
        "MongoDB",
        "MySQL",
        "PostgreSQL",
        "Firebase",
        "AWS",
        "Vercel",
        "Docker",
      ],
      buttonText: "Connect with our Experts",
      expertise: [
        {
          title: "Custom Web Applications",
          desc: "Tailored web solutions aligned with business needs.",
        },
        {
          title: "Responsive Interface Design",
          desc: "Optimized layouts for all screen sizes.",
        },
        {
          title: "Backend & API Systems",
          desc: "Robust backend services enabling secure data flow.",
        },
        {
          title: "Enterprise Web Platforms",
          desc: "Web systems designed for high-usage environments.",
        },
        {
          title: "Performance Optimization",
          desc: "Improving speed, stability, and efficiency.",
        },
      ],
      whyUs: [
        "Responsive, high-performance UI design",
        "Agile methodology for efficient delivery",
        "Optimized for SEO and conversion rates",
        "Secure, scalable, and maintainable codebase",
        "Continuous testing and deployment pipeline",
      ],
      process: [
        {
          title: "Requirement Analysis",
          desc: "Understanding functional and technical requirements.",
        },
        {
          title: "UI/UX Design",
          desc: "Creating responsive and user-friendly layouts.",
        },
        {
          title: "Architecture Planning",
          desc: "Structuring backend systems and integrations.",
        },
        {
          title: "Development",
          desc: "Implementing frontend and backend components.",
        },
        {
          title: "Testing & Validation",
          desc: "Verifying security, performance, and compatibility.",
        },
        {
          title: "Deployment & Support",
          desc: "Launching and maintaining the web application.",
        },
      ],
      faq: [
        {
          question: "Do you build dynamic web applications?",
          answer: "Yes, we specialize in full-featured web applications.",
        },
        {
          question: "Can web apps integrate with existing systems?",
          answer: "We support CRM, ERP, and third-party integrations.",
        },
        {
          question: "How is security handled?",
          answer: "Security is implemented at code and infrastructure levels.",
        },
        {
          question: "Are web apps SEO-friendly?",
          answer:
            "Technical SEO best practices are followed during development.",
        },
        {
          question: "Can the application handle high traffic?",
          answer: "Our systems are designed to scale with demand.",
        },
        {
          question: "Do you offer post-launch enhancements?",
          answer: "Yes, continuous improvements and updates are available.",
        },
      ],
    },

    game: {
      title: "Gaming App Development",
      intro:
        "We develop engaging gaming applications focused on performance, gameplay mechanics, and long-term user retention.",
      technologies: [
        "Unity",
        "Unreal Engine",
        "C#",
        "C++",
        "Blender",
        "Maya",
        "Photon",
        "Firebase",
        "PlayFab",
      ],
      buttonText: "Connect with our Experts",
      expertise: [
        {
          title: "Mobile Game Development",
          desc: "Games designed for Android and iOS platforms.",
        },
        {
          title: "Cross-Platform Games",
          desc: "Games optimized to run across multiple devices.",
        },
        {
          title: "Gameplay Mechanics & Logic",
          desc: "Core systems designed for engagement.",
        },
        {
          title: "Multiplayer & Real-Time Games",
          desc: "Real-time interactions and network-based gameplay.",
        },
        {
          title: "Game Performance Optimization",
          desc: "Smooth gameplay through optimized rendering.",
        },
      ],
      whyUs: [
        "Cross-platform gaming expertise",
        "Interactive design with smooth performance",
        "Optimized for different device configurations",
        "Focus on user engagement and retention",
        "Comprehensive post-launch support",
      ],
      process: [
        {
          title: "Concept Planning",
          desc: "Defining game idea, audience, and platform.",
        },
        {
          title: "Game Design",
          desc: "Designing gameplay flow and user interface.",
        },
        {
          title: "Development",
          desc: "Implementing game logic and assets.",
        },
        {
          title: "Testing & Optimization",
          desc: "Ensuring smooth and stable gameplay.",
        },
        {
          title: "Deployment",
          desc: "Publishing games to target platforms.",
        },
        {
          title: "Updates & Support",
          desc: "Providing fixes, updates, and new features.",
        },
      ],
      faq: [
        {
          question: "What game genres do you support?",
          answer: "We build casual, strategy, simulation, and real-time games.",
        },
        {
          question: "Can monetization be integrated?",
          answer: "Ads, subscriptions, and in-app purchases are supported.",
        },
        {
          question: "Do you optimize for low-end devices?",
          answer: "Yes, performance optimization is a key focus.",
        },
        {
          question: "Can existing games be upgraded?",
          answer: "We enhance features, graphics, and performance.",
        },
        {
          question: "Do you support live updates?",
          answer: "Yes, continuous updates and patches are provided.",
        },
        {
          question: "Is multiplayer supported?",
          answer: "Real-time and multiplayer functionality is available.",
        },
      ],
    },

    arvr: {
      title: "AR / VR Development",
      intro:
        "We create immersive AR and VR solutions that enhance visualization, training, and interactive experiences.",
      technologies: [
        "Unity",
        "Unreal Engine",
        "ARKit",
        "ARCore",
        "Three.js",
        "Oculus SDK",
        "Vuforia",
      ],
      buttonText: "Connect with our Experts",
      expertise: [
        {
          title: "Augmented Reality Applications",
          desc: "AR experiences blending digital content with the real world.",
        },
        {
          title: "Virtual Reality Simulations",
          desc: "Immersive VR environments for realistic interaction.",
        },
        {
          title: "3D Visualization",
          desc: "High-quality 3D assets for digital environments.",
        },
        {
          title: "Product Demonstrations",
          desc: "Interactive AR-based product showcases.",
        },
        {
          title: "Training Solutions",
          desc: "VR environments designed for learning and safety.",
        },
      ],
      whyUs: [
        "End-to-end AR/VR app development",
        "Cross-platform compatibility",
        "Optimized performance for headsets and mobile",
        "Proven expertise across industries",
        "High-fidelity visual experiences",
      ],
      process: [
        {
          title: "Concept & Research",
          desc: "Understanding objectives and user scenarios.",
        },
        {
          title: "3D Design & Modelling",
          desc: "Creating optimized 3D assets and environments.",
        },
        {
          title: "Development & Integration",
          desc: "Implementing interactions and device support.",
        },
        {
          title: "Testing & Optimization",
          desc: "Ensuring performance and user comfort.",
        },
        {
          title: "Deployment & Training",
          desc: "Launching solutions and onboarding users.",
        },
        {
          title: "Support & Updates",
          desc: "Maintaining and enhancing experiences.",
        },
      ],
      faq: [
        {
          question: "Which industries use AR/VR solutions?",
          answer:
            "Used across training, real estate, manufacturing, and marketing.",
        },
        {
          question: "Do AR/VR apps support multiple devices?",
          answer:
            "Solutions are built for supported mobile and headset devices.",
        },
        {
          question: "Can AR/VR improve operational efficiency?",
          answer:
            "It reduces training time and improves visualization accuracy.",
        },
        {
          question: "Do you create custom 3D models?",
          answer: "Yes, all 3D content is custom-designed.",
        },
        {
          question: "Is post-launch support available?",
          answer: "Continuous updates and maintenance are provided.",
        },
        {
          question: "Can AR/VR integrate with existing systems?",
          answer: "Yes, system integrations are supported.",
        },
      ],
    },

    erp: {
      title: "ERP Development",
      intro:
        "We develop ERP systems that centralize data, automate workflows, and improve operational efficiency.",
      technologies: [
        "Odoo",
        "SAP",
        "Oracle ERP",
        "React.js",
        "Node.js",
        "Python",
        "MySQL",
        "PostgreSQL",
        "AWS",
        "Docker",
      ],
      buttonText: "Connect with our Experts",
      expertise: [
        {
          title: "Custom ERP Systems",
          desc: "ERP solutions tailored to business workflows.",
        },
        {
          title: "Modular ERP Architecture",
          desc: "Scalable modules that grow with operations.",
        },
        {
          title: "Workflow Automation",
          desc: "Automation of repetitive business processes.",
        },
        {
          title: "Reporting & Analytics",
          desc: "Centralized insights for decision-making.",
        },
        {
          title: "System Integrations",
          desc: "Connecting ERP with existing platforms.",
        },
      ],
      whyUs: [
        "Custom, scalable ERP modules",
        "Industry-specific workflow automation",
        "Secure and compliant architecture",
        "Advanced analytics and reporting dashboards",
        "Proven ERP migration expertise",
      ],
      process: [
        {
          title: "Business Analysis",
          desc: "Studying workflows and operational challenges.",
        },
        {
          title: "System Design",
          desc: "Planning ERP structure and modules.",
        },
        {
          title: "Development",
          desc: "Building ERP features and integrations.",
        },
        {
          title: "Testing & Validation",
          desc: "Ensuring data accuracy and stability.",
        },
        {
          title: "Deployment",
          desc: "Rolling out ERP systems smoothly.",
        },
        {
          title: "Maintenance & Support",
          desc: "Providing updates and ongoing support.",
        },
      ],
      faq: [
        {
          question: "Can ERP be customized per department?",
          answer: "Yes, ERP modules are built per department needs.",
        },
        {
          question: "Is ERP suitable for small businesses?",
          answer: "ERP systems scale for SMEs and enterprises.",
        },
        {
          question: "Can ERP integrate with accounting tools?",
          answer: "Integration with financial software is supported.",
        },
        {
          question: "How is data security handled?",
          answer: "Role-based access and encryption are implemented.",
        },
        {
          question: "Do you provide ERP training?",
          answer: "User training and documentation are included.",
        },
        {
          question: "Is long-term support available?",
          answer: "Yes, continuous ERP support is offered.",
        },
      ],
    },

    chatbot: {
      title: "Chatbot Development",
      intro:
        "We build intelligent chatbots that automate communication and enhance customer engagement.",
      technologies: [
        "Dialogflow",
        "Microsoft Bot Framework",
        "Rasa",
        "Python",
        "Node.js",
        "TensorFlow",
        "OpenAI API",
        "Twilio",
      ],
      buttonText: "Connect with our Experts",
      expertise: [
        {
          title: "AI-Powered Chatbots",
          desc: "Automated conversational solutions for businesses.",
        },
        {
          title: "Customer Support Bots",
          desc: "Reducing response time and support workload.",
        },
        {
          title: "Multi-Channel Bots",
          desc: "Deployment across web and messaging platforms.",
        },
        {
          title: "Backend Integrations",
          desc: "Connecting chatbots with business systems.",
        },
        {
          title: "Conversation Optimization",
          desc: "Improving response accuracy and flow.",
        },
      ],
      whyUs: [
        "End-to-end chatbot automation",
        "Custom NLP models for accuracy",
        "Omnichannel integration capability",
        "Secure, scalable cloud infrastructure",
        "Continuous learning and optimization",
      ],
      process: [
        {
          title: "Requirement Discovery",
          desc: "Identifying chatbot goals and use cases.",
        },
        {
          title: "Conversation Design",
          desc: "Structuring conversational flows.",
        },
        {
          title: "Development",
          desc: "Building chatbot logic and integrations.",
        },
        { title: "Testing", desc: "Validating responses and edge cases." },
        { title: "Deployment", desc: "Launching bots across channels." },
        {
          title: "Optimization & Support",
          desc: "Continuous improvement over time.",
        },
      ],
      faq: [
        {
          question: "What tasks can chatbots automate?",
          answer: "Handling inquiries, bookings, and support requests.",
        },
        {
          question: "Can chatbots understand user intent?",
          answer: "They are trained to recognize intent and context.",
        },
        {
          question: "Do chatbots integrate with CRMs?",
          answer: "Yes, CRM and backend integrations are supported.",
        },
        {
          question: "Can existing bots be improved?",
          answer: "Accuracy and features can be enhanced.",
        },
        {
          question: "Is ongoing optimization available?",
          answer: "Yes, continuous training and updates are provided.",
        },
        {
          question: "Are chatbots scalable?",
          answer: "They are designed to handle growing usage.",
        },
      ],
    },

    ai: {
      title: "AI / ML Development",
      intro:
        "We develop AI and ML solutions that enable automation and data-driven decision-making.",
      technologies: [
        "Python",
        "TensorFlow",
        "PyTorch",
        "OpenAI API",
        "Scikit-learn",
        "AWS AI",
        "Google Cloud AI",
        "Keras",
      ],
      buttonText: "Connect with our Experts",
      expertise: [
        {
          title: "Machine Learning Models",
          desc: "Custom models built for business use cases.",
        },
        {
          title: "Predictive Analytics",
          desc: "Forecasting trends using historical data.",
        },
        {
          title: "Intelligent Automation",
          desc: "Reducing manual processes with AI.",
        },
        {
          title: "Data Processing Systems",
          desc: "Handling large datasets efficiently.",
        },
        {
          title: "AI System Integration",
          desc: "Embedding AI into existing platforms.",
        },
      ],
      whyUs: [
        "Expertise in deep learning and ML algorithms",
        "Scalable model deployment on cloud",
        "Ethical and explainable AI practices",
        "Integration with existing enterprise systems",
        "Continuous improvement via MLOps pipelines",
      ],
      process: [
        {
          title: "Data Assessment",
          desc: "Evaluating data quality and scope.",
        },
        { title: "Model Design", desc: "Selecting appropriate algorithms." },
        { title: "Model Development", desc: "Training and validating models." },
        {
          title: "Testing & Evaluation",
          desc: "Measuring accuracy and reliability.",
        },
        {
          title: "Deployment",
          desc: "Integrating models into production systems.",
        },
        { title: "Continuous Improvement", desc: "Refining models over time." },
      ],
      faq: [
        {
          question: "What industries benefit from AI solutions?",
          answer:
            "AI is used across finance, healthcare, retail, and operations.",
        },
        {
          question: "Can AI work with limited data?",
          answer: "Models are designed based on available data.",
        },
        {
          question: "How is AI accuracy measured?",
          answer: "Using validation metrics and performance benchmarks.",
        },
        {
          question: "Can AI integrate with existing software?",
          answer: "Yes, APIs enable seamless integration.",
        },
        {
          question: "Is AI scalable?",
          answer: "Solutions are designed for growth.",
        },
        {
          question: "Do you provide ongoing model tuning?",
          answer: "Continuous optimization is included.",
        },
      ],
    },

    crm: {
      title: "CRM Development",
      intro:
        "We design CRM systems that help businesses manage customers, sales, and relationships efficiently.",
      technologies: [
        "Salesforce",
        "Zoho CRM",
        "Node.js",
        "React.js",
        "MySQL",
        "PostgreSQL",
        "Firebase",
        "AWS",
      ],
      buttonText: "Connect with our Experts",
      expertise: [
        {
          title: "Custom CRM Systems",
          desc: "CRM platforms tailored to workflows.",
        },
        {
          title: "Sales & Lead Management",
          desc: "Tracking customer journeys effectively.",
        },
        {
          title: "Workflow Automation",
          desc: "Automating customer-related processes.",
        },
        {
          title: "Reporting & Insights",
          desc: "Monitoring performance and engagement.",
        },
        {
          title: "Third-Party Integrations",
          desc: "Connecting CRM with external tools.",
        },
      ],
      whyUs: [
        "Deep domain expertise across CRM ecosystems",
        "Data-driven architecture and automation",
        "Customizable modules with role-based access",
        "Cross-platform integration capability",
        "Post-deployment support and training",
      ],
      process: [
        {
          title: "Requirement Analysis",
          desc: "Understanding CRM objectives.",
        },
        {
          title: "CRM Design",
          desc: "Planning workflows and dashboards.",
        },
        {
          title: "Development",
          desc: "Implementing CRM features.",
        },
        {
          title: "Testing",
          desc: "Validating data flow and logic.",
        },
        { title: "Deployment", desc: "Launching the CRM system." },
        {
          title: "Enhancements & Support",
          desc: "Providing updates and improvements.",
        },
      ],
      faq: [
        {
          question: "Can CRM be customized for sales teams?",
          answer: "Workflows are tailored per team requirements.",
        },
        {
          question: "Does CRM support automation?",
          answer: "Automation is built into core processes.",
        },
        {
          question: "Can CRM integrate with email tools?",
          answer: "Email and communication integrations are supported.",
        },
        {
          question: "Is CRM scalable?",
          answer: "Designed to grow with business needs.",
        },
        {
          question: "Do you provide CRM training?",
          answer: "Training and documentation are included.",
        },
        {
          question: "Is post-launch support available?",
          answer: "Yes, ongoing support is provided.",
        },
      ],
    },

    cloud: {
      title: "Cloud & DevOps Services",
      intro:
        "We enable scalable cloud infrastructure and DevOps practices for reliable deployments and operations.",
      technologies: [
        "AWS",
        "Google Cloud",
        "Azure",
        "Kubernetes",
        "Docker",
        "Terraform",
        "Jenkins",
        "Node.js",
      ],
      buttonText: "Connect with our Experts",
      expertise: [
        {
          title: "Cloud Architecture Design",
          desc: "Secure and scalable cloud environments.",
        },
        {
          title: "CI/CD Pipelines",
          desc: "Automated build and deployment workflows.",
        },
        {
          title: "Infrastructure Automation",
          desc: "Reducing manual operational effort.",
        },
        {
          title: "Monitoring & Optimization",
          desc: "Tracking system performance and uptime.",
        },
        {
          title: "Cloud Security",
          desc: "Protecting infrastructure and data.",
        },
      ],
      whyUs: [
        "Certified cloud specialists",
        "Cost-effective architecture design",
        "Continuous monitoring and optimization",
        "Multi-cloud and hybrid expertise",
        "Strong DevOps integration capabilities",
      ],
      process: [
        {
          title: "Infrastructure Assessment",
          desc: "Reviewing existing systems and needs.",
        },
        {
          title: "Architecture Design",
          desc: "Planning cloud and DevOps setup.",
        },
        {
          title: "Implementation",
          desc: "Setting up cloud services and pipelines.",
        },
        { title: "Automation", desc: "Configuring CI/CD workflows." },
        { title: "Monitoring", desc: "Tracking performance and reliability." },
        {
          title: "Optimization & Support",
          desc: "Continuous system improvements.",
        },
      ],
      faq: [
        {
          question: "Do you support cloud migration?",
          answer: "We handle full and partial cloud migrations.",
        },
        {
          question: "Which cloud platforms do you support?",
          answer: "AWS, Azure, and Google Cloud are supported.",
        },
        {
          question: "Is CI/CD mandatory?",
          answer: "CI/CD improves reliability and speed of delivery.",
        },
        {
          question: "How is cloud security handled?",
          answer: "Security best practices are applied throughout.",
        },
        {
          question: "Do you provide ongoing monitoring?",
          answer: "Yes, continuous monitoring is included.",
        },
        {
          question: "Is long-term support available?",
          answer: "Ongoing cloud support is offered.",
        },
      ],
    },

    maintenance: {
      title: "Maintenance & Support",
      intro:
        "We provide continuous maintenance to ensure applications remain secure, stable, and up to date.",
      technologies: [
        "React.js",
        "Node.js",
        "Python",
        "Java",
        "MySQL",
        "MongoDB",
        "AWS",
        "Docker",
      ],
      buttonText: "Connect with our Experts",
      expertise: [
        {
          title: "Application Maintenance",
          desc: "Ensuring system health and stability.",
        },
        {
          title: "Bug Fixes",
          desc: "Resolving issues efficiently.",
        },
        {
          title: "Performance Monitoring",
          desc: "Tracking uptime and responsiveness.",
        },
        {
          title: "Security Updates",
          desc: "Applying regular protection updates.",
        },
        {
          title: "Technical Support",
          desc: "Providing reliable assistance.",
        },
      ],
      whyUs: [
        "24/7 support and quick response time",
        "Dedicated maintenance teams",
        "Predictive monitoring and issue prevention",
        "Cost-effective long-term plans",
        "Experience across multiple domains",
      ],
      process: [
        {
          title: "System Review",
          desc: "Assessing application health.",
        },
        {
          title: "Issue Resolution",
          desc: "Fixing bugs and errors.",
        },
        {
          title: "Enhancements",
          desc: "Implementing improvements.",
        },
        {
          title: "Monitoring",
          desc: "Tracking system performance.",
        },
        {
          title: "Security Updates",
          desc: "Applying security patches.",
        },
        {
          title: "Ongoing Support",
          desc: "Providing continuous assistance.",
        },
      ],
      faq: [
        {
          question: "Do you support legacy applications?",
          answer: "Legacy systems can be maintained and upgraded.",
        },
        {
          question: "Is performance monitoring included?",
          answer: "Continuous monitoring is part of support.",
        },
        {
          question: "Can support plans be customized?",
          answer: "Support plans are flexible.",
        },
        {
          question: "Are security updates regular?",
          answer: "Updates are applied consistently.",
        },
        {
          question: "Do you provide SLAs?",
          answer: "Service agreements can be defined.",
        },
        {
          question: "Is long-term support available?",
          answer: "Yes, extended support is offered.",
        },
      ],
    },

    blockchain: {
      title: "Blockchain Development",
      intro:
        "We develop secure blockchain applications and smart contracts with transparent and reliable architecture.",
      technologies: [
        "Solidity",
        "Ethereum",
        "Polygon",
        "Binance Smart Chain",
        "Hyperledger",
        "Node.js",
        "IPFS",
        "Truffle",
      ],
      buttonText: "Connect with our Experts",
      expertise: [
        {
          title: "Decentralized Applications",
          desc: "Blockchain-based application development.",
        },
        {
          title: "Smart Contracts",
          desc: "Automated and secure contract logic.",
        },
        {
          title: "Transaction Systems",
          desc: "Blockchain-powered transaction processing.",
        },
        {
          title: "Decentralized Architecture",
          desc: "Distributed system design.",
        },
        {
          title: "Blockchain Integration",
          desc: "Connecting blockchain with applications.",
        },
      ],
      whyUs: [
        "Experienced blockchain architects",
        "Secure, transparent smart contracts",
        "Integration with Web3 technologies",
        "Gas-optimized transactions",
        "Cross-chain interoperability",
      ],
      process: [
        {
          title: "Use-Case Analysis",
          desc: "Defining blockchain objectives.",
        },
        {
          title: "Design",
          desc: "Planning decentralized structure.",
        },
        { title: "Development", desc: "Building blockchain components." },
        { title: "Testing", desc: "Validating security and performance." },
        { title: "Deployment", desc: "Launching blockchain solutions." },
        {
          title: "Support & Maintenance",
          desc: "Continuous monitoring and updates.",
        },
      ],
      faq: [
        {
          question: "Do you build private blockchains?",
          answer: "Both private and public solutions are supported.",
        },
        {
          question: "Are smart contracts audited?",
          answer: "Security testing is part of development.",
        },
        {
          question: "Can blockchain integrate with apps?",
          answer: "Yes, integrations are supported.",
        },
        {
          question: "Is scalability considered?",
          answer: "Scalability is planned from the start.",
        },
        {
          question: "Do you provide post-launch support?",
          answer: "Ongoing support is available.",
        },
        {
          question: "Can existing blockchain systems be improved?",
          answer: "Yes, enhancements and optimizations are possible.",
        },
      ],
    },

    iot: {
      title: "Internet of Things",
      intro:
        "We build IoT solutions that connect devices, data, and cloud platforms for real-time insights.",
      technologies: [
        "Arduino",
        "Raspberry Pi",
        "MQTT",
        "AWS IoT Core",
        "Azure IoT Hub",
        "Node.js",
        "Python",
        "C++",
      ],
      buttonText: "Connect with our Experts",
      expertise: [
        {
          title: "IoT Application Development",
          desc: "Connected applications for smart devices.",
        },
        {
          title: "Device Integration",
          desc: "Linking hardware with software systems.",
        },
        {
          title: "Real-Time Data Processing",
          desc: "Handling live device data streams.",
        },
        {
          title: "Cloud Connectivity",
          desc: "Secure communication with cloud platforms.",
        },
        {
          title: "IoT Monitoring Systems",
          desc: "Continuous device performance tracking.",
        },
      ],
      whyUs: [
        "Custom IoT platforms tailored to your use case",
        "Cloud-integrated and scalable systems",
        "Strong hardware-software integration",
        "Data-driven decision-making via analytics",
        "Secure, encrypted device communication",
      ],
      process: [
        {
          title: "Use-Case Analysis",
          desc: "Understanding device and data requirements.",
        },
        {
          title: "System Design",
          desc: "Planning IoT architecture.",
        },
        { title: "Development", desc: "Building IoT applications." },
        {
          title: "Integration",
          desc: "Connecting devices and cloud platforms.",
        },
        { title: "Testing", desc: "Validating performance and security." },
        {
          title: "Deployment & Support",
          desc: "Launching and maintaining systems.",
        },
      ],
      faq: [
        {
          question: "Can IoT integrate with existing hardware?",
          answer: "Existing devices can be integrated.",
        },
        {
          question: "How is IoT data secured?",
          answer: "Encryption and access controls are applied.",
        },
        {
          question: "Can IoT scale to many devices?",
          answer: "Solutions are designed for large device networks.",
        },
        {
          question: "Is real-time monitoring available?",
          answer: "Dashboards provide live insights.",
        },
        {
          question: "Do you provide long-term IoT support?",
          answer: "Continuous support is available.",
        },
        {
          question: "Can IoT integrate with analytics platforms?",
          answer: "Yes, analytics and reporting integrations are supported.",
        },
      ],
    },
  };

  if (!service || !serviceInfo[service]) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white text-[2rem]">
        Loading...
      </div>
    );
  }

  return (
    <>
      {/* {service && ( */}
      <div className=" w-full pt-[20px] flex flex-col place-items-center px-4 md:px-15 lg:px-15 xl:px-30 2xl:px-40">
        <div className="w-full text-start   mt-[100px] flex flex-col gap-[1.2rem]">
          <p className="text-[2rem] md:text-[2.5rem] lg:text-[3rem]  text-[#F8F9FA] font-garotaSans font-normal ">
            {serviceInfo[service]?.title}
          </p>
          <p className="text-[1rem] md:text-[1.5rem] text-[#C8C1C1] font-poppins font-normal">
            {serviceInfo[service]?.intro}
          </p>
        </div>
        <div className="w-full  mt-[80px] md:mt-[40px] overflow-hidden">
          <p className="  text-[1.5rem] md:text-[1.8rem] text-start  text-[#C8C1C1] mb-4 font-poppins font-normal">
            Technologies We Use
          </p>

          <div className="relative w-full flex overflow-hidden">
            <motion.div
              className="flex gap-[20px]"
              animate={controls}
              initial={{ x: "0%" }}
              onHoverStart={() => controls.stop()}
              onHoverEnd={() =>
                controls.start({
                  x: ["0%", "-50%"],
                  transition: {
                    ease: "linear",
                    duration: 20,
                    repeat: Infinity,
                  },
                })
              }
            >
              {[
                ...(serviceInfo[service].technologies || []),
                ...(serviceInfo[service].technologies || []),
              ].map((value, index) => (
                <div
                  key={index}
                  className="py-3 px-4 h-fit w-fit rounded-md border border-[#C8C1C1]
                       font-poppins font-normal text-[1rem] md:text-[1.5rem] text-[#C8C1C1]
                       whitespace-nowrap hover:bg-gradient-to-r hover:from-[#BBABEB] hover:to-[#6A6185]
              transition-all duration-300 ease-in-out"
                >
                  {value}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
        {/* <div className="h-[20vh] w-[90vw]  md:w-[73vw] relative inline-block"> */}
        {/* <button
            className="rotating-btn w-[90vw] md:w-[73vw] mt-[60px] md:mt-[40px]  font-garota  text-[1.5rem] text-[#C8C1C1] 
             py-3 rounded-md transition-all duration-300 hover:scale-[1.02]"
            style={{
              border: "1.5px solid transparent",
              background:
                "linear-gradient(#101820, #101820) padding-box, linear-gradient(90deg, #BBABEB, #6A6185) border-box",
              borderRadius: "8px",
            }}
          >
            {serviceInfo[service]?.buttonText}
          </button> */}
        <Link to="/contactus" className="w-full">
          <button
            className=" rotating-btn
     relative font-poppins font-normal text-[1rem] md:text-[1.5rem] text-[#C8C1C1]
    w-full mt-[60px] md:mt-[40px]
    rounded-xl px-3  md:px-6 
    overflow-hidden

     border border-[#6A6185]

    transition-all duration-500 ease-in-out
    hover:bg-[linear-gradient(90deg,#bbabeb,#6a6185)]
    hover:text-white
    hover:shadow-[0_0_15px_rgba(177,156,217,0.4)]
    hover:-translate-y-1 h-[55px] md:h-[60px] lg:h-[70px] xl:h-[88px]
  "
          >
            {serviceInfo[service]?.buttonText}
          </button>
        </Link>

        {/* </div> */}
        <div className=" w-full mt-[100px]   flex flex-col gap-[0.8rem]">
          <p className="font-garotaSans font-normal  text-nowrap text-start text-[2.5rem] md:text-[3rem] lg:text-[3rem] xl:text-[3rem] w-full lg:w-full xl:w-full  text-white">
            Our Expertise
          </p>
          <div className="">
            <div className="flex flex-wrap justify-center gap-6 sm:gap-6 md:gap-4 lg:gap-6">
              {serviceInfo[service]?.expertise.map((item, index) => (
                <motion.div
                  key={index}
                  className="
                  
        w-[90vw] sm:w-[42vw] md:w-[30vw] lg:w-[360px] 
        h-[260px] sm:h-[280px] md:h-[160px] 
        flex flex-col justify-center gap-[0.8rem] 
        border border-white rounded-md 
        px-5 py-4  
        transition-all duration-300 
      "
                  style={{
                    transform: "translateZ(0)",
                    background:
                      "linear-gradient(139.47deg, rgba(16, 24, 32, 0.85) -45.69%, rgba(16, 24, 32, 0.95) 54.7%)",
                  }}
                >
                  <p className="text-[1.5rem]  md:text-[1.5rem]  xl:text-[1.5rem] service-desc text-[#F8F9FA] ">
                    {item.title}
                  </p>
                  <p className="text-[#C8C1C1] service-desc text-[1rem] md:text-[1rem] leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        {/* <div className="relative mt-[150px] md:mt-[100px] w-full">
          <p className="text-[2rem] md:text-[4rem] font-garotaSans  bg-gradient-to-b font-bold  from-[#C7B9F6] to-[#6A6185] bg-clip-text text-transparent leading-[1] absolute -top-5 md:-top-11 left-0 z-20 ">
            Why choose VedaPixel ?
          </p>
          <div
            className=" [@media(min-width:300px)_and_(max-width:450px)]:min-h-[22vh] min-h-[23.5vh]  flex place-items-center px-2 md:px-14 md:max-h-[42vh] lg:min-h-[21vh] xl:min-h-[40vh] [@media(min-width:2550px)]:min-h-[20vh] border-2 rounded-b-[50px] rounded-tr-[50px] md:rounded-b-[80px] md:rounded-tr-[80px]"
            style={{
              background:
                "linear-gradient(139.47deg, rgba(47, 54, 64, 0.8) -45.69%, rgba(16, 24, 32, 0.8) 54.7%)",
              backdropFilter: "blur(12px) saturate(180%)",
              WebkitBackdropFilter: "blur(12px) saturate(180%)",
              border: "2px solid rgba(255, 255, 255, 0.15)",
              boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
            }}
          >
            <ul className="list-disc md:mt-5 list-inside space-y-2">
              {serviceInfo[service]?.whyUs.map((value, index) => (
                <li
                  key={index}
                  className=" font-poppins font-normal [@media(min-width:300px)_and_(max-width:450px)]:text-[11px] text-[0.6rem] md:text-[1rem] lg:text-[1.2rem] xl:text-[1.3rem] 2xl:text-[1.5rem] text-[#C8C1C1] "
                >
                  {value}
                </li>
              ))}
            </ul>
          </div>
        </div> */}
        {/* <div className="relative mt-[150px] md:mt-[100px] w-full">

          <div
            id="whyVedapixel"
            className="relative isolate overflow-hidden
    [@media(min-width:300px)_and_(max-width:450px)]:min-h-[22vh]
    min-h-[23.5vh] flex place-items-center px-2 md:px-14
    md:max-h-[42vh] lg:min-h-[21vh] xl:min-h-[336px] 2xl:min-h-[386px]
    [@media(min-width:2550px)]:min-h-[20vh]
    rounded-b-[50px] rounded-tr-[50px]
    md:rounded-b-[80px] md:rounded-tr-[80px]"
          >

            <div
              className="absolute inset-0 pointer-events-none z-30
      rounded-b-[50px] rounded-tr-[50px]
      md:rounded-b-[80px] md:rounded-tr-[80px]
       border-white/40"
            />

          
            <ul className="relative z-20 list-disc md:mt-5 list-inside space-y-2">
              {serviceInfo[service]?.whyUs.map((value, index) => (
                <li
                  key={index}
                  className="font-poppins font-normal
          [@media(min-width:300px)_and_(max-width:450px)]:text-[11px]
          text-[0.6rem] md:text-[1rem] lg:text-[1.2rem]
          xl:text-[1.3rem] 2xl:text-[1.5rem]
          text-[#C8C1C1]"
                >
                  {value}
                </li>
              ))}
            </ul>

          </div>
        </div> */}

        <div className="flex flex-col mt-[100px] w-full gap-[0.8rem]">
          <p className="text-[2rem] md:text-[3rem] text-[#F8F9FA] font-garotaSans font-normal">
            Our Process
          </p>

          <div>
            {serviceInfo[service]?.process.map((item, index) => (
              <div
                key={index}
                className="flex flex-row items-center md:items-center gap-3 md:gap-1 "
              >
                {/* Step number */}
                <p className="text-[#C8C1C1] w-[8vw] sm:w-[6vw] md:w-[3vw]  text-[20px] md:text-[30px] lg:text-[40px] xl:text-[30px]">
                  {index + 1}.
                </p>

                {/* Step content */}
                <div
                  onClick={() => handleToggle(index)}
                  className="group relative flex flex-col border border-gray-800 border-l-white rounded-lg pl-4 md:pl-4 cursor-pointer text-[#F8F9FA] text-[1rem] md:text-[1.4rem] w-full  gap-1 py-2 md:py-3 transition-all duration-300 ease-in-out hover:border-[#BBABEB]/40"
                >
                  {/* Title */}
                  <p
                    className={`  ${activeIndex === index
                        ? "border-[#BBABEB]/40 text-[#BBABEB]"
                        : "text-[#F8F9FA] hover:border-[#BBABEB]/40"
                      } text-left font-garotaSans font-normal text-[20px] md:text-[30px] lg:text-[40px] xl:text-[30px]  hover:text-[#BBABEB] z-10`}
                  >
                    {item.title}
                  </p>

                  {/* Description */}
                  <div
                    className={`
              text-[0.8rem] md:text-[1.2rem] transition-all duration-500 ease-in-out overflow-hidden
              ${isMobile
                        ? activeIndex === index
                          ? "max-h-[500px] opacity-100 mt-2"
                          : "max-h-0 opacity-0 mt-0"
                        : "opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-[500px] group-hover:mt-2"
                      }
            `}
                  >
                    {item.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full flex mt-[100px] flex-col gap-[1.3rem]">
          <p className="text-[2.3rem] md:text-[2.7rem] gap-2 service-title text-[#F8F9FA] flex place-items-center">
            FAQs
            <span>
              <ChevronDown
                onClick={() => setShowFAQ(!showFAQ)}
                size={44}
                color="#BBABEB"
                className={`${showFAQ ? "hidden" : "block"} cursor-pointer`}
              />
              <ChevronUp
                onClick={() => setShowFAQ(!showFAQ)}
                size={44}
                color="#BBABEB"
                className={`${showFAQ ? "block" : "hidden"} cursor-pointer`}
              />
            </span>
          </p>
          <div
            className={`bg-[#0e141d]/50 backdrop-blur-lg  border rounded-lg border-[#F8F9FA] ${showFAQ ? "block" : "hidden"
              }`}
          >
            {serviceInfo[service]?.faq.map((faq, index) => (
              <div key={index} className="border-b border-[#2a2f37] ">
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full flex justify-between items-center px-6 py-5 text-left text-[#F8F9FA] hover:text-[#BBABEB] transition-all duration-200"
                >
                  <span
                    className={`  ${openIndex === index
                        ? "text-[#BBABEB]"
                        : "text-[#F8F9FA] hover:text-[#BBABEB]"
                      } text-[1rem] cursor-pointer w-[90%] md:text-[1.2rem] lg:text-[1.5rem] xl:text-[20px] font-poppins font-normal `}
                  >
                    {faq.question}
                  </span>
                  <span className="text-[#BBABEB] cursor-pointer text-[1rem] md:text-2xl">
                    {openIndex === index ? (
                      <img src={up} className="h-[25px] w-[25px]"></img>
                    ) : (
                      <img className="h-[25px] w-[25px]" src={down}></img>
                    )}
                  </span>
                </button>

                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-40 py-0" : "max-h-0"
                    }`}
                >
                  <p className="text-[#C8C1C1] service-desc text-[0.8rem] md:text-[1rem] leading-relaxed pb-3">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* )} */}
    </>
  );
};

export default ServiceInfoPage;
