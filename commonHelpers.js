import{a as f,S as h,i as d}from"./assets/vendor-6e0bf343.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const L="https://pixabay.com/api/",b="43330031-9673f4a92262d12e3841226eb";async function p(r,s=1,a=15){const{data:o}=await f(L,{params:{key:b,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:a,page:s}});return o}function m(r){return r.map(({webformatURL:s,largeImageURL:a,tags:o,likes:e,views:t,comments:i,downloads:y})=>`
        <li class="gallary-item">
          <a class="gallary-link" href="${a}">
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
                <p>${y}</p>
              </li>
            </ul>
          </div>
        </li>
      `).join("")}const u=document.querySelector(".form-search"),n=document.querySelector(".gallary"),c=document.querySelector("span"),g=document.querySelector(".btn-load-more"),v=new h(".gallary a",{captionsData:"alt",captionDelay:250});u.addEventListener("submit",async r=>{r.preventDefault();const s=r.target.elements.input.value;c.classList.remove("visually-hidden"),n.innerHTML="";try{const a=await p(s);if(c.classList.add("visually-hidden"),s===""){d.show({message:"Field must be filled!",color:"green",position:"center",timeout:2e3});return}Object.keys(a.hits).length===0&&d.show({message:"Sorry, there are no images matching your search query. Please try again!",color:"blue",position:"center",timeout:3e3}),n.insertAdjacentHTML("beforeend",m(a.hits)),v.refresh(),g.classList.remove("visually-hidden")}catch(a){console.log(a.message)}u.reset()});let l=1;g.addEventListener("click",async()=>{console.log(l);const r=await p(l);l+=1,console.log(l),n.insertAdjacentHTML("beforeend",m(r.hits));const s=Math.ceil(r.totalHits/r.hits.length);l>=s&&c.classList.add("visually-hidden")});
//# sourceMappingURL=commonHelpers.js.map
