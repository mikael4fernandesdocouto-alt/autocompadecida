# Validação visual local

A aplicação foi aberta em `http://localhost:3000/teatro-teleprompter/` e carregou corretamente a nova interface escura com duas áreas principais: a coluna de falas do roteiro e o painel de edição/status. A fala padrão “E ande logo antes que mudem de ideia!” apareceu cadastrada com o efeito “Risada”.

Elementos confirmados na interface:

| Elemento | Status |
|---|---|
| Botão `+ Nova fala` | Visível |
| Botão `Ligar mic` | Visível |
| Controle de similaridade em 60% | Visível |
| Lista de falas | Visível com a fala padrão |
| Campo de texto da fala | Editável |
| Campo de nome do efeito | Editável |
| Upload de arquivo de áudio | Visível |
| Botões `Testar efeito`, `Exportar roteiro`, `Apagar fala`, `Reiniciar tudo` | Visíveis |
| Status de salvamento automático | Exibiu “Tudo salvo automaticamente neste navegador.” |

A página não apresentou erro visual ou tela branca no carregamento inicial.

## Segunda rodada de validação

A página foi revisada novamente após a atualização do HTML base. O título do navegador passou a ser **Teatro Teleprompter**. O botão **Testar efeito** foi acionado sem travar a interface, mantendo a aplicação responsiva e sem tela de erro.

Comandos técnicos executados com sucesso após as últimas alterações:

```bash
pnpm check
pnpm build
```
