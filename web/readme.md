> state para listar os itens no estoque e salvar eles no localstorage, lembrando de começar seu valor inicial com o localstorage.get()
> Estrutura do item : 
  { 
    id: uuid(),
    name: string,
    category: string,
    description: string,
    quantity: number,
    created_at: Date,
    updated_at: Date
  }      

## Dashboard:
` deve ter state para o total de itens diferentes, possivelmente usando reduce`
` o total de itens é do state principal de itens no localstorage.length()`
` a quantidade de itens add nos ultimos 10 dias é um state que percorre o state inicial verificando o createdAt, baixar o dayJs, e seta uma contagem`
` a quantidade de itens com menos de 10 no estoque segue o principio acima, porem avaliando o item quantity`
` a lista de itens com menos de 10, é um novo state com um novo array` 