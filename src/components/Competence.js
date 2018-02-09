import React from 'react'
import uuid from 'uuid';

function importAll(req) {
	const keys = req.keys();
	const components = [];
	keys.forEach(key => components.push(req(key).default));

	return components;
};

const components = importAll(require.context('../svg', false, /\.svg$/));

const Competence = () => {
	return(
		<section className="competence">
			<div className="row">

				{components.map(Component => (
					<div className="competency cx2 cs2" key={uuid.v4()}>
						<Component />
					</div>
				))}

			</div>
		</section>
	)
}

export default Competence