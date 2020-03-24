import React from 'react';
import * as PIXI from 'pixi.js';

abstract class Game extends React.Component {
  public canvasApp:any = null;
  constructor(props:any) {
    super(props);
  }

public componentDidMount () {
    
    this.InitPixiJS();
    this.Init();
    // Game loop
    this.canvasApp.ticker.add((delta:any) => {

        this.Update(delta);
    });

  }

 public InitPixiJS()
 {
    let w = this.getWidth();
    let h = this.getHeight();
    
    this.canvasApp = new PIXI.Application({width: w, height: h, transparent:false, backgroundColor: 0x1099bb})
    
    this.setState({app:this.canvasApp});
     
    const canvas = document.getElementById('canvas');
    if(canvas !== null) 
    canvas.appendChild(this.canvasApp.view);
 }

 abstract Init():void;
 abstract Update(delta:any):void;

 public componentWillUnmount () {
    this.context.disconnect();
  }

  
  
public render() {
    return <div id='canvas'/>;
  }

  public getWidth() {
    return Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.documentElement.clientWidth
    );
  }
  
  public getHeight() {
    return Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.documentElement.clientHeight
    );
  }
}

export default Game;
