# Radio
<div class="bp3-running-text bp3-text-large">
  <p>
    A radio button typically represents a single option in a mutually exclusive list
        (where only one item can be selected at a time). Ember-elements provides
    <code>
      Radio
    </code>
    and
    <code>
      RadioGroup
    </code>
    components for these two layers.
  </p>
</div>
{{#docs-demo as |demo|}}
  {{#demo.example}}
    <div class="demo-container">
      <div
        class="docs-example-frame docs-example-frame-row"
        data-example-id="RadioExample"
      >
        <div class="docs-example">
          {{! BEGIN-SNIPPET docs-example-basic-radio.hbs }}
          <RadioGroup
            @label="Determine lunch"
            @name="group"
            @inline={{inline}}
            @selectedValue={{value}}
            @disabled={{disabled}}
            @onChange={{action "handleRadioChange"}} as |R|
          >
            <R.Radio
              @value="one"
              @large={{large}}
              @alignIndicator={{alignIndicator}}
            >
            Soup
             </R.Radio>
            <R.Radio
              @value="two"
              @large={{large}}
              @alignIndicator={{alignIndicator}}
             >
             Salad
             </R.Radio>
            <R.Radio
              @value="three"
              @large={{large}}
              @alignIndicator={{alignIndicator}}
             >
             Sandwich
             </R.Radio>
          </RadioGroup>
          {{! END-SNIPPET }}
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
  {{demo.snippet label="template.hbs" name="docs-example-basic-radio.hbs"}}
  {{demo.snippet label="component.ts" name="docs-example-basic-radio.ts"}}
{{/docs-demo}}

## Props
<div class="bp3-running-text bp3-text-large">
  <p>
    Typically, radio buttons are used in a group to choose one option from several,
    similar to how a
      <code>&lt;select&gt;</code>
    tag contains several
      <code>&lt;option&gt;</code>
    tags. As such, you
    can use the
    <code>
      RadioGroup
    </code>
    component with a series of
    <code>
      Radio
    </code>
    children.
    <code>
      RadioGroup
    </code>
    is responsible for managing state and interaction.
  </p>
</div>
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
                  <code>
                    left
                  </code>
                  ,
                  <code>
                    center
                  </code>
                  ,
                  <code>
                    right
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
                  Html Element for radio instead of label.
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
    <tr>
        <td class="docs-prop-name"><code>value <Icon @icon="small-tick" @intent="success"></Icon></code>  </td>
        <td class="docs-prop-details"><code class="docs-prop-type"><strong>string | number</strong><em class="docs-prop-default bp3-text-muted"></em></code>
            <div class="docs-prop-description">
                <div class="docs-section">
                    <div class="bp3-running-text">
                        <p>Value of this option.</p>
                    </div>
                </div>
            </div>
            <div class="docs-prop-tags"><span class="bp3-tag bp3-intent-success bp3-minimal"><span class="bp3-text-overflow-ellipsis bp3-fill">Required</span></span></div>
        </td>
    </tr>
    </tbody>
  </table>
  <br />
</div>

## RadioGroup

<div class="docs-modifiers">
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
                    <td class="docs-prop-details"><code class="docs-prop-type"><strong>string</strong><em class="docs-prop-default bp3-text-muted"></em></code>
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
                    <td class="docs-prop-name"><code>disabled</code></td>
                    <td class="docs-prop-details"><code class="docs-prop-type"><strong>boolean</strong><em class="docs-prop-default bp3-text-muted"></em></code>
                        <div class="docs-prop-description">
                            <div class="docs-section">
                                <div class="bp3-running-text">
                                    <p>Whether the group and <em>all</em> its radios are disabled.
                                        Individual radios can be disabled using their <code>disabled</code> prop.</p>
                                </div>
                            </div>
                        </div>
                        <div class="docs-prop-tags"></div>
                    </td>
                </tr>
                <tr>
                    <td class="docs-prop-name"><code>inline</code></td>
                    <td class="docs-prop-details"><code class="docs-prop-type"><strong>boolean</strong><em class="docs-prop-default bp3-text-muted"></em></code>
                        <div class="docs-prop-description">
                            <div class="docs-section">
                                <div class="bp3-running-text">
                                    <p>Whether the radio buttons are to be displayed inline horizontally.</p>
                                </div>
                            </div>
                        </div>
                        <div class="docs-prop-tags"></div>
                    </td>
                </tr>
                <tr>
                    <td class="docs-prop-name"><code>label</code></td>
                    <td class="docs-prop-details"><code class="docs-prop-type"><strong>string</strong><em class="docs-prop-default bp3-text-muted"></em></code>
                        <div class="docs-prop-description">
                            <div class="docs-section">
                                <div class="bp3-running-text">
                                    <p>Optional label text to display above the radio buttons.</p>
                                </div>
                            </div>
                        </div>
                        <div class="docs-prop-tags"></div>
                    </td>
                </tr>
                <tr>
                    <td class="docs-prop-name"><code>name</code></td>
                    <td class="docs-prop-details"><code class="docs-prop-type"><strong>string</strong><em class="docs-prop-default bp3-text-muted"></em></code>
                        <div class="docs-prop-description">
                            <div class="docs-section">
                                <div class="bp3-running-text">
                                    <p>Name of the group, used to link radio buttons together in HTML.
                                        If omitted, a unique name will be generated internally.</p>
                                </div>
                            </div>
                        </div>
                        <div class="docs-prop-tags"></div>
                    </td>
                </tr>
                <tr>
                    <td class="docs-prop-name "><code>onChange <Icon @icon="small-tick" @intent="success"></Icon></code></td>
                    <td class="docs-prop-details"><code class="docs-prop-type"><strong>(event: HTMLInputElement) =&gt; void</strong><em class="docs-prop-default bp3-text-muted"></em></code>
                        <div class="docs-prop-description">
                            <div class="docs-section">
                                <div class="bp3-running-text">
                                    <p>Callback invoked when the currently selected radio changes.
                                        Use <code>event.target.value</code> to read the currently selected
                                        value.
                                        This prop is required because this component only supports controlled usage.</p>
                                </div>
                            </div>
                        </div>
                        <div class="docs-prop-tags"><span class="bp3-tag bp3-intent-success bp3-minimal"><span class="bp3-text-overflow-ellipsis bp3-fill">Required</span></span></div>
                    </td>
                </tr>
                <tr>
                    <td class="docs-prop-name"><code>options</code></td>
                    <td class="docs-prop-details"><code class="docs-prop-type"><strong><a href="#IOptionPropsTarget" >IOptionProps</a>[]</strong><em class="docs-prop-default bp3-text-muted"></em></code>
                        <div class="docs-prop-description">
                            <div class="docs-section">
                                <div class="bp3-running-text">
                                    <p>Array of options to render in the group. This prop is mutually exclusive
                                        with <code>children</code>: either provide an array of <code>IOptionProps</code>
                                        objects or
                                        provide <code>&lt;Radio&gt;</code> children elements.</p>
                                </div>
                            </div>
                        </div>
                        <div class="docs-prop-tags"></div>
                    </td>
                </tr>
                <tr>
                    <td class="docs-prop-name"><code>selectedValue</code></td>
                    <td class="docs-prop-details"><code class="docs-prop-type"><strong>string | number</strong><em class="docs-prop-default bp3-text-muted"></em></code>
                        <div class="docs-prop-description">
                            <div class="docs-section">
                                <div class="bp3-running-text">
                                    <p>Value of the selected radio. The child with this value will be <code>:checked</code>.</p>
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

### IOptionProps
<div  class="docs-modifiers">
    <div class="docs-section">
        <div class="bp3-running-text">
            <p> IOptionProps for an option in a list, such as in a <code>&lt;select&gt;</code> or <code>RadioGroup</code>.
                These props can be spread directly to an <code>&lt;option&gt;</code> or <code>&lt;Radio&gt;</code>
                element.</p>
        </div>
    </div>
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
                    <td class="docs-prop-details"><code class="docs-prop-type"><strong>string</strong><em class="docs-prop-default bp3-text-muted"></em></code>
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
                    <td class="docs-prop-name"><code>disabled</code></td>
                    <td class="docs-prop-details"><code class="docs-prop-type"><strong>boolean</strong><em class="docs-prop-default bp3-text-muted"></em></code>
                        <div class="docs-prop-description">
                            <div class="docs-section">
                                <div class="bp3-running-text">
                                    <p>Whether this option is non-interactive.</p>
                                </div>
                            </div>
                        </div>
                        <div class="docs-prop-tags"></div>
                    </td>
                </tr>
                <tr>
                    <td class="docs-prop-name"><code>label</code></td>
                    <td class="docs-prop-details"><code class="docs-prop-type"><strong>string</strong><em class="docs-prop-default bp3-text-muted"></em></code>
                        <div class="docs-prop-description">
                            <div class="docs-section">
                                <div class="bp3-running-text">
                                    <p>Label text for this option. If omitted, <code>value</code> is used as the label.</p>
                                </div>
                            </div>
                        </div>
                        <div class="docs-prop-tags"></div>
                    </td>
                </tr>
                <tr id="IOptionPropsTarget">
                    <td class="docs-prop-name "><code>value <Icon @icon="small-tick" @intent="success"></Icon></code></td>
                    <td class="docs-prop-details"><code class="docs-prop-type"><strong>string | number</strong><em class="docs-prop-default bp3-text-muted"></em></code>
                        <div class="docs-prop-description">
                            <div class="docs-section">
                                <div class="bp3-running-text">
                                    <p>Value of this option.</p>
                                </div>
                            </div>
                        </div>
                        <div class="docs-prop-tags"><span class="bp3-tag bp3-intent-success bp3-minimal"><span class="bp3-text-overflow-ellipsis bp3-fill">Required</span></span></div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>