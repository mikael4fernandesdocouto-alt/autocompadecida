# Plano de refatoração

O projeto será transformado em uma aplicação React estática compatível com GitHub Pages. Como GitHub Pages não executa backend nem oferece armazenamento de servidor, a persistência será feita no navegador com IndexedDB, permitindo salvar textos e arquivos de áudio mesmo depois de fechar e reabrir o site no mesmo navegador/dispositivo.

## Funcionalidades principais

| Área | Decisão |
|---|---|
| Falas | Cadastro, edição, exclusão e seleção de falas do roteiro. |
| Áudio | Upload de um arquivo de áudio por fala para ser usado como efeito sonoro. |
| Gatilho por voz | Web Speech API em pt-BR, com escuta contínua e comparação entre fala reconhecida e falas cadastradas. |
| Similaridade | Algoritmo local de similaridade textual com normalização, Dice coefficient por bigramas e bônus por inclusão de frase. Padrão: 60%. |
| Risada automática | A frase “E ande logo antes que mudem de ideia!” virá cadastrada com efeito “Risada”. Se não houver arquivo de áudio, toca uma risada sintética por Web Audio API. |
| Persistência | IndexedDB para roteiro e blobs de áudio; localStorage apenas para preferências simples. |
| GitHub Pages | Sem chamadas a servidor; build estático em `dist/public`, com `base: /teatro-teleprompter/` já preservado. |

## Estratégia de implementação

A página principal será reescrita em `client/src/App.tsx` para eliminar imports quebrados e centralizar a lógica essencial. O CSS global será substituído por estilos Tailwind utilitários e tokens escuros, evitando dependência de componentes incompletos. O `README.md` será atualizado com instruções de uso, limitações do armazenamento local e publicação no GitHub Pages.
