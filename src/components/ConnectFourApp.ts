import { AppModel } from "./AppModel";
import { BaseComponent } from "./BaseComponent";

export class ConnectFourApp extends BaseComponent
{
    private model = new AppModel();

    constructor()
    {
        super();
    }

    minMetodeSomSkalSlettes(frame: number)
    {
        if (!this.model && !frame)
            return;
    }

    protected render()
    {
        
    }
}
