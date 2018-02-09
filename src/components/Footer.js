import React from 'react'

const Footer = () => (
	<footer>
		<div className="container-fluid">
			<div className="row">
				<div className="cx12 cs6">
					<h3>Social</h3>
					<ul>
				  	<li>
				  		<a href="https://github.com/rosenblad" target="_blank">
				  			GitHub
				  		</a>
				  	</li>
				  	<li>
				  		<a href="https://www.linkedin.com/in/sebastian-nordqvist-a46533b9/" target="_blank">
				  			LinkedIn
				  		</a>
				  	</li>
				  	<li>
				  		<a href="https://www.facebook.com/nordqvistsebastian" target="_blank">
				  			Facebook
				  		</a>
				  	</li>
				  </ul>
				</div>
				<div className="cx12 cs6">
					<h3>Contact</h3>
					<ul>
						<li>
							<a href="mailto:nordqvist.sebastian@gmail.com">
								nordqvist.sebastian@gmail.com
							</a>
					  </li>
					  <li>
					  	<a href="tel:+46734236358">
					  		+46 734 23 63 58
					  	</a>
					  </li>
					</ul>
				</div>
			</div>	
		</div>
	</footer>
)

export default Footer