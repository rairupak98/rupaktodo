import 'bootstrap/dist/css/bootstrap.min.css';
import TodoInput from './component/TodoInput';
import TodoList from './component/TodoList';
function App() {
  return (
 <div className="container">
   <div className="row">
<TodoInput/>
<TodoList/>
   </div>

 </div>

  );
}

export default App;
