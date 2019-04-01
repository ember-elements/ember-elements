# Tooltip
<div class='bp3-running-text bp3-text-large'>
    A tooltip is a lightweight popover for showing additional infromation on hover.
</div>
{{#docs-demo as |demo|}}
{{#demo.example}}
<div class="docs-example-frame docs-example-frame-row" data-example-id="TooltipExample">
    <div class="docs-example">
        {{! BEGIN-SNIPPET docs-example-basic-tooltip.hbs }}
        <div>Inline text can have
            <ToolTip @content={{Content}} class='bp3-tooltip-indicator'>
                this is tool tip
            </ToolTip>
            &nbsp;
        </div>
        <div>
            Or,
            <ToolTip @content={{lotsOfText}}>
                hover anywhere over this whole line.
            </ToolTip>
        </div>
        <div>This line's tooltip
            <ToolTip @disabled=true class='bp3-tooltip-indicator'>
                is disabled.
            </ToolTip>
        </div>
        <div>
            This line's tooltip
            <ToolTip @isOpen={{isOpen}} class='bp3-tooltip-indicator'>
                is controlled by external state.
            </ToolTip>
            <label class="bp3-control bp3-switch" {{action 'onisOpen'}}
                style=" display: inline-block; margin-bottom: 0px; margin-left: 20px;">
                {{#if isOpen}}
                <input type="checkbox" checked>
                {{else}}
                <input type="checkbox">
                {{/if}}
                <span class="bp3-control-indicator"></span>
                Open.
            </label>
        </div>
        <div>
            <ToolTip @content={{Content}} @placement='left' class='bp3-tooltip-indicator' @intent='primary'>
                Available
            </ToolTip>
            &nbsp;
            <ToolTip @content={{Content}} @placement='top' class='bp3-tooltip-indicator' @intent='success'>
                in the full
            </ToolTip>
            &nbsp;
            <ToolTip @content={{Content}} @placement='bottom' class='bp3-tooltip-indicator' @intent='warning'>
                range of
            </ToolTip>
            &nbsp;
            <ToolTip @content={{Content}} @placement='right' class='bp3-tooltip-indicator' @intent='danger'>
                visual intents!
            </ToolTip>
        </div>
        {{! END-SNIPPET }}
    </div>

</div>

{{/demo.example}}
{{demo.snippet name='docs-example-basic-tooltip.hbs'}}
{{demo.snippet label='component.ts' name='docs-example-basic-tooltip.js'}}
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
                <td class="docs-prop-name docs-prop-is-required"><code>content</code></td>
                <td class="docs-prop-details">
                    <code
                        class="docs-prop-type"><strong>Element | string</strong><em class="docs-prop-default bp3-text-muted"></em></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p>The content that will be displayed inside of the tooltip.</p>
                            </div>
                        </div>
                    </div>
                    <div class="docs-prop-tags"><span class="bp3-tag bp3-intent-success bp3-minimal">
                            <span class="bp3-text-overflow-ellipsis bp3-fill">Required</span></span>
                    </div>
                </td>
            </tr>
            <tr>
                <td class="docs-prop-name"><code>defaultIsOpen</code></td>
                <td class="docs-prop-details"><code
                        class="docs-prop-type"><strong>boolean</strong><em class="docs-prop-default bp3-text-muted">false</em></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p>Initial opened state when uncontrolled.</p>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <td class="docs-prop-name"><code>disabled</code></td>
                <td class="docs-prop-details"><code
                        class="docs-prop-type"><strong>boolean</strong><em class="docs-prop-default bp3-text-muted">false</em></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p>Prevents the popover from appearing when <code>true</code>.</p>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <td class="docs-prop-name"><code>intent</code></td>
                <td class="docs-prop-details"><code
                        class="docs-prop-type"><strong><a href="#api/Intent">Intent</a></strong><em class="docs-prop-default bp3-text-muted"></em></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p>Visual intent color to apply to element.</p>
                                <p>Options are
                                    <code>primary</code>,<code>warning</code>,<code>success</code>,<code>danger</code>
                                </p>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <td class="docs-prop-name"><code>isOpen</code></td>
                <td class="docs-prop-details"><code
                        class="docs-prop-type"><strong>boolean</strong><em class="docs-prop-default bp3-text-muted">undefined</em></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p>Whether the popover is visible. Passing this prop puts the popover in
                                    controlled mode, where the only way to change visibility is by updating
                                    this property. If <code>disabled={true}</code>, this prop will be ignored, and the
                                    popover will remain closed.</p>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <td class="docs-prop-name"><code>targetClassName</code></td>
                <td class="docs-prop-details"><code
                        class="docs-prop-type"><strong>string</strong><em class="docs-prop-default bp3-text-muted"></em></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p>Space-delimited string of class names applied to the target element.</p>
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
                                <p>CSS styles to apply to the target.</p>
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