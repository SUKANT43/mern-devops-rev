import React from 'react'
import WithClickTracking from './WithClickTracking'

// Example Button component
function Button({ label }) {
  return <button>{label}</button>
}

function App() {
  const ButtonWithTracking = WithClickTracking(Button)

  return (
    <div>
      <h1>Higher Order Component</h1>
      <ButtonWithTracking label="Click me" trackingInfo="Button 1" />
      <ButtonWithTracking label="Click me too" trackingInfo="Button 2" />
    </div>
  )
}

export default App
