import{_ as i,c as a,a2 as e,o as t}from"./chunks/framework.kJy3gOul.js";const n="/assets/builtin_resource_pack.CrV6NsWn.png",l="/assets/no_resource_pack.C-6Nwz5W.png",p="/assets/resource_pack.DcZipvJ3.png",g=JSON.parse('{"title":"Resource Packs","titleTemplate":"Peek","description":"","frontmatter":{"titleTemplate":"Peek","aside":false},"headers":[],"relativePath":"minecraft/peek/wiki/resource_packs.md","filePath":"minecraft/peek/wiki/resource_packs.md"}'),h={name:"minecraft/peek/wiki/resource_packs.md"};function k(r,s,o,c,d,E){return t(),a("div",null,s[0]||(s[0]=[e('<h1 id="resource-packs" tabindex="-1">Resource Packs <a class="header-anchor" href="#resource-packs" aria-label="Permalink to &quot;Resource Packs&quot;">​</a></h1><h2 id="flat-shulker-icons" tabindex="-1">Flat Shulker Icons <a class="header-anchor" href="#flat-shulker-icons" aria-label="Permalink to &quot;Flat Shulker Icons&quot;">​</a></h2><p>The built-in <code>Flat Shulker Icons</code> resource pack shows shulker boxes directly from the top.</p><p><img src="'+n+'" alt=""></p><p><strong>Without the <code>Flat Shulker Icons</code> resource pack</strong>:</p><p><img src="'+l+'" alt=""></p><p><strong>With the <code>Flat Shulker Icons</code> resource pack</strong>: <img src="'+p+`" alt=""></p><h2 id="custom-resource-packs" tabindex="-1">Custom Resource Packs <a class="header-anchor" href="#custom-resource-packs" aria-label="Permalink to &quot;Custom Resource Packs&quot;">​</a></h2><h3 id="shulker-box-hints" tabindex="-1">Shulker Box Hints <a class="header-anchor" href="#shulker-box-hints" aria-label="Permalink to &quot;Shulker Box Hints&quot;">​</a></h3><p>You can create your own resource pack to customize the way items are rendered on shulker boxes. Just add the override predicate <code>peek:shulker_item</code> to <code>1</code> in your item model.</p><p>Example item model override:</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;parent&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;minecraft:item/generated&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;textures&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;layer0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;minecraft:item/golden_apple&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;overrides&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;predicate&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {  </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;peek:shulker_item&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;model&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;item/golden_apple/custom_model&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="decorated-pot-hints" tabindex="-1">Decorated Pot Hints <a class="header-anchor" href="#decorated-pot-hints" aria-label="Permalink to &quot;Decorated Pot Hints&quot;">​</a></h3><p>You can also customize hints on decorated pots by using the predicate <code>peek:decorated_pot_item</code>.</p><p>Example item model override:</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;parent&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;minecraft:item/generated&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;textures&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;layer0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;minecraft:item/golden_apple&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;overrides&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;predicate&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {  </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;peek:decorated_pot_item&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;model&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;item/golden_apple/custom_model&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,16)]))}const m=i(h,[["render",k]]);export{g as __pageData,m as default};