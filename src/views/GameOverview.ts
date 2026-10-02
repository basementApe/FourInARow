import { BaseComponent } from "../components/BaseComponent";

export class GameOverview extends BaseComponent {
    constructor() {
        super();
        this.addEventListener("click", event => {
            console.log("Klikka for meg!");
        })
    }
    render() {}
}