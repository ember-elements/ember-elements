import Component from '@ember/component';
// @ts-ignore: Ignore import of compiled template
import layout from './template';

export default class Render extends Component {
  layout = layout;
  didRender() {
    if (document.querySelector('.intro-center-class')) {
      var doc: any = document.querySelector('main');
      doc.style.backgroundColor = '#fff';
    }
    else {
      if (document.querySelector('main')) {
        var doc: any = document.querySelector('main');
        doc.style.backgroundColor = '#f5f8fa';
      }
    }
  }
  // normal class body definition here
};
