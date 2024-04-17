import{S as c,a as u,i}from"./assets/vendor-09d7c26e.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();function d(s){return s.map(({webformatURL:r,largeImageURL:a,tags:o,likes:e,views:t,comments:l,downloads:n})=>`
        <li class="gallary-item">
          <a class="gallary-link" href="${a}">
              <img 
                class="gallary-image" 
                src="${r}"
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
                <p>${l}</p>
              </li>
              <li class="gallary-desc-item">
                <p>Downloads</p>
                <p>${n}</p>
              </li>
            </ul>
          </div>
        </li>
      `).join("")}const p="https://pixabay.com/api/",m="43330031-9673f4a92262d12e3841226eb",y=document.querySelector("span"),f=document.querySelector(".gallary"),g=new c(".gallary a",{captionsData:"alt",captionDelay:250});async function h(s,r=1){const{data:a}=await u.get(p,{params:{key:m,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:r}});if(y.classList.add("visually-hidden"),s===""){i.show({message:"Field must be filled!",color:"green",position:"center",timeout:2e3});return}return Object.keys(a.hits).length===0&&i.show({message:"Sorry, there are no images matching your search query. Please try again!",color:"blue",position:"center",timeout:3e3}),f.insertAdjacentHTML("beforeend",d(a.hits)),g.refresh(),formEl.reset(),a}const L=document.querySelector(".form-search"),b=document.querySelector(".gallary"),v=document.querySelector("span");L.addEventListener("submit",s=>{s.preventDefault();const r=s.target.elements.input.value;v.classList.remove("visually-hidden"),b.innerHTML="",h(r)});
//# sourceMappingURL=commonHelpers.js.map
