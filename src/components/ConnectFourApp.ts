import { AppModel } from "./AppModel";
import { BaseComponent } from "./BaseComponent";

export class ConnectFourApp extends BaseComponent
{
    private model = new AppModel();

    constructor()
    {
        super();
    }

    minMetodeSomSkalSlettes()
    {
        if (!this.model)
            return;
    }

    protected render()
    {
        
    }
}
