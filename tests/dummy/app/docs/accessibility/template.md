# Accessibility
<div class="bp3-running-text bp3-text-large">
    <p>Addon strives to provide accessible components out of the box. Many of the JS components
        will apply accessible HTML attributes to support different modes of usage.</p>
</div>

## Focus management
<div class="bp3-running-text bp3-text-large">
    <p>Focus states (that glowy blue outline around the active element) are essential for keyboard
        navigation to indicate which element is currently active. They are less important, and
        occasionally outright intrusive, when using a mouse because you can click wherever you want at
        any time.</p>
    <p>Addon includes a utility that manages the appearance of focus styles. When enabled, focus styles
        will be hidden while the user interacts using the mouse and will appear when the
        <kbd>tab</kbd> key is pressed to begin keyboard navigation. Try this out for yourself
        below.</p>
    <p><strong>You must explictly enable this feature in your app (and you probably want to):</strong></p>
</div>
{{#docs-demo as |demo|}}
{{#demo.example}}
{{! BEGIN-SNIPPET docs-example-basic-Accessibility.hbs }}
<Accessibility @isFocusOnTabs={{isChecked}} />
{{! END-SNIPPET }}
{{/demo.example}}
{{demo.snippet name='docs-example-basic-Accessibility.hbs'}}

{{/docs-demo}}
<div class="bp3-running-text bp3-text-large">

    <p>Note that the focus style for text inputs (a slightly thicker colored border) is not removed by this
        utility because it is always useful to know where you're typing.</p>
</div>

<div class="docs-example-options"><label class="bp3-control bp3-switch" {{action 'onChange'}}>
        {{#if isChecked}}
        <input type="checkbox" checked value="on">
        {{else}}
        <input type="checkbox" value="on">
        {{/if}}
        <span class="bp3-control-indicator"></span>Only show focus on tab</label>
</div>

<div class="docs-example-frame docs-example-frame-row" data-example-id="ButtonsExample">
    <div class="docs-example">
        <Button @type='button' @text='Button' />
        <Button @minimal=true @type='button' @text='Minimal Button' />
        <br>
        <br>
        <ButtonGroup @bg_minimal=true>
            <Button @icon='database' @iconLeft=true @type='button' @text='Queries' />
            <Button @icon='function' @iconLeft=true @type='button' @text='Functions' />
            <Button @icon='cog' @type='button' @text='Settings' />
        </ButtonGroup>
        <br>
    </div>
</div>