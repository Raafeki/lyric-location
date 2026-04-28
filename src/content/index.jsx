import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import App from '../App'

const container = document.createElement('div')
container.id = 'lyric-location-root'
document.body.appendChild(container)

const root = ReactDOM.createRoot(container)

function getTrackInfo() {
  const trackName = document.querySelector('[data-testid="context-item-info-title"]')?.innerText
  const artistName = document.querySelector('[data-testid="context-item-info-artist"]')?.innerText
  return { trackName, artistName }
}

function renderApp() {
  const trackInfo = getTrackInfo()
  root.render(<App trackInfo={trackInfo} />)
}

// render once on load
renderApp()

// watch for song changes
const observer = new MutationObserver(() => {
  renderApp()
})

observer.observe(document.body, {
  childList: true,
  subtree: true
})