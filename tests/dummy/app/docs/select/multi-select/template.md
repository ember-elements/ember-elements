# MultiSelect
<div class='bp3-running-text bp3-text-large'>
    The <code>MultiSelect</code> addon which provide an option for choosing multiple items from option list. The
    multiple values are considered as each tags alongs with default background color and close button. You are able to
    change background and foreground color as mentioned below. The multiselect contain right close button which is used
    to remove all tags elements.
</div>
{{#docs-demo as |demo|}}
{{#demo.example}}
<div class="demo-container">
    <div class="docs-example-frame docs-example-frame-row" data-example-id="SelectExample">
        <div class="docs-example">
            {{! BEGIN-SNIPPET docs-example-basic-multi-select-box.hbs }}
            <div style="width:100%">
                <MultiSelect @data={{data}} @selected={{selected}} 
                 @placeholder='select' @onSelect={{action 'optionSelected'}} 
                 @onDelete={{action 'onDelete' }}>
                </MultiSelect>
            </div>
            <div style="width:100%">
                <MultiSelect @data={{data2}} @selected={{selected2}} 
                 @placeholder='select' @onSelect={{action 'optionSelected'}} 
                 @onDelete={{action 'onDelete'}} @isDBrequired=true
                 @defaultBgColor='orange' @defaultFgColor='black'>
                </MultiSelect>
            </div>
            <div style="width:100%">
                <MultiSelect @data={{data3}} @selected={{selected3}} 
                  @placeholder='select' @onSelect={{action 'optionSelected'}} 
                  @onDelete={{action 'onDelete'}} @tagColor={{tagColor}}
                  @isDBrequired=true>
                </MultiSelect>
            </div>
            {{! END-SNIPPET }}
        </div>
    </div>
</div>

{{/demo.example}}
{{demo.snippet name='docs-example-basic-multi-select-box.hbs'}}
{{demo.snippet label='component.ts' name='docs-example-basic-multi-select-box.ts'}}
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
                                <p>It is an array of string which contains options for multi-select box</p>
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
                                <p>It is an array of string which contains default selected options for multi-select box
                                </p>
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
                                <p>Placeholder text for multi-select box</p>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <td class="docs-prop-name"><code>disabled</code></td>
                <td class="docs-prop-details"><code
                        class="docs-prop-type"><strong>boolean</strong><em class="docs-prop-default bp3-text-muted"></em></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p>Whether this action is non-interactive.</p>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <td class="docs-prop-name"><code>isDBrequired</code></td>
                <td class="docs-prop-details"><code
                        class="docs-prop-type"><strong>boolean</strong><em class="docs-prop-default bp3-text-muted"></em></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p>It add cross icon at right corner of multi-select.</p>
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
                                <p>Default open select pop-over .</p>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <td class="docs-prop-name"><code>defaultFgColor</code></td>
                <td class="docs-prop-details"><code
                        class="docs-prop-type"><strong>string</strong><em class="docs-prop-default bp3-text-muted"></em></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p> Default color for all tag elements.</p>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <td class="docs-prop-name"><code>defaultBgColor</code></td>
                <td class="docs-prop-details"><code
                        class="docs-prop-type"><strong>string</strong><em class="docs-prop-default bp3-text-muted"></em></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p>Default background-color for all tag elements</p>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <td class="docs-prop-name"><code>tagColor</code></td>
                <td class="docs-prop-details"><code
                        class="docs-prop-type"><strong>Array &lt;object&gt;</strong><em class="docs-prop-default bp3-text-muted"></em></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p>It is an array of object which is used to add different color(background and
                                    foreground color) for
                                    each tag elements.</p>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <td class="docs-prop-name"><code>onSelect</code></td>
                <td class="docs-prop-details"><code
                        class="docs-prop-type"><strong>(date: Array&lt;string&gt;) =&gt; void</strong><em class="docs-prop-default bp3-text-muted"></em></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p>Selected options from multi-select box.</p>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <td class="docs-prop-name"><code>onDelete</code></td>
                <td class="docs-prop-details"><code
                        class="docs-prop-type"><strong>(date: Array&lt;string&gt;) =&gt; void</strong><em class="docs-prop-default bp3-text-muted"></em></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p>Return array of object after deletion of tag elements.</p>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
    <br>
    <div class="bp3-callout bp3-intent-primary ">
        <h4 class="bp3-heading">
            <Icon @icon='info-sign' @iconSize=16 /> multi-select box additional features</h4>
        <b>There are 6 main keys used to interact with multiselect box</b>
        <p> <code> up & down </code> <strong> navigation Key </strong>: navigate within the suggest box.
            <code>left & right </code> <strong> navigation Key </strong>:navigate within the selected items inside tag
            input.
            <code>enter </code> <strong> Key </strong>:select an item from suggest box.
            <code>backspace </code> <strong> Key </strong>: delete the search keyword and delete selected item inside
            tag
            input.
        </p>
        NOTE: use up & down key to navigate suggest item and later enter to select.
        same way use left & right to navigate tags and later backspace to delete.
        multi select box is by default 100% in width.
    </div>

</div>