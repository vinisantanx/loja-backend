# 🛒 Documentação de Regras – E-commerce (NestJS)

---

## 📘 Sumário

- [📖 Regras de Negócio](#regras-de-negócio)
- [✅ Regras Funcionais](#regras-funcionais)
- [🚫 Regras Não Funcionais](#regras-não-funcionais)

---

## 📖 Regras de Negócio - Usuário Cliente

| Código  | Regra | Descrição |
|---------|-------|-----------|
| **RN001** | Visualização |Usuários deverão visualizar todos os itens na tela inicial|
| **RN002** | Promoção |Usuários deverão ser informados sobre promoção na tela inicial|
| **RN003** | Limite no Carrinho|O Usuário pode adicionar até 2 unidades de um mesmo produto por pedido. |
| **RN004** | Alterar pedido|Usuário poderá Adicionar, excluir e atualizar um carrinho não processado|
| **RN005** | Suporte |Usuário deverá ter acesso a uma aba de suporte com contatos da responsável da loja|
| **RN006** | Conta | Usuário poderá excluir sua conta caso não haja nenhum pedido em processamento|
| **RN007** | Recomendações | Usuários deverá receber recomendações com base no seu histórico de navegação|
| **RN008** | Andamento | Usuários deverá ter acesso ao andamento do pedido|
| **RN009** | Termos e LGPD |Usuário deverá ter acesso a termos de uso e politica de privacidade|
| **RN010** | Pedido |Usuário deverá aguardar a aprovação do pedido por responsáveis|

## 📖 Regras de Negócio - Usuário Admin

| Código  | Regra | Descrição |
|---------|-------|-----------|
| **RN001** | Visualização | Admin deverá visualizar e gerenciar Usuários e seus pedidos |
| **RN002** | Gerenciar Pedidos | Admin deverá Cadastrar, Visualizar, Atualizar e Deletar produtos e Pedidos|
| **RN003** | Descontos e Promoções| Admin poderá aplicar promoções em produtos |
| **RN004** | Categoria | Admin poderá criar, visualizar, atualizar e deletar uma categoria |
| **RN005** | Pedido |Admin poderá alterar o status de um pedido (Anulado, Processado, Em andamento, Concluído)|
| **RN006** | Pedido |Admin poderá atualizar anúncios do site|


## ✅ Regras Funcionais

| Código  | Funcionalidade | Descrição |
|---------|----------------|-----------|
| **RF001** | Cadastro de Usuário | O sistema deve permitir que usuários se cadastrem com nome, e-mail e senha. |
| **RF002** | Autenticação | O sistema deve autenticar usuários via JWT. |
| **RF003** | Listagem de Produtos | O sistema deve listar produtos disponíveis no estoque. |
| **RF004** | Adicionar ao Carrinho | O sistema deve permitir adicionar produtos ao carrinho. |
| **RF005** | Checkout | O sistema deve realizar o checkout e gerar um pedido. |
| **RF006** | Histórico de Pedidos | O sistema deve mostrar o histórico de pedidos do usuário. |

---

## 🚫 Regras Não Funcionais

| Código  | Requisito | Descrição |
|---------|-----------|-----------|
| **RNF001** | Segurança | Todas as rotas privadas devem ser protegidas com autenticação JWT. |
| **RNF003** | Performance | Listagens devem ter tempo de resposta menor que 2 segundos. |
| **RNF005** | API RESTful | A API deve seguir o padrão REST com retorno em JSON. |

---

> 🛠️ _Este documento serve como base para desenvolvimento, validação e manutenção das regras do projeto. Atualize conforme mudanças no escopo._

