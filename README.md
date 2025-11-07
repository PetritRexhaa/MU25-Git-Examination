# ✅ Todo Lite

Todo Lite är en enkel men effektiv webbapplikation för att hantera uppgifter.  
Användaren kan lägga till nya todos, markera dem som klara eller oklara, och ta bort dem direkt från listan.  
Applikationen är byggd i ren HTML, CSS och JavaScript .

---

###  Hur man kör projektet!

För att köra Todo Lite lokalt behöver du bara öppna filen `starter/index.html` i din webbläsare.  

Om du använder **Visual Studio Code** rekommenderas **Live Server** –  

---

###  Funktioner i projektet.

Projektet består av tre huvudfunktioner som tillsammans utgör en komplett todo-applikation:

1. **Lägg till uppgift**  
   Användaren skriver en text i input-fältet och klickar på “Lägg till”.  
   En ny todo-rad skapas direkt och visas överst i listan.

2. **Markera klar/oklar**  
   Varje todo har en knapp för att markera om uppgiften är klar.  
   När man klickar på “Klar” blir texten genomstruken och ljusare.  
   Klickar man igen ändras den tillbaka till “Oklart”.

3. **Ta bort uppgift**  
   En “Ta bort”-knapp finns bredvid varje todo.  
   Klickar man på den tas raden bort direkt.

Dessa tre funktioner utgör kärnan i applikationen och fungerar tillsammans för att skapa ett enkelt och snabbt arbetsflöde.

---

###  User stories och Acceptance Criteria

**US1 – Lägg till todo**  
Som användare vill jag kunna lägga till en todo så att jag kan planera mina uppgifter.  
**AC:** Input + knapp finns. När jag lägger till en todo visas den överst i listan.

**US2 – Markera klar/oklar**  
Som användare vill jag kunna markera en todo som klar eller oklar för att se vad som är gjort.  
**AC:** En knapp växlar mellan “Klar” och “Oklart” samt ändrar utseende på texten.

**US3 – Ta bort todo**  
Som användare vill jag kunna ta bort en todo för att hålla listan ren och uppdaterad.  
**AC:** En “Ta bort”-knapp finns och raden försvinner direkt när man klickar.

---

###  Git-flöde

Jag arbetade enligt ett tydligt feature-branch-flöde där varje funktion utvecklades i en egen branch:
- `feat/us1-add-todo`
- `feat/us2-toggle-done`
- `feat/us3-delete-todo`

Varje branch skapades utifrån `main`, utvecklades och pushades upp till GitHub.  
Där öppnades en **Pull Request (PR)** med en tydlig beskrivning och länk till motsvarande Trello-kort.  
 

---

###  Mergekonflikt


---

###  Reflektion

Genom projektet har jag arbetat stegvis och fokuserat på små, hanterbara delar.  
Att jobba feature-för-feature gjorde det enkelt att hålla koll på vad som var färdigt och vad som återstod.  
Jag tycker resultatet blev en enkel men komplett todo-applikation som fungerar stabilt och har tydlig kod.  

Om jag skulle vidareutveckla projektet skulle jag vilja lägga till filtrering (Visa alla / Klara / Aktiva)  
och spara todos i **localStorage** så att listan finns kvar även efter att sidan laddas om.  

---

###  Länkar:

**Trello-bräda:** 
 https://trello.com/b/eHFM9pw4/mu25-examination

**Mina reviews:**  
- Given:  
- Mottagen: 

---

###  Testning

Jag har testat projektet manuellt i webbläsaren.  
För varje ny feature har jag lagt till flera todos, testat att markera dem klara och sedan ta bort dem.  
Jag har även testat olika scenarion, som att lägga till tomma värden (vilket förhindras med en varning).  
Allt fungerar stabilt och uppdateras direkt i DOM:en utan laddning.

