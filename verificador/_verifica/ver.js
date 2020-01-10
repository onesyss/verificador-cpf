

window.validaCPF = (() => {
    function calculaDigito(CPF, digitos) {
        let
            soma = digitos.reduce((ac, v, i) => ac + v * CPF[i], 0),
            resto = soma * 10 % 11;

        return resto > 9 ? 0 : resto;
    }

    return CPF => {

        CPF = CPF.replace(/[^\d]+/g, "").split("");

        let rep = 1;
        CPF.reduce((ac, v) => {
            if (ac == v) rep++;
            return v;
        });

        return CPF.length === 11
            && rep < 11
            && calculaDigito(CPF, [10, 9, 8, 7, 6, 5, 4, 3, 2]) == CPF[9]
            && calculaDigito(CPF, [11, 10, 9, 8, 7, 6, 5, 4, 3, 2]) == CPF[10];
    };
})();