import config from './config/environment';
import AddonDocsRouter, { docsRoute } from 'ember-cli-addon-docs/router';
const Router = AddonDocsRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL,
});
Router.map(function () {
  docsRoute(this, function () { /* Your docs routes go here */

    this.route('core', function () {
      this.route('button');
      this.route('button-group');
      this.route('card');
      this.route('icon');
      this.route('dialog');
      this.route('pop-over');
      this.route('panel-stack');
      this.route('tag-input');
      this.route('db-tree');
      this.route('drawer');
      this.route('tooltip');
      this.route('resizesensor');
      this.route('overflowList');
      this.route('tag');
      this.route('input-group');
      this.route('form-group');
      this.route('nav-bar');
      this.route('tabs');
      this.route('check-box');
      this.route('control-group');

    });
    this.route('date', function () {
      this.route('date-range-picker');
      this.route('date-picker');
    });
    this.route('select', function () {
      this.route('multi-select');
      this.route('select');

    });

    this.route('icon', function () {
      this.route('icons');
    });
    this.route('introduction', function () {
      this.route('quickstart');
      this.route('overview');
    });
    // this.route('accessibility');
  });
  this.route('not-found', { path: '/*path' });





});

export default Router;
