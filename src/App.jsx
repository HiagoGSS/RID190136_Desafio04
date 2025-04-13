import React, { useEffect, useState } from 'react'

function App() {
  const [showHero, setShowHero] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowHero(true), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="p-8">
      <header className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Meu Portfólio</h1>
        <nav className="space-x-4">
          <a href="#projetos">Projetos</a>
          <a href="#sobre">Sobre</a>
        </nav>
      </header>

      <section className={`mt-16 transition-opacity duration-1000 ${showHero ? 'opacity-100' : 'opacity-0'}`}>
        <h2 className="text-4xl font-bold mb-4">Olá, eu sou um desenvolvedor front-end</h2>
        <p>Este é um portfólio criado com React, Vite e TailwindCSS para demonstrar meus projetos e habilidades.</p>
      </section>

      <section id="projetos" className="mt-16">
        <h3 className="text-2xl font-semibold mb-4">Projetos</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[1, 2, 3, 4].map(num => (
            <div key={num} className="bg-zinc-800 p-4 rounded-xl shadow">
              <h4 className="font-semibold">Projeto {num}</h4>
              <p className="text-sm">Descrição breve do projeto {num} com tecnologias usadas.</p>
            </div>
          ))}
        </div>
      </section>

      <section id="sobre" className="mt-16">
        <h3 className="text-2xl font-semibold mb-4">Sobre mim</h3>
        <p className="text-sm">Sou apaixonado por desenvolvimento web e sempre em busca de novos desafios e aprendizado contínuo.</p>
      </section>

      <footer className="mt-16 border-t pt-4 text-sm text-zinc-400">
        <p>Contato: email@email.com</p>
      </footer>
    </div>
  )
}

export default App