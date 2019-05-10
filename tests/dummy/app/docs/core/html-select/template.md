# HTML select
<div class="bp3-running-text bp3-text-large">
  <code>
    HTMLSelect
  </code>
  component is similar to normal html
   <code>&lt;select&gt;</code>
  tags requires a wrapper element to customize the dropdown
        caret.
</div>
{{#docs-demo as |demo|}}
  {{#demo.example}}
    <div class="demo-container">
      <div
        class="docs-example-frame docs-example-frame-row"
        data-example-id="select"
      >
        <div class="docs-example">
          {{! BEGIN-SNIPPET docs-example-basic-select-demo.hbs }}
          <HtmlSelect
            @options={{OPTIONS}}
            @disabled={{disabled}}
            @fill={{fill}}
            @large={{large}}
            @minimal={{minimal}}
            @onChange={{action 'onChange'}}
           >
          </HtmlSelect>
          {{! END-SNIPPET }}
        </div>
        <div class="docs-example-options">
          <h5 class="bp3-heading">
            Props
          </h5>
        <Switch @onChange={{action "onPropsChange" "disabled"}} >Disabled</Switch>
        <Switch @onChange={{action "onPropsChange" "fill"}} >Fill</Switch>
        <Switch @onChange={{action "onPropsChange" "large"}}>Large</Switch>
        <Switch @onChange={{action "onPropsChange" "minimal"}} >Minimal</Switch>
      </div>
    </div>
    </div>
  {{/demo.example}}
  {{demo.snippet label="template.hbs" name="docs-example-basic-select-demo.hbs"
  }}
  {{demo.snippet label="component.ts" name="docs-example-basic-select-demo.ts"}}
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
            <td class="docs-prop-name"><code>disabled</code></td>
            <td class="docs-prop-details"><code class="docs-prop-type"><strong>boolean</strong><em class="docs-prop-default bp3-text-muted"></em></code>
                <div class="docs-prop-description">
                    <div class="docs-section">
                        <div class="bp3-running-text">
                            <p>Whether this element is non-interactive.</p>
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
                            <p>Whether this element should fill its container.</p>
                        </div>
                    </div>
                </div>
                <div class="docs-prop-tags"></div>
            </td>
        </tr>
      <tr>
        <td class="docs-prop-name">
          <code>
            iconProps
          </code>
        </td>
        <td class="docs-prop-details">
          <code class="docs-prop-type">
            <strong>
              <a {{action 'openIconProps'}}>object</a>
            </strong>
            <em class="docs-prop-default bp3-text-muted"></em>
          </code>
          <div class="docs-prop-description">
            <div class="docs-section">
              <div class="bp3-running-text">
                <p>
                Props to spread to the <code>&lt;Icon&gt;</code> element.
                </p>
              </div>
            </div>
          </div>
        </td>
      </tr>
    <tr>
        <td class="docs-prop-name"><code>large</code></td>
        <td class="docs-prop-details"><code class="docs-prop-type"><strong>boolean</strong><em class="docs-prop-default bp3-text-muted"></em></code>
            <div class="docs-prop-description">
                <div class="docs-section">
                    <div class="bp3-running-text">
                        <p>Whether to use large styles.</p>
                    </div>
                </div>
            </div>
            <div class="docs-prop-tags"></div>
        </td>
    </tr>
    <tr>
        <td class="docs-prop-name"><code>minimal</code></td>
        <td class="docs-prop-details"><code class="docs-prop-type"><strong>boolean</strong><em class="docs-prop-default bp3-text-muted"></em></code>
            <div class="docs-prop-description">
                <div class="docs-section">
                    <div class="bp3-running-text">
                        <p>Whether to use minimal styles.</p>
                    </div>
                </div>
            </div>
            <div class="docs-prop-tags"></div>
        </td>
    </tr>
    <tr>
        <td class="docs-prop-name"><code>multiple</code></td>
        <td class="docs-prop-details"><code class="docs-prop-type"><strong>never</strong><em class="docs-prop-default bp3-text-muted"></em></code>
            <div class="docs-prop-description">
                <div class="docs-section">
                    <div class="bp3-running-text">
                        <p>Multiple select is not supported.</p>
                    </div>
                </div>
            </div>
            <div class="docs-prop-tags"></div>
        </td>
    </tr>
    <tr>
        <td class="docs-prop-name"><code>onChange</code></td>
        <td class="docs-prop-details"><code class="docs-prop-type"><strong>HTMLSelectElement</strong><em class="docs-prop-default bp3-text-muted"></em></code>
            <div class="docs-prop-description">
                <div class="docs-section">
                    <div class="bp3-running-text">
                        <p>Change event handler. Use <code>event.currentTarget.value</code> to access the new value.</p>
                    </div>
                </div>
            </div>
            <div class="docs-prop-tags"></div>
        </td>
    </tr>
      <tr>
        <td class="docs-prop-name">
          <code>
            options
          </code>
        </td>
        <td class="docs-prop-details">
          <code class="docs-prop-type">
            <strong>
            Array&lt;string | number | <a {{action 'openOptionProps'}}>IOptionProps</a>&gt;
            </strong>
            <em class="docs-prop-default bp3-text-muted"></em>
          </code>
          <div class="docs-prop-description">
            <div class="docs-section">
              <div class="bp3-running-text">
                <p>
                Shorthand for supplying options: an array of basic types or { label?, value } objects. If no label is supplied, value
                will be used as the label.
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
<DbDrawer @isOpen={{isOpenIconDrawer}}  @autoFocus={{true}} @enforceFocus={{true}}
    @hasBackdrop={{true}}  @canOutsideClickClose={{true}}
    @canEscapeKeyClose={{true}} >
    {{#db-drawer/body}}
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
                    <td class="docs-prop-name"><code>style</code></td>
                    <td class="docs-prop-details"><code class="docs-prop-type"><strong>string</strong><em class="docs-prop-default bp3-text-muted"></em></code>
                        <div class="docs-prop-description">
                            <div class="docs-section">
                                <div class="bp3-running-text">
                                    <p>Inline html style to parent element.</p>
                                </div>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td class="docs-prop-name"><code>intent</code></td>
                    <td class="docs-prop-details"><code class="docs-prop-type"><strong>string</strong><em class="docs-prop-default bp3-text-muted">primary</em></code>
                        <div class="docs-prop-description">
                            <div class="docs-section">
                                <div class="bp3-running-text">
                                    <p>It changes the color of the icon to blue.</p>
                                </div>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td class="docs-prop-name"><code>intent</code></td>
                    <td class="docs-prop-details"><code class="docs-prop-type"><strong>string</strong><em class="docs-prop-default bp3-text-muted">success</em></code>
                        <div class="docs-prop-description">
                            <div class="docs-section">
                                <div class="bp3-running-text">
                                    <p> It changes the color of the icon to green, simbolises success.</p>
                                </div>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td class="docs-prop-name"><code>intent</code></td>
                    <td class="docs-prop-details"><code class="docs-prop-type"><strong>string</strong><em class="docs-prop-default bp3-text-muted">warning</em></code>
                        <div class="docs-prop-description">
                            <div class="docs-section">
                                <div class="bp3-running-text">
                                    <p> It changes the color of the icon to yellow, warning.</p>
                                </div>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td class="docs-prop-name"><code>intent</code></td>
                    <td class="docs-prop-details"><code class="docs-prop-type"><strong>string</strong><em class="docs-prop-default bp3-text-muted">danger</em></code>
                        <div class="docs-prop-description">
                            <div class="docs-section">
                                <div class="bp3-running-text">
                                    <p> It changes the color of the icon to red, danger.</p>
                                </div>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td class="docs-prop-name"><code>icon</code></td>
                    <td class="docs-prop-details"><code class="docs-prop-type"><strong><a href="/docs/icon/icons" id="ember1449" class="ember-view">IconName</a>  </strong><em class="docs-prop-default bp3-text-muted"></em></code>
                        <div class="docs-prop-description">
                            <div class="docs-section">
                                <div class="bp3-running-text">
                                    <p>Name of a Blueprint UI icon to render.</p>
                                </div>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td class="docs-prop-name"><code>iconSize</code></td>
                    <td class="docs-prop-details"><code class="docs-prop-type"><strong>number</strong><em class="docs-prop-default bp3-text-muted">16</em></code>
                        <div class="docs-prop-description">
                            <div class="docs-section">
                                <div class="bp3-running-text">
                                    <p>Size of the icon, in pixels. Blueprint contains 16px and 20px SVG icon images, and
                                        chooses the appropriate resolution based on this prop.</p>
                                </div>
                            </div>
                        </div>
                        <div class="docs-prop-tags"><span class="bp3-tag bp3-minimal">
                                <span class="bp3-text-overflow-ellipsis bp3-fill">
                                    Default icon size is 16</span>
                            </span>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td class="docs-prop-name"><code>title</code></td>
                    <td class="docs-prop-details"><code class="docs-prop-type"><strong>string </strong><em class="docs-prop-default bp3-text-muted"></em></code>
                        <div class="docs-prop-description">
                            <div class="docs-section">
                                <div class="bp3-running-text">
                                    <p>Description string. This string does not appear in normal browsers, but
                                        it increases accessibility. For instance, screen readers will use it for
                                        aural feedback. By default, this is set to the icon's name. </p>
                                </div>
                            </div>
                        </div>
                        <div class="docs-prop-tags"></div>
                    </td>
                </tr>
                <tr>
                    <td class="docs-prop-name"><code>color</code></td>
                    <td class="docs-prop-details"><code class="docs-prop-type"><strong>string</strong><em class="docs-prop-default bp3-text-muted"></em></code>
                        <div class="docs-prop-description">
                            <div class="docs-section">
                                <div class="bp3-running-text">
                                    <p>Color of icon. This is used as the <code>fill</code> attribute on the
                                        <code>&lt;svg&gt;</code>
                                        image
                                        so it will override any CSS <code>color</code> property, including that set by
                                        <code>intent</code>. If this prop is omitted, icon color is inherited from
                                        surrounding text.</p>
                                </div>
                            </div>
                        </div>
                        <div class="docs-prop-tags"></div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    {{/db-drawer/body}}
</DbDrawer>
<DbDrawer @isOpen={{isOpenOptionDrawer}} @autoFocus={{true}} @enforceFocus={{true}} @hasBackdrop={{true}}
    @canOutsideClickClose={{true}} @canEscapeKeyClose={{true}}>
    {{#db-drawer/body}}
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
                <td class="docs-prop-name "><code>value </code></td>
                <td class="docs-prop-details"><code class="docs-prop-type"><strong>string | number</strong><em class="docs-prop-default bp3-text-muted"></em></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p>Value of this option.</p>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>
    {{/db-drawer/body}}
</DbDrawer>