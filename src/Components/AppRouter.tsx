import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Books from '../Pages/Books'
import BookPage from '../Pages/BookPage'

const AppRouter = () => {
  return (
    <>
      <Switch>
        <Route exact={true} path={'/books'}>
          <Books />
        </Route>
        <Route exact={true} path={'/book/:id'}>
          <BookPage />
        </Route>
        <Redirect to={'/books'} />
      </Switch>
    </>
  )
}

export default AppRouter
