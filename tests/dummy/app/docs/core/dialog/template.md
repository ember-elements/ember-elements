# Dialog
<div class="bp3-running-text bp3-text-large">
Dialogs present content overlaid over other parts of the UI.
</div>
{{#docs-demo as |demo|}}
  {{#demo.example}}
    <div class="demo-container">
      <div
        class="docs-example-frame docs-example-frame-row"
        data-example-id="DialogExample"
      >
        <div class="docs-example">
          {{! BEGIN-SNIPPET docs-example-basic-dialog.hbs }}
          <Button @onClick={{action "onDialogToggle"}}>
            Show dialog
          </Button>
          <Dialog
            @isOpen={{isOpen}}
            @autoFocus={{autoFocus}}
            @enforceFocus={{enforceFocus}}
            @usePortal={{usePortal}}
            @canEscapeKeyClose={{canEscapeKeyClose}}
            @canOutsideClickClose={{canOutsideClickClose}}
            @onClose={{action "onClose"}}
            @icon="info-sign"
            @title="Palantir Foundry"
          >
            <div class="bp3-dialog-body">
              <p>
                <strong>
                  Data integration is the seminal problem of the digital age. For over ten years, 
                  we’ve helped the world’s premier organizations rise to the challenge.
                </strong>
              </p>
              <p>
                Palantir Foundry radically reimagines the way enterprises interact with data by amplifying and
                extending the power of data integration. With Foundry, anyone can source, fuse, and transform
                data into any shape they desire. Business analysts become data engineers — and leaders in their
                organization’s data revolution.
              </p>
              <p>
                Foundry’s back end includes a suite of best-in-class data integration capabilities: data
                provenance, git-style versioning semantics, granular access controls, branching, transformation
                authoring, and more. But these powers are not limited to the back-end IT shop.
              </p>
              <p>
                In Foundry, tables, applications, reports, presentations, and spreadsheets operate as data
                integrations in their own right. Access controls, transformation logic, and data quality flow
                from original data source to intermediate analysis to presentation in real time. Every end
                product created in Foundry becomes a new data source that other users can build upon. And the
                enterprise data foundation goes where the business drives it.
              </p>
              <p>
                Start the revolution. Unleash the power of data integration with Palantir Foundry.
              </p>
            </div>
            <div class="bp3-dialog-footer">
              <div class="bp3-dialog-footer-actions">
                <ToolTip
                  @content="This button is hooked up to close the dialog."
                >
                  <Button @onClick={{action "onClose"}}>
                    Close
                  </Button>
                </ToolTip>
                <AnchorButton @intent="primary">
                  Visit the Foundry website
                </AnchorButton>
              </div>
            </div>
          </Dialog>
          {{! END-SNIPPET }}
        </div>
        <div class="docs-example-options">
          <h5 class="bp3-heading">
            Props
          </h5>
          <Switch
            @defaultChecked="true"
            @onChange={{action "onPropsChangeEvent" "autoFoucs"}}
          >
            Auto focus
          </Switch>
          <Switch
            @defaultChecked="true"
            @onChange={{action "onPropsChangeEvent" "enforceFocus"}}
          >
            Enforce focus
          </Switch>
          <Switch
            @defaultChecked="true"
            @onChange={{action "onPropsChangeEvent" "usePortal"}}
          >
            Use
            <code class="bp3-code">
              Portal
            </code>
          </Switch>
          <Switch
            @defaultChecked="true"
            @onChange={{action "onPropsChangeEvent" "canOutsideClickClose"}}
          >
            Click outside to close
          </Switch>
          <Switch
            @defaultChecked="true"
            @onChange={{action "onPropsChangeEvent" "canEscapeKeyClose"}}
          >
            Escape key to close
          </Switch>
        </div>
      </div>
    </div>
  {{/demo.example}}
  {{demo.snippet name="docs-example-basic-dialog.hbs"}}
  {{demo.snippet label="component.ts" name="docs-example-basic-dialog.js"}}
  {{demo.snippet
    label="application.hbs"
    name="docs-example-basic-portal-destination-id.hbs"
  }}
{{/docs-demo}}

## Props
<div class="bp3-running-text bp3-text-large">
    <p><code>Dialog</code> is a stateless component controlled by the <code>isOpen</code> prop.</p>
    <p>The children you provide to this component are rendered as contents inside the
        <code>Classes.DIALOG</code> element. Typically, you will want to provide a child with
        <code>Classes.DIALOG_BODY</code> that contains the body content and a child with
        <code>Classes.DIALOG_FOOTER</code> that contains the action buttons.</p>
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
                    <td class="docs-prop-name"><code>autoFocus</code></td>
                    <td class="docs-prop-details"><code class="docs-prop-type"><strong>boolean</strong><em class="docs-prop-default bp3-text-muted">true</em></code>
                        <div class="docs-prop-description">
                            <div class="docs-section">
                                <div class="bp3-running-text">
                                    <p>Whether the overlay should acquire application focus when it first opens.</p>
                                </div>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td class="docs-prop-name"><code>backdropClassName</code></td>
                    <td class="docs-prop-details"><code class="docs-prop-type"><strong>string</strong><em class="docs-prop-default bp3-text-muted"></em></code>
                        <div class="docs-prop-description">
                            <div class="docs-section">
                                <div class="bp3-running-text">
                                    <p>CSS class names to apply to backdrop element.</p>
                                </div>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td class="docs-prop-name"><code>backdropProps</code></td>
                    <td class="docs-prop-details"><code class="docs-prop-type"><strong>HTMLProps&lt;HTMLDivElement&gt;</strong><em class="docs-prop-default bp3-text-muted"></em></code>
                        <div class="docs-prop-description">
                            <div class="docs-section">
                                <div class="bp3-running-text">
                                    <p>HTML props for the backdrop element.</p>
                                </div>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td class="docs-prop-name"><code>canEscapeKeyClose</code></td>
                    <td class="docs-prop-details"><code class="docs-prop-type"><strong>boolean</strong><em class="docs-prop-default bp3-text-muted">true</em></code>
                        <div class="docs-prop-description">
                            <div class="docs-section">
                                <div class="bp3-running-text">
                                    <p>Whether pressing the <code>esc</code> key should invoke <code>onClose</code>.</p>
                                </div>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td class="docs-prop-name"><code>canOutsideClickClose</code></td>
                    <td class="docs-prop-details"><code class="docs-prop-type"><strong>boolean</strong><em class="docs-prop-default bp3-text-muted">true</em></code>
                        <div class="docs-prop-description">
                            <div class="docs-section">
                                <div class="bp3-running-text">
                                    <p>Whether clicking outside the overlay element (either on backdrop when present or
                                        on document)
                                        should invoke <code>onClose</code>.</p>
                                </div>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td class="docs-prop-name"><code>className</code></td>
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
                    <td class="docs-prop-name"><code>enforceFocus</code></td>
                    <td class="docs-prop-details"><code class="docs-prop-type"><strong>boolean</strong><em class="docs-prop-default bp3-text-muted">true</em></code>
                        <div class="docs-prop-description">
                            <div class="docs-section">
                                <div class="bp3-running-text">
                                    <p>Whether the overlay should prevent focus from leaving itself. That is, if the
                                        user attempts
                                        to focus an element outside the overlay and this prop is enabled, then the
                                        overlay will
                                        immediately bring focus back to itself. If you are nesting overlay components,
                                        either disable
                                        this prop on the "outermost" overlays or mark the nested ones <code>usePortal={{false}}</code>.</p>
                                </div>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td class="docs-prop-name"><code>icon</code></td>
                    <td class="docs-prop-details"><code class="docs-prop-type"><strong>string</strong><em class="docs-prop-default bp3-text-muted">true</em></code>
                        <div class="docs-prop-description">
                            <div class="docs-section">
                                <div class="bp3-running-text">
                                    <p>Name of a UI icon (or an icon element) to render in the dialog's header. Note that the header will only be rendered if title is provided.</p>
                                </div>
                            </div>
                        </div>
                    </td>
                </tr>
                 <tr>
                    <td class="docs-prop-name"><code>isCloseButtonShown</code></td>
                    <td class="docs-prop-details"><code class="docs-prop-type"><strong>boolean</strong><em class="docs-prop-default bp3-text-muted">true</em></code>
                        <div class="docs-prop-description">
                            <div class="docs-section">
                                <div class="bp3-running-text">
                                    <p>Whether to show the close button in the dialog's header. Note that the header will only be rendered if title is provided.</p>
                                </div>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td class="docs-prop-name "><code>isOpen <Icon @icon="small-tick" @intent="success"></Icon></code></td>
                    <td class="docs-prop-details"><code class="docs-prop-type"><strong>boolean</strong><em class="docs-prop-default bp3-text-muted"></em></code>
                        <div class="docs-prop-description">
                            <div class="docs-section">
                                <div class="bp3-running-text">
                                    <p>Toggles the visibility of the overlay and its children.
                                        This prop is required because the component is controlled.</p>
                                </div>
                            </div>
                        </div>
                        <div class="docs-prop-tags"><span class="bp3-tag bp3-intent-success bp3-minimal"><span class="bp3-text-overflow-ellipsis bp3-fill">Required</span></span></div>
                    </td>
                </tr>
                <tr>
                    <td class="docs-prop-name"><code>lazy</code></td>
                    <td class="docs-prop-details"><code class="docs-prop-type"><strong>boolean</strong><em class="docs-prop-default bp3-text-muted">true</em></code>
                        <div class="docs-prop-description">
                            <div class="docs-section">
                                <div class="bp3-running-text">
                                    <p>If <code>true</code> and <code>usePortal={{true}}</code>, the <code>Portal</code>
                                        containing the children is created and attached
                                        to the DOM when the overlay is opened for the first time; otherwise this
                                        happens when the
                                        component mounts. Lazy mounting provides noticeable performance improvements if
                                        you have lots
                                        of overlays at once, such as on each row of a table.</p>
                                </div>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td class="docs-prop-name"><code>onClose</code></td>
                    <td class="docs-prop-details"><code class="docs-prop-type"><strong>(event?: &lt;HTMLElement&gt;) =&gt; void</strong><em class="docs-prop-default bp3-text-muted"></em></code>
                        <div class="docs-prop-description">
                            <div class="docs-section">
                                <div class="bp3-running-text">
                                    <p>A callback that is invoked when user interaction causes the overlay to close,
                                        such as
                                        clicking on the overlay or pressing the <code>esc</code> key (if enabled).</p>
                                    <p>Receives the event from the user's interaction, if there was an event (generally
                                        either a
                                        mouse or key event). Note that, since this component is controlled by the <code>isOpen</code>
                                        prop, it
                                        will not actually close itself until that prop becomes <code>false</code>.</p>
                                </div>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td class="docs-prop-name"><code>portalClassName</code></td>
                    <td class="docs-prop-details"><code class="docs-prop-type"><strong>string</strong><em class="docs-prop-default bp3-text-muted"></em></code>
                        <div class="docs-prop-description">
                            <div class="docs-section">
                                <div class="bp3-running-text">
                                    <p>Space-delimited string of class names applied to the <code>Portal</code> element
                                        if
                                        <code>usePortal={{true}}</code>.</p>
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
                                    <p>CSS styles to apply to the dialog.</p>
                                </div>
                            </div>
                        </div>
                    </td>
                </tr>
                 <tr>
                    <td class="docs-prop-name"><code>title</code></td>
                    <td class="docs-prop-details"><code class="docs-prop-type"><strong>HtmlElement</strong><em class="docs-prop-default bp3-text-muted"></em></code>
                        <div class="docs-prop-description">
                            <div class="docs-section">
                                <div class="bp3-running-text">
                                    <p>Title of the dialog. If provided, an element with <code>Classes.DIALOG_HEADER</code> will be rendered inside the dialog before any children elements.</p>
                                </div>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td class="docs-prop-name"><code>transitionName</code></td>
                    <td class="docs-prop-details"><code class="docs-prop-type"><strong>string</strong><em class="docs-prop-default bp3-text-muted">Classes.OVERLAY</em></code>
                        <div class="docs-prop-description">
                            <div class="docs-section">
                                <div class="bp3-running-text">
                                    <p>Name of the transition for internal <code>ember-css-transitions</code>.
                                        Providing your own name here will require defining new CSS transition
                                        properties.</p>
                                </div>
                            </div>
                        </div>
                        <div class="docs-prop-tags"></div>
                    </td>
                </tr>
                <tr>
                    <td class="docs-prop-name"><code>usePortal</code></td>
                    <td class="docs-prop-details"><code class="docs-prop-type"><strong>boolean</strong><em class="docs-prop-default bp3-text-muted">true</em></code>
                        <div class="docs-prop-description">
                            <div class="docs-section">
                                <div class="bp3-running-text">
                                    <p>Whether the overlay should be wrapped in a <code>Portal</code>, which renders
                                        its contents in a new
                                        element attached to <code>destinationElementId</code> prop.</p>
                                    <p>This prop essentially determines which element is covered by the backdrop: if
                                        <code>false</code>,
                                        then only its parent is covered; otherwise, the entire page is covered (because
                                        the parent
                                        of the <code>Portal</code> is the <code>&lt;div id='destination' /&gt;</code> itself).</p>
                                </div>
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>