import { useState } from 'react'

const MOCK_HISTORY = [
  { artist: 'Drake', region: 'Toronto, Canada', genre: 'Hip-Hop', flag: '🇨🇦' },
  { artist: 'Bad Bunny', region: 'Puerto Rico', genre: 'Reggaeton', flag: '🇵🇷' },
  { artist: 'Fairuz', region: 'Lebanon', genre: 'Arabic Classical', flag: '🇱🇧' },
  { artist: 'Burna Boy', region: 'Nigeria', genre: 'Afrobeats', flag: '🇳🇬' },
  { artist: 'BTS', region: 'South Korea', genre: 'K-Pop', flag: '🇰🇷' },
  { artist: 'Shakira', region: 'Colombia', genre: 'Latin Pop', flag: '🇨🇴' },
  { artist: 'Adele', region: 'London, UK', genre: 'Soul', flag: '🇬🇧' },
  { artist: 'Kendrick Lamar', region: 'Compton, USA', genre: 'Hip-Hop', flag: '🇺🇸' },
]

const TOTAL_WORLD_REGIONS = 50

export default function ListenReport() {
  const [report, setReport] = useState(null)
  const [loading, setLoading] = useState(false)
  const [shared, setShared] = useState(false)

  const generateReport = () => {
    setLoading(true)
    setShared(false)
    setTimeout(() => {
      const regionCount = {}
      const genreCount = {}

      MOCK_HISTORY.forEach(({ region, genre }) => {
        regionCount[region] = (regionCount[region] || 0) + 1
        genreCount[genre] = (genreCount[genre] || 0) + 1
      })

      const topRegion = Object.entries(regionCount).sort((a, b) => b[1] - a[1])[0]
      const topGenres = Object.entries(genreCount).sort((a, b) => b[1] - a[1]).slice(0, 3)
      const uniqueRegions = Object.keys(regionCount).length
      const discoveryPercent = Math.round((uniqueRegions / TOTAL_WORLD_REGIONS) * 100)

      setReport({ topRegion, topGenres, uniqueRegions, discoveryPercent })
      setLoading(false)
    }, 1200)
  }

  const handleShare = () => {
    const text = `🌍 My Lyric Location Report:\n📍 Top Region: ${report.topRegion[0]}\n🎵 Discovery: ${report.discoveryPercent}% of the world explored!\n#LyricLocation #SpotifyStats`
    navigator.clipboard.writeText(text).then(() => setShared(true))
  }

  return (
    <div style={{
      background: '#1a1a1a',
      borderRadius: '10px',
      padding: '14px',
      marginTop: '1rem',
      border: '1px solid #2a2a2a',
    }}>
      <p style={{ margin: '0 0 4px', fontSize: '14px', color: '#aaa' }}>Listening Report</p>
      <p style={{ margin: '0 0 12px', fontWeight: 'bold', fontSize: '15px' }}>🌍 Your Music World</p>

      {!report && !loading && (
        <p style={{ fontSize: '12px', color: '#888', margin: '0 0 12px', lineHeight: '1.5' }}>
          See a breakdown of the regions and cultures in your listening history.
        </p>
      )}

      {loading && (
        <div style={{ textAlign: 'center', padding: '16px 0' }}>
          <p style={{ color: '#1DB954', fontSize: '13px', margin: 0 }}>Analysing your listening history...</p>
        </div>
      )}

      {report && !loading && (
        <div style={{ marginBottom: '12px' }}>

          <div style={{
            background: '#121212', borderRadius: '8px', padding: '12px', marginBottom: '10px'
          }}>
            <p style={{ margin: '0 0 4px', fontSize: '11px', color: '#aaa' }}>Top Region</p>
            <p style={{ margin: 0, fontSize: '15px', fontWeight: 'bold', color: 'white' }}>
              {MOCK_HISTORY.find(h => h.region === report.topRegion[0])?.flag} {report.topRegion[0]}
            </p>
            <p style={{ margin: '2px 0 0', fontSize: '11px', color: '#1DB954' }}>
              {report.topRegion[1]} artists from this region
            </p>
          </div>

          <div style={{
            background: '#121212', borderRadius: '8px', padding: '12px', marginBottom: '10px'
          }}>
            <p style={{ margin: '0 0 8px', fontSize: '11px', color: '#aaa' }}>Top Genres</p>
            {report.topGenres.map(([genre, count], i) => (
              <div key={i} style={{ marginBottom: '6px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '3px' }}>
                  <span style={{ fontSize: '12px', color: 'white' }}>{genre}</span>
                  <span style={{ fontSize: '11px', color: '#aaa' }}>{count} artist{count > 1 ? 's' : ''}</span>
                </div>
                <div style={{ background: '#2a2a2a', borderRadius: '4px', height: '4px' }}>
                  <div style={{
                    background: '#1DB954',
                    width: `${Math.round((count / MOCK_HISTORY.length) * 100)}%`,
                    height: '4px', borderRadius: '4px'
                  }} />
                </div>
              </div>
            ))}
          </div>

          <div style={{
            background: '#121212', borderRadius: '8px', padding: '12px'
          }}>
            <p style={{ margin: '0 0 6px', fontSize: '11px', color: '#aaa' }}>World Discovery</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ flex: 1, background: '#2a2a2a', borderRadius: '4px', height: '6px' }}>
                <div style={{
                  background: '#1DB954',
                  width: `${report.discoveryPercent}%`,
                  height: '6px', borderRadius: '4px',
                  transition: 'width 0.8s ease'
                }} />
              </div>
              <span style={{ fontSize: '14px', fontWeight: 'bold', color: '#1DB954', minWidth: '36px' }}>
                {report.discoveryPercent}%
              </span>
            </div>
            <p style={{ margin: '6px 0 0', fontSize: '11px', color: '#888' }}>
              {report.uniqueRegions} of {TOTAL_WORLD_REGIONS} regions explored
            </p>
          </div>
        </div>
      )}

      <div style={{ display: 'flex', gap: '6px', marginTop: '4px' }}>
        <button
          onClick={generateReport}
          disabled={loading}
          style={{
            flex: 1, background: loading ? '#333' : '#1DB954',
            color: loading ? '#aaa' : 'black',
            border: 'none', borderRadius: '20px',
            padding: '8px 0', fontSize: '12px',
            fontWeight: 'bold', cursor: loading ? 'not-allowed' : 'pointer'
          }}
        >
          {loading ? 'Generating...' : 'Generate Report'}
        </button>

        {report && (
          <button
            onClick={handleShare}
            style={{
              background: shared ? '#333' : '#2a2a2a',
              color: shared ? '#1DB954' : '#ccc',
              border: '1px solid #3a3a3a', borderRadius: '20px',
              padding: '8px 12px', fontSize: '12px',
              cursor: 'pointer'
            }}
          >
            {shared ? 'Copied! ✓' : 'Share'}
          </button>
        )}
      </div>
    </div>
  )
}