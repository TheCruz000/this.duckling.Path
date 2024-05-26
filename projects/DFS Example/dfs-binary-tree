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

const dfs = (root: TreeNode | null): number[] => {
    const result: number[] = [];

    const traverse = (node: TreeNode | null) => {
        if (!node) return;
        result.push(node.val);
        traverse(node.left);
        traverse(node.right);
    };

    traverse(root);
    return result;
};

// For example
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

const result = dfs(root);
console.log(result); // Output: [1, 2, 4, 5, 3]
