import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


interface BasicTextFieldsProps {
    title: string
    content: string
    cardId: string
    handleChange: (cardId: string) => void
    deleteCard: () => void

}

const CardTrello = ({title, content, handleChange,cardId,  deleteCard}: BasicTextFieldsProps)  => {
  return (
    <Card sx={{ width: 250, height: 200 }} >
      {/* <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      /> */}
      <CardContent>
        <Button size="small" onClick={() => handleChange(cardId)}>Editar</Button>
        <Typography gutterBottom variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={deleteCard}>Remover</Button>
        <Button size="small">Mudar coluna</Button>
      </CardActions>
    </Card>
  );
}

export default CardTrello