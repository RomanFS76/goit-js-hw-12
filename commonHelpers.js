import{a as p,S as m,i}from"./assets/vendor-6e0bf343.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const y="https://pixabay.com/api/",g="43330031-9673f4a92262d12e3841226eb";async function f(o){const{data:s}=await p(y,{params:{key:g,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:1}});return console.log(s),s}function h(o){return o.map(({webformatURL:s,largeImageURL:r,tags:l,likes:e,views:t,comments:a,downloads:d})=>`
        <li class="gallary-item">
          <a class="gallary-link" href="${r}">
              <img 
                class="gallary-image" 
                src="${s}"
                alt="${l}"
                width = "1000"
                height = "800"
              />
          </a>
          <div class="gallary-desc">
            <ul class="gallary-desc-list">
              <li class="gallary-desc-item">
                <p>Likes</p>
                <p>${e}</p>
              </li>
              <li class="gallary-desc-item">
                <p>Views</p>
                <p>${t}</p>
              </li>
              <li class="gallary-desc-item">
                <p>Comments</p>
                <p>${a}</p>
              </li>
              <li class="gallary-desc-item">
                <p>Downloads</p>
                <p>${d}</p>
              </li>
            </ul>
          </div>
        </li>
      `).join("")}const n=document.querySelector(".form-search"),c=document.querySelector(".gallary"),u=document.querySelector("span"),L=document.querySelector(".btn-load-more"),b=new m(".gallary a",{captionsData:"alt",captionDelay:250});n.addEventListener("submit",async o=>{o.preventDefault();const s=o.target.elements.input.value;u.classList.remove("visually-hidden"),c.innerHTML="";try{const r=await f(s);if(u.classList.add("visually-hidden"),s===""){i.show({message:"Field must be filled!",color:"green",position:"center",timeout:2e3});return}Object.keys(r.hits).length===0&&i.show({message:"Sorry, there are no images matching your search query. Please try again!",color:"blue",position:"center",timeout:3e3}),c.insertAdjacentHTML("beforeend",h(r.hits)),b.refresh(),L.classList.remove("visually-hidden")}catch(r){console.log(r.message)}n.reset()});
//# sourceMappingURL=commonHelpers.js.map
