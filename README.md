# Cloud Task Manager

by Dominik Półtorak  
nr studenta: 96221

## Opis projektu
Cloud Task Manager to aplikacja chmurowa do zarządzania zadaniami w modelu CRUD.
Użytkownik może dodawać, przeglądać, edytować i usuwać zadania.
Projekt jest rozwijany w architekturze 3-warstwowej i będzie uruchamiany lokalnie z wykorzystaniem Docker Compose.

## Stos technologiczny
- Front-end: React 19 + Vite
- Back-end: Node.js 24 + Express
- Baza danych (docelowo w Azure): Azure SQL
- Konteneryzacja: Docker, Docker Compose
- Repozytorium kodu: GitHub

## Architektura 3-warstwowa
- Presentation Layer – React
- Application Layer – Node.js + Express REST API
- Data Layer – Azure SQL

## Mapowanie na usługi Azure
| Warstwa systemu | Rozwiązanie projektowe | Usługa Azure |
|---|---|---|
| Front-end | React 19 + Vite | Azure App Service |
| Back-end | Node.js 24 + Express | Azure App Service |
| Baza danych | Relacyjna baza danych | Azure SQL |

## Struktura projektu
```text
cloud-app/
├── frontend/
├── backend/
├── database/
├── docs/
└── README.md