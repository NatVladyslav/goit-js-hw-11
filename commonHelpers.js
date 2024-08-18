import{i as u,S as d}from"./assets/vendor-f33cd494.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const c="https://pixabay.com",p=s=>{const i=new URLSearchParams({key:"45468562-3d934deccae668c7d7f46b2f1",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return console.log(`${c}/api/?${i}`),fetch(`${c}/api/?${i}`).then(r=>{if(!r.ok)throw new Error("Error!");return r.json()})};function m(s){return`
    <li class="card-list-item">
    <a class="card-list-link" href="${s.largeImageURL}">
        <img src="${s.webformatURL}" alt="${s.tags}" class="card-list-item-img" />
        </a>
        <ul class="card-item-inside-list">
          <li class="inside-list-item">
            <h3>Likes</h3>
            <p>${s.likes}</p>
          </li>
          <li class="inside-list-item">
            <h3>Views</h3>
            <p>${s.views}</p>
          </li>
          <li class="inside-list-item">
            <h3>Comments</h3>
            <p>${s.comments}</p>
          </li>
          <li class="inside-list-item">
            <h3>Downloads</h3>
            <p>${s.downloads}</p>
          </li>
        </ul>
    </li>
    `}const n=document.querySelector(".search-form"),f=document.querySelector(".gallery"),a=document.querySelector(".loader"),h=s=>{a.classList.add("is-open"),s.preventDefault();const i=n.elements.user_query.value;p(i).then(r=>{r.hits.length===0&&u.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter",title:"Atenttion",color:"red",timeout:4e3});let o=r.hits.map(t=>m(t)).join("");f.innerHTML=o,a.classList.remove("is-open"),new d(".gallery li a",{captions:!0,captionClass:"style-caption",captionsData:"alt",captionDelay:250,disableRightClick:!0}).refresh()}).catch(r=>{console.log(r)}),n.reset()};n.addEventListener("submit",h);
//# sourceMappingURL=commonHelpers.js.map
