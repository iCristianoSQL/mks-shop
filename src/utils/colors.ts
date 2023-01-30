import { darken, transparentize } from "polished"

export const colors = {
    primary: {
        0: '#FFFFFF',
        0.2: transparentize(0.2, '#FFFFFF'),
        0.1: darken(0.2, '#FFFFFF'),
    },
    //Primary usada para cor principal como background, botões principais e links
    secondary: {
        0: '#0F52BA',
        0.2: transparentize(0.2, '#0F52BA'),
        0.1: darken(0.2, '#0F52BA'),
    },
    //Cor de fundo de elementos menos importantes como cabeçalhos e rodapés
    alternative: {
        0: '#000000',
        0.2: transparentize(0.2, '#000000'),
        0.1: darken(0.2, '#000000'),
    },
    //Cor alternativa para elementos importantes
    danger: {
        0: '#e74c3c',
        0.1: transparentize(0.9, '#e74c3c'),
        0.2: darken(0.9, '#e74c3c'),
    },
    //Serve para alertar uma ação como um botão de exclusão ou cancelamento
    valid: {
        0: '#024d06',
        0.1: transparentize(0.2, '#024d06'),
        0.2: darken(0.9, '#024d06'),
    },
    //Utilizado para botões e elementos de validação
    texts: {
        0: '#2C2C2C',
        0.1: transparentize(0.2, '#2C2C2C'),
        0.2: darken(0.9, '#2C2C2C'),
    },
    //Usado para textos em geral!
    footer: {
        0: '#EEEEEE',
        0.1: transparentize(0.2, '#EEEEEE'),
        0.2: darken(0.9, '#EEEEEE'),
    },
    //Usado para textos em geral!

}