const REGION_DATA = {
  'fairuz': {
    region: 'Lebanon',
    flag: '🇱🇧',
    genre: 'Arabic Classical / Tarab',
    culture: 'Fairuz is the voice of Lebanon — her music blends Arabic maqam scales with orchestral arrangements. Lebanese music is rooted in the Tarab tradition, where emotion and melody intertwine deeply.',
    funFacts: [
      'Fairuz has sold over 150 million records worldwide',
      'Her songs are played every morning on Lebanese radio as a national tradition',
      'She sang in Arabic, Syrian dialect, and even French',
    ],
    similar: ['Abdel Halim Hafez', 'Warda Al-Jazairia', 'Sabah'],
  },
  'drake': {
    region: 'Toronto, Canada',
    flag: '🇨🇦',
    genre: 'Hip-Hop / R&B',
    culture: 'Toronto\'s music scene blends Caribbean diaspora sounds, Jamaican dancehall, and American hip-hop. Drake helped put "The 6ix" on the global map, making Toronto a recognized hub for modern rap.',
    funFacts: [
      'Toronto is home to one of the largest Jamaican diasporas outside Jamaica',
      'The city\'s diverse culture heavily influenced Drake\'s melodic rap style',
      'OVO Fest put Toronto on the global music festival map',
    ],
    similar: ['The Weeknd', 'PARTYNEXTDOOR', 'Roy Woods'],
  },
  'bad bunny': {
    region: 'Puerto Rico',
    flag: '🇵🇷',
    genre: 'Reggaeton / Latin Trap',
    culture: 'Puerto Rico is the birthplace of reggaeton, blending Caribbean rhythms with hip-hop. The island\'s music scene is deeply connected to its African, Spanish, and Indigenous Taíno roots.',
    funFacts: [
      'Reggaeton originated in Puerto Rico in the early 1990s',
      'Bad Bunny became the first non-English artist to top Spotify globally',
      'The "dembow" rhythm is the signature beat of reggaeton music',
    ],
    similar: ['J Balvin', 'Ozuna', 'Anuel AA'],
  },
  'shakira': {
    region: 'Barranquilla, Colombia',
    flag: '🇨🇴',
    genre: 'Latin Pop / Cumbia',
    culture: 'Barranquilla is Colombia\'s cultural capital, famous for its Carnival and cumbia music. Shakira blends Colombian coastal rhythms with Middle Eastern influences from her Lebanese heritage.',
    funFacts: [
      'Barranquilla\'s Carnival is a UNESCO Intangible Cultural Heritage',
      'Cumbia is Colombia\'s national rhythm, born from African, Indigenous and Spanish roots',
      'Shakira started performing at age 13 in Barranquilla talent shows',
    ],
    similar: ['Carlos Vives', 'J Balvin', 'Maluma'],
  },
  'bts': {
    region: 'Seoul, South Korea',
    flag: '🇰🇷',
    genre: 'K-Pop',
    culture: 'K-Pop is a highly produced genre combining catchy pop with synchronized choreography. South Korea\'s music industry ("Hallyu" wave) has become a massive global cultural export since the 2000s.',
    funFacts: [
      'The Korean Wave (Hallyu) contributes billions to South Korea\'s economy',
      'K-Pop idols train for years in dance, vocals, and languages before debuting',
      'BTS became the first K-Pop group to address the UN General Assembly',
    ],
    similar: ['EXO', 'BLACKPINK', 'Stray Kids'],
  },
  'burna boy': {
    region: 'Port Harcourt, Nigeria',
    flag: '🇳🇬',
    genre: 'Afrobeats / Afrofusion',
    culture: 'Nigeria is the epicenter of Afrobeats, a genre blending traditional West African rhythms with hip-hop and R&B. Port Harcourt\'s rich cultural scene shaped Burna Boy\'s unique "Afrofusion" sound.',
    funFacts: [
      'Afrobeats is now one of the fastest-growing genres globally',
      'Nigeria has one of the largest music industries in Africa',
      'Burna Boy\'s grandfather managed Fela Kuti, the godfather of Afrobeats',
    ],
    similar: ['Wizkid', 'Davido', 'Fela Kuti'],
  },
  'adele': {
    region: 'London, UK',
    flag: '🇬🇧',
    genre: 'Soul / Pop',
    culture: 'London has one of the world\'s most diverse music scenes, from British soul to punk and grime. Adele\'s music draws from classic American soul and British pop songwriting traditions.',
    funFacts: [
      'The UK\'s music industry is the third largest in the world',
      'London\'s diverse boroughs inspired many distinct UK music genres',
      'Adele attended the BRIT School, which also produced Amy Winehouse',
    ],
    similar: ['Amy Winehouse', 'Sam Smith', 'Duffy'],
  },
  'kendrick lamar': {
    region: 'Compton, USA',
    flag: '🇺🇸',
    genre: 'Hip-Hop / Rap',
    culture: 'Compton, California is legendary in hip-hop history, the birthplace of gangsta rap and West Coast sound. The city\'s struggles and culture have shaped some of America\'s most powerful music.',
    funFacts: [
      'Compton gave birth to N.W.A and West Coast hip-hop in the late 1980s',
      'Kendrick Lamar won a Pulitzer Prize for DAMN. — first non-classical/jazz artist',
      'The "LA sound" blends funk, soul samples with street storytelling',
    ],
    similar: ['Dr. Dre', 'Nipsey Hussle', 'ScHoolboy Q'],
  },
  'beyonce': {
    region: 'Houston, USA',
    flag: '🇺🇸',
    genre: 'R&B / Pop',
    culture: 'Houston\'s Third Ward is deeply rooted in Black American music and culture. Texas\'s rich blues, gospel, and R&B traditions heavily influenced Beyoncé\'s powerful vocal and performance style.',
    funFacts: [
      'Houston\'s "chopped and screwed" hip-hop style is unique to the city',
      'Beyoncé is the most Grammy-awarded artist in history',
      'The Third Ward has a rich history of Black arts and civil rights activism',
    ],
    similar: ['Solange', 'Kelly Rowland', 'Destiny\'s Child'],
  },
  'taylor swift': {
    region: 'Pennsylvania, USA',
    flag: '🇺🇸',
    genre: 'Country Pop',
    culture: 'Pennsylvania\'s small-town roots and Appalachian musical heritage helped shape Taylor Swift\'s early country-pop sound. She later moved to Nashville, the heartland of American country music.',
    funFacts: [
      'Nashville, Tennessee is known as "Music City" for its country music scene',
      'Taylor Swift moved to Nashville at age 14 to pursue a music career',
      'She is the best-selling music artist of the 21st century',
    ],
    similar: ['Carrie Underwood', 'Kacey Musgraves', 'Fearless-era country artists'],
  },
  'michael jackson': {
    region: 'Gary, Indiana, USA',
    flag: '🇺🇸',
    genre: 'Pop / R&B / Soul',
    culture: 'Gary, Indiana is a working-class city near Chicago with deep roots in Black American culture and Motown music. Michael Jackson\'s early exposure to gospel and soul in Gary shaped his legendary career.',
    funFacts: [
      'The Jackson 5 were discovered in Gary\'s local talent shows',
      'Gary was a hub of the Great Migration, bringing Southern blues to the Midwest',
      'Michael Jackson remains the best-selling solo music artist of all time',
    ],
    similar: ['The Jackson 5', 'Prince', 'Stevie Wonder'],
  },
  'smino': {
    region: 'St. Louis, USA',
    flag: '🇺🇸',
    genre: 'Neo-Soul / Jazz Rap',
    culture: 'St. Louis has a deep musical history spanning blues, jazz, and gospel. Smino\'s music reflects the city\'s soulful underground scene, blending jazz improvisation with modern R&B.',
    funFacts: [
      'St. Louis was a key stop on the Mississippi blues trail',
      'The city has a thriving underground jazz and neo-soul scene',
      'Smino is part of the Zero Fatigue collective based in St. Louis',
    ],
    similar: ['Saba', 'Noname', 'Ravyn Lenae'],
  },
  'the marias': {
    region: 'Los Angeles, USA',
    flag: '🇺🇸',
    genre: 'Dream Pop / Psychedelic Soul',
    culture: 'Los Angeles is a melting pot of Latin, indie, and alternative music cultures. The Marías blend Spanish-language lyrics with dreamy psychedelic sounds, reflecting LA\'s bicultural Latino identity.',
    funFacts: [
      'LA has the largest Mexican-American population of any US city',
      'The Marías sing in both English and Spanish, reflecting LA\'s bilingual culture',
      'LA\'s Eastside is a hub for Chicano arts, music and culture',
    ],
    similar: ['Cuco', 'Soccer Mommy', 'Snail Mail'],
  },
  'j cole': {
    region: 'Fayetteville, USA',
    flag: '🇺🇸',
    genre: 'Hip-Hop / Rap',
    culture: 'Fayetteville, North Carolina is a military town with a tight-knit community. J. Cole\'s music reflects Southern Black American experience — storytelling, struggle, and self-reflection from a small-city perspective.',
    funFacts: [
      'J. Cole grew up near Fort Bragg, one of the largest US military bases',
      'He attended St. John\'s University in New York on an academic scholarship',
      'Dreamville Records, his label, is named after his Fayetteville neighborhood',
    ],
    similar: ['Bas', 'EarthGang', 'Ari Lennox'],
  },
}

const DEFAULT_DATA = {
  region: 'Unknown Region',
  flag: '🌍',
  genre: 'Various',
  culture: 'No cultural info available for this artist yet. Try searching for more popular artists!',
  funFacts: [],
  similar: [],
}

export default function RegionSidebar({ artistName }) {
  const key = artistName?.toLowerCase()
  const data = REGION_DATA[key] || DEFAULT_DATA
  const hasData = !!REGION_DATA[key]

  return (
    <div style={{
      background: '#1a1a1a',
      borderRadius: '10px',
      padding: '14px',
      marginTop: '1rem',
      border: '1px solid #2a2a2a',
    }}>
      <p style={{ margin: '0 0 10px', fontSize: '14px', color: '#aaa' }}>Cultural Info</p>

      {!artistName ? (
        <p style={{ color: '#555', fontSize: '13px', margin: 0 }}>Play a song to see cultural info</p>
      ) : (
        <>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
            <span style={{ fontSize: '22px' }}>{data.flag}</span>
            <div>
              <p style={{ margin: 0, fontWeight: 'bold', fontSize: '14px', color: 'white' }}>{data.region}</p>
              <p style={{ margin: 0, fontSize: '11px', color: '#1DB954' }}>{data.genre}</p>
            </div>
          </div>

          <p style={{ margin: '0 0 12px', fontSize: '12px', color: '#ccc', lineHeight: '1.6' }}>
            {data.culture}
          </p>

          {hasData && data.funFacts.length > 0 && (
            <div style={{ marginBottom: '12px' }}>
              <p style={{ margin: '0 0 6px', fontSize: '12px', color: '#aaa', fontWeight: 'bold' }}>Did you know?</p>
              {data.funFacts.map((fact, i) => (
                <div key={i} style={{ display: 'flex', gap: '6px', marginBottom: '4px', alignItems: 'flex-start' }}>
                  <span style={{ color: '#1DB954', fontSize: '10px', marginTop: '3px', flexShrink: 0 }}>●</span>
                  <p style={{ margin: 0, fontSize: '11px', color: '#bbb', lineHeight: '1.5' }}>{fact}</p>
                </div>
              ))}
            </div>
          )}

          {hasData && data.similar.length > 0 && (
            <div>
              <p style={{ margin: '0 0 6px', fontSize: '12px', color: '#aaa', fontWeight: 'bold' }}>Similar Artists</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                {data.similar.map((artist, i) => (
                  <span key={i} style={{
                    background: '#2a2a2a', color: '#ccc',
                    fontSize: '11px', padding: '3px 8px',
                    borderRadius: '12px', border: '1px solid #3a3a3a'
                  }}>{artist}</span>
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  )
}