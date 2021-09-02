import React from 'react'
import { useQuery } from 'react-query'
import { isUndefined } from '../../utils/type-guard'
import fetchTodos from './api/fetch-todo'

const Todos = () => {
  const { isLoading, data: todos, isError } = useQuery('todos', fetchTodos)

  if (isLoading) {
    return <div>로딩 중...</div>
  }

  if (isError) {
    return <div>에러 발생</div>
  }

  return (
    <div>
      {!isUndefined(todos) && todos.map((todo) => {
        return (
          <>
            <li>{todo.title}</li>
          </>
        )
      })}
    </div>
  )
}

export default Todos
