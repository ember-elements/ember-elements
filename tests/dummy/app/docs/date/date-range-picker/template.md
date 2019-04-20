# Date Range Picker
<div class="bp3-running-text bp3-text-large">
    A <code>DateRangePicker</code> It shows two sequential month calendars and lets the user select a single range of
    days.
</div>
{{#docs-demo as |demo|}}
{{#demo.example}}
<div class="demo-container">
    <div class="docs-example-frame docs-example-frame-row">
        <div class="docs-example">
            {{! BEGIN-SNIPPET docs-example-basic-date-range-picker.hbs }}
            <DateRangePicker @format={{format}} @range={{this.range}}
             @minimal={{minimal}} @placement={{placement}}
             @onSelect={{action 'selectDate' }} @leftIcon="timeline-events">
            </DateRangePicker>
            {{! END-SNIPPET }}
        </div>
         <div class="docs-example-options">
            <h5 class="bp3-heading">Props</h5>
            <div class="bp3-form-group">
                <label class="bp3-label" for="position">Position when opened (placement) <span
                        class="bp3-text-muted"></span></label>
                <div class="bp3-form-content">
                    <div class="bp3-html-select"><select onchange={{action 'selectPositon'}}>
                            <option value="auto">auto</option>
                            <option value="left">left</option>
                            <option value="right">right</option>
                            <option value="top">top</option>
                            <option value="bottom">bottom</option>
                        </select><span icon="double-caret-vertical" class="bp3-icon bp3-icon-double-caret-vertical"><svg data-icon="double-caret-vertical" width="16" height="16" viewBox="0 0 16 16"><desc>double-caret-vertical</desc><path d="M5 7h6a1.003 1.003 0 0 0 .71-1.71l-3-3C8.53 2.11 8.28 2 8 2s-.53.11-.71.29l-3 3A1.003 1.003 0 0 0 5 7zm6 2H5a1.003 1.003 0 0 0-.71 1.71l3 3c.18.18.43.29.71.29s.53-.11.71-.29l3-3A1.003 1.003 0 0 0 11 9z" fill-rule="evenodd"></path></svg></span></div>
                    <label class="bp3-control bp3-switch">
                        <input type="checkbox" onclick={{action 'onMinimalPopover'}}>
                        <span class="bp3-control-indicator"></span>
                        Minimal popover style
                    </label>
                </div>
            </div>
        </div>
    </div>
</div>
{{/demo.example}}

{{demo.snippet name='docs-example-basic-date-range-picker.hbs'}}
{{demo.snippet label='component.ts' name='docs-example-basic-date-range-picker.ts'}}
{{/docs-demo}}

## Shortcuts
<div class="bp3-running-text bp3-text-large">
    <p>The menu on the left of the calendars provides "shortcuts" that allow users to
        quickly select common date ranges.</p>
    <p>The <strong>preset shortcuts</strong> can be seen in the example above. They are as follows:</p>
    <ul>
        <li>Past week</li>
        <li>Past month</li>
        <li>Past 3 months</li>
        <li>Past 6 months</li>
        <li>Past year</li>
        <li>Past 2 years</li>
    </ul>
    <p><strong>Custom shortcuts</strong> use the following interface:</p>
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
                <td class="docs-prop-name"><code>onSelect</code></td>
                <td class="docs-prop-details"><code
                        class="docs-prop-type"><strong>(date: dateObject&lt;{start and end date}&gt;) =&gt; void</strong><em class="docs-prop-default bp3-text-muted"></em></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p>date select event handler.</p>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <td class="docs-prop-name"><code>format</code></td>
                <td class="docs-prop-details"><code
                        class="docs-prop-type"><strong>string</strong><em class="docs-prop-default bp3-text-muted"></em></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p>Format of date and default date format is <code>DD/MM/YYYY</code></p>
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
                                <p>Default open date pop-over .</p>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <td class="docs-prop-name"><code>range</code></td>
                <td class="docs-prop-details"><code
                        class="docs-prop-type"><strong> object</strong><em class="docs-prop-default bp3-text-muted"></em></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p>Range is an object which contains start date and end date. ex: <code> range: object = {start: new Date('3/1/2018'),end: new Date('3/20/2018')};
                </code> </p>
                            </div>
                        </div>
                    </div>
                    <div class="docs-prop-tags"><span class="bp3-tag bp3-intent-success bp3-minimal"><span
                                class="bp3-text-overflow-ellipsis bp3-fill">Required</span></span></div>
                </td>
            </tr>
            <tr>
                <td class="docs-prop-name"><code>startYear</code></td>
                <td class="docs-prop-details"><code
                        class="docs-prop-type"><strong>number</strong><em class="docs-prop-default bp3-text-muted"></em></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p>It start the value of <strong>years</strong> select box .</p>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <td class="docs-prop-name"><code>endYear</code></td>
                <td class="docs-prop-details"><code
                        class="docs-prop-type"><strong>number</strong><em class="docs-prop-default bp3-text-muted"></em></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p>It limit the value of <strong>years</strong> select box .</p>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
             <tr>
                <td class="docs-prop-name"><code>minimal</code></td>
                <td class="docs-prop-details"><code class="docs-prop-type"><strong>boolean</strong></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p> Minimal popover style.
                                </p>
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