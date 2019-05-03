# Switch
<div class="bp3-running-text bp3-text-large">
A switch is simply an alternate appearance for a <code>checkbox</code> that simulates on/off instead of checked/unchecked.
</div>
{{#docs-demo as |demo|}}
  {{#demo.example}}
    <div class="demo-container">
      <div
        class="docs-example-frame docs-example-frame-row"
        data-example-id="SwitchExample"
      >
        <div class="docs-example">
          <div>
            <label class="bp3-label">
            Privacy setting
            </label>
          {{! BEGIN-SNIPPET docs-example-basic-check-box.hbs }}
            <Switch
              @disabled={{disabled}}
              @inline={{inline}}
              @large={{large}}
              @alignIndicator={{alignIndicator}}
              @labelElement="<strong>Enabled</strong>"
             ></Switch>
            <Switch
              @disabled={{disabled}}
              @inline={{inline}}
              @large={{large}}
              @alignIndicator={{alignIndicator}}
              @labelElement="<u>Cooperative</u>"
              @defaultChecked="true"
             ></Switch>
            <Switch
              @disabled={{disabled}}
              @inline={{inline}}
              @large={{large}}
              @alignIndicator={{alignIndicator}}
              @labelElement="Containing Text"
              @innerLabelChecked="on"
              @innerLabel="off"
             ></Switch>
          {{! END-SNIPPET }}
          </div>
        </div>
        <div class="docs-example-options">
          <h5 class="bp3-heading">
            Props
          </h5>
          <label class="bp3-control bp3-switch">
            <input
              type="checkbox"
              onclick={{action "onChangeProps" "disabled"}}
             />
            <span class="bp3-control-indicator"></span>
            Disabled
          </label>
          <label class="bp3-control bp3-switch">
            <input
              type="checkbox"
              onclick={{action "onChangeProps" "inline"}}
             />
            <span class="bp3-control-indicator"></span>
            Inline
          </label>
          <label class="bp3-control bp3-switch">
            <input type="checkbox" onclick={{action "onChangeProps" "large"}} />
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
  {{demo.snippet label="template.hbs" name="docs-example-basic-check-box.hbs"}}
  {{demo.snippet label="component.ts" name="docs-example-basic-check-box.ts"}}
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
                  Alignment of the indicator within container. The options are
                  <code>left</code>,<code>center</code>,<code>right</code>.
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
                innerLabel
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
                            Text to display inside the switch indicator when unchecked.
                        </p>
                    </div>
                </div>
            </div>
        </td>
    </tr>
    <tr>
        <td class="docs-prop-name">
            <code>
                    innerLabelChecked
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
                        Text to display inside the switch indicator when checked. If innerLabel is provided and this prop is omitted, then
                        innerLabel will be used for both states.
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
                  Html Element for switch instead of label.
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
              HTMLInputElement, checked value
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