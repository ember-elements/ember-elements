# Portal
<div class="bp3-running-text bp3-text-large">
    <p><code>Portal</code> allows for rendering a block to a DOM element somewhere else on the page. The component
        retains typical Ember
        context in terms of bound data and action handling.
    </p>
    <p>
        This <code>Portal</code> component is particularly useful for cases where you have UI that is the logical child
        of a component but
        needs to render as a top-level DOM element, such as a confirmation <code>Dialog</code> component
    </p>
    <p>
        This component tracks its element's child nodes. When inserted into the DOM, it appends its child nodes to a
        destination element elsewhere. When removed from the DOM, it removes its child nodes.
        Nothing else changes -- data binding and action bubbling still flow according to the Ember component hierarchy.
        That
        includes usages of <code>yield</code>, so blocks provided to <code>Portal</code> simply appear in another part
        of the DOM..
    </p>
</div>
<div style="visibility:hidden">
    {{! BEGIN-SNIPPET portal-code-example.hbs }}
    <body class="ember-application">
        <!-- Destination must be in the same element as your ember app -->
        <!-- otherwise events/bindings will not work -->
        <div id="destination">
        </div>
        <div class="ember-view">
            <!-- rest of your Ember app's DOM... -->
        </div>
    </body>
    {{! END-SNIPPET }}
</div>
{{docs-snippet title="app/application.hbs or index.html" name='portal-code-example.hbs'}}
<p>
    <br />
</p>
<div style="visibility:hidden">
    {{! BEGIN-SNIPPET portal-code-example-template.hbs }}
    {{#if isPortalEnabled}}
        <Portal @destinationElementId="destination">
            Hello world!
        </Portal>
    {{/if}}
    {{! END-SNIPPET }}
</div>
{{docs-snippet title="template.hbs" name='portal-code-example-template.hbs'}}
<div class="bp3-running-text bp3-text-large">
    Then "Hello world!" would be rendered inside the <code>destination</code> div.
    If <code>isPortalEnabled</code> is false, then the "Hello world!" text will be removed from the <code>destination</code>
    div.
</div>

### Render In Place
<div class="bp3-running-text bp3-text-large">
    In this example, <code>renderInPlace</code> will override <code>destinationElementId</code> and cause the Portal
    content to be rendered in place.
</div>
<div style="visibility:hidden">
    {{! BEGIN-SNIPPET portal-renderinplace-example-template.hbs }}
    <Portal @destinationElementId="destination" @renderInPlace={{true}}>
        Hello world!
    </Portal>
    {{! END-SNIPPET }}
</div>
{{docs-snippet title="template.hbs" name='portal-renderinplace-example-template.hbs'}}
<!-- </div> -->