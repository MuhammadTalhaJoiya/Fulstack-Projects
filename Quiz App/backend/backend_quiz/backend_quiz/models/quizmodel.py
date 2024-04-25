from sqlmodel import SQLModel,Field
from typing import Optional

class Category(SQLModel,table=True):
    id:Optional[int]=Field(None,primary_key=True)
    name:str
    description:str

class Cat_level(SQLModel,table=True):
    id:Optional[int]=Field(None,primary_key=True)
    level:str
    cat_id:int=Field(int,foreign_key="category.id")

class Quiz(SQLModel,table=True):
    id:Optional[int]=Field(None,primary_key=True)
    question:str
    level_id:int=Field(int,foreign_key="cat_level.id")

class Choices(SQLModel,table=True):
    id:Optional[int]=Field(None,primary_key=True)
    choice_id:int=Field(int,foreign_key="quiz.id")
    choice:str
    status:bool