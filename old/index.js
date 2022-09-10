
let vueData = { salary: '', inss: '', liquid: '', irpf: '',result:false }
let vueObj = {
    el: '#app',
    data: vueData
};

myObject = new Vue(vueObj);

function calculate() {
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

    function calcFGTS(salary){
        return salary * 0.08;
    }

    function calcAbsolute(salary){
        let _inss = calcINSS(salary);
        let _irpf = calcIRPF(salary - _inss);
        let _liquid = (salary - (_inss + _irpf));

        return _liquid;
    }

    function calcFinal(salary, salary13, fgts, vacation){
        return (salary * 12) + salary13 + fgts + vacation;
    }

    function calcVacation(salary){
        let vacationSalary = salary + (salary / 3);
        let vacation = calcAbsolute(vacationSalary);

        return vacation;
    }

    let _salary = myObject.salary;

    if (!isNaN(_salary)) {
        _salary = parseInt(_salary);

        if (_salary > 0) {
            _inss = calcINSS(_salary);
            _irpf = calcIRPF(_salary - _inss);
            _liquid = (_salary - (_inss + _irpf));

            myObject.inss = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(_inss);
            myObject.irpf = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(_irpf);
            myObject.liquid = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(_liquid);
            myObject.result = _liquid > 0;

            _fgts = calcFGTS(_salary);
            _fgts12 = _fgts * 12;
            _fgts24 = _fgts * 24;

            myObject.fgts = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(_fgts);
            myObject.fgts12 = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(_fgts12);
            myObject.fgts24 = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(_fgts24);

            _salary13 = calcAbsolute(_salary);

            myObject.salary13 = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(_salary13);

            _vacation = calcVacation(_salary);

            myObject.vacation = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(_vacation);

            _final = calcFinal(_liquid, _salary13, _fgts12, _vacation);

            myObject.final = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(_final);

        }
    }
}