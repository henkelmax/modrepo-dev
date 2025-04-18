import{_ as i,B as t,o as n,c as s,ag as c,G as o,w as h}from"./chunks/framework.BY4X30uY.js";const _=JSON.parse('{"title":"Server Setup","titleTemplate":"Simple Voice Chat","description":"","frontmatter":{"titleTemplate":"Simple Voice Chat"},"headers":[],"relativePath":"minecraft/voicechat/wiki/server_setup.md","filePath":"minecraft/voicechat/wiki/server_setup.md"}'),l={name:"minecraft/voicechat/wiki/server_setup.md"};function p(u,e,f,m,d,g){const a=t("WikiTracker"),r=t("ClientOnly");return n(),s("div",null,[e[0]||(e[0]=c('<h1 id="server-setup" tabindex="-1">Server Setup <a class="header-anchor" href="#server-setup" aria-label="Permalink to &quot;Server Setup&quot;">​</a></h1><p>Setting up your server for Simple Voice Chat requires a special networking setup. This is a little more complicated than setting up a <em>regular</em> Minecraft mod.</p><p>It is absolutely crucial for the voice chat to work, so please follow the steps very carefully and thoroughly!</p><p>In case you are using a proxy, please additionally read <a href="./proxy_setup">this</a> to learn how to set it up.</p><h3 id="if-you-are-hosting-your-server-with-a-minecraft-hosting-provider" tabindex="-1">If you are hosting your server with a Minecraft hosting provider <a class="header-anchor" href="#if-you-are-hosting-your-server-with-a-minecraft-hosting-provider" aria-label="Permalink to &quot;If you are hosting your server with a Minecraft hosting provider&quot;">​</a></h3><p><a href="./server_setup_mc_hosting">Setting Up The Server - Minecraft Hosting Provider</a></p><h3 id="if-you-are-self-hosting-your-minecraft-server" tabindex="-1">If you are self-hosting your Minecraft server <a class="header-anchor" href="#if-you-are-self-hosting-your-minecraft-server" aria-label="Permalink to &quot;If you are self-hosting your Minecraft server&quot;">​</a></h3><p><a href="./server_setup_self_hosted">Setting Up The Server - Self Hosted</a></p><h2 id="changing-the-voice-chat-port" tabindex="-1">Changing the Voice Chat Port <a class="header-anchor" href="#changing-the-voice-chat-port" aria-label="Permalink to &quot;Changing the Voice Chat Port&quot;">​</a></h2><p>You can change the port that the voice chat is running on in the server config of the mod. More information on how to find the config file <a href="./server_config">here</a>.</p><p>Just set the property <code>port</code> to the port you want. For example <code>port=24454</code> to use port <code>24454</code>.</p><h2 id="testing-the-voice-chat-connection" tabindex="-1">Testing the Voice Chat Connection <a class="header-anchor" href="#testing-the-voice-chat-connection" aria-label="Permalink to &quot;Testing the Voice Chat Connection&quot;">​</a></h2><h3 id="testing-in-game" tabindex="-1">Testing In-Game <a class="header-anchor" href="#testing-in-game" aria-label="Permalink to &quot;Testing In-Game&quot;">​</a></h3><p>You can test the voice chat connection of a specific player by typing the command <code>/voicechat test &lt;PLAYERNAME&gt;</code> in-game.</p><h3 id="testing-from-the-command-line" tabindex="-1">Testing from the Command Line <a class="header-anchor" href="#testing-from-the-command-line" aria-label="Permalink to &quot;Testing from the Command Line&quot;">​</a></h3><p>You can also test the voice chat connection without having any players on the server. <a href="https://github.com/henkelmax/svc-cli-utils" target="_blank" rel="noreferrer">This tool</a> allows you to ping the voice chat server from your command line. This is especially useful for just testing if the voice chat UDP port is open. Make sure that the voice chat server is running when using this tool.</p><div class="warning custom-block"><p class="custom-block-title">NOTE</p><p>Checking for an open voice chat port is not possible with general port checking tools. UDP is a connectionless protocol and requires the application to actually answer to check if the port is open.</p></div>',17)),o(r,null,{default:h(()=>[o(a,{name:"setup"})]),_:1})])}const y=i(l,[["render",p]]);export{_ as __pageData,y as default};
