# 📚 Express Blog - Esercizi Completi

## 🌱 Esercizio 0: Express Blog Intro

**Repository:** `express-blog-intro`

### 🎯 Obiettivo
Creare la base del nostro blog personale che arricchiremo giorno dopo giorno con nuove funzionalità.

### 📋 Requisiti

#### 1. **🏗️ Progetto Base**
- Creare il progetto `express-blog-intro`
- Implementare rotta `/` che ritorna:
  ```
  "Server del mio blog"
  ```

#### 2. **📝 Array dei Post**
Creare un array con **almeno 5 post**, ogni post deve contenere:
- **📖 Titolo** - string
- **📄 Contenuto** - string  
- **🖼️ Immagine** - string (path/URL)
- **🏷️ Tags** - array di stringhe

```javascript
// Esempio struttura post
{
  titolo: "Il mio primo post",
  contenuto: "Contenuto del post...",
  immagine: "/images/post1.jpg",
  tags: ["javascript", "web development", "tutorial"]
}
```

#### 3. **📊 Rotta Bacheca**
- Endpoint: `/bacheca`
- Metodo: `GET`
- Risposta: **Oggetto JSON** con la lista dei post

#### 4. **🖼️ Asset Statici**
- Configurare Express per servire file statici
- Permettere visualizzazione immagini associate ai post
- Directory consigliata: `/public/images/`

#### 5. **🧪 Testing**
- Testare tutte le rotte con **Postman**
- Verificare che le immagini siano accessibili

### 💡 Suggerimenti Tecnici

```javascript
// Configurazione asset statici
app.use(express.static('public'));

// Struttura cartelle consigliata:
// public/
//   └── images/
//       ├── post1.jpg
//       ├── post2.jpg
//       └── ...
```

---

## 🚀 Esercizio 1: Express Blog Routing

**Repository:** `express-blog-routing`

### 🎯 Obiettivo
Creare un sistema di routing per un blog Express con operazioni CRUD complete.

### 📋 Requisiti Principali

#### 1. **Creazione del Router**
- Creare il file `routers/posts.js`
- Implementare le rotte per l'entità **post**
- Seguire le convenzioni **REST**

#### 2. **Operazioni CRUD da Implementare**

| Operazione | Metodo HTTP | Endpoint | Risposta Attesa |
|------------|-------------|----------|-----------------|
| **Index** | `GET` | `/posts` | "Lista dei post" |
| **Show** | `GET` | `/posts/:id` | "Dettagli del post {id}" |
| **Create** | `POST` | `/posts` | "Creazione nuovo post" |
| **Update** | `PUT` | `/posts/:id` | "Aggiornamento del post {id}" |
| **Delete** | `DELETE` | `/posts/:id` | "Cancellazione del post {id}" |

#### 3. **Registrazione Router**
- Registrare il router in `app.js`
- Utilizzare il prefisso `posts/`

> **📝 Nota:** Salvare l'array dei post fornito - servirà per i prossimi step!

### 🌟 Bonus

- ✅ **Rotta Index:** Restituire la lista dei post in formato JSON
- ✅ **Rotta Show:** Restituire un singolo post in formato JSON

---

## 🛠️ Esercizio 2: Express Blog - API CRUD (Parte 2)

**Repository:** `express-blog-api-crud`

### 📊 Milestone 1: Preparazione Postman

#### Configurazione della chiamata:
- 🎯 Endpoint per rotta **store**
- ⚙️ Verbo HTTP corretto
- 📄 **Body:** formato `raw` e `JSON`
- 📝 Oggetto rappresentante un nuovo post

> **⚠️ Importante:** Non includere l'`id` nella creazione - sarà generato dal server!

### 🔧 Milestone 2: Body Parser

#### Implementazione:
- Configurare il **body-parser** nell'app
- Aggiungere `console.log` nella rotta Store
- Testare la ricezione dei dati

### 💾 Milestone 3: Logica Store

#### Funzionalità:
- ➕ Implementare aggiunta nuovo post
- 📤 Preparare risposta adeguata
- 🧪 Test con Postman

### 🔄 Milestone 4: Rotta Update

#### Sviluppo:
- 🔁 Replicare il procedimento per Update
- ✏️ Abilitare modifica delle risorse esistenti

**Numero minimo di push:** `6`

### 🌟 Bonus Aggiuntivi

- ✅ Completare bonus del giorno precedente
- 🔍 **Controllo Update:** Verificare esistenza post
  - **404** se post non esistente
  - **JSON** per messaggi d'errore

---

## 🛡️ Esercizio 3: Express Blog - Middlewares

**Repository:** `express-blog-api-crud` *(stesso repository)*

### 🎯 Obiettivo Finale
Completare le API con middleware per gestione errori e rotte non trovate.

### 📋 Middleware da Implementare

#### 1. **🚫 Middleware Rotte Non Registrate**
```javascript
// Gestione 404 - Endpoint inesistenti
// Risposta con messaggio e status appropriato
```

#### 2. **⚠️ Middleware Gestione Errori**
```javascript
// Gestione errori generali
// Risposta con messaggio e status appropriato
```

### 🔢 Deliverable
**Numero minimo di push:** `4`

---

## 📚 Riepilogo Tecnico

### 🏗️ Struttura Progetto
```
express-blog-routing/
├── app.js
├── routers/
│   └── posts.js
└── data/
    └── posts.js (array fornito)
```

### 🔗 Convenzioni REST Utilizzate
- **GET** `/posts` → Elenco completo
- **GET** `/posts/:id` → Singola risorsa  
- **POST** `/posts` → Creazione
- **PUT** `/posts/:id` → Aggiornamento completo
- **DELETE** `/posts/:id` → Eliminazione

### 🛠️ Tecnologie Coinvolte
- **Express.js** - Framework web
- **Body-parser** - Parsing request body
- **Postman** - Testing API
- **Middleware** - Gestione errori e routing

---

## 🎉 Conclusioni

Buon lavoro e buon divertimento! 

*Buona Pasqua e buona Pasquetta - ci vediamo Martedì!* 🐰