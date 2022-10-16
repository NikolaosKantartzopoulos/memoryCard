import React, { useState, useEffect } from "react";
import _ from "lodash";
import UserUI from "./components/UserUI";
import GameInformation from "./components/GameInformation";
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
import info from "./images/information-outline.png";

function App() {
	const [gameOver, setGameOver] = useState(false);
	const [currentScore, setCurrentScore] = useState(0);
	const [maxScore, setMaxScore] = useState(0);
	const [currentLevel, setCurrentLevel] = useState(1);
	const [playingDeck, setPlayingDeck] = useState([]);
	const [cardsAlreadyClicked, setCardsAlreadyClicked] = useState([]);
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
	const [showInfo, setShowInfo] = useState(false);

	function newGame() {
		setGameOver(false);
		setCurrentScore(0);
		setCurrentLevel(1);
		setCardsAlreadyClicked([]);
		renderRound(currentLevel);
	}
	function nextLevel() {
		if (currentLevel >= 3) {
			return null;
		} else {
			setCardsAlreadyClicked([]);
			setCurrentLevel(currentLevel + 1);
			fillPlayingDeck(currentLevel);
		}
	}
	let fillPlayingDeck = (currentLevel) => {
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
	};
	let renderRound = () => {
		if (
			Object.keys(playingDeck).length > 0 &&
			cardsAlreadyClicked.length == Object.keys(playingDeck).length
		) {
			console.log("Check for victory or defeat");
			if (cardsAlreadyClicked.length == 12)
				return (
					<h1 className="h-[12vh] flex flex-row justify-around items-center text text-amber-400 text-4xl p-0">
						A valiant Victory!
					</h1>
				);
			nextLevel();
		}
		if (gameOver) {
			return (
				<h1 className="h-[12vh] flex flex-row justify-around items-center text text-amber-400 text-4xl p-0">
					You Lose
				</h1>
			);
		}

		let listItems = playingDeck.map((cl) => (
			<Card
				key={cl.name}
				name={cl.name}
				image={cl.image}
				playRound={playRound}
			/>
		));
		return (
			<ul className="grid grid-cols-3 md:grid-cols-4 justify-center content-start m-0 h-5/6">
				{listItems}
			</ul>
		);
	};

	useEffect(() => {
		if (!gameOver && currentScore > maxScore) {
			setMaxScore(currentScore);
		}
	}, [currentScore]);

	useEffect(() => {
		return setPlayingDeck(_.shuffle(playingDeck));
	}, [cardsAlreadyClicked]);

	useEffect(() => {
		fillPlayingDeck(currentLevel);
		return console.log(`Current level -> ${currentLevel}`);
	}, [currentLevel]);

	function playRound(card) {
		console.log(`Played round with card ${card.name}`);
		if (cardsAlreadyClicked.includes(card.name)) {
			setGameOver(true);
			console.log("You lose");
		} else {
			setCurrentScore(currentScore + 1);
			setCardsAlreadyClicked(cardsAlreadyClicked.concat(card.name));
		}
	}

	function toggleinfo() {
		showInfo ? setShowInfo(false) : setShowInfo(true);
	}

	useEffect(() => {
		toggleinfo;
	}, [showInfo]);

	return (
		<div className="w-screen h-screen flex flex-col">
			<UserUI
				currentScore={currentScore}
				maxScore={maxScore}
				currentLevel={currentLevel}
				newGame={newGame}
			/>

			<div className="bg-red-700 m-auto h-full w-full">
				<div>{renderRound()}</div>
				<img
					src={info}
					className="sm:h-[100px] md:h-[50px] absolute right-4 bottom-4"
					onClick={toggleinfo}
				/>
				{showInfo && <GameInformation />}
			</div>
		</div>
	);
}

export default App;
