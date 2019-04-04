# Tag
<div class='bp3-running-text bp3-text-large'>
    Tags are great for lists of strings.
</div>
{{#docs-demo as |demo|}}
{{#demo.example}}
<div class="demo-container">
    <div class="docs-example-frame docs-example-frame-row" data-example-id="TagExample">
        <div class="docs-example">
            {{! BEGIN-SNIPPET docs-example-basic-tag.hbs }}
            <Tag @fill={{fill}} @large={{large}} @minimal={{minimal}} 
              @active={{active}} @interactive={{interactive}} @round={{round}} 
              @icon={{icon}} @rightIcon={{rightIcon}} @intent={{intent}}
              @value={{value}} @removable={{removable}} 
              @onRemove={{action 'onRemove'}} >
            </Tag>
             <Tag @fill={{fill}} @large={{large}} @minimal={{minimal}} 
               @active={{active}} @interactive={{interactive}} 
               @round={{round}} @icon={{icon}} @rightIcon={{rightIcon}} @intent={{intent}}
               @value="San Francisco" @removable={{removable}} @onRemove={{action 'onRemove'}}>
            </Tag>
             <Tag  @fill={{fill}} @large={{large}} @minimal={{minimal}} 
               @active={{active}} @interactive={{interactive}} @round={{round}} 
               @icon={{icon}} @rightIcon={{rightIcon}} @intent={{intent}}
               @value="Seattle" @removable={{removable}} @onRemove={{action 'onRemove'}}>
            </Tag>
            {{! END-SNIPPET }}
        </div>
        <div class="docs-example-options">
            <h5 class="bp3-heading">Props</h5>
            <label class="bp3-control bp3-switch">
                <input type="checkbox" onclick={{action 'doFuction' 'active'}}>
                <span class="bp3-control-indicator"></span>
                Active
            </label>
            <label class="bp3-control bp3-switch">
                <input type="checkbox" onclick={{action 'doFuction' 'fill'}}>
                <span class="bp3-control-indicator"></span>
                Fill
            </label>
            <label class="bp3-control bp3-switch">
                <input type="checkbox" onclick={{action 'doFuction' 'large'}}>
                <span class="bp3-control-indicator"></span>
                Large
            </label>
            <label class="bp3-control bp3-switch">
                <input type="checkbox" onclick={{action 'doFuction' 'minimal'}}>
                <span class="bp3-control-indicator"></span>
                Minimal
            </label>
            <label class="bp3-control bp3-switch">
                <input type="checkbox" onclick={{action 'doFuction' 'removable'}}>
                <span class="bp3-control-indicator"></span>
                Removable
            </label>
            <label class="bp3-control bp3-switch">
                <input type="checkbox" onclick={{action 'doFuction' 'interactive'}}>
                <span class="bp3-control-indicator"></span>
                Interactive
            </label>
            <label class="bp3-control bp3-switch">
                <input type="checkbox" onclick={{action 'doFuction' 'round'}}>
                <span class="bp3-control-indicator"></span>
                Round
            </label>
            <label class="bp3-control bp3-switch">
                <input type="checkbox" onclick={{action 'doFuction' 'icon'}}>
                <span class="bp3-control-indicator"></span>
                icon
            </label>
            <label class="bp3-control bp3-switch">
                <input onclick={{action 'doFuction' 'rightIcon'}} type="checkbox">
                <span class="bp3-control-indicator"></span>
                Right-Icon
            </label>
            <label class="bp3-label" style="margin-top:5px">Intent
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
        </div>
    </div>
</div>
{{/demo.example}}
{{demo.snippet name='docs-example-basic-tag.hbs'}}
{{demo.snippet label='component.ts' name='docs-example-basic-tag.js'}}
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
                <td class="docs-prop-name"><code>active</code></td>
                <td class="docs-prop-details"><code
                        class="docs-prop-type"><strong>boolean</strong><em class="docs-prop-default bp3-text-muted">false</em></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p>Whether the tag should appear in an active state.</p>
                            </div>
                        </div>
                    </div>
                    <div class="docs-prop-tags"></div>
                </td>
            </tr>
            <tr>
                <td class="docs-prop-name"><code>class</code></td>
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
                <td class="docs-prop-name"><code>fill</code></td>
                <td class="docs-prop-details"><code
                        class="docs-prop-type"><strong>boolean</strong><em class="docs-prop-default bp3-text-muted">false</em></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p>Whether the tag should take up the full width of its container.</p>
                            </div>
                        </div>
                    </div>
                    <div class="docs-prop-tags"></div>
                </td>
            </tr>
            <tr>
                <td class="docs-prop-name"><code>icon</code></td>
                <td class="docs-prop-details">
                    <code
                        class="docs-prop-type"><strong>{{#link-to 'docs.icon.icons'}}IconName{{/link-to}} </strong><em class="docs-prop-default bp3-text-muted"></em></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p>Name of a Blueprint UI icon to render before the text.</p>
                            </div>
                        </div>
                    </div>
                    <div class="docs-prop-tags"><span class="bp3-tag bp3-minimal"><span
                                class="bp3-text-overflow-ellipsis bp3-fill">
                                Default icon position is left</span></span>
                    </div>
                </td>
            </tr>
            <tr>
                <td class="docs-prop-name"><code>iconSize</code></td>
                <td class="docs-prop-details">
                    <code
                        class="docs-prop-type"><strong>number</strong><em class="docs-prop-default bp3-text-muted"></em></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p>Size of icon</p>
                            </div>
                        </div>
                    </div>
                    <div class="docs-prop-tags"><span class="bp3-tag bp3-minimal">
                            <span class="bp3-text-overflow-ellipsis bp3-fill">
                                Default icon height is 16</span>
                        </span>
                    </div>
                </td>
            </tr>
            <tr>
                <td class="docs-prop-name"><code>intent</code></td>
                <td class="docs-prop-details">
                    <code
                        class="docs-prop-type"><strong>string</strong><em class="docs-prop-default bp3-text-muted"></em></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p>Visual intent color to apply to element. Options are
                                    <code>primary,success,warning,danger,none.</code></p>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <td class="docs-prop-name"><code>interactive</code></td>
                <td class="docs-prop-details"><code
                        class="docs-prop-type"><strong>boolean</strong><em class="docs-prop-default bp3-text-muted">false</em></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p>Whether the tag should visually respond to user interactions. If set
                                    to <code>true</code>, hovering over the tag will change its color and mouse cursor.
                                </p>
                                <p>Recommended when <code>onClick</code> is also defined.</p>
                            </div>
                        </div>
                    </div>
                    <div class="docs-prop-tags"></div>
                </td>
            </tr>
            <tr>
                <td class="docs-prop-name"><code>large</code></td>
                <td class="docs-prop-details"><code
                        class="docs-prop-type"><strong>boolean</strong><em class="docs-prop-default bp3-text-muted">false</em></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p>Whether this tag should use large styles.</p>
                            </div>
                        </div>
                    </div>
                    <div class="docs-prop-tags"></div>
                </td>
            </tr>
            <tr>
                <td class="docs-prop-name"><code>minimal</code></td>
                <td class="docs-prop-details"><code
                        class="docs-prop-type"><strong>boolean</strong><em class="docs-prop-default bp3-text-muted">false</em></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p>Whether this tag should use minimal styles.</p>
                            </div>
                        </div>
                    </div>
                    <div class="docs-prop-tags"></div>
                </td>
            </tr>
            <tr>
                <td class="docs-prop-name"><code>onClick</code></td>
                <td class="docs-prop-details"><code
                        class="docs-prop-type"><strong>(e: MouseEvent&lt;HTMLDivElement&gt;) =&gt; void</strong><em class="docs-prop-default bp3-text-muted"></em></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p>Callback invoked when the tag is clicked.
                                    Recommended when <code>interactive</code> is <code>true</code>.</p>
                            </div>
                        </div>
                    </div>
                    <div class="docs-prop-tags"></div>
                </td>
            </tr>
            <tr>
                <td class="docs-prop-name"><code>onRemove</code></td>
                <td class="docs-prop-details"><code
                        class="docs-prop-type"><strong>(value:string, params:any, e: MouseEvent&lt;HTMLButtonElement&gt;) =&gt; void</strong><em class="docs-prop-default bp3-text-muted"></em></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p>Click handler for remove button.
                                    The remove button will only be rendered if this prop is defined.</p>
                            </div>
                        </div>
                    </div>
                    <div class="docs-prop-tags"></div>
                </td>
            </tr>
            <tr>
                <td class="docs-prop-name"><code>rightIcon</code></td>
                <td class="docs-prop-details"><code
                        class="docs-prop-type"><strong><a href="#api/IconName">IconName</a> </strong><em class="docs-prop-default bp3-text-muted"></em></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p>Name of a Blueprint UI icon (or an icon element) to render after the children.</p>
                            </div>
                        </div>
                    </div>
                    <div class="docs-prop-tags"></div>
                </td>
            </tr>
            <tr>
                <td class="docs-prop-name"><code>round</code></td>
                <td class="docs-prop-details"><code
                        class="docs-prop-type"><strong>boolean</strong><em class="docs-prop-default bp3-text-muted">false</em></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p>Whether this tag should have rounded ends.</p>
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
                <td class="docs-prop-name"><code>value</code></td>
                <td class="docs-prop-details">
                    <code
                        class="docs-prop-type"><strong>string</strong><em class="docs-prop-default bp3-text-muted"></em></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p>Action text.</p>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>