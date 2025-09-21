import './App.css'
import DancingCat from './components/DancingCat'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>고양이 댄싱 파티 🐱</h1>
        <p>귀여운 고양이가 춤을 춥니다!</p>
      </header>
      <main className="app-main">
        <DancingCat />
      </main>
    </div>
  )
}

export default App
