const s="V1.30",o=["https://cdn.jsdelivr.net/gh/peterpei1186861238/ASDB@"+s,"https://raw.githubusercontent.com/peterpei1186861238/A-Soul-Database/main","https://livedb.asoulfan.com"],a=2;export default{sourceUrl:o[a]};const u=["scene","staff","type"];export function match(r,t){{let e=new Set;for(let f of t.staff)if(f!=="F")for(let i of t.skin[f])e.add(i);let n=Array.from(e);if(n.length!==0&&!l(r.skin,n))return!1}if(r.platform.indexOf(t.platform)===-1)return!1;for(let e of u)if(!l(r[e],t[e]))return!1;if(r.titlestr===""&&r.tagstr===""&&r.typestr===""||t.title.indexOf(r.titlestr)!==-1)return!0;for(let e of t.tags)if(e.indexOf(r.tags)!==-1)return!0;for(let e of t.items)for(let n of e.item)if(n[0].indexOf(r.typestr)!==-1)return!0;return!1}export function getJsonData(r){var t=new XMLHttpRequest;t.open("GET",r,!1),t.send(null);let e;try{e=JSON.parse(t.responseText)}catch(n){e={title:"error"}}finally{return e}}export function getData(r){var t=new XMLHttpRequest;t.open("GET",r,!1),t.send(null);let e;try{e=t.responseText}catch(n){e="error http"}finally{return e}}export function reverseArray(r){let t=[];for(let e=r.length-1;e>=0;e--)t.push(r[e]);return t}function l(r,t){return r.length+t.length!==Array.from(new Set([...r,...t])).length}
