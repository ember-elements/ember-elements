import Component from '@glimmer/component';

import * as Classes from '../../_private/common/classes';

import type { IProps } from '../../_private/common';

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

export default class HtmlTable extends Component<HtmlTableArgs> {
  HTML_TABLE = Classes.HTML_TABLE;

  get props() {
    return this.args.props || {};
  }

  get getBordered() {
    let bordered;

    if (this.args.bordered != undefined) {
      bordered = this.args.bordered;
    } else if (this.props.bordered != undefined) {
      bordered = this.props.bordered;
    }

    return bordered ? `${Classes.HTML_TABLE_BORDERED} ` : '';
  }

  get getClassName() {
    let className;

    if (this.args.className != undefined) {
      className = this.args.className;
    } else if (this.props.className != undefined) {
      return (className = this.props.className);
    }

    return className;
  }

  get getCondensed() {
    let condensed;

    if (this.args.condensed != undefined) {
      condensed = this.args.condensed;
    } else if (this.props.condensed != undefined) {
      condensed = this.props.condensed;
    }

    return condensed ? `${Classes.HTML_TABLE_CONDENSED} ` : '';
  }

  get getStripped() {
    let striped;

    if (this.args.striped != undefined) {
      striped = this.args.striped;
    } else if (this.props.striped != undefined) {
      striped = this.props.striped;
    }

    return striped ? `${Classes.HTML_TABLE_STRIPED} ` : '';
  }

  get getInteractive() {
    let interactive;

    if (this.args.interactive != undefined) {
      interactive = this.args.interactive;
    } else if (this.props.interactive != undefined) {
      interactive = this.props.interactive;
    }

    return interactive ? `${Classes.INTERACTIVE} ` : '';
  }
}
