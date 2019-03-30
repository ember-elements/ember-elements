# Button
<div class='bp3-running-text bp3-text-large'>
    The <code>Button</code> component is used to trigger actions when user clicked.
</div>

{{#docs-demo as |demo|}}
{{#demo.example}}
{{! BEGIN-SNIPPET docs-example-basic-button.hbs }}

<div class="demo-container">
    <div class="docs-example-frame docs-example-frame-row" data-example-id="ButtonsExample">
        <div class="docs-example">
            <div class='webkit-box-div'>
                <div class='btn-bottom-padding'>
                    <Button @minimal={{true}} @type='button' @text='Minimal button' @onClick={{action 'onClickButton'}}>
                    </Button>
                </div>
                <div class='btn-bottom-padding'>
                    <Button @active=true @type='button' @text='Active Button'> </Button>
                </div>
                <div class='btn-bottom-padding'>
                    <Button @disabled=true @type='button' @text='Disabled Button'> </Button>
                </div>
                <div class='btn-bottom-padding'>
                    <Button @primary=true @type='button' @text='Primary Button'> </Button>
                </div>
                <div class='btn-bottom-padding'>
                    <Button @success=true @type='button' @text='Success Button'> </Button>
                </div>
            </div>
            <div class='webkit-box-div'>
                <div class='btn-bottom-padding'>
                    <Button @warning=true @type='button' @text='Warning Button'> </Button>
                </div>
                <div class='btn-bottom-padding'>
                    <Button @danger=true @type='button' @text='Danger Button'> </Button>
                </div>
                <div class='btn-bottom-padding'>
                    <Button @small=true @type='button' @text='Small Button'> </Button>
                </div>
                <div class='btn-bottom-padding'>
                    <Button @icon='floppy-disk' @iconLeft=true @type='button' @text='Icon Left'> </Button>
                </div>
                <div class='btn-bottom-padding'>
                    <Button @rightIcon='floppy-disk' @iconSize=18 @type='button' @text='Icon Right'> </Button>
                </div>
            </div>
            <div class='webkit-box-div'>
                 <div class='btn-bottom-padding'>
                    <Button @large=true @type='button' @text='Large button'> </Button>
                </div>
                 <div class='btn-bottom-padding'>
                    <Button @icon='floppy-disk' @type='button' @minimal=true> </Button>
                </div>
               
            </div>
            <Button @fill=true @type='button' @text='fill button'> </Button>
        </div>
    </div>
</div>
{{! END-SNIPPET }}
{{/demo.example}}
{{demo.snippet name='docs-example-basic-button.hbs'}}
{{demo.snippet label='component.ts' name='docs-example-basic-button.js'}}
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
                <td class="docs-prop-name"><code>primary</code></td>
                <td class="docs-prop-details">
                    <code
                        class="docs-prop-type"><strong>boolean</strong><em class="docs-prop-default bp3-text-muted"></em></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p>It changes the color of the button to blue.</p>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <td class="docs-prop-name"><code>success</code></td>
                <td class="docs-prop-details">
                    <code
                        class="docs-prop-type"><strong>boolean</strong><em class="docs-prop-default bp3-text-muted"></em></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p> It changes the color of the button to green, simbolises success.</p>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <td class="docs-prop-name"><code>warning</code></td>
                <td class="docs-prop-details">
                    <code
                        class="docs-prop-type"><strong>boolean</strong><em class="docs-prop-default bp3-text-muted"></em></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p> It changes the color of the button to yellow, warning.</p>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <td class="docs-prop-name"><code>danger</code></td>
                <td class="docs-prop-details">
                    <code
                        class="docs-prop-type"><strong>boolean</strong><em class="docs-prop-default bp3-text-muted"></em></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p> It changes the color of the button to red, danger.</p>
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
                                <p>HTML <code>type</code> attribute of button. Common values are <code>"clear"</code>
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
            <Icon @icon='error' @iconSize=20 /> Disabled <code>Button</code> prevents all
            interaction
        </h4>
    </div>
</div>