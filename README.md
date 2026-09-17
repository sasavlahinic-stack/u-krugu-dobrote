# U krugu dobrote - lokalni prototip

Ovo je početni statični prototip projekta EIHV. Sadrži naslovnicu (`index.html`), podstranicu s rezultatima (`results.html`) i zajednički stil (`styles.css`). Nema baze podataka ni slanja obrazaca; primjer objava na stranici rezultata služi za provjeru izgleda i buduće strukture sadržaja.

## Pokretanje lokalno

Najjednostavnije je dvaput kliknuti `index.html`. Za pouzdaniji prikaz preko lokalnog poslužitelja, u ovoj mapi pokrenite:

```powershell
py -m http.server 8000
```

Zatim otvorite [http://localhost:8000](http://localhost:8000).

## Preporučena struktura za stvarni projekt

```text
u-krugu-dobrote/
├─ src/                  # stranice i komponente
├─ content/
│  ├─ schools/           # po jedna mapa za svaku školu
│  ├─ lessons/           # 10 tema i materijali lekcija
│  └─ results/           # objave nastale iz izvještaja
├─ public/
│  ├─ images/            # web-optimizirane fotografije
│  └─ downloads/         # obrasci i javni PDF materijali
├─ private/              # suglasnosti i administrativni dokumenti, izvan javnog repozitorija
└─ README.md
```

Za svaku buduću objavu preporučeni su: datum, škola, razred/dob bez identifikacijskih podataka djece, tema/vrijednost, kratak opis aktivnosti, opaženi učinci, citat uz izričito dopuštenje, fotografije i status uredničke provjere.

## Preporuka za administraciju

Za prototip i malu količinu objava dovoljan je statični site. Kad izvještaji počnu pristizati redovito, najjednostavnije održivo rješenje je **Astro + Markdown/Decap CMS**: objave ostaju tekstualne datoteke u repozitoriju, urednici ih mogu uređivati kroz web sučelje, a stranica se automatski objavljuje nakon provjere. Alternativa je WordPress na postojećem hostingu, ako EIHV već ima takvo administrativno okruženje.

Fotografije djece ne treba objavljivati bez provjerene suglasnosti. Obrazac izvještaja iz materijala izričito traži da se ne navode imena ni podaci po kojima bi se dijete moglo prepoznati; u CMS-u zato treba uvesti obavezni korak uredničke provjere prije objave.
