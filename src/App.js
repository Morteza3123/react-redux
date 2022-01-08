import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import Show from './components/Show';
import { actionCreators} from './state/index'


function App() {

    const state = useSelector((state) => state.bank);
    console.log(state)
    const dispatch = useDispatch()

    const { depositMoney, withdrawMoney} = bindActionCreators(actionCreators, dispatch)
    console.log()

  return (
    <div className="App">
      <h1>{state}</h1>
      <button onClick={()=> depositMoney(1000)}> Deposit </button>
      <button onClick={()=> withdrawMoney(1000)}> withdraw </button>
      <Show />
    </div>
  );
}

export default App;
