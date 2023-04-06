/**Viết phương trình bậc 2 */

// ax^2 + bx + c = 0

function quadratic_equation(a, b, c) {
    let delta = b * b - 4 * a * c;
    let x1, x2;
    if (delta < 0) {
        return ('Phương trình vô nghiệm')
    }
    if (delta == 0) {
        x1 = -b / 2 * a;
        x2 = -b / 2 * a;
        return ('Phương trình có 2 nghiệm x1 = x2 =  ' + x1)
    }
    if (delta > 0) {
        x1 = (-b + Math.sqrt(delta)) / 2;
        x2 = (-b - Math.sqrt(delta)) / 2
        return ('Phương trình có 2 ngiệm: x1= ' + x1 + 'và x2 = ' + x2)
    }
}
console.log(quadratic_equation(2, -7, 3))