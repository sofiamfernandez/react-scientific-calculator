import { useState, useRef, useEffect } from 'react';

import { Button } from 'react-bootstrap';

import { pi, sqrt, pow, cbrt, log, exp, evaluate, cos, sin, tan } from 'mathjs';
import './Calculator.css'

export const Calculator = () => {
  const [result, setResult] = useState('');
  const inputRef = useRef(null);

  useEffect(() => inputRef.current.focus());

  function handleClick(e){
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
  function raizN(){
    
    
  }
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
//Esta mal
  function porcentaje(){
    setResult(Math.evaluate(result * 100, setResult / result) ).toString();
  }
 function factorialX(){
  setResult(Math.factorial(result).toString());
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

                <Button type="button" id='clear' onClick={clear} variant='dark' className="btn btn-dark delete">AC</Button>
                <Button type="button" id='backspace' onClick={backspace} className="btn btn-dark delete">C</Button>
                
                <Button type="button" className="btn btn-dark">( )</Button>
                <Button type="button" name='x²' onClick={potencia} className="btn btn-dark">x²</Button>
                <Button type="button" name='²√' onClick={raiz} className="btn btn-dark">²√</Button>
                <Button type="button" name='√'  onClick={handleClick} onChange={raizN} className="btn btn-dark">ⁿ√</Button>
        
                <Button type="button" name='seno' onClick={seno} className="btn btn-dark">sin</Button>
                <Button type="button" name='coseno' onClick={coseno} className="btn btn-dark">cos</Button>
                <Button type="button" name='tangente' onClick={tangente} className="btn btn-dark">tg</Button>
                <Button type="button" name='x³' onClick={potenciaCubica} className="btn btn-dark">x³</Button>
                <Button type="button" name='^' onClick={handleClick} onChange={potenciaN} className="btn btn-dark">xⁿ</Button>
                <Button type="button" name='³√' onClick={raizCubica} lassName="btn btn-dark">³√</Button>

                <Button type="button"  name='7' onClick={handleClick} className="number btn btn-dark">7</Button>
                <Button type="button"  name='8' onClick={handleClick} className="number btn btn-dark">8</Button>
                <Button type="button"  name='9' onClick={handleClick} className="number btn btn-dark">9</Button>
                <Button type="button"  name='/' onClick={handleClick} className="operator btn btn-dark">/</Button>
                <Button type="button"  name='%' onClick={handleClick} onChange={porcentaje}  className="operator btn btn-dark">%</Button>
                <Button type="button"  name='ln(' onClick={logN} className="btn btn-dark">ln</Button>

                <Button type="button"  name='4' onClick={handleClick} className="number btn btn-dark">4</Button>
                <Button type="button"  name='5' onClick={handleClick} className="number btn btn-dark">5</Button>
                <Button type="button"  name='6' onClick={handleClick} className="number btn btn-dark">6</Button>
                <Button type="button"  name='*' onClick={handleClick} className="operator btn btn-dark">*</Button>
                <Button type="button"  name='log(' onClick={logDiez} className="btn btn-dark">log</Button>
                <Button type="button"  name='e' onClick={notacionExp} className="btn btn-dark">e</Button>

                <Button type="button" name='1' onClick={handleClick} className="number btn btn-dark">1</Button>
                <Button type="button" name='2' onClick={handleClick} className="number btn btn-dark">2</Button>
                <Button type="button" name='3' onClick={handleClick} className="number btn btn-dark">3</Button>
                <Button type="button" name='-' onClick={handleClick} className="operator btn btn-dark">-</Button>
                <Button type="button" name='!' onClick={handleClick} onChange={factorialX} className="btn btn-dark">x!</Button>
                <Button type="button" id='result' onClick={calculate} className="btn btn-primary igual delete">=</Button>

                <Button type="button" name='.' onClick={handleClick} className="btn btn-dark">.</Button>
                <Button type="button" name='0' onClick={handleClick} className="number btn btn-dark">0</Button>
                <Button type="button" name='π'onClick={numeroPi} className="btn btn-dark">π</Button>
                <Button type="button" name='+' onClick={handleClick} className="operator btn btn-dark">+</Button>
                <Button type="button" className="btn btn-dark">MR</Button>
            

            </div>
        </div> 
    </div>
  )
}
