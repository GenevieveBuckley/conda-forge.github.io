"use strict";(self.webpackChunkcf_infra_docs=self.webpackChunkcf_infra_docs||[]).push([[4575],{25002:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var r=t(85893),s=t(11151);const o={},i="Rust 1.75 requires setting newer MACOSX_DEPLOYMENT_TARGET",a={permalink:"/news/2024/01/29/rust-175-osx-sdk",source:"@site/news/2024-01-29-rust-175-osx-sdk.md",title:"Rust 1.75 requires setting newer MACOSX_DEPLOYMENT_TARGET",description:"With the release of rust 1.75, we now require setting the minimal",date:"2024-01-29T00:00:00.000Z",formattedDate:"January 29, 2024",tags:[],hasTruncateMarker:!1,authors:[],frontMatter:{},unlisted:!1,prevItem:{title:"Dropping CUDA 11.2 on 2024 April 22",permalink:"/news/2024/03/06/dropping-cuda-112"},nextItem:{title:"Python 3.12 migration and Python 3.11 by default",permalink:"/news/2023/09/25/python-312-migration-and-python-311-by-default"}},c={authorsImageUrls:[]},d=[];function l(e){const n={a:"a",code:"code",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["With the release of ",(0,r.jsx)(n.code,{children:"rust 1.75"}),", we now require setting the minimal\n",(0,r.jsx)(n.code,{children:"MACOSX_DEPLOYMENT_TARGET"})," to at least ",(0,r.jsx)(n.code,{children:"10.12"}),". You can do this by appending\n",(0,r.jsx)(n.code,{children:"recipe/conda_build_config.yaml"})," with the following content:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"c_stdlib_version:       # [osx and x86]\n  - '10.12'             # [osx and x86]\n"})}),"\n",(0,r.jsxs)(n.p,{children:["and adding ",(0,r.jsx)(n.code,{children:'{{ stdlib("c") }}'})," as build dependency next to your compiler jinja:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'  build:\n    - {{ compiler("rust") }}\n    - {{ stdlib("c") }}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Note: This entry was update in April 2024 to reflect the new infrastructure for\nsetting ",(0,r.jsx)(n.code,{children:"MACOSX_DEPLOYMENT_TARGET"}),", see\n",(0,r.jsx)(n.a,{href:"https://conda-forge.org/news/2024/03/24/stdlib-migration/",children:"here"}),"."]})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>i});var r=t(67294);const s={},o=r.createContext(s);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);