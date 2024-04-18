import{a as h,S as L,i as p}from"./assets/vendor-6e0bf343.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function i(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(e){if(e.ep)return;e.ep=!0;const a=i(e);fetch(e.href,a)}})();const v="https://pixabay.com/api/",b="43330031-9673f4a92262d12e3841226eb";async function y(t,s=1){const{data:i}=await h(v,{params:{key:b,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:s}});return i}function g(t){return t.map(({webformatURL:s,largeImageURL:i,tags:o,likes:e,views:a,comments:r,downloads:f})=>`
        <li class="gallary-item">
          <a class="gallary-link" href="${i}">
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
      `).join("")}const m=document.querySelector(".form-search"),u=document.querySelector(".gallary"),n=document.querySelector("span"),l=document.querySelector(".btn-load-more"),w=new L(".gallary a",{captionsData:"alt",captionDelay:250});m.addEventListener("submit",async t=>{t.preventDefault();const s=t.target.elements.input.value;n.classList.remove("visually-hidden"),u.innerHTML="";try{const i=await y(s);if(console.log(i),n.classList.add("visually-hidden"),s===""){l.classList.add("visually-hidden"),p.show({message:"Field must be filled!",color:"green",position:"center",timeout:2e3});return}if(Object.keys(i.hits).length===0){l.classList.add("visually-hidden"),p.show({message:"Sorry, there are no images matching your search query. Please try again!",color:"blue",position:"center",timeout:3e3}),m.reset();return}u.insertAdjacentHTML("beforeend",g(i.hits)),w.refresh(),l.classList.remove("visually-hidden")}catch(i){console.log(i.message)}});let c=2;l.addEventListener("click",async()=>{n.classList.remove("visually-hidden"),l.disabled=!0;const t=await y(c);c+=1,u.insertAdjacentHTML("beforeend",g(t.hits)),n.classList.add("visually-hidden"),l.disabled=!1;const s=Math.ceil(t.totalHits/t.hits.length);c>=s&&l.classList.add("visually-hidden")});let E=document.querySelector(".gallary-item"),d=E.getBoundingClientRect();for(const t in d)if(typeof d[t]!="function"){let s=document.createElement("p");s.textContent=`${t} : ${d[t]}`,document.body.appendChild(s)}window.scrollBy(0,window.innerHeight);
//# sourceMappingURL=commonHelpers.js.map
