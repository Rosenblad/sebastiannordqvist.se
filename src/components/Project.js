import React from 'react'

const Project = ({
	name,
	permalink,
	imageSrc,
	imageAlt,
}) => {

	let image

	if( permalink ){
		image = <a href={ permalink } target="_blank">
			<img src={ imageSrc } alt={ imageAlt } />
		</a>
	}else{
		image = <img src={ imageSrc } alt={ imageAlt } />
	}

	return(
		<div className="cx12">
			<div className="project">
				{ image }
			</div>
		</div>
  )
}

export default Project