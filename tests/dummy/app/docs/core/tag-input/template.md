# Tag input
<div class="bp3-running-text bp3-text-large">
 <p>
  Tag inputs render
  <code>
    Tag
  </code>
  s inside an input, followed by an
    actual text input. The container is merely styled to look like a Blueprint
    input; the actual editable element appears after the last tag. Clicking anywhere
    on the container will focus the text input for seamless interaction.
</p>
</div>
{{#docs-demo as |demo|}}
{{#demo.example}}

<div class="demo-container">
    <div class="docs-example-frame docs-example-frame-row" data-example-id="TagInputExample">
        <div class="docs-example">
             {{! BEGIN-SNIPPET docs-example-basic-tag-input.hbs }}
             <TagInput 
              @large={{large}}
              @disabled={{disabled}}
              @leftIcon={{if leftIcon "user" undefined }}
              @addOnBlur={{addOnBlur}}
              @addOnPaste={{addOnPaste}}
              @fill={{fill}}
              @intent={{intent}}
              @placeholder="Separate values with commas..."
              @tagProps={{getTagProps}}
              @values={{values}} 
              @onChange={{action (mut this.values)}} 
             >
             <Button
                @disabled={{disabled}}
                @icon={{if (gt values.length  1) "cross" "refresh"}}
                @minimal={{true}}
                @onClick={{action "handleClear"}}
             >
             </Button>
             </TagInput>
             {{! END-SNIPPET }}
        </div>
        <div class="docs-example-options">
          <h5 class="bp3-heading">Props</h5>
          <Switch @onChange={{action "onSwitchChange" "large"}}>
           Large
          </Switch>
          <Switch @onChange={{action "onSwitchChange" "disabled"}}>
           Disabled
          </Switch>
          <Switch @defaultChecked=true @onChange={{action "onSwitchChange" "leftIcon"}}>
           Left icon
          </Switch>
          <Switch @onChange={{action "onSwitchChange" "addOnBlur"}}>
           Add on blur
          </Switch>
          <Switch @defaultChecked=true @onChange={{action "onSwitchChange" "addOnPaste"}}>
           Add on paste
          </Switch>
          <Switch @onChange={{action "onSwitchChange" "fill"}}>
           Fill container width
          </Switch>
          <label class="bp3-label">
           Intent
           <HtmlSelect
            @options={{INTENT}}
            @onChange={{action "onChangeIntentValue"}}
           ></HtmlSelect>
          </label>
          <h5 class="bp3-heading">Tag props</h5>
           <Switch @onChange={{action "onSwitchChange" "minimal"}}>
           Use minimal tags
          </Switch>
        </div>
    </div>
</div>


{{/demo.example}}
{{demo.snippet name='docs-example-basic-tag-input.hbs'}}
{{demo.snippet label='component.ts' name='docs-example-basic-tag-input.js'}}
{{/docs-demo}}

## Props
<div class="bp3-running-text bp3-text-large">
    <p><strong><code>TagInput</code> must be controlled,</strong> meaning the <code>values</code> prop is required and
        event handlers are strongly suggested. Typing in the input and pressing
        <kbd>enter</kbd> will <strong>add new items</strong> by invoking callbacks. If <code>addOnBlur</code> is
        set to true, clicking out of the component will also trigger the callback to add
        new items. A <code>separator</code> prop is supported to allow multiple items to be added
        at once; the default splits on commas and newlines.</p>
    <p><strong>Tags can be removed</strong> by clicking their <span class="bp3-icon-standard bp3-icon-cross"></span>
        buttons, or by pressing <kbd>backspace</kbd> repeatedly.
        Arrow keys can also be used to focus on a particular tag before removing it. The
        cursor must be at the beginning of the text input for these interactions.</p>
    <p><strong><code>Tag</code> appearance can be customized</strong> with <code>tagProps</code>: supply an object to
        apply the same props to every tag. Tag <code>values</code> must be an array of strings so you may need a
        transformation step between your state and these props.</p>
    <p><code>TagInput</code> provides granular <code>onAdd</code> and <code>onRemove</code> <strong>event props</strong>,
        which are
        passed the added or removed items in response to the user interactions above. It
        also provides <code>onChange</code>, which combines both events and is passed the updated
        <code>values</code> array, with new items appended to the end and removed items filtered
        away.</p>
    <p>The <code>&lt;input&gt;</code> element can be controlled directly via the <code>inputValue</code> and
        <code>onInputChange</code> props. Additional properties (such as custom event handlers) can
        be applied to the input via <code>inputProps</code>.</p>
</div>

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
        <td class="docs-prop-name"><code>addOnBlur</code></td>
        <td class="docs-prop-details"><code class="docs-prop-type"><strong>boolean</strong><em class="docs-prop-default bp3-text-muted">false</em></code>
            <div class="docs-prop-description">
                <div class="docs-section">
                    <div class="bp3-running-text">
                        <p>If true, <code>onAdd</code> will be invoked when the input loses focus.
                            Otherwise, <code>onAdd</code> is only invoked when <code>enter</code> is pressed.</p>
                    </div>
                </div>
            </div>
            <div class="docs-prop-tags"></div>
        </td>
    </tr>
    <tr>
        <td class="docs-prop-name"><code>addOnPaste</code></td>
        <td class="docs-prop-details"><code class="docs-prop-type"><strong>boolean</strong><em class="docs-prop-default bp3-text-muted">true</em></code>
            <div class="docs-prop-description">
                <div class="docs-section">
                    <div class="bp3-running-text">
                        <p>If true, <code>onAdd</code> will be invoked when the user pastes text containing the <code>separator</code>
                            into the input. Otherwise, pasted text will remain in the input.</p>
                        <p><strong>Note:</strong> For example, if <code>addOnPaste=true</code> and <code>separator="\n"</code>
                            (new line), then:</p>
                        <ul>
                            <li>Pasting <code>"hello"</code> will <em>not</em> invoke <code>onAdd</code></li>
                            <li>Pasting <code>"hello\n"</code> will invoke <code>onAdd</code> with <code>["hello"]</code></li>
                            <li>Pasting <code>"hello\nworld"</code> will invoke <code>onAdd</code> with <code>["hello", "world"]</code></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="docs-prop-tags"></div>
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
        <td class="docs-prop-name"><code>disabled</code></td>
        <td class="docs-prop-details"><code class="docs-prop-type"><strong>boolean</strong><em class="docs-prop-default bp3-text-muted">false</em></code>
            <div class="docs-prop-description">
                <div class="docs-section">
                    <div class="bp3-running-text">
                        <p>Whether the component is non-interactive.
                            Note that you'll also need to disable the component's <code>yield</code>,
                            if appropriate.</p>
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
                        <p>Whether the tag input should take up the full width of its container.</p>
                    </div>
                </div>
            </div>
            <div class="docs-prop-tags"></div>
        </td>
    </tr>
    <tr>
        <td class="docs-prop-name"><code>inputProps</code></td>
        <td class="docs-prop-details"><code class="docs-prop-type"><strong>HTMLInputProps</strong><em class="docs-prop-default bp3-text-muted"></em></code>
            <div class="docs-prop-description">
                <div class="docs-section">
                    <div class="bp3-running-text">
                        <p>React props to pass to the <code>&lt;input&gt;</code> element.
                        </p>
                    </div>
                </div>
            </div>
            <div class="docs-prop-tags"></div>
        </td>
    </tr>
    <tr>
        <td class="docs-prop-name"><code>inputValue</code></td>
        <td class="docs-prop-details"><code class="docs-prop-type"><strong>string</strong><em class="docs-prop-default bp3-text-muted"></em></code>
            <div class="docs-prop-description">
                <div class="docs-section">
                    <div class="bp3-running-text">
                        <p>Controlled value of the <code>&lt;input&gt;</code> element.</p>
                    </div>
                </div>
            </div>
            <div class="docs-prop-tags"></div>
        </td>
    </tr>
    <tr>
        <td class="docs-prop-name"><code>intent</code></td>
        <td class="docs-prop-details"><code class="docs-prop-type"><strong>string</strong>("primary","success","danger","warning")<em class="docs-prop-default bp3-text-muted"></em></code>
            <div class="docs-prop-description">
                <div class="docs-section">
                    <div class="bp3-running-text">
                        <p>Visual intent color to apply to element.</p>
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
                        <p>Whether the tag input should use a large size.</p>
                    </div>
                </div>
            </div>
            <div class="docs-prop-tags"></div>
        </td>
    </tr>
    <tr>
        <td class="docs-prop-name"><code>leftIcon</code></td>
        <td class="docs-prop-details"><code class="docs-prop-type"><strong>string</strong><em class="docs-prop-default bp3-text-muted"></em></code>
            <div class="docs-prop-description">
                <div class="docs-section">
                    <div class="bp3-running-text">
                        <p>Name of a UI icon to render on the left side of the input.</p>
                    </div>
                </div>
            </div>
            <div class="docs-prop-tags"></div>
        </td>
    </tr>
    <tr>
        <td class="docs-prop-name"><code>onAdd</code></td>
        <td class="docs-prop-details"><code class="docs-prop-type"><strong>(values: string[], method: <a onclick={{action (mut isOpenDrawer) isOpenDrawer=(not isOpenDrawer) }}>TagInputAddMethod</a>) =&gt; boolean | void</strong><em class="docs-prop-default bp3-text-muted"></em></code>
            <div class="docs-prop-description">
                <div class="docs-section">
                    <div class="bp3-running-text">
                        <p>Callback invoked when new tags are added by the user pressing <code>enter</code> on the
                            input.
                            Receives the current value of the input field split by <code>separator</code> into an
                            array.
                            New tags are expected to be appended to the list.</p>
                        <p>The input will be cleared after <code>onAdd</code> is invoked <em>unless</em> the callback
                            explicitly
                            returns <code>false</code>. This is useful if the provided <code>value</code> is somehow
                            invalid and should
                            not be added as a tag.</p>
                    </div>
                </div>
            </div>
            <div class="docs-prop-tags"></div>
        </td>
    </tr>
    <tr>
        <td class="docs-prop-name"><code>onChange</code></td>
        <td class="docs-prop-details"><code class="docs-prop-type"><strong>(values: Array) =&gt; boolean | void</strong><em class="docs-prop-default bp3-text-muted"></em></code>
            <div class="docs-prop-description">
                <div class="docs-section">
                    <div class="bp3-running-text">
                        <p>Callback invoked when new tags are added or removed. Receives the updated list of <code>values</code>:
                            new tags are appended to the end of the list, removed tags are removed at their index.</p>
                        <p>Like <code>onAdd</code>, the input will be cleared after this handler is invoked <em>unless</em>
                            the callback
                            explicitly returns <code>false</code>.</p>
                        <p>This callback essentially implements basic <code>onAdd</code> and <code>onRemove</code>
                            functionality and merges
                            the two handlers into one to simplify controlled usage.</p>
                    </div>
                </div>
            </div>
            <div class="docs-prop-tags"></div>
        </td>
    </tr>
    <tr>
        <td class="docs-prop-name"><code>onInputChange</code></td>
        <td class="docs-prop-details"><code class="docs-prop-type"><strong>HTMLInputElement</strong><em class="docs-prop-default bp3-text-muted"></em></code>
            <div class="docs-prop-description">
                <div class="docs-section">
                    <div class="bp3-running-text">
                        <p>Callback invoked when the value of <code>&lt;input&gt;</code> element is changed.
                        </p>
                    </div>
                </div>
            </div>
            <div class="docs-prop-tags"></div>
        </td>
    </tr>
    <tr>
        <td class="docs-prop-name"><code>onKeyDown</code></td>
        <td class="docs-prop-details"><code class="docs-prop-type"><strong>(event: KeyboardEvent, index?: number) =&gt; void</strong><em class="docs-prop-default bp3-text-muted"></em></code>
            <div class="docs-prop-description">
                <div class="docs-section">
                    <div class="bp3-running-text">
                        <p>Callback invoked when the user depresses a keyboard key.
                            Receives the event and the index of the active tag (or <code>undefined</code> if
                            focused in the input).</p>
                    </div>
                </div>
            </div>
            <div class="docs-prop-tags"></div>
        </td>
    </tr>
    <tr>
        <td class="docs-prop-name"><code>onKeyUp</code></td>
        <td class="docs-prop-details"><code class="docs-prop-type"><strong>(event: KeyboardEvent, index?: number) =&gt; void</strong><em class="docs-prop-default bp3-text-muted"></em></code>
            <div class="docs-prop-description">
                <div class="docs-section">
                    <div class="bp3-running-text">
                        <p>Callback invoked when the user releases a keyboard key.
                            Receives the event and the index of the active tag (or <code>undefined</code> if
                            focused in the input).</p>
                    </div>
                </div>
            </div>
            <div class="docs-prop-tags"></div>
        </td>
    </tr>
    <tr>
        <td class="docs-prop-name"><code>onRemove</code></td>
        <td class="docs-prop-details"><code class="docs-prop-type"><strong>(value: string, index: number) =&gt; void</strong><em class="docs-prop-default bp3-text-muted"></em></code>
            <div class="docs-prop-description">
                <div class="docs-section">
                    <div class="bp3-running-text">
                        <p>Callback invoked when the user clicks the X button on a tag.
                            Receives value and index of removed tag.</p>
                    </div>
                </div>
            </div>
            <div class="docs-prop-tags"></div>
        </td>
    </tr>
    <tr>
        <td class="docs-prop-name"><code>placeholder</code></td>
        <td class="docs-prop-details"><code class="docs-prop-type"><strong>string</strong><em class="docs-prop-default bp3-text-muted"></em></code>
            <div class="docs-prop-description">
                <div class="docs-section">
                    <div class="bp3-running-text">
                        <p>Input placeholder text which will not appear if <code>values</code> contains any items
                            (consistent with default HTML input behavior).
                            Use <code>inputProps.placeholder</code> if you want the placeholder text to <em>always</em>
                            appear.</p>
                        <p>If you define both <code>placeholder</code> and <code>inputProps.placeholder</code>, then
                            the former will appear
                            when <code>values</code> is empty and the latter at all other times.</p>
                    </div>
                </div>
            </div>
            <div class="docs-prop-tags"></div>
        </td>
    </tr>
    <tr>
        <td class="docs-prop-name"><code>separator</code></td>
        <td class="docs-prop-details"><code class="docs-prop-type"><strong>string | RegExp | false</strong><em class="docs-prop-default bp3-text-muted">/[,\n\r]/</em></code>
            <div class="docs-prop-description">
                <div class="docs-section">
                    <div class="bp3-running-text">
                        <p>Separator pattern used to split input text into multiple values. Default value splits on
                            commas and newlines.
                            Explicit <code>false</code> value disables splitting (note that <code>onAdd</code> will
                            still receive an array of length 1).</p>
                    </div>
                </div>
            </div>
            <div class="docs-prop-tags"></div>
        </td>
    </tr>
    <tr>
        <td class="docs-prop-name"><code>tagProps</code></td>
        <td class="docs-prop-details"><code class="docs-prop-type"><strong><a onclick={{action (mut isOpenDrawer2) isOpenDrawer2=(not isOpenDrawer2) }}>tagProps</a></strong><em class="docs-prop-default bp3-text-muted"></em></code>
            <div class="docs-prop-description">
                <div class="docs-section">
                    <div class="bp3-running-text">
                        <p>It support all properties of <code>Tag</code> component. </p>
                    </div>
                </div>
            </div>
            <div class="docs-prop-tags"></div>
        </td>
    </tr>
    <tr>
        <td class="docs-prop-name "><code>values <Icon @icon="small-tick" @intent="success"></Icon></code></td>
        <td class="docs-prop-details"><code class="docs-prop-type"><strong>Array</strong><em class="docs-prop-default bp3-text-muted"></em></code>
            <div class="docs-prop-description">
                <div class="docs-section">
                    <div class="bp3-running-text">
                        <p>Controlled tag values. Each value will be rendered inside a <code>Tag</code>, which can be
                            customized
                            using <code>tagProps</code>. Therefore, any valid htmlElement can be used as a <code>TagInput</code>
                            value; falsy
                            values will not be rendered.</p>
                    </div>
                </div>
            </div>
            <div class="docs-prop-tags"><span class="bp3-tag bp3-intent-success bp3-minimal"><span class="bp3-text-overflow-ellipsis bp3-fill">Required</span></span></div>
        </td>
    </tr>
</tbody> 
    </table>

</div>
<DbDrawer @isOpen={{isOpenDrawer}} 
 @autoFocus=true @enforceFocus=true
@hasBackdrop=true @usePortal=true 
@canOutsideClickClose=true
@canEscapeKeyClose=true >

{{#db-drawer/body}}
  <div class="docs-modifiers">
    <div class="docs-section">
        <div class="bp3-running-text">
            <p>The method in which a <code>TagInput</code> value was added.</p>
            <ul>
                <li><code>"default"</code> - indicates that a value was added by manual selection.</li>
                <li><code>"blur"</code> - indicates that a value was added when the <code>TagInput</code> lost focus.
                    This is only possible when <code>addOnBlur=true</code>.</li>
                <li><code>"paste"</code> - indicates that a value was added via paste. This is only
                    possible when <code>addOnPaste=true</code>.</li>
            </ul>
        </div>
    </div>
    <div class="docs-type-alias docs-code">
        <div>= "default"</div>
        <div>| "blur"</div>
        <div>| "paste"</div>
    </div>
</div>
 {{/db-drawer/body}}
</DbDrawer>
<DbDrawer @isOpen={{isOpenDrawer2}} 
 @autoFocus=true @enforceFocus=true
@hasBackdrop=true @usePortal=true 
@canOutsideClickClose=true
@canEscapeKeyClose=true >

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
                <td class="docs-prop-name"><code>active</code></td>
                <td class="docs-prop-details"><code
                        class="docs-prop-type"><strong>boolean</strong><em class="docs-prop-default bp3-text-muted">false</em></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p>Whether the tag should appear in an active state.</p>
                            </div>
                        </div>
                    </div>
                    <div class="docs-prop-tags"></div>
                </td>
            </tr>
            <tr>
                <td class="docs-prop-name"><code>class</code></td>
                <td class="docs-prop-details">
                    <code
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
                <td class="docs-prop-name"><code>fill</code></td>
                <td class="docs-prop-details"><code
                        class="docs-prop-type"><strong>boolean</strong><em class="docs-prop-default bp3-text-muted">false</em></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p>Whether the tag should take up the full width of its container.</p>
                            </div>
                        </div>
                    </div>
                    <div class="docs-prop-tags"></div>
                </td>
            </tr>
            <tr>
                <td class="docs-prop-name"><code>icon</code></td>
                <td class="docs-prop-details">
                    <code
                        class="docs-prop-type"><strong>{{#link-to 'docs.icon.icons'}}IconName{{/link-to}} </strong><em class="docs-prop-default bp3-text-muted"></em></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p>Name of a Blueprint UI icon to render before the text.</p>
                            </div>
                        </div>
                    </div>
                    <div class="docs-prop-tags"><span class="bp3-tag bp3-minimal"><span
                                class="bp3-text-overflow-ellipsis bp3-fill">
                                Default icon position is left</span></span>
                    </div>
                </td>
            </tr>
            <tr>
                <td class="docs-prop-name"><code>iconSize</code></td>
                <td class="docs-prop-details">
                    <code
                        class="docs-prop-type"><strong>number</strong><em class="docs-prop-default bp3-text-muted"></em></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p>Size of icon</p>
                            </div>
                        </div>
                    </div>
                    <div class="docs-prop-tags"><span class="bp3-tag bp3-minimal">
                            <span class="bp3-text-overflow-ellipsis bp3-fill">
                                Default icon height is 16</span>
                        </span>
                    </div>
                </td>
            </tr>
            <tr>
                <td class="docs-prop-name"><code>intent</code></td>
                <td class="docs-prop-details">
                    <code
                        class="docs-prop-type"><strong>string</strong><em class="docs-prop-default bp3-text-muted"></em></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p>Visual intent color to apply to element. Options are
                                    <code>primary,success,warning,danger,none.</code></p>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <td class="docs-prop-name"><code>interactive</code></td>
                <td class="docs-prop-details"><code
                        class="docs-prop-type"><strong>boolean</strong><em class="docs-prop-default bp3-text-muted">false</em></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p>Whether the tag should visually respond to user interactions. If set
                                    to <code>true</code>, hovering over the tag will change its color and mouse cursor.
                                </p>
                                <p>Recommended when <code>onClick</code> is also defined.</p>
                            </div>
                        </div>
                    </div>
                    <div class="docs-prop-tags"></div>
                </td>
            </tr>
            <tr>
                <td class="docs-prop-name"><code>large</code></td>
                <td class="docs-prop-details"><code
                        class="docs-prop-type"><strong>boolean</strong><em class="docs-prop-default bp3-text-muted">false</em></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p>Whether this tag should use large styles.</p>
                            </div>
                        </div>
                    </div>
                    <div class="docs-prop-tags"></div>
                </td>
            </tr>
            <tr>
                <td class="docs-prop-name"><code>minimal</code></td>
                <td class="docs-prop-details"><code
                        class="docs-prop-type"><strong>boolean</strong><em class="docs-prop-default bp3-text-muted">false</em></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p>Whether this tag should use minimal styles.</p>
                            </div>
                        </div>
                    </div>
                    <div class="docs-prop-tags"></div>
                </td>
            </tr>
            <tr>
                <td class="docs-prop-name"><code>rightIcon</code></td>
                <td class="docs-prop-details"><code
                        class="docs-prop-type"><strong><a href="#api/IconName">IconName</a> </strong><em class="docs-prop-default bp3-text-muted"></em></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p>Name of a Blueprint UI icon (or an icon element) to render after the children.</p>
                            </div>
                        </div>
                    </div>
                    <div class="docs-prop-tags"></div>
                </td>
            </tr>
            <tr>
                <td class="docs-prop-name"><code>round</code></td>
                <td class="docs-prop-details"><code
                        class="docs-prop-type"><strong>boolean</strong><em class="docs-prop-default bp3-text-muted">false</em></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p>Whether this tag should have rounded ends.</p>
                            </div>
                        </div>
                    </div>
                    <div class="docs-prop-tags"></div>
                </td>
            </tr>
            <tr>
                <td class="docs-prop-name"><code>style</code></td>
                <td class="docs-prop-details">
                    <code
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
                <td class="docs-prop-name"><code>value</code></td>
                <td class="docs-prop-details">
                    <code
                        class="docs-prop-type"><strong>string</strong><em class="docs-prop-default bp3-text-muted"></em></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p>Action text.</p>
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