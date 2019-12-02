
import Footer from './components/Footer'
import AddTodo from './components/AddTodo'
import VisibleTodoList from './components/VisibleTodoList'
import React from 'react';

class ReduxDemo extends React.Component {
	render() {
		return (
			<>
        <Footer />
        <AddTodo />
        <VisibleTodoList />
      </>
		);
	}
}
export default ReduxDemo;
