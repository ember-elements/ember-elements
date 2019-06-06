# Collapse
<div class='bp3-running-text bp3-text-large'>
   <p>The <code>Collapse</code> element shows and hides content with a built-in slide in/out animation.
You might use this to create a panel of settings for your application, with sub-sections
that can be expanded and collapsed.</p>
</div>
{{#docs-demo as |demo|}}
{{#demo.example}}
<div class="demo-container">
    <div class="docs-example-frame docs-example-frame-row" data-example-id="CollapseExample">
        <div class="docs-example">
            <div style="width: 100%; height: 100%; margin: 0px;">
                {{! BEGIN-SNIPPET docs-example-basic-collapse.hbs }}
                <Button @onClick={{action 'onClickButton'}}>
                    {{#if isOpen}} Hide{{else}} Show{{/if}} build logs
                </Button>
                <Collapse @isOpen={{isOpen}} @keepChildrenMounted={{keepChildrenMounted}}>
                    <pre class="bp3-code-block">[11:53:30] Finished 'typescript-bundle-blueprint' after 769 ms<br>[11:53:30] Starting 'typescript-typings-blueprint'...<br>[11:53:30] Finished 'typescript-typings-blueprint' after 198 ms<br>[11:53:30] write ./blueprint.css<br>[11:53:30] Finished 'sass-compile-blueprint' after 2.84 s</pre>
                </Collapse>
                {{! END-SNIPPET }}
            </div>
        </div>
    </div>
</div>
{{/demo.example}}
{{demo.snippet name='docs-example-basic-collapse.hbs'}}
{{demo.snippet label='component.ts' name='docs-example-basic-collapse.js'}}
{{/docs-demo}}
<div class="docs-example-options">
  <h5 class="bp3-heading">Props</h5>
  <label class="bp3-control bp3-switch">
    <input type="checkbox" onclick={{action 'doFuction'}}>
    <span class="bp3-control-indicator"></span>
    Keep children mounted
  </label>
</div>

## Props

<div class="bp3-running-text bp3-text-large">
<p>Any content should be a child of the <code>Collapse</code> element. Content must be in the document
flow (e.g. <code>position: absolute;</code> wouldn't work, as the parent element would inherit a height of 0).</p>

<p>Toggling the <code>isOpen</code> prop triggers the open and close animations.
Once the component is in the closed state, the children are no longer rendered, unless the
<code>keepChildrenMounted</code> prop is true.</p>
</div>
<div class="docs-modifiers-table bp3-running-text">
    <table class="bp3-html-table">
        <thead>
            <tr>
                <th>Props</th>
                <th>Description</th>
            </tr>
        </thead>
       <tbody>
    <tr>
        <td class="docs-prop-name"><code>class</code></td>
        <td class="docs-prop-details"><code class="docs-prop-type"><strong>string</strong><em class="docs-prop-default bp3-text-muted"></em></code>
            <div class="docs-prop-description">
                <div class="docs-section">
                    <div class="bp3-running-text">
                        <p>A space-delimited list of class names to pass along to a child element.</p>
                    </div>
                </div>
            </div>
        </td>
    </tr>
    <tr>
        <td class="docs-prop-name"><code>isOpen</code></td>
        <td class="docs-prop-details"><code class="docs-prop-type"><strong>boolean</strong><em class="docs-prop-default bp3-text-muted">false</em></code>
            <div class="docs-prop-description">
                <div class="docs-section">
                    <div class="bp3-running-text">
                        <p>Whether the component is open or closed.</p>
                    </div>
                </div>
            </div>
            <div class="docs-prop-tags"></div>
        </td>
    </tr>
    <tr>
        <td class="docs-prop-name"><code>keepChildrenMounted</code></td>
        <td class="docs-prop-details"><code class="docs-prop-type"><strong>boolean</strong><em class="docs-prop-default bp3-text-muted">false</em></code>
            <div class="docs-prop-description">
                <div class="docs-section">
                    <div class="bp3-running-text">
                        <p>Whether the child components will remain mounted when the <code>Collapse</code> is closed.
                            Setting to true may improve performance by avoiding re-mounting children.</p>
                    </div>
                </div>
            </div>
            <div class="docs-prop-tags"></div>
        </td>
    </tr>
    <tr>
        <td class="docs-prop-name"><code>transitionDuration</code></td>
        <td class="docs-prop-details"><code class="docs-prop-type"><strong>number</strong><em class="docs-prop-default bp3-text-muted">300</em></code>
            <div class="docs-prop-description">
                <div class="docs-section">
                    <div class="bp3-running-text">
                        <p>The length of time the transition takes, in milliseconds. This must match
                            the duration of the animation in CSS. Only set this prop if you override
                            Blueprint's default transitions with new transitions of a different
                            length.</p>
                    </div>
                </div>
            </div>
            <div class="docs-prop-tags"></div>
        </td>
    </tr>
</tbody>
    </table>
</div>