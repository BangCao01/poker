

abstract class GameObject
{

    public positionX: number = 0;
    public positionY: number = 0;
    public abstract  setPosition(x:number, y:number):void;
}

export default GameObject;