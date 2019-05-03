# CheckBox
<div class="bp3-running-text bp3-text-large">
A checkbox allows the user to toggle between checked, unchecked, and (rarely) indeterminate states.
</div>
{{#docs-demo as |demo|}}
  {{#demo.example}}
    <div class="demo-container">
      <div class="docs-example-frame docs-example-frame-row" data-example-id="CheckboxExample">
        <div class="docs-example">
          {{! BEGIN-SNIPPET docs-example-basic-check-box-example.hbs }}
          <div>
          <label class="bp3-label">Assign responsibility</label>
          <CheckBox
            @disabled={{disabled}}
            @inline={{inline}}
            @large={{large}}
            @alignIndicator={{alignIndicator}}
            @defaultIndeterminate={{true}}
           >
           Gilad Gray
           </CheckBox>
          <CheckBox
            @disabled={{disabled}}
            @inline={{inline}}
            @large={{large}}
            @alignIndicator={{alignIndicator}}
            >
           Jason Killian
           </CheckBox>
          <CheckBox
            @disabled={{disabled}}
            @inline={{inline}}
            @large={{large}}
            @alignIndicator={{alignIndicator}}
           >
           Antoine Llorca
           </CheckBox>
           </div>
          {{! END-SNIPPET }}
        </div>
        <div class="docs-example-options">
          <h5 class="bp3-heading">
            Props
          </h5>
          <label class="bp3-control bp3-switch">
            <input type="checkbox" onclick={{action "onChangeProps" "disabled"}} />
            <span class="bp3-control-indicator"></span>
            Disabled
          </label>
          <label class="bp3-control bp3-switch">
            <input type="checkbox" onclick={{action "onChangeProps" "inline"}} />
            <span class="bp3-control-indicator"></span>
            Inline
          </label>
          <label class="bp3-control bp3-switch">
            <input
              type="checkbox"
              onclick={{action "onChangeProps" "large"}}
             />
            <span class="bp3-control-indicator"></span>
            Large
          </label>
          <div style="margin-top: 5px;">
            Align indicator
            <ButtonGroup @fill="true" @style="margin-top: 5px;">
              <Button
                @active={{leftActive}}
                @onClick={{action "onTextAlign" "left"}}
              >
                Left
              </Button>
              <Button
                @active={{rightActive}}
                @onClick={{action "onTextAlign" "right"}}
              >
                Right
              </Button>
            </ButtonGroup>
          </div>
        </div>
      </div>
    </div>
  {{/demo.example}}
  {{demo.snippet label="template.hbs" name="docs-example-basic-check-box-example.hbs"
  }}
  {{demo.snippet label="component.ts" name="docs-example-basic-check-box-example.ts"
  }}
{{/docs-demo}}

## Props
<div class="docs-modifiers-table bp3-running-text">
  <table class="bp3-html-table">
    <thead>
      <tr>
        <th>
          Props
        </th>
        <th>
          Description
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="docs-prop-name">
          <code>
            alignIndicator
          </code>
        </td>
        <td class="docs-prop-details">
          <code class="docs-prop-type">
            <strong>
              string
            </strong>
            <em class="docs-prop-default bp3-text-muted"></em>
          </code>
          <div class="docs-prop-description">
            <div class="docs-section">
              <div class="bp3-running-text">
                <p>
                    Alignment of the indicator within container. The options are <code>left</code>, <code>center</code>, <code>right</code>.
                </p>
              </div>
            </div>
          </div>
          <div class="docs-prop-tags"></div>
        </td>
      </tr>
    <tr>
        <td class="docs-prop-name">
            <code>
                checked
              </code>
        </td>
        <td class="docs-prop-details">
            <code class="docs-prop-type">
                <strong>
                  boolean
                </strong>
                <em class="docs-prop-default bp3-text-muted"></em>
              </code>
            <div class="docs-prop-description">
                <div class="docs-section">
                    <div class="bp3-running-text">
                        <p>
                        Whether the control is checked.
                        </p>
                    </div>
                </div>
            </div>
            <div class="docs-prop-tags"></div>
        </td>
    </tr>
      <tr>
        <td class="docs-prop-name">
          <code>
            class
          </code>
        </td>
        <td class="docs-prop-details">
          <code class="docs-prop-type">
            <strong>
              string
            </strong>
            <em class="docs-prop-default bp3-text-muted"></em>
          </code>
          <div class="docs-prop-description">
            <div class="docs-section">
              <div class="bp3-running-text">
                <p>
                  A space-delimited list of class names to pass along to a child element.
                </p>
              </div>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td class="docs-prop-name">
          <code>
            defaultChecked
          </code>
        </td>
        <td class="docs-prop-details">
          <code class="docs-prop-type">
            <strong>
              boolean
            </strong>
            <em class="docs-prop-default bp3-text-muted"></em>
          </code>
          <div class="docs-prop-description">
            <div class="docs-section">
              <div class="bp3-running-text">
                <p>
                Whether the control is initially checked (uncontrolled mode).
                </p>
              </div>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td class="docs-prop-name">
          <code>
            defaultIndeterminate
          </code>
        </td>
        <td class="docs-prop-details">
          <code class="docs-prop-type">
            <strong>
              boolean
            </strong>
            <em class="docs-prop-default bp3-text-muted"></em>
          </code>
          <div class="docs-prop-description">
            <div class="docs-section">
              <div class="bp3-running-text">
                <p>
                Whether this checkbox is initially indeterminate (uncontrolled mode).
                </p>
              </div>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td class="docs-prop-name">
          <code>
            disabled
          </code>
        </td>
        <td class="docs-prop-details">
          <code class="docs-prop-type">
            <strong>
              boolean
            </strong>
            <em class="docs-prop-default bp3-text-muted"></em>
          </code>
          <div class="docs-prop-description">
            <div class="docs-section">
              <div class="bp3-running-text">
                <p>
                Whether the control is non-interactive.
                </p>
              </div>
            </div>
          </div>
        </td>
      </tr>
    <tr>
        <td class="docs-prop-name">
            <code>
                indeterminate
              </code>
        </td>
        <td class="docs-prop-details">
            <code class="docs-prop-type">
                <strong>
                  boolean
                </strong>
                <em class="docs-prop-default bp3-text-muted"></em>
              </code>
            <div class="docs-prop-description">
                <div class="docs-section">
                    <div class="bp3-running-text">
                        <p>
                    Whether this checkbox is indeterminate, or "partially checked." The checkbox will appear with a small dash instead of a
                    tick to indicate that the value is not exactly true or false.
                                        Note that this prop takes precendence over checked: if a checkbox is marked both checked and indeterminate via props,
                    it will appear as indeterminate in the DOM.
                        </p>
                    </div>
                </div>
            </div>
        </td>
    </tr>
      <tr>
        <td class="docs-prop-name">
          <code>
            inline
          </code>
        </td>
        <td class="docs-prop-details">
          <code class="docs-prop-type">
            <strong>
              boolean
            </strong>
            <em class="docs-prop-default bp3-text-muted"></em>
          </code>
          <div class="docs-prop-description">
            <div class="docs-section">
              <div class="bp3-running-text">
                <p>
                Whether the control should appear as an inline element.
                </p>
              </div>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td class="docs-prop-name">
          <code>
            label
          </code>
        </td>
        <td class="docs-prop-details">
          <code class="docs-prop-type">
            <strong>
              string
            </strong>
            <em class="docs-prop-default bp3-text-muted"></em>
          </code>
          <div class="docs-prop-description">
            <div class="docs-section">
              <div class="bp3-running-text">
                <p>
                Text label for the control. 
                </p>
              </div>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td class="docs-prop-name">
          <code>
            labelElement
          </code>
        </td>
        <td class="docs-prop-details">
          <code class="docs-prop-type">
            <strong>
              HtmlElement|string
            </strong>
            <em class="docs-prop-default bp3-text-muted"></em>
          </code>
          <div class="docs-prop-description">
            <div class="docs-section">
              <div class="bp3-running-text">
                <p>
                 Html Element for check box instead of label.
                </p>
              </div>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td class="docs-prop-name">
          <code>
            large
          </code>
        </td>
        <td class="docs-prop-details">
          <code class="docs-prop-type">
            <strong>
              boolean
            </strong>
            <em class="docs-prop-default bp3-text-muted"></em>
          </code>
          <div class="docs-prop-description">
            <div class="docs-section">
              <div class="bp3-running-text">
                <p>
                Whether this control should use large styles.
                </p>
              </div>
            </div>
          </div>
        </td>
      </tr>
    <tr>
        <td class="docs-prop-name">
            <code>
                onChange
              </code>
        </td>
        <td class="docs-prop-details">
            <code class="docs-prop-type">
                <strong>
                HTMLInputElement
                </strong>
                <em class="docs-prop-default bp3-text-muted"></em>
              </code>
            <div class="docs-prop-description">
                <div class="docs-section">
                    <div class="bp3-running-text">
                        <p>
                            Event handler invoked when input value is changed.
                        </p>
                    </div>
                </div>
            </div>
        </td>
    </tr>
    </tbody>
  </table>
  <br />
</div>