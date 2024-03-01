import { useState } from "react";
import BotonNumerico from "./componentes/BotonNumerico";
import BotonResultado from "./componentes/BotonResultado";
import BotonReset from "./componentes/BotonReset";
import BotonBorrar from "./componentes/BotonBorrar";

function App() {
  const [ input, setInput ] = useState('');

  const handleClick = (e) => {
    setInput(input + e.target.value);
  };

  const clearInput = () => {
    setInput('');
  };
  
  const borrarInput = () => {
    setInput(input.slice(0, -1));
  };

  const resultado = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  }

  return (
    <div className="max-w-[600px] flex flex-col gap-8 p-4 border-4 border-slate-900 rounded-md">
      <header className="">
        <div>
          <h1 className="text-white font-extrabold text-2xl">Calculadora</h1>
        </div>
      </header>
      <nav className="bg-slate-900 rounded-xl min-h-[72px] text-white">
        <input type="text" value={input} readOnly className="p-4 w-full rounded-xl bg-slate-900 text-end font-extrabold text-3xl"/>
      </nav>
      <main className="bg-slate-800 grid grid-cols-4 gap-4 p-4 rounded-xl">
        {/*Componente de botón reutilizable*/}
        <BotonNumerico valor="7" handleClick={handleClick} />
        <BotonNumerico valor="8" handleClick={handleClick} />
        <BotonNumerico valor="9" handleClick={handleClick} />
        <BotonBorrar borrarInput={borrarInput}/>
        <BotonNumerico valor="4" handleClick={handleClick} />
        <BotonNumerico valor="5" handleClick={handleClick} />
        <BotonNumerico valor="6" handleClick={handleClick} />
        <BotonNumerico valor="+" handleClick={handleClick} />
        <BotonNumerico valor="1" handleClick={handleClick} />
        <BotonNumerico valor="2" handleClick={handleClick} />
        <BotonNumerico valor="3" handleClick={handleClick} />
        <BotonNumerico valor="-" handleClick={handleClick} />
        <BotonNumerico valor="." handleClick={handleClick} />
        <BotonNumerico valor="0" handleClick={handleClick} />
        <BotonNumerico valor="/" handleClick={handleClick} />
        <BotonNumerico valor="*" handleClick={handleClick} />
        <BotonReset clearInput={clearInput}/>
        <BotonResultado resultado={resultado}/>
      </main>
    </div>
  )
}

export default App
