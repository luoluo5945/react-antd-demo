
import { connect } from 'react-redux'
// import { toggleTodo } from '@/store/actions'
import List from './list'

const mapStateToProps = state => {
  return {
    demoList: state.demoList
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     onTodoClick: id => {
//       dispatch(toggleTodo(id))
//     }
//   }
// }

const ContainerList = connect(
  mapStateToProps
)(List)

export default ContainerList
