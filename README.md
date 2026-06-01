# Teatro Teleprompter

Aplicação React estática para ensaios e apresentações teatrais. O site permite cadastrar falas do roteiro, anexar um áudio de efeito sonoro a cada fala e usar o microfone para disparar automaticamente o efeito quando a frase reconhecida estiver parecida com a fala cadastrada.

> **Compatibilidade com GitHub Pages:** o projeto não depende de backend. Todo o roteiro e os arquivos de áudio enviados pelo usuário são salvos no próprio navegador por **IndexedDB**. Isso significa que, ao fechar e abrir o site novamente no mesmo navegador e dispositivo, os dados continuam salvos.

## O que foi implementado

| Recurso | Como funciona |
|---|---|
| Cadastro de falas | Clique em **Nova fala**, escreva o texto e informe o nome do efeito. |
| Áudio por fala | Envie um arquivo `audio/*` para a fala selecionada. Esse arquivo será tocado quando a fala for reconhecida. |
| Detecção por voz | Use o botão **Ligar mic**. A aplicação usa a Web Speech API em `pt-BR`. |
| Similaridade mínima | O padrão é **60%**, ajustável pelo controle de similaridade. |
| Frase da risada | A fala **“E ande logo antes que mudem de ideia!”** já vem cadastrada. Quando reconhecida, toca uma risada sintética se nenhum áudio tiver sido enviado. |
| Salvamento automático | Alterações de texto, áudio e limite de similaridade são salvas automaticamente no navegador. |
| Backup do roteiro | O botão **Exportar roteiro** baixa um JSON com as falas e configurações. O JSON não inclui os arquivos de áudio, apenas informa se cada fala tem áudio. |

## Como usar

Primeiro, abra o site no navegador publicado no GitHub Pages. Em seguida, cadastre ou edite as falas na coluna esquerda. Selecione uma fala, escreva o texto que deve ser reconhecido e envie o arquivo de áudio que deve tocar como efeito. Para testar manualmente, clique em **Testar efeito**. Para usar ao vivo, clique em **Ligar mic** e fale a frase cadastrada.

A aplicação compara o texto ouvido com todas as falas cadastradas. Se a fala reconhecida atingir pelo menos o percentual configurado, o efeito sonoro correspondente é reproduzido. O limite padrão de 60% ajuda a aceitar pequenas diferenças de pronúncia ou erros do reconhecimento de voz.

## Limitações importantes

| Limite | Explicação |
|---|---|
| GitHub Pages não tem servidor | Não existe armazenamento compartilhado entre pessoas/dispositivos sem adicionar um backend externo. |
| Salvamento é local | Os dados ficam no navegador que cadastrou o roteiro. Outro navegador ou outro computador começa vazio. |
| Reconhecimento de voz depende do navegador | Chrome e Edge costumam funcionar melhor. O navegador pode exigir HTTPS e permissão de microfone. |
| Arquivos muito grandes podem falhar | IndexedDB aceita blobs, mas cada navegador define limites próprios de armazenamento. Prefira efeitos curtos. |

## Desenvolvimento local

```bash
pnpm install
pnpm dev
```

Para checar TypeScript:

```bash
pnpm check
```

Para gerar a versão estática:

```bash
pnpm build
```

A saída principal para publicação fica em:

```text
dist/public
```

## Publicação no GitHub Pages

O `vite.config.ts` já usa:

```ts
base: "/teatro-teleprompter/"
```

Isso é adequado para o endereço padrão do repositório no GitHub Pages, por exemplo:

```text
https://tafasad.github.io/teatro-teleprompter/
```

Uma forma simples de publicar é configurar o workflow do GitHub Actions para executar `pnpm install` e `pnpm build`, enviando a pasta `dist/public` para Pages. Se preferir publicar manualmente, gere o build localmente e envie o conteúdo de `dist/public` para o branch usado pelo GitHub Pages.

## Arquivos principais alterados

| Arquivo | Função |
|---|---|
| `client/src/App.tsx` | Aplicação principal autocontida com fala, áudio, microfone, similaridade e persistência. |
| `client/src/pages/Home.tsx` | Redireciona para o novo `App`, removendo a página antiga quebrada. |
| `README.md` | Documentação atualizada do projeto. |
| `REFATORACAO_PLANO.md` | Resumo técnico das decisões da refatoração. |

## Validação

A refatoração foi validada com os comandos:

```bash
pnpm check
pnpm build
```

Ambos passaram com sucesso.
