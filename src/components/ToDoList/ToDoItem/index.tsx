import React, { FunctionComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  ListItem, ListItemText, ListItemIcon,
  ListItemSecondaryAction, Checkbox, IconButton
} from '@material-ui/core';
import { Delete as DeleteIcon } from '@material-ui/icons';

import { IProps } from './types'

import styles, { OrderPoint } from './styles';

const ToDoItem: FunctionComponent<IProps> = ({
  item,
  order,
  onItemCheck,
  onItemDelete,
  classes,
}) => (
  <ListItem
    classes={{ container: classes.listItem }}
    disabled={typeof item.id === 'string'}
    button
  >
    {Boolean(order) && <OrderPoint>{order}.</OrderPoint>}
    <ListItemIcon>
      <Checkbox
        edge="end"
        inputProps={{ 'aria-labelledby': `${item.id}` }}
        checked={item.isDone}
        onChange={() => onItemCheck(item.id as number)}
      />
    </ListItemIcon>
    <ListItemText
      id={`${item.id}`}
      primary={item.text}
      className={item.isDone ? classes.strikeThrough : ''}
    />
    <ListItemSecondaryAction
      className={classes.secondaryAction}
    >
      <IconButton
        edge="end"
        aria-label="delete"
        title="Delete item"
        onClick={() => onItemDelete(item.id as number)}
        disabled={typeof item.id === 'string'}
      >
        <DeleteIcon />
      </IconButton>
    </ListItemSecondaryAction>
  </ListItem>
);

export default withStyles(styles as any)(ToDoItem);
