import Map from './components/Map'
import ChatLyre from './components/ChatLyre'
import SearchBar from './components/SearchBar'

export default function App({ trackInfo }) {
  return (
    <div style={{
      position: 'fixed', right: 0, top: 0,
      width: '350px', height: '100vh',
      background: '#121212', color: 'white',
      zIndex: 9999, padding: '1rem',
      overflowY: 'auto'
    }}>
      <h2 style={{ color: '#1DB954' }}>Lyric Location</h2>

      <div style={{ marginBottom: '1rem' }}>
        <p style={{ margin: 0, fontSize: '14px', color: '#aaa' }}>Now Playing</p>
        <p style={{ margin: 0, fontWeight: 'bold' }}>
          {trackInfo?.trackName || 'No track detected'}
        </p>
        <p style={{ margin: 0, fontSize: '14px', color: '#aaa' }}>
          {trackInfo?.artistName || ''}
        </p>
      </div>

      <SearchBar />
      <Map />
      <ChatLyre />
    </div>
  )
}