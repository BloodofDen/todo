import React, { PureComponent } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import {
    TextField, List, ListItem, ListItemText, ListItemSecondaryAction, Checkbox
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import * as todoActions from '../../redux/todo/action';

import { ENTER_KEY } from './config';

import { IProps, IState } from './types';
import { Store } from '../../store/initialState';
import { ToDoItem } from '../../models/todo'

import styles, {
  ToDoListContainer, ToDoListWrapper, Heading,
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
    const { value } = this.state;
    const shouldAddItem = e.keyCode === ENTER_KEY && !e.shiftKey;

    if (shouldAddItem) {
      e.preventDefault();
      console.log(value);
      this.setState({ value: '' });
    }
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
          <List dense>
            {todos.map((todo: ToDoItem, index: number) => (
              <ListItem key={`${todo.id}`} button>
                <p>{index}. </p>
                <ListItemText id={`${todo.id}`} primary={todo.text} />
                <ListItemSecondaryAction>
                  <Checkbox
                    edge="end"
                    // onChange={handleToggle(value)}
                    // checked={checked.indexOf(value) !== -1}
                    inputProps={{ 'aria-labelledby': `${todo.id}` }}
                  />
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
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(styles)(ToDoList));
