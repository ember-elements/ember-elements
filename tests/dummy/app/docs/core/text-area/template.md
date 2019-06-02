# Text area
<div class="bp3-running-text bp3-text-large">
 <p>Apply <code>Classes.INPUT</code> on a <code>&lt;textarea&gt;</code>, or use the <code>TextArea</code> component.</p>
</div>
{{#docs-demo as |demo|}}
  {{#demo.example}}
    <div class="demo-container">
      <div
        class="docs-example-frame docs-example-frame-row"
        data-example-id="textarea"
      >
        <div class="docs-example">
          {{! BEGIN-SNIPPET docs-example-basic-text-area.hbs }}
          <TextArea
            @disabled={{disabled}}
            @readOnly={{readOnly}}
            @large={{large}}
            @fill={{fill}}
            @small={{small}}
            @intent={{intent}}
            @value={{value}}
            @onChange={{action (mut this.value) value="target.value"}}
          ></TextArea>
          {{! END-SNIPPET }}
        </div>
        <div class="docs-example-options">
          <h5 class="bp3-heading">
            Props
          </h5>
          <Switch @onChange={{action "onSwitchChange" "disabled"}}>
            Disabled
          </Switch>
          <Switch @onChange={{action "onSwitchChange" "readOnly"}}>
            Readonly
          </Switch>
          <Switch @onChange={{action "onSwitchChange" "large"}}>
            Larger font size
          </Switch>
          <Switch @onChange={{action "onSwitchChange" "fill"}}>
            Fill
          </Switch>
          <Switch @onChange={{action "onSwitchChange" "small"}}>
            Small font size
          </Switch>
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
  {{demo.snippet label="template.hbs" name="docs-example-basic-text-area.hbs"}}
  {{demo.snippet label="component.ts" name="docs-example-basic-text-area.ts"}}
{{/docs-demo}}

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
              className
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
                    Whether the text area should take up the full width of its container.
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
              growVertically
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
                    Whether the text area should automatically grow vertically to accomodate content.
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
              <em class="docs-prop-default bp3-text-muted"></em>
            </code>
            <div class="docs-prop-description">
              <div class="docs-section">
                <div class="bp3-running-text">
                  <p>
                    Whether the text area should appear with large styling.
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
              small
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
                    Whether the text area should appear with small styling.
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
<div class="bp3-callout bp3-intent-primary">
  It support common textarea attributes are
  <p>
    `id as textAreaId
    `
    ,
    `autofocus
    `
    ,
    `cols
    `
    ,
    `rows
    `
    ,
    `disabled
    `
    ,
    `form
    `
    ,
    `dir
    `
    ,
    `maxlength
    `
    ,
    `name
    `
    ,
    `placeholder
    `
    ,
    `readOnly
    `
    ,
    `required
    `
    ,
    `tabindex
    `
    ,
  </p>
</div>