# File input
<div class="bp3-running-text bp3-text-large"></div>
{{#docs-demo as |demo|}}
  {{#demo.example}}
    <div class="demo-container">
      <div
        class="docs-example-frame docs-example-frame-row"
        data-example-id="file-input"
      >
        <div class="docs-example">
          {{! BEGIN-SNIPPET docs-example-basic-file-input-example.hbs }}
          <FileInput
            @disabled={{this.disabled}}
            @large={{large}}
            @fill={{fill}}
            @hasSelection={{hasSelection}}
          >
            Choose file..
          </FileInput>
          {{! END-SNIPPET }}
        </div>
        <div class="docs-example-options">
          <h5 class="bp3-heading">
            Props
          </h5>
          <Switch  @onChange={{action "onSwitchChange" "disabled"}}>
            Disabled
          </Switch>
          <Switch  @onChange={{action "onSwitchChange" "large"}}>
            Large
          </Switch>
          <Switch  @onChange={{action "onSwitchChange" "fill"}}>
            Fill
          </Switch>
          <Switch  @onChange={{action "onSwitchChange" "hasSelection"}}>
            HasSelection
          </Switch>
        </div>
      </div>
    </div>
  {{/demo.example}}
  {{demo.snippet
    label="template.hbs"
    name="docs-example-basic-file-input-example.hbs"
  }}
  {{demo.snippet
    label="component.ts"
    name="docs-example-basic-file-input-example.ts"
  }}
{{/docs-demo}}

## Props
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
                <td class="docs-prop-name"><code>disabled</code></td>
                <td class="docs-prop-details"><code class="docs-prop-type"><strong>boolean</strong><em class="docs-prop-default bp3-text-muted"></em></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p>Whether the file input is non-interactive.
                                    Setting this to <code>true</code> will automatically disable the child input too.</p>
                            </div>
                        </div>
                    </div>
                    <div class="docs-prop-tags"></div>
                </td>
            </tr>
            <tr>
                <td class="docs-prop-name"><code>fill</code></td>
                <td class="docs-prop-details"><code class="docs-prop-type"><strong>boolean</strong><em class="docs-prop-default bp3-text-muted"></em></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p>Whether the file input should take up the full width of its container.</p>
                            </div>
                        </div>
                    </div>
                    <div class="docs-prop-tags"></div>
                </td>
            </tr>
            <tr>
                <td class="docs-prop-name"><code>hasSelection</code></td>
                <td class="docs-prop-details"><code class="docs-prop-type"><strong>boolean</strong><em class="docs-prop-default bp3-text-muted">false</em></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p>Whether the user has made a selection in the input. This will affect the component's
                                    text styling. Make sure to set a non-empty value for the text prop as well.</p>
                            </div>
                        </div>
                    </div>
                    <div class="docs-prop-tags"></div>
                </td>
            </tr>
            <tr>
                <td class="docs-prop-name"><code>inputProps</code></td>
                <td class="docs-prop-details"><code class="docs-prop-type">object<em class="docs-prop-default bp3-text-muted"></em></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p>The props to pass to the child input.
                                    <code>disabled</code> will be ignored in favor of the top-level prop.
                                    <code>type</code> will be ignored, because the input <em>must</em> be <code>type="file"</code>.
<code>class</code>,<code>style</code>,<code>autofocus</code>,<code>name</code>,<code>readonly</code>,<code>required</code>,<code>tabIndex</code>,<code>fileInputId</code>, <code>disabled</code> these keys are common for inputProps object.
</p>
                            </div>
                        </div>
                    </div>
                    <div class="docs-prop-tags"></div>
                </td>
            </tr>
            <tr>
                <td class="docs-prop-name"><code>large</code></td>
                <td class="docs-prop-details"><code class="docs-prop-type"><strong>boolean</strong><em class="docs-prop-default bp3-text-muted"></em></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p>Whether the file input should appear with large styling.</p>
                            </div>
                        </div>
                    </div>
                    <div class="docs-prop-tags"></div>
                </td>
            </tr>
            <tr>
                <td class="docs-prop-name"><code>onInputChange</code></td>
                <td class="docs-prop-details"><code class="docs-prop-type"><strong>HTMLInputElement</strong><em class="docs-prop-default bp3-text-muted"></em></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p>Callback invoked on <code>&lt;input&gt;</code> <code>change</code> events.</p>
                            </div>
                        </div>
                    </div>
                    <div class="docs-prop-tags"></div>
                </td>
            </tr>
            <tr>
                <td class="docs-prop-name"><code>text</code></td>
                <td class="docs-prop-details"><code class="docs-prop-type"><strong>HtmlElement</strong><em class="docs-prop-default bp3-text-muted">"Choose file..."</em></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p>The text to display.</p>
                            </div>
                        </div>
                    </div>
                    <div class="docs-prop-tags"></div>
                </td>
            </tr>
        </tbody>
    </table>
</div>