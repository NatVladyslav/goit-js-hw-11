import{S as a,i as u}from"./assets/vendor-8501dee5.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const n="https://pixabay.com",d=t=>{const i=new URLSearchParams({key:"45468562-3d934deccae668c7d7f46b2f1",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0});return console.log(`${n}/api/?${i}`),fetch(`${n}/api/?${i}`).then(s=>{if(!s.ok)throw new Error("Error!");return s.json()})};function f(t){new a(".gallery .card-list-link",{captions:!0,captionClass:"style-caption",captionsData:"alt",captionDelay:250,disableRightClick:!0}).refresh()}function m(t){return`
    <li class="card-list-item">
    <a class="card-list-link" href="${t.largeImageURL}">
        <img src="${t.webformatURL}" alt="${t.tags} class="card-list-item-img" />
        </a>
        <ul class="card-item-inside-list">
          <li class="inside-list-item">
            <h3>Likes</h3>
            <p>${t.likes}</p>
          </li>
          <li class="inside-list-item">
            <h3>Views</h3>
            <p>${t.views}</p>
          </li>
          <li class="inside-list-item">
            <h3>Comments</h3>
            <p>${t.comments}</p>
          </li>
          <li class="inside-list-item">
            <h3>Downloads</h3>
            <p>${t.downloads}</p>
          </li>
        </ul>
    </li>
    `}const c=document.querySelector(".search-form"),p=document.querySelector(".gallery"),h=t=>{t.preventDefault();const i=c.elements.user_query.value;d(i).then(s=>{console.log(s),s.hits.length===0&&u.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter",title:"Atenttion",color:"red",timeout:4e3});let o=s.hits.map(e=>m(e)).join("");p.innerHTML=o,document.querySelector(".gallery li a"),f()}).catch(s=>{console.log(s)})};c.addEventListener("submit",h);
//# sourceMappingURL=commonHelpers.js.map
