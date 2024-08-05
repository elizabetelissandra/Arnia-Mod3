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

interface HandleChangeProps{
  e: React.ChangeEvent<HTMLSelectElement>
  cardId: string
}

const Trello = () => {
  const [open, setOpen] = useState(false);
  const [itemToRemove, setItemToRemove] = useState<number | null>(null)
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [contentCard, setContentCard] = useState([]);

  const handleOpen = (cardId: string) => {cardId && setOpen(true)} ;
  const handleClose = () => setOpen(false);

  useEffect(() => {
      const fetchData = async () => {
        const response = await axiosInstance.get("/card");
        setContentCard(response.data);
        console.log(response);
      }

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
      await axiosInstance.post("/card", newData);

      handleClose();
    } catch (error) {
      console.log("Erro ao receber os dados", error);
    }
  };

  const handleChange = async ({e, cardId}: HandleChangeProps) => {
    handleOpen(cardId)
    setTitulo(e.target.value)
    setDescricao(e.target.value)
    try {
      
      const newData = {
        title: titulo,
        content: descricao,
      };
      await validationSchemaCard.validate(newData);
      console.log(newData);

      await axiosInstance.put(`/card/${cardId}`, newData);
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
  }

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
        <DivModal>
          { open && <SpringModal
            handleOpen={handleOpen}
            handleClose={handleClose}
            handleSubmit={handleSubmit}
            open={open}
            setTitulo={setTitulo}
            setDescricao={setDescricao}
          />}
        </DivModal>
        <DivByTarefas>
        <DivTarefas>
          <H3>To Do</H3>
          <div>{contentCard.map((card: any) => <CardTrello title={card.title} content={card.content} key={card._id} cardId={card._id}  handleChange={() => () => handleChange(card._id)} deleteCard={deleteCard}/>)}</div>
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
