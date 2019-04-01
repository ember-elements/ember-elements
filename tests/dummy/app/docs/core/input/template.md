# Text inputs
<div class='bp3-running-text bp3-text-large'>
  The <code>Input</code> tag specifies an input field where the user can enter data.
</div>

### A simple view of text input

{{#docs-demo as |demo|}}
{{#demo.example}}
<div class="demo-container">
  <div class="docs-example-frame docs-example-frame-row">
    <div class="docs-example">
      {{! BEGIN-SNIPPET docs-example-basic-text-input.hbs }}
      <div style='width:40%'>
        <Input @data='hiii...' @icon='filter' @placeholder='Any text....' @rightIcon='lock'></Input>
      </div> <br>
      <div style='width:40%'>
        <Input @data='hiii...' @success=true @round=true @placeholder='Any text....' @rightIcon='lock'></Input>
      </div> <br>
      <div>
        <Input @autofocus=true @placeholder='enter any text...' @data='' @disabled={{isDisabled}} @primary={{isPrimary}}
          @success={{isSuccess}} @round={{isRound}} @warning={{isWarning}} @danger={{isDanger}} @readonly={{isReadOnly}}
          @large={{isLarge}} @onkeyDown={{action 'onkeyDown'}}></Input>
      </div>
      {{! END-SNIPPET }}
    </div>
    <div class="docs-example-options">
      <h5 class="bp3-heading">Props</h5>
        <label class="bp3-control bp3-switch" style='padding-right:25px'><input type="checkbox" value="on"
        onclick={{action 'disableFun' }}><span class="bp3-control-indicator"></span>Disabled</label>
    <label class="bp3-control bp3-switch" style='padding-right:25px'><input type="checkbox" value="on"><span
        class="bp3-control-indicator" onclick={{action 'roundFun' }}></span>Round</label>
    <label class="bp3-control bp3-switch" style='padding-right:25px'><input type="checkbox" value="on"><span
        class="bp3-control-indicator" onclick={{action 'readOnlyFun' }}></span>Readonly</label>
    <label class="bp3-control bp3-switch" style='padding-right:25px'><input type="checkbox" value="on"><span
        class="bp3-control-indicator" onclick={{action 'largeFun' }}></span>large</label>
    </div>
  </div>
</div>
{{/demo.example}}
{{demo.snippet name='docs-example-basic-text-input.hbs'}}
<!-- {{demo.snippet label='component.ts' name='docs-example-basic-text-input.ts'}} -->
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
        <td class="docs-prop-name"><code>disabled</code></td>
        <td class="docs-prop-details"><code
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
        <td class="docs-prop-details"><code
            class="docs-prop-type"><strong>boolean</strong><em class="docs-prop-default bp3-text-muted"></em></code>
          <div class="docs-prop-description">
            <div class="docs-section">
              <div class="bp3-running-text">
                <p>It changes the color of the input border to blue.</p>
              </div>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td class="docs-prop-name"><code>success</code></td>
        <td class="docs-prop-details"><code
            class="docs-prop-type"><strong>boolean</strong><em class="docs-prop-default bp3-text-muted"></em></code>
          <div class="docs-prop-description">
            <div class="docs-section">
              <div class="bp3-running-text">
                <p> It changes the color of the input border to green, simbolises success.</p>
              </div>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td class="docs-prop-name"><code>warning</code></td>
        <td class="docs-prop-details"><code
            class="docs-prop-type"><strong>boolean</strong><em class="docs-prop-default bp3-text-muted"></em></code>
          <div class="docs-prop-description">
            <div class="docs-section">
              <div class="bp3-running-text">
                <p> It changes the color of the input border to yellow, warning.</p>
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
                <p> It changes the color of the input border to red, danger.</p>
              </div>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td class="docs-prop-name"><code>fill</code></td>
        <td class="docs-prop-details"><code
            class="docs-prop-type"><strong>boolean</strong><em class="docs-prop-default bp3-text-muted"></em></code>
          <div class="docs-prop-description">
            <div class="docs-section">
              <div class="bp3-running-text">
                <p>Whether this input should expand to fill its container.</p>
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
        <td class="docs-prop-name"><code>large</code></td>
        <td class="docs-prop-details"><code
            class="docs-prop-type"><strong>boolean</strong><em class="docs-prop-default bp3-text-muted"></em></code>
          <div class="docs-prop-description">
            <div class="docs-section">
              <div class="bp3-running-text">
                <p>Whether this input should use large styles.</p>
              </div>
            </div>
          </div>
          <div class="docs-prop-tags"></div>
        </td>
      </tr>
      <tr>
        <td class="docs-prop-name"><code>Round</code></td>
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
        <td class="docs-prop-name"><code>readonly</code></td>
        <td class="docs-prop-details"><code
            class="docs-prop-type"><strong>boolean</strong><em class="docs-prop-default bp3-text-muted"></em></code>
          <div class="docs-prop-description">
            <div class="docs-section">
              <div class="bp3-running-text">
                <p>Whether this input should readonly mode.</p>
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
        <td class="docs-prop-name"><code>data</code></td>
        <td class="docs-prop-details"><code
            class="docs-prop-type"><strong>string</strong><em class="docs-prop-default bp3-text-muted"></em></code>
          <div class="docs-prop-description">
            <div class="docs-section">
              <div class="bp3-running-text">
                <p>Input text.</p>
              </div>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td class="docs-prop-name"><code>autofoucs</code></td>
        <td class="docs-prop-details"><code class="docs-prop-type"><strong>boolean</strong> </code>
          <div class="docs-prop-description">
            <div class="docs-section">
              <div class="bp3-running-text">
                <p> The cursor focus to input box
                </p>
              </div>
            </div>
          </div>
          <div class="docs-prop-tags"></div>
        </td>
      </tr>
      <tr>
        <td class="docs-prop-name"><code>pattern</code></td>
        <td class="docs-prop-details"><code class="docs-prop-type"><strong>string</strong></code>
          <div class="docs-prop-description">
            <div class="docs-section">
              <div class="bp3-running-text">
                <p> Apply <strong>regex</strong> pattern for input box. ex:"[A-Za-z]{3}"
                </p>
              </div>
            </div>
          </div>
          <div class="docs-prop-tags"></div>
        </td>
      </tr>
      <tr>
        <td class="docs-prop-name"><code>maxlength</code></td>
        <td class="docs-prop-details"><code class="docs-prop-type"><strong>number</strong></code>
          <div class="docs-prop-description">
            <div class="docs-section">
              <div class="bp3-running-text">
                <p> Limit the size of text inside input box.
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
            class="docs-prop-type"><strong>(data:string, event: MouseEvent&lt;HTMLElement&gt;) =&gt; void</strong><em class="docs-prop-default bp3-text-muted"></em></code>
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
        <td class="docs-prop-name"><code>onDoubleClick</code></td>
        <td class="docs-prop-details"><code
            class="docs-prop-type"><strong>(data:string, event: MouseEvent&lt;HTMLElement&gt;) =&gt; void</strong><em class="docs-prop-default bp3-text-muted"></em></code>
          <div class="docs-prop-description">
            <div class="docs-section">
              <div class="bp3-running-text">
                <p>When mouse button double-clicked.</p>
              </div>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td class="docs-prop-name"><code>onkeyUp</code></td>
        <td class="docs-prop-details"><code
            class="docs-prop-type"><strong>(data:string, event: MouseEvent&lt;HTMLElement&gt;) =&gt; void</strong><em class="docs-prop-default bp3-text-muted"></em></code>
          <div class="docs-prop-description">
            <div class="docs-section">
              <div class="bp3-running-text">
                <p> When user release a key from input.</p>
              </div>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td class="docs-prop-name"><code>onBlur</code></td>
        <td class="docs-prop-details"><code
            class="docs-prop-type"><strong>(data:string, event: MouseEvent&lt;HTMLElement&gt;) =&gt; void</strong><em class="docs-prop-default bp3-text-muted"></em></code>
          <div class="docs-prop-description">
            <div class="docs-section">
              <div class="bp3-running-text">
                <p> When a user leaves an input field.</p>
              </div>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td class="docs-prop-name"><code>onkeyDown</code></td>
        <td class="docs-prop-details"><code
            class="docs-prop-type"><strong>(data:string, event: MouseEvent&lt;HTMLElement&gt;) =&gt; void</strong><em class="docs-prop-default bp3-text-muted"></em></code>
          <div class="docs-prop-description">
            <div class="docs-section">
              <div class="bp3-running-text">
                <p> When a user is pressing/holding down a key.</p>
              </div>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td class="docs-prop-name"><code>leftIconClick</code></td>
        <td class="docs-prop-details"><code
            class="docs-prop-type"><strong>(data:string, event: MouseEvent&lt;HTMLElement&gt;) =&gt; void</strong><em class="docs-prop-default bp3-text-muted"></em></code>
          <div class="docs-prop-description">
            <div class="docs-section">
              <div class="bp3-running-text">
                <p>Left icon clicked.</p>
              </div>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td class="docs-prop-name"><code>rightIconClick</code></td>
        <td class="docs-prop-details"><code
            class="docs-prop-type"><strong>(data:string, event: MouseEvent&lt;HTMLElement&gt;) =&gt; void</strong><em class="docs-prop-default bp3-text-muted"></em></code>
          <div class="docs-prop-description">
            <div class="docs-section">
              <div class="bp3-running-text">
                <p> Right icon clicked.</p>
              </div>
            </div>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <br>
  <div class="docs-prop-tags"><span class="bp3-tag bp3-minimal"><span class="bp3-text-overflow-ellipsis bp3-fill">
        NOTE: only one color can be used at a time. i.e `primary/success/warning/danger`</span></span></div>
  <br>
  <div class="bp3-callout bp3-intent-danger ">
    <h4 class="bp3-heading">
      <Icon @icon='error' @iconSize=20 /> Disabled and readonly <code>input</code>
      prevents all interaction</h4>
  </div>

</div>