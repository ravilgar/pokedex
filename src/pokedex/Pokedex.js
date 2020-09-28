import React, { Component } from "react";
import Pokecard from "../pokecard/Pokecard";
import "./Pokedex.css";

class Pokedex extends Component {
	render() {
		let OfTitle = this.props.isWinner
			? "Pokedex-winner Pokedex Pokedex-title"
			: "Pokedex-loser Pokedex Pokedex-title";
		return (
			<div>
				<h2 className={OfTitle}>
					Total base experience is {this.props.experience}{" "}
					{this.props.isWinner ? "- you win" : "- ssory, try next time"}
				</h2>
				<div className="Pokedex">
					{this.props.pokemons.map((p) => (
						<Pokecard
							id={p.id}
							name={p.name}
							type={p.type}
							exp={p.base_experience}
						/>
					))}
				</div>
			</div>
		);
	}
}

export default Pokedex;
