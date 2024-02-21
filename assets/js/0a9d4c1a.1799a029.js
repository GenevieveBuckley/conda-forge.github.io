"use strict";(self.webpackChunkcf_infra_docs=self.webpackChunkcf_infra_docs||[]).push([[9006],{69310:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>l});var s=i(85893),o=i(11151);const t={title:"2018-11-13 conda-forge meeting",sidebar_position:1e3},r="2018-11-13 conda-forge meeting",c={id:"orga/minutes/2018-11-13",title:"2018-11-13 conda-forge meeting",description:"Pinned Items",source:"@site/docs/orga/minutes/2018-11-13.md",sourceDirName:"orga/minutes",slug:"/orga/minutes/2018-11-13",permalink:"/docs/orga/minutes/2018-11-13",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1e3,frontMatter:{title:"2018-11-13 conda-forge meeting",sidebar_position:1e3},sidebar:"defaultSidebar",previous:{title:"2018-10-30 conda-forge meeting",permalink:"/docs/orga/minutes/2018-10-30"},next:{title:"2018-11-27 conda-forge meeting",permalink:"/docs/orga/minutes/2018-11-27"}},d={},l=[];function a(n){const e={a:"a",code:"code",del:"del",h1:"h1",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{id:"conda-forge-meeting"})}),"\n",(0,s.jsx)(e.h1,{id:"2018-11-13-conda-forge-meeting",children:"2018-11-13 conda-forge meeting"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Pinned Items"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["Zoom instructions: ",(0,s.jsx)(e.a,{href:"https://paper.dropbox.com/doc/How-to-connect-to-zoom-odl94oveHyiRv6UqTtZE5",children:"+How to connect to zoom"})]}),"\n"]}),"\n",(0,s.jsx)(e.hr,{}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"New items"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.del,{children:"Discussing binary size and stripping options ("}),(0,s.jsx)(e.code,{children:"~~-S~~"}),(0,s.jsx)(e.del,{children:","})," ",(0,s.jsx)(e.code,{children:"~~-s~~"}),(0,s.jsx)(e.del,{children:","})," ",(0,s.jsx)(e.code,{children:"~~-0s~~"}),(0,s.jsx)(e.del,{children:")"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Solved. Not worth pursuing and the recommend is to strip after if space is an issue."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Previous items"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["Compiler rebuild status\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"python done for both compiler stacks"}),"\n",(0,s.jsx)(e.li,{children:"Qt: try to build on Azure?"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["(DISCUSSED/Postponed) New approach to reducing CI load ",(0,s.jsx)(e.a,{href:"https://github.com/conda-forge/conda-forge.github.io/issues/647",children:"https://github.com/conda-forge/conda-forge.github.io/issues/647"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Might be possible to not be totally insecure with work. But nobody is volunteering to do that work right now. :)"}),"\n",(0,s.jsx)(e.li,{children:"Pushing PR builds to a staging channel might be a nice UX improvement so you can test anyway."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["Copying packages to gcc7 label ",(0,s.jsx)(e.a,{href:"https://github.com/conda-forge/conda-smithy/issues/892",children:"https://github.com/conda-forge/conda-smithy/issues/892"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"MPI metapackage"}),"\n",(0,s.jsx)(e.li,{children:"Just wait for new conda 4.6 with strict channel priority, and then add main label to those builds"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["(DISCUSSED/Postponed)Mergify = auto-merge version bump PRs when CIs pass?\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://github.com/conda-forge/conda-forge-maintenance/issues/49",children:"https://github.com/conda-forge/conda-forge-maintenance/issues/49"})}),"\n",(0,s.jsx)(e.li,{children:"Worry about bot not detecting dependency changes"}),"\n",(0,s.jsx)(e.li,{children:"Definitely opt-in only at first"}),"\n",(0,s.jsx)(e.li,{children:"One possibility: only after an approved review (so you can say \u201cmerge assuming CIs pass\u201d)"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.li,{children:"Add overlinking error flag by default?"}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(a,{...n})}):a(n)}},11151:(n,e,i)=>{i.d(e,{Z:()=>c,a:()=>r});var s=i(67294);const o={},t=s.createContext(o);function r(n){const e=s.useContext(t);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:r(n.components),s.createElement(t.Provider,{value:e},n.children)}}}]);