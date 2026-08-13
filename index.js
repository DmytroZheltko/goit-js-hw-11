import{a as u,S as f,i as n}from"./assets/vendor-S2qh7U4E.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const m="57130797-780b6a86ac76cc845781f498c",d="https://pixabay.com/api/";async function y(o){const s={key:m,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await u.get(d,{params:s})).data}const l=document.querySelector(".gallery"),p=document.querySelector(".loader"),g=new f(".gallery a",{captionsData:"alt",captionDelay:250});function h(o){const s=o.map(e=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${e.largeImageURL}">
            <img
              class="gallery-image"
              src="${e.webformatURL}"
              alt="${e.tags}"
            />
          </a>
          <div class="info">
            <p class="info-item">
              <span>Likes </span>
              <span>${e.likes} </span>
            </p>
            <p class="info-item">
              <span>Views </span>
              <span>${e.views} </span>
            </p>
            <p class="info-item">
              <span>Comments </span>
              <span>${e.comments} </span>
            </p>
            <p class="info-item">
              <span>Downloads </span>
              <span>${e.downloads} </span>
            </p>
          </div>
        </li>
      `).join("");l.insertAdjacentHTML("beforeend",s),g.refresh()}function L(){l.innerHTML=""}function w(){p.classList.add("active")}function v(){p.classList.remove("active")}const c=document.getElementById("search-form");c.addEventListener("submit",async o=>{o.preventDefault();const s=c.elements["search-text"].value.trim();if(!s){n.error({title:"Error",message:"Please enter a search term!",position:"topRight"});return}L(),w();try{const e=await y(s);if(console.log("API Response:",e),e.hits.length===0){n.error({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}h(e.hits)}catch(e){console.error("Error:",e),n.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}finally{v()}});
//# sourceMappingURL=index.js.map
