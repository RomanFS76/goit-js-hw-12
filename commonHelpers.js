import{a as p,S as m,i as l}from"./assets/vendor-6e0bf343.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const y="https://pixabay.com/api/",f="43330031-9673f4a92262d12e3841226eb";async function g(a){const{data:s}=await p(y,{params:{key:f,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15}});return s}function h(a){return a.map(({webformatURL:s,largeImageURL:r,tags:o,likes:e,views:t,comments:i,downloads:d})=>`
        <li class="gallary-item">
          <a class="gallary-link" href="${r}">
              <img 
                class="gallary-image" 
                src="${s}"
                alt="${o}"
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
                <p>${i}</p>
              </li>
              <li class="gallary-desc-item">
                <p>Downloads</p>
                <p>${d}</p>
              </li>
            </ul>
          </div>
        </li>
      `).join("")}const n=document.querySelector(".form-search"),c=document.querySelector(".gallary"),u=document.querySelector("span"),L=new m(".gallary a",{captionsData:"alt",captionDelay:250});n.addEventListener("submit",async a=>{a.preventDefault();const s=a.target.elements.input.value;u.classList.remove("visually-hidden"),c.innerHTML="";try{const r=await g(s);if(u.classList.add("visually-hidden"),s===""){l.show({message:"Field must be filled!",color:"green",position:"center",timeout:2e3});return}Object.keys(r.hits).length===0&&l.show({message:"Sorry, there are no images matching your search query. Please try again!",color:"blue",position:"center",timeout:3e3}),c.insertAdjacentHTML("beforeend",h(r.hits)),L.refresh()}catch(r){console.log(r.message)}n.reset()});
//# sourceMappingURL=commonHelpers.js.map
