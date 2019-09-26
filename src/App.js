import React, { useState, useEffect, useMemo, useCallback } from 'react';

function App() {
  const [techs, setTech] = useState(['React JS', 'React Native']);
  const [newTech, setNewTech] = useState(''); // estado para armazenar o valor do input

  // function handleAdd() {
  //   setTech([...techs, newTech]); // recebe o valor do input e insere no array de tecnologias (techs)
  //   setNewTech('');
  // }

  // implementando use Callback
  const handleAdd = useCallback(() => {
    setTech([...techs, newTech]); // recebe o valor do input e insere no array de tecnologias (techs)
    setNewTech('');
  }, [newTech, techs]);

  useEffect(() => {
    const storageTech = localStorage.getItem('tech');

    if (storageTech) {
      setTech(JSON.parse(storageTech));
    }

    // simular componete COMPONENT WILL MOUNT  (executa algo depois que o componente é montado)
    return () => {
      document.removeEventListener(); // remover event listener depois que
    }; //
  }, []);

  // simular componete COMPONENT DID MOUNT
  useEffect(() => {
    // apágar o array ['React JS', 'React Native'] pegar dados do localStorage

    const storageTech = localStorage.getItem('tech'); // busca dados do LocalStorage e renderizar

    if (storageTech) {
      setTech(JSON.parse(storageTech));
    }
  }, []); // começar a listagem vazia  || pois não monitora nenhuma variavel || só renderizar depois quando inserir alguma mudança)

  // simular componete COMPONENT DID UPDATE
  useEffect(() => {
    // executa quando carrega a pagina e quando atualiza os dados

    localStorage.setItem('tech', JSON.stringify(techs)); // quando houver mudanças e tech, executar essa função
  }, [techs]); // monitora a variavel tech

  const techSize = useMemo(() => techs.length, [techs]);

  return (
    <>
      <ul>
        {techs.map(tech => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      <strong>Você tem {techSize} tecnologias</strong>
      <br />
      <input value={newTech} onChange={e => setNewTech(e.target.value)} />
      <button type="button" onClick={handleAdd}>
        Adicionar
      </button>
    </>
  );
}

export default App;
