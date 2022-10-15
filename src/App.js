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
	const [currentScore, setCurrentScore] = useState(1);
	const [maxScore, setMaxScore] = useState(0);
	const [currentLevel, setCurrentLevel] = useState(1);
	const [playingDeck, setPlayingDeck] = useState([
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
		setCurrentLevel(0);
		setCurrentScore(0);
		setPlayingDeck([]);
		fillPlayingDeck(1);
	}

	function fillPlayingDeck() {
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
	function renderRound() {
		let listItems = playingDeck.map((cl) => (
			<Card key={cl.name} name={cl.name} image={cl.image} />
		));
		return (
			<ul className="flex flex-row flex-wrap justify-center content-center m-0">
				{listItems}
			</ul>
		);
	}

	return (
		<React.Fragment>
			<UserUI
				currentScore={currentScore}
				maxScore={maxScore}
				currentLevel={currentLevel}
				newGame={newGame}
			/>
			<div className="bg-red-700 h-screen m-auto p-2">{renderRound()}</div>
		</React.Fragment>
	);
}

export default App;
