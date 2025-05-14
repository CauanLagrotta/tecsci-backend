# ⚡ TecSci Backend - Monitoramento de Usinas Fotovoltaicas

Este projeto é parte do processo seletivo da TECSCI e tem como objetivo fornecer uma API para ingestão, armazenamento e análise de dados operacionais de usinas fotovoltaicas.

## 📋 Tecnologias Utilizadas

- Node.js + TypeScript
- Express (API REST)
- Prisma ORM
- PostgreSQL (via Docker)
- Zod (validação de dados)
- Docker Compose

## 📁 Estrutura do Projeto

```bash
📁 tecsci-backend
├── 📁 prisma            # Schema e seed do banco de dados
├── 📁 sample            # Arquivo de métricas simuladas (JSON)
├── 📁 src
│   ├── 📁 controllers   # Camada de controllers (Express)
│   ├── 📁 services      # Regras de negócio
│   ├── 📁 routes        # Rotas REST
│   ├── 📁 schemas       # DTOs e validações (Zod)
│   ├── 📁 utils         # Funções auxiliares (ex: cálculo de geração)
│   └── server.ts       # Ponto de entrada da API
├── docker-compose.yml
└── README.md
```

## 🚀 Como rodar o projeto
**1. Clone o repositório**
```bash
git clone https://github.com/CauanLagrotta/tecsci-backend.git
cd tecsci-backend
```

**2. Instale as dependencias**
```bash
npm install
```

**3. Configure o ambiente**
Crie o arquivo .env com a seguinte variável:
```bash
DATABASE_URL="postgresql://tecsci:tecsci@localhost:5432/tecsci-database?schema=public"
```

**4. Suba o banco com docker**
```bash
docker-compose up -d
```

**5. Rode as migrations**
```bash
npx prisma migrate dev
npx prisma generate
```

**6. Popule o banco de dados**
```bash
npm run seed
```

**7. Rode o projeto**
```bash
npm run dev
```

## 🧪 Endpoints disponíveis:
### 📌 CRUD - Usinas
- POST /usinas
- GET /usinas
- PUT /usinas/:id
- DELETE /usinas/:id

### ⚙️ CRUD - Inversores
- POST /inversores
- GET /inversores
- PUT /inversores/:id 
- DELETE /inversores/:id

### 📊 Métricas Operacionais
**🔹 Potência máxima por dia**
- GET /metricas/potencia-maxima
- Parâmetros: inversor_id, data_inicio, data_fim

**🔹 Temperatura média por dia**
- GET /metricas/temperatura-media
- Parâmetros: inversor_id, data_inicio, data_fim

**🔹 Geração da usina por período**
- GET /metricas/geracao-usina
- Parâmetros: usina_id, data_inicio, data_fim

**🔹 Geração do inversor por período**
- GET /metricas/geracao-inversores
- Parâmetros: inversor_id, data_inicio, data_fim

## 📥 Ingestão de Dados
O projeto consome o arquivo metrics.json localizado em /sample, contendo registros de leitura de inversores com as seguintes informações:

```json
{
  "inversor_id": 1,
  "potencia_ativa_watt": 5000,
  "temperatura_celsius": 40.5,
  "datetime": {
    "$date": "2023-01-01T12:00:00Z"
  }
}
```

A ingestão é feita via script:
```bash
npm run seed
```

## ✅ Boas práticas aplicadas
- Separação de camadas: controllers, services, schemas e utils

- DTOs com validação usando Zod

- Arquitetura escalável e modular

- Tratamento de erros com mensagens claras

- Uso correto dos verbos HTTP e códigos de status

- Docker para facilitar o setup local
