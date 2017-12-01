'use strict';

/*
* Require the path module
*/
const path = require('path');

/*
 * Require the Fractal module
 */
const fractal = module.exports = require('@frctl/fractal').create();

/*
 * Give your project a title.
 */
fractal.set('project.title', 'Structured Content Components');

/*
 * Tell Fractal where to look for components.
 */
fractal.components.set('path', path.join(__dirname, 'components'));

/*
 * Tell Fractal where to look for documentation pages.
 */
fractal.docs.set('path', path.join(__dirname, 'docs'));

/*
 * Tell the Fractal web preview plugin where to look for static assets.
 */
fractal.web.set('static.path', path.join(__dirname, 'public'));

const hbs = require('@frctl/handlebars')({
  helpers: {
  	getYoutubeID: (url) => {
			const videoID = url.split('v=')[1];
			const ampersandPosition = videoID.indexOf('&');
			if (ampersandPosition != -1) {
			  videoID = videoID.substring(0, ampersandPosition);
			}
			return videoID;
  	}
  }
  /* other configuration options here */
});

fractal.components.engine(hbs); /* set as the default template engine for components */

fractal.docs.engine(hbs); /* you can also use the same instance for documentation, if you like! */
