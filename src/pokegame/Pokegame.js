import React, { Component } from "react";
import Pokedex from "../pokedex/Pokedex";
import "./Pokegame.css";

// Данные для приложения
const pokemons = [
	{ id: 4, name: "Charmander", type: "fire", base_experience: 62 },
	{ id: 7, name: "Squirtle", type: "water", base_experience: 63 },
	{ id: 11, name: "Metapod", type: "bug", base_experience: 72 },
	{ id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
	{ id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
	{ id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
	{ id: 94, name: "Gengar", type: "poison", base_experience: 225 },
	{ id: 133, name: "Eevee", type: "normal", base_experience: 65 },
];

// функция для создания карточек игрока
function createCards() {
	let hand1 = [];
	let hand2 = [...pokemons];
	while (hand1.length < hand2.length) {
		let randIdx = Math.floor(Math.random() * hand2.length);
		let randPokemon = hand2.splice(randIdx, 1)[0];
		hand1.push(randPokemon);
	}
	let exp1 = hand1.reduce((accum, item) => accum + item.base_experience, 0);
	let exp2 = hand2.reduce((accum, item) => accum + item.base_experience, 0);
	// возвращаем данные для карточек и опыт
	return {
		hand1: hand1,
		hand2: hand2,
		exp1: exp1,
		exp2: exp2,
	};
}

class Pokegame extends Component {
	constructor(props) {
		super(props);

		this.state = {
			cards: createCards(),
		};

		// привязывает this для всех экземпляров класса
		this.giveCards = this.giveCards.bind(this);
	}
	// обновляем массивы для создания карточек игроков
	giveCards() {
		// обновляем state
		this.setState({
			cards: createCards(),

		});
	}

	render() {
		return (
			<div>
				<button className="Pokegame-button" onClick={this.giveCards}>
					Try again!
				</button>
				<Pokedex
					pokemons={this.state.cards.hand1}
					experience={this.state.cards.exp1}
					isWinner={this.state.cards.exp1 > this.state.cards.exp2}
				/>
				<Pokedex
					pokemons={this.state.cards.hand2}
					experience={this.state.cards.exp2}
					isWinner={this.state.cards.exp2 > this.state.cards.exp1}
				/>
			</div>
		);
	}
}

export default Pokegame;
