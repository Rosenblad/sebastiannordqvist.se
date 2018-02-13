import React from 'react';

const Document = ({ Html, Head, Body, children, siteData, renderMeta }) => (
	<Html lang="en-US">
		<Head>
			<script async src="https://www.googletagmanager.com/gtag/js?id=UA-36900176-2" />
			<script dangerouslySetInnerHTML={{ __html: `
			  window.dataLayer = window.dataLayer || [];
			  function gtag(){dataLayer.push(arguments);}
			  gtag('js', new Date());

			  gtag('config', 'UA-36900176-2');
			`}} />

			<title>
				Sebastian Nordqvist - Web developer based in Stockholm
			</title>
			
			<meta charSet="utf-8" />
			<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<meta name="theme-color" content="#1e2228" />
			
			<link href="https://fonts.googleapis.com/css?family=Roboto+Mono:400,500|Roboto:100,300,400,500,700" rel="stylesheet" />
		</Head>
		<Body>
			{children}
		</Body>
	</Html>
);

export default Document;