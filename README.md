# Cloud Task Manager

Autor: Dominik Poltorak
Repozytorium: https://github.com/poltorak-d/cloud-app

---

## Opis projektu

Cloud Task Manager to aplikacja chmurowa do zarządzania zadaniami w modelu CRUD.
Użytkownik może dodawać oraz usuwać zadania z poziomu aplikacji webowej.

Projekt został rozwinięty do architektury chmurowej i wdrożony z wykorzystaniem usług AWS.

---

## Architektura rozwiązania

Aplikacja składa się z trzech głównych warstw:

### Frontend

React + Vite

* interfejs użytkownika
* komunikacja z backend API

### Backend

Node.js + Express

* REST API
* logika aplikacji
* komunikacja z bazą danych

### Baza danych

PostgreSQL

* przechowywanie danych aplikacji

---

## Stos technologiczny

Frontend:

* React
* Vite

Backend:

* Node.js
* Express

Baza danych:

* PostgreSQL

DevOps:

* Docker
* Docker Compose
* AWS (RDS, EC2)

Repozytorium:

* GitHub

---

## Architektura chmurowa (AWS)

| Warstwa systemu | Rozwiązanie lokalne | AWS            |
| --------------- | ------------------- | -------------- |
| Frontend        | React + Vite        | lokalnie (dev) |
| Backend         | Node.js + Express   | EC2            |
| Baza danych     | PostgreSQL          | AWS RDS        |

---

## Wdrożenie w chmurze

### Baza danych (AWS RDS)

* PostgreSQL
* dostęp zabezpieczony przez Security Group (firewall)
* dostęp tylko z wybranych adresów IP

### Backend (AWS EC2)

* Node.js uruchomiony na serwerze Ubuntu
* dostęp publiczny przez:
  http://3.236.128.77:8081/api/health

### Frontend

* uruchamiany lokalnie (Vite)
* korzysta z produkcyjnego API (AWS EC2)

---

## Struktura projektu

cloud-app/
├── frontend/
├── backend/
├── database/
├── docs/
├── README.md
└── docker-compose.yml

---

## Uruchomienie lokalne

W katalogu głównym projektu:

docker compose up --build

Frontend:
http://localhost:5173

Backend:
http://localhost:8081/api/health

---

## Uruchomienie z backendem AWS

W pliku `frontend/.env`:

VITE_API_URL=http://3.236.128.77:8081

---

## Funkcjonalności

* wyświetlanie listy zadań
* dodawanie zadań (React UI)
* usuwanie zadań
* REST API
* DTO (oddzielenie modelu od API)
* migracje bazy danych
* trwałość danych (Docker volume)
* integracja z bazą w chmurze (AWS RDS)

---

## Status projektu

* [x] Artefakt 1: Architektura
* [x] Artefakt 2: Docker
* [x] Artefakt 3: Frontend
* [x] Artefakt 4: Backend API
* [x] Artefakt 5: Gotowość do chmury
* [x] Artefakt 6: Wdrożenie w chmurze (AWS)
