# Quickstart

## Installation
<div style="visibility:hidden">
{{! BEGIN-SNIPPET  addon-install.hbs }}
  ember install ember-elements
{{! END-SNIPPET }}
</div>
    {{docs-snippet   title="Shell" name='addon-install.hbs'}}


## Styles
<div style="visibility:hidden">
{{! BEGIN-SNIPPET  css-import.css }}
  @import "ember-elements-styles";
{{! END-SNIPPET }}
</div>
    {{docs-snippet   title="styles/app.scss" name='css-import.css'}}
 follow addon test style folder if other scss files required(`docs-app.scss`,`ember-cli-addon-docs.scss`)!

## Browser support

<div class="bp3-running-text bp3-text-large">
    <p><strong>Ember-elements supports Chrome, Firefox, Safari, IE 11, and Microsoft Edge.</strong></p>
    <p> 
       You may experience degraded visuals in IE.
       IE 10 and below are unsupported due to their lack of support for CSS Flexbox Layout.
    </p>
</div>

## Others
<div style="visibility:hidden">
{{! BEGIN-SNIPPET  Accessibility.hbs }}
  <Accessibility @isFocusOnTabs={{true}} />
{{! END-SNIPPET }}
</div>
 {{docs-snippet   title="app/templates/application.hbs" name='Accessibility.hbs'}}
 <div class="bp3-running-text bp3-text-large">
   <p>The Accessibility component manages the appearance of focus styles. When enabled, focus styles
    will be hidden while the user interacts using the mouse and will appear when the
    <kbd>tab</kbd> key is pressed to begin keyboard navigation.</p>
</div>
