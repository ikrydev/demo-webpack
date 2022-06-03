There are modules and plugins installed by default on packages.json, feel free to adjust for your needs.

The basic requirements:
- [ ] Support css
- [ ] Create multiple bundle output with this criteria:
  - [ ] All react dependencies use chunk name `framework.[contenthash].js`
  - [ ] All unify dependencies use chunk name `unify.[contenthash].js`
  - [ ] The rest node_modules dependencies use chunk name `vendor.[contenthash].js`
  - [ ] The runtime code use chunk name `runtime.[contenthash].js`
- [ ] All assets should be minified in production build, except in development env
- [ ] All chunk name should has `contenthash` in production build, except in development env
