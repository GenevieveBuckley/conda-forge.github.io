"use strict";(self.webpackChunkcf_infra_docs=self.webpackChunkcf_infra_docs||[]).push([[3894],{45639:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>d});var i=s(85893),r=s(11151);const t={title:"2019-01-23"},o="2019-01-23 conda-forge meeting",l={id:"orga/minutes/2019-01-23",title:"2019-01-23",description:"Pinned Items",source:"@site/docs/orga/minutes/2019-01-23.md",sourceDirName:"orga/minutes",slug:"/orga/minutes/2019-01-23",permalink:"/docs/orga/minutes/2019-01-23",draft:!1,unlisted:!1,editUrl:"https://github.com/conda-forge/conda-forge.github.io/tree/refs/heads/main/docs/orga/minutes/2019-01-23.md",tags:[],version:"current",lastUpdatedAt:1709809059,formattedLastUpdatedAt:"Mar 7, 2024",frontMatter:{title:"2019-01-23"},sidebar:"docs",previous:{title:"2019-02-06",permalink:"/docs/orga/minutes/2019-02-06"},next:{title:"2019-01-09",permalink:"/docs/orga/minutes/2019-01-09"}},c={},d=[{value:"Conda-forge on Open Source Directions",id:"conda-forge-on-open-source-directions",level:2}];function a(n){const e={a:"a",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"2019-01-23-conda-forge-meeting",children:"2019-01-23 conda-forge meeting"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Pinned Items"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["Zoom instructions: ",(0,i.jsx)(e.a,{href:"https://paper.dropbox.com/doc/How-to-connect-to-zoom-odl94oveHyiRv6UqTtZE5",children:"+How to connect to zoom"})]}),"\n"]}),"\n",(0,i.jsx)(e.hr,{}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"New items"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["Journal article update\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["Target date maybe around March 2019\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"sections"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["Elections\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["aarch64 team\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"administrative bits needed ito user group"}),"\n",(0,i.jsx)(e.li,{children:"@conda-forge/arm-arch is the new team name"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["The great switchover\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["Secondary Label model\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Probably not that needed for smaller migrations"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["Future migrations\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Add gcc gxx gfortran compiler versions to pinnings (so we can build in main)"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.li,{children:'Core owns a bunch of "orphan" packages.'}),"\n",(0,i.jsxs)(e.li,{children:["Auto Pinning migration sketch\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"https://github.com/regro/cf-scripts/issues/44#issuecomment-455817718",children:"https://github.com/regro/cf-scripts/issues/44#issuecomment-455817718"})}),"\n",(0,i.jsx)(e.li,{children:"Need to handle run exports as well: watch all run_exported packages and see if their version bumps are beyond their max pin info, if so issue downstream rebuild PRs"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["Meta Channel\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"https://github.com/regro/conda-metachannel",children:"https://github.com/regro/conda-metachannel"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Blocking parts"}),"\n",(0,i.jsx)(e.li,{children:"Still need a domain / subdomain so that we can add some TLS"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.li,{children:"probably not ready yet for use internally in"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["New Arches\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["aarch64 and ppc building\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Shippable"}),"\n",(0,i.jsx)(e.li,{children:"Qemu on CI"}),"\n",(0,i.jsx)(e.li,{children:"no py2k"}),"\n",(0,i.jsxs)(e.li,{children:["targeted leaf packages and rebuild accordingly\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"numpy"}),"\n",(0,i.jsx)(e.li,{children:"scipy"}),"\n",(0,i.jsx)(e.li,{children:"opencv"}),"\n",(0,i.jsx)(e.li,{children:"jupyter"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.h2,{id:"conda-forge-on-open-source-directions",children:"Conda-forge on Open Source Directions"}),"\n"]}),"\n",(0,i.jsx)(e.li,{children:"GPU builds, Stan\u2019s email"}),"\n",(0,i.jsx)(e.li,{children:"Azure status"}),"\n",(0,i.jsx)(e.li,{children:"ESIP update"}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(a,{...n})}):a(n)}},11151:(n,e,s)=>{s.d(e,{Z:()=>l,a:()=>o});var i=s(67294);const r={},t=i.createContext(r);function o(n){const e=i.useContext(t);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:o(n.components),i.createElement(t.Provider,{value:e},n.children)}}}]);