# Tabs
<div class="bp3-running-text bp3-text-large">
Tabs is the top-level component responsible for rendering the tab list and coordinating selection. It can be used in
controlled mode by providing <code>selectedTabIndex</code> and <code>onChange</code> props, or in uncontrolled mode by optionally providing
default <code>SelectedTabIndex</code> and <code>onChange</code>.

</div>
{{#docs-demo as |demo|}}
{{#demo.example}}
<div class="demo-container">
    <div class="docs-example-frame docs-example-frame-row" data-example-id="TabsExample">
        <div class="docs-example">
        <NavBar>
         {{#nav-bar/group align="left" }}
            {{#nav-bar/heading}} Current page: <strong>{{heading}}</strong> {{/nav-bar/heading}}
         {{/nav-bar/group}}
          {{#nav-bar/group align="right" }}
            <Tabs 
         @animate=true 
         @large=true  @style="height:32px"
         @onChange={{action "onChange" }}
          as |T|>
            <T.tab @title="Home"/>
            <T.tab @title="Files"/>
            <T.tab @title="Builds"/>
        </Tabs>
         {{/nav-bar/group}}
        </NavBar>
            {{! BEGIN-SNIPPET docs-example-basic-tabs.hbs }}
        <Tabs 
         @animate={{animate}} 
         @vertical={{vertical}} 
         @renderActiveTabPanelOnly={{renderActiveTabPanelOnly}} as |T|>
            <T.tab @title="Ember">
                <div>
                    <h3 class="bp3-heading">Example panel: Ember</h3>
                    <p class="bp3-running-text">Ember.js is an open-source JavaScript application framework, based on the
                        model-view-controller (MVC) pattern. It allows developers to create scalable single-page web applications by
                        incorporating common idioms and best practices into the framework. What is your favorite JS framework?</p><input
                        class="bp3-input" type="text">
                </div>
            </T.tab>
            <T.tab @title="Angular">
            <div>
                <h3 class="bp3-heading">Example panel: Angular</h3>
                <p class="bp3-running-text">HTML is great for declaring static documents, but it falters when we try to use it for
                    declaring dynamic views in web-applications. AngularJS lets you extend HTML vocabulary for your application.
                    The resulting environment is extraordinarily expressive, readable, and quick to develop.</p>
            </div>
            </T.tab>
            <T.tab @title="React">
            <div>
                <h3 class="bp3-heading">Example panel: React</h3>
                <p class="bp3-running-text">Lots of people use React as the V in MVC. Since React makes no assumptions about the
                    rest of your technology stack, it's easy to try it out on a small feature in an existing project.</p>
            </div>
            </T.tab>
            <T.tab @title="Backbone" @disabled=true>
                Backbone
            </T.tab>
            <T.expander></T.expander>
            <T.content>
             <InputGroup @fill=true @type="text" @placeholder="Search..." ></InputGroup>
            </T.content>
        </Tabs>
            {{! END-SNIPPET }}
        </div>
        <div class="docs-example-options">
            <h5 class="bp3-heading">Props</h5>
            <div class="bp3-form-group">
                    <label class="bp3-control bp3-switch">
                        <input type="checkbox" onclick={{action 'onAnimate'}}>
                        <span class="bp3-control-indicator"></span>
                        Animate indicator
                    </label>
                    <label class="bp3-control bp3-switch">
                        <input type="checkbox" onclick={{action 'onVertical'}}>
                        <span class="bp3-control-indicator"></span>
                        Use vertical tabs
                    </label>
                    <label class="bp3-control bp3-switch">
                        <input type="checkbox" onclick={{action 'onActivePanel'}}>
                        <span class="bp3-control-indicator"></span>
                        Render active tab only
                    </label>
                </div>
            </div>
        </div>
</div>


{{/demo.example}}
{{demo.snippet name='docs-example-basic-tabs.hbs'}}
{{demo.snippet label='component.ts' name='docs-example-basic-tabs.js'}}
{{/docs-demo}}

## Tabs

<div class="bp3-running-text bp3-text-large">
<p>The <code>Tabs</code> rendered in order in the tab list, which is a flex container. <code>Tab</code> sub components  are managed by the main component (<code>Tabs</code>); clicking one will change selection. Arbitrary other children are simply rendered in order; interactions are your responsibility.
Here we avoid manual <code>ID</code>  generation of each <code>tab</code>. We know that ember component is generating unique <code>ID</code>. 
</p>
<p>
The <code>panel</code> prop is removed from <code>Tab</code> and replaced with <code>yield</code> option for component 
   manipulation. You are able to render <code>Tab</code> contents with help of <code>yield</code> 
</p>
<p>
Removed <code>children</code> option from <code>Tab</code> . (children:  rendered in a list above the active panel. Can also be set via the title prop.). The <code>yield</code> option is already occupied for <code>panel</code> prop. So we requesting you to use <code>@title</code> prop instead of <code>children</code>. The <code>title</code> supports <code>text</code> along with <code>htmlElments</code> in the form of string.      
</p>
</div>


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
        <td class="docs-prop-name"><code>defaultSelectedTabIndex</code></td>
        <td class="docs-prop-details"><code class="docs-prop-type"><strong>number</strong><em class="docs-prop-default bp3-text-muted">1</em></code>
          <div class="docs-prop-description">
            <div class="docs-section">
              <div class="bp3-running-text">
                <p>Initial selected tab <code>index</code>, for uncontrolled usage.
                  Note that this prop refers only to <code>&lt;Tab&gt;</code> children; other types of elements are
                  ignored. It accept numeric value from 1 to ..n tab</p>
              </div>
            </div>
          </div>
          <div class="docs-prop-tags"></div>
        </td>
      </tr>
      <tr>
        <td class="docs-prop-name"><code>large</code></td>
        <td class="docs-prop-details"><code class="docs-prop-type"><strong>boolean</strong><em class="docs-prop-default bp3-text-muted">false</em></code>
          <div class="docs-prop-description">
            <div class="docs-section">
              <div class="bp3-running-text">
                <p>If set to <code>true</code>, the tab titles will display with larger styling.
                  This will apply large styles only to the tabs at this level, not to nested tabs.</p>
              </div>
            </div>
          </div>
          <div class="docs-prop-tags"></div>
        </td>
      </tr>
      <tr>
        <td class="docs-prop-name"><code>onChange</code></td>
        <td class="docs-prop-details"><code class="docs-prop-type"><strong>(newTabIndex: number, prevTabIndex: number, event: MouseEvent) =&gt; void</strong></code>
          <div class="docs-prop-description">
            <div class="docs-section">
              <div class="bp3-running-text">
                <p>A callback function that is invoked when a tab in the tab list is clicked.</p>
              </div>
            </div>
          </div>
          <div class="docs-prop-tags"></div>
        </td>
      </tr>
      <tr>
        <td class="docs-prop-name"><code>renderActiveTabPanelOnly</code></td>
        <td class="docs-prop-details"><code class="docs-prop-type"><strong>boolean</strong><em class="docs-prop-default bp3-text-muted">false</em></code>
          <div class="docs-prop-description">
            <div class="docs-section">
              <div class="bp3-running-text">
                <p>Whether inactive tab panels contents should be removed from the DOM and unmounted .
                  This can be a performance enhancement when rendering many complex panels, but requires
                  careful support for unmounting and remounting.</p>
              </div>
            </div>
          </div>
          <div class="docs-prop-tags"></div>
        </td>
      </tr>
      <tr>
        <td class="docs-prop-name"><code>selectedTabIndex</code></td>
        <td class="docs-prop-details"><code class="docs-prop-type"><strong>number</strong><em class="docs-prop-default bp3-text-muted"></em></code>
          <div class="docs-prop-description">
            <div class="docs-section">
              <div class="bp3-running-text">
                <p>Selected tab <code>index</code>, for controlled usage.
                  Providing this prop will put the component in controlled mode.
                  Unknown index will result in first tab selection (no errors).</p>
              </div>
            </div>
          </div>
          <div class="docs-prop-tags"></div>
        </td>
      </tr>
      <tr>
        <td class="docs-prop-name"><code>vertical</code></td>
        <td class="docs-prop-details"><code class="docs-prop-type"><strong>boolean</strong><em class="docs-prop-default bp3-text-muted">false</em></code>
          <div class="docs-prop-description">
            <div class="docs-section">
              <div class="bp3-running-text">
                <p>Whether to show tabs stacked vertically on the left side.</p>
              </div>
            </div>
          </div>
          <div class="docs-prop-tags"></div>
        </td>
      </tr>
    </tbody>
  </table>
  <br>
</div>

## Tab

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
        <td class="docs-prop-name"><code>disabled</code></td>
        <td class="docs-prop-details"><code class="docs-prop-type"><strong>boolean</strong><em class="docs-prop-default bp3-text-muted">false</em></code>
          <div class="docs-prop-description">
            <div class="docs-section">
              <div class="bp3-running-text">
                <p>Whether the tab is disabled.</p>
              </div>
            </div>
          </div>
          <div class="docs-prop-tags"></div>
        </td>
      </tr>
      <tr>
        <td class="docs-prop-name"><code>titleClassName</code></td>
        <td class="docs-prop-details"><code class="docs-prop-type"><strong>string</strong><em class="docs-prop-default bp3-text-muted"></em></code>
          <div class="docs-prop-description">
            <div class="docs-section">
              <div class="bp3-running-text">
                <p>Space-delimited string of class names applied to title tab container.</p>
              </div>
            </div>
          </div>
          <div class="docs-prop-tags"></div>
        </td>
      </tr>
      <tr>
        <td class="docs-prop-name"><code>title</code></td>
        <td class="docs-prop-details"><code class="docs-prop-type"><strong>string | Html element</strong><em class="docs-prop-default bp3-text-muted"></em></code>
          <div class="docs-prop-description">
            <div class="docs-section">
              <div class="bp3-running-text">
                <p>Content of tab title element, rendered in a list above the active panel.
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