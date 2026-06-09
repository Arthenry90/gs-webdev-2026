# 🛰️ OrbitBird Rescue System

O **OrbitBird Rescue System** é uma plataforma inteligente e descentralizada de monitoramento emergencial e telemetria, projetada especificamente para otimizar operações de localização e salvamento em cenários críticos de difícil acesso, como densas áreas florestais (ex: Floresta Amazônica) e zonas montanhosas e Rurais. 

O sistema soluciona o maior desafio de resgates remotos: a ausência total de infraestrutura convencional de comunicação (redes de celular ou internet local), utilizando tecnologias descentralizadas de ponta.

---

## 🚀 Funcionalidades Principais do Front-End

* **Simulador de Pânico via Satélite (Home):** Simula o disparo de um sinal SOS criptografado diretamente para constelações de satélite em órbita baixa, ignorando o isolamento terrestre. Ao acionar o botão, as coordenadas geográficas em tempo real são capturadas e plotadas instantaneamente sobre um mapa dinâmico.
* **Central Interativa de Diretrizes ODS (Home):** Malha de pílulas interativas mapeando o enquadramento do projeto na agenda da ONU. Cada pílula possui efeitos dinâmicos de *hover* cromáticos específicos. Ao clicar, um modal imersivo é aberto, adotando a cor de fundo oficial e exclusiva de cada ODS para explicar seu impacto no sistema.
* **Mostruário de Arquitetura Tecnológica Flexível (Tecnologias):** Um carrossel interativo e inteligente onde o usuário pode alternar e destacar o componente tecnológico em foco (como microcontroladores ESP32, protocolos de mensageria MQTT ou o ecossistema FIWARE). A tecnologia selecionada ganha destaque visual imediato no painel, detalhando seu papel na cadeia de dados.

---

## 🛠️ Arquitetura e Tecnologias Utilizadas

Este ecossistema foi construído seguindo padrões de desenvolvimento web corporativo e design de interface (UI/UX):

* **React.js (com Vite)** 
* **Tailwind CSS (v4.0)**
* **Google Fonts (Turret Road)**  injetada diretamente via `@theme` nativo da nova arquitetura Tailwind.
* **React Router DOM** Gerenciamento fluído e otimizado de rotas internas (*lowercase*) para navegação entre as 5 páginas da plataforma sem recarregamento de página.
* **Bases de Dados JSON Locais:** Separação absoluta entre dados e interface. Toda a exibição de conteúdos (cards, carrosséis e modais) é populada dinamicamente mapeando arquivos estruturados `.json`.

---

## 📋 Integrantes do Grupo (FIAP - 2026)

* **Artur Henrique Siqueira** - RM566986
* **Davi de Souza Malta** - RM560327
* **Guilherme Cruz Alves** - RM566861
* **Guilherme de Oliveira Scremin** - RM564788
* **Pedro Sales Ferreira** -  RM566910

---

## 🔗 Links Oficiais de Acesso

* **Repositório do Projeto (GitHub):** [[GITHUB](https://github.com/Arthenry90/gs-webdev-2026)]
* **Deploy de Produção Ativo:** [[Vercel](https://gs-webdev-2026.vercel.app/)]

---

## 💻 Instruções para Instalação e Execução Local

Siga os passos abaixo para clonar, instalar as dependências e rodar o servidor de desenvolvimento local da aplicação:

1. **Clonar o Repositório:**
   ```bash
   git clone [[Repositório](https://github.com/Arthenry90/gs-webdev-2026.git)]
   cd gs-webdev-2026
   npm install
   npm run dev
   Abra o seu navegador e acesse o endereço local informado no terminal

---
