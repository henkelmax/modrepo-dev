import{_ as a,c as o,a2 as t,o as n}from"./chunks/framework.kJy3gOul.js";const u=JSON.parse('{"title":"Item Names","titleTemplate":"Peek","description":"","frontmatter":{"titleTemplate":"Peek","aside":false},"headers":[],"relativePath":"minecraft/peek/wiki/item_names.md","filePath":"minecraft/peek/wiki/item_names.md"}'),r={name:"minecraft/peek/wiki/item_names.md"};function i(d,e,s,m,c,l){return n(),o("div",null,e[0]||(e[0]=[t('<h1 id="item-names" tabindex="-1">Item Names <a class="header-anchor" href="#item-names" aria-label="Permalink to &quot;Item Names&quot;">​</a></h1><p>Item names for shulker boxes allow you to add an item icon to the lid of shulker boxes in the world and in item form.</p><p>Item names need to be enabled in the <a href="./configuration">config</a> (<code>use_shulker_box_item_names</code>).</p><p>When using this, you aren&#39;t able to add custom text to the shulker box lid. Use <a href="./data_strings">data strings</a> for that. Item names are the simpler alternative to data strings.</p><h2 id="format" tabindex="-1">Format <a class="header-anchor" href="#format" aria-label="Permalink to &quot;Format&quot;">​</a></h2><p>Item names are not case sensitive. There are two ways of adding an item name to a shulker box:</p><h3 id="by-id" tabindex="-1">By ID <a class="header-anchor" href="#by-id" aria-label="Permalink to &quot;By ID&quot;">​</a></h3><p>The ID of the item with underscores (<code>_</code>) replaced by spaces (<code></code>). For example, <code>minecraft:iron_ingot</code> would be <code>Iron Ingot</code>, <code>iron ingot</code> or <code>IRON INGOT</code>. If there are conflicts with other mods adding items with the same ID, you can use the mod ID as a prefix. For example, <code>testmod:iron_ingot</code> would be <code>Testmod Iron Ingot</code>, <code>testmod iron ingot</code> or <code>TESTMOD IRON INGOT</code>.</p><h3 id="by-translated-name" tabindex="-1">By translated name <a class="header-anchor" href="#by-translated-name" aria-label="Permalink to &quot;By translated name&quot;">​</a></h3><p>The actual name of your item in the language you are using. For example, <code>Iron Ingot</code> would be <code>Iron Ingot</code>, <code>iron ingot</code> or <code>IRON INGOT</code> if your game language is English. If your game language is German, <code>Iron Ingot</code> would be <code>Eisenbarren</code>, <code>eisenbarren</code> or <code>EISENBARREN</code>.</p>',10)]))}const f=a(r,[["render",i]]);export{u as __pageData,f as default};