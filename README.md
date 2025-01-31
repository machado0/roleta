# League of Legends Champion Selector & Ban Tool

Este projeto é uma ferramenta para roletar campeões de League of Legends e gerenciar bans por rota, permitindo que os usuários selecionem campeões aleatoriamente e restrinjam certas escolhas.

## Funcionalidades Implementadas

- **Roleta de campeão por rota**: Permite selecionar aleatoriamente um campeão com base na rota escolhida.
- **Sistema de bans por rota**: Cada rota pode ter um campeão banido, que será excluído da roleta para aquela rota.
- **Atualização dinâmica dos botões**: Os botões de seleção e banimento de campeões são atualizados automaticamente para refletir a escolha do usuário.
- **Prevenção de seleção de campeões banidos**: Um campeão que já foi banido para uma rota não pode ser selecionado novamente.
- **Dropdown para seleção de bans**: O usuário pode selecionar manualmente o campeão a ser banido em cada rota.
- **Efeitos sonoros**: Sons são reproduzidos ao passar o mouse sobre os campeões.
- **Carregamento dinâmico de imagens**: As imagens dos campeões são carregadas dinamicamente a partir de um arquivo JSON.

## Como Usar
1. Clique no botão de uma rota para roletar um campeão aleatório.
2. Para banir um campeão, clique no botão de ban correspondente e selecione um campeão da lista.
3. Um campeão banido será removido da lista de campeões disponíveis para aquela rota.
4. Os campeões podem ser re-rolados, respeitando as restrições de banimento.

## Tecnologias Utilizadas
- **HTML, CSS e JavaScript** para a interface e lógica de seleção.
- **JSON** para armazenar e carregar imagens dos campeões.
- **Event Listeners** para interatividade dos botões e efeitos sonoros.

## Possíveis Melhorias Futuras
- Implementação de um sistema de histórico de seleções.
- Adição de uma interface mais intuitiva com animações.
