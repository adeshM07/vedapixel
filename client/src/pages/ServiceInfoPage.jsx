import React, { useEffect } from "react";
import "../CSS/ServiceInfoPage.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import "../CSS/Body.css";
import up from "../assets/upwards.png";
import down from "../assets/downwards.png";

const ServiceInfoPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

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
      title: "Mobile Application",
      intro:
        "At Vedapixel Tech Solution Pvt. Ltd., we design and develop high-performance mobile applications that help businesses connect, engage, and grow. Whether you need a customer-facing app, enterprise mobility solution, or innovative startup product — we deliver seamless mobile experiences across iOS, Android, and cross-platform environments. Our goal is simple — to craft apps that blend functionality, performance, and stunning design to give your users a reason to keep coming back.",
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
      buttonText: "Hire App Developers",
      expertise: [
        {
          title: "Native Mobile Apps",
          desc: "Built for performance, security, and native features using Swift, Kotlin, and Java.",
        },
        {
          title: "Cross-Platform Apps",
          desc: "Unified codebase for Android & iOS using Flutter and React Native.",
        },
        {
          title: "Enterprise Mobility Solutions",
          desc: "Secure apps for internal operations, analytics, and team collaboration.",
        },
        {
          title: "On-Demand Apps",
          desc: "Real-time service platforms for food delivery, logistics, ridesharing, and more.",
        },
        {
          title: "UI/UX-Centric Design",
          desc: "Smooth interfaces and intuitive workflows built for user engagement.",
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
          title: "Discovery & Planning",
          desc: "Analyze goals, user needs, and project requirements.",
        },
        {
          title: "UI/UX Design",
          desc: "Build interactive, user-friendly, and visually consistent designs.",
        },
        {
          title: "Prototyping & Validation",
          desc: "Create app prototypes to validate flow and experience.",
        },
        {
          title: "Agile Development",
          desc: "Develop in iterative sprints for flexibility and transparency.",
        },
        {
          title: "Testing & QA",
          desc: "Perform functional, performance, and security testing.",
        },
        {
          title: "Deployment & Support",
          desc: "Launch, monitor, and maintain for long-term success.",
        },
      ],
      faq: [
        {
          question: "Do you develop both Android and iOS apps?",
          answer:
            "Yes. We build native apps for both platforms and also cross-platform apps using Flutter or React Native.",
        },
        {
          question: "Can you upgrade or maintain our existing app?",
          answer:
            "Absolutely. We handle app modernization, UI redesign, and feature updates for legacy apps.",
        },
        {
          question: "How long does mobile app development take?",
          answer:
            "A standard app can take 6–10 weeks; complex solutions may require 3–6 months, depending on features.",
        },
        {
          question: "Will my app support the latest OS updates?",
          answer:
            "Yes, we ensure full compatibility with the latest Android and iOS versions during every release.",
        },
        {
          question: "Do you help with app store deployment?",
          answer:
            "Yes, we manage complete app store submission, compliance, and optimization processes.",
        },
        {
          question: "Can you integrate third-party APIs or payment gateways?",
          answer:
            "Yes, we integrate APIs for payments, analytics, maps, and social logins seamlessly.",
        },
        {
          question: "Do you provide post-launch maintenance?",
          answer:
            "Definitely. We offer continuous monitoring, updates, and scalability improvements.",
        },
      ],
    },

    web: {
      title: "Web Application",
      intro:
        "We develop dynamic, responsive, and scalable web applications tailored to your business objectives. From e-commerce to complex SaaS platforms, we ensure seamless experiences across browsers and devices.",
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
      buttonText: "Hire Web Developers",
      expertise: [
        {
          title: "Custom Web Apps",
          desc: "Built for flexibility, scalability, and performance.",
        },
        {
          title: "E-Commerce Platforms",
          desc: "Feature-rich online stores with secure payment gateways.",
        },
        {
          title: "SaaS Development",
          desc: "Subscription-based web applications with modular architectures.",
        },
        {
          title: "Enterprise Portals",
          desc: "Centralized platforms for business workflows and analytics.",
        },
        {
          title: "PWA Development",
          desc: "Fast, installable Progressive Web Apps for modern experiences.",
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
          desc: "Identify business needs and project goals.",
        },
        {
          title: "UI/UX Design",
          desc: "Create interactive prototypes and wireframes.",
        },
        {
          title: "Development",
          desc: "Implement front-end and back-end architecture.",
        },
        {
          title: "Testing",
          desc: "Functional, usability, and security checks.",
        },
        {
          title: "Deployment",
          desc: "Launch on preferred hosting environment.",
        },
        {
          title: "Maintenance",
          desc: "Support, updates, and feature enhancements.",
        },
      ],
      faq: [
        {
          question: " What types of web solutions does Vedapixel offer?",
          answer:
            "We develop a wide range of web solutions — from corporate websites and web applications to enterprise systems, dashboards, and industry-specific platforms across all sectors.",
        },
        {
          question: "What technologies do you use for web development?",
          answer:
            "Our team works with React.js, Angular, Vue.js, Node.js, Python (Django), PHP (Laravel), and .NET Core — along with MySQL, MongoDB, and Firebase for databases.",
        },
        {
          question: " Can you redesign or upgrade an existing website?",
          answer:
            "Yes, we specialize in website redesigns, performance optimization, and technology migration to modern frameworks without disrupting your existing operations.",
        },
        {
          question: "How long does it take to build a website or web app?",
          answer:
            "It depends on complexity — a basic website may take 3–5 weeks, while advanced web apps or portals may take 2–4 months. We provide clear timelines before development starts.",
        },
        {
          question: "Will my website be mobile-friendly and SEO-optimized?",
          answer:
            "Absolutely. We design responsive, mobile-first, and SEO-ready websites to ensure high performance across devices and better visibility on search engines.",
        },
        {
          question: "Do you provide hosting and domain services?",
          answer:
            "While we primarily focus on development, we can assist with hosting setup, server deployment, and domain configuration through trusted cloud providers.",
        },
        {
          question: "Can you integrate third-party APIs or systems?",
          answer:
            "Yes, we can integrate CRMs, ERPs, payment systems, analytics tools, AI models, or any thirdparty APIs required for your business operations.",
        },
        {
          question:
            "Do you offer post-launch support for websites and web apps?",
          answer:
            "Yes. We provide long-term maintenance, updates, monitoring, and technical support to ensure consistent uptime, security, and scalability.",
        },
      ],
    },

    game: {
      title: "Game Development",
      intro:
        "We build immersive and interactive gaming experiences for mobile, desktop, and web platforms. From concept to deployment, our team designs games that captivate and engage users.",
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
      buttonText: "Hire Game Developers",
      expertise: [
        {
          title: "2D & 3D Games",
          desc: "Visually rich games with smooth physics and mechanics.",
        },
        {
          title: "Mobile Game Development",
          desc: "Optimized for Android and iOS platforms.",
        },
        {
          title: "Multiplayer Games",
          desc: "Seamless real-time gaming experiences with network synchronization.",
        },
        {
          title: "AR/VR Gaming",
          desc: "Immersive gameplay using next-gen AR/VR technology.",
        },
        {
          title: "Game Design & Animation",
          desc: "Engaging characters, environments, and interactions.",
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
          title: "Concept & Design",
          desc: "Ideation, storyboarding, and gameplay planning.",
        },
        {
          title: "Prototyping",
          desc: "Testing game mechanics and playability.",
        },
        {
          title: "Development",
          desc: "Programming gameplay, physics, and AI logic.",
        },
        {
          title: "Testing",
          desc: "Debugging, performance optimization, and QA.",
        },
        {
          title: "Launch",
          desc: "Publish on App Store, Play Store, or Steam.",
        },
        {
          title: "Support",
          desc: "Post-release updates and player feedback integration.",
        },
      ],
      faq: [
        {
          question: "Do you develop games for all platforms?",
          answer:
            "Yes, we create games for Android, iOS, PC, web, and consoles.",
        },
        {
          question: "What game engines do you use?",
          answer:
            "We primarily use Unity and Unreal Engine, depending on the project’s complexity.",
        },
        {
          question: "Can you assist with game publishing?",
          answer:
            "Yes, we support deployment, publishing, and marketing strategy for app stores and Steam.",
        },
        {
          question: "Do you provide game art and animation?",
          answer:
            "Yes, we offer full in-house design — from concept art to 3D modeling and animation.",
        },
        {
          question: "How long does it take to develop a game?",
          answer:
            "It varies based on scope — casual games may take 2–3 months; advanced ones up to 6–8 months.",
        },
        {
          question: "Can you integrate multiplayer features?",
          answer:
            "Absolutely. We implement real-time multiplayer, chat, and leaderboard systems.",
        },
        {
          question: "Do you handle post-launch updates?",
          answer:
            "Yes, we provide continuous support, new level additions, and performance enhancements.",
        },
      ],
    },

    arvr: {
      title: "AR/VR Development",
      intro:
        "We create immersive AR/VR experiences for education, retail, real estate, gaming, and more. Our solutions enhance engagement through interactive simulations and virtual environments.",
      technologies: [
        "Unity",
        "Unreal Engine",
        "ARKit",
        "ARCore",
        "Three.js",
        "Oculus SDK",
        "Vuforia",
      ],
      buttonText: "Hire AR/VR Developers",
      expertise: [
        {
          title: "Augmented Reality Apps",
          desc: "Enhance real-world experiences using ARKit and ARCore.",
        },
        {
          title: "Virtual Reality Simulations",
          desc: "Fully immersive 3D environments for training and gaming.",
        },
        {
          title: "3D Visualization",
          desc: "Architectural and industrial visualization for clients.",
        },
        {
          title: "Product Demos",
          desc: "Interactive AR-based product presentations.",
        },
        {
          title: "Training Solutions",
          desc: "Safe, engaging learning environments using VR.",
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
          title: "Conceptualization",
          desc: "Define vision, user goals, and interactivity.",
        },
        {
          title: "3D Modeling",
          desc: "Create realistic environments and objects.",
        },
        {
          title: "Development",
          desc: "Code immersive interactions with Unity or Unreal.",
        },
        { title: "Testing", desc: "Ensure smooth rendering and usability." },
        {
          title: "Deployment",
          desc: "Publish to mobile or headset platforms.",
        },
        {
          title: "Support",
          desc: "Maintain and optimize post-launch performance.",
        },
      ],
      faq: [
        {
          question: "What types of AR/VR solutions do you provide?",
          answer:
            "We develop AR/VR apps for product visualization, training, gaming, and virtual collaboration.",
        },
        {
          question: "Do your AR/VR apps support multiple devices?",
          answer:
            "Yes, we build for Oculus, HTC Vive, Meta Quest, mobile AR, and mixed-reality headsets.",
        },
        {
          question: "Can AR/VR help in business operations?",
          answer:
            "Absolutely. Businesses use AR/VR for virtual training, marketing, design visualization, and remote collaboration.",
        },
        {
          question: "How long does AR/VR app development take?",
          answer:
            "Typically 8–16 weeks, depending on complexity and hardware integrations.",
        },
        {
          question: "Do you offer content creation and 3D modeling?",
          answer:
            "Yes, our in-house design team creates all required 3D assets and animations.",
        },
        {
          question: "Can you integrate AR/VR with existing software?",
          answer:
            "Yes, we can integrate with CRMs, ERPs, or learning platforms through APIs.",
        },
        {
          question: "Do you provide post-deployment support?",
          answer:
            "Yes, we handle performance monitoring, version upgrades, and feature expansions.",
        },
      ],
    },
    erp: {
      title: "ERP Solutions",
      intro:
        "We build robust ERP systems that centralize business operations — from finance and HR to supply chain and analytics. Our ERP solutions help enterprises automate workflows, enhance productivity, and make data-driven decisions.",
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
      buttonText: "Hire ERP Experts",
      expertise: [
        {
          title: "Custom ERP Development",
          desc: "Tailor-made ERP modules that fit unique business needs.",
        },
        {
          title: "Inventory & Supply Chain",
          desc: "Optimize logistics and material management with real-time insights.",
        },
        {
          title: "Finance & Accounting",
          desc: "Automate billing, payroll, and reporting processes.",
        },
        {
          title: "HR Management",
          desc: "Streamline employee onboarding, tracking, and analytics.",
        },
        {
          title: "Integration Services",
          desc: "Seamless connectivity with CRM, POS, or legacy systems.",
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
          title: "Requirement Gathering",
          desc: "Analyze workflows and define ERP objectives.",
        },
        {
          title: "Module Design",
          desc: "Design each ERP module for optimized functionality.",
        },
        {
          title: "Development",
          desc: "Implement scalable back-end and user dashboards.",
        },
        {
          title: "Integration",
          desc: "Connect ERP with other business systems.",
        },
        {
          title: "Testing",
          desc: "Conduct end-to-end QA and performance validation.",
        },
        {
          title: "Deployment & Support",
          desc: "Deploy with training and continuous maintenance.",
        },
      ],
      faq: [
        {
          question:
            "Do you provide both on-premise and cloud-based ERP solutions?",
          answer:
            "Yes, we develop ERP systems deployable on local servers or secure cloud environments.",
        },
        {
          question: "Can you integrate ERP with third-party tools?",
          answer:
            "Absolutely. We integrate with CRMs, accounting software, APIs, and other enterprise platforms.",
        },
        {
          question: "Is ERP development suitable for small businesses?",
          answer:
            "Yes. We create modular ERP solutions that scale as your business grows.",
        },
        {
          question: "How long does ERP implementation take?",
          answer:
            "Typically 3–6 months, depending on features, modules, and complexity.",
        },
        {
          question: "Do you offer ERP maintenance and upgrades?",
          answer:
            "Yes, we provide end-to-end support, performance tuning, and version updates.",
        },
        {
          question: "Can you migrate data from existing systems?",
          answer:
            "Yes. We ensure secure data migration from legacy or third-party software.",
        },
      ],
    },

    chatbot: {
      title: "Chatbot Development",
      intro:
        "We design intelligent chatbots powered by AI and NLP to automate customer interactions and streamline support. From lead generation to real-time assistance, our bots enhance engagement across platforms.",
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
      buttonText: "Hire Chatbot Developers",
      expertise: [
        {
          title: "Customer Support Bots",
          desc: "Automate FAQs and resolve queries instantly.",
        },
        {
          title: "Lead Generation Bots",
          desc: "Engage visitors and capture leads efficiently.",
        },
        {
          title: "Voice Assistants",
          desc: "AI-powered assistants for web and mobile platforms.",
        },
        {
          title: "E-commerce Bots",
          desc: "Personalized product recommendations and support.",
        },
        {
          title: "Multi-Channel Integration",
          desc: "Deploy across WhatsApp, Messenger, and websites.",
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
          title: "Discovery",
          desc: "Define use case, tone, and automation goals.",
        },
        {
          title: "Flow Design",
          desc: "Map conversation flows and user journeys.",
        },
        {
          title: "Development",
          desc: "Build using NLP engines and integrations.",
        },
        { title: "Testing", desc: "Ensure contextual accuracy and usability." },
        { title: "Deployment", desc: "Integrate into chosen platforms." },
        {
          title: "Monitoring",
          desc: "Track performance and retrain as needed.",
        },
      ],
      faq: [
        {
          question: "Can chatbots handle multiple languages?",
          answer:
            "Yes, our chatbots can be trained to understand and respond in multiple languages.",
        },
        {
          question: "Can you integrate the chatbot with CRM or ERP systems?",
          answer:
            "Absolutely. We integrate bots with CRM, ERP, and third-party APIs for seamless workflows.",
        },
        {
          question: "Do you build both text and voice-based bots?",
          answer:
            "Yes, we develop chatbots and voice assistants for a wide range of platforms.",
        },
        {
          question: "Can your bots work on social media apps?",
          answer:
            "Yes, we create chatbots for WhatsApp, Instagram, Facebook, and Telegram.",
        },
        {
          question: "How long does it take to build a chatbot?",
          answer:
            "Typically 3–5 weeks for basic bots, and up to 8–10 weeks for advanced conversational systems.",
        },
      ],
    },

    ai: {
      title: "Artificial Intelligence",
      intro:
        "We help businesses harness AI to automate processes, analyze data, and enhance decision-making. From machine learning to computer vision, we deliver intelligent, data-driven solutions.",
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
      buttonText: "Hire AI Developers",
      expertise: [
        {
          title: "Machine Learning Models",
          desc: "Predictive analytics and automation through trained models.",
        },
        {
          title: "Computer Vision",
          desc: "Image and video recognition systems using AI.",
        },
        {
          title: "Natural Language Processing",
          desc: "Advanced NLP for chatbots and data extraction.",
        },
        {
          title: "Predictive Analytics",
          desc: "Business insights through AI-based forecasting.",
        },
        {
          title: "Recommendation Engines",
          desc: "AI-driven product and content personalization.",
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
          title: "Data Collection",
          desc: "Gather and clean data for model training.",
        },
        { title: "Model Design", desc: "Select and train suitable ML models." },
        { title: "Testing", desc: "Validate accuracy and performance." },
        {
          title: "Deployment",
          desc: "Deploy models using scalable APIs or cloud.",
        },
        { title: "Monitoring", desc: "Track accuracy and retrain as needed." },
      ],
      faq: [
        {
          question: "What industries do you serve with AI/ML?",
          answer:
            "We provide AI/ML solutions for healthcare, retail, manufacturing, finance, and logistics.",
        },
        {
          question: "Do you offer custom AI model development?",
          answer:
            "Yes, we build models tailored to your business objectives and data patterns.",
        },
        {
          question: "Can AI be integrated into existing systems?",
          answer:
            "Absolutely. We integrate AI modules into CRMs, ERPs, and analytics platforms.",
        },
        {
          question: "Do you provide data analysis and visualization?",
          answer:
            "Yes, we offer dashboards, visual analytics, and reporting for AI insights.",
        },
        {
          question: "How do you ensure data privacy in AI solutions?",
          answer:
            "We comply with GDPR and best practices for secure data handling and anonymization.",
        },
      ],
    },

    crm: {
      title: "CRM Development",
      intro:
        "We build powerful CRM systems that help businesses manage customer relationships efficiently — boosting retention, sales, and satisfaction.",
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
      buttonText: "Hire CRM Developers",
      expertise: [
        {
          title: "Custom CRM Systems",
          desc: "Tailored solutions for sales, marketing, and service teams.",
        },
        {
          title: "Lead Management",
          desc: "Track and convert leads effectively with analytics.",
        },
        {
          title: "Workflow Automation",
          desc: "Automate repetitive CRM tasks and follow-ups.",
        },
        {
          title: "CRM Integration",
          desc: "Sync CRM with ERP, email, and other platforms.",
        },
        {
          title: "Analytics Dashboards",
          desc: "Real-time reporting and performance tracking.",
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
          title: "Requirement Gathering",
          desc: "Understand CRM workflow needs.",
        },
        {
          title: "Design & Prototyping",
          desc: "Create an intuitive CRM UI/UX.",
        },
        {
          title: "Development",
          desc: "Implement CRM backend and integrations.",
        },
        {
          title: "Testing",
          desc: "Ensure accuracy, scalability, and performance.",
        },
        { title: "Deployment", desc: "Launch and configure user roles." },
        { title: "Support", desc: "Ongoing maintenance and feature updates." },
      ],
      faq: [
        {
          question: "Do you develop both cloud and on-premise CRMs?",
          answer:
            "Yes, we develop both types based on your data and business requirements.",
        },
        {
          question: "Can CRM be integrated with our website or ERP?",
          answer:
            "Absolutely. We offer end-to-end integration with existing systems.",
        },
        {
          question: "Do you build CRMs for specific industries?",
          answer:
            "Yes, we tailor CRMs for real estate, finance, logistics, healthcare, and more.",
        },
        {
          question: "Can you migrate from existing CRM software?",
          answer:
            "Yes, we ensure secure and complete data migration from tools like Zoho or HubSpot.",
        },
        {
          question: "Do you offer ongoing CRM support?",
          answer:
            "Yes, we provide continuous maintenance, optimization, and new feature rollout.",
        },
      ],
    },

    cloud: {
      title: "Cloud Computing",
      intro:
        "We offer end-to-end cloud computing services — from migration and deployment to monitoring and optimization. Our cloud experts ensure scalability, security, and cost efficiency.",
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
      buttonText: "Hire Cloud Experts",
      expertise: [
        {
          title: "Cloud Migration",
          desc: "Seamless transition from on-premises to cloud.",
        },
        {
          title: "DevOps Automation",
          desc: "Streamline CI/CD workflows using automation tools.",
        },
        {
          title: "Serverless Architecture",
          desc: "Deploy scalable apps without managing servers.",
        },
        {
          title: "Cloud Security",
          desc: "Implement identity, encryption, and compliance systems.",
        },
        {
          title: "Cost Optimization",
          desc: "Maximize efficiency with intelligent resource scaling.",
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
          title: "Assessment",
          desc: "Analyze existing infrastructure and plan migration.",
        },
        {
          title: "Design",
          desc: "Build scalable and secure cloud architecture.",
        },
        { title: "Deployment", desc: "Migrate workloads and apps seamlessly." },
        { title: "Automation", desc: "Implement CI/CD and IaC processes." },
        { title: "Monitoring", desc: "Track performance and resource usage." },
      ],
      faq: [
        {
          question: "Do you handle cloud migration for existing systems?",
          answer:
            "Yes, we offer end-to-end migration with zero data loss and minimal downtime.",
        },
        {
          question: "Which cloud platforms do you support?",
          answer:
            "We work with AWS, Azure, and Google Cloud — as well as hybrid and private clouds.",
        },
        {
          question: "Can you automate our deployment process?",
          answer:
            "Absolutely. We build CI/CD pipelines tailored to your infrastructure.",
        },
        {
          question: "Do you offer ongoing cloud management?",
          answer:
            "Yes, we provide managed cloud services including monitoring, scaling, and cost optimization.",
        },
        {
          question: "Is DevOps suitable for small businesses?",
          answer:
            "Definitely. Automation and scalability help businesses of any size improve productivity.",
        },
      ],
    },

    maintenance: {
      title: "Maintenance & Support",
      intro:
        "We ensure your digital solutions remain up-to-date, secure, and optimized. Our maintenance services include bug fixing, performance optimization, and feature enhancements.",
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
      buttonText: "Hire Maintenance Experts",
      expertise: [
        {
          title: "Bug Fixing",
          desc: "Identify and resolve issues quickly and effectively.",
        },
        {
          title: "Performance Optimization",
          desc: "Enhance speed, load time, and scalability.",
        },
        {
          title: "Security Updates",
          desc: "Regular patches to keep systems protected.",
        },
        {
          title: "Feature Enhancement",
          desc: "Add new functionalities as your business evolves.",
        },
        {
          title: "Monitoring",
          desc: "Proactive system tracking for uptime and stability.",
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
          title: "Audit & Analysis",
          desc: "Evaluate system performance and security.",
        },
        {
          title: "Prioritization",
          desc: "Identify critical fixes and improvements.",
        },
        {
          title: "Implementation",
          desc: "Deploy fixes, patches, and enhancements.",
        },
        {
          title: "Testing",
          desc: "Validate system stability and functionality.",
        },
        {
          title: "Ongoing Support",
          desc: "Monitor and maintain post-implementation.",
        },
      ],
      faq: [
        {
          question: "Do you provide support for third-party applications?",
          answer:
            "Yes, we can maintain and enhance software developed by other vendors.",
        },
        {
          question: "How often do you perform updates?",
          answer:
            "We schedule updates based on project needs — monthly, quarterly, or as required.",
        },
        {
          question: "Can you fix issues without disrupting operations?",
          answer:
            "Absolutely. We implement fixes in staging environments before live deployment.",
        },
        {
          question: "Do you offer 24/7 monitoring?",
          answer:
            "Yes, our monitoring and alert systems ensure round-the-clock availability.",
        },
        {
          question: "Can you scale existing applications?",
          answer:
            "Yes, we specialize in performance tuning and scalability optimization.",
        },
      ],
    },

    blockchain: {
      title: "Blockchain Development",
      intro:
        "We build secure and transparent blockchain-based applications for finance, supply chain, and beyond. Our blockchain experts help businesses adopt decentralized solutions with confidence.",
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
      buttonText: "Hire Blockchain Developers",
      expertise: [
        {
          title: "Smart Contracts",
          desc: "Automate transactions using Solidity-based contracts.",
        },
        {
          title: "DApp Development",
          desc: "Decentralized applications for finance and gaming.",
        },
        {
          title: "NFT Marketplaces",
          desc: "Build tokenized digital asset trading platforms.",
        },
        {
          title: "Private Blockchains",
          desc: "Secure enterprise-grade blockchain networks.",
        },
        {
          title: "Tokenization",
          desc: "Custom token creation on major blockchain networks.",
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
          title: "Requirement Analysis",
          desc: "Define blockchain use case and scope.",
        },
        {
          title: "Design",
          desc: "Plan tokenomics, contracts, and architecture.",
        },
        { title: "Development", desc: "Implement smart contracts and DApps." },
        { title: "Testing", desc: "Audit and verify for vulnerabilities." },
        { title: "Deployment", desc: "Deploy to mainnet or private network." },
        {
          title: "Maintenance",
          desc: "Support upgrades and ongoing management.",
        },
      ],
      faq: [
        {
          question:
            "Do you build both public and private blockchain solutions?",
          answer:
            "Yes, we design both based on business needs and security preferences.",
        },
        {
          question: "Can you create NFTs or tokenization platforms?",
          answer:
            "Absolutely. We specialize in NFT, DeFi, and token development.",
        },
        {
          question: "How do you ensure blockchain security?",
          answer:
            "We follow strict audit protocols and implement multi-layer security mechanisms.",
        },
        {
          question: "Can blockchain integrate with our existing system?",
          answer:
            "Yes, we build APIs to connect blockchain with your ERP, CRM, or web apps.",
        },
        {
          question: "What industries can benefit from blockchain?",
          answer:
            "Finance, logistics, supply chain, healthcare, and real estate are among the most common.",
        },
      ],
    },

    iot: {
      title: "IoT Development",
      intro:
        "We connect devices, systems, and people with intelligent IoT solutions. From smart homes to industrial IoT, we build platforms that collect, analyze, and act on real-time data.",
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
      buttonText: "Hire IoT Developers",
      expertise: [
        {
          title: "Smart Home Systems",
          desc: "IoT-enabled control for appliances and security.",
        },
        {
          title: "Industrial IoT",
          desc: "Monitor and optimize industrial operations.",
        },
        {
          title: "Wearable Devices",
          desc: "Track and sync health and activity data.",
        },
        {
          title: "IoT Dashboards",
          desc: "Visualize and control devices in real-time.",
        },
        {
          title: "Edge Computing",
          desc: "Faster analytics and reduced latency.",
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
          title: "Requirement Analysis",
          desc: "Define IoT goals, hardware, and connectivity.",
        },
        {
          title: "Hardware Integration",
          desc: "Connect sensors and microcontrollers.",
        },
        { title: "Development", desc: "Build firmware and backend systems." },
        { title: "Testing", desc: "Simulate performance and safety checks." },
        { title: "Deployment", desc: "Implement and scale the IoT ecosystem." },
        { title: "Maintenance", desc: "Ensure uptime and firmware updates." },
      ],
      faq: [
        {
          question: "Do you develop both hardware and software for IoT?",
          answer:
            "Yes, we handle firmware programming, device setup, and software development.",
        },
        {
          question: "Can IoT integrate with AI and analytics systems?",
          answer:
            "Absolutely. We integrate IoT data with AI models for predictive insights.",
        },
        {
          question: "How do you ensure IoT security?",
          answer:
            "We use encryption, authentication, and secure communication protocols like MQTT and SSL.",
        },
        {
          question: "Do you work with specific IoT platforms?",
          answer:
            "Yes, we use AWS IoT, Azure IoT, and Google Cloud IoT depending on project needs.",
        },
        {
          question: "Can IoT be customized for any industry?",
          answer:
            "Yes, our IoT solutions are adaptable for manufacturing, logistics, healthcare, agriculture, and more.",
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
      <div className=" w-full pt-[20px] flex flex-col place-items-center">
        <div className="w-[90vw] text-start md:w-[73vw]  mt-[100px] flex flex-col gap-[1.2rem]">
          <p className="text-[2rem] md:text-[3rem] text-[#F8F9FA] service-title">
            {serviceInfo[service]?.title}
          </p>
          <p className="text-[1rem] md:text-[1.5rem] text-[#C8C1C1] service-desc">
            {serviceInfo[service]?.intro}
          </p>
        </div>
        <div className="lg:w-[73vw]  mt-[80px] md:mt-[40px] overflow-hidden">
          <p className="service-desc  text-[1.5rem] md:text-[1.8rem] text-center md:text-start  text-[#C8C1C1] mb-4">
            Technologies We Use
          </p>

          <div className="relative w-[90vw] flex overflow-hidden">
            <motion.div
              className="flex  gap-[20px]"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                ease: "linear",
                duration: 20,
                repeat: Infinity,
              }}
            >
              {[
                ...(serviceInfo[service].technologies || []),
                ...(serviceInfo[service].technologies || []),
              ].map((value, index) => (
                <div
                  key={index}
                  className="py-3 px-4 h-fit w-fit rounded-md border border-[#C8C1C1]
                       service-desc text-[1rem] md:text-[1.5rem] text-[#C8C1C1]
                       whitespace-nowrap"
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
        <Link to="/contactus">
          <button
            className="rotating-btn relative font-garota text-[1rem] md:text-[1.5rem] text-[#C8C1C1]
             w-[90vw] md:w-[73vw] mt-[60px] md:mt-[40px] rounded-md px-3 
             [@media(min-width:300px)]:py-3 py-2 md:px-6 md:py-3 overflow-hidden
             bg-gradient-to-r from-[#1b1b2f] to-[#101820] border border-[#6A6185]
             transition-all duration-500 ease-in-out
             hover:from-[#6A6185] hover:to-[#B19CD9]
             hover:text-white hover:shadow-[0_0_15px_rgba(177,156,217,0.4)]
             hover:-translate-y-1"
          >
            {serviceInfo[service]?.buttonText}
          </button>
        </Link>

        {/* </div> */}
        <div className="lg:w-[73vw] mt-[100px]   flex flex-col gap-[0.8rem]">
          <p className="service-title text-center  md:text-start text-[2.5rem] md:text-[3rem] w-[90vw] sm:w-[42vw] md:w-[30vw] lg:w-[22vw]  text-white">
            Our Expertise
          </p>
          <div className="">
            <div className="flex flex-wrap justify-center gap-6 sm:gap-6 md:gap-4 lg:gap-6">
              {serviceInfo[service]?.expertise.map((item, index) => (
                <motion.div
                  key={index}
                  className="
                  
        w-[90vw] sm:w-[42vw] md:w-[30vw] lg:w-[21vw] 
        h-auto min-h-[20vh]  
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
                  <p className="text-[1.8rem]  md:text-[1.5rem] service-desc text-[#F8F9FA] ">
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
        <div className="relative mt-[150px] md:mt-[100px]">
          <p className="text-[2rem] md:text-[4rem] service-title-noweight bg-gradient-to-b font-bold  from-[#C7B9F6] to-[#6A6185] bg-clip-text text-transparent leading-[1] absolute -top-5 md:-top-11 left-0 z-20 ">
            Why VedaPixel ?
          </p>
          <div
            className="w-[90vw] h-[20vh] md:w-[72vw] flex place-items-center px-7 md:px-14 md:h-[42vh] lg:h-[21vh] xl:h-[40vh] [@media(min-width:2550px)]:h-[20vh] border-2 rounded-b-[80px] rounded-tr-[80px]"
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
                  className="service-desc [@media(min-width:300px)_and_(max-width:450px)]:text-[0.6rem] text-[0.8rem] md:text-[1.5rem] text-[#C8C1C1]"
                >
                  {value}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col mt-[100px] w-[95vw] md:w-[73vw] gap-[0.8rem]">
          <p className="text-[2rem] md:text-[3rem] text-[#F8F9FA] service-title">
            Our Process
          </p>

          <div>
            {serviceInfo[service]?.process.map((item, index) => (
              <div
                key={index}
                className="flex flex-row items-start md:items-center gap-3 md:gap-7"
              >
                {/* Step number */}
                <p className="text-[#C8C1C1] w-[8vw] sm:w-[6vw] md:w-[3vw] text-[1rem] md:text-[1.4rem]">
                  {index + 1}.
                </p>

                {/* Step content */}
                <div
                  onClick={() => handleToggle(index)}
                  className="group relative flex flex-col border border-gray-800 border-l-white rounded-lg pl-4 md:pl-4 cursor-pointer text-[#F8F9FA] text-[1rem] md:text-[1.4rem] w-full md:w-[68vw] gap-1 py-2 md:py-3 transition-all duration-300 ease-in-out hover:border-[#BBABEB]/40"
                >
                  {/* Title */}
                  <p
                    className={`font-semibold  ${
                      activeIndex === index
                        ? "border-[#BBABEB]/40 text-[#BBABEB]"
                        : "text-[#F8F9FA] hover:border-[#BBABEB]/40"
                    } text-left service-title hover:text-[#BBABEB] z-10`}
                  >
                    {item.title}
                  </p>

                  {/* Description */}
                  <div
                    className={`
              text-[0.8rem] md:text-[1.2rem] transition-all duration-500 ease-in-out overflow-hidden
              ${
                isMobile
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

        <div className="w-[90vw] md:w-[73vw] flex mt-[100px] flex-col gap-[1.3rem]">
          <p className="text-[2.3rem] md:text-[2.7rem] service-title text-[#F8F9FA]">
            FAQs
          </p>
          <div className="bg-[#0e141d]/50 backdrop-blur-lg  border rounded-lg border-[#F8F9FA]">
            {serviceInfo[service]?.faq.map((faq, index) => (
              <div key={index} className="border-b border-[#2a2f37]">
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full flex justify-between items-center px-6 py-5 text-left text-[#F8F9FA] hover:text-[#BBABEB] transition-all duration-200"
                >
                  <span
                    className={`  ${
                      openIndex === index
                        ? "text-[#BBABEB]"
                        : "text-[#F8F9FA] hover:text-[#BBABEB]"
                    } text-[1.3rem] cursor-pointer w-[90%] md:text-[1.2rem] service-desc `}
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
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? "max-h-40 py-3" : "max-h-0"
                  }`}
                >
                  <p className="text-[#C8C1C1] service-desc text-[0.8rem] md:text-[1rem] leading-relaxed">
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
