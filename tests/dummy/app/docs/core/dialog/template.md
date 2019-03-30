# Dialog Box
<div class='bp3-running-text bp3-text-large'>
    Dialogs present content overlaid over other parts of the UI.
</div>
{{#docs-demo as |demo|}}
{{#demo.example}}
{{! BEGIN-SNIPPET docs-example-basic-dialog-box.hbs }}

<div class="demo-container">
    <div class="docs-example-frame docs-example-frame-row">
        <div class="docs-example">
            <Button @onClick={{action 'openDialogBox'}} @primary=true @text='Show Dialog'></Button>
            <Dialog @isOpenDialog={{isOpenDialog}} @isEscapeToClose=true @isoutClickCloseDialog=true>
                <p>
                    <strong>
                        Data integration is the seminal problem of the digital age. For over ten years, we’ve helped
                        the
                        world’s
                        premier organizations rise to the challenge.
                    </strong>
                </p>
                <p>Palantir Foundry radically reimagines the way enterprises interact with data by amplifying and
                    extending the
                    power of data integration. With Foundry, anyone can source, fuse, and transform data into any shape
                    they
                    desire. Business analysts become data engineers — and leaders in their organization’s data
                    revolution.</p>
                <p>Foundry’s back end includes a suite of best-in-class data integration capabilities: data provenance,
                    git-style
                    versioning semantics, granular access controls, branching, transformation authoring, and more. But
                    these
                    powers
                    are not limited to the back-end IT shop.</p>
                <p>In Foundry, tables, applications, reports, presentations, and spreadsheets operate as data
                    integrations in
                    their
                    own right. Access controls, transformation logic, and data quality flow from original data source to
                    intermediate analysis to presentation in real time. Every end product created in Foundry becomes a
                    new data
                    source that other users can build upon. And the enterprise data foundation goes where the business
                    drives
                    it.</p>
                <p>Start the revolution. Unleash the power of data integration with Palantir Foundry.</p>
                <div class="bp3-dialog-footer">
                    <Button @type='button' @text="Cancel" @onClick={{action 'cancel'}}> </Button>
                    <Button @primary=true @type='button' @text='Save Somthing' @onClick={{action 'save'}}> </Button>
                </div>
            </Dialog>
        </div>
    </div>
</div>

{{! END-SNIPPET }}

{{/demo.example}}
{{demo.snippet name='docs-example-basic-dialog-box.hbs'}}
{{demo.snippet label='component.ts' name='docs-example-basic-dialog-box.js'}}
{{/docs-demo}}

### List of Arguments


<div class="docs-modifiers-table bp3-running-text">
    <table class="bp3-html-table">
        <thead>
            <tr>
                <th>Arguments</th>
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
                <td class="docs-prop-name"><code>isOpenDialog</code></td>
                <td class="docs-prop-details"><code
                        class="docs-prop-type"><strong>boolean</strong><em class="docs-prop-default bp3-text-muted"></em></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p>Toggles the visibility of the overlay and its children. This prop is required
                                    because the component is controlled. </p>
                            </div>
                        </div>
                    </div>
                    <div class="docs-prop-tags"><span class="bp3-tag bp3-intent-success bp3-minimal"><span
                                class="bp3-text-overflow-ellipsis bp3-fill">Required</span></span></div>
                </td>
            </tr>
            <tr>
                <td class="docs-prop-name"><code>isoutClickCloseDialog</code></td>
                <td class="docs-prop-details"><code
                        class="docs-prop-type"><strong>boolean</strong><em class="docs-prop-default bp3-text-muted"></em></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p>Whether clicking outside the overlay element to close </p>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <td class="docs-prop-name"><code>isEscapeToClose</code></td>
                <td class="docs-prop-details"><code
                        class="docs-prop-type"><strong>boolean</strong><em class="docs-prop-default bp3-text-muted"></em></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p><code>Esc</code> Key to close dialog box.</p>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <td class="docs-prop-name"><code>marginTop</code></td>
                <td class="docs-prop-details"><code
                        class="docs-prop-type"><strong>string(ie 'px or % format') </strong><em class="docs-prop-default bp3-text-muted"></em></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p>ex: <code>marginTop='12px'.</code></p>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <td class="docs-prop-name"><code>marginLeft</code></td>
                <td class="docs-prop-details"><code
                        class="docs-prop-type"><strong>string(ie 'px or % format') </strong><em class="docs-prop-default bp3-text-muted"></em></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p>ex: <code>marginLeft='12px'.</code></p>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <td class="docs-prop-name"><code>marginRight</code></td>
                <td class="docs-prop-details"><code
                        class="docs-prop-type"><strong>string(ie 'px or % format') </strong><em class="docs-prop-default bp3-text-muted"></em></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p>ex: <code>marginRight='12px'.</code></p>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <td class="docs-prop-name"><code>width</code></td>
                <td class="docs-prop-details"><code
                        class="docs-prop-type"><strong>string(ie 'px or % format') </strong><em class="docs-prop-default bp3-text-muted"></em></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p>custom width ex: <code>width='12px'.</code></p>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <td class="docs-prop-name"><code>height</code></td>
                <td class="docs-prop-details"><code
                        class="docs-prop-type"><strong>string(ie 'px or % format') </strong><em class="docs-prop-default bp3-text-muted"></em></code>
                    <div class="docs-prop-description">
                        <div class="docs-section">
                            <div class="bp3-running-text">
                                <p>custom height ex: <code>height='12px'.</code></p>
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
            <Icon @icon='info-sign' @iconSize=18 /> Important for dialog box</h4>
        <p>
            Need to add
            <strong>&lt;div id="destination"&gt; &lt;div&gt;</strong> to main<strong> application.hbs</strong>.
        </p>
    </div>
</div>