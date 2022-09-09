import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"
import mock6 from "../img/mock6.jpg"
import mock7 from "../img/mock7.png"

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

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
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'based in the US'
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
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://instagram.com/fiercely.lindseyy",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/codelikeagirl29",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://linkedin.com/in/lindsey-howard",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://twitter.com/dev_lindseyk",
            icon: "fa fa-twitter",
            label: 'twitter'
        }

    ],
    bio: "I am a strategic and creative website developer who specializes in delivering highly impactful websites. I have strong technical skills and experience in web development, software development, and project management. I have a proven track record of consistently meeting deadlines and maximizing results. I am a team player who is able to work effectively in a fast-paced environment.",
    skills:
        {
            proficientWith: ['javascript', 'react', 'git', 'github', 'postgresql', 'nodejs', 'express', 'html/css', 'heroku'],
            exposedTo: ['nodejs', 'python', 'react native', 'restful api']
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'hiking',
            emoji: '🥾'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'dogs',
            emoji: '🐕'
        },
        {
            label: 'target practice',
            emoji: '🎯'
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
            image: mock7
        },
        {
            title: "MyReads",
            live: "https://myreads-react.vercel.app/",
            source: "https://github.com/CodeLikeAGirl29/nd0191-c1-myreads",
            image: mock2
        },
        {
            title: "BMW Blog",
            live: "https://codelikeagirl29.github.io/my-blog/",
            source: "https://github.com/codelikeagirl29/my-blog",
            image: mock3
        },
        {
            title: "Students Directory",
            live: "https://students-pagination-list.netlify.app/",
            source: "https://github.com/CodeLikeAGirl29/students-pagination",
            image: mock4
        },
        {
            title: "Unsplash Images",
            live: "https://xhffdr.csb.app/",
            source: "https://github.com/CodeLikeAGirl29/unsplash-api",
            image: mock5
        },
        {
            title: "Node Projects",
            live: "https://projects-nodejs-express.herokuapp.com",
            source: "https://github.com/CodeLikeAGirl29/nodejs-and-express",
            image: mock6
        }
    ]
}