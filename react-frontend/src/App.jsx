
import './css/App.css'
import Header from './components/header.jsx'
import Body from './components/body.jsx'
import { AuthProvider } from './hooks/useAuth.js'

function App() {

  return (
    <AuthProvider>
      <section>
        <Header />
        <hr />
        <Body />
      </section>
    </AuthProvider>
  )
}

export default App
