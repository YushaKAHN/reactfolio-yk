import React from "react";

function article_1() {
	return {
		date: "20 August 2023",
		title: "Shadowlings",
		description:
			"  A Mentor and program planner for the upskilling of the youth. Our Shadowlings Program helps the youth get a headstart in IT",
		keywords: [
			"Upskilling of the youth",
			"Yusha",
			"Yusha ",
			"Yusha Kahn",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
					width: 900px;
					height:700px
					
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div 
						className="paragraph">Today was another successful day in our job shadow program with some great students! 🎉 They’ve been introduced to web development, mobile development, data science, and cyber security, including some design. We ended this amazing day by introducing students to a great gaming session 🎮 from the little raspberry pie configured by yours truly. 😄
						
					</div>
					
					<img
       					 src="\Shadowlings.jpg"
        					alt="Yk showcasing the shadowlings the raspberry Pi"
							className="randImage"
      				/>
					
					
				</div>
			</React.Fragment>
		),
	};
}


function article_2() {
	return {
		date: "9 June 2023",
		title: "Inspire and Aspire ",
		description:
			"Empowering the next generation through the sharing of my personal journey to inspire and ignite their potential",
		
		
		keywords: [
			"Inspiring the youth ",
			"Yusha",
			"Yusha K",
			"Yusha Kahn",
		],
		style: `
					.article-content {
						display: flex;
						flex-direction: column;
						align-items: center;
		}

					.randImage {
						align-self: center;
						outline: 2px solid red;
						width: 900px;
						height:700px
			
			}`,
		body: (
			<React.Fragment>
				
				<h1>Catch us at the Youth Expo, taking place at the CTICC! 🌟 This event provided an excellent platform for us to showcase our identity and work. We thoroughly enjoyed connecting with students who share a profound passion for the software realm! 💻🌍</h1>
				
				
				<img
       					 src="\inspire.jpg"
        					alt="Yk showcasing the shadowlings the raspberry Pi"
							className="randImage"
      				/>
					
					
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
