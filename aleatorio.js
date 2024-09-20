const nomes = ["Fernando", "Geovana", "Nicolle", "Amanda", "Ana Clara"]; // Lista de nomes

export function aleatorio (lista){ // Função que retorna um nome aleatório da lista
    const posicao = Math.floor(Math.random()* lista.length);// Gera um número aleatório entre 0 e o tamanho da lista
    return lista[posicao];// Retorna o nome correspondente ao número aleatório
}

export const nome = aleatorio(nomes) // Exporta a função aleatorio para ser usada em outros arquivos