from sqlmodel import SQLModel,Field
from typing import Optional

class User(SQLModel,table=True):
    user_id:Optional[int]=Field(None,primary_key=True)
    user_name:str
    email:str
    password:str

class Token(SQLModel,table=True):
    id:Optional[int]=Field(None,primary_key=True)
    refresh_token=str