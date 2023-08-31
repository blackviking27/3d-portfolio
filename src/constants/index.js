import {
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    nodejs,
    mongodb,
    git,
    figma,
    three,
    next,
    promtpStore,
    codeEditor,
    amazon,
    shareme,
    trendsy,
    netflix,
    freeyou
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Frontend Developer",
        icon: web,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "UI/UX Designer",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: three,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "Next JS",
        icon: next
    }
];

const experiences = [
    {
        title: "Software Engineer",
        company_name: "Indiamart",
        date: "June 2023 - Present",
        points: [
            "With my expertise in ReactJS and a range of complementary technologies, I confidently managed the verification and login flow of the mobile site. Executing responsive design flawlessly while ensuring seamless cross-browser compatibility.",
        ],
    },
    {
        title: "Associate Software Engineer",
        company_name: "Indiamart",
        date: "June 2022 - June 2023",
        points: [
            "Crafting and upkeeping web applications utilizing React.js and associated cutting-edge technologies. Confidently spearheaded collaborative efforts with cross-functional teams, including designers, product managers, and fellow developers, to craft exceptional and top-tier products. Responsive design implementation while guaranteeing seamless cross-browser compatibility."
        ],
    },
    {
        title: "Intern",
        company_name: "Indiamart",
        date: "Jan 2022 - May 2022",
        points: [
            "Engaged in enhancing both performance and user experience for the website's search page, employing my expertise to achieve remarkable results.",
        ],
    },
];

const projects = [
    {
        name: "Prompt Store",
        description:
            "Web-based platform that allows users to search and manage AI promtps from various users, Create and share promtps with others across the platform",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: promtpStore,
        link: "https://prompt-store-black.vercel.app",
    },
    {
        name: "Code Editor",
        description:
            "Real time code editing platform for users to share across multiple devices with the help of socket.io and nextjs",
        tags: [
            {
                name: "next",
                color: "bg-gradient-to-r from-slate-50 to-gray-400 bg-clip-text text-transparent",
            },
            {
                name: "socketio",
                color: "orange-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: codeEditor,
        link: "https://code-along-312m.onrender.com",
    },
    {
        name: "Shareme",
        description:
            "A platform for users to share photos online and see photos uploaded by other user. Browse photos according to different categories",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "sanity",
                color: "bg-gradient-to-r from-rose-400 to-pink-600 bg-clip-text text-transparent",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: shareme,
        link: "https://shareme-project-01.netlify.app/",
    },
    {
        name: "Amazon",
        description:
            "An amazon clone built with Next JS, Google Auth for authentication and stripe for payment processing.",
        tags: [
            {
                name: "next",
                color: "bg-gradient-to-r from-slate-50 to-gray-400 bg-clip-text text-transparent",
            },
            {
                name: "next-auth",
                color: "bg-gradient-to-r from-rose-400 to-pink-600 bg-clip-text text-transparent",
            },
            {
                name: "stripe",
                color: "bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent",
            },
        ],
        image: amazon,
        link: "https://amazon-clone-nine-tan.vercel.app/",
    },
];

const caseStudies = [
    {
        name: "Trendsy",
        description: "This app aims to help the users reduce the time that it takes for them to get ready for an occasion or in general. Focuses to solve everyday problem related to clothing",
        image: trendsy,
        link: "https://www.behance.net/gallery/149225013/Trendsy-Fashion-App-Case-Study"
    },
    {
        name: "FreeYou",
        description: "A case study aim to help people with their mental health and provide the required professional help that they need",
        image: freeyou,
        link: "https://www.behance.net/gallery/146814937/FreeYou-Mental-health-app-Case-Study"
    },
    {
        name: "Netflix Redesign",
        description: "Redesigning some of the features on Netflix app in order to improve user experience of the paltform. The changes are based on the research that was conducted regarding the pain points of the app",
        image: netflix,
        link: "https://www.behance.net/gallery/153193723/Netflix-Suggestions-Design"
    }
]

export { services, technologies, experiences, projects, caseStudies };