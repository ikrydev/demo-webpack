This is a bare minimum project with react and unify. You have to fork this repo and create webpack config to meets the basic requirements below. There are modules and plugins installed by default on packages.json, but feel free to adjust based on your needs.

The basic requirements:
- [ ] Support css
- [ ] Create multiple bundle output with this criteria:
  - [ ] Dependency react, react-dom, react-emotion, and emotion use chunk name `framework.[contenthash].js`
  - [ ] All unify dependencies use chunk name `unify.[contenthash].js`
  - [ ] The rest node_modules dependencies use chunk name `vendor.[contenthash].js`
  - [ ] The runtime code use chunk name `runtime.[contenthash].js`
- [ ] All assets should be minified in production build, except in development env
- [ ] All chunk name should has `contenthash` in production build, except in development env
