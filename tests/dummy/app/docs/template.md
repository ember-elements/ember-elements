{{#docs-viewer as |viewer|}}
{{#viewer.nav as |nav|}}
<li class="mt-8"></li>

{{nav.section 'Introduction'  style='large' }}
{{nav.item 'Quickstart' 'docs.introduction.quickstart'}}
{{!-- {{nav.item 'Overview' 'docs.introduction.overview'}} --}}

<li class="mt-8"></li>


{{nav.section 'Core' style='large'}}
{{!-- {{nav.item 'Accessibility' 'docs.accessibility' }} --}}
<div class="subnav-section">
    {{nav.section 'COMPONENTS' style='large'}}
</div>
{{#nav.subnav as |nav|}}
    {{nav.item 'Button' 'docs.core.button'}}
    {{nav.item 'Button Group' 'docs.core.button-group'}}
    {{nav.item 'Card' 'docs.core.card'}}
    {{nav.item 'Icon' 'docs.core.icon'}}
    {{nav.item 'Overflow List' 'docs.core.overflowList'}}
    {{nav.item 'NavBar' 'docs.core.nav-bar'}}
    {{nav.item 'Panel Stack' 'docs.core.panel-stack'}}
    {{nav.item 'Resize Sensor' 'docs.core.resizesensor'}}
    {{nav.item 'Tag' 'docs.core.tag'}}
    {{nav.item 'Tabs' 'docs.core.tabs'}}
    {{nav.item 'Tree' 'docs.core.db-tree'}}
{{/nav.subnav}}
<div class="subnav-section">
    {{nav.section 'FORM CONTROLS' style='large'}}
</div>
{{#nav.subnav as |nav|}}
    {{nav.item 'Form Group' 'docs.core.form-group'}}
    <span class="bp3-tag bp3-intent-success bp3-minimal docs-nav-tag float-right">
    <span class="bp3-text-overflow-ellipsis bp3-fill">new  </span>
    </span>
    {{nav.item 'Checkbox' 'docs.core.check-box'}}
      <span class="bp3-tag bp3-intent-success bp3-minimal docs-nav-tag float-right">
    <span class="bp3-text-overflow-ellipsis bp3-fill">new  </span>
    </span>
    {{nav.item 'Radio' 'docs.core.radio'}}
    {{nav.item 'HTML select' 'docs.core.html-select'}}
    <span class="bp3-tag bp3-intent-success bp3-minimal docs-nav-tag float-right">
    <span class="bp3-text-overflow-ellipsis bp3-fill">new  </span>
    </span>
    {{nav.item 'Control Group' 'docs.core.control-group'}}
    <span class="bp3-tag bp3-intent-success bp3-minimal docs-nav-tag float-right">
    <span class="bp3-text-overflow-ellipsis bp3-fill">new  </span>
    </span>
    {{nav.item 'Switch' 'docs.core.switch'}} 
{{/nav.subnav}}

<div class="subnav-section">
    {{nav.section 'FORM INPUTS' style='large'}}
</div>
{{#nav.subnav as |nav|}}
    {{nav.item 'File Input' 'docs.core.file-input'}}
    {{nav.item 'Input Group' 'docs.core.input-group'}}
    {{nav.item 'Numeric input' 'docs.core.numeric-input'}}
    {{nav.item 'Tag Input' 'docs.core.tag-input'}}
{{/nav.subnav}}
<div class="subnav-section">
    {{nav.section 'OVERLAYS' style='large'}}
</div>
{{#nav.subnav as |nav|}}
    {{nav.item 'Dialog' 'docs.core.dialog'}}
    {{nav.item 'Drawer' 'docs.core.drawer'}}
    {{nav.item 'Pop Over' 'docs.core.pop-over'}}
    {{nav.item 'Tooltip' 'docs.core.tooltip'}}
{{/nav.subnav}}



<li class="mt-8"></li>
{{nav.section 'DateTime' style='large'}}
{{nav.item 'Date Picker' 'docs.date.date-picker'}}
{{nav.item 'Date Range Picker' 'docs.date.date-range-picker'}}

<li class="mt-8"></li>
{{nav.section 'Icons' style='large'}}
{{nav.item 'Icons' 'docs.icon.icons'}}


<li class="mt-8"></li>
{{nav.section 'Select' style='large'}}
{{nav.item 'Select' 'docs.select.select'}}
{{nav.item 'Multi-Select' 'docs.select.multi-select'}}

<li class="mt-8"></li>
{{!-- {{nav.section 'Table' style='large'}} --}}
{{!-- <li class="docs-mt-2 docs-ml-4 docs-mb-1 docs-flex docs-items-center docs-text-sm">
<a href="https://dunkinbase.github.io/ember-elements-table/versions/master/scenarios/performance"  class="docs-text-grey-darker docs-no-underline hover:docs-underline ember-view">      Table
</a>
</li> --}}
{{/viewer.nav}}

{{#viewer.main}}
    <Render>
       {{outlet}}
    </Render>
{{/viewer.main}}

{{/docs-viewer}}