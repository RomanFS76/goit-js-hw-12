import{a as f,S as L,i as u}from"./assets/vendor-6e0bf343.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function l(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=l(e);fetch(e.href,s)}})();const v="https://pixabay.com/api/",b="43330031-9673f4a92262d12e3841226eb";async function p(t,a=1,l=20){const{data:i}=await f(v,{params:{key:b,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:a}});return i}function m(t){return t.map(({webformatURL:a,largeImageURL:l,tags:i,likes:e,views:s,comments:n,downloads:g})=>`
        <li class="gallary-item">
          <a class="gallary-link" href="${l}">
              <img 
                class="gallary-image" 
                src="${a}"
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
                <p>${s}</p>
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
      `).join("")}const h=document.querySelector(".form-search"),c=document.querySelector(".gallary"),o=document.querySelector("span"),r=document.querySelector(".btn-load-more"),w=new L(".gallary a",{captionsData:"alt",captionDelay:250});let y=null;h.addEventListener("submit",async t=>{t.preventDefault();const a=t.target.elements.input.value;y=a,o.classList.remove("visually-hidden"),r.classList.add("visually-hidden"),c.innerHTML="";try{const l=await p(a);if(a===""){o.classList.add("visually-hidden"),u.show({message:"Field must be filled!",color:"green",position:"center",timeout:2e3});return}if(Object.keys(l.hits).length===0){o.classList.add("visually-hidden"),u.show({message:"Sorry, there are no images matching your search query. Please try again!",color:"blue",position:"center",timeout:3e3}),h.reset();return}l.totalHits>15&&r.classList.remove("visually-hidden"),c.insertAdjacentHTML("beforeend",m(l.hits)),w.refresh(),o.classList.add("visually-hidden")}catch(l){console.log(l.message)}});let d=1;r.addEventListener("click",async()=>{r.classList.add("visually-hidden"),o.classList.remove("visually-hidden"),r.disabled=!0;try{d+=1;const t=await p(y,d);r.classList.remove("visually-hidden"),o.classList.add("visually-hidden"),c.insertAdjacentHTML("beforeend",m(t.hits)),r.disabled=!1;const l=c.firstElementChild.getBoundingClientRect().height*2;window.scrollBy({top:l,left:0,behavior:"smooth"});const i=Math.ceil(t.totalHits/t.hits.length);d>=i&&(r.classList.add("visually-hidden"),u.show({message:"We're sorry, but you've reached the end of search results.",color:"red",position:"topLeft",timeout:2e3}))}catch(t){console.log(t.message)}});
//# sourceMappingURL=commonHelpers.js.map
