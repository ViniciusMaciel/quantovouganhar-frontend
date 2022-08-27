
let vueData = { salary: '', inss: '', liquid: '', irpf: '' }
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
    let _salary = myObject.salary;

    if (!isNaN(_salary)) {
        _salary = parseInt(_salary);

        if (_salary > 0) {
            _inss = calcINSS(_salary);
            _irpf = calcIRPF(_salary - _inss);
            _liquid = (_salary - (_inss + _irpf));

            myObject.inss = "R$ " +_inss;
            myObject.irpf = "R$ " +_irpf
            myObject.liquid = "R$ " + _liquid;

        }
    }
}