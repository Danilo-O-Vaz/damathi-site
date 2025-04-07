# 👕 DAMATHI - Loja Virtual de Moda

**DAMATHI** é um site de e-commerce responsivo desenvolvido com **HTML**, **Tailwind CSS** e **JavaScript**, voltado para a venda de roupas como camisetas, blusas e bermudas.  
Este projeto simula uma loja online com carrinho de compras, sistema de login, formulário de finalização de pedido e uma navegação moderna e acessível.  

---

## 💻 Tecnologias Utilizadas

- **HTML5** – Estrutura semântica das páginas
- **Tailwind CSS** – Estilização responsiva e moderna
- **JavaScript (Vanilla)** – Lógica de interação e manipulação do DOM
- **LocalStorage / SessionStorage** – Armazenamento de dados no navegador (ex: carrinho, login)

---

## 🛒 Funcionalidades Implementadas

### ✅ Carrinho de Compras
- Adição de produtos com tamanho selecionado
- Remoção com animação
- Contador de itens visível no ícone
- Resumo do valor total

### 👤 Sistema de Login
- Simula autenticação com usuário fixo (`teste@damathi.com / 123456`)
- Armazena o login com `localStorage` ou `sessionStorage`
- Permite manter o usuário logado
- Mostra "Olá, usuário" e botão "Sair" ao logar

### 🧾 Formulário de Finalização de Pedido
- Campos de nome, e-mail, endereço, complemento
- Consulta automática de endereço via **API ViaCEP**
- Validação de campos obrigatórios
- Resumo dos produtos comprados

### 🔍 Filtro de Produtos
- Filtros por tipo (camiseta, blusa, bermuda)
- Filtro por tamanho (PP, P, M, G, GG)
- Campo de busca para produtos por nome

### ⚙️ Acessibilidade (WCAG)
- Imagens com texto alternativo (`alt`)
- Navegação com teclado ativada
- Contraste de cores entre texto e fundo
- Foco visual em campos e botões interativos

### 📱 Responsividade
- Layout adaptado para diferentes tamanhos de tela (desktop, tablet e mobile)
- Menu hamburguer no mobile

---

## 📁 Estrutura de Pastas

```
📦 DAMATHI
├── index.html            # Página principal da loja
├── carrinho.html         # Carrinho de compras
├── formulario.html       # Finalização de pedido
├── login.html            # Página de login
├── script.js             # JavaScript principal
├── stilo.css             # Arquivo de estilos customizados
└── README.md             # Este arquivo
```

---

## 💡 Como Executar

1. Clone este repositório:
```bash
git clone https://github.com/Danilo-O-Vaz/damathi.git
```

2. Abra o arquivo `index.html` em um navegador de sua preferência.

---

## ✨ Exemplos Visuais

- 💬 Menu dinâmico com categorias
- 🛍️ Carrinho funcional
- 📦 Formulário com preenchimento automático de endereço
- 📱 Design responsivo e acessível

---

## 👨‍💻 Desenvolvido por

Danilo Oliveira Vaz, Marina Zentil Queiroz e Thiago Rodrigo Gerszewski  
Estudantes de Análise e Desenvolvimento de Sistemas  

---