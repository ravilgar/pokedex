import React, { Component } from "react";
import "./Pokecard.css";

function getId(num) {
	const str = "" + num;
	const pad = "000";
	const id = pad.substring(0, pad.length - str.length) + str;
	return (
		"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/" + id + ".png"
	);
}

class Pokecard extends Component {
	render() {
		const { id, name, type, exp } = this.props;

		return (
			<div className="Pokecard">
				<h2>{name}</h2>
				<img className="Pokecard-img" src={getId(id)} alt={name} />
				<div>
					<p>Type: {type}</p>
					<p>Exp:{exp}</p>
				</div>
			</div>
		);
	}
}

export default Pokecard;
