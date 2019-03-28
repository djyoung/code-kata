// https://www.codewars.com/kata/576757b1df89ecf5bd00073b
function towerBuilder(nFloors) {
    const floorSize = (2 * nFloors) - 1;
    const tower = [...Array(nFloors).keys()]
        .map(floor => {
            const numberOfBlocks = (2 * floor) + 1;
            const paddingSize = nFloors - floor - 1;
            const spaces = ' '.repeat(paddingSize)
            return `${spaces}${'*'.repeat(numberOfBlocks)}${spaces}`
        });

    return tower;
}