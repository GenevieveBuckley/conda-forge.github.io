"use strict";(self.webpackChunkcf_infra_docs=self.webpackChunkcf_infra_docs||[]).push([[3908],{53433:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var s=o(85893),i=o(11151);const r={unlisted:!0},t="GSoC 2023 project ideas for conda-forge",a={id:"orga/funding/gsoc-2023",title:"gsoc-2023",description:"\x3c!-- Inspired by the excellent Zarr Project Ideas document at",source:"@site/docs/orga/funding/gsoc-2023.md",sourceDirName:"orga/funding",slug:"/orga/funding/gsoc-2023",permalink:"/docs/orga/funding/gsoc-2023",draft:!1,unlisted:!0,editUrl:"https://github.com/conda-forge/conda-forge.github.io/tree/refs/heads/main/docs/orga/funding/gsoc-2023.md",tags:[],version:"current",lastUpdatedAt:1709809059,formattedLastUpdatedAt:"Mar 7, 2024",frontMatter:{unlisted:!0}},d={},c=[{value:"About conda-forge",id:"about-conda-forge",level:2},{value:"How does conda-forge work?",id:"how-does-conda-forge-work",level:3},{value:"How is conda-forge organized?",id:"how-is-conda-forge-organized",level:3},{value:"What&#39;s the contribution process?",id:"whats-the-contribution-process",level:3},{value:"Project Idea 1 - Modernization of the conda-forge.org website",id:"project-idea-1---modernization-of-the-conda-forgeorg-website",level:2},{value:"Abstract",id:"abstract",level:3},{value:"Current state",id:"current-state",level:3},{value:"Tasks",id:"tasks",level:3},{value:"Extended tasks",id:"extended-tasks",level:3},{value:"Expected outcomes",id:"expected-outcomes",level:3},{value:"Details",id:"details",level:3},{value:"References",id:"references",level:3}];function l(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{id:"gsoc-2023-project-ideas-for-conda-forge"})}),"\n",(0,s.jsx)(n.h1,{id:"gsoc-2023-project-ideas-for-conda-forge",children:"GSoC 2023 project ideas for conda-forge"}),"\n",(0,s.jsx)(n.p,{children:"Thanks for your interest in applying for Google Summer of Code with conda-forge. We welcome\napplications from individuals from all backgrounds, identities and abilities and encourage\napplications individuals from under-represented groups in tech."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{id:"about-conda-forge"})}),"\n",(0,s.jsx)(n.h2,{id:"about-conda-forge",children:"About conda-forge"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://conda-forge.org/",children:"conda-forge"})," is a community effort and a ",(0,s.jsx)(n.a,{href:"https://github.com/conda-forge",children:"GitHub organization"})," which contains repositories of conda recipes and thus provides\nconda packages for a wide range of software. The built distributions are uploaded to\nanaconda.org/conda-forge and can be installed with conda."]}),"\n",(0,s.jsx)(n.p,{children:"2023 marks the 8th anniversary of the conda-forge organization. Over these 8 years it has served\nmore than 1.2M package artifacts, which account for 10B downloads via anaconda.org. None of this\nwould be possible without the work of more than 4.6K volunteers!"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{id:"how-does-conda-forge-work"})}),"\n",(0,s.jsx)(n.h3,{id:"how-does-conda-forge-work",children:"How does conda-forge work?"}),"\n",(0,s.jsx)(n.p,{children:"conda-forge is built for and around the conda packaging ecosystem. A conda recipe contains the\ndependency metadata and instructions to build and package a particular project, usually from\nsource."}),"\n",(0,s.jsxs)(n.p,{children:["New recipes are first submitted to the ",(0,s.jsx)(n.code,{children:"conda-forge/staged-recipes"})," repository via a pull request\n(PR). Once this is reviewed and approved, the recipe is merged and granted its own repository,\ncalled ",(0,s.jsx)(n.em,{children:"feedstock"}),". A feedstock is a standard GitHub repository within the conda-forge\norganization, containing the user-provided ",(0,s.jsx)(n.code,{children:"recipe/"})," and the supporting configuration and tooling\nrequired for the builds."]}),"\n",(0,s.jsx)(n.p,{children:"For each PR merged in a feedstock, a series of artifacts is built for the package (changes such as\nreleasing a new version or adding a new dependency require rebuilding the package for\necosystem-wide compatibility). All contributions to a feedstock happen through PRs."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{id:"how-is-conda-forge-organized"})}),"\n",(0,s.jsx)(n.h3,{id:"how-is-conda-forge-organized",children:"How is conda-forge organized?"}),"\n",(0,s.jsxs)(n.p,{children:["The conda-forge organization is led by the ",(0,s.jsx)(n.em,{children:"core"})," team. The core team also receives support from\nmany volunteers, like staged-recipes reviewers or the domain-specific ",(0,s.jsx)(n.code,{children:"help-*"})," teams. Each\nfeedstock is mainly maintained by its team of collaborators named after it. Feedstock teams are\nfluid by design: anyone can step down at any moment and join and take over as long as the feedstock\nteam accepts the PR-driven application."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{id:"what-s-the-contribution-process"})}),"\n",(0,s.jsx)(n.h3,{id:"whats-the-contribution-process",children:"What's the contribution process?"}),"\n",(0,s.jsxs)(n.p,{children:["conda-forge is an open-source project; it is built in the open for traceability and transparency.\nContinuous integration (CI) logs are publicly available, and everyone is welcome to contribute. We\nfollow a strict fork-based Github-flow workflow: the feedstock branches will build ",(0,s.jsx)(n.em,{children:"and upload"})," the\nartifacts to the validation server. For this reason, pull requests must always be opened from\npersonal forks. This workflow is also followed in conda-forge repositories that are not responsible\nfor producing packages."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{id:"project-idea-1-modernization-of-the-conda-forge-org-website"})}),"\n",(0,s.jsx)(n.h2,{id:"project-idea-1---modernization-of-the-conda-forgeorg-website",children:"Project Idea 1 - Modernization of the conda-forge.org website"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{id:"abstract"})}),"\n",(0,s.jsx)(n.h3,{id:"abstract",children:"Abstract"}),"\n",(0,s.jsx)(n.p,{children:"conda-forge.org was created almost 8 years ago (when the whole conda-forge project was started).\nAfter 8 years, the site has become outdated. For example, it has not been optimized for mobile use.\nMoreover, it is not WCAG (Web Content Accessibility Guidelines) conformant, which makes it\ninaccessible to many users, especially those with disabilities or those that rely on assistive\ntechnology to interact with the web."}),"\n",(0,s.jsx)(n.p,{children:"This project aims to deliver a new website for conda-forge.org that meets WCAG accessibility\nstandards and improves performance while providing an excellent contributor experience."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{id:"current-state"})}),"\n",(0,s.jsx)(n.h3,{id:"current-state",children:"Current state"}),"\n",(0,s.jsxs)(n.p,{children:["The current Sphinx-based conda-forge.org website is mainly built from the ",(0,s.jsx)(n.a,{href:"https://github.com/conda-forge/conda-forge.github.io",children:"conda-forge.github.io"})," repository and extended by ",(0,s.jsx)(n.a,{href:"https://github.com/conda-forge/status",children:"status"})," - which generates a basic conda-forge status dashboard -\nand a conda-forge ",(0,s.jsx)(n.a,{href:"https://github.com/conda-forge/blog",children:"blog"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["A Docusaurus-based prototype website is available at ",(0,s.jsx)(n.a,{href:"https://cf-infra-docs.netlify.app/",children:"cf-infra-docs.netlify.app"}),", where new documentation is being written for the\nconda-forge infrastructure. We will use this site as the playground for the website modernization."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{id:"tasks"})}),"\n",(0,s.jsx)(n.h3,{id:"tasks",children:"Tasks"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Figma mockups for a new frontpage for desktop and mobile"}),"\n",(0,s.jsx)(n.li,{children:"Design a conda-forge style guide for other web-based developments"}),"\n",(0,s.jsx)(n.li,{children:"Work towards WCAG conformance during the design phase and include accessibility annotations for\nthe development phase"}),"\n",(0,s.jsx)(n.li,{children:"Present proposals to the community and incorporate feedback"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{id:"extended-tasks"})}),"\n",(0,s.jsx)(n.h3,{id:"extended-tasks",children:"Extended tasks"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Implement the new frontpage in Docusaurus (with the corresponding React components)"}),"\n",(0,s.jsx)(n.li,{children:"Add CI pipelines for automated performance and accessibility tests to prevent regressions in\nfurther work"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{id:"expected-outcomes"})}),"\n",(0,s.jsx)(n.h3,{id:"expected-outcomes",children:"Expected outcomes"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"A conda-forge style guide for its new online presence."}),"\n",(0,s.jsx)(n.li,{children:"The redesigned landing page passes the SpeedPage and WAVE automated tests."}),"\n",(0,s.jsx)(n.li,{children:"The new implementation provides an intuitive and usable user experience."}),"\n",(0,s.jsx)(n.li,{children:"A prototype conda-forge.org frontpage redesign is live in cf-infra-docs."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{id:"details"})}),"\n",(0,s.jsx)(n.h3,{id:"details",children:"Details"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Prerequisites"}),":\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Previous experience with prototyping or mock-up tools such as Figma"}),"\n",(0,s.jsx)(n.li,{children:"Experience creating design specs that define the user need, underlying hypotheses, and UX\nflow"}),"\n",(0,s.jsx)(n.li,{children:"Some knowledge of accessibility standards"}),"\n",(0,s.jsx)(n.li,{children:"Bonus points for previous experience in designing accessible experiences"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Nice to have, but not required"}),":\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"React and npm"}),"\n",(0,s.jsx)(n.li,{children:"Comfortable with Git & Github PR-driven workflows"}),"\n",(0,s.jsx)(n.li,{children:"Familiar with Docusaurus"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Project length"}),": 350 hours"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Priority"}),": Low"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Complexity"}),": Medium"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Potential mentor(s)"}),": @jaimergp"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{id:"references"})}),"\n",(0,s.jsx)(n.h3,{id:"references",children:"References"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://conda-forge.org",children:"https://conda-forge.org"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/conda-forge/conda-forge.github.io",children:"https://github.com/conda-forge/conda-forge.github.io"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/conda-forge/status",children:"https://github.com/conda-forge/status"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/conda-forge/blog",children:"https://github.com/conda-forge/blog"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://accessibility.digital.gov/",children:"https://accessibility.digital.gov/"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://design-system.service.gov.uk/",children:"https://design-system.service.gov.uk/"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://pagespeed.web.dev/report?url=https%3A%2F%2Fconda-forge.org%2F",children:"PageSpeed results for conda-forge.org"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://wave.webaim.org/report#/conda-forge.org",children:"WAVE (accessibility) results for conda-forge.org"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://docusaurus.io/showcase",children:"Docusaurus showcase"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://docusaurus.io/docs/styling-layout",children:"Styling and Layout - Docusaurus documentation"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},11151:(e,n,o)=>{o.d(n,{Z:()=>a,a:()=>t});var s=o(67294);const i={},r=s.createContext(i);function t(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);