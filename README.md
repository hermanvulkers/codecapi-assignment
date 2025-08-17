# Weather App - CodeCapi Opdracht

Note: ik heb de eerste keer met m'n verkeerde git account gepushed, daarom twee contributors. sonobegit ben ik zelf, maar krijg het niet weg ;)

## Overzicht

Een eenvoudige weather app gebouwd met Next.js 15, TypeScript en de Open-Meteo API. De applicatie toont actuele weersinformatie en een 7-daagse verwachting voor steden wereldwijd.

## Technische Stack

- **Framework**: Next.js 15 met App router
- **Taal**: TypeScript met strict mode
- **Styling**: CSS Modules met CSS Variables
- **API**: Open-Meteo (weerinformatie & geocoding)
- **Testing**: Jest & React Testing Library

## Architecturale Beslissingen

### Server Components

Gebruik van React Server Components vanwege de performance en kleinere bundle size. De opdracht vroeg ook om SSR te gebruiken.

### Error Handling

Om eventuele API errors op te vangen heb ik een eenvoudige op root niveau error boundary toegevoegd via de `error.tsx` files van de App Router van Next. Specifiekere error handling mogelijk door ze op page niveau op te vangen.

### Loading

Loading state spinners zijn geïmplementeerd met `loading.tsx` bestanden, voor consistente en visueel aangename transities. Of het echt nodig is met deze korte laadtijden is de vraag. In ieder geval vind ik een spinner met deze laadtijden prettiger dan skeletons die visueel teveel drukte/flickering zouden geven. Laadtijden zouden in Next verder reduceerd kunnen worden door de bijv. de Links te prefetchen.

### CSS Variables

Kleuren heb ik gecentraliseerd in CSS variables (`variables.css`) voor betere onderhoudbaarheid en consistentie. Omwille van de scope en tijd beperkt tot de kleuren.

### Card Component met Composition Pattern

De Card component is gebouwd met het composition pattern waar ik in grotere codebases graag gebruik van maak en even wilde laten delen.

```tsx
<Card>
    <Card.Header>
        <Card.Title>Titel</Card.Title>
    </Card.Header>
    <Card.Content>Inhoud</Card.Content>
    <Card.Footer>Footer<Card.Footer>
</Card>
```

## Bewuste Keuzes

### ReactQuery

Bij een groter project zou ik ReactQuery gebruiken om data fetching en state management te structeren.

### Accessibility

Accessibility features heb ik aan gedacht, maar bewust niet meegenomen vanwege de scope van de opdracht.

### Geen State Management Library

Ik heb geen Context/Redux/Zustand toegevoegd, omdat ik client-side state niet nodig had. Ik kon uit de voeten met de server components en wilde het niet onnodig toevoegen.

### Type safety

Om het een beetje behapbaar te houden heb ik voor de API responses type assertion en guards gebruikt. Bij een echt project gaat m'n voorkeur uit naar door de backend gegenereerde types, of liever nog een OpenAPI spec, die als source of truth door zowel de backend en front wordt gebruikt om code te genereren.

## Testing

Unit tests zijn met hulp van Cursor toegevoegd voor alle helper functies en hooks.

## Scripts

```bash
npm run start      # Start development server en open browser automatisch
npm run dev        # Start development server (zonder browser te openen)
npm run build      # Build voor productie
npm run test       # Run unit tests
npm run lint       # Lint codebase
npm run typecheck  # TypeScript type checking
```

### Automatisch Browser Openen

Het `npm run start` commando start de development server en opent automatisch de browser op http://localhost:3000. Ik heb een minimaal scriptje toegevoegd en een aantal extra packages geïnstalleerd:

- `scripts/open-browser.mjs` dat de `open` package gebruikt
- `wait-on` om te wachten tot de server beschikbaar is
- `npm-run-all` om beide processen parallel te draaien

## Project Structuur

```
src/
├── app/                 # Next.js App Router
│   ├── location/[slug]/ # Dynamische locatie routes
│   ├── error.tsx        # Error boundary
│   ├── loading.tsx      # Loading state
│   └── variables.css    # CSS variabelen
├── components/
│   ├── ui/              # Herbruikbare UI componenten
│   │   └── Card/        # Composition pattern Card
│   ├── layout/          # Layout componenten
│   └── views/           # Page-specifieke views
├── config/              # Configuratie bestanden
│   └── api.ts           # API endpoints en settings
├── helpers/             # App-specifieke utility functies
├── hooks/               # Custom React hooks
├── services/            # API services
└── types/               # TypeScript definities
```
