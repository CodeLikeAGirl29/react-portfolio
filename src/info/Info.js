import self from "../img/self.png";
import mock1 from "../img/mock1.png";
import mock2 from "../img/mock2.png";
import mock3 from "../img/mock3.png";
import mock4 from "../img/mock4.png";
import mock5 from "../img/mock5.png";
import mock6 from "../img/mock6.png";
import mock7 from "../img/mock7.png";
import mock8 from "../img/mock8.png";

export let colors = ["#15DB95", "rgb(166,104,255)"];

export const info = {
    firstName: "Lindsey",
    lastName: "Howard",
    initials: "lh",
    position: "a Full Stack Developer",
    selfPortrait: self,
    gradient: `-webkit-linear-gradient(135deg, ${colors})`,
    baseColor: colors[0],
    miniBio: [
        {
            emoji: "☕",
            text: "fueled by coffee"
        },
        {
            emoji: "🌎",
            text: "based in Raleigh, NC"
        },
        {
            emoji: "💼",
            text: "open to work"
        },
        {
            emoji: "📧",
            text: "codelikeagirl91@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://facebook.com/codelikeagirl91",
            icon: "fa fa-facebook",
            label: "facebook"
        },
        {
            link: "https://instagram.com/fiercely.lindseyy",
            icon: "fa fa-instagram",
            label: "instagram"
        },
        {
            link: "https://github.com/codelikeagirl29",
            icon: "fa fa-github",
            label: "github"
        },
        {
            link: "https://linkedin.com/in/lindsey-howard",
            icon: "fa fa-linkedin",
            label: "linkedin"
        },
        {
            link: "https://twitter.com/dev_lindseyk",
            icon: "fa fa-twitter",
            label: "twitter"
        }

    ],
    bio: "I am a dependable web developer with a strong work ethic and an excellent customer service record. Deeply knowledgeable in a wide variety of computer languages, including React, JavaScript, Node, and PostgreSQL while understanding principles and techniques of initial website construction and ongoing maintenance. Strong communicator and works best under pressure with tight deadlines.",
    skills:
        {
            proficientWith: ["javascript", "react", "git", "github", 'postgresql', "nodejs", "express", "html/css", "heroku"],
            exposedTo: ["python", "react native", "restful api"]
        }
    ,
    hobbies: [
        {
            label: "reading",
            emoji: "📖"
        },
        {
            label: "hiking",
            emoji: "🥾"
        },
        {
            label: "movies",
            emoji: "🎥"
        },
        {
            label: "dogs",
            emoji: "🐕"
        },
        {
            label: "target practice",
            emoji: "🎯"
        }
    ],
    portfolio: [
        {
            title: "City Tours",
            live: "https://city-tours-seven.vercel.app/",
            source: "https://github.com/codelikeagirl29/city-tours",
            image: mock1
        },
        {
            title: "Jobspace",
            live: "https://my-jobspace.herokuapp.com/",
            source: "https://github.com/CodeLikeAGirl29/my-jobspace",
            image: mock2
        },
        {
            title: "MyReads",
            live: "https://myreads-react.vercel.app/",
            source: "https://github.com/CodeLikeAGirl29/nd0191-c1-myreads",
            image: mock3
        },
        {
            title: "BMW Blog",
            live: "https://codelikeagirl29.github.io/my-blog/",
            source: "https://github.com/codelikeagirl29/my-blog",
            image: mock4
        },
        {
            title: "Space Kitties",
            live: "https://catstronaut-bylindseyk.netlify.app/",
            source: "https://github.com/CodeLikeAGirl29/odyssey-lift-off-client",
            image: mock5
        },
        {
            title: "Unsplash Images",
            live: "https://xhffdr.csb.app/",
            source: "https://github.com/CodeLikeAGirl29/unsplash-api",
            image: mock8
        },
        {
            title: "Node Projects",
            live: "https://projects-nodejs-express.herokuapp.com",
            source: "https://github.com/CodeLikeAGirl29/nodejs-and-express",
            image: mock6
        },
        {
            title: "Paws & Claws",
            live: "https://paws-claws-express.herokuapp.com/",
            source: "https://github.com/CodeLikeAGirl29/paws-claws-express",
            image: mock7
        }
    ]
}
