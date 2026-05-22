import unleashImg from '../assets/logos/unleash.png'
import zoiImg from '../assets/logos/zoi.jpg'
import iqaImg from '../assets/logos/iqa.jpg'

export const EXPERIENCE = [
  {
    name: 'Unleash',
    image: unleashImg,
    url: 'https://www.getunleash.io/',
    role: 'Full Stack Developer (Senior)',
    date: '04/2022 - Current',
    description: `Contributed to Unleash, an open-source feature flag management platform with over 40M Docker pulls, 13.5K+ GitHub stars, and 100K+ monthly active users, from individual developers to Fortune 500 enterprises. Operated across the full breadth of the organization: core product, cloud infrastructure, SDKs, backoffice tooling, and internal systems.
Assigned to the Enterprise Growth team and later the Self-Service Acceleration squad, consistently led and delivered high-impact features including Service Accounts, Signals & Actions, Custom Root Roles, Groups, Personal Access Tokens (PATs), Login History, Multiple Project Roles, Environment Cloning, Banners, Network Visualization, Slack App integration, and a fully interactive product demo, frequently owning projects end-to-end from discovery through GA.
Owned and delivered Pay-As-You-Go (PAYG) billing autonomously, a revenue-critical initiative that became the primary self-serve growth driver. Self-serve ARR grew over 70% year-over-year, high-value accounts more than doubled within months, and average deal size increased ~30%.
Contributed to Unleash Edge, a high-performance Rust-based successor to the Unleash Proxy, picking up Rust from scratch and quickly becoming a meaningful contributor to its core development.
Led the cloud infrastructure migration away from Pulumi-based provisioning toward a backoffice-driven source of truth for cloud deployments, reducing costs and improving reliability at scale.
Integrated Stripe billing across multiple projects and third-party systems, enabling users to self-manage subscriptions directly from their Unleash instance, a foundational pillar of the product-led growth motion.
Created and maintained multiple SDKs including Vue.js, Svelte, Solid, and React Native, expanding Unleash's ecosystem reach. The Vue SDK surpassed 1.9K+ weekly downloads shortly after release.
Trained as Site Reliability Engineer (SRE) and performed on-call shifts, incident command, and proactive monitoring across AWS/EKS infrastructure to ensure platform availability at scale.
Acted as a knowledge bridge across disciplines, contributing expertise in full-stack development while continuously growing through close collaboration with teammates in infrastructure, platform engineering, and architecture.
Leveraged AI-assisted development tools including GitHub Copilot since its early days and Claude Code, not just to accelerate delivery but as thinking partners for architectural debate, design tradeoffs, and code review.
Built and open-sourced multiple proof-of-concept projects, including a VS Code extension, a browser extension, a CLI, and several framework SDKs.`
  },
  {
    name: 'Zoi',
    image: zoiImg,
    url: 'https://en.zoi.tech/',
    role: 'Full Stack Developer (Specialist)',
    date: '06/2021 - 03/2022',
    description: `Assigned to Digital Innovations, worked closely with partners as a developer on exploratory projects using innovative cloud solutions.
Developed a chatbot built on Google Cloud and Firebase, with a UI in Quasar Framework (Vue.js) and a Cloud Function bridging the UI, Dialogflow CX, and Contentful.
Contributed to a React Native app used by hundreds of thousands of end-users, delivering features and bug fixes across the product lifecycle.
Developed an internal mock package for testing and debugging purposes using Node.js, Express, Apollo GraphQL, and MQTT.
Followed best practices throughout, including writing unit and E2E tests.
Worked on a dynamic multicultural team following an Agile/Scrum methodology.
Shared knowledge and learned with teammates through pair programming.`
  },
  {
    name: 'IQA - Sistemas de Gestão, Lda',
    image: iqaImg,
    url: 'https://www.myagir.com/en/',
    role: 'Full Stack Developer (Lead, Architect)',
    date: '03/2011 - 05/2021',
    description: `Developed AGIR®, a Quality Management Software (QMS), Process Management (BPM), and Document Control platform. Worked on the platform across its full evolution: from ASP.NET, SQL Server, Web API, and .NET WinForms to Windows Services, Office Add-Ins, and beyond.
Created signature features that give the platform a unique edge in flexibility, including an intuitive drag-and-drop Form Designer, a custom JavaScript framework (based on jQuery, later Vue), and a business logic assistant for workflow and form logic, enabling the platform to adapt to virtually any customer need.
Worked closely with the project manager and customers to ensure every product delivery met requirements in a versatile, modern, and performant way.
Supported customers across every stage: configuration, deployment, troubleshooting, and ongoing maintenance.
Developed APIs, tools, and custom integration mechanisms to connect with existing solutions, databases, and third-party products.
Built a highly optimized data matrix code scanner from TIFF files in Python, using numpy, CV2, Wand, and related libraries.
Laid the technical foundation for the company's next product, Wisibi, using Quasar Framework (Vue.js) and .NET Core Web API, following modern best practices throughout.
Managed the team's Trello, GitHub, Jenkins, and other services.
Shared knowledge with teammates through training and mentorship.`
  }
]

export const INTERESTING_PROJECTS = [
  {
    name: 'Workflow Engine',
    description: `Created a custom workflow engine that allowed end-users with the right permissions to create custom workflows, 
    with several steps, approvals, permissions, routes, and more.`
  },
  {
    name: 'Form Designer (Absolute Position)',
    description: `Created a custom form designer, that works with the custom Workflow Engine, that allowed end-users 
    with the right permissions to create web forms, containing tabs and absolute positioned UI elements, by dragging and 
    dropping. Some of the elements were somewhat advanced, like tables, and would contain custom properties that could be configured.`
  },
  {
    name: 'Form Designer (Responsive Layout)',
    description: `Created a custom form designer that would replace the previous one, as a more modern and responsive option. 
    Users could still drag, drop and resize elements, but the layout would be responsive, following the typical "12 column" 
    grid layout.`
  },
  {
    name: 'Custom JavaScript Framework (jQuery abstraction)',
    description: `Created a custom JavaScript framework based / on top of jQuery to use along with the previous options. This added 
    infinite possibilities, along with customization and integration options. This framework was meant as a very easy-to-use 
    programming language for our own and also end-users with the right permissions, where most of what was needed could be accomplished using 
    its simple functions. The framework went through several iterations, and this also included maintaining its documentation accordingly.`
  },
  {
    name: 'Custom JavaScript Framework (Server-side / Scheduling)',
    description: `As an extension to the previous idea, we also wanted to run custom logic from a server / scheduled, cron-like, perspective.
    This used PhantomJS and Chrome headless along with a Windows Service to trigger our code based on configurable triggers.`
  },
  {
    name: 'Code / Logic Wizard',
    description: `Created a code / logic wizard, where end-users with no programming knowledge could easily configure their own logic.
    This included creating a very specific parser and code generator, and also included functions, conditions, and parameters.`
  },
  {
    name: 'PDF Text Extractor (OCR alternative)',
    description: `Created a PDF text extractor, where PDFs were converted to HTML in a specific way that allowed end-users to configure
    zones from where to grab text information. This could then be easily integrated with the previous projects, and proved a much faster
    and accessible alternative to OCR.`
  },
  {
    name: 'Legacy Custom File Format PDF Extraction',
    description: `Created a PDF extractor from a custom file format of a legacy app that was no longer maintained. It aggregated several files,
    including PDFs, which were required for our use-case. Had to evaluate bytes looking for file signatures without documentation as a guide,
    using the so-called "magic numbers" to identify when PDFs started and ended.`
  },
  {
    name: 'Data Matrix Code Scanner (Python Script)',
    description: `Created a data matrix code scanner script in Python. The codes were scanned from a very large volume of TIFF files, so it had
    to be extremely optimized. Besides managing the local files, it involved counting the percentage of yellow on the image (based on a configurable RGB range), 
    so that a correct amount of codes to be scanned could be calculated, in order to speed up the process significantly. Learned and used tools like 
    numpy, CV2, Wand, and more. It also involved querying data from a MySQL database and integrating everything with web-based APIs.`
  }
]
