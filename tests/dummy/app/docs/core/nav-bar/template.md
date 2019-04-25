# NavBar
<div class="bp3-running-text bp3-text-large">
    Navbars present useful navigation controls at the top of an application.
</div>
{{#docs-demo as |demo|}}
{{#demo.example}}
<div class="demo-container">
    <div class="docs-example-frame docs-example-frame-row" data-example-id="NavbarExample">
        <div class="docs-example">
            {{! BEGIN-SNIPPET docs-example-basic-nav-bar.hbs }}
            <NavBar>
                {{#nav-bar/group align=align }}
                   {{#nav-bar/heading}} ember-elements {{/nav-bar/heading}}
                   {{nav-bar/divider}}
                   <Button @class="bp3-minimal" @icon="home">Home</Button>
                   <Button @class="bp3-minimal" @icon="document">Document</Button>
                {{/nav-bar/group}}
            </NavBar>
            {{! END-SNIPPET }}
        </div>
        <div class="docs-example-options">
            <h5 class="bp3-heading">Props</h5>
            <div class="bp3-form-group">
                    <label class="bp3-control bp3-switch">
                        <input type="checkbox" onclick={{action 'onAlignNavBar'}}>
                        <span class="bp3-control-indicator"></span>
                    Align right
                    </label>
                </div>
            </div>
    </div>
</div>


{{/demo.example}}
{{demo.snippet name='docs-example-basic-nav-bar.hbs'}}
{{demo.snippet label='component.ts' name='docs-example-basic-nav-bar.js'}}
{{/docs-demo}}

## Fixed to viewport top
<div class="bp3-running-text bp3-text-large">
   <code>fixedToTop</code> prop make component as sticky behavior at Top of the Viewport. 
</div>

## Props
<div class="bp3-running-text bp3-text-large">
  <p><code>NavBar</code> includes four stateless components</p>
  <ul>
      <li><code>NavBar</code></li>
      <li><code>NavBarGroup</code> (aliased as <code>&#123;&#123;nav-bar/group}}</code>)</li>
      <li><code>NavBarHeading</code> (aliased as <code>&#123;&#123;nav-bar/heading}}</code>)</li>
      <li><code>NavBarDivider</code> (aliased as <code>&#123;&#123;nav-bar/divider}}</code>)</li>
  </ul>
</div>

### NavBar props
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
                <td class="docs-prop-name"><code>fixedToTop</code></td>
                <td class="docs-prop-details"><code class="docs-prop-type"><strong>boolean</strong><em class="docs-prop-default bp3-text-muted"></em></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p>Whether this navbar should be fixed to the top of the viewport (using CSS <code>position: fixed</code>).</p>
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
        </tbody>
    </table>
    <br>
</div>


### NavbarGroup Props
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
                <td class="docs-prop-name"><code>align</code></td>
                <td class="docs-prop-details"><code class="docs-prop-type"><strong>string</strong><em class="docs-prop-default bp3-text-muted">left</em></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p>The side of the navbar on which the group should appear.
                                    The <code>Alignment</code> enum provides constants for these values.("left","right","center") </p>
                            </div>
                        </div>
                    </div>
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
        </tbody>
    </table>
    <br>
</div>

### NavbarDivider Props
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
        </tbody>
    </table>
    <br>
</div>