import React, { useState } from "react";
import UserUI from "./components/UserUI";
import cog from "./images/cog.png";
import Card from "./components/Card";
import barbarian from "./images/barbarian.png";
import bard from "./images/bard.png";
import cleric from "./images/cleric.png";
import druid from "./images/druid.png";
import fighter from "./images/fighter.png";
import monk from "./images/monk.png";
import paladin from "./images/paladin.png";
import ranger from "./images/ranger.png";
import rogue from "./images/rogue.png";
import sorcerer from "./images/sorcerer.png";
import warlock from "./images/warlock.png";
import wizard from "./images/wizard.png";

function App() {
	const [currentScore, setCurrentScore] = useState(1);
	const [maxScore, setMaxScore] = useState(0);
	const [currentLevel, setCurrentLevel] = useState(0);
	const [playingDeck, setPlayingDeck] = useState([]);
	const [fullDeck, setFullDeck] = useState([
		barbarian,
		bard,
		cleric,
		druid,
		fighter,
		monk,
		paladin,
		ranger,
		rogue,
		sorcerer,
		warlock,
		wizard,
	]);

	function newGame() {
		setCurrentLevel(0);
		setCurrentScore(0);
	}

	function newRound() {}

	return (
		<React.Fragment>
			<UserUI
				currentScore={currentScore}
				maxScore={maxScore}
				currentLevel={currentLevel}
				newGame={newGame}
			/>
			<div className="bg-red-700 h-screen flex flex-row justify-around">
				<Card name="barbarian" image={barbarian} />
				<Card name="bard" image={bard} />
				<Card name="cleric" image={cleric} />
				<Card name="druid" image={druid} />
			</div>
		</React.Fragment>
	);
}

export default App;
