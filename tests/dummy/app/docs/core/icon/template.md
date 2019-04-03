# SVG Icon
<div class='bp3-running-text bp3-text-large'>
    The <code>Icon</code> addon which populate {{#link-to 'docs.icon.icons'}} <strong>Blueprintjs
        Icons</strong>{{/link-to}}
    based on icon name.
</div>
{{#docs-demo as |demo|}}
{{#demo.example}}
<div class="demo-container">
    <div class="docs-example-frame docs-example-frame-row">
        <div class="docs-example">
            <p>
                 {{! BEGIN-SNIPPET docs-example-basic-svg-icon.hbs }}
                <Icon @icon="calendar" @iconSize={{value}} @intent={{intent}}></Icon>
                 {{! END-SNIPPET }}
            </p>
        </div>
        <div class="docs-example-options">
            <h5 class="bp3-heading">Props</h5>
            <label class="bp3-label">Intent
                <div class="bp3-html-select">
                  <select onchange={{action "selectIntent"}}>
                        <option label="None" value="none">None</option>
                        <option label="Primary" value="primary">Primary</option>
                        <option label="Success" value="success">Success</option>
                        <option label="Warning" value="warning">Warning</option>
                        <option label="Danger" value="danger">Danger</option>
                  </select>
                  <span icon="double-caret-vertical" class="bp3-icon bp3-icon-double-caret-vertical"><svg data-icon="double-caret-vertical" width="16" height="16" viewBox="0 0 16 16"><desc>double-caret-vertical</desc><path d="M5 7h6a1.003 1.003 0 0 0 .71-1.71l-3-3C8.53 2.11 8.28 2 8 2s-.53.11-.71.29l-3 3A1.003 1.003 0 0 0 5 7zm6 2H5a1.003 1.003 0 0 0-.71 1.71l3 3c.18.18.43.29.71.29s.53-.11.71-.29l3-3A1.003 1.003 0 0 0 11 9z" fill-rule="evenodd"></path></svg></span>
                </div>
            </label>
             <h5 class="bp3-heading">Icon size</h5>
              <div class="bp3-control-group bp3-numeric-input">
                <div class="bp3-input-group">
                    <input type="text" autocomplete="off" onkeydown={{action 'onKeyDown'}} max="100" min="0"
                        placeholder="Enter a number..." class="bp3-input" value={{value}} style="padding-right: 10px;"
                        >
                </div>
                <div class="bp3-button-group bp3-vertical bp3-fixed">
                    <button type="button" class="bp3-button" {{action "onValueIncrement" true}}>
                        <span icon="chevron-up" class="bp3-icon bp3-icon-chevron-up"><svg data-icon="chevron-up" width="16" height="16" viewBox="0 0 16 16"><desc>chevron-up</desc><path d="M12.71 9.29l-4-4C8.53 5.11 8.28 5 8 5s-.53.11-.71.29l-4 4a1.003 1.003 0 0 0 1.42 1.42L8 7.41l3.29 3.29c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71z" fill-rule="evenodd"></path></svg></span>
                    </button>
                    <button type="button" class="bp3-button"
                        {{action "onValueIncrement" false}}>
                    <span icon="chevron-down" class="bp3-icon bp3-icon-chevron-down"><svg data-icon="chevron-down" width="16" height="16" viewBox="0 0 16 16"><desc>chevron-down</desc><path d="M12 5c-.28 0-.53.11-.71.29L8 8.59l-3.29-3.3a1.003 1.003 0 0 0-1.42 1.42l4 4c.18.18.43.29.71.29s.53-.11.71-.29l4-4A1.003 1.003 0 0 0 12 5z" fill-rule="evenodd"></path></svg></span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>
{{/demo.example}}
{{demo.snippet name='docs-example-basic-svg-icon.hbs'}}
{{demo.snippet label='component.ts' name='docs-example-basic-svg-icon.ts'}}
{{/docs-demo}}

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
                <td class="docs-prop-name"><code>intent</code></td>
                <td class="docs-prop-details"><code
                        class="docs-prop-type"><strong>string</strong><em class="docs-prop-default bp3-text-muted">danger</em></code>
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