import React from 'react'
import ErrorBoundary from './ErrorBoundary'

const Detail = React.lazy(() => import('./Detail'))
// const Detail = React.lazy(() => Promise.reject())
// const Detail = React.lazy(
//   () => new Promise(resolve => setTimeout(resolve, 1000)),
// )
// const Detail = React.lazy(
//   () =>
//     new Promise(resolve =>
//       setTimeout(
//         resolve({
//           default: () => <div>Fake Profile</div>,
//         }),
//         1000,
//       ),
//     ),
// )

function App() {
  return (
    <div>
      <h1>Profile</h1>
      <ErrorBoundary fallback={"Couldn't find it out."}>
        <React.Suspense fallback={'Loading ...'}>
          <Detail />
        </React.Suspense>
      </ErrorBoundary>
    </div>
  )
}

export default App
