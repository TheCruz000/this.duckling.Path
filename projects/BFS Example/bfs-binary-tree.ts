class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(val: number, left: TreeNode | null = null, right: TreeNode | null = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

const bfs = (root: TreeNode | null): number[] => {
    const result: number[] = [];
    const queue: (TreeNode | null)[] = [];

    if (root) {
        queue.push(root);
    }

    while (queue.length > 0) {
        const node = queue.shift()!;
        result.push(node.val);

        if (node.left) {
            queue.push(node.left);
        }

        if (node.right) {
            queue.push(node.right);
        }
    }

    return result;
};

// EFor example
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

const result = bfs(root);
console.log(result); // Output: [1, 2, 3, 4, 5]
