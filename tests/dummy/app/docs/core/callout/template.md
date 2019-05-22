# Callout
<div class="bp3-running-text bp3-text-large">
<p>Callouts visually highlight important content for the user. They can contain
a title, an icon and content. Each intent has a default icon associated with it.</p>
</div>
{{#docs-demo as |demo|}}
  {{#demo.example}}
    <div class="demo-container">
      <div
        class="docs-example-frame docs-example-frame-row"
        data-example-id="CalloutExample"
      >
        <div class="docs-example">
          {{! BEGIN-SNIPPET docs-example-basic-callout-example.hbs }}
          <Callout @title={{title}} @icon={{this.icon}} @intent={{intent}}>
            The component is a simple wrapper around the CSS API
            that provides props for modifiers and optional
            title element. Any additional HTML props will be spread to the rendered
            <code class="bp3-code">&lt;div&gt;</code>
            element.
          </Callout>
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
          <Switch @onChange={{action "onSwitchChange" "icon"}}>
            Icon
          </Switch>
          <h5 class="bp3-heading">
            Example
          </h5>
          <Switch
            @defaultChecked={{true}}
            @onChange={{action "onSwitchChange" "isShowHeader"}}
          >
            Show header
          </Switch>
        </div>
      </div>
    </div>
  {{/demo.example}}
  {{demo.snippet
    label="template.hbs"
    name="docs-example-basic-callout-example.hbs"
  }}
  {{demo.snippet
    label="component.ts"
    name="docs-example-basic-callout-example.ts"
  }}
{{/docs-demo}}

## Props
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
                    <td class="docs-prop-name"><code>icon</code></td>
                    <td class="docs-prop-details"><code class="docs-prop-type"><strong>string</strong><em class="docs-prop-default bp3-text-muted"></em></code>
                        <div class="docs-prop-description">
                            <div class="docs-section">
                                <div class="bp3-running-text">
                                    <p>Name of a UI icon name to render on the left side.</p>
                                    <p>If this prop is omitted or <code>undefined</code>, the <code>intent</code> prop
                                        will determine a default icon.
                                        If this prop is explicitly <code>null</code>, no icon will be displayed
                                        (regardless of <code>intent</code>).</p>
                                </div>
                            </div>
                        </div>
                        <div class="docs-prop-tags"></div>
                    </td>
                </tr>
                <tr>
                    <td class="docs-prop-name"><code>intent</code></td>
                    <td class="docs-prop-details"><code class="docs-prop-type"><strong>string</strong><em class="docs-prop-default bp3-text-muted"></em></code>
                        <div class="docs-prop-description">
                            <div class="docs-section">
                                <div class="bp3-running-text">
                                    <p>Visual intent color to apply to background, title, and icon.</p>
                                    <p>Defining this prop also applies a default icon, if the <code>icon</code> prop is
                                        omitted.</p>
                                </div>
                            </div>
                        </div>
                        <div class="docs-prop-tags"></div>
                    </td>
                </tr>
                <tr>
                    <td class="docs-prop-name"><code>title</code></td>
                    <td class="docs-prop-details"><code class="docs-prop-type"><strong>string</strong><em class="docs-prop-default bp3-text-muted"></em></code>
                        <div class="docs-prop-description">
                            <div class="docs-section">
                                <div class="bp3-running-text">
                                    <p>String content of optional title element.</p>
                                    <p>Due to a conflict with the HTML prop types, to provide html element content simply
                                        pass <code>&lt;h4&gt;title content&lt;/h4&gt;</code> as first <code>children</code>
                                        element instead of
                                        using this prop.</p>
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