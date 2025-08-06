
# PRD – Landing Page Aurora Residence

## 1. Visão Geral
A **Landing Page** do **Aurora Residence** tem como objetivo apresentar um empreendimento residencial em **Balneário Camboriú**, destacando seus diferenciais, localização estratégica e condições comerciais, visando a conversão de leads qualificados por meio de formulários de contato e chamadas para ação.  
A aplicação será desenvolvida em **Next.js** e contará com um design **minimalista, moderno, com cores claras e fluidas**.

---

## 2. Objetivos Principais
- **Apresentar o empreendimento** com clareza e apelo visual.
- **Destacar a localização** e benefícios da região.
- **Mostrar as plantas e metragens** dos apartamentos.
- **Informar preços, formas de pagamento e prazo de entrega**.
- **Captar leads** interessados por meio de formulário.
- **Garantir responsividade** e carregamento rápido.
- **Fornecer experiência fluida** com animações sutis.

---

## 3. Público-Alvo
- Investidores imobiliários.
- Famílias pequenas ou casais que buscam morar próximo à praia.
- Compradores em busca de imóveis com financiamento direto com a construtora.

---

## 4. Principais Funcionalidades

### 4.1 Estrutura de Seções
1. **Hero Section (Topo da Página)**  
   - Imagem ou vídeo do empreendimento em alta qualidade.  
   - Headline: “Aurora Residence – Viva o melhor de Balneário Camboriú a 4km da praia”  
   - Subheadline: “Apartamentos modernos a partir de R$ 590.000 com financiamento direto.”  
   - CTA: Botão “Saiba Mais” que rola para a seção de detalhes.

2. **Diferenciais do Empreendimento**  
   - Lista de features:  
     - 25 apartamentos (58, 61 e 71m²)  
     - Varanda com churrasqueira a carvão  
     - 2 quartos (1 suíte)  
     - 1 vaga de garagem  
     - Localização estratégica  
   - Ícones minimalistas para cada diferencial.

3. **Galeria de Imagens e Plantas**  
   - Carrossel de imagens do prédio, áreas internas e plantas.  
   - Visualização em lightbox.

4. **Informações Comerciais**  
   - Preços a partir de R$ 590.000  
   - Entrada: 10%  
   - Entrega das chaves: 36 meses  
   - Saldo dividido em até 180x direto com a construtora.

5. **Sobre a Região**  
   - Mapa interativo (Google Maps) com pins para:  
     - Praia (4 km)  
     - Supermercados  
     - Padarias  
     - Escolas  
   - Texto breve sobre o crescimento da região.

6. **Formulário de Contato**  
   - Campos: Nome, E-mail, Telefone, Mensagem.  
   - Integração com e-mail/CRM.  
   - Mensagem de confirmação amigável.

7. **Rodapé (Footer)**  
   - Contatos, redes sociais, endereço da construtora.  
   - Link para política de privacidade.

---

## 5. Requisitos Técnicos

### 5.1 Frameworks e Bibliotecas
- **Next.js** – Estrutura principal.
- **React Hook Form** – Validação de formulários.
- **Tailwind CSS** – Estilização minimalista e responsiva.
- **Framer Motion** – Animações sutis.
- **SWR** ou **React Query** – Caso haja integração futura com API.
- **Next/Image** – Otimização de imagens.
- **react-icons** – Ícones leves e escaláveis.
- **Swiper.js** – Carrossel de imagens.
- **Google Maps API** – Mapa interativo.

### 5.2 Performance
- Imagens otimizadas e lazy loading.
- Geração estática para carregamento rápido com `getStaticProps` ou `getServerSideProps`.
- SEO otimizado com **next/head**.

---

## 6. Design & UX

### 6.1 Paleta de Cores (Sugestão)
- **Branco** (#FFFFFF) – Fundo principal.
- **Cinza Claro** (#F5F5F5) – Áreas de destaque.
- **Azul Suave** (#A7C7E7) – Toques sutis para CTAs e links.
- **Cinza Escuro** (#333333) – Texto primário.

### 6.2 Tipografia
- **Título:** Sans-serif bold (ex.: Poppins ou Inter).
- **Texto:** Sans-serif regular para legibilidade.

### 6.3 Estilo Geral
- Layout **clean e arejado**.
- Animações leves em scroll.
- Botões com cantos arredondados e sombra suave.

---

## 7. Critérios de Sucesso
- Tempo de carregamento < 2s.
- Conversão mínima de leads: +5% em relação a campanhas anteriores.
- Pontuação Google Lighthouse > 90 em performance e acessibilidade.
- Compatibilidade com dispositivos móveis e desktop.
