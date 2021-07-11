/* eslint-disable */

import { action } from '@ember/object';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

interface CompTestArgs { }

interface ICProps {

	active: boolean;
}
class CPropsObj {

	@tracked active = false;

	constructor(args: ICProps) {

		this.active = args.active || false;

	}

}

export default class CompTest extends Component<CompTestArgs> {

	@tracked props = new CPropsObj({ active: false });

	@action
	onButtonClick() {
		this.props.active = !this.props.active;

	}


}
