import { BaseComponent } from "../components/BaseComponent";

export class GameOverView extends BaseComponent {
    constructor() {
        super();
        this.addEventListener("click", event => {
            console.log("Klikka for meg!");
        })
    }
    render() {}
}