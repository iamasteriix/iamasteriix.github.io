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
        info: "A play on the search engine, Bing, because I think I'm funny like that. I was using the Bing Web Search API initially, but as an extra challenge I thought I should incorporate the concepts I'm learning from Big Data and implement the search myself. The backend functionality involves downloading all the data from the internet, extracting key information from the html and storing it in a format that can be retrieved in less than 200ms. The frontend is just react sugar.",
        link: `https://bingo-search.web.app/`,
        github: `https://github.com/ceejay-el/bingo-search`,
        azureDevops: null
    },
    {
        title: "cl-hulu",
        hasWeb: true,
        isAzure: false,
        canShowDevelopment: true,
        info: "See what I did there? Anyhoo, this started off as a Hulu clone in 2020, but I'm working on adding a way to pull real video content from some database and managing streaming content across multiple regions. Once that's done, I want to add a recommendation feature using the recommendation engine that I'm building as my semester-long project for my neural networks class.",
        link: `https://cl-hulu.web.app`,
        github: `https://github.com/ceejay-el/cl-hulu`,
        azureDevops: null
    },
    {
        title: "taroteum",
        hasWeb: true,
        isAzure: false,
        canShowDevelopment: true,
        info: "This is my recommendation engine project that uses deep learning to predict content that a user might like. At this stage, I'm building it to predict video game content, esports competitions and competitive gamers that rank close to you. The ultimate goal is to build a universal recommendation engine for dynamic application.",
        link: `https://www.vanillalatte.page/2022/02/neural-networks-project.html`,
        github: `https://github.com/amaltheum/taroteum`,
        azureDevops: null
    },
    {
        title: "Simon game",
        hasWeb: true,
        isAzure: false,
        canShowDevelopment: true,
        info: "Yk, the game where you have to remember an increasingly long button and sound sequence. Fun stuff.",
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
        title: "cluster with Raspberry Pi",
        hasWeb: false,
        isAzure: false,
        canShowDevelopment: false,
        info: "With all this Big Data stuff I've been doing this semester, I started to wonder what actually goes into hosting websites on the internet. Coincidentally, a friend I work with told me that he's building an HPC cluster with with Raspberry Pi this semester, so I decided to hop in on the action. The goal of this project is to build a Kubernetes cluster with Raspberry Pi for hosting files and serving them on the internet.",
        link: ``,
        github: null,
        azureDevops: null
    },
    {
        title: "Netflix Data Visualizations and trends",
        hasWeb: false,
        isAzure: true,
        canShowDevelopment: false,
        info: "",
        link: ``,
        github: null,
        azureDevops: null
    },
    {
        title: "blockchain development",
        hasWeb: false,
        isAzure: true,
        canShowDevelopment: false,
        info: "You know, because why not? In this project, I work with Ethereum to explore how blockchain protocols enable trust and appropriate utility for this technology. I also learn Solidity, which is based on C++, Python and JavaScript, to write smart contracts for the Ethereum blockchain. Ultimately, I want to build a dapp (I really don't like this word, it's so lame!) and connect and deploy stuff to the Ethereum network.",
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
        info: "The goal was to build a data visualization website. Not really my proudest endevour, but I use the experience to remind myself that I need to deliver a product when I am assigned the task of delivering a product.",
        tech_stack: ["Bootstrap", "jQuery", "d3.js", "chart.js", "NodeJS", "Express.js", "MongoDB", "npm", "html5", "css3", "OpenWeatherMap"],
        topics: ["data visualization", "API"],
        link: `http://planetearthobservatory.org/`
    },
    {
        start_date: "February 2021",
        ended: true,
        end_date: "May 2021",
        place: "Pomona College High Performance Computing",
        role: "High Performance Computing Support",
        info: "I collaborated with the HPC Director to explore HPC best practices. Some of the interesting work I did involved learning Microsoft Azure so I could apply those skills (like knowing how to manage resources and pricing for different services in the cloud platform) to support other offices in our IT department. I also did research in real HPC stuff like Bright Cluster Management, Bare Metal Provisioning tools, and Heterogenous Computing. The Director at the time also introduced me to XSEDE, who I would later work with through the Shodor Education Foundation. This was also my first foray to Linux.",
        tech_stack: ["bash", "slurm"],
        topics: ["Microsoft Azure", "HPC Carpentry", "Heterogenous Computing", "Bright Cluster Management", "CentOS"],
        link: `https://www.pomona.edu/administration/hpc`
    },
    {
        start_date: "June 2021",
        ended: true,
        end_date: "August 2021",
        place: "Pomona College Information Technology",
        role: "Sakai Quality Assurance Support",
        info: "I proposed, planned and redesigned quite a few pages of the 5C's Sakai.",
        tech_stack: ["html5", "javascript", "css"],
        topics: ["Collaboration"],
        link: `https://ritg.pomona.edu/tools/sakai/`
    },
    {
        start_date: "September 2021",
        ended: false,
        end_date: null,
        place: "Pomona College Research and Instructional Technology Group",
        role: "Software Developer",
        info: "My main goal is to expose our Computer Science labs and research to more students at school and make it more accessible to the public. I'm also working with the amazing people of the Planet Earth Observatory project to help figure out the technical and dev stuff, and hopefully also let other people know about the work that they're doing. Finally, I'm collaborating with a friend to build an HPC cluster to run slurm using Raspberry Pi and documenting the process, and then build a Kubernetes cluster to host files for the internet.",
        tech_stack: ["react-native", "react", "MongoDB", "Tableau", "Postgres", "sql", "slurm", "Kubernetes"],
        topics: ["Project Management", "HPC", "Raspberry Pi"],
        link: `https://ritg.pomona.edu/about-us`
    },
    {
        start_date: "January 2022",
        ended: false,
        end_date: null,
        place: "The Shodor Education Foundation, Inc",
        role: "Full-Stack developer",
        info: "I joined the Software Development branch of the research team to build a content management web interface to be used for cryo-em bio-molecular research. It's very interesting and challenging because this is first time I'm working on a project I didn't build or plan from scratch, but the team has amazing developers.",
        tech_stack: ["react", "postgres"],
        topics: ["database", "front-end", "back-end", "team"],
        link: `https://www.lsi.umich.edu/science/centers-technologies/cryo-electron-microscopy`
    }
]

const requests = {
    blogs: blogger,
    projects: projects,
    experience: work
}

export default requests;