# Overlay
<div class="bp3-running-text bp3-text-large">
    <p><code>Overlay</code> is a generic low-level component for rendering content <em>on top of</em> its
        siblings, or above the entire application.</p>
    <p>It combines a <code>Portal</code>, which allows components to
        be rendered at a different place in the DOM tree, with a
       <a href="https://www.npmjs.com/package/ember-css-transitions"> <code>ember-css-transitions</code> </a> to support
        elegant enter and leave transitions.</p>
    <p>An optional "backdrop" can be rendered behind the overlaid children to
        provide modal behavior, whereby the overlay prevents interaction with anything
        behind it.</p>
    <p><code>Overlay</code> is the backbone of all the components listed in the <strong>Overlays</strong> group
        in the sidebar. Using <code>Overlay</code> directly should be rare in your app; it should
        only be necessary if no existing component meets your needs.</p>
</div>
{{#docs-demo as |demo|}}
  {{#demo.example}}
    <div class="demo-container">
      <div
        class="docs-example-frame docs-example-frame-row"
        data-example-id="OverlayExample"
      >
        <div class="docs-example">
          {{! BEGIN-SNIPPET docs-example-basic-overlay.hbs }}
          <Button @onClick={{action "onOverlayToggle"}} @primary="true">
            Show overlay
          </Button>
          <Overlay
            @className="bp3-overlay-scroll-container"
            @isOpen={{isOpen}}
            @autoFocus={{autoFocus}}
            @enforceFocus={{enforceFocus}}
            @hasBackdrop={{hasBackdrop}}
            @usePortal={{usePortal}}
            @canEscapeKeyClose={{canEscapeKeyClose}}
            @canOutsideClickClose={{canOutsideClickClose}}
            @containerClassName="bp3-card bp3-elevation-4 docs-overlay-example-transition {{if useTallContent "docs-overlay-example-tall"}}"
            @onClose={{action "onClose"}}
          >
            <div>
              <h3 class="bp3-heading">
                I'm an Overlay!
              </h3>
              <p>
                This is a simple container with some inline styles to position it on the screen. Its CSS
                    transitions are customized for this example only to demonstrate how easily custom
                    transitions can be implemented.
              </p>
              <p>
                Click the "Focus button" below to transfer focus to the "Show overlay" trigger button
                    outside of this overlay. If persistent focus is enabled, focus will be constrained to the
                    overlay. Use the
                <code class="bp3-code">
                  tab
                </code>
                key to move to the next focusable element to illustrate
                    this effect.
              </p>
              <p>
                Click the "Make me scroll" button below to make this overlay's content really tall, which
                    will make the overlay's container (but not the page) scrollable
              </p>
              <br />
              <div class="bp3-dialog-footer-actions">
                <Button @intent="danger" @onClick={{action "handleClose"}}>
                  Close
                </Button>
                <Button @onClick={{action "focusButton"}} @class="focus-button">
                  Focus button
                </Button>
                <Button
                  @onClick={{action "toggleScrollButton"}}
                  @icon="double-chevron-down"
                  @rightIcon="double-chevron-down"
                  @active={{useTallContent}}
                >
                  Make me scroll
                </Button>
              </div>
            </div>
          </Overlay>
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
          <Switch
            @defaultChecked="true"
            @onChange={{action "onPropsChangeEvent" "hasBackdrop"}}
          >
            Has backdrop
          </Switch>
        </div>
      </div>
    </div>
  {{/demo.example}}
  {{demo.snippet name="docs-example-basic-overlay.hbs"}}
  {{demo.snippet label="component.ts" name="docs-example-basic-overlay.js"}}
  {{demo.snippet label="application.hbs" name="docs-example-basic-portal-destination-id.hbs"}}
  
{{/docs-demo}}

## Scroll support
<div class="bp3-running-text bp3-text-large">
    <p>Overlays rely heavily on fixed and absolute positioning. By default, an overlay
        larger than the viewport will not be scrollable, so any overflowing content will
        be hidden. Fortunately, making an overlay scrollable is very easy: simply pass
        <code>Classes.OVERLAY_SCROLL_CONTAINER</code> as the Overlay <code>className</code>, and we'll take
        care of the rest.</p>
    <pre class="editor editor-colors"><div class="line"><span class="source tsx"><span class="meta tag tsx"><span class="punctuation definition tag begin tsx"><span>&lt;</span></span><span class="entity name tag tsx"><span class="support class component tsx"><span>Overlay</span></span></span><span class="meta tag attributes tsx"><span>&nbsp;</span><span class="entity other attribute-name tsx"><span>@className</span></span><span class="keyword operator assignment tsx"><span>=</span></span><span class="meta embedded expression tsx"><span class="punctuation section embedded begin tsx"><span>{</span><span>{</span></span><span class="variable other object tsx"><span>Classes</span></span><span class="punctuation accessor tsx"><span>.</span></span><span class="variable other constant property tsx"><span>OVERLAY_SCROLL_CONTAINER</span></span><span class="punctuation section embedded end tsx"><span>}</span><span>}</span></span></span><span>&nbsp;</span><span class="invalid illegal attribute tsx"><span>...</span></span><span>&nbsp;</span></span><span class="punctuation definition tag end tsx"><span>/&gt;</span></span></span></span></div></pre>
    <p>The <code>Dialog</code> component applies this CSS class automatically.</p>
</div>

## Props
<div class="bp3-running-text bp3-text-large">
    <p><code>Overlay</code> is a controlled component that renders its children only when
        <code>isOpen={{true}}</code>. The optional backdrop element will be inserted before the
        children if <code>hasBackdrop={{true}}</code>.</p>
    <p>The <code>onClose</code> callback prop is invoked when user interaction causes the overlay
        to close, but your application is responsible for updating the state that
        actually closes the overlay.</p>
    <Callout @title="<h4 class='bp3-heading'>A note about overlay content positioning</h4>" @icon="info-sign" @intent="primary">
     <p>When rendered inline, content will automatically be set to <code>position: absolute</code> to respect
            document flow. Otherwise, content will be set to <code>position: fixed</code> to cover the entire viewport.</p>
    </Callout>
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
                    <td class="docs-prop-name"><code>hasBackdrop</code></td>
                    <td class="docs-prop-details"><code class="docs-prop-type"><strong>boolean</strong><em class="docs-prop-default bp3-text-muted">true</em></code>
                        <div class="docs-prop-description">
                            <div class="docs-section">
                                <div class="bp3-running-text">
                                    <p>Whether a container-spanning backdrop element should be rendered behind the
                                        contents.</p>
                                </div>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td class="docs-prop-name docs-prop-is-required"><code>isOpen</code></td>
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