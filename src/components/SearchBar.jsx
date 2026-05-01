import { useState, useEffect } from 'react'

const mockData = [
  { type: 'artist', name: 'Drake', region: 'Toronto, Canada' },
  { type: 'artist', name: 'BTS', region: 'South Korea' },
  { type: 'artist', name: 'Bad Bunny', region: 'Puerto Rico' },
  { type: 'artist', name: 'Burna Boy', region: 'Nigeria' },
  { type: 'artist', name: 'Shakira', region: 'Colombia' },
  { type: 'artist', name: 'Wizkid', region: 'Nigeria' },
  { type: 'artist', name: 'Rosalía', region: 'Spain' },
  { type: 'artist', name: 'Kendrick Lamar', region: 'Compton, USA' },
  { type: 'artist', name: 'Billie Eilish', region: 'Los Angeles, USA' },
  { type: 'artist', name: 'J Balvin', region: 'Colombia' },
  { type: 'artist', name: 'Anitta', region: 'Brazil' },
  { type: 'artist', name: 'Stromae', region: 'Belgium' },
  { type: 'artist', name: 'Fela Kuti', region: 'Nigeria' },
  { type: 'artist', name: 'Björk', region: 'Iceland' },
  { type: 'artist', name: 'Cardi B', region: 'New York, USA' },
  { type: 'track', name: 'Dynamite', region: 'BTS • South Korea' },
  { type: 'track', name: 'Essence', region: 'Wizkid • Nigeria' },
  { type: 'track', name: 'Despacito', region: 'Luis Fonsi • Puerto Rico' },
  { type: 'track', name: 'Waka Waka', region: 'Shakira • Colombia' },
  { type: 'track', name: 'One Dance', region: 'Drake • Canada' },
  { type: 'track', name: 'Pepas', region: 'Farruko • Puerto Rico' },
  { type: 'album', name: 'Mr. Morale & The Big Steppers', region: 'Kendrick Lamar • USA' },
  { type: 'album', name: 'Un Verano Sin Ti', region: 'Bad Bunny • Puerto Rico' },
  { type: 'album', name: 'Twice as Tall', region: 'Burna Boy • Nigeria' },
  { type: 'region', name: 'West Africa', region: 'Nigeria, Ghana, Senegal' },
  { type: 'region', name: 'East Asia', region: 'South Korea, Japan, China' },
  { type: 'region', name: 'Latin America', region: 'Colombia, Puerto Rico, Brazil' },
  { type: 'region', name: 'Scandinavia', region: 'Sweden, Norway, Iceland' },
  { type: 'region', name: 'Caribbean', region: 'Jamaica, Puerto Rico, Trinidad' },
  { type: 'region', name: 'South America', region: 'Brazil, Argentina, Colombia' },
]

const typeIcon = { artist: '🎤', track: '🎵', album: '💿', region: '🌍' }
const typeLabel = { artist: 'Artist', track: 'Track', album: 'Album', region: 'Region' }

export default function SearchBar() {
  const [query, setQuery] = useState('')
  const [history, setHistory] = useState([])
  const [showDropdown, setShowDropdown] = useState(false)
  const [results, setResults] = useState([])

  useEffect(() => {
    if (!query.trim()) { setResults([]); return }
    const q = query.toLowerCase()
    const filtered = mockData.filter(item =>
      item.name.toLowerCase().includes(q) ||
      item.region.toLowerCase().includes(q)
    )
    setResults(filtered.slice(0, 6))
  }, [query])

  const handleSelect = (item) => {
    setHistory(prev => [item.name, ...prev.filter(h => h !== item.name)].slice(0, 5))
    setQuery(item.name)
    setShowDropdown(false)
    setResults([])
  }

  const showingHistory = showDropdown && history.length > 0 && !query.trim()
  const showingResults = showDropdown && results.length > 0

  return (
    <div style={{ position: 'relative', marginBottom: '1rem' }}>
      <p style={{ margin: '0 0 6px', fontSize: '14px', color: '#aaa' }}>Search</p>

      <div style={{ position: 'relative' }}>
        <span style={{
          position: 'absolute', left: '10px', top: '50%',
          transform: 'translateY(-50%)', color: '#aaa', fontSize: '13px'
        }}>🔍</span>
        <input
          type="text"
          value={query}
          onChange={e => { setQuery(e.target.value); setShowDropdown(true) }}
          onFocus={() => setShowDropdown(true)}
          onBlur={() => setTimeout(() => setShowDropdown(false), 150)}
          placeholder="Artists, tracks, albums, regions..."
          style={{
            width: '100%', background: '#2a2a2a', border: '1px solid #444',
            borderRadius: '20px', padding: '8px 12px 8px 30px',
            color: 'white', fontSize: '13px', outline: 'none', boxSizing: 'border-box'
          }}
        />
        {query.length > 0 && (
          <span onClick={() => { setQuery(''); setResults([]) }} style={{
            position: 'absolute', right: '10px', top: '50%',
            transform: 'translateY(-50%)', color: '#aaa', cursor: 'pointer', fontSize: '13px'
          }}>✕</span>
        )}
      </div>

      {(showingHistory || showingResults) && (
        <div style={{
          position: 'absolute', top: '58px', left: 0, right: 0,
          background: '#2a2a2a', borderRadius: '8px', zIndex: 100,
          border: '1px solid #444', overflow: 'hidden', maxHeight: '220px', overflowY: 'auto'
        }}>
          {showingHistory && (
            <>
              <p style={{ margin: '8px 12px 4px', fontSize: '11px', color: '#888' }}>Recent searches</p>
              {history.map((h, i) => (
                <div key={i} onClick={() => { setQuery(h); setShowDropdown(false) }} style={{
                  padding: '8px 12px', cursor: 'pointer', fontSize: '13px', color: '#ccc',
                  display: 'flex', alignItems: 'center', gap: '8px'
                }}
                  onMouseEnter={e => e.currentTarget.style.background = '#383838'}
                  onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                >
                  🕐 {h}
                </div>
              ))}
            </>
          )}
          {showingResults && (
            <>
              <p style={{ margin: '8px 12px 4px', fontSize: '11px', color: '#888' }}>Results</p>
              {results.map((r, i) => (
                <div key={i} onClick={() => handleSelect(r)} style={{
                  padding: '8px 12px', cursor: 'pointer',
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center'
                }}
                  onMouseEnter={e => e.currentTarget.style.background = '#383838'}
                  onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '13px' }}>{typeIcon[r.type]}</span>
                    <div>
                      <p style={{ margin: 0, fontSize: '13px', color: 'white' }}>{r.name}</p>
                      <p style={{ margin: 0, fontSize: '11px', color: '#aaa' }}>{r.region}</p>
                    </div>
                  </div>
                  <span style={{
                    fontSize: '10px', color: '#1DB954', background: '#1a3a2a',
                    padding: '2px 6px', borderRadius: '10px'
                  }}>{typeLabel[r.type]}</span>
                </div>
              ))}
            </>
          )}
        </div>
      )}
    </div>
  )
}