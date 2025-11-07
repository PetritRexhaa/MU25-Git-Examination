# Reflektion – Git & Agilt (1–2 sidor)

## 1) Egen user story + Acceptance Criteria + INVEST

**Story:** Som <roll> vill jag <mål> så att <nytta>.
Som användare vill jag kunna lägga till nya uppgifter i min todo-lista så att jag enkelt kan planera vad jag behöver göra.

**Acceptance Criteria (checkboxar):**
- [x] Ett inputfält och en knapp för att lägga till uppgifter finns.
- [x] När jag klickar på knappen läggs en ny todo till överst i listan.
- [x] Om fältet är tomt visas ett felmeddelande.

**INVEST – kort motivering (2–4 meningar):**
Vilka av I, N, V, E, S, T uppfyller storyn och varför?

- **I**ndependent:   Funktionen är fristående och påverkar inte andra delar av koden.
- **N**egotiable:  Det går att justera utseende eller placering utan att ändra kärnfunktionen.
- **V**aluable:   Användaren får direkt nytta av att kunna skapa uppgifter.
- **E**stimable:  Lätt att uppskatta tidsåtgång (en enkel form och eventlistener). 
- **S**mall:  Funktionen är liten och fokuserad – bara en sak: lägga till todos.
- **T**estable:  Enkel att verifiera genom att testa att knappen fungerar.

## 2) Sprintmål + Definition of Done (DoD)
**Sprintmål:** (1–2 meningar)
Att färdigställa en fungerande Todo Lite-app med tre centrala funktioner: lägga till, markera och ta bort uppgifter, samt genomföra hela Git-flödet med PR, review och en merge-konflikt.

**DoD (checklista):**
- [x] Kod kör lokalt utan fel
- [x] PR granskad och godkänd (minst 1 review)
- [x] README uppdaterad
- [x] Issue/kort länkat och stängt vid merge

## 3) Retro: Start / Stop / Continue
- **Start:**  Börja skriva tydligare PR-beskrivningar med varför och hur ändringen gjordes, inte bara vad.
- **Stop:** (ex. stora PR över 300 rader…)
- **Continue:** Fortsätta använda tydliga branch-namn (t.ex. `feat/add-todo`, `feat/mark-complete`) och hålla PR:er små.

Minst **en** konkret förbättring du provar nästa sprint och *varför*.
Jag skapade en egen merge-konflikt i README.md för att öva på konfliktlösning och dokumentation.  
Det hjälpte mig förstå hur Git hanterar parallella ändringar och hur viktigt det är att kommunicera med teamet vid merge.
