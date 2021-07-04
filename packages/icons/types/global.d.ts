// Types for compiled templates
declare module '@ember-elements/icons/templates/*' {
	import type { TemplateFactory } from 'htmlbars-inline-precompile';
	const tmpl: TemplateFactory;
	export default tmpl;
}
