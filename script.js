/**
 * GERADOR DE SENHAS SEGURAS - VERSÃO AVANÇADA
 * Sistema completo para gerar diferentes tipos de senhas seguras
 * 
 * Tipos de Gerador:
 * 1. Padrão - Totalmente customizável
 * 2. Fácil Ler - Sem caracteres ambíguos (0/O, 1/l, etc)
 * 3. Fácil Falar - Apenas sílabas pronunciáveis
 * 4. Passphrase - Combinação de palavras aleatórias
 */

// ==================== CONFIGURAÇÃO ====================
const CONFIG = {
    caracteres: {
        maiusculas: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        minusculas: 'abcdefghijklmnopqrstuvwxyz',
        numeros: '0123456789',
        simbolos: '!@#$%^&*()_+-=[]{}|;:,.<>?'
    },
    // Sem caracteres ambíguos: 0/O, 1/l/I
    caracteresFaceis: {
        maiusculas: 'ABCDEFGHJKMNPQRSTUVWXYZ', // Sem I, O
        minusculas: 'abcdefghjkmnpqrstuvwxyz', // Sem i, l, o
        numeros: '23456789' // Sem 0 e 1
    },
    // Sílabas fáceis de pronunciar
    silabas: {
        iniciais: ['ba', 'ca', 'da', 'fa', 'ga', 'ha', 'ja', 'ka', 'la', 'ma', 'na', 'pa', 'ra', 'sa', 'ta', 'va', 'za', 'be', 'ce', 'de', 'fe', 'ge', 'he', 'je', 'ke', 'le', 'me', 'ne', 'pe', 're', 'se', 'te', 've', 'ze'],
        finais: ['ba', 'ca', 'da', 'fa', 'ga', 'la', 'ma', 'na', 'pa', 'ra', 'sa', 'ta', 'va', 'za', 'be', 'de', 'fe', 'ge', 'le', 'me', 'ne', 'pe', 're', 'se', 'te', 've', 'ze']
    },
    // Palavras em português para passphrases
    palavras: {
        substantivos: ['gato', 'cachorro', 'pássaro', 'tigre', 'leão', 'elefante', 'girafa', 'zebra', 'rinoceronte', 'hipopótamo', 'macaco', 'urso', 'lobo', 'raposa', 'coelho', 'esquilo', 'pinguim', 'foca', 'baleia', 'golfinho', 'tubarão', 'casa', 'árvore', 'montanha', 'rio', 'mar', 'praia', 'floresta', 'deserto', 'cidade', 'estrada', 'ponte', 'castelo', 'Igreja', 'escola', 'livro', 'caneta', 'mesa', 'cadeira', 'cama', 'armário', 'janela', 'porta', 'teto', 'parede', 'chão', 'espelho', 'relógio', 'telefone', 'computador', 'teclado', 'mouse', 'tela', 'câmera', 'fone', 'guitarra', 'piano', 'violão', 'tambor', 'trompete', 'saxofone', 'flauta', 'voz', 'música', 'dança', 'arte', 'pintura', 'escultura', 'poesia', 'filme', 'jogo', 'brinquedo', 'bola', 'boneca', 'carro', 'avião', 'navio', 'trem', 'bicicleta', 'moto', 'caminhão', 'ônibus', 'táxi', 'helicóptero', 'foguete', 'satélite', 'lua', 'sol', 'estrela', 'planeta', 'cometa', 'meteoro', 'nuvem', 'chuva', 'neve', 'vento', 'trovão', 'raio', 'tempestade', 'arco-íris', 'névoa', 'neblina'],
        adjetivos: ['azul', 'vermelho', 'amarelo', 'verde', 'roxo', 'rosa', 'laranja', 'branco', 'preto', 'cinzento', 'brilhante', 'escuro', 'claro', 'quente', 'frio', 'morno', 'grande', 'pequeno', 'médio', 'gigante', 'minúsculo', 'alto', 'baixo', 'rápido', 'lento', 'ruidoso', 'silencioso', 'alegre', 'triste', 'feliz', 'infeliz', 'animado', 'desanimado', 'corajoso', 'medroso', 'gentil', 'rude', 'educado', 'mal-educado', 'honesto', 'desonesto', 'justo', 'injusto', 'sábio', 'tolo', 'inteligente', 'burro', 'criativo', 'chato', 'interessante', 'entediante', 'limpo', 'sujo', 'organizado', 'desorganizado', 'forte', 'fraco', 'robusto', 'frágil', 'novo', 'velho', 'antigo', 'moderno', 'tradicional', 'bonito', 'feio', 'agradável', 'desagradável', 'misterioso', 'óbvio', 'secreto', 'público', 'privado', 'especial', 'comum', 'raro', 'abundante', 'escasso', 'valioso', 'sem-valor', 'precioso', 'vulgar', 'elegante', 'grosseiro']
    },
    comprimentoPadrao: 16,
    comprimentoMinimo: 4,
    comprimentoMaximo: 50
};

// ==================== ELEMENTOS DO DOM ====================
const elementos = {
    campoSenha: document.getElementById('campo-senha'),
    btnGerar: document.getElementById('btn-gerar'),
    btnCopiar: document.getElementById('btn-copiar'),
    comprimentoInput: document.getElementById('comprimento-senha'),
    valorComprimento: document.getElementById('valor-comprimento'),
    maiusculasCheckbox: document.getElementById('maiusculas'),
    minusculasCheckbox: document.getElementById('minusculas'),
    numerosCheckbox: document.getElementById('numeros'),
    simbolosCheckbox: document.getElementById('simbolos'),
    forcaPreenchimento: document.getElementById('forca-preenchimento'),
    forcaTexto: document.getElementById('forca-texto'),
    
    // Novos elementos para Passphrase
    numeroPalavrasInput: document.getElementById('numero-palavras'),
    valorPalavras: document.getElementById('valor-palavras'),
    separadorRadios: document.querySelectorAll('input[name="separador"]'),
    primeiraLetraMaiusculaCheckbox: document.getElementById('primeira-maiuscula'),
    todasMaiusculasCheckbox: document.getElementById('todas-maiusculas'),
    numeroNoFinalCheckbox: document.getElementById('numero-no-final'),
    
    // Elementos de configuração
    configComprimento: document.getElementById('config-comprimento'),
    configCaracteristicas: document.getElementById('config-caracteristicas'),
    configPalavras: document.getElementById('config-palavras'),
    configSeparador: document.getElementById('config-separador'),
    configCapitalizacao: document.getElementById('config-capitalizacao'),
    
    // Botões de tipo
    tipoBotoes: document.querySelectorAll('.tipo-btn')
};

// ==================== VARIÁVEIS GLOBAIS ====================
let senhaAtual = '';
let tipoGerador = 'padrao'; // padrao, facil-ler, facil-falar, passphrase

// ==================== FUNÇÕES DE GERAÇÃO ====================

/**
 * Gera uma senha padrão aleatória baseada nas configurações
 */
function gerarSenhaPadrao() {
    let caracteres = '';
    
    if (elementos.maiusculasCheckbox.checked) {
        caracteres += CONFIG.caracteres.maiusculas;
    }
    if (elementos.minusculasCheckbox.checked) {
        caracteres += CONFIG.caracteres.minusculas;
    }
    if (elementos.numerosCheckbox.checked) {
        caracteres += CONFIG.caracteres.numeros;
    }
    if (elementos.simbolosCheckbox.checked) {
        caracteres += CONFIG.caracteres.simbolos;
    }
    
    if (caracteres.length === 0) {
        mostrarAviso('Selecione pelo menos uma característica!');
        return '';
    }
    
    const comprimento = parseInt(elementos.comprimentoInput.value);
    let senha = '';
    
    for (let i = 0; i < comprimento; i++) {
        const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
        senha += caracteres[indiceAleatorio];
    }
    
    return senha;
}

/**
 * Gera uma senha fácil de ler (sem caracteres ambíguos)
 */
function gerarSenhaFacilLer() {
    let caracteres = '';
    
    if (elementos.maiusculasCheckbox.checked) {
        caracteres += CONFIG.caracteresFaceis.maiusculas;
    }
    if (elementos.minusculasCheckbox.checked) {
        caracteres += CONFIG.caracteresFaceis.minusculas;
    }
    if (elementos.numerosCheckbox.checked) {
        caracteres += CONFIG.caracteresFaceis.numeros;
    }
    if (elementos.simbolosCheckbox.checked) {
        caracteres += CONFIG.caracteres.simbolos;
    }
    
    if (caracteres.length === 0) {
        mostrarAviso('Selecione pelo menos uma característica!');
        return '';
    }
    
    const comprimento = parseInt(elementos.comprimentoInput.value);
    let senha = '';
    
    for (let i = 0; i < comprimento; i++) {
        const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
        senha += caracteres[indiceAleatorio];
    }
    
    return senha;
}

/**
 * Gera uma senha fácil de falar com sílabas pronunciáveis
 */
function gerarSenhaFacilFalar() {
    const comprimento = parseInt(elementos.comprimentoInput.value);
    let senha = '';
    
    // Gera alternando entre sílabas iniciais e finais
    for (let i = 0; i < comprimento; i++) {
        if (i % 2 === 0) {
            const indice = Math.floor(Math.random() * CONFIG.silabas.iniciais.length);
            senha += CONFIG.silabas.iniciais[indice];
        } else {
            const indice = Math.floor(Math.random() * CONFIG.silabas.finais.length);
            senha += CONFIG.silabas.finais[indice];
        }
    }
    
    // Garante o comprimento desejado (em caracteres, não em sílabas)
    return senha.substring(0, comprimento);
}

/**
 * Gera uma passphrase com palavras aleatórias
 */
function gerarPassphrase() {
    const numeroPalavras = parseInt(elementos.numeroPalavrasInput.value);
    const separador = document.querySelector('input[name="separador"]:checked').value;
    let palavras = [];
    
    // Seleciona palavras aleatórias
    for (let i = 0; i < numeroPalavras; i++) {
        // Alterna entre substantivos e adjetivos para variedade
        const tipo = i % 2 === 0 ? 'substantivos' : 'adjetivos';
        const lista = CONFIG.palavras[tipo];
        const indice = Math.floor(Math.random() * lista.length);
        let palavra = lista[indice];
        
        // Aplica capitalização conforme configurado
        if (elementos.primeiraLetraMaiusculaCheckbox.checked) {
            palavra = palavra.charAt(0).toUpperCase() + palavra.slice(1);
        }
        
        if (elementos.todasMaiusculasCheckbox.checked) {
            palavra = palavra.toUpperCase();
        }
        
        palavras.push(palavra);
    }
    
    let passphrase = palavras.join(separador);
    
    // Adiciona número no final se configurado
    if (elementos.numeroNoFinalCheckbox.checked) {
        passphrase += Math.floor(Math.random() * 100);
    }
    
    return passphrase;
}

/**
 * Gera uma senha baseada no tipo de gerador selecionado
 */
function gerarSenha() {
    switch(tipoGerador) {
        case 'padrao':
            return gerarSenhaPadrao();
        case 'facil-ler':
            return gerarSenhaFacilLer();
        case 'facil-falar':
            return gerarSenhaFacilFalar();
        case 'passphrase':
            return gerarPassphrase();
        default:
            return gerarSenhaPadrao();
    }
}

// ==================== FUNÇÕES DE ATUALIZAÇÃO ====================

/**
 * Atualiza a exibição da senha e sua força
 */
function atualizarExibicaoSenha(senha) {
    senhaAtual = senha;
    elementos.campoSenha.value = senha;
    atualizarForcaSenha(senha);
}

/**
 * Calcula e exibe a força da senha
 */
function atualizarForcaSenha(senha) {
    if (!senha) {
        elementos.forcaPreenchimento.className = '';
        elementos.forcaPreenchimento.style.width = '0%';
        elementos.forcaTexto.textContent = '-';
        return;
    }
    
    const forca = calcularForcaSenha(senha);
    
    elementos.forcaPreenchimento.classList.remove('fraco', 'media', 'forte');
    
    switch (forca) {
        case 'fraco':
            elementos.forcaPreenchimento.classList.add('fraco');
            elementos.forcaTexto.textContent = 'Fraca 🔴';
            break;
        case 'media':
            elementos.forcaPreenchimento.classList.add('media');
            elementos.forcaTexto.textContent = 'Média 🟡';
            break;
        case 'forte':
            elementos.forcaPreenchimento.classList.add('forte');
            elementos.forcaTexto.textContent = 'Forte 🟢';
            break;
    }
}

/**
 * Calcula o nível de força de uma senha
 */
function calcularForcaSenha(senha) {
    let pontos = 0;
    
    if (senha.length >= 8) pontos += 1;
    if (senha.length >= 12) pontos += 1;
    if (senha.length >= 16) pontos += 1;
    
    if (/[a-z]/.test(senha)) pontos += 1;
    if (/[A-Z]/.test(senha)) pontos += 1;
    if (/[0-9]/.test(senha)) pontos += 1;
    if (/[!@#$%^&*()_+\-=\[\]{}|;:,.<>?]/.test(senha)) pontos += 1;
    
    if (/(.)\1{2,}/.test(senha)) pontos -= 1;
    
    if (pontos <= 2) return 'fraco';
    if (pontos <= 4) return 'media';
    return 'forte';
}

/**
 * Atualiza a visibilidade das opções de configuração baseado no tipo de gerador
 */
function atualizarOpcoes() {
    // Esconde tudo por padrão
    elementos.configComprimento.style.display = 'none';
    elementos.configCaracteristicas.style.display = 'none';
    elementos.configPalavras.style.display = 'none';
    elementos.configSeparador.style.display = 'none';
    elementos.configCapitalizacao.style.display = 'none';
    
    // Mostra as opções relevantes
    switch(tipoGerador) {
        case 'padrao':
            elementos.configComprimento.style.display = 'block';
            elementos.configCaracteristicas.style.display = 'block';
            break;
        case 'facil-ler':
            elementos.configComprimento.style.display = 'block';
            elementos.configCaracteristicas.style.display = 'block';
            break;
        case 'facil-falar':
            elementos.configComprimento.style.display = 'block';
            break;
        case 'passphrase':
            elementos.configPalavras.style.display = 'block';
            elementos.configSeparador.style.display = 'block';
            elementos.configCapitalizacao.style.display = 'block';
            break;
    }
}

/**
 * Altera o tipo de gerador
 */
function alterarTipoGerador(novoTipo) {
    tipoGerador = novoTipo;
    atualizarOpcoes();
    
    // Atualiza a classe dos botões
    elementos.tipoBotoes.forEach(botao => {
        botao.classList.remove('ativo');
        if (botao.dataset.tipo === novoTipo) {
            botao.classList.add('ativo');
        }
    });
    
    // Gera nova senha com o novo tipo
    const novaSenha = gerarSenha();
    if (novaSenha) {
        atualizarExibicaoSenha(novaSenha);
    }
}

/**
 * Atualiza a exibição do valor do comprimento
 */
function atualizarComprimento() {
    const valor = elementos.comprimentoInput.value;
    elementos.valorComprimento.textContent = valor;
}

/**
 * Atualiza a exibição do número de palavras
 */
function atualizarNumeroPalavras() {
    const valor = elementos.numeroPalavrasInput.value;
    elementos.valorPalavras.textContent = valor;
}

/**
 * Copia a senha atual para a área de transferência
 */
function copiarSenha() {
    if (!senhaAtual) {
        mostrarAviso('Gere uma senha primeiro!');
        return;
    }
    
    navigator.clipboard.writeText(senhaAtual)
        .then(() => {
            const btnAnterior = elementos.btnCopiar.textContent;
            elementos.btnCopiar.textContent = '✓ Copiado!';
            elementos.btnCopiar.classList.add('copiado');
            
            setTimeout(() => {
                elementos.btnCopiar.textContent = btnAnterior;
                elementos.btnCopiar.classList.remove('copiado');
            }, 2000);
        })
        .catch(() => {
            mostrarAviso('Erro ao copiar! Tente novamente.');
        });
}

/**
 * Mostra uma mensagem de aviso
 */
function mostrarAviso(mensagem) {
    alert(mensagem);
}

// ==================== EVENT LISTENERS ====================

/**
 * Botão Gerar
 */
elementos.btnGerar.addEventListener('click', () => {
    const novaSenha = gerarSenha();
    if (novaSenha) {
        atualizarExibicaoSenha(novaSenha);
        elementos.btnGerar.style.transform = 'rotate(360deg)';
        setTimeout(() => {
            elementos.btnGerar.style.transform = 'rotate(0deg)';
        }, 300);
    }
});

/**
 * Botão Copiar
 */
elementos.btnCopiar.addEventListener('click', copiarSenha);

/**
 * Slider de Comprimento
 */
elementos.comprimentoInput.addEventListener('input', atualizarComprimento);

/**
 * Slider de Número de Palavras
 */
elementos.numeroPalavrasInput.addEventListener('input', atualizarNumeroPalavras);

/**
 * Checkboxes de Características
 */
[elementos.maiusculasCheckbox, elementos.minusculasCheckbox, 
 elementos.numerosCheckbox, elementos.simbolosCheckbox].forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        if (senhaAtual) {
            atualizarForcaSenha(senhaAtual);
        }
    });
});

/**
 * Checkboxes de Passphrase
 */
[elementos.primeiraLetraMaiusculaCheckbox, elementos.todasMaiusculasCheckbox, 
 elementos.numeroNoFinalCheckbox].forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        if (tipoGerador === 'passphrase' && senhaAtual) {
            const novaSenha = gerarSenha();
            if (novaSenha) {
                atualizarExibicaoSenha(novaSenha);
            }
        }
    });
});

/**
 * Radio buttons de Separador
 */
elementos.separadorRadios.forEach(radio => {
    radio.addEventListener('change', () => {
        if (tipoGerador === 'passphrase' && senhaAtual) {
            const novaSenha = gerarSenha();
            if (novaSenha) {
                atualizarExibicaoSenha(novaSenha);
            }
        }
    });
});

/**
 * Botões de Tipo de Gerador
 */
elementos.tipoBotoes.forEach(botao => {
    botao.addEventListener('click', () => {
        alterarTipoGerador(botao.dataset.tipo);
    });
});

/**
 * Permite gerar nova senha ao pressionar Enter
 */
elementos.campoSenha.addEventListener('keypress', (evento) => {
    if (evento.key === 'Enter') {
        const novaSenha = gerarSenha();
        if (novaSenha) {
            atualizarExibicaoSenha(novaSenha);
        }
    }
});

// ==================== INICIALIZAÇÃO ====================

function inicializar() {
    atualizarComprimento();
    atualizarNumeroPalavras();
    atualizarOpcoes();
    
    const senhaPadrao = gerarSenha();
    if (senhaPadrao) {
        atualizarExibicaoSenha(senhaPadrao);
    }
    
    console.log('✓ Gerador de Senhas Seguras (Versão Avançada) inicializado!');
}

document.addEventListener('DOMContentLoaded', inicializar);

