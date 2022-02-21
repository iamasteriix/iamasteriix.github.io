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

const requests = {
    blogs: blogger,
    projects: projects
}

module.exports = requests;