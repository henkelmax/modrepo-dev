import{_ as t,o,c as r,ag as a}from"./chunks/framework.BY4X30uY.js";const f=JSON.parse('{"title":"Proxy Setup","titleTemplate":"Simple Voice Chat","description":"","frontmatter":{"titleTemplate":"Simple Voice Chat"},"headers":[],"relativePath":"minecraft/voicechat/wiki/proxy_setup.md","filePath":"minecraft/voicechat/wiki/proxy_setup.md"}'),i={name:"minecraft/voicechat/wiki/proxy_setup.md"};function n(c,e,h,s,l,p){return o(),r("div",null,e[0]||(e[0]=[a('<h1 id="proxy-setup" tabindex="-1">Proxy Setup <a class="header-anchor" href="#proxy-setup" aria-label="Permalink to &quot;Proxy Setup&quot;">​</a></h1><h2 id="minecraft-proxy-setup" tabindex="-1">Minecraft Proxy Setup <a class="header-anchor" href="#minecraft-proxy-setup" aria-label="Permalink to &quot;Minecraft Proxy Setup&quot;">​</a></h2><p><em>This only applies when using a proxy that is designed for Minecraft servers like Velocity or BungeeCord.</em></p><div class="danger custom-block"><p class="custom-block-title">NOTE</p><p>You need to have the mod/plugin installed on every Minecraft server that&#39;s running behind your proxy.</p></div><p>If the proxy and all Minecraft servers are running on the same machine, you have to assign a different port for every instance of voice chat on each Minecraft server.</p><h3 id="velocity-bungeecord-waterfall" tabindex="-1">Velocity/BungeeCord/Waterfall <a class="header-anchor" href="#velocity-bungeecord-waterfall" aria-label="Permalink to &quot;Velocity/BungeeCord/Waterfall&quot;">​</a></h3><p>Download and install the <a href="/minecraft/voicechat/downloads#velocity">Simple Voice Chat Velocity Plugin</a> or the <a href="/minecraft/voicechat/downloads#bungeecord-waterfall">Simple Voice Chat BungeeCord/Waterfall Plugin</a> respectively.</p><p>The plugin will automatically detect the port of each voice chat server and will forward everything to the correct destination.</p><p>Note that when using voice chat through the proxy, the <code>voice_host</code> config option of each voice chat server is ignored - the proxy plugin will automatically detect the address and port of each server. Use the <code>voice_host</code> config option in the <a href="./proxy_config">voice chat proxy config</a> instead, if you want to change where clients are trying to connect to.</p><p>You only need to open a single UDP port for the proxy server. By default this is the same port as the Minecraft server port of the proxy. So by default for velocity, your voice chat port will be <code>25577</code>. You can change the port in the <a href="./proxy_config">voice chat proxy config</a>.</p><h3 id="other-minecraft-proxies" tabindex="-1">Other Minecraft Proxies <a class="header-anchor" href="#other-minecraft-proxies" aria-label="Permalink to &quot;Other Minecraft Proxies&quot;">​</a></h3><div class="info custom-block"><p class="custom-block-title">NOTE</p><p>This also applies if you are using Velocity, BungeeCord or Waterfall, but you don&#39;t want to install the plugin on the proxy.</p></div><p>Make sure each voice chat port of each Minecraft server is opened to the public in the firewall.</p><p>If the proxy and the Minecraft servers are running on different machines, you need to set <code>voice_host</code> in the <a href="./server_config">voice chat server config</a> of each Minecraft server to the public IP address (Without the port) of the server its running on (Not the IP of the proxy). You also need to make sure each voice port is opened in the firewall of each server.</p><h2 id="generic-udp-proxy-setup" tabindex="-1">Generic UDP Proxy Setup <a class="header-anchor" href="#generic-udp-proxy-setup" aria-label="Permalink to &quot;Generic UDP Proxy Setup&quot;">​</a></h2><p>You need to set <code>voice_host</code> to the proxy address (IP and port) in the <a href="./server_config">voice chat server config</a>.</p>',16)]))}const u=t(i,[["render",n]]);export{f as __pageData,u as default};
