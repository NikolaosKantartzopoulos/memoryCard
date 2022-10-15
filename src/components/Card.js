import React from "react";

function Card(props) {
	return (
		<div className="bg-red-700 w-[20vw] h-[20vw] flex flex-col justify-center items-center p-6 cursor-pointer">
			<img src={props.image} alt={props.name} className="rounded-full" />
			<div className="text-amber-400 text-2xl">{props.name}</div>
		</div>
	);
}

export default Card;
