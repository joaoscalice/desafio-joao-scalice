class CaixaDaLanchonete {
    CARDAPIO = [
        { codigo: "cafe", qntd: 0, valor: 3.0 },
        { codigo: "chantily", qntd: 0, extra: "cafe", valor: 1.5 },
        { codigo: "suco", qntd: 0, valor: 6.2 },
        { codigo: "sanduiche", qntd: 0, valor: 6.5 },
        { codigo: "queijo", qntd: 0, extra: "sanduiche", valor: 2.0 },
        { codigo: "salgado", qntd: 0, valor: 7.25 },
        { codigo: "combo1", qntd: 0, valor: 9.5 },
        { codigo: "combo2", qntd: 0, valor: 7.5 },
    ];

    formasDePagamento = ["dinheiro", "credito", "debito"];

    calcularValorDaCompra(metodoDePagamento, itens) {

        if (!itens || itens.length === 0) {
            return "Não há itens no carrinho de compra!";
        }

        let valorTotal = 0;

        for (const itemPedido of itens) {
            const [codigo, qntd] = itemPedido.split(",");

            const itemCardapio = this.CARDAPIO.find((item) => item.codigo === codigo);

            if (!itemCardapio) {
                return "Item inválido!";
            } else if (qntd <= 0) {
                return "Quantidade inválida!";
            }

        valorTotal += itemCardapio.valor * qntd;

        if (itemCardapio.extra && !itens.find((item) => item.split(",")[0] === itemCardapio.extra)) {
            return "Item extra não pode ser pedido sem o principal";
        }
        
        }

    switch (metodoDePagamento) {
        case "dinheiro":
            valorTotal *= 0.95;
            break;

        case "credito":
            valorTotal *= 1.03;
            break;

        case "debito":
            break;

        default:
            return "Forma de pagamento inválida!";
    }

    return `R$ ${valorTotal.toFixed(2).replace(".", ",")}`;
  }
}

export { CaixaDaLanchonete };
