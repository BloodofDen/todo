import React, { PureComponent } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import {
    TextField, List, ListItem, ListItemText,
    ListItemIcon, ListItemSecondaryAction, Checkbox,
    IconButton
} from '@material-ui/core';
import { Delete as DeleteIcon } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';

import * as todoActions from '../../redux/todo/action';

import { ENTER_KEY } from './config';

import { IProps, IState } from './types';
import { Store } from '../../store/initialState';
import { ToDoItem } from '../../models/todo'

import styles, {
  ToDoListContainer, ToDoListWrapper, Heading,
  OrderPoint,
} from './styles';

class ToDoList extends PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      value: '',
    };

    props.ACTION_TODO_LIST_REQUESTED();
  }

  handleInputChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
  ): void => {
    const { value } = e.target;
    this.setState({ value });
  }

  handleKeyPressed = (
    e: React.KeyboardEvent<HTMLDivElement>,
  ): void => {
    const { value: text } = this.state;
    const { ACTION_ADD_TODO_ITEM_REQUESTED } = this.props;
    const shouldAddItem = e.keyCode === ENTER_KEY && !e.shiftKey;

    if (shouldAddItem) {
      e.preventDefault();

      ACTION_ADD_TODO_ITEM_REQUESTED(text.trim());
      this.setState({ value: '' });
    }
  }

  handleItemCheck = (toDoItemId: number) => {
    const { todos, ACTION_EDIT_TODO_ITEM_REQUESTED } = this.props;
    const { isDone, ...restTodoItem } = todos.find(todo => todo.id === toDoItemId) as ToDoItem;

    ACTION_EDIT_TODO_ITEM_REQUESTED({
      ...restTodoItem,
      isDone: !isDone,
    });
  }

  handleDeleteItem = (toDoItemId: number) => {
    const { ACTION_DELETE_TODO_ITEM_REQUESTED } = this.props;
    ACTION_DELETE_TODO_ITEM_REQUESTED(toDoItemId);
  }

  render() {
    const { value } = this.state;
    const { classes, todos } = this.props;

    return (
      <ToDoListContainer>
        <ToDoListWrapper>
          <Heading>To Do List</Heading>
          <TextField
            type="text"
            variant="outlined"
            label="Add new point here..."
            value={value}
            className={classes.textField}
            InputLabelProps={{
              classes: {
                root: classes.inputLabel,
              },
            }}
            multiline
            autoFocus
            fullWidth
            onChange={this.handleInputChange}
            onKeyDown={this.handleKeyPressed}
          />
          <List className={classes.list} dense>
            {todos.map((todo: ToDoItem, index: number) => (
              <ListItem
                key={`${todo.id}`}
                onClick={() => this.handleItemCheck(todo.id as number)}
                disabled={typeof todo.id === 'string'}
                button
              >
                <OrderPoint>{index + 1}.</OrderPoint>
                <ListItemIcon>
                  <Checkbox
                    edge="end"
                    inputProps={{ 'aria-labelledby': `${todo.id}` }}
                    checked={todo.isDone}
                    onChange={() => this.handleItemCheck(todo.id as number)}
                  />
                </ListItemIcon>
                <ListItemText id={`${todo.id}`} primary={todo.text} />
                <ListItemSecondaryAction>
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    title="Delete item"
                    onClick={() => this.handleDeleteItem(todo.id as number)}
                    disabled={typeof todo.id === 'string'}
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        </ToDoListWrapper>
      </ToDoListContainer>
    );
  }
}

const mapStateToProps = ({ toDoList: { items: todos } }: Store) => ({ todos });

const mapDispatchToProps = (dispatch: Dispatch) => ({
  ACTION_TODO_LIST_REQUESTED: () => {
    dispatch(todoActions.ACTION_TODO_LIST_REQUESTED());
  },
  ACTION_ADD_TODO_ITEM_REQUESTED: (text: string) => {
    dispatch(todoActions.ACTION_ADD_TODO_ITEM_REQUESTED(text));
  },
  ACTION_EDIT_TODO_ITEM_REQUESTED: (updatedToDoItem: ToDoItem) => {
    dispatch(todoActions.ACTION_EDIT_TODO_ITEM_REQUESTED(updatedToDoItem));
  },
  ACTION_DELETE_TODO_ITEM_REQUESTED: (toDoItemId: number) => {
    dispatch(todoActions.ACTION_DELETE_TODO_ITEM_REQUESTED(toDoItemId));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(styles as any)(ToDoList));
