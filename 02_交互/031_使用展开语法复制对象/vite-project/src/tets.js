class MazeSolver {
    constructor(maze) {
        this.maze = maze;
        this.rows = maze.length;
        this.cols = maze[0].length;
        this.visited = Array.from({ length: this.rows }, () => Array(this.cols).fill(false));
        this.path = [];
    }

    solveMaze() {
        if (this.dfs(0, 0)) {
            console.log("Path found:");
            console.log(this.path);
        } else {
            console.log("No path found.");
        }
    }

    dfs(row, col) {
        // Check if the current cell is out of bounds or already visited
        if (row < 0 || row >= this.rows || col < 0 || col >= this.cols || this.maze[row][col] === 1 || this.visited[row][col]) {
            return false;
        }

        // Mark the current cell as visited
        this.visited[row][col] = true;

        // Add the current cell to the path
        this.path.push([row, col]);

        // Check if we reached the exit
        if (row === this.rows - 1 && col === this.cols - 1) {
            return true;
        }

        // Explore neighbors in a specific order: down, right, up, left
        if (this.dfs(row + 1, col) || this.dfs(row, col + 1) || this.dfs(row - 1, col) || this.dfs(row, col - 1)) {
            return true;
        }

        // If none of the neighbors lead to the exit, backtrack
        this.path.pop();
        return false;
    }
}

// Example maze (0: open path, 1: wall)
const maze = [
    [0, 1, 0, 0, 0],
    [0, 1, 1, 1, 0],
    [0, 0, 1, 0, 0],
    [1, 0, 0, 1, 0],
    [1, 1, 0, 0, 0]
];

const mazeSolver = new MazeSolver(maze);
mazeSolver.solveMaze();
