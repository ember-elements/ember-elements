# SVG Icon
<div class='bp3-running-text bp3-text-large'>
    The <code>Icon</code> addon which populate {{#link-to 'docs.icon.icons'}} <strong>Blueprintjs
        Icons</strong>{{/link-to}}
    based on icon name.
</div>
{{#docs-demo as |demo|}}
{{#demo.example}}
{{! BEGIN-SNIPPET docs-example-basic-svg-icon.hbs }}

<div class="demo-container">
    <div class="docs-example-frame docs-example-frame-row">
        <div class="docs-example">
            <p>
                <p><code class="bp3-code">Normal icon</code></p>
                <Icon @icon="sort"></Icon>
            </p>
            <p>
                <p><code class="bp3-code">width=20 and height=20</code></p>
                <Icon @icon="add" iconSize=20></Icon>
            </p>
            <div class='webkit-box-div'>
                <div class='btn-bottom-padding'>
                    <p><code class="bp3-code">Primary icon</code></p>
                    <Icon @icon="calendar" iconSize=20 @intent='primary'></Icon>
                </div>
                <div class='btn-bottom-padding'>
                    <p><code class="bp3-code">Success icon</code></p>
                    <Icon @icon="calendar" @iconSize=20 @intent='success'></Icon>
                </div>
                <div class='btn-bottom-padding'>
                    <p><code class="bp3-code">Danger icon</code></p>
                    <Icon @icon="calendar" @iconSize=20 @intent='danger'></Icon>
                </div>
                <div class='btn-bottom-padding'>
                    <p><code class="bp3-code">Warning icon</code></p>
                    <Icon @icon="calendar" @iconSize=20 @color='red'></Icon>
                </div>
            </div>
        </div>
    </div>
</div>

{{! END-SNIPPET }}

{{/demo.example}}
{{demo.snippet name='docs-example-basic-svg-icon.hbs'}}
{{/docs-demo}}

### List of Arguments

<div class="docs-modifiers-table bp3-running-text">
    <table class="bp3-html-table">
        <thead>
            <tr>
                <th>Arguments</th>
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
                <td class="docs-prop-name"><code>style</code></td>
                <td class="docs-prop-details"><code
                        class="docs-prop-type"><strong>string</strong><em class="docs-prop-default bp3-text-muted"></em></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p>Inline html style to parent element.</p>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <td class="docs-prop-name"><code>intent</code></td>
                <td class="docs-prop-details"><code
                        class="docs-prop-type"><strong>string</strong><em class="docs-prop-default bp3-text-muted">primary</em></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p>It changes the color of the icon to blue.</p>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <td class="docs-prop-name"><code>intent</code></td>
                <td class="docs-prop-details"><code
                        class="docs-prop-type"><strong>string</strong><em class="docs-prop-default bp3-text-muted">success</em></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p> It changes the color of the icon to green, simbolises success.</p>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <td class="docs-prop-name"><code>intent</code></td>
                <td class="docs-prop-details"><code
                        class="docs-prop-type"><strong>string</strong><em class="docs-prop-default bp3-text-muted">warning</em></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p> It changes the color of the icon to yellow, warning.</p>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <td class="docs-prop-name"><code>danger</code></td>
                <td class="docs-prop-details"><code
                        class="docs-prop-type"><strong>boolean</strong><em class="docs-prop-default bp3-text-muted"></em></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p> It changes the color of the icon to red, danger.</p>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <td class="docs-prop-name"><code>icon</code></td>
                <td class="docs-prop-details"><code
                        class="docs-prop-type"><strong>{{#link-to 'docs.icon.icons'}}IconName{{/link-to}}  </strong><em class="docs-prop-default bp3-text-muted"></em></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p>Name of a Blueprint UI icon to render.</p>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <td class="docs-prop-name"><code>iconSize</code></td>
                <td class="docs-prop-details"><code
                        class="docs-prop-type"><strong>number</strong><em class="docs-prop-default bp3-text-muted">16</em></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p>Size of the icon, in pixels. Blueprint contains 16px and 20px SVG icon images, and
                                    chooses the appropriate resolution based on this prop.</p>
                            </div>
                        </div>
                    </div>
                    <div class="docs-prop-tags"><span class="bp3-tag bp3-minimal">
                            <span class="bp3-text-overflow-ellipsis bp3-fill">
                                Default icon size is 16</span>
                        </span>
                    </div>
                </td>
            </tr>
            <tr>
                <td class="docs-prop-name"><code>title</code></td>
                <td class="docs-prop-details"><code
                        class="docs-prop-type"><strong>string </strong><em class="docs-prop-default bp3-text-muted"></em></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p>Description string. This string does not appear in normal browsers, but
                                    it increases accessibility. For instance, screen readers will use it for
                                    aural feedback. By default, this is set to the icon's name. </p>
                            </div>
                        </div>
                    </div>
                    <div class="docs-prop-tags"></div>
                </td>
            </tr>
            <tr>
                <td class="docs-prop-name"><code>color</code></td>
                <td class="docs-prop-details"><code
                        class="docs-prop-type"><strong>string</strong><em class="docs-prop-default bp3-text-muted"></em></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p>Color of icon. This is used as the <code>fill</code> attribute on the
                                    <code>&lt;svg&gt;</code>
                                    image
                                    so it will override any CSS <code>color</code> property, including that set by
                                    <code>intent</code>. If this prop is omitted, icon color is inherited from
                                    surrounding text.</p>
                            </div>
                        </div>
                    </div>
                    <div class="docs-prop-tags"></div>
                </td>
            </tr>
        </tbody>
    </table>

</div>