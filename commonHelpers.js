import{a as d,S as m,i as l}from"./assets/vendor-6e0bf343.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();async function g(o){const s="https://pixabay.com/api/",r="43330031-9673f4a92262d12e3841226eb";try{const{data:i}=await d(s,{params:{key:r,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15}});return i}catch(i){console.log(i.message)}}function f(o){return o.map(({webformatURL:s,largeImageURL:r,tags:i,likes:e,views:t,comments:a,downloads:p})=>`
        <li class="gallary-item">
          <a class="gallary-link" href="${r}">
              <img 
                class="gallary-image" 
                src="${s}"
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
                <p>${a}</p>
              </li>
              <li class="gallary-desc-item">
                <p>Downloads</p>
                <p>${p}</p>
              </li>
            </ul>
          </div>
        </li>
      `).join("")}const c=document.querySelector(".form-search"),n=document.querySelector(".gallary"),u=document.querySelector("span"),y=new m(".gallary a",{captionsData:"alt",captionDelay:250});c.addEventListener("submit",o=>{o.preventDefault();const s=o.target.elements.input.value;u.classList.add("is-visible"),n.innerHTML="",g(s).then(r=>{if(u.classList.remove("is-visible"),s===""){l.show({message:"Field must be filled!",color:"green",position:"center",timeout:2e3});return}Object.keys(r.hits).length===0&&l.show({message:"Sorry, there are no images matching your search query. Please try again!",color:"blue",position:"center",timeout:3e3}),n.insertAdjacentHTML("beforeend",f(r.hits)),y.refresh()}).catch(r=>console.log(r)),c.reset()});
//# sourceMappingURL=commonHelpers.js.map
