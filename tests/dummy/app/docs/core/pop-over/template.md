# Popover
<div class='bp3-running-text bp3-text-large'>
  Popover display floating content next to a target button element. Here there is a default button for popover, Popovers
  will render based button click.
  <code>PopOver</code> is built on top of the <a href="https://popper.js.org"><strong>Popper.js</strong></a>
</div>
{{#docs-demo as |demo|}}
{{#demo.example}}
<div class="demo-container">
  <div class="docs-example-frame docs-example-frame-row" data-example-id="PopoverExample">
    <div id='pop-over-doc-scroll' class="docs-example">
      <div class="docs-popover-example-scroll">
        {{! BEGIN-SNIPPET docs-example-basic-pop-over.hbs }}
        <PopOver @btnTitle='Open popover' @open={{open}} 
         @intent="primary" @icon='code'
         @isOutClickClose={{canOutsideClickClose}} @placement={{placement}} 
         @arrow={{arrow}} @canEscapeKeyClose={{canEscapeKeyClose}}>
          <div>
            <h5 class="bp3-heading">Confirm deletion</h5>
            <p>Are you sure you want to delete these items? You won't be able to recover them.</p>
            <div style="display: flex; justify-content: flex-end; margin-top: 15px;">
              <Button  onClick={{action 'onClose'}} @style="margin-right: 10px;">Cancel</Button>
              <Button  onClick={{action 'onClose'}} @intent="danger">Delete</Button>
            </div>
           </div>
        </PopOver>
        {{! END-SNIPPET }}
      </div>
    </div>
    <div class="docs-example-options">
      <h5 class="bp3-heading">Props</h5>
      <div class="bp3-form-group"><label class="bp3-label" for="position">Position when opened (placement) <span
            class="bp3-text-muted"></span></label>
        <div class="bp3-form-content">
          <div class="bp3-html-select"><select onchange={{action 'selectPositon'}}>
              <option value="auto">auto</option>
              <option value="left">left</option>
              <option value="right">right</option>
              <option value="top">top</option>
              <option value="bottom">bottom</option>
            </select><span icon="double-caret-vertical" class="bp3-icon bp3-icon-double-caret-vertical"><svg data-icon="double-caret-vertical" width="16" height="16" viewBox="0 0 16 16"><desc>double-caret-vertical</desc><path d="M5 7h6a1.003 1.003 0 0 0 .71-1.71l-3-3C8.53 2.11 8.28 2 8 2s-.53.11-.71.29l-3 3A1.003 1.003 0 0 0 5 7zm6 2H5a1.003 1.003 0 0 0-.71 1.71l3 3c.18.18.43.29.71.29s.53-.11.71-.29l3-3A1.003 1.003 0 0 0 11 9z" fill-rule="evenodd"></path></svg></span></div>
          <div class="bp3-form-helper-text">May be overridden to prevent overflow</div>
          <label class="bp3-control bp3-switch" {{action 'oncanOutsideClickClose'}}>
            {{#if canOutsideClickClose}}
            <input type="checkbox" checked>
            <span class="bp3-control-indicator"></span>
            {{else}}
            <input type="checkbox">
            <span class="bp3-control-indicator"></span>
            {{/if}}
            Click outside to close</label>
          <label class="bp3-control bp3-switch" {{action 'oncanEscapeKeyClose'}}>
            {{#if canEscapeKeyClose}}
            <input type="checkbox" checked>
            <span class="bp3-control-indicator"></span>
            {{else}}
            <input type="checkbox">
            <span class="bp3-control-indicator"></span>
            {{/if}}Escape key to close</label>
          <label class="bp3-control bp3-switch" {{action 'onArrow'}}>
            {{#if arrow}}
            <input type="checkbox" checked>
            <span class="bp3-control-indicator"></span>
            {{else}}
            <input type="checkbox">
            <span class="bp3-control-indicator"></span>
            {{/if}}Arrow</label>
        </div>
      </div>
    </div>
  </div>
</div>


{{/demo.example}}
{{demo.snippet name='docs-example-basic-pop-over.hbs'}}
{{demo.snippet label='component.ts' name='docs-example-basic-pop-over.ts'}}
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
        <td class="docs-prop-name"><code>btnTitle</code></td>
        <td class="docs-prop-details"><code
            class="docs-prop-type"><strong>string</strong><em class="docs-prop-default bp3-text-muted"></em></code>
          <div class="docs-prop-description">
            <div class="docs-section">
              <div class="bp3-running-text">
                <p>Button text of popover</p>
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
                <p>Whether this popover button should use minimal styles.</p>
              </div>
            </div>
          </div>
          <div class="docs-prop-tags"></div>
        </td>
      </tr>
      <tr>
        <td class="docs-prop-name"><code>active</code></td>
        <td class="docs-prop-details"><code
            class="docs-prop-type"><strong>boolean</strong><em class="docs-prop-default bp3-text-muted">false</em></code>
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
        <td class="docs-prop-name"><code>icon</code></td>
        <td class="docs-prop-details"><code
            class="docs-prop-type"><strong>IconName </strong><em class="docs-prop-default bp3-text-muted"></em></code>
          <div class="docs-prop-description">
            <div class="docs-section">
              <div class="bp3-running-text">
                <p>Name of a Blueprint UI icon to render after the text.</p>
              </div>
            </div>
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
                                <p>Size of the icon.</p>
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
        <td class="docs-prop-name"><code>placement</code></td>
        <td class="docs-prop-details"><code
            class="docs-prop-type"><strong>string</strong><em class="docs-prop-default bp3-text-muted"></em></code>
          <div class="docs-prop-description">
            <div class="docs-section">
              <div class="bp3-running-text">
                <p>The position (relative to the target) at which the popover should appear. deafult position is
                  <strong>'bottom'</strong></p>
              </div>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td class="docs-prop-name"><code>popOpenClickFun</code></td>
        <td class="docs-prop-details"><code
            class="docs-prop-type"><strong>() =&gt; void</strong><em class="docs-prop-default bp3-text-muted"></em></code>
          <div class="docs-prop-description">
            <div class="docs-section">
              <div class="bp3-running-text">
                <p>It invoked when popover button click action occurred.</p>
              </div>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td class="docs-prop-name"><code>arrow</code></td>
        <td class="docs-prop-details"><code
            class="docs-prop-type"><strong>boolean</strong><em class="docs-prop-default bp3-text-muted">true</em></code>
          <div class="docs-prop-description">
            <div class="docs-section">
              <div class="bp3-running-text">
                <p>Popover arrow indicator</p>
              </div>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td class="docs-prop-name"><code>open</code></td>
        <td class="docs-prop-details"><code
            class="docs-prop-type"><strong>boolean</strong><em class="docs-prop-default bp3-text-muted">false</em></code>
          <div class="docs-prop-description">
            <div class="docs-section">
              <div class="bp3-running-text">
                <p>External function to close popover</p>
              </div>
            </div>
          </div>
        </td>
      </tr>
       <tr>
        <td class="docs-prop-name"><code>canEscapeKeyClose</code></td>
        <td class="docs-prop-details"><code
            class="docs-prop-type"><strong>boolean</strong><em class="docs-prop-default bp3-text-muted">true</em></code>
          <div class="docs-prop-description">
            <div class="docs-section">
              <div class="bp3-running-text">
                <p>Esc Key to close popover</p>
              </div>
            </div>
          </div>
        </td>
      </tr>
       <tr>
        <td class="docs-prop-name"><code>isOutClickClose</code></td>
        <td class="docs-prop-details"><code
            class="docs-prop-type"><strong>boolean</strong><em class="docs-prop-default bp3-text-muted">true</em></code>
          <div class="docs-prop-description">
            <div class="docs-section">
              <div class="bp3-running-text">
                <p>Out side click to close popover</p>
              </div>
            </div>
          </div>
        </td>
      </tr>
    </tbody>
  </table>

</div>