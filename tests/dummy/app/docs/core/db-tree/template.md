# Tree
<div class="bp3-running-text bp3-text-large">
    <p>Trees display hierarchical data.</p>
</div>
{{#docs-demo as |demo|}}
{{#demo.example}}
<div class="demo-container">
    <div class="docs-example-frame docs-example-frame-row" data-example-id="TreeExample">
        <div class="docs-example">
            {{! BEGIN-SNIPPET docs-example-basic-tree.hbs }}
            <DbTree @content={{content}} @class='docs-example' 
              @onNodeCollapse={{action 'onNodeCollapse'}} 
              @onNodeClick={{action 'onNodeClick'}} 
              @onNodeDoubleClick={{action 'onNodeDoubleClick'}}
              @onNodeExpand={{action 'onNodeExpand'}}
              @onNodeMouseEnter={{action 'onNodeMouseEnter'}} 
              @onNodeMouseLeave={{action 'onNodeMouseLeave'}}>
            </DbTree>
             {{! END-SNIPPET }}
        </div>
    </div>
</div>
{{/demo.example}}
{{demo.snippet name='docs-example-basic-tree.hbs'}}
{{demo.snippet label='component.ts' name='docs-example-basic-tree.js'}}
{{/docs-demo}}

## Props

<div class="bp3-running-text bp3-text-large">
    <p><code>Tree</code> is a stateless component. Its contents are dictated by the <code>contents</code> argument,
        which
        is an array
        of <code>Object</code>s. The tree is multi-rooted if
        <code>contents</code> contains more than one top-level object.</p>
    <p>A variety of interaction callbacks are also exposed as args. All interaction callbacks supply a
        parameter <code>nodePath</code>, which is an array of numbers representing a node's position in the tree.</p>
</div>

### Tree Node

<div class="bp3-running-text bp3-text-large">
    <p><code>content</code> Array objects determine the contents of the tree, appearance, and state of each node in the
        tree.</p>
    <p>For example, <code>icon</code> controls the icon displayed for the node, and <code>isExpanded</code> determines
        whether the node's children are shown.</p>
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
                <td class="docs-prop-name"><code>hasCaret</code></td>
                <td class="docs-prop-details"><code
                        class="docs-prop-type"><strong>boolean</strong><em class="docs-prop-default bp3-text-muted"></em></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p>Whether the caret to expand/collapse a node should be shown.
                                    If not specified, this will be true if the node has children and false otherwise.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="docs-prop-tags"><span class="bp3-tag bp3-minimal"><span
                                class="bp3-text-overflow-ellipsis bp3-fill">Inherited
                                from <code>content.hasCaret</code></span></span></div>
                </td>
            </tr>
            <tr>
                <td class="docs-prop-name"><code>icon</code></td>
                <td class="docs-prop-details"><code
                        class="docs-prop-type"><strong>IconName | MaybeElement</strong><em class="docs-prop-default bp3-text-muted"></em></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p>The name of a Blueprint icon (or an icon element) to render next to the node's
                                    label.</p>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <td class="docs-prop-name docs-prop-is-required"><code>id</code></td>
                <td class="docs-prop-details"><code
                        class="docs-prop-type"><strong>string | number</strong><em class="docs-prop-default bp3-text-muted"></em></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p>A unique identifier for the node.</p>
                            </div>
                        </div>
                    </div>
                    <div class="docs-prop-tags"><span class="bp3-tag bp3-intent-success bp3-minimal"><span
                                class="bp3-text-overflow-ellipsis bp3-fill">Required</span></span><span
                            class="bp3-tag bp3-minimal"><span class="bp3-text-overflow-ellipsis bp3-fill">Inherited
                                from <code>content.id</code></span></span></div>
                </td>
            </tr>
            <tr>
                <td class="docs-prop-name"><code>isExpanded</code></td>
                <td class="docs-prop-details"><code
                        class="docs-prop-type"><strong>boolean</strong><em class="docs-prop-default bp3-text-muted"></em></code>
                    <div class="docs-prop-description">
                        <div class="docs-section"></div>
                    </div>
                    <div class="docs-prop-tags"><span class="bp3-tag bp3-minimal"><span
                                class="bp3-text-overflow-ellipsis bp3-fill">Inherited
                                from <code>content.isExpanded</code></span></span></div>
                </td>
            </tr>
            <tr>
                <td class="docs-prop-name docs-prop-is-required"><code>label</code></td>
                <td class="docs-prop-details"><code
                        class="docs-prop-type"><strong>string | Element</strong><em class="docs-prop-default bp3-text-muted"></em></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p>The main label for the node.</p>
                            </div>
                        </div>
                    </div>
                    <div class="docs-prop-tags"><span class="bp3-tag bp3-intent-success bp3-minimal"><span
                                class="bp3-text-overflow-ellipsis bp3-fill">Required</span></span><span
                            class="bp3-tag bp3-minimal"><span class="bp3-text-overflow-ellipsis bp3-fill">Inherited
                                from <code>content.label</code></span></span></div>
                </td>
            </tr>
            <tr>
                <td class="docs-prop-name"><code>onClick</code></td>
                <td class="docs-prop-details"><code
                        class="docs-prop-type"><strong>(node: TreeNode&lt;T&gt;, e: MouseEvent&lt;HTMLDivElement&gt;) =&gt; void</strong><em class="docs-prop-default bp3-text-muted"></em></code>
                    <div class="docs-prop-description"></div>
                    <div class="docs-prop-tags"></div>
                </td>
            </tr>
            <tr>
                <td class="docs-prop-name"><code>onCollapse</code></td>
                <td class="docs-prop-details"><code
                        class="docs-prop-type"><strong>(node: TreeNode&lt;T&gt;, e: MouseEvent&lt;HTMLSpanElement&gt;) =&gt; void</strong><em class="docs-prop-default bp3-text-muted"></em></code>
                    <div class="docs-prop-description"></div>
                    <div class="docs-prop-tags"></div>
                </td>
            </tr>
            <tr>
                <td class="docs-prop-name"><code>onDoubleClick</code></td>
                <td class="docs-prop-details"><code
                        class="docs-prop-type"><strong>(node: TreeNode&lt;T&gt;, e: MouseEvent&lt;HTMLDivElement&gt;) =&gt; void</strong><em class="docs-prop-default bp3-text-muted"></em></code>
                    <div class="docs-prop-description"></div>
                    <div class="docs-prop-tags"></div>
                </td>
            </tr>
            <tr>
                <td class="docs-prop-name"><code>onExpand</code></td>
                <td class="docs-prop-details"><code
                        class="docs-prop-type"><strong>(node: TreeNode&lt;T&gt;, e: MouseEvent&lt;HTMLSpanElement&gt;) =&gt; void</strong><em class="docs-prop-default bp3-text-muted"></em></code>
                    <div class="docs-prop-description"></div>
                    <div class="docs-prop-tags"></div>
                </td>
            </tr>
            <tr>
                <td class="docs-prop-name"><code>onMouseEnter</code></td>
                <td class="docs-prop-details"><code
                        class="docs-prop-type"><strong>(node: TreeNode&lt;T&gt;, e: MouseEvent&lt;HTMLDivElement&gt;) =&gt; void</strong><em class="docs-prop-default bp3-text-muted"></em></code>
                    <div class="docs-prop-description"></div>
                    <div class="docs-prop-tags"></div>
                </td>
            </tr>
            <tr>
                <td class="docs-prop-name"><code>onMouseLeave</code></td>
                <td class="docs-prop-details"><code
                        class="docs-prop-type"><strong>(node: TreeNode&lt;T&gt;, e: MouseEvent&lt;HTMLDivElement&gt;) =&gt; void</strong><em class="docs-prop-default bp3-text-muted"></em></code>
                    <div class="docs-prop-description"></div>
                    <div class="docs-prop-tags"></div>
                </td>
            </tr>
            <tr>
                <td class="docs-prop-name"><code>secondaryIcon</code></td>
                <td class="docs-prop-details"><code
                        class="docs-prop-type"><strong>string </strong><em class="docs-prop-default bp3-text-muted"></em></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p>A secondary icon that is displayed at the right side of the node.</p>
                            </div>
                        </div>
                    </div>
                    <div class="docs-prop-tags"><span class="bp3-tag bp3-minimal"><span
                                class="bp3-text-overflow-ellipsis bp3-fill">Inherited
                                from <code>content.secondaryIcon</code></span></span></div>
                </td>
            </tr>
        </tbody>
    </table>
</div>