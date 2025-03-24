# Numlingo - Votre Convertisseur de Nombres en Lettres (Français)

Une petite librairie TypeScript qui permet de convertir des nombres entiers en lettres en français 🇫🇷.

---

## Installation

### Package manager

npm:

```bash
$ npm install numlingo
```

bower:

```bash
$ bower install numlingo
```

yarn:

```bash
$ yarn add numlingo
```

pnpm:

```bash
$ pnpm add numlingo
```
Une fois la librairie installée, vous pouvez importer la bibliothèque à l'aide de la commande `import` ou `require`:

## Utilisation

#### `convertNumberToLetter(nb: number): string`

Convertit le nombre entier passé en paramètre en lettre

- **Paramètres**:
    - `nb (number)` Le nombre entier positif à convertir.
- **Retourne** : La version textuelle en français du nombre.

- **Exception** : Lance une TypeError si l'argument n’est pas un entier positif.

**Exemple** :

```typescript
import { convertNumberToLetter } from 'numlingo';

convertNumberToLetter(1234); // mille deux cent trente-quatre
```

## Licence

MIT - Utilisation libre et gratuite