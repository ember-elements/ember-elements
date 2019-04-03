# Panel Stack
<div class="bp3-running-text bp3-text-large">
    <p><code>PanelStack</code> manages a stack of panels and displays only the topmost panel.</p>
    <p>Each panel appears with a header containing a "back" button to return to the
        previous panel. The bottom-most <code>initialPanel</code> cannot be closed or removed from
        the stack.
    </p>
</div>

{{#docs-demo as |demo|}}
{{#demo.example}}
<div class="demo-container">
    <div class="docs-example-frame docs-example-frame-row">
        <div class="docs-example">
            {{! BEGIN-SNIPPET docs-example-basic-panel-block.hbs }}
            <PanelStack @class='docs-panel-stack-example' 
             @closePanel={{action 'onClosePanel'}}
             @panelList={{panelList}}>
                <div class="docs-panel-stack-contents-example">
                    {{component componentName panelList=panelList 
                     sendComponentName=(action 'sendComponentName')}}
                </div>
            </PanelStack>
            {{! END-SNIPPET }}
        </div>
        <div class="docs-example-options" >
            <h5 class="bp3-heading">Current stack</h5>
            <ul class="bp3-list">
                {{#each reversePanelList as |item index|}}
                <li>{{item.title}} </li>
                {{/each}}
            </ul>
        </div>
    </div>
</div>
{{/demo.example}}
{{demo.snippet name='docs-example-basic-panel-block.hbs'}}
{{demo.snippet label="CreatePanel:template.hbs" name='docs-example-basic-create-panel.hbs'}}
{{demo.snippet label='component.ts' name='docs-example-basic-panel-block.js'}}
{{demo.snippet label="CreatePanel:component.ts" name='docs-example-basic-create-panel.js'}}
{{/docs-demo}}

## Panels
<p class='bp3-running-text bp3-text-large'>
    The <code>panelList</code> is an<strong> Array of objects</strong>. It contains <code>{title,component}</code> for
    <code>panel-stack</code> component.
    You must be add ember dyanamic component invoking code(please see above example).
    <code>{component componentName}</code>
    for rendering the panel list. Generating each
    components which avoiding cloning multiple elements. Note that each panel is only mounted when it is atop the stack
    and
    is unmounted when it is next component name applied or when a panel opens . The <code>title</code> will appear in
    the header and back
    button. The <code>component</code> is a name of your generated component name. The <code>panelList</code> required
    at
    leat one of the object as metioned in <strong>controller.ts</strong>. This generating different components allows
    the component to avoid
    multiple cloning elements. Note that each panel is only mounted when it is atop the stack and is unmounted when it
    is closed
    or
    when a panel opens above it.
</p>

## Props

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
                <td class="docs-prop-name docs-prop-is-required"><code>component</code></td>
                <td class="docs-prop-details"><code
                        class="docs-prop-type"><strong>name of generated ember component </strong></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p>The component type to render for this panel and generated from your app. This must
                                    be a reference to
                                    the component, so it can be re-created
                                    dynamically when needed. please look at the ex.</p>
                            </div>
                        </div>
                    </div>
                    <div class="docs-prop-tags"><span class="bp3-tag bp3-intent-success bp3-minimal"><span
                                class="bp3-text-overflow-ellipsis bp3-fill">Required</span></span></div>
                </td>
            </tr>
            <tr>
                <td class="docs-prop-name"><code>panelList</code></td>
                <td class="docs-prop-details"><code
                        class="docs-prop-type"><strong>Array of objects</strong><em class="docs-prop-default bp3-text-muted"></em></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p>The panelList array is passed to the <code>panel-stack</code> component when it is
                                    rendered. It should contain <code>component,title</code> for panel rendering.</p>
                            </div>
                        </div>
                    </div>
                    <div class="docs-prop-tags"><span class="bp3-tag bp3-intent-success bp3-minimal"><span
                                class="bp3-text-overflow-ellipsis bp3-fill">Required</span></span></div>
                </td>
            </tr>
        </tbody>
    </table>

</div>