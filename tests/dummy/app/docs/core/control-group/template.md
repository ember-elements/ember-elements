# Control group
<div class="bp3-running-text bp3-text-large">
 A control group renders several distinct form controls as one unit, squaring the borders between them. It supports any number of buttons, text inputs, input groups, and HTML selects as direct children.
</div>
{{#docs-demo as |demo|}}
  {{#demo.example}}
    <div class="demo-container">
      <div
        class="docs-example-frame docs-example-frame-row"
        data-example-id="ControlGroupExample"
      >
        <div class="docs-example">
          {{! BEGIN-SNIPPET docs-example-basic-control-group.hbs }}
          <ControlGroup @style={{style}} @fill={{fill}} @vertical={{vertical}}>
            <Button @intent="primary">
              Hii
            </Button>
            <InputGroup @placeholder="Find filters..." ></InputGroup>
            <Button @icon="arrow-right" ></Button>
          </ControlGroup>
          {{! END-SNIPPET }}
        </div>
        <div class="docs-example-options">
          <h5 class="bp3-heading">
            Props
          </h5>
          <label class="bp3-control bp3-switch">
            <input type="checkbox" onclick={{action "onChangeProps" "fill"}} />
            <span class="bp3-control-indicator"></span>
            Fill
          </label>
          <label class="bp3-control bp3-switch">
            <input
              type="checkbox"
              onclick={{action "onChangeProps" "vertical"}}
             />
            <span class="bp3-control-indicator"></span>
            Vertical
          </label>
        </div>
      </div>
    </div>
  {{/demo.example}}
  {{demo.snippet
    label="template.hbs"
    name="docs-example-basic-control-group.hbs"
  }}
  {{demo.snippet label="component.ts" name="docs-example-basic-control-group.ts"
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
                  Whether the control group should take up the full width of its container.
                </p>
              </div>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td class="docs-prop-name">
          <code>
            vertical
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
                  Whether the control group should appear with vertical styling.
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

## Flex layout
<div class="bp3-running-text bp3-text-large">
  <p>
    <code>
      ControlGroup
    </code>
    is a CSS inline flex row (or column if vertical) and provides
        some modifer props for common flexbox patterns:
  </p>
  <ul>
    <li>
      <p>
        Enable the
        <code>
          fill
        </code>
        prop on a control group to make all controls expand equally to
                fill the available space.
      </p>
      <ul>
        <li>
          Controls will expand horizontally by default, or vertically if the
          <code>
            vertical
          </code>
          prop is
                    enabled.
        </li>
        <li>
          Add the class
          <code>
            Classes.FIXED
          </code>
          to individual controls to revert them to their initial
                    sizes.
        </li>
      </ul>
    </li>
    <li>
      <p>
        Alternatively, enable the
        <code>
          fill
        </code>
        prop on specific controls (instead of on the
                group) to expand them equally to fill the available space while other
                controls retain their original sizes.
      </p>
    </li>
  </ul>
  <p>
    You can adjust the specific size of a control with the
    <code>
      flex-basis
    </code>
    or
    <code>
      width
    </code>
    CSS properties.
  </p>
</div>
