import{_ as s,c as a,a2 as e,o as t}from"./chunks/framework.kJy3gOul.js";const d=JSON.parse('{"title":"Your Plugin","titleTemplate":"Simple Voice Chat","description":"","frontmatter":{"titleTemplate":"Simple Voice Chat","aside":false},"headers":[],"relativePath":"minecraft/voicechat/api/your_plugin.md","filePath":"minecraft/voicechat/api/your_plugin.md"}'),n={name:"minecraft/voicechat/api/your_plugin.md"};function l(p,i,h,o,r,k){return t(),a("div",null,i[0]||(i[0]=[e(`<h1 id="your-plugin" tabindex="-1">Your Plugin <a class="header-anchor" href="#your-plugin" aria-label="Permalink to &quot;Your Plugin&quot;">​</a></h1><br><blockquote><p>Make sure you set up your workspace as shown in <a href="./getting_started">Getting Started</a>!</p></blockquote><br><p>As already shown in <a href="./getting_started">Getting Started</a>, the main entrypoint for all mod loaders and plugin loaders (Fabric/Forge/Quilt/Bukkit/Spigot/Paper) is the <code>VoicechatPlugin</code> interface.</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">package</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> com.example.yourmod;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> de.maxhenkel.voicechat.api.VoicechatPlugin;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> TestPlugin</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> implements</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> VoicechatPlugin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>The only mandatory method you need to implement is <code>getPluginId</code>. Make sure your plugin ID is unique. Best practice is to use the mod ID/plugin ID of your mod/plugin.</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Override</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> String </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getPluginId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;my_plugin&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>Once your plugin is loaded by the voice chat, the <code>initialize</code> method of your plugin gets called. Here you get access to the <a href="https://voicechat.modrepo.de/de/maxhenkel/voicechat/api/VoicechatApi.html" target="_blank" rel="noreferrer">VoicechatApi</a> class.</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Override</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> initialize</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(VoicechatApi api) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,10)]))}const g=s(n,[["render",l]]);export{d as __pageData,g as default};