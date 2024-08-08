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
import { Button, Card } from "@mui/material";
import ModalDelete from "../components/ModalDelete";
import Stack from "@mui/material/Stack";
import Icon from "@mui/material/Icon";


interface Card {
  _id: string;
  title: string;
  content: string;
  description: string;
  column: string;
}

const Trello = () => {
  const [open, setOpen] = useState(false);
  const [titulo, setTitulo] = useState("");
  const [currentCardId, setCurrentCardId] = useState<string | null>(null);
  const [descricao, setDescricao] = useState("");
  const [contentCard, setContentCard] = useState<Card[]>([]);
  const [column, setColumn] = useState("TODO");
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [cardToDelete, setCardToDelete] = useState<string | null>(null);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setCurrentCardId(null);
    setOpen(false);
    setTitulo("");
    setDescricao("");
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await axiosInstance.get("/card");
      setContentCard(response.data);
      console.log(response);
      console.log("Todo o array:", contentCard);
    };
    fetchData();
  }, [currentCardId]);

  const handleEdit = async (cardId: string) => {
    handleOpen();
    try {
      setCurrentCardId(cardId);
      console.log("Resultado do id:", cardId);
      const card = contentCard.find((card: Card) => card._id === cardId);
      if (card) {
        setTitulo(card.title);
        setDescricao(card.content);
      }
    } catch (error) {
      console.log("Erro ao receber os dados", error);
    }
  };

  const handleSubmit = async () => {
    try {
      if (currentCardId) {
        await handleEdit(currentCardId);
        const updateData = {
          title: titulo,
          content: descricao,
        };
        await validationSchemaCard.validate(updateData);
        await axiosInstance.put(`/card/${currentCardId}`, updateData);
      } else {
        const newData = {
          title: titulo,
          content: descricao,
          column: "TODO",
        };

        await validationSchemaCard.validate(newData);
        console.log(newData);
       const response = await axiosInstance.post("/card", newData);
       console.log("Resposta da API:",response);
      }
      handleClose();
    } catch (error) {
      console.log("Erro ao receber os dados", error);
    }
  };

  const handleDeleteCard = async (cardId: string) => {
    setCardToDelete(cardId);
    setDeleteModalOpen(true);
  };

  const deleteCard = async () => {
    try {
     
      if(cardToDelete){
      await axiosInstance.delete(`/card/${cardToDelete}`);
      setContentCard(contentCard.filter((card: any) => card._id !== cardToDelete));
      }
      setDeleteModalOpen(false);
      setCardToDelete(null);
    } catch (error) {
      console.log("Erro ao deletar os dados", error);
    }
  };

  const moveCard = async (cardId: string, newColumn: string) => {
    try {
      console.log(contentCard);
      const updatedCard = contentCard.find((card) => card._id === cardId);
      console.log(updatedCard);
      if (updatedCard) {
        const updateCardData = {
          ...updatedCard,
          column: newColumn
        }
        await axiosInstance.put(`/card/${cardId}`, updateCardData);

      
        const updatedCards = contentCard.map((card) => {
          if (card._id === cardId) {
            return { ...card, column: newColumn };
          }
          return card;
        })
        console.log(updatedCards);
        // setColumn(newColumn);
        setContentCard(updatedCards);
      }
    } catch (error) {
      console.error("Erro ao mover o cartão:", error);
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
        <Button variant="contained" onClick={handleOpen} color="warning">
          <Stack direction={"row"} spacing={3}>
            <Icon>add</Icon>
          </Stack>
        </Button>
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
          <ModalDelete
        open={deleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        onConfirm={deleteCard}
        />
        </DivModal>
        <DivByTarefas>
          <DivTarefas>
            <H3>To Do</H3>
            <div>
              {contentCard
                .filter((card) => card.column === "TODO")
                .map((card: Card) => (
                  <CardTrello
                    title={card.title}
                    content={card.content}
                    cardId={card._id}
                    key={card._id}
                    column={card.column}
                    handleEdit={handleEdit}
                    moveCardLeft={() => moveCard(card._id, "TODO")}
                    deleteCard={() =>handleDeleteCard(card._id)}
                    moveCardRight={() => moveCard(card._id, "DOING")}
                  />
                ))}
            </div>
          </DivTarefas>
          <DivTarefas>
            <H3>Doing</H3>
            <div>
              {contentCard
                .filter((card) => card.column === "DOING")
                .map((card: Card) => (
                  <CardTrello
                    title={card.title}
                    content={card.content}
                    cardId={card._id}
                    key={card._id}
                    handleEdit={handleEdit}
                    column={card.column}
                    moveCardLeft={() => moveCard(card._id, "TODO")}
                    deleteCard={() =>handleDeleteCard(card._id)}
                    moveCardRight={() => moveCard(card._id, "DONE")}
                  />
                ))}
            </div>
          </DivTarefas>
          <DivTarefas>
            <H3>Done</H3>
            <div>
              {contentCard
                .filter((card) => card.column === "DONE")
                .map((card: Card) => (
                  <CardTrello
                    title={card.title}
                    content={card.content}
                    cardId={card._id}
                    key={card._id}
                    handleEdit={handleEdit}
                    column={card.column}
                    moveCardLeft={() => moveCard(card._id, "DOING")}
                    deleteCard={() =>handleDeleteCard(card._id)}
                    moveCardRight={() => moveCard(card._id, "DONE")}
                  />
                ))}
            </div>
          </DivTarefas>
        </DivByTarefas>
      </DivTabelas>
     
    </>
  );
};

export default Trello;
