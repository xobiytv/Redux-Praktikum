import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ArticleServise from '../service/article'
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Typography } from '@mui/material';

export default function ArticleCard({item, getArtiles}) {
    const navigate = useNavigate()
    const { loggedIn, user } = useSelector(state => state.auth)

    const deletAricle = async slug => {
        try{
          await ArticleServise.deletArticle(slug)
          getArtiles()
        }catch(error){
          console.log(error);
        }
      }
  return (
    <div className='w-3/12 '>


    <Card key={item.id}
      sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
    >
      <CardMedia
        component="div"
        sx={{
          // 16:9
          pt: '56.25%',
        }}
        image={item.author.image}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h2">
          {item.title}
        </Typography>
        <Typography>
          {item.description}
        </Typography>
      </CardContent>
      <CardActions>
        {loggedIn && user.username === item.author.username && (
          <>
            <Button onClick={() => navigate(`/edit-article/${item.slug}`)} variant="outlined" size="small">Edit</Button>
            <Button onClick={() => deletAricle(item.slug)} variant="outlined" color="error" size="small">Delet</Button>
          </>

        )}
        <Button onClick={() => navigate(`/article/${item.slug}`)} variant="outlined" size="small">View</Button>

      </CardActions>
    </Card>
  </div>
  )
}
