import React from 'react';

import { Link } from 'react-router-dom';

const Recipes = props => {
	// console.log(props);
	return (
		<div className='container'>
			<div className='row'>
				{props.recipes.map(recipe => {
					return (
						<div
							key={recipe.title}
							className='col-md-4'
							style={{ marginBottom: '2rem' }}
						>
							<div className='recipes__box'>
								<img
									className='recipe__box-img'
									src={recipe.image_url}
									alt={recipe.title}
								/>
								<div className='recipe__text'>
									<h5 className='recipes__title'>
										{/* ternerary operator...aka if,then,else statement... */}
										{/* `<statement>` == template literal */}
										{recipe.title.length < 20
											? `${recipe.title}`
											: `${recipe.title.substring(0, 25)}...`}
										{/* substring(<startIndex>,<endIndex>) */}
									</h5>
									<p className='recipes__subtitle'>
										Publisher: <span>{recipe.publisher}</span>
									</p>
								</div>
								<button className='recipe_buttons'>
									<Link
										to={{
											pathname: `/recipe/${recipe.recipe_id}`,
											state: { recipe: recipe.title }
										}}
									>
										View Recipe
									</Link>
								</button>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Recipes;
