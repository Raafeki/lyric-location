import Map from './components/Map'
import ChatLyre from './components/ChatLyre'
import SearchBar from './components/SearchBar'

export default function App() {
  return (
    <div style={{
      position: 'fixed', right: 0, top: 0,
      width: '350px', height: '100vh',
      background: '#121212', color: 'white',
      zIndex: 9999, padding: '1rem'
    }}>
      <h1>Lyric Location</h1>
      <SearchBar />
      <Map />
      <ChatLyre />
    </div>
  )
}