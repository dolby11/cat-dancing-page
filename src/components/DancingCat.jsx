import catSvg from '../assets/images/cat.svg'
import { useAnimation } from '../hooks/useAnimation'
import '../styles/DancingCat.css'

function DancingCat() {
  const {
    isAnimating,
    animationSpeed,
    danceMode,
    toggleAnimation,
    changeDanceMode
  } = useAnimation()

  const getDanceModeEmoji = (mode) => {
    switch (mode) {
      case 'slow': return '🐌'
      case 'fast': return '⚡'
      case 'crazy': return '🌪️'
      default: return '🕺'
    }
  }

  const getDanceModeText = (mode) => {
    switch (mode) {
      case 'slow': return '느린 댄스'
      case 'fast': return '빠른 댄스'
      case 'crazy': return '미친 댄스'
      default: return '일반 댄스'
    }
  }

  return (
    <div className="dancing-cat-container">
      <div
        className={`cat-wrapper ${isAnimating ? 'dancing' : 'stopped'} ${danceMode}`}
        style={{
          '--animation-speed': animationSpeed
        }}
      >
        <img
          src={catSvg}
          alt="Dancing Cat"
          className="cat-image"
        />
      </div>

      <div className="controls">
        <button onClick={toggleAnimation} className="dance-button primary">
          {isAnimating ? '🛑 멈추기' : '🕺 춤추기'}
        </button>
      </div>

      <div className="dance-modes">
        <p className="mode-label">댄스 모드:</p>
        <div className="mode-buttons">
          {['normal', 'slow', 'fast', 'crazy'].map(mode => (
            <button
              key={mode}
              onClick={() => changeDanceMode(mode)}
              className={`mode-button ${danceMode === mode ? 'active' : ''}`}
              title={getDanceModeText(mode)}
            >
              {getDanceModeEmoji(mode)}
            </button>
          ))}
        </div>
      </div>

      <div className="keyboard-hints">
        <p>⌨️ 키보드 단축키:</p>
        <span>스페이스바: 시작/정지</span>
        <span>1~4: 댄스 모드 변경</span>
      </div>

      <div className="music-notes">
        <span className="note note-1">♪</span>
        <span className="note note-2">♫</span>
        <span className="note note-3">♪</span>
        <span className="note note-4">♬</span>
      </div>
    </div>
  )
}

export default DancingCat