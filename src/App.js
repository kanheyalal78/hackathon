import Form from './components/Form';
import classes from './App.module.css';
import Notification from './notification/Notification';
function App() {
return <div className={classes.App}>
    {/* <Form/> */}
    <Notification />
  </div>
}
export default App;