# Icons
<div class="bp3-running-text bp3-text-large">
    List of blueprint icons.
</div>
{{#docs-demo as |demo|}}
{{#demo.example}}
{{! BEGIN-SNIPPET docs-example-basic-icons.hbs }}
<div class="demo-container">
     <div class="docs-icons">
       <p>
         <InputGroup @value={{data}} @onkeyUp={{action 'onkeyUp'}} @round=true @placeholder='Search for icons....'
         @rightIcon='search' />
       </p>
        {{#each iconsList as |item|}}
        <div class="docs-icon-group">
            <h3 class="bp3-heading">{{item.name}}</h3>
            {{#each item.data as |item|}}
            {{#if (not-eq item.iconName 'null')}}
            <div class="docs-clipboard docs-icon" data-tags={{item.tags}} id={{item.iconName}} onclick={{action 'onClickCopyIcon' item.iconName}}><input readonly="" id={{item.iconName}} value={{item.iconName}}>
                <Icon @icon={{item.iconName}}/>
                <div class="docs-icon-name">{{item.displayName}}</div>
                <div class="docs-icon-detail">
                    <p class="docs-code">{{item.iconName}}</p>
                    {{!-- <div class="bp3-text-muted">Right-click to download</div> --}}
                    <div class="docs-clipboard-message bp3-text-muted" data-hover-message="Click to copy name"></div>
                </div>
            </div>
            {{else}}
            <div class="docs-placeholder"></div>
            {{/if}}
            {{/each}}
        </div>
        {{/each}}
    </div>
</div>
{{! END-SNIPPET }}
{{/demo.example}}
{{/docs-demo}}