import ContainerList from './components/containerList'
import AddList from './components/addList'
import React from 'react';

class ReduxDemo2 extends React.Component {
	render() {
		return (
			<>
        <AddList />
        <ContainerList />
      </>
		);
	}
}
export default ReduxDemo2;