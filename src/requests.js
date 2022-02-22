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
    {logo:``, title: "Bingo", link: `https://bingo-search.web.app/`},
    {logo:``, title: "Simon game", link: `https://angry-turing-f8c139.netlify.app/`}
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