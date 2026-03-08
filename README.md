# Cloud Task Manager

Autor: Dominik Poltorak  
Repozytorium: https://github.com/poltorak-d/cloud-app

---

## Opis projektu

Cloud Task Manager to prosta aplikacja chmurowa do zarządzania zadaniami w modelu CRUD.  
Użytkownik może dodawać oraz usuwać zadania z listy.

Projekt wykorzystuje architekturę **3-warstwową**:

- warstwa prezentacji (frontend)
- warstwa logiki aplikacji (backend API)
- warstwa danych (baza danych)

Aplikacja została przygotowana do uruchamiania lokalnie przy użyciu **Docker Compose**.

---

## Architektura rozwiązania

Aplikacja składa się z trzech głównych komponentów:

### Frontend
React + Vite

Odpowiada za:
- interfejs użytkownika
- komunikację z backend API

### Backend
Node.js + Express

Odpowiada za:
- REST API
- obsługę zapytań aplikacji
- komunikację z bazą danych

### Baza danych
PostgreSQL

Odpowiada za:
- przechowywanie danych aplikacji

---

## Stos technologiczny

Frontend
- React
- Vite

Backend
- Node.js
- Express

Baza danych
- PostgreSQL

Konteneryzacja
- Docker
- Docker Compose

Repozytorium kodu
- GitHub

---

## Mapowanie na usługi Azure

| Warstwa systemu | Rozwiązanie lokalne | Usługa Azure |
|---|---|---|
| Frontend | React + Vite | Azure App Service |
| Backend | Node.js + Express | Azure App Service |
| Baza danych | PostgreSQL | Azure SQL |

---

## Struktura projektu

cloud-app/
frontend/
backend/
database/
docs/
README.md
docker-compose.yml

---

## Uruchomienie lokalne

W katalogu głównym projektu uruchom:

docker compose up --build

Po uruchomieniu aplikacja będzie dostępna pod adresami:

Frontend  
http://localhost:5173

Backend health check  
http://localhost:3000/api/health

---

## Status projektu

- [x] Artefakt 1: Architektura i przygotowanie projektu
- [x] Struktura katalogów
- [x] Diagram architektury C4
- [x] README projektu
- [x] Artefakt 2: Środowisko wielokontenerowe Docker
- [x] Backend API
- [x] Frontend React
- [x] Baza danych PostgreSQL
- [x] Uruchomienie aplikacji w Docker Compose