import React from 'react';
import { Link } from 'react-router-dom';

const API_Key = '5309b7e4590d8a99d45fb36a24f9449d';

class Recipe extends React.Component {
	state = {
		activeRecipe: []
	};
	componentDidMount = async () => {
		//happens as soon as Recipe component loads on page
		const title = this.props.location.state.recipe;
		const req = await fetch(
			`https://www.food2fork.com/api/search?key=${API_Key}&q=${title}`
		);
		const res = await req.json();
		// console.log(res.recipes[0]);
		this.setState({ activeRecipe: res.recipes[0] });
		// console.log(this.state.activeRecipe);
	};
	render() {
		const recipe = this.state.activeRecipe;
		// console.log(this.props);
		return (
			<div className='container'>
				{this.state.activeRecipe.length !== 0 && (
					<div className='active-recipe'>
						<img
							className='active-recipe__img'
							src={recipe.image_url}
							alt={recipe.title}
						/>
						<h3 className='active-recipe__title'>{recipe.title}</h3>
						<h4 className='active-recipe__publisher'>
							Publisher: {recipe.publisher}
						</h4>
						<p className='active-recipe__website'>
							Website:
							<span>
								<a href={recipe.publisher_url}>{recipe.publisher_url}</a>
							</span>
						</p>
						<button className='active-recipe_button'>
							<Link to='/'>Go Home</Link>
						</button>
					</div>
				)}
				;
			</div>
		);
	}
}

export default Recipe;
