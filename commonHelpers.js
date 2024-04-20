import{a as f,S as L,i as u}from"./assets/vendor-6e0bf343.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const l of e)if(l.type==="childList")for(const n of l.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const l={};return e.integrity&&(l.integrity=e.integrity),e.referrerPolicy&&(l.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?l.credentials="include":e.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(e){if(e.ep)return;e.ep=!0;const l=a(e);fetch(e.href,l)}})();const v="https://pixabay.com/api/",b="43330031-9673f4a92262d12e3841226eb";async function p(s,t=1,a=20){const{data:i}=await f(v,{params:{key:b,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:t}});return i}function m(s){return s.map(({webformatURL:t,largeImageURL:a,tags:i,likes:e,views:l,comments:n,downloads:g})=>`
        <li class="gallary-item">
          <a class="gallary-link" href="${a}">
              <img 
                class="gallary-image" 
                src="${t}"
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
                <p>${l}</p>
              </li>
              <li class="gallary-desc-item">
                <p>Comments</p>
                <p>${n}</p>
              </li>
              <li class="gallary-desc-item">
                <p>Downloads</p>
                <p>${g}</p>
              </li>
            </ul>
          </div>
        </li>
      `).join("")}const h=document.querySelector(".form-search"),c=document.querySelector(".gallary"),o=document.querySelector("span"),r=document.querySelector(".btn-load-more"),w=new L(".gallary a",{captionsData:"alt",captionDelay:250});let y=null;h.addEventListener("submit",async s=>{s.preventDefault();const t=s.target.elements.input.value;y=t,o.classList.remove("visually-hidden"),r.classList.add("visually-hidden"),c.innerHTML="";try{const a=await p(t);if(t===""){o.classList.add("visually-hidden"),u.show({message:"Field must be filled!",color:"green",position:"center",timeout:2e3});return}if(Object.keys(a.hits).length===0){o.classList.add("visually-hidden"),u.show({message:"Sorry, there are no images matching your search query. Please try again!",color:"blue",position:"center",timeout:3e3}),h.reset();return}c.insertAdjacentHTML("beforeend",m(a.hits)),w.refresh(),r.classList.remove("visually-hidden"),o.classList.add("visually-hidden")}catch(a){console.log(a.message)}});let d=1;r.addEventListener("click",async()=>{r.classList.add("visually-hidden"),o.classList.remove("visually-hidden"),r.disabled=!0;try{d+=1;const s=await p(y,d);r.classList.remove("visually-hidden"),o.classList.add("visually-hidden"),c.insertAdjacentHTML("beforeend",m(s.hits)),r.disabled=!1;let t=c.firstElementChild.getBoundingClientRect();console.log(t.height);const a=t.height*2;window.scrollBy({top:a,left:0,behavior:"smooth"});const i=Math.ceil(s.totalHits/s.hits.length);d>=i&&(r.classList.add("visually-hidden"),u.show({message:"We're sorry, but you've reached the end of search results.",color:"red",position:"topLeft",timeout:2e3}))}catch(s){console.log(s.message)}});
//# sourceMappingURL=commonHelpers.js.map
