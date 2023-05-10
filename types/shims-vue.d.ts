declare module '*.vue' {
  import { DefineComponent } from 'vue'
  // eslint-disable-next-line
  const Component: DefineComponent<{}, {}, any>
  export default Component
}
