document.addEventListener('DOMContentLoaded', () => {
    const inputTemperatura = document.getElementById('temperatura');
    const selectConversion = document.getElementById('tipoConversion');
    const btnConvertir = document.getElementById('btnConvertir');
    const divResultado = document.getElementById('resultado');

    btnConvertir.addEventListener('click', realizarConversion);

    function realizarConversion() {
        const valorInput = inputTemperatura.value.trim();

        if (valorInput === '') {
            alert('Por favor, ingresa un valor numérico para la temperatura.');
            divResultado.style.display = 'none';
            return;
        }

        const temperatura = parseFloat(valorInput);
        const tipoConversion = selectConversion.value;
        let resultado = 0;
        let unidadOrigen = '';
        let unidadDestino = '';

        if (tipoConversion === 'cToF') {
            resultado = (temperatura * 9 / 5) + 32;
            unidadOrigen = '°C';
            unidadDestino = '°F';
        } else if (tipoConversion === 'fToC') {
            resultado = (temperatura - 32) * 5 / 9;
            unidadOrigen = '°F';
            unidadDestino = '°C';
        }

        const resultadoFormateado = resultado.toFixed(2);

        divResultado.innerHTML = `${temperatura} ${unidadOrigen} equivalen a <strong>${resultadoFormateado} ${unidadDestino}</strong>`;
        divResultado.style.display = 'block';
    }
});
