const select1 = document.getElementById('select-moeda-a-ser-convertida')
const select2 = document.getElementById('select-moeda-convertida')
const botao = document.getElementById('button-conversao')

function converter() {

    const moedas = {
        real: 1,
        dolar: 5.2,
        euro: 5.9,
        iene: 0.032,
        peso: 0.035,
        dinar: 16.73,
        bitcoins: 326350
    }

    const formatos = {
        real: { locale: 'pt-BR', currency: 'BRL' },
        dolar: { locale: 'en-US', currency: 'USD' },
        euro: { locale: 'de-DE', currency: 'EUR' },
        iene: { locale: 'ja-JP', currency: 'JPY' },
        peso: { locale: 'es-AR', currency: 'ARS' },
        dinar: { locale: 'pt-BR', currency: 'KWD' },
        bitcoins: { locale: 'en-US', currency: 'BTC' }
    }

    const valor = Number(document.getElementById('input-valor').value)

    const moedaOrigem = moedas[select1.value]
    const moedaDestino = moedas[select2.value]

    const valorEmReal = valor * moedaOrigem

    const valorConvertido = valorEmReal / moedaDestino
    const formatoOrigem = formatos[select1.value]
    const formatoDestino = formatos[select2.value]

    document.getElementById('valor-a-ser-convertido').innerHTML = new Intl.NumberFormat(formatoOrigem.locale, { style: 'currency', currency: formatoOrigem.currency }).format(valor)

    document.getElementById('valor-convertido').innerHTML = new Intl.NumberFormat(formatoDestino.locale, { style: 'currency', currency: formatoDestino.currency }).format(valorConvertido)
}

function trocaMoedaSelect1() {
    switch (select1.value) {
        case 'real': { 
            document.getElementById('img-moeda-a-converter').src = 'assets/real.png'
            document.getElementById('tipo-da-moeda-a-converter').textContent = 'Real'
            document.getElementById('input-valor').placeholder = 'R$ 1000,00'
            break
        }
        case 'dolar': {
            document.getElementById('img-moeda-a-converter').src = 'assets/dolar.png'
            document.getElementById('tipo-da-moeda-a-converter').textContent = 'Dólar'
            document.getElementById('input-valor').placeholder = 'US$ 1000,00'
            break
        }
        case 'euro': {
            document.getElementById('img-moeda-a-converter').src = 'assets/euro.png'
            document.getElementById('tipo-da-moeda-a-converter').textContent = 'Euro'
            document.getElementById('input-valor').placeholder = '€ 1000,00'
            break
        }
        case 'iene': {
            document.getElementById('img-moeda-a-converter').src = 'assets/iene.png'
            document.getElementById('tipo-da-moeda-a-converter').textContent = 'Iene'
            document.getElementById('input-valor').placeholder = '¥ 1000,00'
            break
        }
        case 'peso': {
            document.getElementById('img-moeda-a-converter').src = 'assets/peso.png'
            document.getElementById('tipo-da-moeda-a-converter').textContent = 'Peso'
            document.getElementById('input-valor').placeholder = 'AR$ 1000,00'
            break
        }
        case 'dinar': {
            document.getElementById('img-moeda-a-converter').src = 'assets/dinar.png'
            document.getElementById('tipo-da-moeda-a-converter').textContent = 'Dinar'
            document.getElementById('input-valor').placeholder = 'KWD 1000,00'
            break
        }
        case 'bitcoins': {
            document.getElementById('img-moeda-a-converter').src = 'assets/bitcoin.png'
            document.getElementById('tipo-da-moeda-a-converter').textContent = 'Bitcoin'
            document.getElementById('input-valor').placeholder = '₿ 1000,00'
            break
        }
    }
    converter()
}

function trocaMoedaSelect2() {
    switch (select2.value) {
        case('dolar'): {
            document.getElementById('img-moeda-conversao').src = 'assets/dolar.png'
            document.getElementById('tipo-da-moeda').textContent = 'Dólar'
            break
        }
        case('real'): {
            document.getElementById('img-moeda-conversao').src = 'assets/real.png'
            document.getElementById('tipo-da-moeda').textContent = 'Real'
            break
        }
        case('euro'): {
            document.getElementById('img-moeda-conversao').src = 'assets/euro.png'
            document.getElementById('tipo-da-moeda').textContent = 'Euro'
            break
        }
        case('iene'): {
            document.getElementById('img-moeda-conversao').src = 'assets/iene.png'
            document.getElementById('tipo-da-moeda').textContent = 'Iene'
            break
        }
        case('peso'): {
            document.getElementById('img-moeda-conversao').src = 'assets/peso.png'
            document.getElementById('tipo-da-moeda').textContent = 'Peso'
            break
        }
        case('dinar'): {
            document.getElementById('img-moeda-conversao').src = 'assets/dinar.png'
            document.getElementById('tipo-da-moeda').textContent = 'Dinar'
            break
        }
        case('bitcoins'): {
            document.getElementById('img-moeda-conversao').src = 'assets/bitcoin.png'
            document.getElementById('tipo-da-moeda').textContent = 'Bitcoin'
            break
        }
    }
    converter()
}

select1.addEventListener('change', trocaMoedaSelect1)
select2.addEventListener('change', trocaMoedaSelect2)
botao.addEventListener('click', converter)

