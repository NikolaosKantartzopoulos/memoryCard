import React, { useState, useEffect } from "react";
import _ from "lodash";
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
	const [currentScore, setCurrentScore] = useState(0);
	const [maxScore, setMaxScore] = useState(0);
	const [currentLevel, setCurrentLevel] = useState(1);
	const [playingDeck, setPlayingDeck] = useState([
		{ name: "Barbarian", image: barbarian },
		{ name: "Bard", image: bard },
		{ name: "Cleric", image: cleric },
		{ name: "Druid", image: druid },
	]);
	const [fullDeck, setFullDeck] = useState([
		{ name: "Barbarian", image: barbarian },
		{ name: "Bard", image: bard },
		{ name: "Cleric", image: cleric },
		{ name: "Druid", image: druid },
		{ name: "Fighter", image: fighter },
		{ name: "Monk", image: monk },
		{ name: "Paladin", image: paladin },
		{ name: "Ranger", image: ranger },
		{ name: "Rogue", image: rogue },
		{ name: "Sorcerer", image: sorcerer },
		{ name: "Warlock", image: warlock },
		{ name: "Wizard", image: wizard },
	]);

	function newGame() {
		setCurrentLevel(1);
		setCurrentScore(0);
		setPlayingDeck([]);
		renderRound(currentLevel);
	}

	function nextLevel() {
		if (currentLevel >= 3) {
			return null;
		} else {
			setCurrentLevel(currentLevel + 1);
			renderRound(currentLevel);
		}
	}

	function fillPlayingDeck(currentLevel) {
		switch (currentLevel) {
			case 1:
				setPlayingDeck(fullDeck.slice(0, 4));
				break;
			case 2:
				setPlayingDeck(fullDeck.slice(0, 8));
				break;
			case 3:
				setPlayingDeck(fullDeck.slice(0, 12));
				break;
		}
	}
	function renderRound(currentLevel) {
		fillPlayingDeck(currentLevel);
		let listItems = playingDeck.map((cl) => (
			<Card
				key={cl.name}
				name={cl.name}
				image={cl.image}
				playRound={playRound}
			/>
		));
		return (
			<ul className="flex flex-row flex-wrap justify-center content-start m-0 h-full">
				{listItems}
			</ul>
		);
	}

	useEffect(() => {
		console.log(`nextLevel clicked with new current level -> ${currentLevel}`);
		renderRound(currentLevel);
	}, [currentLevel]);

	function playRound(card) {
		console.log(`Played round with card ${card.name}`);
	}

	return (
		<div className="w-screen h-screen flex flex-col">
			<UserUI
				currentScore={currentScore}
				maxScore={maxScore}
				currentLevel={currentLevel}
				newGame={newGame}
			/>
			<button onClick={nextLevel}>
				Next Level -- currentLevel{currentLevel}
			</button>
			<div className="bg-red-700 m-auto h-full w-full">{renderRound()}</div>
		</div>
	);
}

export default App;
