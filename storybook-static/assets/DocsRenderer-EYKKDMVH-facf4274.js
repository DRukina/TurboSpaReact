import { _ as a } from './iframe-45f09b9e.js';
import { R as e, r as p } from './index-ebeaab24.js';
import { r as c, u } from './react-18-8ac2d3a8.js';
import { C as h, A as l, H as E, D as d } from './index-ab00f926.js';
import '../sb-preview/runtime.js';
import './index-073301bc.js';
import './index-d475d2ea.js';
import './index-d37d4223.js';
import './index-356e4a49.js';
var x = { code: h, a: l, ...E },
  _ = class extends p.Component {
    constructor() {
      super(...arguments), (this.state = { hasError: !1 });
    }
    static getDerivedStateFromError() {
      return { hasError: !0 };
    }
    componentDidCatch(t) {
      let { showException: r } = this.props;
      r(t);
    }
    render() {
      let { hasError: t } = this.state,
        { children: r } = this.props;
      return t ? null : r;
    }
  },
  g = class {
    constructor() {
      (this.render = async (t, r, o) => {
        let n = { ...x, ...(r == null ? void 0 : r.components) };
        return new Promise((s, m) => {
          a(
            () => import('./index-a99a88c4.js'),
            [
              './index-a99a88c4.js',
              './index-bda0bad7.js',
              './index-ebeaab24.js',
            ],
            import.meta.url,
          )
            .then(({ MDXProvider: i }) =>
              c(
                e.createElement(
                  _,
                  { showException: m, key: Math.random() },
                  e.createElement(
                    i,
                    { components: n },
                    e.createElement(d, { context: t, docsParameter: r }),
                  ),
                ),
                o,
              ),
            )
            .then(s);
        });
      }),
        (this.unmount = (t) => {
          u(t);
        });
    }
  };
export { g as DocsRenderer, x as defaultComponents };
//# sourceMappingURL=DocsRenderer-EYKKDMVH-facf4274.js.map
