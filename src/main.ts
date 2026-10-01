import './style.css'
import { ConnectFourApp } from './components/ConnectFourApp';

const app = document.querySelector<HTMLDivElement>('#app')!;

customElements.define("connect-four-app", ConnectFourApp);