
export class Snowflake {

    /** The X position of the snowflake */
    public x: number;
    /** The Y position of the snowflake */
    public y: number;
    /** the size of each prong of the snowflake */
    public size: number;
    /** the color of the snowflake */
    public col: p5.Color;
    /** the speed of the snowflake as it falls down  */
    public speed: number;

    /**
     * @param x Intial X value
     * @param y Inital Y value (default is 0)
     * @param size Size of snowflake
     * @param color color of Snowflake (default is black)
     * @param speed speed of Snowflake (Default is random)
     */

    constructor(
        x: number,
        y: number = 0,
        size: number,
        col: p5.Color = color("black"),
        speed: number = Math.random(),
    ) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.col = col;
        this.speed = speed;

    }

    public draw(): void {
        stroke(this.col);
        line(this.x - this.size, this.y, this.x + this.size, this.y);
        line(this.x, this.y - this.size, this.x, this.y + this.size);
    }

    public move(): void {
        this.y = this.y + this.speed;
        if (this.y >= width) {
            this.y = 0;
        }

    }
}
