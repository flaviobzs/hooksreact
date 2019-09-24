import React, { useState } from 'react';

function App() {
  const [techs, setTech] = useState(['React JS', 'React Native']);
  const [newTech, setNewTech] = useState(''); // estado para armazenar o valor do input

  function handleAdd() {
    setTech([...techs, newTech]); // recebe o valor do input e insere no array de tecnologias (techs)
    setNewTech('');
  }

  return (
    <>
      <ul>
        {techs.map(tech => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      <input value={newTech} onChange={e => setNewTech(e.target.value)} />
      <button type="button" onClick={handleAdd}>
        Adicionar
      </button>
    </>
  );
}

export default App;
