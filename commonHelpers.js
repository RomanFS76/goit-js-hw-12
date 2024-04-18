import{a as f,S as h,i as c}from"./assets/vendor-6e0bf343.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const L="https://pixabay.com/api/",v="43330031-9673f4a92262d12e3841226eb";async function p(s,r=1,a=20){const{data:i}=await f(L,{params:{key:v,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:r}});return i}function m(s){return s.map(({webformatURL:r,largeImageURL:a,tags:i,likes:e,views:t,comments:l,downloads:g})=>`
        <li class="gallary-item">
          <a class="gallary-link" href="${a}">
              <img 
                class="gallary-image" 
                src="${r}"
                alt="${i}"
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
                <p>${g}</p>
              </li>
            </ul>
          </div>
        </li>
      `).join("")}const d=document.querySelector(".form-search"),n=document.querySelector(".gallary"),o=document.querySelector("span"),y=document.querySelector(".btn-load-more"),b=new h(".gallary a",{captionsData:"alt",captionDelay:250});d.addEventListener("submit",async s=>{s.preventDefault();const r=s.target.elements.input.value;o.classList.remove("visually-hidden"),n.innerHTML="";try{const a=await p(r);if(o.classList.add("visually-hidden"),r===""){c.show({message:"Field must be filled!",color:"green",position:"center",timeout:2e3});return}Object.keys(a.hits).length===0&&c.show({message:"Sorry, there are no images matching your search query. Please try again!",color:"blue",position:"center",timeout:3e3}),n.insertAdjacentHTML("beforeend",m(a.hits)),b.refresh(),y.classList.remove("visually-hidden")}catch(a){console.log(a.message)}d.reset()});let u=1;y.addEventListener("click",async()=>{o.classList.remove("visually-hidden");const s=await p(u);u+=1,n.insertAdjacentHTML("beforeend",m(s.hits)),o.classList.add("visually-hidden"),console.log(s)});
//# sourceMappingURL=commonHelpers.js.map
