# Upute za pregled beta stranice

## Na istom računalu

1. Otvorite mapu projekta.
2. Pokrenite PowerShell u toj mapi.
3. Pokrenite:

```powershell
py -m http.server 8765
```

4. U pregledniku otvorite [http://localhost:8765](http://localhost:8765).
5. Za naslovnicu otvorite `index.html`, a za rezultate `results.html`.

Prozor PowerShella mora ostati otvoren dok se stranica pregledava. Poslužitelj se zaustavlja pritiskom na `Ctrl+C`.

## Pregled za druge članove upravnog odbora

Adresa `localhost` radi samo na računalu na kojem je poslužitelj pokrenut. Za udaljeni pregled potrebno je beta verziju objaviti na hostingu. Najjednostavnije opcije su:

- Netlify Drop za brzi privremeni pregled
- GitHub Pages za verzioniranu beta stranicu
- postojeći EIHV hosting, ako podržava statične HTML datoteke

Prije javnog slanja treba zamijeniti ogledne objave stvarnim sadržajem, potvrditi popis škola i provjeriti suglasnosti za svaku fotografiju.
