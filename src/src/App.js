import logo from './logo.svg';
import { useState } from "react";
import './App.css';

function App(props) {
  const [result, setResult] = useState({
    complete: "false"
  });

  const calculate = () => {
    let final_calc = { 
    };

    function calcINSS(salary) {
      let percent = 0.0;
      let total = 0.0;

      if (salary >= 7087.22)
        salary = 7087.22;

      if (salary >= 3641.04) {
        let calc = salary - 3641.04;
        total += (calc * 0.14);

        salary = 3641.04;
      }

      if (salary >= 2427.36) {
        let calc = salary - 2427.36;
        total += (calc * 0.12);

        salary = 2427.36;
      }

      if (salary >= 1212.01) {
        let calc = salary - 1212.01;
        total += (calc * 0.09);

        salary = 1212.01;
      }

      if (salary >= 0) {
        let calc = salary - 0;
        total += (calc * 0.075);
      }

      return total;
    }

    function calcIRPF(salary) {
      let result = 0.0;

      if (salary >= 4664.69) {
        result = ((salary * 0.275) - 869.36);
      } else if (salary >= 3751.06) {
        result = ((salary * 0.225) - 636.13);
      } else if (salary >= 2826.66) {
        result = ((salary * 0.15) - 354.80);
      } else if (salary >= 1903.99) {
        result = ((salary * 0.075) - 142.80);
      } else {
        result = 0;
      }

      return result;
    }

    function calcFGTS(salary) {
      return salary * 0.08;
    }

    function calcAbsolute(salary) {
      let _inss = calcINSS(salary);
      let _irpf = calcIRPF(salary - _inss);
      let _liquid = (salary - (_inss + _irpf));

      return _liquid;
    }

    function calcFinal(salary, salary13, fgts, vacation) {
      return (salary * 12) + salary13 + fgts + vacation;
    }

    function calcVacation(salary) {
      let vacationSalary = salary + (salary / 3);
      let vacation = calcAbsolute(vacationSalary);

      return vacation;
    }

    let _salary = document.getElementById("salaryField").value;

    if (!isNaN(_salary)) {
      _salary = parseInt(_salary);

      if (_salary > 0) {
        let _inss = calcINSS(_salary);
        let _irpf = calcIRPF(_salary - _inss);
        let _liquid = (_salary - (_inss + _irpf));

        final_calc.inss = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(_inss);
        final_calc.irpf = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(_irpf);
        final_calc.liquid = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(_liquid);
        final_calc.complete = _liquid > 0 ? "true" : "false";

        let _fgts = calcFGTS(_salary);
        let _fgts12 = _fgts * 12;
        let _fgts24 = _fgts * 24;

        final_calc.fgts = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(_fgts);
        final_calc.fgts12 = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(_fgts12);
        final_calc.fgts24 = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(_fgts24);

        let _salary13 = calcAbsolute(_salary);

        final_calc.salary13 = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(_salary13);

        let _vacation = calcVacation(_salary);

        final_calc.vacation = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(_vacation);

        let _final = calcFinal(_liquid, _salary13, _fgts12, _vacation);

        final_calc.final = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(_final);

      }
    }

    setResult(final_calc);
  }

  return (
    <div className="App">
      <section>
        <div className="container py-4" id="app">
          <div className="row">
            <div className="col-lg-7 mx-auto d-flex justify-content-center flex-column">
              <h3 className="text-center">Calculo do Salário Líquido e Benefícios</h3>
              <form role="form" id="contact-form">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="input-group input-group-dynamic mb-4">
                        <label className="form-label">Salário Bruto</label>
                        <input className="form-control" aria-label="Informe o valor do seu Salário Bruto e Beneficios..." id="salaryField" type="number" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <button type="button" className="btn bg-gradient-dark w-100" onClick={calculate} >Calcular</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          {result.complete == "true" &&
            <div>
              <div className="row" >
                <div className="col-lg-7 mx-auto d-flex justify-content-center flex-column">
                  <h5 className="font-weight-bolder mt-3 text-center">Resultado do seu calculo</h5>
                  <div>
                    <p>Contribuição INSS: <span className="text-primary">{result.inss}</span></p>
                    <p>Imposto de Renda: <span className="text-primary">{result.irpf}</span></p>
                    <p>Salário Líquido: <span className="text-success">{result.liquid}</span></p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-7 mx-auto d-flex justify-content-center flex-column">
                    <h5 className="font-weight-bolder mt-3 text-center">Salário Anual</h5>
                    <div>
                      <p>Anualmente você vai receber: <span className="text-success">{result.final}</span></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-7 mx-auto d-flex justify-content-center flex-column">
                  <h5 className="font-weight-bolder mt-3 text-center">FGTS</h5>
                  <div>
                    <p>Mensalmento você vai receber de FGTS: <span className="text-success">{result.fgts}</span></p>
                    <p>Em 12 meses você terá, por exemplo: <span className="text-success">{result.fgts12}</span></p>
                    <p>Em 24 meses você terá, por exemplo: <span className="text-success">{result.fgts24}</span></p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-7 mx-auto d-flex justify-content-center flex-column">
                  <h5 className="font-weight-bolder mt-3 text-center">13º Salário</h5>
                  <div>
                    <p>Anualmente você vai receber de 13º: <span className="text-success">{result.salary13}</span></p>
                  </div>
                </div>
              </div>
              <div className="row" >
                <div className="col-lg-7 mx-auto d-flex justify-content-center flex-column">
                  <h5 className="font-weight-bolder mt-3 text-center">Férias</h5>
                  <div>
                    <p>A cada 12 meses, você vai receber <span className="text-success">{result.vacation}</span> e poderá descansar por 30 dias (corridos)</p>
                  </div>
                </div>
              </div>
            </div>
          }
        </div>
      </section>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
