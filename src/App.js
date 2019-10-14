import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';
import Recipes from './components/Recipes';

const API_Key = '5309b7e4590d8a99d45fb36a24f9449d';

class App extends Component {
	state = {
		recipes: []
	};
	getRecipe = async e => {
		// asynchronous -> look for "await", and waits for that code to finish before running the rest of the code.
		const recipeName = e.target.elements.recipeName.value;
		e.preventDefault();
		const api_call = await fetch(
			`https://www.food2fork.com/api/search?key=${API_Key}&q=${recipeName}&count=10`
		);
		// fetch and .get are similar, maybe??
		const data = await api_call.json();
		console.log(data);
		// console.log(data.recipes[0].recipe_id);

		// using the state declared above, we want to enter the data from the api call into the "recipes" array.
		this.setState({ recipes: data.recipes });
		console.log(this.state.recipes);
	};

	componentDidMount = () => {
		const json = localStorage.getItem('recipes');
		const recipes = JSON.parse(json);
		this.setState({ recipes: recipes });
		//displays our saved recipes list that we viewed.
	};
	componentDidUpdate = () => {
		const recipes = JSON.stringify(this.state.recipes);
		localStorage.setItem('recipes', recipes); //takes the localStorage location, and saves recipes item into "recipes", kind of?
	};

	render() {
		return (
			<div className='App'>
				<header className='App-header'>
					<h1 className='App-title'>Recipe Search</h1>
				</header>
				<Form getRecipe={this.getRecipe} />

				{/* {this.state.recipes.map(item => {
					return (
						<div key={item.recipe_id}>
							<img src={item.image_url} alt={item.title} />
							<p key={item.recipe_id}>{item.title}</p>
						</div>
					);
        })} */}
				{/* Pass along the "recipes" state into Recipes component */}
				<Recipes recipes={this.state.recipes} />
			</div>
		);
	}
}

export default App;
