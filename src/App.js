import React from 'react'

const Detail = React.lazy(() => import('./Detail'))

function App() {
  return (
    <React.Suspense fallback={'Loading ...'}>
      {/* <div>TEST</div> */}
      <Detail />
    </React.Suspense>
  )
}

export default App
