# Drawer
<div class='bp3-running-text bp3-text-large'>
    Drawers overlay content over existing parts of the UI and are anchored to the edge of the screen.
</div>
{{#docs-demo as |demo|}}
{{#demo.example}}
<div class="demo-container">
    <div class="docs-example-frame docs-example-frame-row" data-example-id="DrawerExample">
        <div class="docs-example">
            {{! BEGIN-SNIPPET docs-example-basic-drawer.hbs }}
            <Button @onClick={{action 'openDrawerComponent'}} @primary=true 
            @text='Show Drawer'></Button>
            <DbDrawer @isOpen={{isOpenDrawer}} @size={{size}} 
            @vertical={{vertical}} @autoFocus={{autoFocus}} @enforceFocus={{enforceFocus}}
            @hasBackdrop={{hasBackdrop}} @usePortal={{usePortal}} 
            @canOutsideClickClose={{canOutsideClickClose}}
            @canEscapeKeyClose={{canEscapeKeyClose}} @isLeft={{isLeft}}>
            {{#db-drawer/header}}
              <Icon @icon="info-sign"></Icon>
                <h4 class="bp3-heading">Palantir Foundry</h4>
                <Button @icon='small-cross' @minimal=true></Button>
            {{/db-drawer/header}}
            {{#db-drawer/body}}
                <p><strong>Data integration is the seminal problem of the digital age. For over ten years, we’ve
                   helped the world’s premier organizations rise to the challenge.</strong></p>
                <p>Palantir Foundry radically reimagines the way enterprises interact with data by amplifying and
                   extending the power of data integration. With Foundry, anyone can source, fuse, and transform
                   data into any shape they desire. Business analysts become data engineers — and leaders in their
                   organization’s data revolution.
                </p>
                <p>Foundry’s back end includes a suite of best-in-class data integration capabilities: data
                   provenance, git-style versioning semantics, granular access controls, branching, transformation
                   authoring, and more. But these powers are not limited to the back-end IT shop.
                </p>
                <p>In Foundry, tables, applications, reports, presentations, and spreadsheets operate as data
                   integrations in their own right. Access controls, transformation logic, and data quality flow
                   from original data source to intermediate analysis to presentation in real time. Every end
                   product created in Foundry becomes a new data source that other users can build upon. And the
                   enterprise data foundation goes where the business drives it.
                </p>
                <p>Start the revolution. Unleash the power of data integration with Palantir Foundry.</p>
             {{/db-drawer/body}}
             {{#db-drawer/footer}}
               Footer
             {{/db-drawer/footer}}
            </DbDrawer>
            {{! END-SNIPPET }}
        </div>
        <div class="docs-example-options">
            <h5 class="bp3-heading">Props</h5>
            <label class="bp3-label">Size
                <div class="bp3-html-select">
                    <select onchange={{action 'selectSize'}}>
                        <option label="Default" value="50%">Default</option>
                        <option label="Small" value="SIZE_SMALL">Small</option>
                        <option label="Standard" value="SIZE_STANDARD">Standard</option>
                        <option label="Large" value="SIZE_LARGE">Large</option>
                        <option value="72%">72%</option>
                        <option value="560px">560px</option>
                    </select>
                    <Icon @icon="double-caret-vertical"></Icon>
                </div>
            </label>
            <label class="bp3-control bp3-switch" {{action "onChangeVertical"}}>
                {{#if vertical}}
                <input type="checkbox" checked>
                <span class="bp3-control-indicator"></span>
                {{else}}
                <input type="checkbox">
                <span class="bp3-control-indicator"></span>
                {{/if}}
                Vertical
            </label>
            <div class="bp3-divider"></div>
            <label class="bp3-control bp3-switch" {{action 'onautoFocus'}}>
                {{#if autoFocus}}
                <input type="checkbox" checked>
                <span class="bp3-control-indicator"></span>
                {{else}}
                <input type="checkbox">
                <span class="bp3-control-indicator"></span>
                {{/if}}
                Auto focus</label>
            <label class="bp3-control bp3-switch" {{action 'onenforceFocus'}}>
                {{#if enforceFocus}}
                <input type="checkbox" checked>
                <span class="bp3-control-indicator"></span>
                {{else}}
                <input type="checkbox">
                <span class="bp3-control-indicator"></span>
                {{/if}}
                Enforce focus</label>
            <label class="bp3-control bp3-switch" {{action 'onhasBackdrop'}}>
                {{#if hasBackdrop}}
                <input type="checkbox" checked>
                <span class="bp3-control-indicator"></span>
                {{else}}
                <input type="checkbox">
                <span class="bp3-control-indicator"></span>
                {{/if}}
                Has backdrop</label>
            <label class="bp3-control bp3-switch" {{action 'onusePortal'}}>
                {{#if usePortal}}
                <input type="checkbox" checked>
                <span class="bp3-control-indicator"></span>
                {{else}}
                <input type="checkbox">
                <span class="bp3-control-indicator"></span>
                {{/if}}
                Use <code class="bp3-code">Portal</code>
            </label>
            <label class="bp3-control bp3-switch" {{action 'oncanOutsideClickClose'}}>
                {{#if canOutsideClickClose}}
                <input type="checkbox" checked>
                <span class="bp3-control-indicator"></span>
                {{else}}
                <input type="checkbox">
                <span class="bp3-control-indicator"></span>
                {{/if}}
                Click outside to close</label>
            <label class="bp3-control bp3-switch" {{action 'oncanEscapeKeyClose'}}>
                {{#if canEscapeKeyClose}}
                <input type="checkbox" checked>
                <span class="bp3-control-indicator"></span>
                {{else}}
                <input type="checkbox">
                <span class="bp3-control-indicator"></span>
                {{/if}}Escape key to close</label>
            <label class="bp3-control bp3-switch" {{action 'onisLeft'}}>
                {{#if isLeft}}
                <input type="checkbox" checked>
                <span class="bp3-control-indicator"></span>
                {{else}}
                <input type="checkbox">
                <span class="bp3-control-indicator"></span>
                {{/if}}Drawer render from left</label>
        </div>
    </div>

</div>

{{/demo.example}}
{{demo.snippet name='docs-example-basic-drawer.hbs'}}
{{demo.snippet label='component.ts' name='docs-example-basic-drawer.js'}}
{{/docs-demo}}

## Props

<div class="bp3-running-text bp3-text-large">
    <p>Use the <code>size</code> prop to set the size of the <code>Drawer</code>. This prop sets CSS <code>width</code>
        if
        <code>vertical={false}</code> (default) and <code>height</code> otherwise. Constants are available for common
        sizes:
    </p>
    <ul>
        <li><code>Drawer.SIZE_SMALL = 360px</code></li>
        <li><code>Drawer.SIZE_STANDARD = 50%</code> (default)</li>
        <li><code>Drawer.SIZE_LARGE = 90%</code></li>
    </ul>
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
                <td class="docs-prop-name"><code>autoFocus</code></td>
                <td class="docs-prop-details"><code
                        class="docs-prop-type"><strong>boolean</strong><em class="docs-prop-default bp3-text-muted">true</em></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p>Whether the overlay should acquire application focus when it first opens.</p>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <td class="docs-prop-name"><code>backdropClassName</code></td>
                <td class="docs-prop-details"><code
                        class="docs-prop-type"><strong>string</strong><em class="docs-prop-default bp3-text-muted"></em></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p>CSS class names to apply to backdrop element.</p>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <td class="docs-prop-name"><code>canEscapeKeyClose</code></td>
                <td class="docs-prop-details"><code
                        class="docs-prop-type"><strong>boolean</strong><em class="docs-prop-default bp3-text-muted">true</em></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p>Whether pressing the <code>esc</code> key should invoke <code>onClose</code>.</p>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <td class="docs-prop-name"><code>canOutsideClickClose</code></td>
                <td class="docs-prop-details"><code
                        class="docs-prop-type"><strong>boolean</strong><em class="docs-prop-default bp3-text-muted">true</em></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p>Whether clicking outside the overlay element (either on backdrop when present or on
                                    document)
                                    should invoke <code>onClose</code>.</p>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <td class="docs-prop-name"><code>class</code></td>
                <td class="docs-prop-details"><code
                        class="docs-prop-type"><strong>string</strong><em class="docs-prop-default bp3-text-muted"></em></code>
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
                <td class="docs-prop-name"><code>enforceFocus</code></td>
                <td class="docs-prop-details"><code
                        class="docs-prop-type"><strong>boolean</strong><em class="docs-prop-default bp3-text-muted">true</em></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p>Whether the overlay should prevent focus from leaving itself. That is, if the user
                                    attempts
                                    to focus an element outside the overlay and this prop is enabled, then the overlay
                                    will
                                    immediately bring focus back to itself. If you are nesting overlay components,
                                    either disable
                                    this prop on the "outermost" overlays or mark the nested ones
                                    <code>usePortal={false}</code>.</p>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <td class="docs-prop-name"><code>hasBackdrop</code></td>
                <td class="docs-prop-details"><code
                        class="docs-prop-type"><strong>boolean</strong><em class="docs-prop-default bp3-text-muted">true</em></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p>Whether a container-spanning backdrop element should be rendered behind the contents.
                                </p>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <td class="docs-prop-name docs-prop-is-required"><code>isOpen</code></td>
                <td class="docs-prop-details"><code
                        class="docs-prop-type"><strong>boolean</strong><em class="docs-prop-default bp3-text-muted"></em></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p>Toggles the visibility of the overlay and its children.
                                    This prop is required because the component is controlled.</p>
                            </div>
                        </div>
                    </div>
                    <div class="docs-prop-tags"><span class="bp3-tag bp3-intent-success bp3-minimal"><span
                                class="bp3-text-overflow-ellipsis bp3-fill">Required</span></span></div>
                </td>
            </tr>
            <tr>
                <td class="docs-prop-name"><code>onClose</code></td>
                <td class="docs-prop-details"><code
                        class="docs-prop-type"><strong>(event?: SyntheticEvent&lt;HTMLElement&gt;) =&gt; void</strong><em class="docs-prop-default bp3-text-muted"></em></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p>A callback that is invoked when user interaction causes the overlay to close, such as
                                    clicking on the overlay or pressing the <code>esc</code> key (if enabled).</p>
                                <p>Receives the event from the user's interaction, if there was an event (generally
                                    either a
                                    mouse or key event). Note that, since this component is controlled by the
                                    <code>isOpen</code> prop, it
                                    will not actually close itself until that args becomes <code>false</code>.</p>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <td class="docs-prop-name"><code>portalClassName</code></td>
                <td class="docs-prop-details"><code
                        class="docs-prop-type"><strong>string</strong><em class="docs-prop-default bp3-text-muted"></em></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p>Space-delimited string of class names applied to the <code>Portal</code> element if
                                    <code>usePortal={true}</code>.</p>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <td class="docs-prop-name"><code>size</code></td>
                <td class="docs-prop-details"><code
                        class="docs-prop-type"><strong>number | string</strong><em class="docs-prop-default bp3-text-muted">size= "50%"</em></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p>CSS size of the drawer. This sets <code>width</code> if <code>vertical={false}</code>
                                    (default)
                                    and <code>height</code> otherwise.</p>
                                <p>Constants are available for common sizes:</p>
                                <ul>
                                    <li><code>SIZE_SMALL = 360px</code></li>
                                    <li><code>SIZE_STANDARD = 50%</code></li>
                                    <li><code>SIZE_LARGE = 90%</code></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="docs-prop-tags"></div>
                </td>
            </tr>
            <tr>
                <td class="docs-prop-name"><code>style</code></td>
                <td class="docs-prop-details"><code
                        class="docs-prop-type"><strong>string</strong><em class="docs-prop-default bp3-text-muted"></em></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p>CSS styles to apply to the dialog.</p>
                            </div>
                        </div>
                    </div>
                    <div class="docs-prop-tags"></div>
                </td>
            </tr>
            <tr>
                <td class="docs-prop-name"><code>usePortal</code></td>
                <td class="docs-prop-details"><code
                        class="docs-prop-type"><strong>boolean</strong><em class="docs-prop-default bp3-text-muted">true</em></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p>Whether the overlay should be wrapped in a <code>Portal</code>, which renders its
                                    contents in a new
                                    element attached to <code>portalContainer</code> prop.</p>
                                <p>This prop essentially determines which element is covered by the backdrop: if
                                    <code>false</code>,
                                    then only its parent is covered; otherwise, the entire page is covered (because the
                                    parent
                                    of the <code>Portal</code> is the <code>&lt;body&gt;</code> itself).</p>
                                <p>Set this prop to <code>false</code> on nested overlays (such as <code>Dialog</code>
                                    or <code>Popover</code>) to ensure that they
                                    are rendered above their parents.</p>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <td class="docs-prop-name"><code>vertical</code></td>
                <td class="docs-prop-details"><code
                        class="docs-prop-type"><strong>boolean</strong><em class="docs-prop-default bp3-text-muted">false</em></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p>Whether the drawer should appear with vertical styling.</p>
                            </div>
                        </div>
                    </div>
                    <div class="docs-prop-tags"></div>
                </td>
            </tr>
            <tr>
                <td class="docs-prop-name"><code>isLeft</code></td>
                <td class="docs-prop-details"><code
                        class="docs-prop-type"><strong>boolean</strong><em class="docs-prop-default bp3-text-muted">false</em></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p>Whether the drawer should place position at left side of the screen.</p>
                            </div>
                        </div>
                    </div>
                    <div class="docs-prop-tags"></div>
                </td>
            </tr>
        </tbody>
    </table>
    <br>
    <div class="bp3-callout bp3-intent-primary ">
        <h4 class="bp3-heading">
            <Icon @icon='info-sign' @iconSize=16 /> Important for dialog box</h4>
        <p>
            Need to add
            <strong>&lt;div id="destination"&gt; &lt;div&gt;</strong> to main<strong> application.hbs</strong>.The
            destination Id which is used for handling portal feature.
        </p>
    </div>
</div>