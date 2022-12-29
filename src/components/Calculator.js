import { useState, useRef, useEffect } from 'react';

import { Button } from 'react-bootstrap';

import { pi, sqrt, pow, cbrt, log, exp, evaluate, cos, sin, tan, log1p } from 'mathjs';
import './Calculator.css'

export const Calculator = () => {
  const [result, setResult] = useState('');
  

  const inputRef = useRef(null);



  useEffect(() => inputRef.current.focus());

  

  function handleClick(e){
    e.preventDefault()
    setResult(result.concat(e.target.name));
  }
  function backspace(){
    setResult(result.slice(0, - 1));
  }
  function clear(){
    setResult('');
  }
  //Raíces
  function raiz(){
    setResult(sqrt(result).toString());
  }
  function raizCubica(){
    setResult(cbrt(result).toString());
  }

  //Raíz enésima, siguiendo la lógica matemática la raíz se puede calcular con una potencia inversa, pero no me salió con la librería que usé :()
  // function raizN(){
  //   setResult(Math.evaluate([result , pow(setResult, 1/ result)]).toString());
 
  // }
 //Potencias
  function potencia(){
    setResult(pow(result, 2).toString());
  }
  function potenciaCubica(){
    setResult(pow(result, 3).toString());
  }
  //Estoy muy feliz porque me salió esta función así que quería comentar aquí mi momento de felicidad :) :) 
  function potenciaN(){
    setResult(Math.evaluate([result , pow(setResult, result)]).toString());
  }
  //PI
  function numeroPi(){
    setResult(pi.toString());
  }
  //Logaritmo natural o neperiano
  function logN(){
    setResult(log(result).toString());
  }
  //Logaritmo base 10
  function logDiez(){
    setResult(Math.log10(result).toString());
  }
  //Notación exponencial
  function notacionExp(){
    setResult(exp(result).toString());
  }

 // Funciones trigonométricas
  function coseno(){
    setResult(cos(result).toString());
  }
  function seno(){
    setResult(sin(result).toString());
  }
  function tangente(){
    setResult(tan(result).toString());
  }
 

 function factorialX(){
  setResult(Math.factorial(result).toString());
 }

 function logE(){
  setResult(log1p(result).toString());
 }


  function calculate(){
    try {
      setResult(evaluate(result).toString());
    }catch (error){
      setResult('Error');
    }
  }

  return (
    <div className="container col-xs-12 text-center">
        <div className="row calculadora justify-content-center">
            <div className="display">
                {/* <input id="valor-anterior"></input>
                <div id="valor-actual"></div>                */}
                <input type='text' value={result} ref={inputRef}/>
            </div>
            <div className="buttons">

                <Button  id='clear' onClick={clear} variant='dark' className="btn btn-dark delete">AC</Button>
                <Button  id='backspace' onClick={backspace} className="btn btn-dark delete">C</Button>
                
                <Button  name='(' onClick={handleClick}  className="btn dark">( </Button>
                <Button  name=')' onClick={handleClick} className="btn btn-dark"> )</Button>
                <Button  name='x²' onClick={potencia} className="btn btn-dark">x²</Button>
                <Button  name='²√' onClick={raiz} className="btn btn-dark">²√</Button>
        
                <Button  name='seno' onClick={seno} className="btn btn-dark">sin</Button>
                <Button  name='coseno' onClick={coseno} className="btn btn-dark">cos</Button>
                <Button  name='tangente' onClick={tangente} className="btn btn-dark">tg</Button>
                <Button  name='x³' onClick={potenciaCubica} className="btn btn-dark">x³</Button>
                <Button  name='^' onClick={handleClick} onChange={potenciaN} className="btn btn-dark">xⁿ</Button>
                <Button  name='³√' onClick={raizCubica} lassName="btn btn-dark">³√</Button>

                <Button   name='7' onClick={handleClick} className="number btn btn-dark">7</Button>
                <Button   name='8' onClick={handleClick} className="number btn btn-dark">8</Button>
                <Button   name='9' onClick={handleClick} className="number btn btn-dark">9</Button>
                <Button   name='/' onClick={handleClick} className="operator btn btn-dark">/</Button>
                <Button  name='!' onClick={handleClick} onChange={factorialX} className="btn btn-dark">x!</Button>
                
                <Button   name='ln(' onClick={logN} className="btn btn-dark">ln</Button>

                <Button   name='4' onClick={handleClick} className="number btn btn-dark">4</Button>
                <Button   name='5' onClick={handleClick} className="number btn btn-dark">5</Button>
                <Button   name='6' onClick={handleClick} className="number btn btn-dark">6</Button>
                <Button   name='*' onClick={handleClick} className="operator btn btn-dark">*</Button>
                <Button   name='log(' onClick={logDiez} className="btn btn-dark">log</Button>
                <Button   name='e' onClick={notacionExp} className="btn btn-dark">e</Button>

                <Button  name='1' onClick={handleClick} className="number btn btn-dark">1</Button>
                <Button  name='2' onClick={handleClick} className="number btn btn-dark">2</Button>
                <Button name='3' onClick={handleClick} className="number btn btn-dark">3</Button>
                <Button  name='-' onClick={handleClick} className="operator btn btn-dark">-</Button>
                <Button  name='log1p' onClick={logE} className="btn btn-dark">logE</Button>
               


                <Button  id='result' onClick={calculate} className="btn btn-primary igual delete">=</Button>

                <Button  name='.' onClick={handleClick} className="btn btn-dark">.</Button>
                <Button  name='0' onClick={handleClick} className="number btn btn-dark">0</Button>
                <Button  name='π' onClick={numeroPi} className="btn btn-dark">π</Button>
                <Button  name='+' onClick={handleClick} className="operator btn btn-dark">+</Button>
                <Button  name='%' onClick={handleClick} className="operator btn btn-dark">%</Button>
            

            </div>
        </div> 
    </div>
  )
}
