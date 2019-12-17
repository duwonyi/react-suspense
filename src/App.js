import React from 'react'

const Detail = React.lazy(() => import('./detail'))

function App() {
  return (
    <React.Suspense fallback={'Loading ...'}>
      <Detail />
    </React.Suspense>
  )
}

export default App
