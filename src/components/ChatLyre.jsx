import { useState, useRef, useEffect } from 'react'

export default function ChatLyre() {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [slowLoad, setSlowLoad] = useState(false)
  const bottomRef = useRef(null)
  const timerRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const sendMessage = async () => {
    if (!input.trim() || loading) return

    const userMessage = { role: 'user', content: input }
    const newMessages = [...messages, userMessage]
    setMessages(newMessages)
    setInput('')
    setLoading(true)
    setSlowLoad(false)

    timerRef.current = setTimeout(() => setSlowLoad(true), 2000)

    try {
      const response = await fetch('https://text.pollinations.ai/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'openai',
          messages: newMessages,
          system: `You are Lyre, a friendly AI music assistant for the Lyric Location Spotify extension. 
          Your job is to:
          1. Answer questions about the geographic origins and cultural backgrounds of songs, artists, and regions
          2. Recommend 2-3 specific songs or artists from geographic regions the user may not have explored yet
          3. After every response, suggest exactly 2 short follow-up questions the user could ask, formatted like:
          "💡 You could also ask:
          • [question 1]
          • [question 2]"
          Keep responses concise and conversational. Always tie music back to its geographic and cultural roots.`
        })
      })

      const text = await response.text()
      clearTimeout(timerRef.current)
      setMessages([...newMessages, { role: 'assistant', content: text }])
    } catch (err) {
      clearTimeout(timerRef.current)
      setMessages([...newMessages, {
        role: 'assistant',
        content: 'Sorry, I had trouble connecting. Please try again!'
      }])
    }

    setLoading(false)
    setSlowLoad(false)
  }

  const suggestedQuestions = [
    "Where is Drake from?",
    "Recommend K-Pop artists",
    "What music comes from Nigeria?",
    "Tell me about Bossa Nova"
  ]

  return (
    <div style={{ marginTop: '1rem' }}>
      <p style={{ margin: 0, fontSize: '14px', color: '#aaa' }}>AI Assistant</p>
      <p style={{ margin: '0 0 8px', fontWeight: 'bold' }}>🎵 Ask Lyre</p>

      <div style={{
        background: '#1a1a1a', borderRadius: '8px', padding: '10px',
        height: '200px', overflowY: 'auto', display: 'flex',
        flexDirection: 'column', gap: '8px', marginBottom: '8px'
      }}>
        {messages.length === 0 && (
          <div style={{ marginTop: '8px' }}>
            <p style={{ color: '#888', fontSize: '11px', margin: '0 0 8px' }}>Try asking:</p>
            {suggestedQuestions.map((q, i) => (
              <div key={i} onClick={() => setInput(q)} style={{
                background: '#2a2a2a', borderRadius: '12px', padding: '6px 10px',
                fontSize: '11px', color: '#ccc', cursor: 'pointer', marginBottom: '4px'
              }}
                onMouseEnter={e => e.currentTarget.style.background = '#383838'}
                onMouseLeave={e => e.currentTarget.style.background = '#2a2a2a'}
              >
                {q}
              </div>
            ))}
          </div>
        )}
        {messages.map((msg, i) => (
          <div key={i} style={{
            alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
            background: msg.role === 'user' ? '#1DB954' : '#333',
            color: 'white', padding: '8px 12px', borderRadius: '12px',
            fontSize: '12px', maxWidth: '85%', whiteSpace: 'pre-wrap'
          }}>
            {msg.content}
          </div>
        ))}
        {loading && (
          <div style={{
            alignSelf: 'flex-start', background: '#333', color: '#aaa',
            padding: '8px 12px', borderRadius: '12px', fontSize: '12px'
          }}>
            {slowLoad ? '⏳ Still thinking, hang on...' : 'Lyre is thinking...'}
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      <div style={{ display: 'flex', gap: '6px' }}>
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && sendMessage()}
          placeholder="Ask about music origins..."
          style={{
            flex: 1, background: '#2a2a2a', border: '1px solid #444',
            borderRadius: '20px', padding: '8px 12px', color: 'white',
            fontSize: '12px', outline: 'none'
          }}
        />
        <button onClick={sendMessage} disabled={loading} style={{
          background: loading ? '#555' : '#1DB954', color: 'white', border: 'none',
          borderRadius: '50%', width: '34px', height: '34px',
          cursor: loading ? 'not-allowed' : 'pointer', fontSize: '14px'
        }}>➤</button>
      </div>
    </div>
  )
}