/* eslint-disable no-console, import/no-extraneous-dependencies */

import 'babel-register';
// import webpack from 'webpack';
// import chalk from 'chalk';

// import App from '../src/components/App';
// import config from '../webpack.config.babel';

process.env.NODE_ENV = 'production';

// function getWebpackConfig({ stage }) {
//   let webpackConfig;

//   if (stage === 'prod') {
//     webpackConfig = require('../webpack.config.babel');
//   } else if (stage === 'node') {
//     webpackConfig = require('../webpack.config.babel').default({
//       isNode: true
//     });
//   }

//   return webpackConfig;
// }

// async function buildProductionBundles({ config }) {
//   return new Promise((resolve, reject) => {
//     webpack([
//       // getWebpackConfig({ config, stage: 'prod' }),
//       getWebpackConfig({ config, stage: 'node' }),
//     ]).run((err, stats) => {
//       if (err) {
//         console.log(chalk.red(err.stack || err));

//         if (err.details) {
//           console.log(chalk.red(err.details));
//         }

//         return reject(err);
//       }

//       stats.toJson('verbose');

//       const [prodStats, nodeStats] = stats.stats;

//       function checkBuildStats(stage, stageStats) {
//         const buildErrors = stageStats.hasErrors();
//         const buildWarnings = stageStats.hasWarnings();

//         if (buildErrors || buildWarnings) {
//           console.log(stageStats.toString({
//             context: config.context,
//             performance: false,
//             hash: false,
//             timings: true,
//             entrypoints: false,
//             chunkOrigins: false,
//             chunkModules: false,
//             colors: true,
//           }));
//           if (buildErrors) {
//             console.log(chalk.red.bold(`
//                   => There were ERRORS during the ${stage} build stage! :(
//                   => Fix them and try again!
//                 `));
//           } else if (buildWarnings) {
//             console.log(chalk.yellow.bold(`
//                   => There were WARNINGS during the ${stage} build stage!
//                 `));
//           }
//         }
//       }

//       checkBuildStats('prod', prodStats);
//       checkBuildStats('node', nodeStats);

//       resolve(prodStats.toJson());
//     });
//   });
// }

// const exportRoutes = async () => {
//  const appHtml = renderToString(<App />);

//  let html = `<!DOCTYPE html>${renderToString(
//    <div id="root" dangerouslySetInnerHTML={{ __html: appHtml }} />
//  )}`;

//  const dist = path.resolve(__dirname, '../build');
//  const htmlFilename = path.join(dist, 'index.html');

//  return fs.outputFile(htmlFilename, html);
// };


const start = async () => {
  try {
    console.log('');
    console.time('=> Site is ready for production!');

    // Build static pages and JSON
    // console.log('=> Bundling App...');
    // console.time(chalk.green('=> [\u2713] App Bundled'));
    // const clientStats = await buildProductionBundles({ config });
    // console.timeEnd(chalk.green('=> [\u2713] App Bundled'));

    // console.log('=> Exporting Routes...')
    // console.time(chalk.green('=> [\u2713] Routes Exported'))
    // await exportRoutes();
    // console.timeEnd(chalk.green('=> [\u2713] Routes Exported'))

    console.timeEnd('=> Site is ready for production!');

    process.exit(0);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

start();
