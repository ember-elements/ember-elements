# Card
<div class="bp3-running-text bp3-text-large">
    <p>A card is a bounded unit of UI content with a solid background color.</p>
</div>
{{#docs-demo as |demo|}}
{{#demo.example}}
<div class="demo-container">
    <div class="docs-example-frame docs-example-frame-row" data-example-id="CardExample">
        <div class="docs-example">
            {{! BEGIN-SNIPPET docs-example-basic-card.hbs }}
            <Card @interactive={{isInteractive}} @elevation={{elevation}}>
                <h5 class="bp3-heading"><a href="#">Analytical applications</a></h5>
                <p>User interfaces that enable people to interact smoothly with data, ask better questions, and make
                    better
                    decisions.
                </p>
                <Button @text='Explore products'> </Button>
            </Card>
            {{! END-SNIPPET }}
        </div>
        <div class="docs-example-options">
            <h5 class="bp3-heading">Args</h5>
            <label class="bp3-control bp3-switch">
                <input type="checkbox" value="on">
                <span class="bp3-control-indicator" onclick={{action "toggleInteractive"}}></span>Interactive</label><label
                class="bp3-label">Elevation
                <div class="bp3-slider">
                    <div class="bp3-slider-track">
                        <div class="bp3-slider-progress" style="left: 0%; right: 100%; top: 0px;"></div>
                        <div class="bp3-slider-progress" style="left: 0%; right: 100%; top: 0px;"></div>
                        <div class="bp3-slider-progress" style="left: 0%; right: 0%; top: 0px;"></div>
                    </div>
                    <div class="bp3-html-select">
                        <select onchange={{action 'selectElevation'}}>
                            <option label="0" value="0">0</option>
                            <option label="1" value="1">1</option>
                            <option label="2" value="2">2</option>
                            <option label="3" value="3">3</option>
                            <option label="4" value="4">4</option>
                        </select>
                    </div>
                </div>
            </label>
        </div>




    </div>
</div>
{{/demo.example}}
{{demo.snippet name='docs-example-basic-card.hbs'}}
{{demo.snippet label='component.ts' name='docs-example-basic-card.js'}}
{{/docs-demo}}

### Elevation

<div class="bp3-running-text bp3-text-large">
    <p>Apply an <code>elevation</code> value to a card to apply a drop shadow that simulates
        height in the UI. Five elevations are supported, from 0 to 4.</p>
</div>

### List of arguments

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
                    <td class="docs-prop-name"><code>elevation</code></td>
                    <td class="docs-prop-details"><code class="docs-prop-type"><strong>Elevation</strong><em class="docs-prop-default bp3-text-muted">0</em></code>
                        <div class="docs-prop-description">
                            <div class="docs-section">
                                <div class="bp3-running-text">
                                    <p>Controls the intensity of the drop shadow beneath the card: the higher
                                        the elevation, the higher the drop shadow. At elevation <code>0</code>, no drop
                                        shadow is applied.</p>
                                </div>
                            </div>
                        </div>
                        <div class="docs-prop-tags"></div>
                    </td>
                </tr>
                <tr>
                    <td class="docs-prop-name"><code>interactive</code></td>
                    <td class="docs-prop-details"><code class="docs-prop-type"><strong>boolean</strong><em class="docs-prop-default bp3-text-muted">false</em></code>
                        <div class="docs-prop-description">
                            <div class="docs-section">
                                <div class="bp3-running-text">
                                    <p>Whether the card should respond to user interactions. If set to <code>true</code>,
                                        hovering over the card will increase the card's elevation
                                        and change the mouse cursor to a pointer.</p>
                                    <p>Recommended when <code>onClick</code> is also defined.</p>
                                </div>
                            </div>
                        </div>
                        <div class="docs-prop-tags"></div>
                    </td>
                </tr>
                <tr>
                    <td class="docs-prop-name"><code>onClick</code></td>
                    <td class="docs-prop-details"><code class="docs-prop-type"><strong>(e: MouseEvent&lt;HTMLDivElement&gt;) =&gt; void</strong><em class="docs-prop-default bp3-text-muted"></em></code>
                        <div class="docs-prop-description">
                            <div class="docs-section">
                                <div class="bp3-running-text">
                                    <p>Callback invoked when the card is clicked.
                                        Recommended when <code>interactive</code> is <code>true</code>.</p>
                                </div>
                            </div>
                        </div>
                        <div class="docs-prop-tags"></div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>