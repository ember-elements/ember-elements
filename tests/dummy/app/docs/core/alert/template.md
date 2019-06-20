# Alert
<div class="bp3-running-text bp3-text-large">
    <p>Alerts notify users of important information and force them to acknowledge the alert content before continuing.</p>
    <p>Although similar to dialogs, alerts are more restrictive and should only be used for important information. By default,
    the user can only exit the alert by clicking one of the confirmation buttons—clicking the overlay or pressing the <code>esc</code> 
    key will not close the alert. These interactions can be enabled via props.</p>
</div>
{{#docs-demo as |demo|}}
{{#demo.example}}
<div class="demo-container">
    <div class="docs-example-frame docs-example-frame-row" data-example-id="AlertExample">
        <div class="docs-example">
            {{! BEGIN-SNIPPET docs-example-basic-alert.hbs }}
            <Button @onClick={{action "handleErrorOpen"}}>
                Open file error alert
            </Button>
            <Alert
             @confirmButtonText="Okay"
             @isOpen={{isOpenError}}
             @canOutsideClickCancel={{canOutsideClickCancel}}
             @canEscapeKeyCancel={{canEscapeKeyCancel}}
             @onClose={{action "handleErrorClose"}}
            >
              <p>Couldn't create the file because the containing folder doesn't exist anymore. You will be
                redirected to your user folder.
              </p>
            </Alert>
            <Button @onClick={{action "handleMoveOpen"}}>
                Open file deletion alert
            </Button>
            <Alert 
             @cancelButtonText="Cancel"
             @confirmButtonText="Move to Trash"
             @icon="trash"
             @intent="danger"
             @isOpen={{isOpen}}
             @canEscapeKeyCancel={{canEscapeKeyCancel}}
             @canOutsideClickCancel={{canOutsideClickCancel}}
             @onCancel={{action "handleMoveCancel"}}
             @onConfirm={{action "handleMoveConfirm"}}
            >
                <p>Are you sure you want to move <b>filename</b> to Trash? You will be able to restore it later,
                but it will become private to you.
                </p>
            </Alert>
            {{! END-SNIPPET }}
        </div>
        <div class="docs-example-options">
            <h5 class="bp3-heading">
                Props
            </h5>
            <Switch @onChange={{action "onPropsChangeEvent" "canEscapeKeyCancel"}}>
                an escape key cancel
            </Switch>
            <Switch @onChange={{action "onPropsChangeEvent" "canOutsideClickCancel"}}>
                Can outside click cancel
            </Switch>
        </div>
    </div>
</div>
{{/demo.example}}
{{demo.snippet name="docs-example-basic-alert.hbs"}}
{{demo.snippet label="component.ts" name="docs-example-basic-alert.js"}}
{{demo.snippet
label="application.hbs"
name="docs-example-basic-portal-destination-id.hbs"
}}
{{/docs-demo}}

## Props
<div class="bp3-running-text bp3-text-large">
<code>Alert</code> only supports controlled usage through the <code>isOpen</code> prop. Use the <code>onConfirm</code> and <code>onCancel</code> props to respond to those
interactions separately, or use <code>onClose</code> to handle both at the same time.
</div>
<div class="docs-modifiers">
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
                    <td class="docs-prop-name"><code>cancelButtonText</code></td>
                    <td class="docs-prop-details"><code class="docs-prop-type"><strong>string</strong></code>
                        <div class="docs-prop-description">
                            <div class="docs-section">
                                <div class="bp3-running-text">
                                    <p>The text for the cancel button. If this prop is defined, then either onCancel or onClose must also be defined.</p>
                                </div>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td class="docs-prop-name"><code>canEscapeKeyCancel</code></td>
                    <td class="docs-prop-details"><code class="docs-prop-type"><strong>boolean</strong><em class="docs-prop-default bp3-text-muted">false</em></code>
                        <div class="docs-prop-description">
                            <div class="docs-section">
                                <div class="bp3-running-text">
                                    <p>Whether pressing <kbd>escape</kbd> when focused on the Alert should cancel the alert. If this prop is enabled, then either
                                    <code>onCancel</code> or <code>onClose</code> must also be defined.</p>
                                </div>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td class="docs-prop-name"><code>canOutsideClickCancel</code></td>
                    <td class="docs-prop-details"><code class="docs-prop-type"><strong>boolean</strong><em class="docs-prop-default bp3-text-muted">false</em></code>
                        <div class="docs-prop-description">
                            <div class="docs-section">
                                <div class="bp3-running-text">
                                    <p>Whether clicking outside the Alert should cancel the alert. If this prop is enabled, then either <code>onCancel</code> or <code>onClose</code>
                                    must also be defined.</p>
                                </div>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td class="docs-prop-name"><code>className</code></td>
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
                    <td class="docs-prop-name"><code>confirmButtonText</code></td>
                    <td class="docs-prop-details"><code class="docs-prop-type"><strong>string</strong><em class="docs-prop-default bp3-text-muted">"OK"</em></code>
                        <div class="docs-prop-description">
                            <div class="docs-section">
                                <div class="bp3-running-text">
                                    <p>The text for the confirm (right-most) button. This button will always appear, and uses the value of the <code>intent</code> prop
                                    below.</p>
                                </div>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td class="docs-prop-name"><code>icon</code></td>
                    <td class="docs-prop-details"><code class="docs-prop-type"><strong>string</strong><em class="docs-prop-default bp3-text-muted"></em></code>
                        <div class="docs-prop-description">
                            <div class="docs-section">
                                <div class="bp3-running-text">
                                    <p>Name of a Blueprint UI icon (or an icon element) to display on the left side.</p>
                                </div>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td class="docs-prop-name"><code>intent</code></td>
                    <td class="docs-prop-details"><code class="docs-prop-type"><strong>string</strong><em class="docs-prop-default bp3-text-muted"></em></code>
                        <div class="docs-prop-description">
                            <div class="docs-section">
                                <div class="bp3-running-text">
                                    <p>The intent to be applied to the confirm (right-most) button..</p>
                                </div>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td class="docs-prop-name "><code>isOpen <Icon @icon="small-tick" @intent="success"></Icon></code></td>
                    <td class="docs-prop-details"><code class="docs-prop-type"><strong>boolean</strong><em class="docs-prop-default bp3-text-muted"></em></code>
                        <div class="docs-prop-description">
                            <div class="docs-section">
                                <div class="bp3-running-text">
                                    <p>Toggles the visibility of the overlay and its children.
                                        This prop is required because the component is controlled.</p>
                                </div>
                            </div>
                        </div>
                        <div class="docs-prop-tags"><span class="bp3-tag bp3-intent-success bp3-minimal"><span class="bp3-text-overflow-ellipsis bp3-fill">Required</span></span></div>
                    </td>
                </tr>
                <tr>
                    <td class="docs-prop-name"><code>onCancel</code></td>
                    <td class="docs-prop-details"><code class="docs-prop-type"><strong>(evt?: &lt;HTMLElement&gt;) =&gt; void</strong></code>
                        <div class="docs-prop-description">
                            <div class="docs-section">
                                <div class="bp3-running-text">
                                    <p>Handler invoked when the alert is canceled. Alerts can be <strong>canceled</strong> in the
                                        following ways:</p>
                                    <ul>
                                        <li>clicking the cancel button (if <code>cancelButtonText</code> is defined)</li>
                                        <li>pressing the escape key (if <code>canEscapeKeyCancel</code> is enabled)</li>
                                        <li>clicking on the overlay backdrop (if <code>canOutsideClickCancel</code> is enabled)</li>
                                    </ul>
                                    <p>If any of the <code>cancel</code> props are defined, then either <code>onCancel</code> or <code>onClose</code>
                                        must be defined.</p>
                                </div>
                            </div>
                        </div>
                        <div class="docs-prop-tags"></div>
                    </td>
                </tr>
                <tr>
                    <td class="docs-prop-name"><code>onClose</code></td>
                    <td class="docs-prop-details"><code class="docs-prop-type"><strong>(confirmed: boolean, evt?: &lt;HTMLElement&gt;) =&gt; void</strong></code>
                        <div class="docs-prop-description">
                            <div class="docs-section">
                                <div class="bp3-running-text">
                                    <p>Handler invoked when the Alert is confirmed or canceled; see <code>onConfirm</code> and <code>onCancel</code>
                                        for more details.
                                        First argument is <code>true</code> if confirmed, <code>false</code> otherwise.
                                        This is an alternative to defining separate <code>onConfirm</code> and <code>onCancel</code>
                                        handlers.</p>
                                </div>
                            </div>
                        </div>
                        <div class="docs-prop-tags"></div>
                    </td>
                </tr>
                <tr>
                    <td class="docs-prop-name"><code>onConfirm</code></td>
                    <td class="docs-prop-details"><code class="docs-prop-type"><strong>(evt?: &lt;HTMLElement&gt;) =&gt; void</strong></code>
                        <div class="docs-prop-description">
                            <div class="docs-section">
                                <div class="bp3-running-text">
                                    <p>Handler invoked when the confirm button is clicked. Alerts can be <strong>confirmed</strong> in
                                        the following ways:</p>
                                    <ul>
                                        <li>clicking the confirm button</li>
                                        <li>focusing on the confirm button and pressing <code>enter</code> or <code>space</code></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="docs-prop-tags"></div>
                    </td>
                </tr>
                <tr>
                    <td class="docs-prop-name"><code>style</code></td>
                    <td class="docs-prop-details"><code class="docs-prop-type"><strong>string</strong><em class="docs-prop-default bp3-text-muted"></em></code>
                        <div class="docs-prop-description">
                            <div class="docs-section">
                                <div class="bp3-running-text">
                                    <p>CSS styles to apply to the dialog.</p>
                                </div>
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>