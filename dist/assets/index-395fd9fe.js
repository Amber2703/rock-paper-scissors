import h from"https://cdn.skypack.dev/canvas-confetti";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(e){if(e.ep)return;e.ep=!0;const n=r(e);fetch(e.href,n)}})();var f={};Object.defineProperty(f,"__esModule",{value:!0});var p=function(){function t(s,r){for(var i=0;i<r.length;i++){var e=r[i];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(s,e.key,e)}}return function(s,r,i){return r&&t(s.prototype,r),i&&t(s,i),s}}();function m(t,s){if(!(t instanceof s))throw new TypeError("Cannot call a class as a function")}var v=function(){function t(){m(this,t),this.view=document.body.appendChild(document.createElement("div")),this.view.classList.add("snackbar"),this.isActive=!1,this.queue=[],this.gap=250,this.duration=5e3}return p(t,[{key:"show",value:function(r){var i=this;if(this.isActive){this.queue.push(r);return}this.isActive=!0,this.view.textContent=r,this.view.classList.add("snackbar--visible"),this.queue.shift(),setTimeout(function(){return i.hide()},this.duration)}},{key:"hide",value:function(){var r=this;this.isActive=!1,this.view.classList.remove("snackbar--visible"),this.queue.length&&setTimeout(function(){return r.show(r.queue[0])},this.gap)}}]),t}();f.default=v;var b=f,g=y(b);function y(t){return t&&t.__esModule?t:{default:t}}var u=void 0;function k(){return u||(u=new g.default),u}var l=k();function w(){const t=document.querySelectorAll("button"),s=document.getElementById("result"),r=document.getElementById("user-score"),i=document.getElementById("computer-score");let e=0,n=0;t.forEach(o=>{o.addEventListener("click",()=>{const c=d(o.id,a());s.textContent=c})});function a(){const o=["rock","paper","scissors"],c=Math.floor(Math.random()*o.length);return o[c]}function d(o,c){o===c?l.show("It's a tie!"):o==="rock"&&c==="scissors"||o==="paper"&&c==="rock"||o==="scissors"&&c==="paper"?(e++,r.textContent=e,l.show("You won! "+o+" beats "+c),h()):(n++,i.textContent=n,l.show("You lost! "+c+" beats "+o))}}const E="/assets/rock-0c25acf2.png",_="/assets/paper-98d807e0.png",L="/assets/scissors-61949738.png";document.querySelector("#app").innerHTML=`

<h1>Rock Paper Scissors Game</h1>
<p>pick one</p>

<ul>
  <li class="pick-one">
    <button id="rock">
      <img src=${E} alt="Rock" >
      rock
    </button>
  </li>
  <li class="pick-one">
    <button id="paper">
      <img src=".${_}" alt="Paper" >
      paper
    </button>
  </li>
  <li class="pick-one">
    <button id="scissors">
      <img src="${L}" alt="Scissors" >
      scissors
    </button>
  </li>
</ul>
<p id="result"></p>
<p id="scores">
  Your score: <span id="user-score">0</span>
  Computer score: <span id="computer-score">0</span>
</p>

`;w();
