# Button
<div class='bp3-running-text bp3-text-large'>
    The <code>Button</code> component is used to trigger actions when user clicked.
</div>
{{#docs-demo as |demo|}}
{{#demo.example}}
<div class="demo-container">
    <div class="docs-example-frame docs-example-frame-row" data-example-id="ButtonsExample">
        <div class="docs-example">
            {{! BEGIN-SNIPPET docs-example-basic-button.hbs }}
            <Button @minimal={{minimal}} @active={{active}} @disabled={{disabled}} 
              @intent={{intent}} @small={{small}} @large={{large}} @icon={{icon}} 
              @rightIcon={{rightIcon}} @fill={{fill}} @type='button' @text={{text}}
              @onClick={{action 'onClickButton'}}>
            </Button>
            {{! END-SNIPPET }}
        </div>
        <div class="docs-example-options">
            <h5 class="bp3-heading">Props</h5>
            <label class="bp3-control bp3-switch">
                <input type="checkbox" onclick={{action 'doFuction' 'minimal'}}>
                <span class="bp3-control-indicator"></span>
                Minimal
            </label>
            <label class="bp3-control bp3-switch">
                <input type="checkbox" onclick={{action 'doFuction' 'active'}}>
                <span class="bp3-control-indicator"></span>
                Active
            </label>
            <label class="bp3-control bp3-switch">
                <input type="checkbox" onclick={{action 'doFuction' 'disabled'}}>
                <span class="bp3-control-indicator"></span>
                Disabled
            </label>
            <label class="bp3-control bp3-switch">
                <input type="checkbox" onclick={{action 'doFuction' 'small'}}>
                <span class="bp3-control-indicator"></span>
                Small
            </label>
            <label class="bp3-control bp3-switch">
                <input type="checkbox" onclick={{action 'doFuction' 'large'}}>
                <span class="bp3-control-indicator"></span>
                Large
            </label>
            <label class="bp3-control bp3-switch">
                <input onclick={{action 'doFuction' 'rightIcon'}} type="checkbox">
                <span class="bp3-control-indicator"></span>
                Right-Icon
            </label>
            <label class="bp3-control bp3-switch">
                <input type="checkbox" onclick={{action 'doFuction' 'fill'}}>
                <span class="bp3-control-indicator"></span>
                Fill
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
            <h5 class="bp3-heading">Example</h5>
            <label class="bp3-control bp3-switch">
                <input type="checkbox" onclick={{action 'doFuction' 'iconsonly'}}>
                <span class="bp3-control-indicator"></span>Icons only
            </label>
        </div>
    </div>
</div>
{{/demo.example}}
{{demo.snippet name='docs-example-basic-button.hbs'}}
{{demo.snippet label='component.ts' name='docs-example-basic-button.js'}}
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
                <td class="docs-prop-name">
                    <code>active</code>
                </td>
                <td class="docs-prop-details">
                    <code
                        class="docs-prop-type"><strong>boolean</strong><em class="docs-prop-default bp3-text-muted">false</em></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p>If set to <code>true</code>, The button will display in an active state.
                                    This is equivalent to setting <code>className='bp3-active'</code>.
                                </p>
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
                <td class="docs-prop-name"><code>disabled</code></td>
                <td class="docs-prop-details">
                    <code
                        class="docs-prop-type"><strong>boolean</strong><em class="docs-prop-default bp3-text-muted"></em></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p>Whether this action is non-interactive.</p>
                            </div>
                        </div>
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
                <td class="docs-prop-name"><code>fill</code></td>
                <td class="docs-prop-details">
                    <code
                        class="docs-prop-type"><strong>boolean</strong><em class="docs-prop-default bp3-text-muted"></em></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p>Whether this button should expand to fill its container.</p>
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
                <td class="docs-prop-name"><code>large</code></td>
                <td class="docs-prop-details">
                    <code
                        class="docs-prop-type"><strong>boolean</strong><em class="docs-prop-default bp3-text-muted"></em></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p>Whether this button should use large styles.</p>
                            </div>
                        </div>
                    </div>
                    <div class="docs-prop-tags"></div>
                </td>
            </tr>
            <tr>
                <td class="docs-prop-name"><code>minimal</code></td>
                <td class="docs-prop-details">
                    <code
                        class="docs-prop-type"><strong>boolean</strong><em class="docs-prop-default bp3-text-muted"></em></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p>Whether this button should use minimal styles.</p>
                            </div>
                        </div>
                    </div>
                    <div class="docs-prop-tags"></div>
                </td>
            </tr>
            <tr>
                <td class="docs-prop-name"><code>onClick</code></td>
                <td class="docs-prop-details">
                    <code
                        class="docs-prop-type"><strong></strong><em class="docs-prop-default bp3-text-muted"></em></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p>Click event handler.</p>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <td class="docs-prop-name"><code>rightIcon</code></td>
                <td class="docs-prop-details">
                    <code
                        class="docs-prop-type"><strong>{{#link-to 'docs.icon.icons'}}IconName{{/link-to}}</strong><em class="docs-prop-default bp3-text-muted"></em></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p>Name of a Blueprint UI icon to render after the text.</p>
                            </div>
                        </div>
                    </div>
                    <div class="docs-prop-tags"></div>
                </td>
            </tr>
            <tr>
                <td class="docs-prop-name"><code>small</code></td>
                <td class="docs-prop-details">
                    <code
                        class="docs-prop-type"><strong>boolean</strong><em class="docs-prop-default bp3-text-muted"></em></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p>Whether this button should use small styles.</p>
                            </div>
                        </div>
                    </div>
                    <div class="docs-prop-tags"></div>
                </td>
            </tr>
            <tr>
                <td class="docs-prop-name"><code>text</code></td>
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
            <tr>
                <td class="docs-prop-name"><code>type</code></td>
                <td class="docs-prop-details">
                    <code
                        class="docs-prop-type"><strong>string</strong><em class="docs-prop-default bp3-text-muted">"button"</em></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p>HTML <code>type</code> attribute of button. Common values are
                                    <code>"clear"</code>
                                    <code>"button"</code>
                                    and <code>"submit"</code>.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="docs-prop-tags"></div>
                </td>
            </tr>
        </tbody>
    </table>
    <br>
    <div class="docs-prop-tags"><span class="bp3-tag bp3-minimal"><span class="bp3-text-overflow-ellipsis bp3-fill">
                NOTE: only one color can be used at a time. i.e `primary/success/warning/danger`</span></span>
    </div>
    <br>
    <div class="bp3-callout bp3-intent-danger ">
        <h4 class="bp3-heading">
            <Icon @icon='error' @iconSize=16 /> Disabled <code>Button</code> prevents all
            interaction
        </h4>
    </div>
</div>