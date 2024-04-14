from fastapi import FastAPI,Depends
from sqlmodel import SQLModel,Session,Field, create_engine,select
from contextlib import asynccontextmanager
from typing import Optional,Annotated
class Todo(SQLModel,table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    name: str = Field(index=True)
    

connection_string="postgresql://neondb_owner:2AGKMaPvf8nr@ep-late-firefly-a7k419pa.ap-southeast-2.aws.neon.tech/todo1?sslmode=require"

engine=create_engine(connection_string)

def onetimecreation():
    SQLModel.metadata.create_all(engine)

asynccontextmanager
async def Talha(app:FastAPI):
    print("ROWs")
    onetimecreation()
    yield

app=FastAPI(lifespan=Talha)

def crudSession():
    with Session(engine) as session:
        yield session

@app.get("/")
def get_func():
    return {"as","sawq"}

@app.get("/todo/")
def gettodo(session:Annotated[Session,Depends(crudSession)]):
    gettodolist=session.exec(select(Todo)).all()
    return gettodolist

@app.post("/todo/")
def postfunct(todo:Todo,session:Annotated[Session,Depends(crudSession)]):
    session.add(todo)
    session.commit()
    session.refresh(todo)
    return todo

@app.put("/todo/{id}")
def updatefunct(todo:Todo,session:Annotated[Session,Depends(crudSession)]):
    data=session.exec(select(Todo).where(Todo.id==todo.id)).one()
    data.name=todo.name
    session.add(data)
    session.commit()
    session.refresh(data)
    return data

@app.delete("/todo/{id}")
def deletefunct(todo:Todo,session:Annotated[Session,Depends(crudSession)]):
    data=session.exec(select(Todo).where(Todo.id==todo.id)).one()
    session.delete(data)
    session.commit()
    return data
