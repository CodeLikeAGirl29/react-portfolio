import React, { useEffect } from "react";
import Style from '../../styles.css';
import me from "../../img/self.png";
import classNames from "classnames";
import EmojiBullet from "./EmojiBullet";
import SocialIcon from "./SocialIcon";
import { Box } from "@mui/material";
import { info } from "../../info/Info";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
	useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);

	return (
		<Box
			component={"main"}
			display={"flex"}
			flexDirection={{ xs: "column", md: "row" }}
			alignItems={"center"}
			justifyContent={"center"}
			minHeight={"calc(100vh - 175px)"}
		>
			<Box
				className={classNames(Style.avatar, Style.shadowed)}
				alt={"image of lindsey"}
				style={{ background: info.gradient }}
				component={"img"}
				src={me}
				width={{ xs: "35vh", md: "40vh" }}
				height={{ xs: "35vh", md: "40vh" }}
				borderRadius={"50%"}
				p={"0.75rem"}
				mb={{ xs: "1rem", sm: 0 }}
				mr={{ xs: 0, md: "2rem" }}
			/>
			<Box>
				<h1
					data-aos='zoom-in-up'
					data-aos-delay='3200'
					data-aos-duration='1000'
				>
					Hi, I'm{" "}
					<span
						style={{
							background: info.gradient,
							WebkitBackgroundClip: "text",
							WebkitTextFillColor: "transparent",
						}}
					>
						{info.firstName}
					</span>
					<span className={Style.hand} role='img' aria-label='hand waving'>
						🤚
					</span>
				</h1>
				<h2>I'm {info.position}.</h2>
				<Box component={"ul"} p={"0.8rem"}>
					{info.miniBio.map((bio, index) => (
						<EmojiBullet key={index} emoji={bio.emoji} text={bio.text} />
					))}
				</Box>
				<Box
					display={"flex"}
					gap={"1.5rem"}
					justifyContent={"center"}
					fontSize={{ xs: "1.3rem", md: "1.5rem" }}
				>
					{info.socials.map((social, index) => (
						<SocialIcon
							key={index}
							link={social.link}
							icon={social.icon}
							label={social.label}
						/>
					))}
				</Box>
			</Box>
		</Box>
	);
}
