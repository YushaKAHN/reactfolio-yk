import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./younglings.png"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">Younglings</div>
							<div className="work-subtitle">
								Intern / Guild Leader
							</div>
							<div className="work-duration">2023 - Present</div>
						</div>

						<div className="work">
							<img
								src="./meraki.jpg"
								alt="meraki"
								className="work-image"
							/>
							<div className="work-title">Merkai</div>
							<div className="work-subtitle">
								Assisatant Project manger
							</div>
							<div className="work-duration"> 2021-2022(Seasonal) </div>
						</div>
						
						<div className="work">
							<img
								src="./TheTechshop.jpg"
								alt="Techshop"
								className="work-image"
							/>
							<div className="work-title">The Techshop</div>
							<div className="work-subtitle"> 
								 First line Assistant sales Rep
							</div>
							<div className="work-duration">2019 - 2021</div>
						</div>




					</div>
				}
			/>
		</div>
	);
};

export default Works;
