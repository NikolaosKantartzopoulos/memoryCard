import React from "react";

function Card(props) {
	return (
		<div
			className="bg-red-700 flex flex-col justify-center items-center p-4 cursor-pointer w-full col-span-1 sm:text-sm md:text-lg"
			onClick={() => props.playRound(props)}
		>
			<img
				src={props.image}
				alt={props.name}
				className="rounded-full w-2/3 max-w-[150px]"
			/>
			<div className="text-amber-400 text-xl md:text-2xl">{props.name}</div>
		</div>
	);
}

export default Card;
