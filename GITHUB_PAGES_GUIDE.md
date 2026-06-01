# Guia de Deploy no GitHub Pages

## O que é GitHub Pages?

GitHub Pages é um serviço gratuito do GitHub que permite hospedar sites estáticos diretamente de um repositório. É perfeito para o seu teleprompter!

---

## Passo 1: Criar uma Conta GitHub (se não tiver)

1. Acesse [github.com](https://github.com)
2. Clique em "Sign up"
3. Complete o cadastro com seu email e senha
4. Verifique seu email

---

## Passo 2: Criar um Novo Repositório

1. Após fazer login no GitHub, clique no ícone **+** no canto superior direito
2. Selecione **New repository**
3. Preencha os dados:
   - **Repository name**: `teatro-teleprompter` (ou outro nome que preferir)
   - **Description**: "Teleprompter interativo para o Auto da Compadecida"
   - **Public**: Selecione esta opção (necessário para GitHub Pages gratuito)
   - **Add a README file**: Deixe desmarcado (vamos adicionar depois)
4. Clique em **Create repository**

---

## Passo 3: Preparar o Projeto Localmente

Abra o terminal na pasta do projeto e execute:

```bash
cd /home/ubuntu/teatro-teleprompter

# Inicializar git (se ainda não foi feito)
git init

# Adicionar o repositório remoto (substitua SEU_USUARIO pelo seu usuário GitHub)
git remote add origin https://github.com/SEU_USUARIO/teatro-teleprompter.git

# Adicionar todos os arquivos
git add .

# Fazer o primeiro commit
git commit -m "Inicial: teleprompter para Auto da Compadecida"

# Fazer push para o GitHub
git branch -M main
git push -u origin main
```

---

## Passo 4: Configurar GitHub Pages

1. No GitHub, vá para o repositório `teatro-teleprompter`
2. Clique em **Settings** (engrenagem no topo)
3. Na barra lateral esquerda, clique em **Pages**
4. Em "Source", selecione:
   - **Deploy from a branch**
   - **Branch**: `main`
   - **Folder**: `dist` (onde o build fica)
5. Clique em **Save**

---

## Passo 5: Fazer o Build do Projeto

Execute no terminal:

```bash
cd /home/ubuntu/teatro-teleprompter

# Instalar dependências (se não fez ainda)
pnpm install

# Fazer o build
pnpm build
```

Isso vai criar uma pasta `dist/` com os arquivos prontos para deploy.

---

## Passo 6: Fazer Push do Build

```bash
# Adicionar a pasta dist ao git
git add dist/

# Fazer commit
git commit -m "Build: preparado para GitHub Pages"

# Fazer push
git push origin main
```

---

## Passo 7: Acessar o Site

Após alguns minutos (geralmente 2-5 minutos), seu site estará disponível em:

```
https://SEU_USUARIO.github.io/teatro-teleprompter
```

Substitua `SEU_USUARIO` pelo seu usuário do GitHub.

---

## Atualizações Futuras

Sempre que fizer mudanças no código:

```bash
# 1. Fazer as alterações no código

# 2. Fazer o build
pnpm build

# 3. Adicionar e fazer commit
git add .
git commit -m "Descrição das mudanças"

# 4. Fazer push
git push origin main
```

---

## Usando a Interface Manus (Alternativa)

Se preferir não usar GitHub Pages, você pode usar a interface Manus diretamente:

1. Clique no botão **Publish** no canto superior direito
2. Siga as instruções para gerar um link público
3. Seu site ficará hospedado na plataforma Manus

---

## Troubleshooting

### O site não aparece após 10 minutos?

1. Verifique se o branch está configurado corretamente em Settings > Pages
2. Confirme que a pasta `dist/` foi feita o push
3. Verifique se há erros no build: `pnpm build`

### Como usar um domínio personalizado?

1. Em Settings > Pages, em "Custom domain", adicione seu domínio
2. Configure os registros DNS no seu provedor de domínio
3. GitHub fornecerá as instruções específicas

### Posso usar um repositório privado?

Não com GitHub Pages gratuito. Você precisa de um repositório público ou pagar pelo GitHub Pro.

---

## Dicas Importantes

- **Sempre faça backup**: Mantenha uma cópia local do seu projeto
- **Versione seu código**: Use commits descritivos para rastrear mudanças
- **Teste localmente**: Execute `pnpm dev` antes de fazer push
- **Atualize regularmente**: Mantenha as dependências atualizadas

---

## Próximos Passos

Após o deploy:

1. Teste todas as funcionalidades no navegador
2. Verifique a responsividade em diferentes dispositivos
3. Teste o reconhecimento de voz
4. Compartilhe o link com seus colegas de teatro!

Boa sorte com suas apresentações! 🎭
