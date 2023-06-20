import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

function BasicCard({header,content}){
    const cardStyles ={
        width:'1050px',
        position:'abslute',
        left:'50%',
        transform:'translateX(-50%)',
        borderRadius:'8px'
    }
    return(
        <Card sx={{cardStyles}}>
            {header}
            <CardContent>
                {content}
            </CardContent>
        </Card>
    )
}

export default BasicCard