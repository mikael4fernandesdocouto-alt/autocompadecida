# 🚀 Como Colocar o Teleprompter no GitHub Pages

Siga este passo a passo para fazer deploy do seu site no GitHub Pages de forma gratuita!

## 📋 Pré-requisitos

- Conta no GitHub (crie em https://github.com/signup se não tiver)
- Git instalado no seu computador (https://git-scm.com/download)
- O projeto pronto para deploy

## ✅ Passo a Passo Completo

### **PASSO 1: Criar um repositório no GitHub**

1. Acesse https://github.com/new
2. Preencha os campos:
   - **Repository name**: `teatro-teleprompter` (ou outro nome que quiser)
   - **Description**: "Teleprompter Interativo para Teatro - Auto da Compadecida"
   - **Public**: Deixe marcado (necessário para GitHub Pages grátis)
3. Clique em **"Create repository"**

### **PASSO 2: Configurar Git no seu computador**

Abra o terminal/prompt de comando e execute:

```bash
# Configurar seu nome (use seu nome real ou apelido)
git config --global user.name "Seu Nome"

# Configurar seu email (use o email da sua conta GitHub)
git config --global user.email "seu.email@gmail.com"
```

### **PASSO 3: Inicializar Git no projeto**

Na pasta do projeto (`teatro-teleprompter`), execute:

```bash
# Entrar na pasta do projeto
cd ~/teatro-teleprompter

# Inicializar Git
git init

# Adicionar todos os arquivos
git add .

# Fazer o primeiro commit
git commit -m "Initial commit - Teleprompter Auto da Compadecida"
```

### **PASSO 4: Conectar ao repositório do GitHub**

Copie o comando do GitHub (aparece quando você cria o repositório) e execute:

```bash
# Adicionar o repositório remoto (substitua SEU_USUARIO pelo seu usuário do GitHub)
git remote add origin https://github.com/SEU_USUARIO/teatro-teleprompter.git

# Renomear branch para 'main' (padrão do GitHub)
git branch -M main

# Fazer o primeiro push
git push -u origin main
```

**Exemplo real:**
```bash
git remote add origin https://github.com/joaosilva/teatro-teleprompter.git
git branch -M main
git push -u origin main
```

### **PASSO 5: Ativar GitHub Pages**

1. Acesse seu repositório no GitHub
2. Clique em **Settings** (engrenagem no topo)
3. No menu esquerdo, clique em **Pages**
4. Em "Build and deployment":
   - **Source**: Selecione `Deploy from a branch`
   - **Branch**: Selecione `main` e `/root` (ou `/` se aparecer)
5. Clique em **Save**

### **PASSO 6: Aguardar o deploy**

1. Volte para a aba **Actions** do seu repositório
2. Você verá um workflow rodando (pode levar 1-2 minutos)
3. Quando ficar verde ✅, seu site está online!

### **PASSO 7: Acessar seu site**

Seu site estará disponível em:

```
https://SEU_USUARIO.github.io/teatro-teleprompter
```

**Exemplo real:**
```
https://joaosilva.github.io/teatro-teleprompter
```

---

## 🔄 Fazer Atualizações no Site

Sempre que quiser atualizar o site:

```bash
# Entrar na pasta do projeto
cd ~/teatro-teleprompter

# Fazer as mudanças no código

# Adicionar as mudanças
git add .

# Fazer commit
git commit -m "Descrição da mudança"

# Fazer push
git push
```

O GitHub Pages vai atualizar automaticamente em poucos minutos!

---

## 🆘 Troubleshooting

### Erro: "fatal: not a git repository"
- Certifique-se de que está na pasta correta: `cd ~/teatro-teleprompter`
- Se ainda não inicializou Git, execute: `git init`

### Erro: "Permission denied (publickey)"
- Você precisa configurar SSH. Alternativa: use HTTPS
- Execute: `git remote set-url origin https://github.com/SEU_USUARIO/teatro-teleprompter.git`

### Site não aparece após push
- Aguarde 2-3 minutos
- Verifique em **Settings > Pages** se está configurado corretamente
- Veja a aba **Actions** para ver se há erros no deploy

### Página em branco ou 404
- Verifique se o arquivo `dist/public/index.html` existe
- Certifique-se de que fez `pnpm build` antes de fazer push

---

## 📱 Usar no Celular/Tablet

Depois que estiver no GitHub Pages, você pode acessar de qualquer dispositivo:

1. Abra o navegador
2. Digite: `https://SEU_USUARIO.github.io/teatro-teleprompter`
3. Permita acesso ao microfone quando pedir
4. Pronto! Use no palco! 🎭

---

## 💡 Dicas Extras

### Usar domínio customizado (opcional)
Se tiver um domínio próprio, pode usar em vez de `github.io`:
1. Em **Settings > Pages**, adicione seu domínio em "Custom domain"
2. Configure o DNS do seu domínio conforme as instruções do GitHub

### Colaborar com outros
Se quiser que outras pessoas ajudem:
1. Em **Settings > Collaborators**, adicione o GitHub username delas
2. Elas conseguem fazer push direto para o repositório

---

## ✨ Pronto!

Seu teleprompter está online e pronto para usar em apresentações! 🎭🎬

Qualquer dúvida, consulte: https://docs.github.com/en/pages
