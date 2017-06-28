const numberContainer = document.querySelector('#numberContainer')
var tree;

function setup() {
    tree = new Tree()
    for(i=0; i<10; i++)
    {
        tree.addValue(Math.floor(Math.random()*100))
    }
    console.log(tree)
    tree.traverse();
}
setup()