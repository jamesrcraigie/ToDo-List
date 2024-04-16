import React from 'react';
import { Todo } from '../models/Todo';
import TodoCard from './TodoCard';
import { Droppable } from 'react-beautiful-dnd';

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
    completedTodos: Todo[];
    setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC = ({
    todos,
    setTodos,
    completedTodos,
    setCompletedTodos }
    : Props) => {
    return (
        <div className="container">
            <Droppable droppableId="TodosList">
            {
                (provided, snapshot) => (
                    <div
                        className={`todos ${snapshot.isDraggingOver ? "dragactive" : ""}`}
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        <span className="todos_heading">
                            Active Tasks
                        </span>
                        {
                            todos.map((todo, index) => (
                                <TodoCard
                                    index={index}
                                    todo={todo}
                                    todos={todos}
                                    setTodos={setTodos}
                                    key={todo.id}
                                />
                            ))
                        }
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
            <Droppable droppableId="TodosRemove">
            {
                (provided, snapshot) => (
                    <div
                        className={`todos remove ${snapshot.isDraggingOver ? "dragcomplete" : ""}`}
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        <span className="todos_heading">
                            Completed Tasks
                        </span>
                        {
                            completedTodos.map((todo, index) => (
                                <TodoCard
                                    index={index}
                                    todo={todo}
                                    todos={completedTodos}
                                    setTodos={setCompletedTodos}
                                    key={todo.id}
                                />
                            ))
                        }
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </div>
    )
};

export default TodoList;