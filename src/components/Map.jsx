const ARTIST_LOCATIONS = {
  'fairuz': { lat: 33.8886, lng: 35.4955, label: 'Lebanon' },
  'drake': { lat: 43.6510, lng: -79.3470, label: 'Toronto, Canada' },
  'bad bunny': { lat: 18.2208, lng: -66.5901, label: 'Puerto Rico' },
  'shakira': { lat: 10.9685, lng: -74.7813, label: 'Barranquilla, Colombia' },
  'bts': { lat: 37.5665, lng: 126.9780, label: 'Seoul, South Korea' },
  'burna boy': { lat: 4.8156, lng: 7.0498, label: 'Port Harcourt, Nigeria' },
  'adele': { lat: 51.5074, lng: -0.1278, label: 'London, UK' },
  'kendrick lamar': { lat: 34.0522, lng: -118.2437, label: 'Compton, USA' },
  'michael jackson': { lat: 41.5868, lng: -87.3467, label: 'Gary, Indiana, USA' },
  'beyonce': { lat: 29.7604, lng: -95.3698, label: 'Houston, USA' },
  'taylor swift': { lat: 40.2732, lng: -76.8839, label: 'Pennsylvania, USA' },
  'j cole': { lat: 34.9290, lng: -79.0159, label: 'Fayetteville, USA' },
  'smino': { lat: 38.6270, lng: -90.1994, label: 'St. Louis, USA' },
  'the marias': { lat: 34.0522, lng: -118.2437, label: 'Los Angeles, USA' },
}

export default function Map({ artistName }) {
  const key = artistName?.toLowerCase()
  const location = ARTIST_LOCATIONS[key]

  if (!artistName) {
    return <div style={{ color: '#aaa', fontSize: '14px' }}>Play a song to see origin</div>
  }

  if (!location) {
    return <div style={{ color: '#aaa', fontSize: '14px' }}>No location data for {artistName}</div>
  }

  const mapSrc = `https://www.google.com/maps/embed/v1/place?key=AIzaSyAkBrMOUwJZqeu40_NI7JzOZ6vG7zRRs5c&q=${location.label}&center=${location.lat},${location.lng}&zoom=5`

  return (
    <div>
      <p style={{ fontSize: '12px', color: '#1DB954', margin: '0.5rem 0' }}>
        Origin: {location.label}
      </p>
      <iframe
        src={mapSrc}
        width="100%"
        height="200"
        style={{ border: 0, borderRadius: '8px' }}
        allowFullScreen
        loading="lazy"
      />
    </div>
  )
}