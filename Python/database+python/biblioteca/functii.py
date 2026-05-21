import csv
from sqlalchemy import engine, insert, select, and_, update, text, update
from tables import user_table, imprumut_table, carte_table, autor_table, engine
from datetime import datetime, timedelta, date
import re
from tabulate import tabulate


# functie pentru validarea a emailurilor
def valideaza_email(email):
    pattern = r"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
    return re.match(pattern, email) is not None


# functie pentru a valida numere din moldova
def valideaza_telefon_md(telefon):
    pattern = r"^(\+373|0)(6[0-9]|7[6-9])\d{6}$"
    return re.match(pattern, telefon) is not None


# functie pentru a popula tabele users ,autori si carti
def populare_tables():

    with open("carti.csv", "r") as f:
        reader = csv.DictReader(f)
        for row in reader:
            rows = [
                {
                    "id": int(row["id"]),
                    "titlu": row["titlu"],
                    "lansare": datetime.strptime(row["lansare"], "%Y-%m-%d"),
                    "genre": row["genre"],
                    "autor_id": row["autor_id"],
                    "stock": int(row["stock"]),
                }
            ]
            with engine.begin() as conn:
                conn.execute(insert(carte_table).prefix_with("or ignore"), rows)
    with open("users.csv", "r") as f:
        reader = csv.DictReader(f)
        for row in reader:
            rows = [
                {
                    "id": int(row["id"]),
                    "nume": row["nume"],
                    "prenume": row["prenume"],
                    "date_nast": datetime.strptime(row["date_nast"], "%Y-%m-%d"),
                    "email": row["email"],
                    "numar": row["numar"],
                }
            ]
            with engine.begin() as conn:
                conn.execute(insert(user_table).prefix_with("or ignore"), rows)
    with open("autori.csv", "r") as f:
        reader = csv.DictReader(f)
        for row in reader:
            rows = [
                {
                    "id": int(row["id"]),
                    "nume": row["nume"],
                    "prenume": row["prenume"],
                }
            ]
            with engine.begin() as conn:
                conn.execute(insert(autor_table).prefix_with("or ignore"), rows)


# functii pentru a introduce userii
def introdu_user(prenume, nume):
    while True:
        date_nast = input("Care este ziua ta de nastere").strip()
        email = input("Care iti este emailu:").strip()
        numar = input("Care iti este numaru:").strip()
        if not valideaza_email(email):
            print("Email invalid! Incearca din nou.")
            continue
        if not valideaza_telefon_md(numar):
            print("Numar invalid! Ex: 060123456")
            continue
        break
    with engine.begin() as conn:
        result = conn.execute(
            insert(user_table)
            .prefix_with("or ignore")
            .values(
                nume=nume,
                prenume=prenume,
                date_nast=datetime.strptime(date_nast, "%Y-%m-%d"),
                email=email,
                numar=numar,
            )
        )
        result_id = conn.execute(
            select(user_table.c.id).where(
                and_(user_table.c.nume == nume, user_table.c.prenume == prenume)
            )
        ).scalar()
    return result_id


# functie care arata toate imprumutile unui user:
def view_user(nume, prenume):
    inter = (
        select(
            user_table.c.id,
            user_table.c.nume,
            user_table.c.prenume,
            carte_table.c.id,
            carte_table.c.titlu,
        )
        .select_from(user_table)
        .join(imprumut_table, user_table.c.id == imprumut_table.c.user_id)
        .join(carte_table, carte_table.c.id == imprumut_table.c.carte_id)
        .where(
            and_(
                user_table.c.nume == nume,
                user_table.c.prenume == prenume,
                imprumut_table.c.returnat == 0,
            )
        )
    )
    with engine.begin() as conn:
        result = conn.execute(inter)
        rows = result.mappings().all()
        if not rows:
            return None, []

        tabel = tabulate(rows, headers="keys", tablefmt="rounded_outline")

    return tabel, rows


# functie care arata la cine a fost cartea:
def view_carte():
    titlu = input("Introdu titlu carti:").strip()
    inter = (
        select(
            carte_table.c.id,
            carte_table.c.titlu,
            user_table.c.nume,
            user_table.c.prenume,
        )
        .select_from(user_table)
        .join(imprumut_table, user_table.c.id == imprumut_table.c.user_id)
        .join(carte_table, carte_table.c.id == imprumut_table.c.carte_id)
        .where(carte_table.c.titlu == titlu)
    )
    with engine.begin() as conn:
        result = conn.execute(inter)
        rows = result.mappings().all()
        print(tabulate(rows, headers="keys", tablefmt="rounded_outline"))


# functie care returneaza cartea
def return_carte():
    while True:

        nume, prenume = (
            input("Cum te numesti:").strip(),
            input("Care este familia ta:").strip(),
        )
        tabel, rows = view_user(nume, prenume)
        if not rows:
            print("Acest user nu exista sau nu a imprumutat nicio carte!")
            continue

        break

    print(tabel)
    carte_id = input("Introdu id-ul cartii pe care doresti sal returnezi:").strip()

    update_imprumut = (
        update(imprumut_table)
        .where(
            and_(
                imprumut_table.c.user_id == rows[0]["id"],
                imprumut_table.c.carte_id == carte_id,
            )
        )
        .values(
            {
                "returnat": 1,
            }
        )
    )
    with engine.begin() as conn:
        conn.execute(update_imprumut)
        inter = (
            select(carte_table.c.titlu)
            .select_from(carte_table)
            .join(imprumut_table, carte_table.c.id == imprumut_table.c.carte_id)
            .where(carte_table.c.id == carte_id)
        )
        result = conn.execute(inter).mappings().first()
        print(f"Mersi pentru ca ati ales sa returnati cartea {result['titlu']} ")


# functie pentru a imprumuta
def imprumuta_carte():
    nume, prenume = (
        input("Cum te numesti:").strip(),
        input("Care este familia ta:").strip(),
    )
    titlu = input("Ce carte doresti sa imprumuti:")
    update_stock = (
        update(carte_table)
        .where(carte_table.c.titlu == titlu)
        .values({carte_table.c.stock: carte_table.c.stock - 1})
    )
    with engine.begin() as conn:
        user_id = conn.execute(
            select(user_table.c.id).where(
                and_(user_table.c.nume == nume, user_table.c.prenume == prenume)
            )
        ).scalar()
        carte_id = conn.execute(
            select(carte_table.c.id).where(
                and_(carte_table.c.titlu == titlu, carte_table.c.stock > 0)
            )
        ).scalar()
        if not user_id:
            print("!!!!Nu exista acest user in baza de date!!!!")
            if input("Doresti sa te adaugam in baza de date:").lower() == "da":
                user_id = introdu_user(prenume, nume)
            else:
                print("Ne a facut placere!")
                return
        if not carte_id:
            print("Nu exista acesta carte sau nu este in stock")
            return

        conn.execute(update_stock)
        insert_imprumut = conn.execute(
            insert(imprumut_table).values(
                date_return=datetime.now() + timedelta(days=14),
                carte_id=carte_id,
                user_id=user_id,
                returnat=False,
            )
        )


def actualizeaza_intarziere(imprumut_id):
    select_id = select(imprumut_table).where(imprumut_table.c.id == imprumut_id)
    with engine.begin() as conn:
        resultat = conn.execute(select_id).mappings().first()
        zile_intarzire = resultat["date_return"] - datetime.now()
        print()
        print(zile_intarzire)


# functie care penalizeaza pe cineva cu ban permanent(sterge din baza de date) daca ai intarziat o saptama de a da cartea primesti ban o saptama de la imprumutat carti
def penalizare(user_id, zile_intarziere):
    pass


# with engine.begin() as conn:
#     #     #     #     #     conn.execute(text("DROP TABLE autor"))
#     #     #     #     #     conn.execute(text("DROP TABLE carte"))
#     conn.execute(text("DROP TABLE imprumuturi"))
#     conn.execute(text("DROP TABLE user"))

# imprumuta_carte()
# with engine.begin() as conn:
#     result = conn.execute(
#         select(user_table).where(user_table.c.nume == "Catalin")
#     ).all()
#     print(result)
# with engine.connect() as conn:
#     result = conn.execute(select(user_table)).fetchall()
#     for row in result:
# #         print(row)
# view_user()
# view_carte()
# return_carte()
# with engine.begin() as conn:
#     conn.execute(text('alter table imprumut_table add column zile_intarziere integer default 0 '))
# populare_tables()
# imprumuta_carte()
# return_carte()
actualizeaza_intarziere(1)
