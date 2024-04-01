"use strict";(self.webpackChunkcf_infra_docs=self.webpackChunkcf_infra_docs||[]).push([[3072],{80413:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var o=t(85893),i=t(11151);const r={title:"Using conda-smithy to manage your CI"},s="Using conda-smithy to manage your CI",a={id:"user/ci-skeleton",title:"Using conda-smithy to manage your CI",description:"conda-forge, and specifically conda-smithy contains a lot of",source:"@site/docs/user/ci-skeleton.md",sourceDirName:"user",slug:"/user/ci-skeleton",permalink:"/docs/user/ci-skeleton",draft:!1,unlisted:!1,editUrl:"https://github.com/conda-forge/conda-forge.github.io/tree/refs/heads/main/docs/user/ci-skeleton.md",tags:[],version:"current",lastUpdatedAt:1712003470,formattedLastUpdatedAt:"Apr 1, 2024",frontMatter:{title:"Using conda-smithy to manage your CI"},sidebar:"docs",previous:{title:"Tips & tricks",permalink:"/docs/user/tipsandtricks"},next:{title:"FAQ",permalink:"/docs/user/faq"}},c={},d=[{value:"Getting Started",id:"getting-started",level:2},{value:"1. Fill out recipe/meta.yaml",id:"1-fill-out-recipemetayaml",level:3},{value:"2. Commit the changes",id:"2-commit-the-changes",level:3},{value:"3. Register with the CI providers",id:"3-register-with-the-ci-providers",level:3},{value:"4. Rerender",id:"4-rerender",level:3},{value:"Keeping Up-to-date",id:"keeping-up-to-date",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{id:"using-conda-smithy-to-manage-your-ci"})}),"\n",(0,o.jsx)(n.h1,{id:"using-conda-smithy-to-manage-your-ci",children:"Using conda-smithy to manage your CI"}),"\n",(0,o.jsxs)(n.p,{children:["conda-forge, and specifically ",(0,o.jsx)(n.code,{children:"conda-smithy"})," contains a lot of\ntools for building and deploying continuous integration (CI)\ninfrastructure on a variety of different platforms and architectures.\nWouldn't it be nice if you could reuse all of this hard work, so\nyou don't have to write or manage your own CI configurations?"]}),"\n",(0,o.jsxs)(n.p,{children:["By adding a ",(0,o.jsx)(n.code,{children:"recipe/"})," directory to your repository, the conda-smithy\ncommand ",(0,o.jsx)(n.code,{children:"ci-skeleton"})," lets you hook into well-tested and robust\nCI infrastructure. Using the conda-smithy ",(0,o.jsx)(n.code,{children:"rerender"})," command, you\ncan then keep your repository up-to-date with any needed changes."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{id:"getting-started"})}),"\n",(0,o.jsx)(n.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"ci-skeleton"})," command helps you get started by preparing a repository\nto have the proper structure such that the ",(0,o.jsx)(n.code,{children:"rerender"})," command will correctly\nadd the CI configurations. Let's see an example!"]}),"\n",(0,o.jsxs)(n.p,{children:["Suppose you have a repository for a project called ",(0,o.jsx)(n.code,{children:"myproj"}),". In the\nroot level of the repository, you can run the following command:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"~/repo $ conda smithy ci-skeleton myproj\n"})}),"\n",(0,o.jsx)(n.p,{children:"This will produce output like the following:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'Generating ~/repo/conda-forge.yml\nGenerating ~/repo/recipe/meta.yaml\nUpdating ~/repo/.gitignore\nA CI skeleton has been generated! Please use the following steps\nto complete the CI setup process:\n\n1. Fill out recipe/meta.yaml with your install and test code\n2. Commit all changes to the repo.\n\n        $ git add . && git commit -m "ran conda smithy skeleton"\n\n3. Remember to register your repo with the CI providers.\n4. Rerender this repo to generate the CI configurations files.\n   This can be done with:\n\n        $ conda smithy rerender -c auto\n\nAt any time in the future, you will be able to automatically update your\nCI configuration by re-running the rerender command above. Happy testing!\n'})}),"\n",(0,o.jsxs)(n.p,{children:["As you can see, this generates and updates a few important files.\nThe first file it creates is the ",(0,o.jsx)(n.code,{children:"conda-forge.yml"})," file. This is\nspecifically constructed to tell ",(0,o.jsx)(n.code,{children:"conda smithy rerender"})," that we are\nnot running ",(0,o.jsx)(n.code,{children:"myproj"})," CI as a regular feedstock. The ",(0,o.jsx)(n.code,{children:".gitignore"})," is\nmodified to not accidentally add unwanted conda-smithy temporary files\nto your repository."]}),"\n",(0,o.jsxs)(n.p,{children:["Also the steps that the ",(0,o.jsx)(n.code,{children:"ci-skeleton"})," spits out are very important\nfor wiring everything up properly. Luckily, they are easy to perform!\nLet's go through them one-by-one!"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{id:"fill-out-recipe-meta-yaml"})}),"\n",(0,o.jsx)(n.h3,{id:"1-fill-out-recipemetayaml",children:"1. Fill out recipe/meta.yaml"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"ci-skeleton"})," command emits an example ",(0,o.jsx)(n.code,{children:"meta.yaml"})," file for\nbuilding ",(0,o.jsx)(n.code,{children:"myproj"}),', hence the "skeleton" part of the name. If you\ndon\'t want the skeleton to be produced in the ',(0,o.jsx)(n.code,{children:"recipe/"})," directory,\nyou can use the ",(0,o.jsx)(n.code,{children:"-r"})," option to supply an alternative."]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.strong,{children:"meta.yaml"})," looks like:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"{% set name = \"myproj\" %}\n{% set version = environ.get('GIT_DESCRIBE_TAG', 'untagged')|string|replace('-','_') %}\n\npackage:\n  name: {{ name|lower }}\n  version: {{ version }}\n\nsource:\n  git_url: {{ environ.get('FEEDSTOCK_ROOT', '..') }}\n\nbuild:\n  # Uncomment the following line if the package is pure Python and the recipe\n  # is exactly the same for all platforms. It is okay if the dependencies are\n  # not built for all platforms/versions, although selectors are still not allowed.\n  # See https://conda-forge.org/docs/maintainer/knowledge_base.html#noarch-python\n  # for more details.\n  # noarch: python\n\n  number: {{ environ.get('GIT_DESCRIBE_NUMBER', '0') }}\n  string: {{ [build_number, ('h' + PKG_HASH), environ.get('GIT_DESCRIBE_HASH', '')]|join('_') }}\n\n  # If the installation is complex, or different between Unix and Windows,\n  # use separate bld.bat and build.sh files instead of this key. By default,\n  # the package will be built for the Python versions supported by conda-forge\n  # and for all major OSs. Add the line \"skip: True  # [py<35]\" (for example)\n  # to limit to Python 3.5 and newer, or \"skip: True  # [not win]\" to limit\n  # to Windows.\n  script: \"{{ PYTHON }} -m pip install . -vv\"\n\nrequirements:\n  build:\n    # If your project compiles code (such as a C extension) then add the required\n    # compilers as separate entries here. Compilers are named 'c', 'cxx' and 'fortran'.\n    - {{ compiler('c') }}\n  host:\n    - python\n    - pip\n  run:\n    - python\n\ntest:\n  # Some packages might need a `test/commands` key to check CLI.\n  # List all the packages/modules that `run_test.py` imports.\n  imports:\n    - myproj\n  # Run your test commands here\n  commands:\n    - myproj --help\n    - pytest\n  # declare any test-only requirements here\n  requires:\n    - pytest\n  # copy over any needed test files here\n  source_files:\n    - tests/\n\n# Uncomment and fill in myproj metadata\n#about:\n#  home: https://github.com/conda-forge/conda-smithy\n#  license: BSD-3-Clause\n#  license_family: BSD\n#  license_file: LICENSE\n\n# Uncomment the following if this will be on a forge\n# Remove these lines if this is only be used for CI\n#extra:\n#  recipe-maintainers:\n#    - BobaFett\n#    - LisaSimpson\n"})}),"\n",(0,o.jsxs)(n.p,{children:["This recipe is configured to correctly grab the source code and the version\ninformation from git. It also stubs out adding any test files that you might\nwant to have ",(0,o.jsx)(n.code,{children:"conda-build"})," use when it runs the test suite."]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:"Because you are using conda-forge, conda-build, etc as your CI, it is\nimportant to run the full test suite here."})}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:"Metadata such as licenses and maintainers are likely less important,\nbecause in the default case, packages created here will never be uploaded\nto a channel. Feel free to delete or ignore these fields."})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{id:"commit-the-changes"})}),"\n",(0,o.jsx)(n.h3,{id:"2-commit-the-changes",children:"2. Commit the changes"}),"\n",(0,o.jsx)(n.p,{children:"Once you have written your recipe, it is important to save the modifications!\nJust run the following commands:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'~/repo $ git add . && git commit -m "ran conda smithy skeleton"\n'})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{id:"register-with-the-ci-providers"})}),"\n",(0,o.jsx)(n.h3,{id:"3-register-with-the-ci-providers",children:"3. Register with the CI providers"}),"\n",(0,o.jsx)(n.p,{children:"This is important! If you haven't done so already, you'll need to go\nto the CI providers (Travis, Circle, Azure, etc.) and enable CI\nto for your repository. Each CI provider that you use will have\ndocumentation on how to get set up with them."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{id:"rerender"})}),"\n",(0,o.jsx)(n.h3,{id:"4-rerender",children:"4. Rerender"}),"\n",(0,o.jsxs)(n.p,{children:["Last, but certainly not least, we need to generate the CI configuration\nscripts! This is based on the content of the recipe as well as the\nprovider selections made in the ",(0,o.jsx)(n.code,{children:"conda-forge.yml"})," file. (Please\nrefer to ",(0,o.jsx)(n.a,{href:"/docs/maintainer/conda_forge_yml#provider",children:"these docs"})," for a complete list of CI providers.)"]}),"\n",(0,o.jsx)(n.p,{children:"In order to generate the CI configuration files, run:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"~/repo $ conda smithy rerender -c auto\n"})}),"\n",(0,o.jsx)(n.p,{children:"Pushing those changes up to the repo should now give be building and testing\nyour package on CI!"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{id:"keeping-up-to-date"})}),"\n",(0,o.jsx)(n.h2,{id:"keeping-up-to-date",children:"Keeping Up-to-date"}),"\n",(0,o.jsxs)(n.p,{children:["A major advantage of using ",(0,o.jsx)(n.code,{children:"ci-skeleton"})," is that once it has been\nsetup, it is very easy to keep your CI system up-to-date. If you\nmodify your recipe to enable new architectures, you want to\nrun on a different provider, or even if the CI system changes out from under you,\ngetting back up and running is as easy as rerendering.\nYou just need to repeat step 4, above:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"~/repo $ conda smithy rerender -c auto\n"})}),"\n",(0,o.jsx)(n.p,{children:"This will generate and replace the CI configuration files for the\ncurrent time and state of the recipe. It is just that easy!"})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>s});var o=t(67294);const i={},r=o.createContext(i);function s(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);