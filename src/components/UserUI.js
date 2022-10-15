import React from "react";

function UserUI({ currentScore, maxScore, currentLevel, newGame }) {
	return (
		<div className="h-[10vh] bg-zinc-700 flex flex-row justify-around items-center text text-amber-400 text-2xl">
			<div className="grid grid-cols-1 justify-center items-center ">
				<div>Current Score</div>
				<div className="text-center text-4xl">{currentScore}</div>
			</div>
			<div
				className=" text-4xl cursor-pointer  hover:bg-amber-400 hover:text-zinc-700 p-4 border-4 rounded-xl border-amber-400"
				onClick={newGame}
			>
				New Game
			</div>
			<div>
				<div className="grid grid-cols-1 justify-center items-center">
					Max Score
				</div>
				<div className="text-center text-4xl">0</div>
			</div>
		</div>
	);
}

export default UserUI;
