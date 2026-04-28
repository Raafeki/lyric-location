import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '../App'

const container = document.createElement('div')
container.id = 'lyric-location-root'
document.body.appendChild(container)

ReactDOM.createRoot(container).render(<App />)