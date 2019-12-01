
import Footer from './components/Footer'
import AddTodo from './AddTodo'
import VisibleTodoList from './VisibleTodoList'
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
