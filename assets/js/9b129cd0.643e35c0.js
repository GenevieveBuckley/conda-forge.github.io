"use strict";(self.webpackChunkcf_infra_docs=self.webpackChunkcf_infra_docs||[]).push([[2494],{88420:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>r});var i=s(85893),t=s(11151);const l={title:"2020-09-09"},a="2020-09-09 conda-forge core meeting",c={id:"orga/minutes/2020-09-09",title:"2020-09-09",description:"Zoom link",source:"@site/docs/orga/minutes/2020-09-09.md",sourceDirName:"orga/minutes",slug:"/orga/minutes/2020-09-09",permalink:"/docs/orga/minutes/2020-09-09",draft:!1,unlisted:!1,editUrl:"https://github.com/conda-forge/conda-forge.github.io/tree/refs/heads/main/docs/orga/minutes/2020-09-09.md",tags:[],version:"current",lastUpdatedAt:1709809059,formattedLastUpdatedAt:"Mar 7, 2024",frontMatter:{title:"2020-09-09"},sidebar:"docs",previous:{title:"2020-09-16",permalink:"/docs/orga/minutes/2020-09-16"},next:{title:"2020-09-02",permalink:"/docs/orga/minutes/2020-09-02"}},o={},r=[{value:"Attendees",id:"attendees",level:2},{value:"Agenda",id:"agenda",level:2},{value:"Standing items",id:"standing-items",level:3},{value:"Your new agenda items",id:"your-new-agenda-items",level:3},{value:"Active votes",id:"active-votes",level:3},{value:"Subteam updates",id:"subteam-updates",level:3},{value:"Bot",id:"bot",level:4},{value:"ARM",id:"arm",level:4},{value:"POWER",id:"power",level:4},{value:"CUDA",id:"cuda",level:4},{value:"Docs",id:"docs",level:4},{value:"staged-recipes",id:"staged-recipes",level:4},{value:"website",id:"website",level:4},{value:"security+systems",id:"securitysystems",level:4},{value:"CI infrastructure",id:"ci-infrastructure",level:3},{value:"Compiler upgrade",id:"compiler-upgrade",level:4},{value:"CFEP updates",id:"cfep-updates",level:3},{value:"Open PRs",id:"open-prs",level:4},{value:"Discussion",id:"discussion",level:2},{value:"Check in on previous action items",id:"check-in-on-previous-action-items",level:2},{value:"This meeting",id:"this-meeting",level:3},{value:"Last meeting",id:"last-meeting",level:3},{value:"2 meetings ago",id:"2-meetings-ago",level:3},{value:"Move to Issue Tracker",id:"move-to-issue-tracker",level:3}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",input:"input",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"2020-09-09-conda-forge-core-meeting",children:"2020-09-09 conda-forge core meeting"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://flatiron.zoom.us/j/93242638216?pwd=bjRCWmVJRW1oTGJhN09VUmxtTTJOUT09",children:"Zoom link"}),"\n",(0,i.jsx)(n.a,{href:"https://arewemeetingyet.com/UTC/2020-08-26/17:00/w/Conda-forge%20dev%20meeting#eyJ1cmwiOiJodHRwczovL2hhY2ttZC5pby9wUk15dFVKV1FmU3NJM2xvMGlqQzJRP2VkaXQifQ==",children:"What time is the meeting in my time zone"}),"\n",(0,i.jsx)(n.a,{href:"https://hackmd.io/ZyhvUPC-S0iIje3CAdhx1w",children:"last weeks meeting"})]}),"\n",(0,i.jsx)(n.h2,{id:"attendees",children:"Attendees"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Jonathan Helmus"}),"\n",(0,i.jsx)(n.li,{children:"Eric Dill"}),"\n",(0,i.jsx)(n.li,{children:"CJ Wright"}),"\n",(0,i.jsx)(n.li,{children:"Eli Rykoff"}),"\n",(0,i.jsx)(n.li,{children:"Matthew Becker"}),"\n",(0,i.jsx)(n.li,{children:"Uwe Korn"}),"\n",(0,i.jsx)(n.li,{children:"Wolf Vollprecht"}),"\n",(0,i.jsx)(n.li,{children:"John Kirkham"}),"\n",(0,i.jsx)(n.li,{children:"Cheng Lee"}),"\n",(0,i.jsx)(n.li,{children:"Filipe Fernandes"}),"\n",(0,i.jsx)(n.li,{children:"Marcelo Trevisani"}),"\n",(0,i.jsx)(n.li,{children:"Marcel Bargull"}),"\n",(0,i.jsx)(n.li,{children:"Sylvain Corlay"}),"\n",(0,i.jsx)(n.li,{children:"Isuru Fernando"}),"\n",(0,i.jsx)(n.li,{children:"Ray Douglass"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"agenda",children:"Agenda"}),"\n",(0,i.jsx)(n.h3,{id:"standing-items",children:"Standing items"}),"\n",(0,i.jsxs)(n.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," intros for new folks on the call"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"(MRB) Eli R."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," (CJ) budget"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"current approvals are all up to date."}),"\n",(0,i.jsxs)(n.li,{children:["screenshare and show the doc monthly?\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Link is in Keybase (numfocus_spreadsheets.txt)"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["(MRB) AWS cannot use credits to pay our debts\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Should we ask Andy to ask them to forgive the debt directly? Ping Brian Grainger too?\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"TODO: Sylvain email Matt Becker to contact Brian Grainger."}),"\n",(0,i.jsx)(n.li,{children:"TODO: Eric pay AWS bill and get reimbursement"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"If we don't do the above, should we pay it off and then join the\nnumfocus org to obtain access to the credits we have?"}),"\n",(0,i.jsx)(n.li,{children:"NOTE: Whoever pays the debt will get reimbursement from conda-forge per the\nvote already passed (plus your credit card points!)."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"your-new-agenda-items",children:"Your new agenda items"}),"\n",(0,i.jsxs)(n.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," (IF) macOS arm64"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Cross compiling python recipes."}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"requirements:\n  build:\n    - cross-python    # [build_platform != target_platform]\n    - python          # [build_platform != target_platform]\n    - pip             # [build_platform != target_platform]\n    - cython          # [build_platform != target_platform]\n  host:\n    - python\n    - pip\n    - cython\n  run:\n    - python\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Enabling the CDN for osx-arm64 now that conda-build 3.20.0 is out. (Jonathan is looking at this, might not be this week)"}),"\n",(0,i.jsxs)(n.li,{children:["How far do you go with the cross-compilation for macos-arm64?\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"conda & conda-build for sure, not sure how much farther"}),"\n",(0,i.jsxs)(n.li,{children:["Jonathan bootstrapped this problem by building a python env and\nthen building the packages inside of that environment (along the lines of ",(0,i.jsx)(n.a,{href:"https://github.com/jjhelmus/conda_from_scratch",children:"https://github.com/jjhelmus/conda_from_scratch"}),")"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," (MRB) Access to DTK from Eli R."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"a colleague of mine has the chance to get an OSX ARM DTK for testing his scientific software"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"he needs conda/scipy/numpy/etc"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"he is a bit hesitant on making it available to use directly due to this language in the terms:"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:'"Authorized Developers" means Your employees and contractors, members of Your organization\nor, if You are an educational institution, Your faculty, staff and students, who: (a) have\na demonstrable need to know or use the Apple Software or Apple Services in order to develop\nand test Applications, and (b) to the extent they will access Apple Confidential Information,\nhave written and binding agreements with You that prohibit the unauthorized use and disclosure\nof such confidential information.'}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"is the language above an issue for anaconda inc access to DTK?"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Irrelavent; Anaconda, Inc will use its own DTK."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"discussion items"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"We clearly want to help and engage on this since scientific users are important!"}),"\n",(0,i.jsx)(n.li,{children:"Do we as conda-forge want to try and get direct access to this for testing our builds?"}),"\n",(0,i.jsx)(n.li,{children:"Could we do this without violating the terms above?"}),"\n",(0,i.jsx)(n.li,{children:"How close are we on the scientific stack?"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Notes"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"If Eli is willing, have remote access on the CLI to test package builds"}),"\n",(0,i.jsx)(n.li,{children:"If we're going to publish packages having been built on the Apple DTK, then need an\nextremely careful reading of the terms and conditions."}),"\n",(0,i.jsx)(n.li,{children:"Eli's perspective is to type some things locally and submit issues."}),"\n",(0,i.jsx)(n.li,{children:"Cross-compile and then test the cross-compiler?"}),"\n",(0,i.jsxs)(n.li,{children:["Plans\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Not engage lawyer (expensive and long)"}),"\n",(0,i.jsx)(n.li,{children:"Try and set up weekly / biweekly sync with Eli to help diagnose issues live via Zoom. Post issues to"}),"\n",(0,i.jsx)(n.li,{children:"Absolutely don't publish packages to anaconda.org"}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"conda-build -t"})," on all mac packages. publish log to somewhere\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Can we publish logs somewhere? Are created logs confidential because\nwe created them on the DTK machine?"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," (ED) Reminder to vote on ",(0,i.jsx)(n.a,{href:"https://github.com/conda-forge/cfep/pull/37",children:"https://github.com/conda-forge/cfep/pull/37"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," (ED) Computer for Isuru"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Vote passed (14 \ud83d\udc4d, 1 \ud83d\udc4e)"}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/conda-forge/conda-forge.github.io/issues/1150",children:"https://github.com/conda-forge/conda-forge.github.io/issues/1150"})}),"\n",(0,i.jsxs)(n.li,{children:["Things to clarify:\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"expectations around usage of machine"}),"\n",(0,i.jsx)(n.li,{children:"expectations around making machine available to other members of conda-forge"}),"\n",(0,i.jsx)(n.li,{children:"expectations around returning the machine"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"How to actually purchase. Do we have NumFocus credit cards?"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.input,{type:"checkbox",disabled:!0}),' (MRB) github user @jan-janssen wants to list us in the "affiliated projects" section here ',(0,i.jsx)(n.a,{href:"https://pyiron.org/collaborators/",children:"https://pyiron.org/collaborators/"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:'numfocus trademark guidelines are: "allow most uses as long as it is clear the person using the mark does not appear to be the project or endorsed by the project (without specific permission to do so)"'}),"\n",(0,i.jsx)(n.li,{children:"they say ultimately it is up to us"}),"\n",(0,i.jsx)(n.li,{children:'are we ok with this user displaying our logo and calling us an "affiliated project"?'}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.input,{type:"checkbox",disabled:!0})," (MRB) github docker images"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"AFAICT we cannot host public docker images on github unless we let anyone in conda-forge make images and push them"}),"\n",(0,i.jsxs)(n.li,{children:["quote from docs (",(0,i.jsx)(n.a,{href:"https://docs.github.com/en/packages/managing-container-images-with-github-container-registry/configuring-access-control-and-visibility-for-container-images#configuring-visibility-of-container-images-for-an-organization",children:"https://docs.github.com/en/packages/managing-container-images-with-github-container-registry/configuring-access-control-and-visibility-for-container-images#configuring-visibility-of-container-images-for-an-organization"}),")\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"'For organization image containers, organizations admins must enable public packages before you can set the visibility to public. For more information, see \"Enabling GitHub Container Registry for your organization.\"'"}),"\n",(0,i.jsx)(n.li,{children:"(IF) -  from the docs it looks like we can't control them adding new packages, but we can control who have access to existing packages."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"I tried pushing an image and could not make it public."}),"\n",(0,i.jsx)(n.li,{children:"thus we need a separate org"}),"\n",(0,i.jsxs)(n.li,{children:["I propose ",(0,i.jsx)(n.code,{children:"conda-forge-docker"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.input,{type:"checkbox",disabled:!0})," (MRB) GCC 9.3.0 migration"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"I want to make sure I understand the list of things to do"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"we've built all of the compilers AFAIK"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"need to do a direct migration in the bot of the gfortran stack"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"do we want to change the libgfortran libs on linux to have the SO version in the library?"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"What am I missing?"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"active-votes",children:"Active votes"}),"\n",(0,i.jsxs)(n.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," passed! ",(0,i.jsx)(n.a,{href:"https://github.com/conda-forge/cfep/pull/37",children:"Exception section so that we can package things like black"})]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," passed! ",(0,i.jsx)(n.a,{href:"https://github.com/conda-forge/conda-forge.github.io/issues/1150",children:"Windows build machine for Isuru"})]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"subteam-updates",children:"Subteam updates"}),"\n",(0,i.jsx)(n.h4,{id:"bot",children:"Bot"}),"\n",(0,i.jsx)(n.h4,{id:"arm",children:"ARM"}),"\n",(0,i.jsx)(n.h4,{id:"power",children:"POWER"}),"\n",(0,i.jsx)(n.h4,{id:"cuda",children:"CUDA"}),"\n",(0,i.jsx)(n.h4,{id:"docs",children:"Docs"}),"\n",(0,i.jsx)(n.h4,{id:"staged-recipes",children:"staged-recipes"}),"\n",(0,i.jsx)(n.h4,{id:"website",children:"website"}),"\n",(0,i.jsx)(n.h4,{id:"securitysystems",children:"security+systems"}),"\n",(0,i.jsx)(n.h3,{id:"ci-infrastructure",children:"CI infrastructure"}),"\n",(0,i.jsx)(n.h4,{id:"compiler-upgrade",children:"Compiler upgrade"}),"\n",(0,i.jsx)(n.h3,{id:"cfep-updates",children:"CFEP updates"}),"\n",(0,i.jsx)(n.h4,{id:"open-prs",children:"Open PRs"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://github.com/conda-forge/conda-forge-enhancement-proposals/pull/7",children:"cfep-04"})," X11 and CDT policy"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"INACTIVE - Merge in with some inactive-esque status?"}),"\n",(0,i.jsx)(n.li,{children:"Needs new champion. Thanks for your work on this pkgw! Has unaddressed comments from pkgw as from Jan 10, 2020"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://github.com/conda-forge/conda-forge-enhancement-proposals/pull/9",children:"cfep-06"})," Staged-recipes review lifecycle"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"INACTIVE - Merge in with some inactive-esque status?"}),"\n",(0,i.jsx)(n.li,{children:"Lingering comment from @saraedum. @jakirkham, can you reply? Has unadressed comment from @saraedum from Jan 8, 2020"}),"\n",(0,i.jsx)(n.li,{children:"(MRB) The stalebot has solved the worst of the issues here. I think we could defer this one permanently."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://github.com/conda-forge/conda-forge-enhancement-proposals/pull/15",children:"cfep-10"})," Feedstock statuses, unmaintained"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"INACTIVE - Merge in with some inactive-esque status?"}),"\n",(0,i.jsx)(n.li,{children:"Needs another review. Has unaddressed updates from pkgw as of Jan 11, 2020"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://github.com/conda-forge/cfep/pull/23",children:"cfep-12"})," Removing packages that violate the terms of the source package"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Stalled since May 26, 2020"}),"\n",(0,i.jsx)(n.li,{children:'Active debate about moving to "broken" vs deleting from conda-forge channel'}),"\n",(0,i.jsx)(n.li,{children:"Active vote, ends on 2020-03-11"}),"\n",(0,i.jsx)(n.li,{children:"What were the results of the vote?"}),"\n",(0,i.jsx)(n.li,{children:"Did we hear back from NumFOCUS?"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://github.com/conda-forge/cfep/pull/32",children:"cfep-17"})," Handling pin backports and dependency rebuilds"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Stalled debate about implementation details between Isuru, CJ and Matt"}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"UPDATE 2020-07-22"}),": We in principle have agreement to render the extra pinnings needed directly in the feedstock\non a temporary basis (i.e., until the migration has ended)."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"discussion",children:"Discussion"}),"\n",(0,i.jsx)(n.h2,{id:"check-in-on-previous-action-items",children:"Check in on previous action items"}),"\n",(0,i.jsx)(n.p,{children:"Copy previous action items from last meeting agenda."}),"\n",(0,i.jsx)(n.h3,{id:"this-meeting",children:"This meeting"}),"\n",(0,i.jsx)(n.h3,{id:"last-meeting",children:"Last meeting"}),"\n",(0,i.jsxs)(n.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",disabled:!0})," (ED) Update governance docs with similar voting model as what got put into conda-tools (+3 with no -1 is a pass)"]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",disabled:!0})," (SC) Write jinja template to turn institutional partners yaml into a website ",(0,i.jsx)(n.a,{href:"https://github.com/conda-forge/conda-forge.github.io/blob/2a2d3caaf7d74eb370ac40c679ba337a73d15c8a/src/inst_partners.yaml",children:"https://github.com/conda-forge/conda-forge.github.io/blob/2a2d3caaf7d74eb370ac40c679ba337a73d15c8a/src/inst_partners.yaml"})]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",disabled:!0})," (SC) Document what needs to be done to create an OVH account and get access"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"2-meetings-ago",children:"2 meetings ago"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Docker hub"})}),"\n",(0,i.jsxs)(n.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",disabled:!0})," (JK) Check in on Azure build workers to see if they have the docker hub limitation. Maybe Azure and docker hub"]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",disabled:!0})," (JK) Check in on Azure build workers and see if they have the docker hub limitation"]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",disabled:!0})," (JK) work with dockerhub to see if we can get OSS status"]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," (MRB) start pushing images to quay (",(0,i.jsx)(n.a,{href:"https://github.com/conda-forge/docker-images/pull/152",children:"https://github.com/conda-forge/docker-images/pull/152"}),")"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"OVH"})}),"\n",(0,i.jsxs)(n.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",disabled:!0})," (???) build webpage to credit them (and others)"]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",disabled:!0})," If we're adding a logo, will want to make sure that we have permission to use it."]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",disabled:!0}),' Shout-out on twitter at some point. "Thanks forOVHCloud for providing a VM", etc. (maybe after we ship qt on windows with it?)']}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"move-to-issue-tracker",children:"Move to Issue Tracker"}),"\n",(0,i.jsxs)(n.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.input,{type:"checkbox",disabled:!0})," Figure out how to communicate breaking changes to users. Likely should open up an issue immediately for futher discussion. Ping @kkraus, plus capture notes from further up in these meeting notes"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.input,{type:"checkbox",disabled:!0})," John K. will update the cuda toolkit feedstock on the git repo to note the NVBug link to the internal NVIDIA issue tracker"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.input,{type:"checkbox",disabled:!0})," Jonathan will update docs to note that some non-exhaustive list of packages (like cuda-toolkit, MKL, etc.)"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.input,{type:"checkbox",disabled:!0})," Jonathan will review this ",(0,i.jsx)(n.a,{href:"https://github.com/AnacondaRecipes/cudatoolkit-feedstock/pull/7",children:"PR"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.input,{type:"checkbox",disabled:!0})," (Kale) schedule conda working group"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.input,{type:"checkbox",disabled:!0})," cfep-10 next steps: CJ to call a vote for feedback"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.input,{type:"checkbox",disabled:!0})," cfep-06 next steps: Ask staged recipes team to champion this CFEP and move it forward"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.input,{type:"checkbox",disabled:!0})," jakirkham & CJ-wright to sync on adding CUDA to the migration bot"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.input,{type:"checkbox",disabled:!0})," (Eric) Scheduling Anaconda <-> conda-forge sync on anaconda.org requirements gathering"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Will try and get this scheduled in the next month."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.input,{type:"checkbox",disabled:!0})," (Anthony) Reach out to NumFocus to figure out legal ramifications of not including licenses in files."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.input,{type:"checkbox",disabled:!0})," (Eric) check internally for funding levels for hotels & flying folks from the community in?"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.input,{type:"checkbox",disabled:!0})," (Eric) Figure out finances of conda-forge to support themselves?"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.input,{type:"checkbox",disabled:!0})," (jjhelmus) Open up CFEP for which python's we're going to support"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.input,{type:"checkbox",disabled:!0})," (jakirkham) write a blog post on CUDA stuff we discussed today"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.input,{type:"checkbox",disabled:!0})," (jakirkham) update docs on how to add CUDA support to feedstocks"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.input,{type:"checkbox",disabled:!0})," (jakirkham) will open an issue on conda-smithy to investigate Drone issues. (ping the aarch team)"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/conda-forge/conda-forge.github.io/issues/954",children:"https://github.com/conda-forge/conda-forge.github.io/issues/954"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.input,{type:"checkbox",disabled:!0})," (ED) Who we are page? Some combination of a FAQ and a who is everyone. FAQ things like:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"who's the POC for CF <> Anaconda, CF <> NumFocus, CF <> Azure"}),"\n",(0,i.jsx)(n.li,{children:"who's the POC for the various subteams?"}),"\n",(0,i.jsx)(n.li,{children:"Informal information: roles, day jobs, bios, the whole nine yards, why you're here, etc."}),"\n",(0,i.jsx)(n.li,{children:"Public or internal? I don't really care either way. Anyone feel strongly one way or the other?"}),"\n",(0,i.jsx)(n.li,{children:"opt-in to public bios"}),"\n",(0,i.jsxs)(n.li,{children:["software carpentry has a large number of instructors and has ",(0,i.jsx)(n.a,{href:"https://carpentries.org/instructors",children:"https://carpentries.org/instructors"})]}),"\n",(0,i.jsx)(n.li,{children:'some concern about "yet another place to keep stuff up to date"'}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.input,{type:"checkbox",disabled:!0})," (CJ) Form finance subteam"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.input,{type:"checkbox",disabled:!0})," (ED) document strategies for reproducible environments using conda-forge"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.input,{type:"checkbox",disabled:!0})," (UK) Static libraries stuff"]}),"\n",(0,i.jsxs)(n.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",disabled:!0})," Add linting hints to builds to find them"]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," Recommend how to package them -> CFEP-18"]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," We should write docs saying we don't provide support and this is a bad idea. -> CFEP-18"]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>a});var i=s(67294);const t={},l=i.createContext(t);function a(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);