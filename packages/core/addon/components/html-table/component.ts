import Component from '@glimmer/component';
import { reads } from '@ember/object/computed';

// @ts-ignore
import { setComponentTemplate } from '@ember/component';
// @ts-ignore
import layout from './template';

import { IProps } from '../../_private/common';
import * as Classes from '../../_private/common/classes';

interface IHTMLTableProps extends IProps {
  /** Enables borders between rows and cells. */
  bordered?: boolean;

  /** Use small, condensed appearance. */
  condensed?: boolean;

  /** Enables hover styles on row. */
  interactive?: boolean;

  /** Use an alternate background color on odd rows. */
  striped?: boolean;
}

interface HtmlTableArgs extends IHTMLTableProps {
  props: IHTMLTableProps;
}

class HtmlTable extends Component<HtmlTableArgs> {
  @reads('props.bordered') bordered?: HtmlTableArgs['bordered'];
  @reads('props.className') className?: HtmlTableArgs['className'];
  @reads('props.condensed') condensed?: HtmlTableArgs['condensed'];
  @reads('props.striped') striped?: HtmlTableArgs['striped'];
  @reads('props.interactive') interactive?: HtmlTableArgs['interactive'];

  HTML_TABLE = Classes.HTML_TABLE;

  get getBordered() {
    let bordered;

    if (this.args.bordered != undefined) {
      bordered = this.args.bordered;
    } else if (this.bordered != undefined) {
      bordered = this.bordered;
    }

    return bordered ? `${Classes.HTML_TABLE_BORDERED} ` : '';
  }

  get getClassName() {
    let className;
    if (this.args.className != undefined) {
      className = this.args.className;
    } else if (this.className != undefined) {
      return (className = this.className);
    }

    return className;
  }

  get getCondensed() {
    let condensed;

    if (this.args.condensed != undefined) {
      condensed = this.args.condensed;
    } else if (this.condensed != undefined) {
      condensed = this.condensed;
    }

    return condensed ? `${Classes.HTML_TABLE_CONDENSED} ` : '';
  }

  get getStripped() {
    let striped;

    if (this.args.striped != undefined) {
      striped = this.args.striped;
    } else if (this.striped != undefined) {
      striped = this.striped;
    }

    return striped ? `${Classes.HTML_TABLE_STRIPED} ` : '';
  }

  get getInteractive() {
    let interactive;

    if (this.args.interactive != undefined) {
      interactive = this.args.interactive;
    } else if (this.interactive != undefined) {
      interactive = this.interactive;
    }

    return interactive ? `${Classes.INTERACTIVE} ` : '';
  }
}

// see http://stackoverflow.com/a/18473154/3124288 for calculating arc path
const R = 45;
const SPINNER_TRACK = `M 50,50 m 0,-${R} a ${R},${R} 0 1 1 0,${R *
  2} a ${R},${R} 0 1 1 0,-${R * 2}`;

// unitless total length of SVG path, to which stroke-dash* properties are relative.
// https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/pathLength
// this value is the result of `<path d={SPINNER_TRACK} />.getTotalLength()` and works in all browsers:
const PATH_LENGTH = 280;

const MIN_SIZE = 10;
const STROKE_WIDTH = 4;
const MIN_STROKE_WIDTH = 16;

export default setComponentTemplate(layout, HtmlTable);
