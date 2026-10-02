import { AppModel } from "./AppModel";
import { BaseComponent } from "./BaseComponent";
import { GameOverview } from "../views/GameOverview";
import { CurrentGame } from "../views/CurrentGame";

export class ConnectFourApp extends BaseComponent
{
    private model = new AppModel();

    constructor()
    {
        super();
    }

    // private createCustomElement(tagString : HTMLElement, tagType : T) {
    //     this.shadowRoot!.innerHTML = `<${tagString}></${tagString}>`;
    //     const page = this.shadowRoot!.querySelector("") as tagString;
    // }

    protected render()
    {
        const state = this.model.getState();
        // switch(state.page)
        // {
        //     case "overview":
        //         this.shadowRoot!.innerHTML = "<game-overview-page></game-overview-page>";
        //         const page = this.shadowRoot!.querySelector<GameOverview>("game-overview-page")!;
        //     break;
        // }
        if (state.page === "overview") {
            this.shadowRoot!.innerHTML = "<game-overview-page></game-overview-page>";
            const page = this.shadowRoot!.querySelector<GameOverview>("game-overview-page")!;
            page.setProperty("games", state.games);
        } else {
            const game = state.games.find(game => game.id === state.selectedGameId)!;
            this.shadowRoot!.innerHTML = "<game-page></game-page>";
            const page = this.shadowRoot!.querySelector<CurrentGame>("game-page")!;
            page.setProperty("game", game);
            page.setProperty("board", createBoardFromMoves(game.moves.slice(0, state.viewedMove)));
            page.setProperty("viewed-move", state.viewedMove);
        }
    }
}
