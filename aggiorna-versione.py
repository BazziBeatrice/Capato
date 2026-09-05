#!/usr/bin/env python3
"""
Cache busting per il sito Capato.

Aggiunge (o aggiorna) un numero di versione a tutti i CSS e JS locali
richiamati nelle pagine HTML, per esempio:

    <link href="css/main.css?v=20260905" ...>
    <script src="../js/main.js?v=20260905"></script>

Quando cambia il numero di versione il browser considera il file come nuovo
e lo riscarica: non serve piu' svuotare la cache a mano dopo il rilascio.

USO
    python3 aggiorna-versione.py            -> usa la data di oggi (es. 20260905)
    python3 aggiorna-versione.py 20260905b  -> usa una versione scelta da te

Da lanciare SEMPRE prima di caricare i file su Aruba.
"""

import datetime
import pathlib
import re
import sys

# Cartella in cui si trova questo script = radice del sito
ROOT = pathlib.Path(__file__).resolve().parent

# Cartelle da ignorare
SKIP_DIRS = {"node_modules", ".git", "inutili"}

# href="css/main.css"  oppure  src="../js/main.js"  (eventuale ?v=... gia' presente)
PATTERN = re.compile(
    r'(?P<attr>\b(?:href|src)=")'
    r'(?P<path>(?:\.\./)*(?:css|js)/[^"?#]+\.(?:css|js))'
    r'(?:\?[^"#]*)?'
    r'(?P<end>")'
)


def versione_da_argomenti():
    if len(sys.argv) > 1:
        return sys.argv[1]
    return datetime.date.today().strftime("%Y%m%d")


def file_html():
    for percorso in sorted(ROOT.rglob("*.html")):
        if SKIP_DIRS & set(percorso.relative_to(ROOT).parts):
            continue
        yield percorso


def main():
    versione = versione_da_argomenti()
    totale = 0

    for percorso in file_html():
        testo = percorso.read_text(encoding="utf-8")
        nuovo, quanti = PATTERN.subn(
            lambda m: f'{m.group("attr")}{m.group("path")}?v={versione}{m.group("end")}',
            testo,
        )
        if nuovo != testo:
            percorso.write_text(nuovo, encoding="utf-8")
            print(f'{percorso.relative_to(ROOT)}: {quanti} file aggiornati')
            totale += quanti

    print(f"\nVersione impostata a v={versione} ({totale} riferimenti in totale).")
    print("Ora ricarica su Aruba TUTTI i file .html insieme ai css/js modificati.")


if __name__ == "__main__":
    main()
