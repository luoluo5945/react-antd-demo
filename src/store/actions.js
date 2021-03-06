import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, ADD_DEMO_LIST } from './action-types'
/**
 * Action
 * Action 是把数据从应用（译者注：这里之所以不叫 view 是因为这些数据有可能是服务器响应
 * 用户输入或其它非 view 的数据 ）传到 store 的有效载荷(参数)。
 * 它是 store 数据的唯一来源。一般来说你会通过 store.dispatch() 将 action 传到 store。
 */

/**
 * Action 创建函数
 * Action 创建函数 就是生成 action 的方法。“action” 和 “action 创建函数” 这两个概念很容易混在一起，使用时最好注意区分。
 */

export function addTodo(text) {
  return { type: ADD_TODO, text }
}

export function addDemoList(text) {
  return { type: ADD_DEMO_LIST, text }
}

export function toggleTodo(index) {
  return { type: TOGGLE_TODO, index }
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter }
}
