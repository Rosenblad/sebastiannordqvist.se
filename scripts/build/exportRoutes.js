import React from 'react';
import { renderToString } from 'react-dom/server';
import glob from 'glob';
import flushChunks from 'webpack-flush-chunks';
import fs from 'fs-extra';
import path from 'path';
import DocumentTemplate from './DocumentTemplate';

export default async ({ config, clientStats }) => {
  const dist = path.resolve(process.cwd(), 'dist');
  const Comp = require(glob.sync(path.resolve(dist, 'static.*.js'))[0]).default;

  const chunkNames = [];
  let clientScripts = [];
  let clientStyleSheets = [];

  const renderToStringAndExtract = comp => {
    const appHtml = renderToString(comp);
    const { scripts, stylesheets } = flushChunks(clientStats, {
      chunkNames,
    });

    clientScripts = scripts;
    clientStyleSheets = stylesheets;

    return appHtml;
  }

  const appHtml = await renderToStringAndExtract(<Comp />);

  const HeadWithMeta = ({ children }) => {
    return (
      <head>
        {clientScripts.map(script => (
          <link rel="preload" as="script" href={`/${script}`} />
        ))}
        {clientStyleSheets.map(styleSheet => (
          <link rel="preload" as="script" href={`/${styleSheet}`} />
        ))}
        {clientStyleSheets.map(styleSheet => (
          <link rel="stylesheet" href={`/${styleSheet}`} />
        ))}
        {children}
      </head>
    );
  };

  const BodyWithMeta = ({ children }) => (
    <body>
      {children}
      {clientScripts.map(script => (
        <script defer type="text/javascript" src={`/${script}`} />
      ))}
    </body>
  );

  let html = `<!DOCTYPE html>${renderToString(
    <DocumentTemplate
      Head={HeadWithMeta}
      Body={BodyWithMeta}
    >
      <div id="root" dangerouslySetInnerHTML={{ __html: appHtml }} />
    </DocumentTemplate>
  )}`;

  const htmlFilename = path.join(dist, 'index.html');

  return fs.outputFile(htmlFilename, html);
};