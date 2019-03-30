# Popover
<div class='bp3-running-text bp3-text-large'>
  Popover display floating content next to a target button element. Here there is a default button for popover, Popovers
  will render based button click.
  <code>BpPopOver</code> is built on top of the <a href="https://popper.js.org"><strong>Popper.js</strong></a>
</div>
{{#docs-demo as |demo|}}
{{#demo.example}}
{{! BEGIN-SNIPPET docs-example-basic-pop-over.hbs }}
<div class="demo-container">
  <div class="docs-example-frame docs-example-frame-row">
    <div class="docs-example">
      <p>
        <PopOver @btnTitle='Open popover' @active=true>
          <p>
            Popover content or action will go here...
          </p>
        </PopOver>
      </p>
      <p>
        <PopOver @btnTitle='Open popover' @minimal=true @icon='code' @placement='right'>
          <p>
            Popover content or action will go here...
          </p>
        </PopOver>
      </p>
    </div>
  </div>
</div>

{{! END-SNIPPET }}

{{/demo.example}}
{{demo.snippet name='docs-example-basic-pop-over.hbs'}}
{{!-- {{demo.snippet label='component.ts' name='docs-example-basic-pop-over.ts'}} --}}
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
        <td class="docs-prop-name"><code>popCloseClickFun</code></td>
        <td class="docs-prop-details"><code
            class="docs-prop-type"><strong>() =&gt; void</strong><em class="docs-prop-default bp3-text-muted"></em></code>
          <div class="docs-prop-description">
            <div class="docs-section">
              <div class="bp3-running-text">
                <p>It invoked when popover close button click action occurred.</p>
              </div>
            </div>
          </div>
        </td>
      </tr>
    </tbody>
  </table>

</div>