import{a as h,S as L,i as p}from"./assets/vendor-6e0bf343.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function l(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(t){if(t.ep)return;t.ep=!0;const a=l(t);fetch(t.href,a)}})();const v="https://pixabay.com/api/",b="43330031-9673f4a92262d12e3841226eb";async function y(e,s=1){const{data:l}=await h(v,{params:{key:b,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:s}});return l}function g(e){return e.map(({webformatURL:s,largeImageURL:l,tags:o,likes:t,views:a,comments:r,downloads:f})=>`
        <li class="gallary-item">
          <a class="gallary-link" href="${l}">
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
                <p>${t}</p>
              </li>
              <li class="gallary-desc-item">
                <p>Views</p>
                <p>${a}</p>
              </li>
              <li class="gallary-desc-item">
                <p>Comments</p>
                <p>${r}</p>
              </li>
              <li class="gallary-desc-item">
                <p>Downloads</p>
                <p>${f}</p>
              </li>
            </ul>
          </div>
        </li>
      `).join("")}const m=document.querySelector(".form-search"),u=document.querySelector(".gallary"),n=document.querySelector("span"),i=document.querySelector(".btn-load-more"),w=new L(".gallary a",{captionsData:"alt",captionDelay:250});m.addEventListener("submit",async e=>{e.preventDefault();const s=e.target.elements.input.value;n.classList.remove("visually-hidden"),u.innerHTML="";try{const l=await y(s);if(console.log(l),n.classList.add("visually-hidden"),s===""){i.classList.add("visually-hidden"),p.show({message:"Field must be filled!",color:"green",position:"center",timeout:2e3});return}if(Object.keys(l.hits).length===0){i.classList.add("visually-hidden"),p.show({message:"Sorry, there are no images matching your search query. Please try again!",color:"blue",position:"center",timeout:3e3}),m.reset();return}u.insertAdjacentHTML("beforeend",g(l.hits)),w.refresh(),i.classList.remove("visually-hidden")}catch(l){console.log(l.message)}});let c=2;i.addEventListener("click",async()=>{n.classList.remove("visually-hidden"),i.disabled=!0;try{const e=await y(c);c+=1,u.insertAdjacentHTML("beforeend",g(e.hits)),n.classList.add("visually-hidden"),i.disabled=!1;const s=Math.ceil(e.totalHits/e.hits.length);c>=s&&i.classList.add("visually-hidden")}catch(e){console.log(e.message)}});let E=document.querySelector(".gallary-item"),d=E.getBoundingClientRect();for(const e in d)if(typeof d[e]!="function"){let s=document.createElement("p");s.textContent=`${e} : ${d[e]}`,document.body.appendChild(s)}window.scrollBy(0,window.innerHeight);
//# sourceMappingURL=commonHelpers.js.map
