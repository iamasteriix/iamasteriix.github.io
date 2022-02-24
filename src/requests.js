const blogger = [
    {   id: 1,
        image: require("./images/uber.png"),
        title: " Oversimplified – To my friends on how and why a multibillion-dollar business is always bleeding money",
        alt: "Uber logo",
        link: `https://www.vanillalatte.page/2021/01/oversimplified-to-my-friends-on-how-and.html`,
        date: "June 2021"
    },
    {   id: 2,
        image: require("./images/ai-bias.jpg"),
        title: "The problem of Bias in Artificial Intelligence",
        alt: "AI between people",
        link: `https://www.vanillalatte.page/2021/05/the-problemof-bias-in-artificial.html`,
        date: "May 2021"
    },
    {   id: 3,
        image: require("./images/vpn.jpg"),
        title: "Let's talk about VPNs",
        alt: "VPN shield graphic",
        link: `https://www.vanillalatte.page/2021/06/lets-talk-about-vpns.html`,
        date: "January 2021"
    }
]

const projects = [
    {   title: "bingo-search",
        hasWeb: true,
        isAzure: false,
        canShowDevelopment: true,
        info: "A play on the search engine, Bing (don't @ me, I love Microsoft!). I was using the Bing Web Search API initially, but as an extra challenge I thought I should incorporate the concepts I learned from Big Data and implement the search myself. The backend functionality involves downloading all the data from the internet, extracting key information from the html and storing it in a format that can be retrieved in less than 200ms. The frontend is just react sugar.",
        link: `https://bingo-search.web.app/`,
        github: `https://github.com/ceejay-el/bingo-search`,
        azureDevops: null
    },
    {
        title: "cl-hulu",
        hasWeb: true,
        isAzure: false,
        canShowDevelopment: true,
        info: "See what I did there? This started off as a Hulu clone in 2020, but I'm thinking of adding a way to pull real video content from some database and managing streaming content across multiple regions. Once that's done, I could also apply my recommendation engine on the website to test it's performance.",
        link: `https://cl-hulu.web.app`,
        github: ``,
        azureDevops: ``
    },
    {
        title: "taroteum",
        hasWeb: true,
        isAzure: false,
        canShowDevelopment: true,
        info: "This is my recommendation engine project that uses deep learning to predict content that a user might like. At this stage, I am building it to predict video game content and esports competitions that the you might like, as well as other gamers you might want to compete against. The ultimate goal is to build a universal recommendation engine that provides highly accurate recommendations given whatever data.",
        link: `https://www.vanillalatte.page/2022/02/neural-networks-project.html`,
        github: `https://github.com/amaltheum/taroteum`,
        azureDevops: null
    },
    {
        title: "Simon game",
        hasWeb: true,
        isAzure: false,
        canShowDevelopment: true,
        info: "Yk, the game where you have to remember the increasingly long button and sound sequence. Fun stuff.",
        link: `https://angry-turing-f8c139.netlify.app/`,
        github: `https://github.com/ceejay-el/Simon-game`,
        azureDevops: null
    },
    {
        title: "link shortener",
        hasWeb: false,
        isAzure: false,
        canShowDevelopment: false,
        info: "Tool that shortens URLs. Shorter URLs helps websites rank better in search results, and it's also just easier to type them out.",
        link: ``,
        github: ``,
        azureDevops: ``
    },
    {
        title: "downtime monitoring with reporting and alerts",
        hasWeb: false,
        isAzure: false,
        canShowDevelopment: false,
        info: "Coming up! This one's kinda hard bc I'm not exactly sure where to even start. But isn't that 90% of what being a dev involves?",
        link: ``,
        github: ``,
        azureDevops: ``,
    },
    {
        title: "Spotify ETL",
        hasWeb: false,
        isAzure: false,
        canShowDevelopment: false,
        info: "Data pipeline for Spotify Data...",
        link: ``,
        github: ``,
        azureDevops: ``
    },
    {
        title: "cluster with Raspberry Pi.",
        hasWeb: false,
        isAzure: false,
        canShowDevelopment: false,
        info: "With all this Big Data stuff I've been doing throughout the semester, I started to wonder what actually goes into hosting websites on the internet. Coincidentally, a friend I work with at the HPC also told me that he'd be working with Raspberry Pi this semester, so I decided to hop in on the action. The goal of this project is to build a Kubernetes cluster with Raspberry Pi for hosting files and serving them on the internet.",
        link: ``,
        github: null,
        azureDevops: null
    },
    {
        title: "Netflix Data Visualizations and trends",
        hasWeb: false,
        isAzure: false,
        canShowDevelopment: false,
        info: "",
        link: ``,
        github: null,
        azureDevops: null
    },
    {
        title: "learning blockchain development",
        hasWeb: false,
        isAzure: true,
        canShowDevelopment: false,
        info: "You know, because why not?",
        link: ``,
        github: null,
        azureDevops: null
    },
    {
        title: "Platformer game with GDevelop",
        hasWeb: false,
        isAzure: false,
        canShowDevelopment: false,
        info: "Building a video game using GDevelop, an open-source JavaScript Game Development engine.",
        link: ``,
        github: null,
        azureDevops: null
    },
    {
        title: "housing data from buyrentkenya.com",
        hasWeb: false,
        isAzure: true,
        canShowDevelopment: true,
        info: "Scraped Kenya's housing and apartment data from buyrentkenya.com for data analysis based on data that is available online.",
        link: ``,
        github: null,
        azureDevops: `https://dev.azure.com/juniorchuck7/_git/Kenya-Housing-Data?path=/housing_location_data.ipynb&_a=preview`
    }

]

const work = [
    {
        start_date: "May 2020",
        ended: true,
        end_date: "August 2020",
        place: "Planet Earth Observatory",
        role: "Web Developer",
        info: "built a data visualization website.",
        tech_stack: ["Bootstrap", "jQuery", "d3.js", "chart.js", "NodeJS", "Express.js", "MongoDB", "npm", "html5", "css3"],
        topics: ["data visualization"],
        link: `http://planetearthobservatory.org/`,
        project_success: false
    },
    {
        start_date: "February 2021",
        ended: true,
        end_date: "May 2021",
        place: "Pomona College High Performance Computing",
        role: "High Performance Computing Support",
        info: "collaborated with HPC Director and System Admins to explore HPC best practices.",
        tech_stack: ["bash"],
        topics: ["Microsoft Azure", "HPC Carpentry", "Heterogenous Computing", "Bright Cluster Management"],
        link: `https://www.pomona.edu/administration/hpc`,
        project_success: true
    },
    {
        start_date: "June 2021",
        ended: true,
        end_date: "August 2021",
        place: "Pomona College Information Technology",
        role: "Sakai Quality Assurance Support",
        info: "proposed, planned and redesigned quite a few pages of the 5C's Sakai.",
        tech_stack: ["html5", "javascript", "css"],
        topics: ["Collaboration"],
        link: `https://ritg.pomona.edu/tools/sakai/`,
        project_success: false
    },
    {
        start_date: "September 2021",
        ended: false,
        end_date: null,
        place: "Pomona College Research and Instructional Technology Group",
        role: "Software Developer",
        info: "currently building Fava with react-native.",
        tech_stack: ["react-native", "react", "MongoDB", "Tableau", "Postgres", "sql"],
        topics: ["Project Management"],
        link: `https://planetearthobservatory.org/`,
        project_success: null
    },
    {
        start_date: "January 2022",
        ended: false,
        end_date: null,
        place: "The Shodor Education Foundation, Inc",
        role: "Full-Stack developer",
        info: "working with the Software Development team to build a content management web interface to be used for cryo-em bio-molecular research.",
        tech_stack: ["react", "postgres"],
        topics: ["database", "front-end", "back-end", "team"],
        link: `https://www.lsi.umich.edu/science/centers-technologies/cryo-electron-microscopy`,
        project_success: null
    }
]

const requests = {
    blogs: blogger,
    projects: projects,
    experience: work
}

export default requests;