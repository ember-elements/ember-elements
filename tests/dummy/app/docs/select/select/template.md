# Select
<div class='bp3-running-text bp3-text-large'>
    <code> Select</code> component which is used for choosing one of the item from a list. There are three types of
    select box <code>input</code>,<code> button </code> and <code>link</code>.
</div>
{{#docs-demo as |demo|}}
{{#demo.example}}

<div class="demo-container">
    <div class="docs-example-frame docs-example-frame-row" data-example-id="SelectExample">
        <div class="docs-example">
            {{! BEGIN-SNIPPET docs-example-basic-select-box.hbs }}
             <Select @data={{data}} @selected={{selected}} 
               @placement={{placement}}
               @minimal={{minimal}}  
               @onSelect={{action 'optionSelected'}} 
               @InputGroupProps={{InputGroupProps}}>
            </Select>
            <Select @data={{data2}} @type='button' 
               @selected={{selected2}} 
               @rightIcon="caret-down"
               @ButtonProps={{ButtonProps}} 
               @minimal={{minimal}}
               @onSelect={{action 'optionSelected' }}>
            </Select>
            {{! END-SNIPPET }}
        </div>
        <div class="docs-example-options">
            <h5 class="bp3-heading">Props</h5>
            <div class="bp3-form-group">
                <label class="bp3-label" for="position">Position when opened (placement) <span
                        class="bp3-text-muted"></span></label>
                <div class="bp3-form-content">
                    <div class="bp3-html-select"><select onchange={{action 'selectPositon'}}>
                            <option value="auto">auto</option>
                            <option value="left">left</option>
                            <option value="right">right</option>
                            <option value="top">top</option>
                            <option value="bottom">bottom</option>
                        </select><span icon="double-caret-vertical" class="bp3-icon bp3-icon-double-caret-vertical"><svg data-icon="double-caret-vertical" width="16" height="16" viewBox="0 0 16 16"><desc>double-caret-vertical</desc><path d="M5 7h6a1.003 1.003 0 0 0 .71-1.71l-3-3C8.53 2.11 8.28 2 8 2s-.53.11-.71.29l-3 3A1.003 1.003 0 0 0 5 7zm6 2H5a1.003 1.003 0 0 0-.71 1.71l3 3c.18.18.43.29.71.29s.53-.11.71-.29l3-3A1.003 1.003 0 0 0 11 9z" fill-rule="evenodd"></path></svg></span></div>
                    <label class="bp3-control bp3-switch">
                        <input type="checkbox" onclick={{action 'onMinimalPopover'}}>
                        <span class="bp3-control-indicator"></span>
                        Minimal popover style
                    </label>
                </div>
            </div>
        </div>
    </div>
</div>


{{/demo.example}}
{{demo.snippet name='docs-example-basic-select-box.hbs'}}
{{demo.snippet label='component.ts' name='docs-example-basic-select-box.ts'}}
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
                <td class="docs-prop-name"><code>data</code></td>
                <td class="docs-prop-details"><code
                        class="docs-prop-type"><strong>Array &lt;string&gt;</strong><em class="docs-prop-default bp3-text-muted"></em></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p>It is an array of string which contains options for select box</p>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <td class="docs-prop-name"><code>selected</code></td>
                <td class="docs-prop-details"><code
                        class="docs-prop-type"><strong>Array &lt;string&gt;</strong><em class="docs-prop-default bp3-text-muted"></em></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p>Set default selected options for select box</p>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <td class="docs-prop-name"><code>placeholder</code></td>
                <td class="docs-prop-details"><code
                        class="docs-prop-type"><strong>string</strong><em class="docs-prop-default bp3-text-muted"></em></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p>Placeholder text for select box</p>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <td class="docs-prop-name"><code>isDefaultOpen</code></td>
                <td class="docs-prop-details"><code
                        class="docs-prop-type"><strong>boolean</strong><em class="docs-prop-default bp3-text-muted"></em></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p>Whether select box popover open default </p>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <td class="docs-prop-name"><code>type</code></td>
                <td class="docs-prop-details"><code
                        class="docs-prop-type"><strong>string</strong><em class="docs-prop-default bp3-text-muted"></em></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p>select box open based on <code>button </code>, <code>link</code> or
                                    <code> input box </code> default
                                    type <code>input box</code></p>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <td class="docs-prop-name"><code>onSelect</code></td>
                <td class="docs-prop-details"><code
                        class="docs-prop-type"><strong>(value:string ,index: number) =&gt; void</strong><em class="docs-prop-default bp3-text-muted"></em></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p>Selected options with index returned.</p>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <td class="docs-prop-name"><code>minimal</code></td>
                <td class="docs-prop-details"><code
                        class="docs-prop-type"><strong>boolean</strong><em class="docs-prop-default bp3-text-muted"></em></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p>Whether this select button should use minimal styles.</p>
                            </div>
                        </div>
                    </div>
                    <div class="docs-prop-tags"></div>
                </td>
            </tr>
            <tr>
                <td class="docs-prop-name"><code>active</code></td>
                <td class="docs-prop-details"><code class="docs-prop-type"><strong>boolean</strong></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p>If set to <code>true</code>, the button will display in an active state.
                                    This is equivalent to setting <code>className='bp3-active'</code>.</p>
                            </div>
                        </div>
                    </div>
                    <div class="docs-prop-tags"></div>
                </td>
            </tr>
            <tr>
                <td class="docs-prop-name"><code>minimal</code></td>
                <td class="docs-prop-details"><code class="docs-prop-type"><strong>boolean</strong></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p> Minimal popover style.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="docs-prop-tags"></div>
                </td>
            </tr>
             <tr>
                <td class="docs-prop-name"><code>InputGroupProps</code></td>
                <td class="docs-prop-details"><code class="docs-prop-type"><strong>Partial&lt;<a {{action 'openInputGroupProps'}}>InputGroupProps</a>&gt; &amp; object</strong><em class="docs-prop-default bp3-text-muted"></em></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p> InputGroupProps for <code>InputGroup</code> component. 
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="docs-prop-tags"></div>
                </td>
            </tr>
             <tr>
                <td class="docs-prop-name"><code>ButtonProps</code></td>
                <td class="docs-prop-details"><code class="docs-prop-type"><strong>Partial&lt;<a {{action 'openButtonProps'}}>ButtonProps</a>&gt; &amp; object</strong><em class="docs-prop-default bp3-text-muted"></em></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p> ButtonProps for <code>Button</code> component. 
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="docs-prop-tags"></div>
                </td>
            </tr>
             <tr>
        <td class="docs-prop-name"><code>onClick</code></td>
        <td class="docs-prop-details"><code
            class="docs-prop-type"><strong>(open:boolean) =&gt; void</strong><em class="docs-prop-default bp3-text-muted"></em></code>
          <div class="docs-prop-description">
            <div class="docs-section">
              <div class="bp3-running-text">
                <p>Input or button click event handler.</p>
              </div>
            </div>
          </div>
        </td>
      </tr>
        </tbody>
    </table>
    <br>
    <div class="bp3-callout bp3-intent-primary ">
        <h4 class="bp3-heading">
            <Icon @icon='info-sign' @iconSize=16 /> select box additional features</h4>
        <p> <code> up & down </code> <strong> navigation Key </strong>: navigate within the suggest box.
            <code>enter </code> <strong> Key </strong>:select an item from suggest box.
        </p>
        NOTE: use up & down key to navigate suggest item and later enter to select.
    </div>

</div>
<DbDrawer @isOpen={{isOpenDrawer}} 
 @autoFocus=true @enforceFocus=true
@hasBackdrop=true @usePortal=true 
@canOutsideClickClose=true
@canEscapeKeyClose=true >

{{#db-drawer/body}}
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
        <td class="docs-prop-name"><code>disabled</code></td>
        <td class="docs-prop-details"><code
            class="docs-prop-type"><strong>boolean</strong><em class="docs-prop-default bp3-text-muted"></em></code>
          <div class="docs-prop-description">
            <div class="docs-section">
              <div class="bp3-running-text">
                <p>Whether the input is non-interactive.
                   Note that <code>rightElement</code> must be disabled separately; this prop will not affect it.</p>
              </div>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td class="docs-prop-name"><code>intent</code></td>
        <td class="docs-prop-details">
          <code class="docs-prop-type"><strong>string</strong><em class="docs-prop-default bp3-text-muted"></em></code>
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
      <tr><td class="docs-prop-name"><code>large</code></td><td class="docs-prop-details"><code class="docs-prop-type"><strong>boolean</strong><em class="docs-prop-default bp3-text-muted"></em></code><div class="docs-prop-description"><div class="docs-section"><div class="bp3-running-text"><p>Whether this input should use large styles.</p>
</div></div></div><div class="docs-prop-tags"></div></td></tr>
      <tr>
        <td class="docs-prop-name"><code>leftIcon</code></td>
        <td class="docs-prop-details"><code
            class="docs-prop-type"><strong>IconName </strong><em class="docs-prop-default bp3-text-muted"></em></code>
          <div class="docs-prop-description">
            <div class="docs-section">
              <div class="bp3-running-text">
                <p>Name of a Blueprint UI icon to left side of input.</p>
              </div>
            </div>
          </div>
          <div class="docs-prop-tags"><span class="bp3-tag bp3-minimal"><span
                class="bp3-text-overflow-ellipsis bp3-fill">
                Default icon position is right</span></span></div>
        </td>
      </tr>
      <tr>
        <td class="docs-prop-name"><code>iconSize</code></td>
        <td class="docs-prop-details"><code
            class="docs-prop-type"><strong>number</strong><em class="docs-prop-default bp3-text-muted">16</em></code>
          <div class="docs-prop-description">
            <div class="docs-section">
              <div class="bp3-running-text">
                <p>Assign Icon size.</p>
              </div>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td class="docs-prop-name"><code>round</code></td>
        <td class="docs-prop-details"><code
            class="docs-prop-type"><strong>boolean</strong><em class="docs-prop-default bp3-text-muted"></em></code>
          <div class="docs-prop-description">
            <div class="docs-section">
              <div class="bp3-running-text">
                <p>Whether this input should use round styles.</p>
              </div>
            </div>
          </div>
          <div class="docs-prop-tags"></div>
        </td>
      </tr>
      <tr>
        <td class="docs-prop-name"><code>rightIcon</code></td>
        <td class="docs-prop-details"><code
            class="docs-prop-type"><strong>IconName</strong><em class="docs-prop-default bp3-text-muted"></em></code>
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
        <td class="docs-prop-details"><code
            class="docs-prop-type"><strong>boolean</strong><em class="docs-prop-default bp3-text-muted"></em></code>
          <div class="docs-prop-description">
            <div class="docs-section">
              <div class="bp3-running-text">
                <p>Whether this input should use small styles.</p>
              </div>
            </div>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>
 {{/db-drawer/body}}
</DbDrawer>

<DbDrawer @isOpen={{isOpenButtonDrawer}} 
 @autoFocus=true @enforceFocus=true
@hasBackdrop=true @usePortal=true 
@canOutsideClickClose=true
@canEscapeKeyClose=true >

{{#db-drawer/body}}
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
                        class="docs-prop-type"><strong>string</strong><em class="docs-prop-default bp3-text-muted"></em></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p>The type property specifies the type of button.</p>
                            </div>
                        </div>
                    </div>
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
 {{/db-drawer/body}}
</DbDrawer>
