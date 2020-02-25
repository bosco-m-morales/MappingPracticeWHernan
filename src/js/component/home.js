import React, { useState } from "react";
import { Card } from "./card";

let list = [
	{
		imageUrl:
			"https://image.shutterstock.com/image-photo/large-beautiful-drops-transparent-rain-600w-668593321.jpg",
		description: "1 description",
		title: "1 title"
	},
	{
		imageUrl:
			"https://image.shutterstock.com/image-photo/lemon-treelime-fruit-nature-outdoor-600w-743246656.jpg",
		description: "2 description",
		title: "2 title"
	},
	{
		imageUrl:
			"https://image.shutterstock.com/image-photo/earth-water-drop-reflection-under-600w-621430085.jpg",
		description: "3 description",
		title: "3 title"
	}
];

export function Home() {
	const [example, setExample] = useState("this");

	return (
		<>
			<h1>{example}</h1>
			<button onClick={() => setExample("that")}>change state</button>
			<div className="d-flex justify-content-center">
				{list.map((item, index) => {
					return (
						<Card
							key={index}
							var1={item.title}
							var2={item.description}
							var3={item.imageUrl}
						/>
					);
				})}
			</div>
		</>
	);
}
// export function Home() {
// 	return (
// 		<div className="d-flex justify-content-center">
// 			{list.map((item, index) => {
// 				return (
// 					<div
// 						key={index}
// 						className="card m-3"
// 						style={{ width: "300px" }}>
// 						<div className="card-body">
// 							<h5 className="card-title">{item.title}</h5>
// 							<h6 className="card-subtitle mb-2 text-muted">
// 								Card subtitle
// 							</h6>
// 							<p className="card-text">{item.description}</p>
// 							<a href={item.imageUrl}>Card link</a>
// 						</div>
// 					</div>
// 				);
// 			})}
// 		</div>
// 	);
// }
