import React from "react";

function UserUI({ currentScore, maxScore, currentLevel, newGame }) {
	return (
		<div className="h-[12vh] bg-zinc-700 flex flex-row justify-around items-center text text-amber-400 text-3xl p-0">
			<div className="grid grid-cols-1 justify-center items-center w-1/3">
				<div className="text-center">Current Score</div>
				<div className="text-center">{currentScore}</div>
			</div>
			<div
				className="text-4xl cursor-pointer  hover:bg-amber-400 hover:text-zinc-700 h-5/6 px-4 border-4 rounded-xl border-amber-400 py-2  w-1/3  text-center"
				onClick={newGame}
			>
				New Game
			</div>
			<div className=" w-1/3">
				<div className="grid grid-cols-1 justify-center items-center  text-center">
					Max Score
				</div>
				<div className="text-center ">{maxScore}</div>
			</div>
		</div>
	);
}

export default UserUI;
