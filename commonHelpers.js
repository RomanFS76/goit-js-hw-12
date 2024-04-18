import{a as f,S as h,i as u}from"./assets/vendor-6e0bf343.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const L="https://pixabay.com/api/",v="43330031-9673f4a92262d12e3841226eb";async function m(a,s=1){const{data:i}=await f(L,{params:{key:v,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:s}});return i}function y(a){return a.map(({webformatURL:s,largeImageURL:i,tags:o,likes:e,views:t,comments:r,downloads:g})=>`
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
                <p>${t}</p>
              </li>
              <li class="gallary-desc-item">
                <p>Comments</p>
                <p>${r}</p>
              </li>
              <li class="gallary-desc-item">
                <p>Downloads</p>
                <p>${g}</p>
              </li>
            </ul>
          </div>
        </li>
      `).join("")}const p=document.querySelector(".form-search"),d=document.querySelector(".gallary"),n=document.querySelector("span"),l=document.querySelector(".btn-load-more"),b=new h(".gallary a",{captionsData:"alt",captionDelay:250});p.addEventListener("submit",async a=>{a.preventDefault();const s=a.target.elements.input.value;n.classList.remove("visually-hidden"),d.innerHTML="";try{const i=await m(s);if(console.log(i),n.classList.add("visually-hidden"),s===""){l.classList.add("visually-hidden"),u.show({message:"Field must be filled!",color:"green",position:"center",timeout:2e3});return}if(Object.keys(i.hits).length===0){l.classList.add("visually-hidden"),u.show({message:"Sorry, there are no images matching your search query. Please try again!",color:"blue",position:"center",timeout:3e3}),p.reset();return}d.insertAdjacentHTML("beforeend",y(i.hits)),b.refresh(),l.classList.remove("visually-hidden")}catch(i){console.log(i.message)}});let c=2;l.addEventListener("click",async()=>{n.classList.remove("visually-hidden"),l.disabled=!0;const a=await m(c);c+=1,d.insertAdjacentHTML("beforeend",y(a.hits)),n.classList.add("visually-hidden"),l.disabled=!1;const s=Math.ceil(a.totalHits/a.hits.length);c>=s&&l.classList.add("visually-hidden")});
//# sourceMappingURL=commonHelpers.js.map
