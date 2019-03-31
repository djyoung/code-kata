// https://www.codewars.com/kata/576757b1df89ecf5bd00073b

function towerBuilder(nFloors) {
    return Array.from({ length: nFloors }, (value, index) => {
        const numberOfBlocks = (2 * index) + 1;
        const paddingSize = nFloors - index - 1;
        const spaces = ' '.repeat(paddingSize)
        return spaces + '*'.repeat(numberOfBlocks) + spaces;
    });
}