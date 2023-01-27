import{e as n}from"./app.2689229f.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h1><h2 id="\u901A\u4FE1" tabindex="-1"><a class="header-anchor" href="#\u901A\u4FE1" aria-hidden="true">#</a> \u901A\u4FE1</h2><p>\u8981\u4F7F\u7528 go-cqhttp, \u7528\u6237\u9700\u8981\u542F\u52A8 go-cqhttp, \u6B64\u65F6 go-cqhttp \u6A21\u62DF QQ \u7684\u5BA2\u6237\u7AEF\u4E0E QQ \u670D\u52A1\u5668\u8FDB\u884C\u901A\u8BAF, \u7528\u6237\u53EF\u4EE5\u4F7F\u7528\u591A\u79CD\u65B9\u5F0F\u4E0E go-cqhttp \u8FDB\u884C\u901A\u4FE1, \u7136\u540E\u95F4\u63A5\u5B9E\u73B0 QQ \u64CD\u4F5C.</p><table><thead><tr><th>\u901A\u4FE1\u65B9\u5F0F</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>\u6B63\u5411 HTTP</td><td>\u5BA2\u6237\u7AEF\u901A\u8FC7 HTTP \u7684\u65B9\u5F0F\u5411 go-cqhttp \u53D1\u9001\u8BF7\u6C42, \u8FD9\u79CD\u901A\u4FE1\u65B9\u5F0F\u4EC5\u7528\u6765\u6267\u884C &quot;\u4E3B\u52A8\u64CD\u4F5C&quot;, \u4F8B\u5982\u53D1\u9001\u6D88\u606F, \u5E76\u4E0D\u53EF\u4EE5\u5B9E\u73B0\u63A5\u6536\u6D88\u606F</td></tr><tr><td>\u53CD\u5411 HTTP</td><td>\u5BA2\u6237\u7AEF\u4F5C\u4E3A HTTP \u670D\u52A1\u7AEF, go-cqhttp \u4F1A\u4E3B\u52A8\u5411\u5BA2\u6237\u7AEF\u53D1\u9001 HTTP \u8BF7\u6C42, \u8FD9\u79CD\u901A\u4FE1\u65B9\u5F0F\u7528\u6765\u5B9E\u73B0 &quot;\u88AB\u52A8\u64CD\u4F5C&quot;, \u4F8B\u5982\u63A5\u6536\u6D88\u606F, \u5E76\u4E0D\u80FD\u591F\u5B9E\u73B0\u53D1\u9001\u6D88\u606F</td></tr><tr><td>\u6B63\u5411 WebSocket</td><td>\u670D\u52A1\u7AEF\u4F1A\u4F5C\u4E3A WebSocket \u670D\u52A1\u7AEF, \u5BA2\u6237\u7AEF\u8FDE\u63A5, \u7136\u540E\u4E0E\u4E4B\u901A\u4FE1, \u7531\u4E8E WebSocket \u662F\u53CC\u5DE5\u7684, \u6240\u4EE5\u8BE5\u65B9\u5F0F\u65E2\u53EF\u4EE5\u8FDB\u884C\u53D1\u9001\u6D88\u606F, \u4E5F\u53EF\u4EE5\u8FDB\u884C\u63A5\u6536\u6D88\u606F</td></tr><tr><td>\u53CD\u5411 WebSocket</td><td>\u5BA2\u6237\u7AEF\u9700\u4F5C\u4E3A WebSocket \u670D\u52A1\u7AEF, go-cqhttp \u4F1A\u8FDE\u63A5\u5BA2\u6237\u7AEF, \u7136\u540E\u4E0E\u4E4B\u901A\u4FE1, \u901A\u4FE1\u7684\u6570\u636E\u5185\u5BB9\u4E0E\u6B63\u5411 WebSocket \u662F\u4E00\u81F4\u7684</td></tr></tbody></table><p>\u5173\u4E8E\u4E0A\u8FF0\u901A\u4FE1\u65B9\u5F0F, \u5728 go-cqhttp \u7684\u914D\u7F6E\u6587\u4EF6\u4E2D\u5747\u80FD\u591F\u914D\u7F6E, \u4F8B\u5982\u6307\u5B9A\u6B63\u5411 HTTP \u65B9\u5F0F\u4E2D, go-cqhttp \u76D1\u542C\u7684\u5730\u5740\u4E0E\u7AEF\u53E3, \u6216\u8005\u6307\u5B9A\u8BBF\u95EE\u4EE4\u724C</p><h3 id="\u6B63\u5411-http" tabindex="-1"><a class="header-anchor" href="#\u6B63\u5411-http" aria-hidden="true">#</a> \u6B63\u5411 HTTP</h3><p>\u4F7F\u7528\u6B63\u5411 HTTP \u8C03\u7528 API \u65F6, \u53EA\u9700\u8981\u5411 <code>/API\u7EC8\u7ED3\u70B9</code> \u53D1\u9001\u8BF7\u6C42\u5373\u53EF, \u4F20\u53C2\u65F6, \u53EF\u4EE5\u4F7F\u7528 GET \u8BF7\u6C42, \u4E5F\u53EF\u4EE5\u4F7F\u7528 POST \u8BF7\u6C42, \u5173\u4E8E\u8BF7\u6C42\u7684\u5177\u4F53\u65B9\u5F0F, \u5728\u6587\u6863\u7684 API \u90E8\u5206\u4E2D\u8BE6\u7EC6\u8BB2\u89E3</p><blockquote><p>\u94FE\u63A5: <a href="/api">go-cqhttp \u5E2E\u52A9\u4E2D\u5FC3: API</a></p></blockquote><h3 id="\u53CD\u5411-http" tabindex="-1"><a class="header-anchor" href="#\u53CD\u5411-http" aria-hidden="true">#</a> \u53CD\u5411 HTTP</h3><p>\u4F7F\u7528\u53CD\u5411 HTTP \u65F6, go-cqhttp \u4F1A\u5C06 &quot;\u4E0A\u62A5&quot; \u901A\u8FC7 POST \u8BF7\u6C42\u7684\u65B9\u5F0F\u4E3B\u52A8\u53D1\u9001\u7ED9\u5BA2\u6237\u7AEF, \u5173\u4E8E\u8BF7\u6C42\u4F53\u7684\u8BE6\u7EC6\u5185\u5BB9, \u5728\u6587\u6863\u7684 Event \u90E8\u5206\u4E2D\u6709\u8BE6\u7EC6\u8BB2\u89E3</p><table><thead><tr><th>\u8BF7\u6C42\u5934</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>X-Self-ID</td><td>\u767B\u9646\u7684 QQ</td></tr><tr><td>X-Signature</td><td>\u7B7E\u540D(Optional)</td></tr></tbody></table><blockquote><p>\u94FE\u63A5: <a href="/event">go-cqhttp \u5E2E\u52A9\u4E2D\u5FC3: Event</a></p></blockquote><p>\u5047\u8BBE\u914D\u7F6E\u6307\u5B9A\u7684\u4E0A\u62A5 URL \u4E3A http://127.0.0.1:8080/, \u4EE5\u79C1\u804A\u6D88\u606F\u4E3A\u4F8B\uFF0C\u4E8B\u4EF6\u4E0A\u62A5\u7684 POST \u8BF7\u6C42\u5982\u4E0B:</p><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code><span class="token request-line"><span class="token method property">POST</span> <span class="token request-target url">/</span> <span class="token http-version property">HTTP/1.1</span></span>
<span class="token header"><span class="token header-name keyword">Host</span><span class="token punctuation">:</span> <span class="token header-value">127.0.0.1:8080</span></span>
<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">application/json</span></span>
<span class="token header"><span class="token header-name keyword">X-Self-ID</span><span class="token punctuation">:</span> <span class="token header-value">10001000</span></span>
<span class="token application-json">
<span class="token punctuation">{</span>
    <span class="token property">&quot;time&quot;</span><span class="token operator">:</span> <span class="token number">1515204254</span><span class="token punctuation">,</span>
    <span class="token property">&quot;self_id&quot;</span><span class="token operator">:</span> <span class="token number">10001000</span><span class="token punctuation">,</span>
    <span class="token property">&quot;post_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;message&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;message_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;private&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;sub_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;friend&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;message_id&quot;</span><span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
    <span class="token property">&quot;user_id&quot;</span><span class="token operator">:</span> <span class="token number">12345678</span><span class="token punctuation">,</span>
    <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u4F60\u597D\uFF5E&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;raw_message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u4F60\u597D\uFF5E&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;font&quot;</span><span class="token operator">:</span> <span class="token number">456</span><span class="token punctuation">,</span>
    <span class="token property">&quot;sender&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;nickname&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u5C0F\u4E0D\u70B9&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;sex&quot;</span><span class="token operator">:</span> <span class="token string">&quot;male&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;age&quot;</span><span class="token operator">:</span> <span class="token number">18</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h3 id="websocket" tabindex="-1"><a class="header-anchor" href="#websocket" aria-hidden="true">#</a> WebSocket</h3><p>\u6B63\u5411 WebSocket \u548C\u53CD\u5411 WebSocket \u64CD\u4F5C\u65E0\u5F02, \u5173\u4E8E\u6570\u636E\u683C\u5F0F, \u4E5F\u540C\u6837\u5728 API \u548C Event \u90E8\u5206\u6709\u8BE6\u7EC6\u8BB2\u89E3</p><h1 id="\u9274\u6743" tabindex="-1"><a class="header-anchor" href="#\u9274\u6743" aria-hidden="true">#</a> \u9274\u6743</h1><p>\u5728\u901A\u4FE1\u4E2D, \u4E3A\u4E86\u4FDD\u8BC1\u5B89\u5168, go-cqhttp \u63D0\u4F9B\u4E86 Access token \u548C\u7B7E\u540D\u6765\u4FDD\u8BC1\u5B89\u5168\u6027.</p><h2 id="\u8BBF\u95EE\u53E3\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u8BBF\u95EE\u53E3\u4EE4" aria-hidden="true">#</a> \u8BBF\u95EE\u53E3\u4EE4</h2><p>\u5728 HTTP \u548C WebSocket \u901A\u4FE1\u4E2D, \u7528\u6237\u9700\u8981\u5728\u8BF7\u6C42\u5934\u4E2D\u52A0\u5165 &quot;Authorization&quot; \u5934, \u683C\u5F0F\u5982\u4E0B:</p><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code><span class="token request-line"><span class="token method property">GET</span> <span class="token request-target url">/api</span> <span class="token http-version property">HTTP/1.1</span></span>
...
<span class="token header"><span class="token header-name keyword">Authorization</span><span class="token punctuation">:</span> <span class="token header-value">Bearer access-token</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u4F8B\u5982, \u5F53\u4F60\u5728\u914D\u7F6E\u6587\u4EF6\u4E2D\u6307\u5B9A Access token \u4E3A &quot;114514&quot; \u7684\u65F6\u5019, \u90A3\u4E48\u4EFB\u4F55\u901A\u8FC7 HTTP \u548C\u6B63\u5411 WebSocket \u8FDE\u63A5\u5230 go-cqhttp \u7684\u8BF7\u6C42\u90FD\u9700\u8981\u6DFB\u52A0\u8FD9\u4E2A\u5934</p><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code><span class="token request-line"><span class="token method property">GET</span> <span class="token request-target url">/api</span> <span class="token http-version property">HTTP/1.1</span></span>
...
<span class="token header"><span class="token header-name keyword">Authorization</span><span class="token punctuation">:</span> <span class="token header-value">Bearer 114514</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u5982\u679C\u662F\u53CD\u5411 WebSocket, \u90A3\u4E48 go-cqhttp \u5728\u8FDE\u63A5\u5230\u4F60\u7684\u7A0B\u5E8F\u65F6, \u4E5F\u4F1A\u5728\u8BF7\u6C42\u5934\u4E2D\u52A0\u5165\u5BF9\u5E94\u7684\u8BBF\u95EE\u53E3\u4EE4</p><h2 id="\u4E0A\u62A5\u7B7E\u540D" tabindex="-1"><a class="header-anchor" href="#\u4E0A\u62A5\u7B7E\u540D" aria-hidden="true">#</a> \u4E0A\u62A5\u7B7E\u540D</h2><p>\u5982\u679C\u914D\u7F6E\u4E2D\u7ED9\u5B9A\u4E86 <code>secret</code> \u5373\u7B7E\u540D\u5BC6\u94A5, \u90A3\u4E48\u5728 go-cqhttp \u53D1\u9001\u4E0A\u62A5\u4FE1\u606F\u5230\u4F60\u7684\u7A0B\u5E8F\u65F6, \u90FD\u4F1A\u5728\u8BF7\u6C42\u5934\u4E2D\u52A0\u5165\u5BF9\u5E94 HMAC \u7B7E\u540D, \u5373 <code>X-Signature</code> \u5934, \u5982:</p><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code><span class="token request-line"><span class="token method property">POST</span> <span class="token request-target url">/</span> <span class="token http-version property">HTTP/1.1</span></span>
...
<span class="token header"><span class="token header-name keyword">X-Signature</span><span class="token punctuation">:</span> <span class="token header-value">sha1=f9ddd4863ace61e64f462d41ca311e3d2c1176e2</span></span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="\u4E0A\u62A5" tabindex="-1"><a class="header-anchor" href="#\u4E0A\u62A5" aria-hidden="true">#</a> \u4E0A\u62A5</h2><p>\u4E0A\u62A5, \u6216\u8005\u53EB\u505A &quot;Event&quot;, \u662F go-cqhttp \u5411\u5BA2\u6237\u7AEF\u4E3B\u52A8\u63D0\u4F9B\u6570\u636E\u7684\u65B9\u5F0F, \u4F8B\u5982\u5F53\u63A5\u6536\u5230\u6D88\u606F, \u7FA4\u804A\u6D88\u606F, \u6216\u79C1\u804A\u6D88\u606F, \u4EA6\u6216\u662F\u5176\u4ED6\u65F6\u95F4, \u4F8B\u5982\u6D88\u606F\u88AB\u64A4\u56DE, \u7BA1\u7406\u5458\u88AB\u8BBE\u7F6E, \u7FA4\u804A\u7CBE\u534E\u6D88\u606F, \u597D\u53CB\u6DFB\u52A0\u8BF7\u6C42, \u8BF8\u5982\u6B64\u7C7B.</p><p>\u9700\u8981\u6CE8\u610F\u7684\u662F, \u4E0A\u62A5\u65F6, \u4F1A\u6839\u636E go-cqhttp \u7684\u914D\u7F6E\u6587\u4EF6, \u4F7F\u7528\u4E24\u79CD\u4E0A\u62A5\u683C\u5F0F, <code>array</code> \u6216 <code>string</code>, \u5B83\u4EEC\u8868\u793A\u7684\u5B9E\u9645\u4E0A\u662F go-cqhttp \u5728\u4E0A\u62A5\u6570\u636E\u65F6, \u5BF9\u4E8E\u6D88\u606F\u94FE, \u4F7F\u7528\u7684\u662F\u6570\u7EC4\u683C\u5F0F, \u8FD8\u662F\u5B57\u7B26\u4E32\u683C\u5F0F, \u8FD9\u4E2A\u5728\u540E\u9762\u7684\u6D88\u606F\u90E8\u5206\u4E2D\u4F1A\u8BE6\u7EC6\u8BB2\u89E3</p><p>\u5173\u4E8E\u4E0A\u62A5\u7684\u5177\u4F53\u8BF4\u660E\u4EE5\u53CA\u5404\u79CD\u4E0A\u62A5\u7C7B\u578B\u7684\u6570\u636E\u58F0\u660E, \u53EF\u4EE5\u5728\u6587\u6863\u7684 Event \u90E8\u5206\u770B\u5230: <a href="/event">go-cqhttp \u5E2E\u52A9\u4E2D\u5FC3: Event</a></p><h2 id="\u52A8\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u52A8\u4F5C" aria-hidden="true">#</a> \u52A8\u4F5C</h2><p>\u52A8\u4F5C, \u82F1\u6587 &quot;Action&quot; , \u6216\u8005\u53EB\u505A &quot;API&quot;, \u662F\u5BA2\u6237\u7AEF\u8C03\u7528 go-cqhttp \u5B9E\u73B0\u4E00\u4E9B\u64CD\u4F5C\u7684\u65B9\u5F0F, \u4F8B\u5982\u53D1\u9001\u6D88\u606F, \u64A4\u56DE\u6D88\u606F, \u540C\u610F\u597D\u53CB\u8BF7\u6C42\u7B49\u7B49.</p><p>\u5411 go-cqhttp \u53D1\u9001\u52A8\u4F5C\u7684\u65B9\u5F0F\u5728\u4E0A\u8FF0\u7684\u901A\u4FE1\u90E8\u5206\u4E2D\u5DF2\u6709\u8BB2\u89E3, \u5927\u6982\u662F\u652F\u6301\u8FD9\u4E9B\u683C\u5F0F: GET \u8BF7\u6C42\u4E2D\u7684 URL \u53C2\u6570, POST \u8BF7\u6C42\u4E2D\u4F7F\u7528 JSON, POST \u8BF7\u6C42\u4E2D\u4F7F\u7528\u8868\u5355, \u4EE5\u53CA WebSocket \u4E2D\u4F7F\u7528 JSON.</p><p>\u5173\u4E8E\u5177\u4F53\u5982\u4F55\u4F7F\u7528 Action, \u5728\u6587\u6863\u7684 API \u90E8\u5206\u53EF\u4EE5\u770B\u5230: <a href="/api">go-cqhttp \u5E2E\u52A9\u4E2D\u5FC3: API</a></p><h2 id="\u6D88\u606F" tabindex="-1"><a class="header-anchor" href="#\u6D88\u606F" aria-hidden="true">#</a> \u6D88\u606F</h2><p>QQ \u7684\u6D88\u606F\u5B9E\u9645\u4E0A\u7531\u4E00\u4E2A\u4E2A\u7684 &quot;\u90E8\u5206&quot; \u6784\u6210, \u4F8B\u5982 <code>@\u7FA4\u4E3B \u5728\u8FD9\u826F\u8FB0\u4F73\u8282, \u8981\u4E0D\u7FA4\u4E3B\u5973\u88C5\u7ED9\u5927\u5BB6\u5EB7\u5EB7\u5457</code> \u4E2D\u9996\u5148\u662F at \u7FA4\u4E3B\u7684\u4E00\u4E2A\u90E8\u5206, \u7136\u540E\u662F\u4E00\u4E32\u6587\u672C. \u6211\u4EEC\u79F0\u8FD9\u6837\u7684\u6D88\u606F\u53EB\u505A\u6D88\u606F\u4E32.</p><p>\u6D88\u606F\u4E32\u6709\u4E24\u79CD\u8868\u8FBE\u65B9\u5F0F, \u4E00\u79CD\u662F\u6570\u7EC4\u683C\u5F0F, \u662F\u4E00\u4E2A JSON \u6570\u7EC4, \u7136\u540E\u6D88\u606F\u7684\u6BCF\u4E00\u4E2A\u90E8\u5206\u90FD\u662F\u6570\u7EC4\u7684\u4E00\u4E2A\u5143\u7D20, \u53E6\u4E00\u79CD\u662F\u7EAF\u6587\u672C\u683C\u5F0F, \u901A\u8FC7\u7279\u6B8A\u7684\u7F16\u7801\u5C06\u4E00\u4E2A\u6D88\u606F\u4E32\u5B58\u653E\u5230\u4E00\u4E2A\u5B57\u7B26\u4E32\u4E2D, \u8FD9\u79CD\u7F16\u7801\u53EB\u505A CQ \u7801.</p><h3 id="\u6570\u7EC4\u683C\u5F0F\u6D88\u606F" tabindex="-1"><a class="header-anchor" href="#\u6570\u7EC4\u683C\u5F0F\u6D88\u606F" aria-hidden="true">#</a> \u6570\u7EC4\u683C\u5F0F\u6D88\u606F</h3><p>\u6570\u7EC4\u6D88\u606F\u7684\u6BCF\u4E00\u4E2A\u5143\u7D20, \u662F\u5404\u6837\u7684\u683C\u5F0F</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u6D88\u606F\u7C7B\u578B&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;\u6570\u636E\u53C2\u6570\u540D&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u6570\u636E\u53C2\u6570\u540D&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u7EC4\u88C5\u6210\u6570\u7EC4, \u5C31\u662F\u8FD9\u6837:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;at&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;qq&quot;</span><span class="token operator">:</span> <span class="token number">123456</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u65E9\u4E0A\u597D\u554A&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>\u5728\u6587\u672C\u7C7B\u578B\u7684\u6D88\u606F\u4E32\u4E2D, \u666E\u901A\u6D88\u606F\u662F\u76F4\u63A5\u88AB\u8868\u793A\u51FA\u6765\u7684, \u5728 JSON \u6570\u7EC4\u683C\u5F0F\u7684\u6D88\u606F\u4E32\u4E2D, \u8868\u793A\u4E00\u4E2A\u6587\u672C\u6D88\u606F\u5185\u5BB9, \u683C\u5F0F\u5982\u4E0B:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u6587\u672C\u503C&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="\u5B57\u7B26\u4E32\u683C\u5F0F\u6D88\u606F" tabindex="-1"><a class="header-anchor" href="#\u5B57\u7B26\u4E32\u683C\u5F0F\u6D88\u606F" aria-hidden="true">#</a> \u5B57\u7B26\u4E32\u683C\u5F0F\u6D88\u606F</h3><p>\u5B57\u7B26\u4E32\u683C\u5F0F\u6D88\u606F\u4E5F\u5C31\u662F\u4F7F\u7528 CQ \u7801\u5C06\u6BCF\u4E00\u4E2A\u6D88\u606F\u7684\u7279\u6B8A\u5185\u5BB9\u90E8\u5206\u7F16\u7801\u4E3A CQ \u7801\u683C\u5F0F, \u7136\u540E\u5D4C\u5165\u5230\u5B57\u7B26\u4E32\u4E2D, \u4F8B\u5982\u8FD9\u6837:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[CQ:face,id=178]\u770B\u770B\u6211\u521A\u62CD\u7684\u7167\u7247[CQ:image,file=123.jpg]
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u4E0A\u9762\u7684\u6D88\u606F\u5305\u542B: \u4E00\u4E2A QQ \u8868\u60C5, \u4E00\u4E32\u6587\u672C, \u4E00\u4E2A\u56FE\u7247.</p><p>\u5173\u4E8E CQ \u7801\u7684\u8BE6\u7EC6\u4ECB\u7ECD, \u53C2\u9605: <a href="/cqcode">go-cqhttp \u5E2E\u52A9\u4E2D\u5FC3: CQ \u7801</a></p>`,50);function t(p,o){return e}var l=s(a,[["render",t]]);export{l as default};
