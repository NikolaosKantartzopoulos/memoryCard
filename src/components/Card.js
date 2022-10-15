import React from "react";

function Card(props) {
	return (
		<div
			className="bg-red-700 max-w-[25vh] max-h-[25vh] w-[20vw] h-[20vw] flex flex-col justify-center items-center p-6 cursor-pointer"
			onClick={() => props.playRound(props)}
		>
			<img src={props.image} alt={props.name} className="rounded-full" />
			<div className="text-amber-400 text-2xl">{props.name}</div>
		</div>
	);
}

export default Card;
