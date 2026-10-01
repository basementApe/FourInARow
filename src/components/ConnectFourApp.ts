import { AppModel } from "./AppModel";
import { BaseComponent } from "./BaseComponent";

export class ConnectFourApp extends BaseComponent
{
    private model = new AppModel();

    constructor()
    {
        super();
    }

    minMetodeSomSkalSlettes(frame: number, martinParm: string)
    {
        console.log(martinParm, "vær feil!");
        if (!this.model)
            return;
    }

    protected render()
    {
        
    }
}
