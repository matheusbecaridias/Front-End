// App.jsx
import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [activePanel, setActivePanel] = useState('front')
  const [radialOpen, setRadialOpen] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  // Birthday data
  const eventData = {
    name: "MATHEUS",
    date: "30 DE JANEIRO • 2026",
    time: "19:00 • 00:00",
    location: "OPERA BAR, Rod. Melo Peixoto, 1523 - Jardim Uniao, Cambé - PR, 86185-700",
    whatsappLink: "https://wa.me/5511999999999?text=Oi!%20Vou%20comparecer%20ao%20seu%20anivers%C3%A1rio!%20%E2%9C%A8",
    mapLink: "https://maps.app.goo.gl/am3q9vHevqzK9QsC7"
  }

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const getRadialItems = () => {
    return [
      { label: '✨ CONFIRMAR', action: () => window.open(eventData.whatsappLink, '_blank'), angle: 0 },
      { label: '📍 LOCAL', action: () => window.open(eventData.mapLink, '_blank'), angle: 72 },
      { label: '🎁 LISTA', action: () => alert('Lista de presentes: Livraria Cultura, Amazon, ou PIX'), angle: 144 },
      { label: '📅 SALVAR', action: () => alert('Data salva no seu calendário! 15/12 às 19h'), angle: 216 },
      { label: '🎵 PLAYLIST', action: () => alert('Playlist colaborativa: bit.ly/festaplay'), angle: 288 }
    ]
  }

  return (
    <div className="experimental-container">
      {/* Animated gradient background */}
      <div className="gradient-orb" style={{ transform: `translate(${mousePos.x * 0.02}px, ${mousePos.y * 0.02}px)` }}></div>
      <div className="gradient-orb2" style={{ transform: `translate(${mousePos.x * -0.015}px, ${mousePos.y * -0.015}px)` }}></div>

      {/* Main Interface */}
      <div className="interface">
        
        {/* Experimental Radial Menu Trigger */}
        <button 
          className={`radial-trigger ${radialOpen ? 'active' : ''}`}
          onClick={() => setRadialOpen(!radialOpen)}
        >
          <div className="trigger-icon">⚡</div>
          <span className="trigger-text">EXPLORAR</span>
        </button>

        {/* Radial Navigation Menu */}
        {radialOpen && (
          <div className="radial-menu">
            {getRadialItems().map((item, idx) => (
              <button
                key={idx}
                className="radial-item"
                style={{ 
                  transform: `rotate(${item.angle}deg) translate(0, -140px) rotate(-${item.angle}deg)`,
                  animationDelay: `${idx * 0.05}s`
                }}
                onClick={() => { item.action(); setRadialOpen(false) }}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}

        {/* Main Content - Nonlinear Journey */}
        <div className="journey-container">


          {/* Interactive Map Card */}
          <div className="interactive-card front-card" onClick={() => setActivePanel('front')}>
            <div className="card-glow"></div>
            <div className="invite-header">
              <div className="year-badge">★ 2024 ★</div>
              <h1 className="event-title">{eventData.name}</h1>
              <div className="title-underline"></div>
            </div>
            
            <div className="event-details">
              <div className="detail-item">
                <span className="detail-icon">📅</span>
                <span className="detail-text">{eventData.date}</span>
              </div>
              <div className="detail-item">
                <span className="detail-icon">⏰</span>
                <span className="detail-text">{eventData.time}</span>
              </div>
              <div className="detail-item location-item">
                <span className="detail-icon">📍</span>
                <span className="detail-text">{eventData.location}</span>
              </div>
            </div>

            <div className="interactive-map">
              <div className="map-marker" onClick={(e) => { e.stopPropagation(); window.open(eventData.mapLink, '_blank') }}>
                <div className="marker-pulse"></div>
                <span>📍 VER MAPA</span>
              </div>
              <div className="map-path"></div>
            </div>

            <button className="whatsapp-expedition" onClick={() => window.open(eventData.whatsappLink, '_blank')}>
              <span className="btn-icon">💬</span>
              <span>CONFIRMAR VIA WHATSAPP →</span>
              <span className="btn-arrow">⚡</span>
            </button>
          </div>

          {/* Nonlinear journey cards - hidden until explored */}
          <div className={`journey-card journey-1 ${activePanel === 'journey1' ? 'expanded' : ''}`}>
            <div className="journey-preview" onClick={() => setActivePanel(activePanel === 'journey1' ? 'front' : 'journey1')}>
              <span>🎁</span>
              <span>PRESENTE EXPERIÊNCIA</span>
            </div>
            {activePanel === 'journey1' && (
              <div className="journey-full">
                <p>Sua presença já é o maior presente! Mas se quiser contribuir:</p>
                <p>PIX: aniversario@ana.com.br</p>
                <p>Lista: Livraria Cultura, Amazon, Magalu</p>
              </div>
            )}
          </div>

          <div className={`journey-card journey-2 ${activePanel === 'journey2' ? 'expanded' : ''}`}>
            <div className="journey-preview" onClick={() => setActivePanel(activePanel === 'journey2' ? 'front' : 'journey2')}>
              <span>🎵</span>
              <span>TRILHA SONORA</span>
            </div>
            {activePanel === 'journey2' && (
              <div className="journey-full">
                <p>Playlist colaborativa aberta!</p>
                <p>Adicione sua música favorita:</p>
                <p className="playlist-link">bit.ly/festa-playlist</p>
              </div>
            )}
          </div>

          <div className={`journey-card journey-3 ${activePanel === 'journey3' ? 'expanded' : ''}`}>
            <div className="journey-preview" onClick={() => setActivePanel(activePanel === 'journey3' ? 'front' : 'journey3')}>
              <span>📸</span>
              <span>MEMÓRIAS VIVAS</span>
            </div>
            {activePanel === 'journey3' && (
              <div className="journey-full">
                <p>Use #FestaAna2024 nas redes</p>
                <p>Fotos instantâneas serão projetadas durante a festa!</p>
              </div>
            )}
          </div>

        </div>

        {/* Experimental footer - floating navigation */}
        <div className="experimental-footer">
          <div className="footer-orbit">
            <div className="orbit-dot" style={{ animationDelay: '0s' }}></div>
            <div className="orbit-dot" style={{ animationDelay: '0.3s' }}></div>
            <div className="orbit-dot" style={{ animationDelay: '0.6s' }}></div>
            <div className="orbit-dot" style={{ animationDelay: '0.9s' }}></div>
          </div>
          <p className="footer-text">✦ navegação experimental • gire o menu central ✦</p>
        </div>

      </div>
    </div>
  )
}

export default App