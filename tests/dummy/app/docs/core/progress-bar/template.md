# Progress bar
<div class="bp3-running-text bp3-text-large">
  <p>
   Progress bars indicate progress towards the completion of a task or an indeterminate loading state.
  </p>
</div>
{{#docs-demo as |demo|}}
  {{#demo.example}}
    <div class="demo-container">
      <div
        class="docs-example-frame docs-example-frame-row"
        data-example-id="ProgressExample"
      >
        <div class="docs-example">
          {{! BEGIN-SNIPPET docs-example-basic-progress-bar-example.hbs }}
          <ProgressBar @intent={{intent}} @value={{value}} ></ProgressBar>
          {{! END-SNIPPET }}
        </div>
        <div class="docs-example-options">
          <h5 class="bp3-heading">
            Props
          </h5>
          <label class="bp3-label">
            Intent
            <HtmlSelect
              @options={{INTENT}}
              @onChange={{action "onChangeIntentValue"}}
             ></HtmlSelect>
          </label>
          <Switch @onChange={{action "onSwitchChange" "value"}}>
            Known value (0.0 - 1.0)
          </Switch>
          <NumericInput
            @disabled={{disabled}}
            @min={{0}}
            @max={{1}}
            @onValueChange={{action "onValueChange"}}
            @allowNumericCharactersOnly={{true}}
            @clampValueOnBlur={{true}}
            @stepSize={{0.10}}
           ></NumericInput>
        </div>
      </div>
    </div>
  {{/demo.example}}
  {{demo.snippet
    label="template.hbs"
    name="docs-example-basic-progress-bar-example.hbs"
  }}
  {{demo.snippet
    label="component.ts"
    name="docs-example-basic-progress-bar-example.ts"
  }}
{{/docs-demo}}

## Props 

<div class="bp3-running-text bp3-text-large"><p><code>ProgressBar</code> is a simple stateless component that renders the appropriate HTML
markup. It supports a <code>value</code> prop between 0 and 1 that determines the width of
the progress meter. Omitting <code>value</code> will result in an "indeterminate" progress
meter that fills the entire bar.</p>
</div>
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
                    <td class="docs-prop-name"><code>animate</code></td>
                    <td class="docs-prop-details"><code class="docs-prop-type"><strong>boolean</strong><em class="docs-prop-default bp3-text-muted">true</em></code>
                        <div class="docs-prop-description">
                            <div class="docs-section">
                                <div class="bp3-running-text">
                                    <p>Whether the background should animate.</p>
                                </div>
                            </div>
                        </div>
                        <div class="docs-prop-tags"></div>
                    </td>
                </tr>
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
                    <td class="docs-prop-name"><code>intent</code></td>
                    <td class="docs-prop-details"><code class="docs-prop-type"><strong>Intent</strong><em class="docs-prop-default bp3-text-muted"></em></code>
                        <div class="docs-prop-description">
                            <div class="docs-section">
                                <div class="bp3-running-text">
                                    <p>Visual intent color to apply to element.</p>
                                </div>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td class="docs-prop-name"><code>stripes</code></td>
                    <td class="docs-prop-details"><code class="docs-prop-type"><strong>boolean</strong><em class="docs-prop-default bp3-text-muted">true</em></code>
                        <div class="docs-prop-description">
                            <div class="docs-section">
                                <div class="bp3-running-text">
                                    <p>Whether the background should be striped.</p>
                                </div>
                            </div>
                        </div>
                        <div class="docs-prop-tags"></div>
                    </td>
                </tr>
                <tr>
                    <td class="docs-prop-name"><code>value</code></td>
                    <td class="docs-prop-details"><code class="docs-prop-type"><strong>number</strong><em class="docs-prop-default bp3-text-muted"></em></code>
                        <div class="docs-prop-description">
                            <div class="docs-section">
                                <div class="bp3-running-text">
                                    <p>A value between 0 and 1 (inclusive) representing how far along the operation is.
                                        Values below 0 or above 1 will be interpreted as 0 or 1, respectively.
                                        Omitting this prop will result in an "indeterminate" progress meter that fills
                                        the entire bar.</p>
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