# Numeric input
<div class="bp3-running-text bp3-text-large">
    <p>The <code>NumericInput</code> component provides controls for easily inputting,
        incrementing, and decrementing numeric values.</p>
</div>

## Interactions

<div class="bp3-running-text bp3-text-large">
    <p>Values in numeric inputs can be incremented or decremented using both keyboard and mouse interactions.</p>
    <h5 id="keyboard-interactions">Keyboard interactions</h5>
    <ul>
        <li><code>↑/↓</code> - change the value by one step (default: <code>±1</code>)</li>
        <li><code>Shift + ↑/↓</code> - change the value by one major step (default: <code>±10</code>)</li>
        <li><code>Alt + ↑/↓</code> - change the value by one minor step (default: <code>±0.1</code>)</li>
    </ul>
    <h5 id="mouse-interactions">Mouse interactions</h5>
    <ul>
        <li><code>Click ⌃/⌄</code> - change the value by one step (default: <code>±1</code>)</li>
        <li><code>Shift + Click ⌃/⌄</code> - change the value by one major step (default: <code>±10</code>)</li>
        <li><code>Alt + Click ⌃/⌄</code> - change the value by one minor step (default: <code>±0.1</code>)</li>
    </ul>
</div>
{{#docs-demo as |demo|}}
  {{#demo.example}}
    <div class="demo-container">
      <div
        class="docs-example-frame docs-example-frame-row"
        data-example-id="NumericInputBasicExample"
      >
        <div class="docs-example">
          {{! BEGIN-SNIPPET docs-example-basic-numeric-input-example.hbs }}
          <NumericInput
            @disabled={{disabled}}
            @large={{large}}
            @fill={{fill}}
            @leftIcon={{leftIcon}}
            @allowNumericCharactersOnly={{allowNumericCharactersOnly}}
            @selectAllOnFocus={{selectAllOnFocus}}
            @selectAllOnIncrement={{selectAllOnIncrement}}
            @min={{min}}
            @max={{max}}
            @intent={{intent}}
            @buttonPosition={{buttonPosition}}
           ></NumericInput>
          {{! END-SNIPPET }}
        </div>
        <div class="docs-example-options">
          <h5 class="bp3-heading">
            Props
          </h5>
          <Switch @onChange={{action "onSwitchChange" "disabled"}}>
            Disabled
          </Switch>
          <Switch @onChange={{action "onSwitchChange" "fill"}}>
            Fill
          </Switch>
          <Switch @onChange={{action "onSwitchChange" "large"}}>
            Large
          </Switch>
          <Switch @onChange={{action "onSwitchChange" "leftIcon"}}>
            Left icon
          </Switch>
          <Switch
            @defaultChecked={{true}}
            @onChange={{action "onSwitchChange" "allowNumericCharactersOnly"}}
          >
            Numeric characters only
          </Switch>
          <Switch @onChange={{action "onSwitchChange" "selectAllOnFocus"}}>
            Select all on focus
          </Switch>
          <Switch @onChange={{action "onSwitchChange" "selectAllOnIncrement"}}>
            Select all on increment
          </Switch>
          <label class="bp3-label">
            Minimum value
            <HtmlSelect
              @options={{MIN_VALUES}}
              @onChange={{action "onChangeMinValue"}}
             ></HtmlSelect>
          </label>
          <label class="bp3-label">
            Maximum value
            <HtmlSelect
              @options={{MAX_VALUES}}
              @onChange={{action "onChangeMaxValue"}}
             ></HtmlSelect>
          </label>
          <label class="bp3-label">
            Button position
            <HtmlSelect
              @options={{BUTTON_POSITIONS}}
              @onChange={{action "onChangePosValue"}}
             ></HtmlSelect>
          </label>
          <label class="bp3-label">
            Intent
            <HtmlSelect
              @options={{INTENT}}
              @onChange={{action "onChangeIntentValue"}}
             ></HtmlSelect>
          </label>
        </div>
      </div>
    </div>
  {{/demo.example}}
  {{demo.snippet
    label="template.hbs"
    name="docs-example-basic-numeric-input-example.hbs"
  }}
  {{demo.snippet
    label="component.ts"
    name="docs-example-basic-numeric-input-example.ts"
  }}
{{/docs-demo}}

## Extended example
<div class="bp3-running-text bp3-text-large">
    <p>This example shows how <code>NumericInput</code> can be extended beyond its core
        functionality. It supports the basic interactions above as well as each of the
        following types of input:</p>
    <ul>
        <li><strong>Number abbreviations</strong> (e.g. <code>2.1k</code>, <code>-0.3m</code>)</li>
        <li><strong>Scientific notation</strong> (e.g. <code>2.1e3</code>, <code>-0.3e6</code>)</li>
        <li><strong>Addition and subtraction expressions</strong> (e.g. <code>3+2</code>, <code>0.1m - 5k + 1</code>)</li>
    </ul>
    <p>These special-case inputs are evaluated when <code>Enter</code> is pressed (via a
        custom <code>onKeyDown</code> callback) and when the field loses focus (via a custom
        <code>onBlur</code> callback). If the input is invalid when either of these callbacks is
        trigged, the field will be cleared.</p>
    <div class="bp3-callout bp3-intent-primary">
    <Icon @icon='info-sign' @iconSize=16 ></Icon>
        This example contains non-core functionality that is meant to demonstrate
        the extensibility of the `NumericInput` component. The correctness of the
        custom evaluation code has not been tested robustly.
    </div>

</div>
      <div
        class="docs-example-frame docs-example-frame-row"
        data-example-id="NumericInputBasicExample"
      >
        <div class="docs-example">
         <NumericInput
          @allowNumericCharactersOnly={{false}}
          onChange={{action "handleBlur"}}
          onKeyDown={{action "handleKeyDown"}}
          @onValueChange={{action "handleValueChange"}}
          @placeholder="Enter a number or expression..."
          @value={{value}}
         >
        </NumericInput>
        </div>
      </div>

## Props
<div class="docs-modifiers">
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
              allowNumericCharactersOnly
            </code>
          </td>
          <td class="docs-prop-details">
            <code class="docs-prop-type">
              <strong>
                boolean
              </strong>
              <em class="docs-prop-default bp3-text-muted">
                true
              </em>
            </code>
            <div class="docs-prop-description">
              <div class="docs-section">
                <div class="bp3-running-text">
                  <p>
                    Whether to allow only floating-point number characters in the field,
                                        mimicking the native
                    <code>
                      input[type="number"]
                    </code>
                    .
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
              buttonPosition
            </code>
          </td>
          <td class="docs-prop-details">
            <code class="docs-prop-type">
              <strong>
                "left" | "right" | "none"
              </strong>
              <em class="docs-prop-default bp3-text-muted">
                "right"
              </em>
            </code>
            <div class="docs-prop-description">
              <div class="docs-section">
                <div class="bp3-running-text">
                  <p>
                    The position of the buttons with respect to the input field.
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
              clampValueOnBlur
            </code>
          </td>
          <td class="docs-prop-details">
            <code class="docs-prop-type">
              <strong>
                boolean
              </strong>
              <em class="docs-prop-default bp3-text-muted">
                false
              </em>
            </code>
            <div class="docs-prop-description">
              <div class="docs-section">
                <div class="bp3-running-text">
                  <p>
                    Whether the value should be clamped to
                    <code>
                      [min, max]
                    </code>
                    on blur.
                                        The value will be clamped to each bound only if the bound is defined.
                                        Note that native
                    <code>
                      input[type="number"]
                    </code>
                    controls do
                    <em>
                      NOT
                    </em>
                    clamp on blur.
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
              disabled
            </code>
          </td>
          <td class="docs-prop-details">
            <code class="docs-prop-type">
              <strong>
                boolean
              </strong>
              <em class="docs-prop-default bp3-text-muted">
                false
              </em>
            </code>
            <div class="docs-prop-description">
              <div class="docs-section">
                <div class="bp3-running-text">
                  <p>
                    Whether the input is non-interactive.
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
              fill
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
                    Whether the numeric input should take up the full width of its container.
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
              intent
            </code>
          </td>
          <td class="docs-prop-details">
            <code class="docs-prop-type">
              <strong>
                Intent
              </strong>
              <em class="docs-prop-default bp3-text-muted"></em>
            </code>
            <div class="docs-prop-description">
              <div class="docs-section">
                <div class="bp3-running-text">
                  <p>
                    Visual intent color to apply to element.
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
              <em class="docs-prop-default bp3-text-muted">
                false
              </em>
            </code>
            <div class="docs-prop-description">
              <div class="docs-section">
                <div class="bp3-running-text">
                  <p>
                    If set to
                    <code>
                      true
                    </code>
                    , the input will display with larger styling.
                                        This is equivalent to setting
                    <code>
                      Classes.LARGE
                    </code>
                    via className on the
                                        parent control group and on the child input group.
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
              leftIcon
            </code>
          </td>
          <td class="docs-prop-details">
            <code class="docs-prop-type">
              <strong>
                IconName
              </strong>
              <em class="docs-prop-default bp3-text-muted"></em>
            </code>
            <div class="docs-prop-description">
              <div class="docs-section">
                <div class="bp3-running-text">
                  <p>
                    Name of a Blueprint UI icon (or an icon element) to render on the left side of
                                        input.
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
              majorStepSize
            </code>
          </td>
          <td class="docs-prop-details">
            <code class="docs-prop-type">
              <strong>
                number | null
              </strong>
              <em class="docs-prop-default bp3-text-muted">
                10
              </em>
            </code>
            <div class="docs-prop-description">
              <div class="docs-section">
                <div class="bp3-running-text">
                  <p>
                    The increment between successive values when
                    <kbd>
                      shift
                    </kbd>
                    is held.
                                        Pass explicit
                    <code>
                      null
                    </code>
                    value to disable this interaction.
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
              max
            </code>
          </td>
          <td class="docs-prop-details">
            <code class="docs-prop-type">
              <strong>
                number
              </strong>
              <em class="docs-prop-default bp3-text-muted"></em>
            </code>
            <div class="docs-prop-description">
              <div class="docs-section">
                <div class="bp3-running-text">
                  <p>
                    The maximum value of the input.
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
              min
            </code>
          </td>
          <td class="docs-prop-details">
            <code class="docs-prop-type">
              <strong>
                number
              </strong>
              <em class="docs-prop-default bp3-text-muted"></em>
            </code>
            <div class="docs-prop-description">
              <div class="docs-section">
                <div class="bp3-running-text">
                  <p>
                    The minimum value of the input.
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
              minorStepSize
            </code>
          </td>
          <td class="docs-prop-details">
            <code class="docs-prop-type">
              <strong>
                number | null
              </strong>
              <em class="docs-prop-default bp3-text-muted">
                0.1
              </em>
            </code>
            <div class="docs-prop-description">
              <div class="docs-section">
                <div class="bp3-running-text">
                  <p>
                    The increment between successive values when
                    <kbd>
                      alt
                    </kbd>
                    is held.
                                        Pass explicit
                    <code>
                      null
                    </code>
                    value to disable this interaction.
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
              onButtonClick
            </code>
          </td>
          <td class="docs-prop-details">
            <code class="docs-prop-type">
              <strong>
                (valueAsNumber: number, valueAsString: string) => void
              </strong>
            </code>
            <div class="docs-prop-description">
              <div class="docs-section">
                <div class="bp3-running-text">
                  <p>
                    The callback invoked when the value changes due to a button click.
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
              onValueChange
            </code>
          </td>
          <td class="docs-prop-details">
            <code class="docs-prop-type">
              <strong>
                (valueAsNumber: number, valueAsString: string) => void
              </strong>
            </code>
            <div class="docs-prop-description">
              <div class="docs-section">
                <div class="bp3-running-text">
                  <p>
                    The callback invoked when the value changes due to typing, arrow keys, or button
                                        clicks.
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
              placeholder
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
                    The placeholder text in the absence of any value.
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
              selectAllOnFocus
            </code>
          </td>
          <td class="docs-prop-details">
            <code class="docs-prop-type">
              <strong>
                boolean
              </strong>
              <em class="docs-prop-default bp3-text-muted">
                false
              </em>
            </code>
            <div class="docs-prop-description">
              <div class="docs-section">
                <div class="bp3-running-text">
                  <p>
                    Whether the entire text field should be selected on focus.
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
              selectAllOnIncrement
            </code>
          </td>
          <td class="docs-prop-details">
            <code class="docs-prop-type">
              <strong>
                boolean
              </strong>
              <em class="docs-prop-default bp3-text-muted">
                false
              </em>
            </code>
            <div class="docs-prop-description">
              <div class="docs-section">
                <div class="bp3-running-text">
                  <p>
                    Whether the entire text field should be selected on increment.
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
              stepSize
            </code>
          </td>
          <td class="docs-prop-details">
            <code class="docs-prop-type">
              <strong>
                number
              </strong>
              <em class="docs-prop-default bp3-text-muted">
                1
              </em>
            </code>
            <div class="docs-prop-description">
              <div class="docs-section">
                <div class="bp3-running-text">
                  <p>
                    The increment between successive values when no modifier keys are held.
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
              value
            </code>
          </td>
          <td class="docs-prop-details">
            <code class="docs-prop-type">
              <strong>
                number | string
              </strong>
              <em class="docs-prop-default bp3-text-muted"></em>
            </code>
            <div class="docs-prop-description">
              <div class="docs-section">
                <div class="bp3-running-text">
                  <p>
                    The value to display in the input field.
                  </p>
                </div>
              </div>
            </div>
            <div class="docs-prop-tags"></div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>