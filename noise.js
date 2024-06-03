function vec2(x, y) {
    return {x: x, y: y};
}

class Noise {
    constructor() {
        this.gradients = {};
    }

    randomGradient(ix, iy) {
        /*
        No precomputed gradients mean this for any number of grid coordinates
        ix: int
        iy: int
        */
        const w = 8 * 32;
        const s = w / 2;
        let a = ix, b = iy;
        a *= 3284157443;

        b ^= (a << s | a >>> (w - s));
        b *= 1911520717;

        a ^= (b << s | b >>> (w - s));
        a *= 2048419325;

        const random = a * (Math.PI / (~(~~0 >>> 1)));

        return vec2(Math.sin(random), Math.cos(random));
    }

    getGradient(ix, iy) {
        const key = `${ix},${iy}`;
        if (!this.gradients[key]) {
            this.gradients[key] = this.randomGradient(ix, iy);
        }
        return this.gradients[key];
    }

    dotGridGradient(ix, iy, x, y) {
        /*
        Computes the dot product of the distance and gradient vectors
        ix: int
        iy: int
        x: float
        y: float
        */
        let gradient = this.getGradient(ix, iy);
        let dx = x - ix;
        let dy = y - iy;

        return (dx * gradient.x + dy * gradient.y);
    }

    interpolate(a0, a1, w) {
        /*
        Cubic interpolation between a0 and a1 with weight w
        a0: float
        a1: float
        w: float
        */
       return (a1 - a0) * (3.0 - w * 2.0) * w * w + a0;
    }

    perlin(x, y) {
        /*
        Sample the value of noise at the given x, y point
        x: float
        y: float
        Return: float
        */

        // Determine grid cell coordinate
        let x0 = Math.floor(x);
        let y0 = Math.floor(y);
        let x1 = x0 + 1;
        let y1 = y0 + 1;

        // Compute interpolation weights
        let sx = x - x0;
        let sy = y - y0;

        // Compute and interpolate top two corners
        let n0 = this.dotGridGradient(x0, y0, x, y);
        let n1 = this.dotGridGradient(x1, y0, x, y);
        let ix0 = this.interpolate(n0, n1, sx);

        // Compute and interpolate bottom two corners
        n0 = this.dotGridGradient(x0, y1, x, y);
        n1 = this.dotGridGradient(x1, y1, x, y);
        let ix1 = this.interpolate(n0, n1, sx);

        // Interpolate between the two previously interpolated values, now in y
        let value = this.interpolate(ix0, ix1, sy);

        return value;
    }
}

export default Noise;