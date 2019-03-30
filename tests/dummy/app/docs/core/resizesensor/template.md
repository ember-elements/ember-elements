# Resize sensor
<div class="bp3-running-text bp3-text-large">
    <p><code>ResizeSensor</code> is a component that provides a <code>"resize"</code> event for its single
        DOM element child. It is a thin wrapper around
        <a href="https://developers.google.com/web/updates/2016/10/resizeobserver"><code>ResizeObserver</code></a> to
        provide React bindings.</p>
</div>
{{#docs-demo as |demo|}}
{{#demo.example}}
<div class="demo-container">
    <div class="docs-example-frame docs-example-frame-row" data-example-id="CardExample">
        <div class="docs-example">
            {{! BEGIN-SNIPPET docs-example-basic-resizesensor.hbs }}
            <ResizeSensor @onResize={{action 'handleResize'}} @observeParents={{true}}>
                <div style={{width}}>
                    width is rendering @ DOM
                </div>
            </ResizeSensor>
            {{! END-SNIPPET }}
        </div>
    </div>
</div>

{{/demo.example}}
{{demo.snippet name='docs-example-basic-resizesensor.hbs'}}
{{demo.snippet label='component.ts' name='docs-example-basic-resizesensor.ts'}}
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
                    <td class="docs-prop-name"><code>observeParents</code></td>
                    <td class="docs-prop-details"><code
                            class="docs-prop-type"><strong>boolean</strong><em class="docs-prop-default bp3-text-muted">false</em></code>
                        <div class="docs-prop-description">
                            <div class="docs-section">
                                <div class="bp3-running-text">
                                    <p>If <code>true</code>, all parent DOM elements of the container will also be
                                        observed for size changes. The array of entries passed to <code>onResize</code>
                                        will now contain an entry for each parent element up to the root of the
                                        document.</p>
                                    <p>Only enable this prop if a parent element resizes in a way that does
                                        not also cause the child element to resize.</p>
                                </div>
                            </div>
                        </div>
                        <div class="docs-prop-tags"></div>
                    </td>
                </tr>
                <tr>
                    <td class="docs-prop-name docs-prop-is-required"><code>onResize</code></td>
                    <td class="docs-prop-details"><code
                            class="docs-prop-type"><strong>(entries: <a href="#">IResizeEntry</a>[]) =&gt; void</strong><em class="docs-prop-default bp3-text-muted"></em></code>
                        <div class="docs-prop-description">
                            <div class="docs-section">
                                <div class="bp3-running-text">
                                    <p>Callback invoked when the wrapped element resizes.</p>
                                    <p>The <code>entries</code> array contains an entry for each observed element. In
                                        the
                                        default case (no <code>observeParents</code>), the array will contain only one
                                        element: the single child of the <code>ResizeSensor</code>.</p>
                                    <p>Note that this method is called <em>asynchronously</em> after a resize is
                                        detected and typically it will be called no more than once per frame.</p>
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
</div>