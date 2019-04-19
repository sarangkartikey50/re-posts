import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  card: {
    minWidth: 275,
    boxShadow: theme.boxShadow,
    background: theme.palette.background
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 10,
    fontFamily: 'Google Sans',
    color: theme.palette.text
  },
  pos: {
    marginBottom: 12,
  },
  customFont: {
      fontFamily: 'Google Sans',
      color: theme.palette.text
  },
  actionBlue: {
      color: theme.palette.primaryColor,
      fontFamily: 'Google Sans'
  }
})

function PostCard(props) {
  const { classes } = props;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Quote of the Day
        </Typography>
        <Typography className={classes.customFont} variant="h5" component="h4">
            { props.post.title }
        </Typography>
        <Typography className={classes.customFont} component="p">
            { props.post.body }
        </Typography>
      </CardContent>
      <CardActions>
        <Button className={classes.actionBlue} size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default withStyles(styles)(PostCard);
