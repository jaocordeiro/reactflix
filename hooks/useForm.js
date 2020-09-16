import { useState } from 'react';

function useForm(valoresIniciais) {
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    // chave: nome, descricao, blablabla
    setValues({
      ...values,
      [chave]: valor, // nome: "valor"
    });
  }

  function handleChange(infosDoEvento) {
    setValues(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value,
    );
  }

  function clearFrom() {
    setValue(valoresIniciais);
  }

  return {
    values,
    handleChange,
    clearFrom,
  };
}

export default useForm;
