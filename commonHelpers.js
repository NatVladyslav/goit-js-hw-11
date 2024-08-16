(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function n(){return`
    <li>
        <img src="" alt="" />
        <ul>
          <li>
            <h3>Likes</h3>
            <p>info:</p>
          </li>
          <li>
            <h3>Views</h3>
            <p>info:</p>
          </li>
          <li>
            <h3>Comments</h3>
            <p>info:</p>
          </li>
          <li>
            <h3>Downloads</h3>
            <p>info:</p>
          </li>
        </ul>
    </li>
    `}console.log(n());
//# sourceMappingURL=commonHelpers.js.map
