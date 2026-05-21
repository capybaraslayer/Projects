from sqlalchemy import MetaData, create_engine, ForeignKey, CheckConstraint
from sqlalchemy import Table, Column, Integer, String, DATE, DateTime, Boolean
from datetime import datetime

# creez engine pentru data de baza
engine = create_engine("sqlite:///biblioteca.db")

metadata_obj = MetaData()

user_table = Table(
    "user",
    metadata_obj,
    Column("id", Integer, primary_key=True, autoincrement=True),
    Column("nume", String(20), nullable=False),
    Column("prenume", String(20), nullable=False),
    Column("date_nast", DATE, nullable=False),
    Column("email", String(20), nullable=False),
    Column("numar", String(20), nullable=False),
    Column("ban", DateTime, nullable=True),
)
imprumut_table = Table(
    "imprumuturi",
    metadata_obj,
    Column("id", Integer, primary_key=True, autoincrement=True),
    Column("data_imprumut", DateTime, default=datetime.now),
    Column("date_return", DateTime, nullable=True),
    Column("carte_id", ForeignKey("carte.id"), nullable=False),
    Column("user_id", ForeignKey("user.id"), nullable=False),
    Column("returnat", Boolean, default=0),
    Column(
        "zile_intarziere", Integer, CheckConstraint("zile_intarziere>=0"), default=0
    )
)
carte_table = Table(
    "carte",
    metadata_obj,
    Column("id", Integer, primary_key=True, autoincrement=True),
    Column("titlu", String(30), nullable=False),
    Column("lansare", DATE, nullable=False),
    Column("genre", String(20), nullable=False),
    Column("autor_id", ForeignKey("autor.id"), nullable=False),
    Column("stock", Integer, default=0),
)
autor_table = Table(
    "autor",
    metadata_obj,
    Column("id", Integer, primary_key=True, autoincrement=True),
    Column("nume", String(20), nullable=False),
    Column("prenume", String(20), nullable=False),
)
metadata_obj.create_all(engine)
