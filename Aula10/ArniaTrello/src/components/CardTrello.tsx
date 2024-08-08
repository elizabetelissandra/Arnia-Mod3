import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CreateRoundedIcon from "@mui/icons-material/CreateRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
import ArrowCircleLeftRoundedIcon from "@mui/icons-material/ArrowCircleLeftRounded";
import { DivTitle } from "../styles/CardTrelloStyles";

interface BasicTextFieldsProps {
  title: string;
  content: string;
  cardId: string;
  handleEdit: (cardId: string) => void;
  deleteCard: (cardId: string) => void;
  moveCardLeft: (cardId: string) => void;
  moveCardRight: (cardId: string) => void;
  column: string;
}

const CardTrello = ({
  title,
  content,
  handleEdit,
  cardId,
  deleteCard,
  moveCardLeft,
  moveCardRight,
  column
}: BasicTextFieldsProps) => {
  return (
    <Card
      sx={{
        width: 350,
        height: 200,
        mb: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      {/* <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      /> */}
      <CardContent sx={{display: "flex", flexDirection: "column", justifyContent: "space-between"}} >
        
        <DivTitle>
          <Typography gutterBottom variant="h6" component="div" sx={{textAlign: "center"}}>
            {title}
          </Typography>
          <Button
            size="small"
            color="warning"
            onClick={() => handleEdit(cardId)}
          >
            <CreateRoundedIcon />
          </Button>
        </DivTitle>
        <Typography variant="body2" color="text.secondary" sx={{textAlign: "left"}}>
          {content}
        </Typography>
      </CardContent>
      <CardActions style={{display: "flex", justifyContent: "flex-end" }}>
       {column !== "TODO"  && (
         <Button size="small" color="warning" onClick={() => moveCardLeft(cardId)}>
         <ArrowCircleLeftRoundedIcon />
       </Button>
       )}
        <Button size="small" color="warning" onClick={() => deleteCard(cardId)}>
          <DeleteRoundedIcon />
        </Button>
        {column !== "DONE"  &&  (
          <Button size="small" color="warning" onClick={() => moveCardRight(cardId)}>
          <ArrowCircleRightRoundedIcon />
        </Button>
        )}
        
      </CardActions>
      ;
    </Card>
  );
};

export default CardTrello;
