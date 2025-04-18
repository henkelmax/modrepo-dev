import{_ as t,o,c as a,ag as d}from"./chunks/framework.BY4X30uY.js";const u=JSON.parse('{"title":"Data Strings","titleTemplate":"Peek","description":"","frontmatter":{"titleTemplate":"Peek","aside":false},"headers":[],"relativePath":"minecraft/peek/wiki/data_strings.md","filePath":"minecraft/peek/wiki/data_strings.md"}'),s={name:"minecraft/peek/wiki/data_strings.md"};function i(l,e,n,r,h,c){return o(),a("div",null,e[0]||(e[0]=[d('<h1 id="data-strings" tabindex="-1">Data Strings <a class="header-anchor" href="#data-strings" aria-label="Permalink to &quot;Data Strings&quot;">​</a></h1><p>Data strings for shulker boxes allow you to customize the appearance of shulker boxes in the world and in item form.</p><p>Data strings need to be enabled in the <a href="./configuration">config</a> (<code>use_shulker_box_data_strings</code>).</p><h2 id="format" tabindex="-1">Format <a class="header-anchor" href="#format" aria-label="Permalink to &quot;Format&quot;">​</a></h2><p>Data strings must be enclosed in curly brackets (<code>{}</code>) and must be present at any point in the custom name of a shulker box. The config option <code>hide_shulker_box_data_strings</code> can be used to hide the data strings on tooltips and GUIs. This setting is enabled by default. Note that this only allies to you. other players on your server will still see the data strings. they are just hidden client-side with the mod.</p><p>The data string can contain multiple key-value fields, separated by semicolons (<code>;</code>). Keys and values are separated by equals (<code>=</code>).</p><h3 id="fields" tabindex="-1">Fields <a class="header-anchor" href="#fields" aria-label="Permalink to &quot;Fields&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Field name</th><th>Field short name</th><th>Description</th></tr></thead><tbody><tr><td><code>item</code></td><td><code>i</code></td><td>The ID of the item that should be displayed on the shulker box lid</td></tr><tr><td><code>label</code></td><td><code>l</code></td><td>The text that should get displayed on the lid of the shulker box</td></tr></tbody></table><h2 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h2><p><code>My Box {i=stone;l=Rocks}</code> or <code>My Box {item=stone;label=Rocks}</code></p><p>This will display a stone block (ID <code>stone</code>) and the text <code>Rocks</code> on the lid of the shulker box. The name of the shulker box will be <code>My Box</code>. This will get shown in the GUI and on the hover tooltip.</p><p><code>Wooden stuff {i=stick;l=Wood Box}</code> or <code>Wooden stuff {item=stick;label=Wood Box}</code></p><p>This will display a stick (ID <code>stick</code>) and the text <code>Wood Box</code> on the lid of the shulker box. The name of the shulker box will be <code>Wooden stuff</code>. This will get shown in the GUI and on the hover tooltip.</p>',13)]))}const m=t(s,[["render",i]]);export{u as __pageData,m as default};
