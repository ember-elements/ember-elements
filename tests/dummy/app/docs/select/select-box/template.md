# Select
<div class='bp3-running-text bp3-text-large'>
    <code> SelectBox</code> component which is used for choosing one of the item from a list. There are three types of
    select box <code>input box</code>,<code> button </code> and <code>link</code>.
</div>
{{#docs-demo as |demo|}}
{{#demo.example}}
{{! BEGIN-SNIPPET docs-example-basic-select-box.hbs }}

<div class="demo-container">
    <div class="docs-example-frame docs-example-frame-row" data-example-id="SelectExample">
        <div class="docs-example">
            <p>
                <SelectBox @data={{data}} @selected={{selected}} @placeholder='select'
                    @onSelect={{action 'optionSelected'   }}></SelectBox>
            </p>
            <p>
                <SelectBox @data={{data2}} @type='button' @selected={{selected2}} @placeholder='Select item'
                    @icon='select' @active=true @onSelect={{action 'optionSelected'   }}></SelectBox>
            </p>
            <p>
                <SelectBox @data={{data3}} @type='link' @placeholder='Select item' @selected={{selected3}}
                    @onSelect={{action 'optionSelected' }}></SelectBox>
            </p>
        </div>
    </div>
</div>

{{! END-SNIPPET }}

{{/demo.example}}
{{demo.snippet name='docs-example-basic-select-box.hbs'}}
{{demo.snippet label='component.ts' name='docs-example-basic-select-box.ts'}}
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
                <td class="docs-prop-name"><code>class</code></td>
                <td class="docs-prop-details"><code
                        class="docs-prop-type"><strong>string</strong><em class="docs-prop-default bp3-text-muted"></em></code>
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
                <td class="docs-prop-details"><code
                        class="docs-prop-type"><strong>string</strong><em class="docs-prop-default bp3-text-muted"></em></code>
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
                <td class="docs-prop-name"><code>data</code></td>
                <td class="docs-prop-details"><code
                        class="docs-prop-type"><strong>Array &lt;string&gt;</strong><em class="docs-prop-default bp3-text-muted"></em></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p>It is an array of string which contains options for select box</p>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <td class="docs-prop-name"><code>selected</code></td>
                <td class="docs-prop-details"><code
                        class="docs-prop-type"><strong>Array &lt;string&gt;</strong><em class="docs-prop-default bp3-text-muted"></em></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p>Set default selected options for select box</p>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <td class="docs-prop-name"><code>placeholder</code></td>
                <td class="docs-prop-details"><code
                        class="docs-prop-type"><strong>string</strong><em class="docs-prop-default bp3-text-muted"></em></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p>Placeholder text for select box</p>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <td class="docs-prop-name"><code>isDefaultOpen</code></td>
                <td class="docs-prop-details"><code
                        class="docs-prop-type"><strong>boolean</strong><em class="docs-prop-default bp3-text-muted"></em></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p>Whether select box popover open default </p>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <td class="docs-prop-name"><code>type</code></td>
                <td class="docs-prop-details"><code
                        class="docs-prop-type"><strong>string</strong><em class="docs-prop-default bp3-text-muted"></em></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p>select box open based on <code>button </code>, <code>link</code> or
                                    <code> input box </code> default
                                    type <code>input box</code></p>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <td class="docs-prop-name"><code>onSelect</code></td>
                <td class="docs-prop-details"><code
                        class="docs-prop-type"><strong>(value:string ,index: number) =&gt; void</strong><em class="docs-prop-default bp3-text-muted"></em></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p>Selected options with index returned.</p>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <td class="docs-prop-name"><code>minimal</code></td>
                <td class="docs-prop-details"><code
                        class="docs-prop-type"><strong>boolean</strong><em class="docs-prop-default bp3-text-muted"></em></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p>Whether this select button should use minimal styles.</p>
                            </div>
                        </div>
                    </div>
                    <div class="docs-prop-tags"></div>
                </td>
            </tr>
            <tr>
                <td class="docs-prop-name"><code>active</code></td>
                <td class="docs-prop-details"><code class="docs-prop-type"><strong>boolean</strong></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p>If set to <code>true</code>, the button will display in an active state.
                                    This is equivalent to setting <code>className='bp3-active'</code>.</p>
                            </div>
                        </div>
                    </div>
                    <div class="docs-prop-tags"></div>
                </td>
            </tr>
        </tbody>
    </table>
    <br>
    <div class="bp3-callout bp3-intent-primary ">
        <h4 class="bp3-heading">
            <Icon @icon='info-sign' @iconSize=18 /> select box additional features</h4>
        <p> <code> up & down </code> <strong> navigation Key </strong>: navigate within the suggest box.
            <code>enter </code> <strong> Key </strong>:select an item from suggest box.
        </p>
        NOTE: use up & down key to navigate suggest item and later enter to select.
    </div>

</div>