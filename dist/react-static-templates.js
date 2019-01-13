
import universal, { setHasBabelPlugin } from '/Users/victor.castro/Documents/Code/salon-bugambilias-static/node_modules/react-universal-component/dist/index.js'


setHasBabelPlugin()

const universalOptions = {
  loading: () => null,
  error: props => {
    console.error(props.error);
    return <div>An error occurred loading this page's template. More information is available in the console.</div>;
  },
}

const t_0 = universal(import('../src/pages/404.js'), universalOptions)
const t_1 = universal(import('../src/pages/about.js'), universalOptions)
const t_2 = universal(import('../src/pages/index.js'), universalOptions)


// Template Map
export default {
  '../src/pages/404.js': t_0,
'../src/pages/about.js': t_1,
'../src/pages/index.js': t_2
}

export const notFoundTemplate = "../src/pages/404.js"
