const validateIE = (ie, uf) => {
    switch(uf){
        // Acre
        case 'AC':
            if(ie.length==13){
                // Digitos verificadores
                let pesos = [4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
                let soma = 0;
                for(let i=0; i<11; i++){
                    soma += +ie[i]*pesos[i];
                }
                let modulo = soma%11;
                let conferirPrimeiroDigito = 11-modulo;

                // Confere o primeiro digito verificador
                if(conferirPrimeiroDigito==1){
                    var primeiroDigitoVerificador = 1;
                } else if (conferirPrimeiroDigito == 10 || conferirPrimeiroDigito == 11){
                    var primeiroDigitoVerificador = 0;
                };

                pesos = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
                soma = 0;
                for(let i=0; i<12; i++){
                    soma += +ie[i]*pesos[i];
                }

                modulo = soma%11;
                let conferirSegundoDigito = 11-modulo;
                
                if(conferirSegundoDigito == 10 || conferirSegundoDigito == 11){
                    var segundoDigitoVerificador = 0;
                } else {
                    var segundoDigitoVerificador = conferirSegundoDigito;
                }

                if(primeiroDigitoVerificador == ie[11] && segundoDigitoVerificador == ie[12]) return true;
                else return false;

            } else return false;
        
        // Alagoas
        case 'AL':
            if(ie.length==9 && ie.substring(0, 2) == '24'){
                if(ie.substring(2, 3) == 0 || ie.substring(2, 3) == 3 || ie.substring(2, 3) == 5 || ie.substring(2, 3) == 7 || ie.substring(2, 3) == 8){
                    let pesos = [9, 8, 7, 6, 5, 4, 3, 2];
                    ie.substring(2, 10);
                    let soma = 0;
                    for(let i=0; i<8; i++){
                        soma += +ie[i] * pesos[i];
                    }

                    let produto = soma * 10;
                    let resto = produto - Math.floor(produto/11) * 11;

                    if(resto == 10){
                        var digitoVerificador = 0;
                    } else {
                        var digitoVerificador = resto;
                    }

                    if(digitoVerificador == ie[8]) return true
                    else return false;
                } else return false;
            } else return false;

        // Amapá
        case 'AP':
            if(ie.substring(0, 2) == '03' && ie.length == 9){
                let numeros = ie.substring(0, 8);
                let p = 0;
                let d = 0;
                if(+numeros >= 300001 && +numeros <= 3017000){
                    p = 5;
                    d = 1;
                } else if(+numeros >= 3017001 && +numeros <= 3019022) {
                    p = 9;
                    d = 1;
                } else {
                    p = 0;
                    d = 0;
                }

                let pesos = [9, 8, 7, 6, 5, 4, 3, 2];
                let soma = p;
                for(let i=0; i<8; i++){
                    soma += +numeros[i] * pesos[i];
                }

                let resto = soma % 11;
                let digitoVerificador = 11 - resto;
                if(digitoVerificador == 10){
                    digitoVerificador = 0
                } else if(digitoVerificador == 11){
                    digitoVerificador = 'D';
                } else {}

                if(digitoVerificador == ie[8]) return true;
                else return false;
            } else return false;

        // Amazonas
        case 'AM':
            //TODO
            if(ie.length == 9){
                return true
            } else return false;
        
        // Bahia
        case 'BA':
            if(ie.length == 8 || ie.length == 9){
                // Se o número tiver 8 digitos
                if(ie.length == 8){
                    let primeiroDigito = ie.substring(0, 1);
                    let modulo = 0
                    // Cálculo feito se o primeiro digito for igual a 1, 2, 3, 4, 5 ou 8
                    if(primeiroDigito == 0
                        || primeiroDigito == 1
                        || primeiroDigito == 2
                        || primeiroDigito == 3
                        || primeiroDigito == 4
                        || primeiroDigito == 5
                        || primeiroDigito == 8) modulo = 10;
                    else modulo = 11;

                    // Calulando o segundo digito verificador
                    let pesos = [7, 6, 5, 4, 3, 2];
                    let soma = 0;
                    for(let i=0; i<pesos.length; i++){
                        soma += +ie[i] * pesos[i];
                    }

                    let resto = soma% modulo;
                    let segundoDigitoVerificador = modulo - resto;
                    if(resto==0) segundoDigitoVerificador = 0;

                    // Calculando o primeiro digito verificador
                    pesos = [8, 7, 6, 5, 4, 3, 2];
                    numeros = ie.substring(0, 6) + ie.substring(7, 8);
                    soma = 0;
                    for(let i=0; i<pesos.length; i++){
                        soma += numeros[i] * pesos[i];
                    }
                    let primeiroDigitoVerificador = modulo - (soma% modulo);

                    // Conferindo se os números são iguais
                    if(primeiroDigitoVerificador == ie[6] && segundoDigitoVerificador == ie[7]) return true;
                    else return false;
                }

                // Se o número tiver 9 digitos
                else {
                    // Calculando o segundo digito verificador
                    let modulo = 10
                    let primeiroNumero = ie.substring(0, 1);
                    if(primeiroNumero == 6 || primeiroNumero == 7 || primeiroNumero ==9) modulo = 11;

                    let numeros = ie.substring(0, 7);
                    let pesos = [8, 7, 6, 5, 4, 3, 2];
                    let soma = 0;
                    for(let i=0; i<pesos.length; i++){
                        soma += +numeros[i] * pesos[i];
                    }

                    let resto = soma % modulo
                    let segundoDigitoVerificador = modulo - resto;
                    if(resto==0) segundoDigitoVerificador = 0;

                    // Calculando o primeiro digito verificador
                    numeros = ie.substring(0, 7) + ie.substring(8, 9);
                    pesos = [9, 8, 7, 6, 5, 4, 3, 2];
                    soma = 0;
                    for(let i=0; i<pesos.length; i++){
                        soma += numeros[i] * pesos[i];
                    }

                    let primeiroDigitoVerificador = soma % modulo

                    // Conferindo se os digitos são iguais
                    if(primeiroDigitoVerificador == ie.substring(7, 8) && segundoDigitoVerificador == ie.substring(8, 9)) return true;
                    else return false;
                }
            } else return false;

        // Padrão
        default:
            return ie;
    }
}

const formatIE = (ie, uf) => {
    switch(uf){
        // Acre
        case 'AC':
            return `${ie.substring(0, 2)}.${ie.substring(2, 5)}.${ie.substring(5, 8)}/${ie.substring(8, 11)}-${ie.substring(11, 13)}`;
        
        // Alagoas
        case 'AL':
            return ie;

        case 'AM':
            return `${ie.substring(0, 2)}.${ie.substring(2, 5)}.${ie.substring(5, 8)}-${ie.substring(8, 9)}`;

        case 'BA':
            if(ie.length==8) return `${ie.substring(0, 6)}-${ie.substring(6, 8)}`;
            else return `${ie.substring(0, 7)}-${ie.substring(7, 9)}`;

        // Padrão
        default:
            return ie;
    }
}

const validateAndFormatIE = (ie, uf) => {
    if(validateIE(ie, uf)){
        return formatIE(ie, uf);
    } else {
        return false;
    }
}