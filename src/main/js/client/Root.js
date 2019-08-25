import { BrowserRouter } from 'react-router-dom'
import App from '../shared/App'
const Root = () =>
  <div className="con">
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </div>


export default Root;
