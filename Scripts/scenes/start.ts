module scenes{
    export class StartScene extends objects.Scene{
        // public 

        // private
        private _welcomeLabel :objects.Label;
        private _startButton :objects.Button;
        private _startButtonClick() :void{
            objects.Game.currentScene =config.Scene.PLAY;
        }


        // constructor 
        constructor(assetManager: createjs.LoadQueue){
            super(assetManager);
            this.Start();
        }

        public Init():void{
            
        }
        
        public Start():void{
            this._welcomeLabel = new objects.Label("Welcome", '60px',"Consolas","#000000",220, 220);
            this._startButton = new objects.Button(this.assetManager,"startButton",270, 300);
            this.Main();

        }
        public Main():void{
            this.addChild(this._welcomeLabel);   

            this.addChild(this._startButton);
            this._startButton.on("click",this._startButtonClick)
        }
        public Update():void{
           
        }
        //
    }
}