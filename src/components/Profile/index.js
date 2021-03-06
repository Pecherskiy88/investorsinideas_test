import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import { userDataSelector } from '../../redux/selectors';
import { removeUser } from '../../redux/actions';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';

import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: '0 auto',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

const RecipeReviewCard = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const userData = useSelector((state) => userDataSelector(state));

  const { imageUrl, name, email } = userData;

  const onLogout = () => {
    localStorage.removeItem('googleId');
    localStorage.removeItem('user');
    dispatch(removeUser());
    history.push('/');
  };
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            <img src={imageUrl || ''} alt="avatar" />
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={`${name || ''}`}
        subheader={email || ''}
      />
      <CardMedia
        className={classes.media}
        image={imageUrl || ''}
        title="Paella dish"
      />
      <Button color="primary" onClick={onLogout}>
        Logout
      </Button>
    </Card>
  );
};

export default RecipeReviewCard;
