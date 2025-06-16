# 📄 Modèle JSON – Question d'audit avec système de scoring

Ce projet utilise un format JSON structuré pour représenter les questions d'audit. Chaque question peut être évaluée à l'aide d'un système de scoring pondéré, adapté à différents types de méthodologies (Agile, Kanban, Cycle en V, etc.).

---

## ✅ Structure d'une question

```json
{
  "id": "scrumRoles",
  "order": 1,
  "type": "select",
  "weight": 2,
  "label": "Les rôles Scrum (PO, SM, équipe) sont-ils bien définis ?",
  "options": ["Oui", "Partiellement", "Non"],
  "scoringType": "direct",
  "scoringWeights": [2, 1, 0]
}
```

---

## 🧩 Détails des propriétés

| Clé              | Type       | Description                                                                      |
| ---------------- | ---------- | -------------------------------------------------------------------------------- |
| `id`             | `string`   | Identifiant unique de la question.                                               |
| `order`          | `number`   | Ordre d’affichage dans le formulaire                                             |
| `type`           | `string`   | Type de champ (`text`, `select`, `radio`, etc.).                                 |
| `label`          | `string`   | Texte affiché à l’utilisateur.                                                   |
| `options`        | `string[]` | Liste des réponses possibles (requis pour `select` et `radio`).                  |
| `weight`         | `number`   | Poids de la question dans le calcul du score total.                              |
| `scoringType`    | `string`   | Méthode de calcul. Valeurs possibles : `"direct"` ou `"indirect"`.               |
| `scoringWeights` | `number[]` | Liste des scores associés aux options. L’ordre correspond à celui des `options`. |

## order number Ordre d’affichage dans le formulaire

## 🎯 Types de scoring

- **Direct** : Le score diminue avec la qualité décroissante des réponses (ex: `"Oui"` = 2, `"Non"` = 0).
- **Indirect** : Le score augmente avec la sévérité (ex: `"Oui"` = 0, `"Non"` = 2), utilisé dans les cas inversés.

---

## 🧮 Exemple de calcul de score

Si une question a :

- `weight: 2`
- `scoringType: "direct"`
- `scoringWeights: [2, 1, 0]`
- L'utilisateur choisit la 2e option : `"Partiellement"`

👉 **Score total = 1 (score brut) × 2 (poids) = 2**

---

## 🗃️ Exemple de bloc JSON complet

```json
{
  "id": "agileAudit",
  "title": "Audit spécifique à la méthodologie Agile",
  "questions": [
    {
      "id": "scrumRoles",
      "order": 1,
      "type": "select",
      "weight": 2,
      "label": "Les rôles Scrum (PO, SM, équipe) sont-ils bien définis ?",
      "options": ["Oui", "Partiellement", "Non"],
      "scoringType": "direct",
      "scoringWeights": [2, 1, 0]
    },
    {
      "id": "sprintsDefined",
      "order": 2,
      "type": "radio",
      "weight": 1,
      "label": "Les sprints sont-ils bien planifiés et suivis ?",
      "options": ["Oui", "Partiellement", "Non"],
      "scoringType": "direct",
      "scoringWeights": [2, 1, 0]
    }
  ]
}
```

---

## 🛠️ Bonnes pratiques

- Garder les `options` et `scoringWeights` synchronisés en nombre.
- Adapter le `weight` selon l’importance de la question.
- Choisir le bon `scoringType` selon le sens de la question.

---

## 🔗 Licence

Ce modèle est fourni sous licence MIT. Vous êtes libre de le modifier et de l’utiliser dans vos projets.

---

## ✉️ Contact

Pour toute question ou suggestion, n’hésitez pas à créer une issue ou un pull request.
