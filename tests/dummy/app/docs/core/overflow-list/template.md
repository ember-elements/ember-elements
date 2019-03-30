# Overflow list
<div class="bp3-running-text bp3-text-large">
    <p><code>OverflowList</code> takes a generic list of items and renders as many items as can
        fit inside itself. Overflowed items that do not fit are collapsed into a single
        element. The visible items will be recomputed when a resize is detected.
    </p>
    <p>The <code>items</code> prop accepts an array of generic objects. The required
        <code>visibleItemRenderer</code> function which determines the appearance of a visible item.
        The required <code>overflowRenderer</code> function receives all overflowed items
        and renders the overflow indicator.
    </p>
    <p>This component uses a polyfill for the
        <a href="https://developers.google.com/web/updates/2016/10/resizeobserver">proposed <code>ResizeObserver</code>
            API
        </a>
        to efficiently detect when its dimensions change. Use the <code>observeParents</code> prop
        to watch for resizing further up in the DOM tree.
    </p>
</div>
{{#docs-demo as |demo|}}
{{#demo.example}}
<div class="demo-container">
    <div class="docs-example-frame docs-example-frame-row" data-example-id="OverflowListExample">
        <div class="docs-example">
            {{! BEGIN-SNIPPET docs-example-basic-overflow.hbs }}
            <div id='overflowListCard1' class="bp3-card bp3-elevation-0" style="width: 50%;">
                <OverflowList @items={{items}} @collapseFrom={{fromValue}}></OverflowList>
            </div>
            {{! END-SNIPPET }}
        </div>
        <div class="docs-example-options">
            <h5 class="bp3-heading">Props</h5>
            <div>
                <label class="bp3-label">Collapse from</label>
                <label class="bp3-control bp3-radio bp3-inline">
                    <input name="collapseFrom" type="radio" value="start" checked>
                    <span class="bp3-control-indicator" onclick={{action "onCollapseFrom" 'START'}}>
                    </span>
                    Start
                </label>
                <label class="bp3-control bp3-radio bp3-inline">
                    <input name="collapseFrom" type="radio" value="end">
                    <span class="bp3-control-indicator" onclick={{action "onCollapseFrom" 'END'}}>
                    </span>
                    End
                </label>
            </div>
            <h5 class="bp3-heading">Example</h5><label class="bp3-label">Width</label>
            <div class="bp3-control-group bp3-numeric-input">
                <div class="bp3-input-group">
                    <input type="text" autocomplete="off" onkeydown={{action 'onKeyDown'}} max="100" min="0"
                        placeholder="Enter a number..." class="bp3-input" value="50" style="padding-right: 10px;"
                        id='overflowWidthInput'>
                </div>
                <div class="bp3-button-group bp3-vertical bp3-fixed">
                    <button type="button" class="bp3-button" {{action "onValueIncrement" true}}>
                        <Icon @icon="chevron-up"/>
                    </button>
                    <button type="button" class="bp3-button"
                        {{action "onValueIncrement" false}}><Icon @icon="chevron-down"/></button>
                </div>
            </div>
        </div>
    </div>
</div>
{{/demo.example}}
{{demo.snippet name='docs-example-basic-overflow.hbs'}}
{{demo.snippet label='component.ts' name='docs-example-overflow.ts'}}
{{/docs-demo}}


### List of arguments

<div class="docs-modifiers">
    <div class="docs-section">
        <div class="bp3-running-text">
            <p><code>ResizeSensor</code> requires a single DOM element child and will error otherwise.</p>
        </div>
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
                    <td class="docs-prop-name"><code>className</code></td>
                    <td class="docs-prop-details">
                        <code
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
                    <td class="docs-prop-name"><code>collapseFrom</code></td>
                    <td class="docs-prop-details">
                        <code
                            class="docs-prop-type"><strong>String</strong><em class="docs-prop-default bp3-text-muted">START(default)| END</em></code>
                        <div class="docs-prop-description">
                            <div class="docs-section">
                                <div class="bp3-running-text">
                                    <p>Which direction the items should collapse from: start or end of the
                                        children. This also determines whether <code>overflowRenderer</code> appears
                                        before
                                        (<code>START</code>) or after (<code>END</code>) the visible items.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="docs-prop-tags"></div>
                    </td>
                </tr>
                <tr>
                    <td class="docs-prop-name docs-prop-is-required"><code>items</code></td>
                    <td class="docs-prop-details">
                        <code
                            class="docs-prop-type"><strong>Array of objects</strong><em class="docs-prop-default bp3-text-muted"></em></code>
                        <div class="docs-prop-description">
                            <div class="docs-section">
                                <div class="bp3-running-text">
                                    <p>All items to display in the list. Items that do not fit in the container
                                        will be rendered in the overflow instead.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="docs-prop-tags"><span class="bp3-tag bp3-intent-success bp3-minimal"><span
                                    class="bp3-text-overflow-ellipsis bp3-fill">Required</span></span></div>
                    </td>
                </tr>
                <tr>
                    <td class="docs-prop-name"><code>minVisibleItems</code></td>
                    <td class="docs-prop-details">
                        <code
                            class="docs-prop-type"><strong>number</strong><em class="docs-prop-default bp3-text-muted">0</em></code>
                        <div class="docs-prop-description">
                            <div class="docs-section">
                                <div class="bp3-running-text">
                                    <p>The minimum number of visible items that should never collapse into the
                                        overflow menu, regardless of DOM dimensions.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="docs-prop-tags"></div>
                    </td>
                </tr>
                <tr>
                    <td class="docs-prop-name"><code>observeParents</code></td>
                    <td class="docs-prop-details">
                        <code
                            class="docs-prop-type"><strong>boolean</strong><em class="docs-prop-default bp3-text-muted">false</em></code>
                        <div class="docs-prop-description">
                            <div class="docs-section">
                                <div class="bp3-running-text">
                                    <p>If <code>true</code>, all parent DOM elements of the container will also be
                                        observed. If changes to a parent's size is detected, the overflow will be
                                        recalculated.
                                    </p>
                                    <p>Only enable this prop if the overflow should be recalculated when a
                                        parent element resizes in a way that does not also cause the
                                        <code>OverflowList</code> to resize.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="docs-prop-tags"></div>
                    </td>
                </tr>
                <tr>
                    <td class="docs-prop-name"><code>style</code></td>
                    <td class="docs-prop-details">
                        <code
                            class="docs-prop-type"><strong>CSSProperties</strong><em class="docs-prop-default bp3-text-muted"></em></code>
                        <div class="docs-prop-description">
                            <div class="docs-section">
                                <div class="bp3-running-text">
                                    <p>CSS properties to apply to the root element.</p>
                                </div>
                            </div>
                        </div>
                        <div class="docs-prop-tags"></div>
                    </td>
                </tr>
                <tr>
                    <td class="docs-prop-name"><code>tagName</code></td>
                    <td class="docs-prop-details">
                        <code
                            class="docs-prop-type"><strong>keyof IntrinsicElements</strong><em class="docs-prop-default bp3-text-muted">"div"</em></code>
                        <div class="docs-prop-description">
                            <div class="docs-section">
                                <div class="bp3-running-text">
                                    <p>HTML tag name for the container element.</p>
                                </div>
                            </div>
                        </div>
                        <div class="docs-prop-tags"></div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>