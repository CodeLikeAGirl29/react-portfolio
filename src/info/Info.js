import self from "../img/self.jpg";
import mock1 from "../img/mock1.png";
import mock2 from "../img/mock2.png";
import mock3 from "../img/mock3.png";
import mock4 from "../img/mock4.png";
import mock5 from "../img/mock5.png";

export let colors = ["rgb(237, 112, 23)", "rgb(63, 55, 208)"];

export const info = {
	firstName: "Lindsey",
	lastName: "Howard",
	initials: "lh", // the example uses first and last, but feel free to use three or more if you like.
	position: "a Frontend Developer",
	selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
	gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
	baseColor: colors[0],
	miniBio: [
		{
			emoji: "☕",
			text: "fueled by coffee",
		},
		{
			emoji: "🌎",
			text: "based in Florida",
		},
		{
			emoji: "💼",
			text: "Freelancer",
		},
		{
			emoji: "📧",
			text: "lindseykdev@gmail.com",
		},
	],
	socials: [
		{
			link: "https://facebook.com/codelikeagirl91",
			icon: "fa fa-facebook",
			label: "facebook",
		},
		{
			link: "https://instagram.com/fiercely.lindseyy",
			icon: "fa fa-instagram",
			label: "instagram",
		},
		{
			link: "https://github.com/codelikeagirl29",
			icon: "fa fa-github",
			label: "github",
		},
		{
			link: "https://linkedin.com/in/lindsey-howard",
			icon: "fa fa-linkedin",
			label: "linkedin",
		},
		{
			link: "https://twitter.com/dev_lindseyk",
			icon: "fa fa-twitter",
			label: "twitter",
		},
		// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
		// Just change the links so that they lead to your social profiles.
	],
	bio: "I am a dependable web developer with a strong work ethic & an excellent customer service record. Deeply knowledgeable in a wide variety of computer languages, including React, JavaScript, Node, and PostgreSQL while understanding principles & techniques of initial website construction & ongoing maintenance. Strong communicator & works best under pressure with tight deadlines.",
	skills: {
		proficientWith: [
			"javascript",
			"react",
			"git",
			"github",
			"postgresql",
			"nodejs",
			"express",
			"html/css",
		],
		exposedTo: ["python", "react native", "restful api"],
	},
	hobbies: [
		{
			label: "reading",
			emoji: "📖",
		},
		{
			label: "hiking",
			emoji: "🥾",
		},
		{
			label: "movies",
			emoji: "🎥",
		},
		{
			label: "dogs",
			emoji: "🐕",
		},
	],
	portfolio: [
		{
			title: "City Tours",
			live: "https://city-tours-seven.vercel.app/",
			source: "https://github.com/codelikeagirl29/city-tours",
			image: mock1,
		},
		{
			title: "Jobspace",
			live: "https://my-jobspace.herokuapp.com/",
			source: "https://github.com/CodeLikeAGirl29/my-jobspace",
			image: mock2,
		},
		{
			title: "MyReads",
			live: "https://myreads-react.vercel.app/",
			source: "https://github.com/CodeLikeAGirl29/nd0191-c1-myreads",
			image: mock3,
		},
		{
			title: "BMW Blog",
			live: "https://codelikeagirl29.github.io/my-blog/",
			source: "https://github.com/codelikeagirl29/my-blog",
			image: mock4,
		},
		{
			title: "Space Kitties",
			live: "https://catstronaut-bylindseyk.netlify.app/",
			source: "https://github.com/CodeLikeAGirl29/odyssey-lift-off-client",
			image: mock5,
		},
	],
};
