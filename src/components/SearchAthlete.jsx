import { useState } from 'react'

const athletes = [
  'Guiu Molina Andreu',
  'Ivet Molina Andreu',
  'Noe Andreu Valls',
  'Sergi Molina Saiz',
  'Baldufa',
  'Pisku',
]

function SearchAthlete() {
  const [search, setSearch] = useState('')
  const filteredAthletes = athletes.filter((athlete) =>
    athlete.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="d-flex flex-column justify-content-center align-items-center min-vh-100 text-center">
      {/* ✅ Título SIEMPRE visible */}
      <h3 className="mb-3" style={{ fontSize: '10px' }}>
        Buscar esportista
      </h3>

      {/* 🔹 Input de búsqueda */}
      <input
        type="text"
        placeholder="Escriu el nom de l'esportista..."
        className="form-control text-center"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          fontSize: '8px',
          width: '100%',
          maxWidth: '300px',
          padding: '8px',
        }}
      />

      {/* 🔹 Lista de resultados (pero el título no desaparece) */}
      <div className="mt-2 w-75" style={{ maxWidth: '300px' }}>
        {search &&
          filteredAthletes.map((athlete, index) => (
            <div
              key={index}
              className="border rounded p-1 m-1 shadow-sm bg-light w-100"
              style={{ fontSize: '8px', padding: '6px' }}
            >
              {athlete}
            </div>
          ))}
      </div>
    </div>
  )
}

export default SearchAthlete
