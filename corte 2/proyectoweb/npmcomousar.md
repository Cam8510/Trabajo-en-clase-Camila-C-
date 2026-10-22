Se usa npm.cmd create vite@latest Saberio -- --template react-ts para crear el template
El .cmd es por tema de permisos pero generalmente no es necesario

Cuando ya funciona da un link donde se va a ver la página

Borrar App.css y assets (Ignorar que todo explota)

En index.html se configura todo igual, en este caso se va a hacer algo sobre cafe porque no tengo ideas y mejor me copio de la profe por ahora 🦆🦆

en vite.config.ts dentro de export default defineConfig({}) agregar al inicio se agrega server: {port: 5173,strictPort: true}, el strictPort hace que ninguna otra función use este puerto :D Y ya no explota nada (con fe)

en index.css se modifica la apariencia del template

Para quitar todos los errores Entrar a App.tsx y borrar como todo, dejar solo:

import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
    </>
  )
}

export default App