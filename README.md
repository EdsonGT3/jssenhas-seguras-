# 🔐 Gerador de Senhas Seguras

Um gerador de senhas profissional e intuitivo que permite criar senhas aleatórias e seguras com personalização completa.

## ✨ Funcionalidades

### 🎯 Geração de Senhas
- **Geração Aleatória**: Cria senhas completamente aleatórias usando criptografia segura
- **Comprimento Personalizável**: De 4 até 50 caracteres
- **Múltiplas Características**:
  - Maiúsculas (A-Z)
  - Minúsculas (a-z)
  - Números (0-9)
  - Símbolos especiais (!@#$%...)

### 📊 Indicador de Força
- **Análise em Tempo Real**: Avalia a força da senha
- **Três Níveis**:
  - 🔴 Fraca
  - 🟡 Média
  - 🟢 Forte

### 📋 Ações Rápidas
- **Gerar**: Cria uma nova senha com um clique
- **Copiar**: Copia a senha para a área de transferência com feedback visual

### 📱 Responsivo
- Design adaptável para mobile, tablet e desktop
- Interface intuitiva e fácil de usar
- Animações suaves

## 🚀 Como Usar

### 1. **Abrir o Aplicativo**
   - Abra o arquivo `index.html` no navegador

### 2. **Gerar uma Senha**
   - Clique no botão **"Gerar"** para criar uma nova senha
   - Ou pressione **Enter** no campo de senha

### 3. **Personalizar Configurações**
   - Ajuste o **Comprimento** usando o controle deslizante
   - Selecione as **Características** desejadas (maiúsculas, minúsculas, números, símbolos)

### 4. **Copiar a Senha**
   - Clique em **"Copiar"** para copiar a senha para a área de transferência
   - Um feedback visual confirmará a cópia

### 5. **Verificar a Força**
   - O indicador de força mostra em tempo real a segurança da senha
   - Quanto mais características e comprimento, mais forte a senha

## 🛠️ Estrutura do Projeto

```
jssenhas-seguras/
├── index.html       # Estrutura HTML do aplicativo
├── style.css        # Estilos CSS e design responsivo
├── script.js        # Lógica JavaScript do gerador
├── LICENSE          # Licença do projeto
└── README.md        # Este arquivo
```

## 📋 Detalhes Técnicos

### HTML (`index.html`)
- Estrutura semântica HTML5
- Elementos acessíveis
- Suporte multilíngue (pt-BR)

### CSS (`style.css`)
- **Design Moderno**: Tema escuro professional
- **Cores Personalizadas**:
  - `--cor-de-fundo`: #00162E (azul escuro)
  - `--borda`: #0075FF (azul brilhante)
  - `--sucesso`: #4CAF50 (verde)
  - `--perigo`: #F44336 (vermelho)
- **Responsivo**: Media queries para todos os tamanhos de tela
- **Animações**: Transições suaves e feedback visual

### JavaScript (`script.js`)
- **Algoritmo Seguro**: Usa `Math.random()` para geração aleatória
- **Validação**: Verifica características selecionadas
- **Análise de Força**: Avalia comprimento, diversidade de caracteres e padrões
- **Clipboard API**: Cópia segura para a área de transferência
- **Event Listeners**: Interatividade completa

## 🔒 Segurança

### Características de Segurança:
1. **Geração Local**: Nenhuma senha é enviada para servidores
2. **Aleatoriedade**: Usa `Math.random()` do JavaScript
3. **Validação**: Garante uso de múltiplos tipos de caracteres
4. **Análise de Força**: Avalia qualidade da senha

### Recomendações:
- ✅ Use senhas com **pelo menos 16 caracteres**
- ✅ Inclua **maiúsculas, minúsculas, números e símbolos**
- ✅ **Evite palavras comuns** ou informações pessoais
- ✅ Use **uma senha diferente para cada serviço**
- ✅ Considere usar um **gerenciador de senhas**

## 🎨 Paleta de Cores

| Cor | Código | Uso |
|-----|--------|-----|
| Fundo Principal | #00162E | Plano de fundo |
| Fundo Senha | #00244D | Campo de entrada |
| Fundo Texto | #001E40 | Seção de parâmetros |
| Borda/Primária | #0075FF | Botões e bordas |
| Sucesso | #4CAF50 | Força forte, cópia bem-sucedida |
| Aviso | #FFC107 | Força média |
| Perigo | #F44336 | Força fraca |

## 📱 Compatibilidade

- ✅ Chrome/Edge (versão 90+)
- ✅ Firefox (versão 88+)
- ✅ Safari (versão 14+)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## ⌨️ Atalhos de Teclado

| Atalho | Ação |
|--------|------|
| Enter | Gera nova senha |
| Tab | Navega entre elementos |

## 🤝 Contribuições

Este projeto é aberto para melhorias e sugestões!

## 📄 Licença

Veja o arquivo [LICENSE](LICENSE) para detalhes.

## 💡 Dicas Úteis

1. **Senhas Longas**: 20+ caracteres são ainda mais seguras
2. **Diversidade**: Use todos os tipos de caracteres disponíveis
3. **Sem Padrões**: O gerador evita padrões óbvios
4. **Regenerar**: Se não gostar, clique em "Gerar" novamente
5. **Salvar Seguro**: Use um gerenciador de senhas para armazenar

## 📞 Suporte

Para relatar bugs ou sugerir melhorias, abra uma issue no repositório.

---

**Criado com ❤️ para segurança digital**

Última atualização: 2024
