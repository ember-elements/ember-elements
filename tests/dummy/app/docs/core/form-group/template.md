# Form Group
<div class='bp3-running-text bp3-text-large'>
  <code>FormGroup</code> component support simple labels and additional helper text to aid with user navigation.
</div>
{{#docs-demo as |demo|}}
{{#demo.example}}
<div class="demo-container">
  <div class="docs-example-frame docs-example-frame-row" data-example-id="FormGroupExample">
    <div class="docs-example">
      {{! BEGIN-SNIPPET docs-example-basic-form-group.hbs }}
      <FormGroup
        @disabled={{disabled}}
        @inline={{inline}}
        @intent={{intent}}
        @label={{label}}
        @labelFor="text-input"
        @helperText={{helperText}}
        @labelInfo={{requiredLabel}}
      >
        <InputGroup  placeholder="Placeholder text" @disabled={{disabled}} @intent={{intent}} ></InputGroup>
      </FormGroup>
      {{! END-SNIPPET }}
    </div>
    <div class="docs-example-options">
      <h5 class="bp3-heading">Props</h5>
       <label class="bp3-control bp3-switch" >
                <input type="checkbox" onclick={{action 'onDisabled'}}>
                <span class="bp3-control-indicator"></span>
                Disabled</label>
       <label class="bp3-control bp3-switch" >
                <input type="checkbox" onclick={{action 'onInline'}}>
                <span class="bp3-control-indicator"></span>
                Inline</label>
        <label class="bp3-control bp3-switch" >
                <input type="checkbox" onclick={{action 'onHelperText'}}>
                <span class="bp3-control-indicator"></span>
                Show helper text</label>
       <label class="bp3-control bp3-switch" {{action 'onShowLabel'}}>
                {{#if label}}
                <input type="checkbox" checked>
                <span class="bp3-control-indicator"></span>
                {{else}}
                <input type="checkbox">
                <span class="bp3-control-indicator"></span>
                {{/if}}
                Show label
                </label>
       <label class="bp3-control bp3-switch" {{action 'onLabelInfo'}}>
                {{#if requiredLabel}}
                <input type="checkbox" checked>
                <span class="bp3-control-indicator"></span>
                {{else}}
                <input type="checkbox">
                <span class="bp3-control-indicator"></span>
                {{/if}}
                Show label info
                </label>
       <label class="bp3-label" style="margin-top:5px">Intent
                <div class="bp3-html-select">
                  <select onchange={{action "selectIntent"}}>
                        <option label="None" value="none">None</option>
                        <option label="Primary" value="primary">Primary</option>
                        <option label="Success" value="success">Success</option>
                        <option label="Warning" value="warning">Warning</option>
                        <option label="Danger" value="danger">Danger</option>
                  </select>
                  <span icon="double-caret-vertical" class="bp3-icon bp3-icon-double-caret-vertical"><svg data-icon="double-caret-vertical" width="16" height="16" viewBox="0 0 16 16"><desc>double-caret-vertical</desc><path d="M5 7h6a1.003 1.003 0 0 0 .71-1.71l-3-3C8.53 2.11 8.28 2 8 2s-.53.11-.71.29l-3 3A1.003 1.003 0 0 0 5 7zm6 2H5a1.003 1.003 0 0 0-.71 1.71l3 3c.18.18.43.29.71.29s.53-.11.71-.29l3-3A1.003 1.003 0 0 0 11 9z" fill-rule="evenodd"></path></svg></span>
                </div>
            </label>
    </div>
  </div>
</div>
{{/demo.example}}
{{demo.snippet name='docs-example-basic-form-group.hbs'}}
{{demo.snippet label='component.ts' name='docs-example-basic-form-group.ts'}}
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
            contentClassName
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
                  A space-delimited list of class names to pass along to the
                  <code>
                    Classes.FORM_CONTENT
                  </code>
                  element that contains
                  <code>
                    children
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
                  Whether form group should appear as non-interactive.
                                    Remember that
                  <code>
                    input
                  </code>
                  elements must be disabled separately.
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
            helperText
          </code>
        </td>
        <td class="docs-prop-details">
          <code class="docs-prop-type">
            <strong>
              string | HtmlElement
            </strong>
            <em class="docs-prop-default bp3-text-muted"></em>
          </code>
          <div class="docs-prop-description">
            <div class="docs-section">
              <div class="bp3-running-text">
                <p>
                  Optional helper text. The given content will be wrapped in
                  <code>
                    Classes.FORM_HELPER_TEXT
                  </code>
                  and displayed beneath
                  <code>
                    children
                  </code>
                  .
                                    Helper text color is determined by the
                  <code>
                    intent
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
                  Whether to render the label and children on a single line.
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
              <a href="#api/Intent">
                Intent
              </a>
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
            label
          </code>
        </td>
        <td class="docs-prop-details">
          <code class="docs-prop-type">
            <strong>
              string | HtmlElement
            </strong>
            <em class="docs-prop-default bp3-text-muted"></em>
          </code>
          <div class="docs-prop-description">
            <div class="docs-section">
              <div class="bp3-running-text">
                <p>
                  Label of this form group.
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
            labelFor
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
               <p><code>id</code> attribute of the labelable form element that this <code>FormGroup</code> controls,
used as <code>&lt;label for&gt;</code> attribute.</p>
              </div>
            </div>
          </div>
          <div class="docs-prop-tags"></div>
        </td>
      </tr>
      <tr>
        <td class="docs-prop-name">
          <code>
            labelInfo
          </code>
        </td>
        <td class="docs-prop-details">
          <code class="docs-prop-type">
            <strong>
              string | HtmlElement
            </strong>
            <em class="docs-prop-default bp3-text-muted"></em>
          </code>
          <div class="docs-prop-description">
            <div class="docs-section">
              <div class="bp3-running-text">
                <p>
                  Optional secondary text that appears after the label.
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
            style
          </code>
        </td>
        <td class="docs-prop-details">
          <code class="docs-prop-type">
            <strong>
              CSSProperties
            </strong>
            <em class="docs-prop-default bp3-text-muted"></em>
          </code>
          <div class="docs-prop-description">
            <div class="docs-section">
              <div class="bp3-running-text">
                <p>
                  CSS properties to apply to the root element.
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