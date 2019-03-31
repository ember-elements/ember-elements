# Button Group
<div class='bp3-running-text bp3-text-large'>
  Button group is grouping of two or more <code>Button</code>. Button groups arrange multiple buttons in a horizontal or
  vertical group. Provided some of the blueprintjs button group features as follows.
</div>
{{#docs-demo as |demo|}}
{{#demo.example}}

<div class="demo-container">
  <div class="docs-example-frame docs-example-frame-row">
    <div class="docs-example">
      {{! BEGIN-SNIPPET docs-example-basic-button-group.hbs }}
      <ButtonGroup @minimal={{minimal}} @large={{large}} @vertical={{vertical}} @fill={{fill}}>
        <Button @icon='database' @type='button' @text='Queries'> </Button>
        <Button @icon='function' @type='button' @text='Functions'> </Button>
        <Button @icon='cog' @type='button' @text='Settings'> </Button>
      </ButtonGroup>
      {{! END-SNIPPET }}
    </div>
    <div class="docs-example-options">
      <h5 class="bp3-heading">Props</h5>
      <label class="bp3-control bp3-switch"><input type="checkbox" onclick={{action "onChangeProps" "fill"}}><span
          class="bp3-control-indicator"></span>Fill</label>
      <label class="bp3-control bp3-switch"><input type="checkbox" onclick={{action "onChangeProps" 'large'}}><span
          class="bp3-control-indicator"></span>Large</label>
      <label class="bp3-control bp3-switch"><input type="checkbox" onclick={{action "onChangeProps" 'minimal'}}><span
          class="bp3-control-indicator"></span>Minimal</label>
      <label class="bp3-control bp3-switch"><input type="checkbox" onclick={{action "onChangeProps" 'vertical'}}><span
          class="bp3-control-indicator"></span>Vertical</label>
    </div>
  </div>
</div>
{{/demo.example}}
{{demo.snippet name='docs-example-basic-button-group.hbs'}}
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
        <td class="docs-prop-name"><code>fill</code></td>
        <td class="docs-prop-details"><code
            class="docs-prop-type"><strong>boolean</strong><em class="docs-prop-default bp3-text-muted"></em></code>
          <div class="docs-prop-description">
            <div class="docs-section">
              <div class="bp3-running-text">
                <p>Whether the button group should take up the full width of its container.</p>
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
                <p>Whether the child buttons should appear with large styling.</p>
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
                <p>Whether the button groups should appear with minimal styling.</p>
              </div>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td class="docs-prop-name"><code>vertical</code></td>
        <td class="docs-prop-details"><code
            class="docs-prop-type"><strong>boolean</strong><em class="docs-prop-default bp3-text-muted"></em></code>
          <div class="docs-prop-description">
            <div class="docs-section">
              <div class="bp3-running-text">
                <p>Whether the button group should appear with vertical styling.</p>
              </div>
            </div>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <br>
</div>