import {
  DivNavbar,
  H1,
  DivTabelas,
  H4,
  DivTarefas,
  SairButton,
  DivSair,
  H3,
  DivModal,
  DivByTarefas,
} from "../styles/TrelloStyles";
import SpringModal from "../components/Modal";
import { validationSchemaCard } from "../schema/validationSchema";
import { useEffect, useState } from "react";
import axiosInstance from "../api/axiosConfig";
import CardTrello from "../components/CardTrello";
import { Button } from "@mui/material";

const Trello = () => {
  const [open, setOpen] = useState(false);
  const [titulo, setTitulo] = useState("");
  const [currentCardId, setCurrentCardId] = useState<string | null>(null);
  const [descricao, setDescricao] = useState("");
  const [contentCard, setContentCard] = useState([]);

  const handleOpen = (cardId: string) => {
    setCurrentCardId(cardId);
    const card = contentCard.find((card: any) => card._id === cardId);
    if (card) {
      setTitulo(card.title as string);
      setDescricao(card.content as string);
    } else {
      setTitulo("");
      setDescricao("");
    }
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setCurrentCardId(null);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await axiosInstance.get("/card");
      setContentCard(response.data);
      console.log(response);
    };

    fetchData();
  }, []);

  const handleSubmit = async () => {
    try {
    
      const newData = {
        title: titulo,
        content: descricao,
      };

      await validationSchemaCard.validate(newData);

     
      console.log(newData);

      
      if (currentCardId) {
        await axiosInstance.put(`/card/${currentCardId}`, newData);
      } else {
        await axiosInstance.post("/card", newData);
      }
      handleClose();
    } catch (error) {
      console.log("Erro ao receber os dados", error);
    }
  };

  

  const deleteCard = async (e: any) => {
    e.preventDefault;

    try {
      await axiosInstance.delete("/card");
    } catch (error) {
      console.log("Erro ao receber os dados", error);
    }
  };

  return (
    <>
      <DivNavbar>
        <H1>Trello</H1>
        <DivSair>
          <H4>Olá, Florality</H4>
          <SairButton to={"/"}>Sair</SairButton>
        </DivSair>
      </DivNavbar>
      <DivTabelas>
      <Button variant="contained" onClick={handleOpen} color="warning">Criar nova Tarefa</Button>
        <DivModal>
          {open && (
            <SpringModal
            handleClose={handleClose}
            handleSubmit={handleSubmit}
            open={open}
            setTitulo={setTitulo}
            setDescricao={setDescricao}
            titulo={titulo}
            descricao={descricao}
            isEditing={!!currentCardId}
            />
          )}
        </DivModal>
        <DivByTarefas>
          <DivTarefas>
            <H3>To Do</H3>
            <div>
              {contentCard.map((card: any) => (
                <CardTrello
                title={card.title}
                content={card.content}
                cardId={card._id}
                key={card._id}
                handleChange={handleOpen}
                deleteCard={deleteCard}
                />
              ))}
            </div>
          </DivTarefas>
          <DivTarefas>
            <H3>In Progress</H3>
          </DivTarefas>
          <DivTarefas>
            <H3>Done</H3>
          </DivTarefas>
        </DivByTarefas>
      </DivTabelas>
    </>
  );
};

export default Trello;
