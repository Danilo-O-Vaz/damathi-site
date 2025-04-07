
const produtos = [
  { 
    nome: "Camiseta Tribe", 
    preco: "89,90", 
    imagem: "https://cdn.vnda.com.br/1036x/brutalkill/2025/02/14/13_25_59_291_13_2_1_167__0011_camiseta2020tribe.jpg?v=1739550411", 
    tamanho: ["m"], 
    tipo: "camisetas" 
  },

    { 
    nome: "Camiseta Pajé", 
    preco: "89,90", 
    imagem: "https://cdn.vnda.com.br/1036x/brutalkill/2025/01/18/08_07_55_625_8_1_6_631_camiseta20pajc3a92001.jpg?v=1737198488", 
    tamanho: ["m", "gg"], 
    tipo: "camisetas" 
  },

  { 
    nome: "Camiseta Bartira", 
    preco: "89,90", 
    imagem: "https://cdn.vnda.com.br/1036x/brutalkill/2025/02/14/13_24_47_761_13_2_9_961__0027_camiseta2020bartira.jpg?v=1739550304", 
    tamanho: ["m", "g"], 
    tipo: "camisetas" 
  },

  { 
    nome: "Camiseta Rice", 
    preco: "89,90", 
    imagem: "https://cdn.vnda.com.br/1036x/brutalkill/2025/03/04/23_50_05_632_23_3_1_134__0007_camiseta20rice.jpg?v=1741143011", 
    tamanho: ["pp", "g", "gg"],
    tipo: "camisetas" 
  },

  { 
    nome: "Camiseta Mother", 
    preco: "89,90", 
    imagem: "https://cdn.vnda.com.br/1036x/brutalkill/2025/01/18/08_06_09_679_8_1_8_898_camiseta20cross2001.jpg?v=1737198389", 
    tamanho: ["m"], 
    tipo: "camisetas" 
  },

  { 
    nome: "Camiseta Hell", 
    preco: "89,90", 
    imagem: "https://cdn.vnda.com.br/1036x/brutalkill/2025/03/12/19_49_36_98_19_3_9_997_camisetagotohellfrente.jpg?v=1741819779", 
    tamanho: ["m", "g", "gg"],
    tipo: "camisetas"  
  },

  { 
    nome: "Camiseta Levitating", 
    preco: "89,90", 
    imagem: "https://cdn.vnda.com.br/1036x/brutalkill/2024/11/26/22_49_51_296_22_11_6_608_21.jpg?v=1732672191", 
    tamanho: ["m"], 
    tipo: "camisetas" 
  },

  { 
    nome: "Camiseta Arcade", 
    preco: "89,90", 
    imagem: "https://cdn.vnda.com.br/1036x/brutalkill/2024/12/07/16_15_20_653_16_12_2_292_39.jpg?v=1733598931", 
    tamanho: ["m"], 
    tipo: "camisetas" 
  },

  { 
    nome: "Camiseta Bulls", 
    preco: "89,90", 
    imagem: "https://cdn.vnda.com.br/1036x/brutalkill/2025/03/16/15_27_06_617_15_3_5_516__0019_camiseta2020bk20bulls20copiar.jpg?v=1742149632", 
    tamanho: ["p", "m", "g", "gg"],
    tipo: "camisetas"  
  },

  { 
    nome: "Camiseta Line Out", 
    preco: "89,90", 
    imagem: "https://cdn.vnda.com.br/1036x/brutalkill/2025/03/26/18_05_49_77_18_3_2_280__0043_camiseta20line20out.jpg?v=1743023188", 
    tamanho: ["m", "g", "gg"],
    tipo: "camisetas"  
  },

  { 
    nome: "Moletom Marvin", 
    preco: "189,90", 
    imagem: "https://cdn.vnda.com.br/1036x/brutalkill/2024/07/31/14_53_57_596_14_7_9_902_moletomcarecamarvinfrente134ec8c525fb9f5643a1645190763691210241024.jpg?v=1722448495", 
    tamanho: ["p","m"], 
    tipo: "blusas" 
  },

  { 
    nome: "Moletom Peace", 
    preco: "189,90", 
    imagem: "https://cdn.vnda.com.br/1036x/brutalkill/2024/07/26/14_50_51_848_moletom-careca-peace-021-bb150e8a2a4e84269916869335838297-1024-1024.jpg?v=1722016251", 
    tamanho: ["m"], 
    tipo: "blusas" 
  },

  { 
    nome: "Moletom Wolf", 
    preco: "189,90", 
    imagem: "https://cdn.vnda.com.br/1036x/brutalkill/2024/12/20/09_29_26_366_9_12_8_886_moletomcapuzwolffrente.jpg?v=1734697766", 
    tamanho: ["m", "gg"], 
    tipo: "blusas" 
  },

  { 
    nome: "Moletom W", 
    preco: "189,90", 
    imagem: "https://cdn.vnda.com.br/1036x/brutalkill/2024/07/26/14_50_39_16_moletom-capuz-wand-011-328197569754d9787516801878938014-1024-1024.jpg?v=1722338661", 
    tamanho: ["m", "g", "gg"], 
    tipo: "blusas" 
  },

  { 
    nome: "Bermuda Hawk", 
    preco: "89,90", 
    imagem: "https://cdn.vnda.com.br/1036x/brutalkill/2025/01/13/13_37_20_358_13_1_4_442__0040_bermuda_0018_camada2015.jpg?v=1736786245", 
    tamanho: [ "p", "m", "g"],
    tipo: "bermudas"  
  },

  { 
    nome: "Bermuda Gojira", 
    preco: "99,90", 
    imagem: "https://cdn.vnda.com.br/1036x/brutalkill/2025/01/13/13_39_09_397_13_1_4_463__0035_bermuda_0020_camada2013.jpg?v=1736786355", 
    tamanho: ["p", "m"],
    tipo: "bermudas"  
  },

  { 
    nome: "Bermuda Divine", 
    preco: "99,90", 
    imagem: "https://cdn.vnda.com.br/1036x/brutalkill/2025/01/13/13_34_14_973_13_1_8_822__0031_bermuda_0022_camada2011.jpg?v=1736786060", 
    tamanho: ["pp", "p", "m"],
    tipo: "bermudas"  
  },

  { 
    nome: "Bermuda Beherit", 
    preco: "99,90", 
    imagem: "https://cdn.vnda.com.br/1036x/brutalkill/2025/01/13/13_36_32_326_13_1_4_445__0020_bermuda_0026_camada207.jpg?v=1736786199", 
    tamanho: ["pp", "p", "m"],
    tipo: "bermudas"  
  },

  { 
    nome: "Bermuda Frankie", 
    preco: "99,90", 
    imagem: "https://cdn.vnda.com.br/1036x/brutalkill/2025/01/13/13_35_18_422_13_1_5_510__0012_bermuda_0030_camada203.jpg?v=1736786136", 
    tamanho: ["pp", "p", "m"],
    tipo: "bermudas"  
  },

  { nome: "Bermuda Tradicional Aya", 
    preco: "99,90", 
    imagem: "https://cdn.vnda.com.br/1036x/brutalkill/2025/02/10/14_15_17_180_14_2_4_482_bermudadryfitayafrente.jpg?v=1739207717", 
    tamanho: ["g", "gg"],
    tipo: "bermudas"  
  }
];

const container = document.getElementById("productList");

function renderizarProdutos(lista = produtos) {
  container.innerHTML = "";

  if (lista.length === 0) {
    container.innerHTML = `
      <p class="col-span-3 text-center text-gray-500 text-lg font-medium py-10">
        Nenhum produto encontrado.
      </p>
    `;
    return;
  }

  lista.forEach((prod, index) => {
    // Gera dinamicamente os tamanhos disponíveis
    const opcoesTamanho = prod.tamanho.map(t =>
      `<option value="${t}">${t.toUpperCase()}</option>`
    ).join("");

    const div = document.createElement("div");
    div.className = "bg-white border p-4 text-center rounded shadow transform transition-transform duration-300 hover:scale-105";
    div.innerHTML = `
      <div class="relative mb-4">
        <img src="${prod.imagem}" alt="${prod.nome}" class="w-full h-64 object-cover rounded">
        <div class="absolute top-0 left-0 bg-black bg-opacity-70 text-white text-sm font-semibold px-3 py-1 rounded-br">
          ${prod.nome}
        </div>
      </div>
      <p class="text-gray-600">R$ ${prod.preco}</p>
      <label class="block text-sm text-gray-500 mt-2 mb-1">Tamanho:</label>
      <select class="tamanho-select border rounded px-2 py-1 text-sm w-full max-w-xs">
        <option value="">Selecione</option>
        ${opcoesTamanho}
      </select>
      <button data-index="${index}" class="add-to-cart mt-2 bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition-all duration-300 active:scale-95">
        Adicionar ao carrinho
      </button>
    `;

    container.appendChild(div);
  });

  const buttons = container.querySelectorAll(".add-to-cart");
  buttons.forEach(button => {
    button.addEventListener("click", () => adicionarAoCarrinhoComTamanho(button));
  });
}

function adicionarAoCarrinhoComTamanho(button) {
  const index = parseInt(button.getAttribute("data-index"));
  const card = button.closest(".bg-white");
  const select = card.querySelector(".tamanho-select");
  const tamanho = select.value;

  if (!tamanho) {
    alert("Selecione um tamanho antes de adicionar ao carrinho.");
    return;
  }

  const produtoSelecionado = { ...produtos[index], tamanho };
  const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

  // Verifica se já existe produto igual (nome + tamanho)
  const existente = carrinho.find(p => p.nome === produtoSelecionado.nome && p.tamanho === produtoSelecionado.tamanho);

  if (existente) {
    existente.quantidade = (existente.quantidade || 1) + 1;
  } else {
    produtoSelecionado.quantidade = 1;
    carrinho.push(produtoSelecionado);
  }

  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  atualizarContador();

  button.textContent = "Adicionado!";
  button.classList.add("bg-green-600");
  setTimeout(() => {
    button.textContent = "Adicionar ao carrinho";
    button.classList.remove("bg-green-600");
  }, 1000);
}

function atualizarContador() {
  const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  const total = carrinho.reduce((acc, item) => acc + (item.quantidade || 1), 0);
  const contador = document.getElementById("cart-count");
  if (contador) contador.textContent = total;
}

document.addEventListener("DOMContentLoaded", () => {
  renderizarProdutos();
  atualizarContador();
});

const tipoSelect = document.getElementById("filterTipo");
const tamanhoSelect = document.getElementById("filterTamanho");
const clearBtn = document.getElementById("clearFilters");
const toggleBtn = document.getElementById("filterToggle");
const filterPanel = document.getElementById("filterPanel");

toggleBtn?.addEventListener("click", () => {
  filterPanel.classList.toggle("hidden");
});

function aplicarFiltros() {
  const tipo = tipoSelect.value.toLowerCase();
  const tamanho = tamanhoSelect.value.toLowerCase();

  const filtrados = produtos.filter(p => {
    const tipoOk = tipo === "" || (p.tipo && p.tipo.toLowerCase() === tipo);
    const tamanhoOk = tamanho === "" || (p.tamanho && p.tamanho.includes(tamanho));
    return tipoOk && tamanhoOk;
  });

  renderizarProdutos(filtrados);
}


clearBtn?.addEventListener("click", () => {
  tipoSelect.value = "";
  tamanhoSelect.value = "";
  aplicarFiltros();
});

tipoSelect?.addEventListener("change", aplicarFiltros);
tamanhoSelect?.addEventListener("change", aplicarFiltros);

function removerItemComAnimacao(index) {
  const divItem = document.getElementById(`item-${index}`);
  if (!divItem) return;

  // Aplica classe de transição (opacidade e leve deslocamento)
  divItem.classList.add("opacity-0", "-translate-x-4");

  // Após a animação, remove do carrinho
  setTimeout(() => {
    let carrinhoAtual = JSON.parse(localStorage.getItem("carrinho")) || [];
    carrinhoAtual.splice(index, 1);
    localStorage.setItem("carrinho", JSON.stringify(carrinhoAtual));
    carrinho = carrinhoAtual;
    renderizarCarrinho();
  }, 400); // tempo da animação (em ms)
}

function aumentarQtd(index) {
  carrinho[index].quantidade = (carrinho[index].quantidade || 1) + 1;
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  renderizarCarrinho();
}

function diminuirQtd(index) {
  if (carrinho[index].quantidade > 1) {
    carrinho[index].quantidade -= 1;
  } else {
    // Remove o item se a quantidade for 1
    carrinho.splice(index, 1);
  }
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  renderizarCarrinho();
}

function filtrarPorTipo(tipo) {
  const filtrados = produtos.filter(p => p.tipo.toLowerCase() === tipo.toLowerCase());
  renderizarProdutos(filtrados);

  const titulo = document.getElementById("tituloCategoria");
  const breadcrumb = document.getElementById("breadcrumbCategoria");

  const nomesPlural = {
    camiseta: "Camisetas",
    blusa: "Blusas",
    bermuda: "Bermudas"
  };

  if (titulo && breadcrumb) {
    const texto = nomesPlural[tipo.toLowerCase()] || "Produtos";
    titulo.textContent = texto;
    breadcrumb.textContent = texto;
  }
}

function mostrarTodosProdutos() {
  renderizarProdutos(produtos);

  const titulo = document.getElementById("tituloCategoria");
  const breadcrumb = document.getElementById("breadcrumbCategoria");

  if (titulo && breadcrumb) {
    titulo.textContent = "Todos os Produtos";
    breadcrumb.textContent = "Todos os Produtos";
  }
}

document.getElementById("searchInput")?.addEventListener("input", function () {
  const termo = this.value.trim().toLowerCase();
  if (termo === "") {
    renderizarProdutos(); // mostra todos
    return;
  }

  const resultados = produtos.filter(p =>
    p.nome.toLowerCase().includes(termo)
  );

  renderizarProdutos(resultados);
});

const usuario = JSON.parse(localStorage.getItem("usuarioLogado") || sessionStorage.getItem("usuarioLogado"));

  if (usuario) {
    console.log("Usuário logado:", usuario.email);
    // Ex: mostrar nome, botão de sair etc
  }
