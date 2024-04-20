import{a as f,S as L,i as u}from"./assets/vendor-6e0bf343.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const l of e)if(l.type==="childList")for(const n of l.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const l={};return e.integrity&&(l.integrity=e.integrity),e.referrerPolicy&&(l.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?l.credentials="include":e.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(e){if(e.ep)return;e.ep=!0;const l=t(e);fetch(e.href,l)}})();const v="https://pixabay.com/api/",b="43330031-9673f4a92262d12e3841226eb";async function p(s,a=1,t=20){const{data:r}=await f(v,{params:{key:b,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:a}});return r}function y(s){return s.map(({webformatURL:a,largeImageURL:t,tags:r,likes:e,views:l,comments:n,downloads:g})=>`
        <li class="gallary-item">
          <a class="gallary-link" href="${t}">
              <img 
                class="gallary-image" 
                src="${a}"
                alt="${r}"
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
      `).join("")}const h=document.querySelector(".form-search"),c=document.querySelector(".gallary"),o=document.querySelector("span"),i=document.querySelector(".btn-load-more"),w=new L(".gallary a",{captionsData:"alt",captionDelay:250});let m=null;h.addEventListener("submit",async s=>{s.preventDefault();const a=s.target.elements.input.value;m=a,o.classList.remove("visually-hidden"),i.classList.add("visually-hidden"),c.innerHTML="";try{const t=await p(a);if(console.log(t),a===""){o.classList.add("visually-hidden"),u.show({message:"Field must be filled!",color:"green",position:"center",timeout:2e3});return}if(Object.keys(t.hits).length===0){o.classList.add("visually-hidden"),u.show({message:"Sorry, there are no images matching your search query. Please try again!",color:"blue",position:"center",timeout:3e3}),h.reset();return}c.insertAdjacentHTML("beforeend",y(t.hits)),w.refresh(),i.classList.remove("visually-hidden"),console.log(t),Object.keys(t.hits).length<15&&i.classList.add("visually-hidden"),o.classList.add("visually-hidden")}catch(t){console.log(t.message)}});let d=1;i.addEventListener("click",async()=>{i.classList.add("visually-hidden"),o.classList.remove("visually-hidden"),i.disabled=!0;try{d+=1;const s=await p(m,d);i.classList.remove("visually-hidden"),o.classList.add("visually-hidden"),c.insertAdjacentHTML("beforeend",y(s.hits)),i.disabled=!1;const t=c.firstElementChild.getBoundingClientRect().height*2;window.scrollBy({top:t,left:0,behavior:"smooth"});const r=Math.ceil(s.totalHits/s.hits.length);d>=r&&(i.classList.add("visually-hidden"),u.show({message:"We're sorry, but you've reached the end of search results.",color:"red",position:"topLeft",timeout:2e3}))}catch(s){console.log(s.message)}});
//# sourceMappingURL=commonHelpers.js.map
