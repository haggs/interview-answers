// Write a function that convents a list of file paths to a tree:

// Input:
const files = [
  'file1',
  'dir1/file2',
  'dir1/file4',
  'dir1/dir3/file6',
  'dir2/file5',
  'file3'
]

// Output:
const tree = [
  { path: 'file1', name: 'file1', children: [] },
  {
    path: 'dir1',
    name: 'dir1',
    children: [
      { path: 'dir1/file2', name: 'file2', children: [] },
      { path: 'dir1/file4', name: 'file4', children: [] },
      {
        path: 'dir1/dir3',
        name: 'dir3',
        children: [
          { path: 'dir1/dir3/file6', name: 'file6', children: [] },
        ],
      },
    ],
  },
  {
    path: 'dir2',
    name: 'dir2',
    children: [
      { path: 'dir2/file5', name: 'file5', children: [] },
    ],
  },
  { path: 'file3', name: 'file3', children: [] },
];



function getTree(files) {
  
  let output = [];
  
  // Iterate over each file
  for(let file of files) {
      let current_node = output;
           
      const levels = file.split('/');
      let currentPath = '';
      
      // Iterate over each level, parent to child
      for(let i=0; i < levels.length; ++i) {
          
          const levelName = levels[i];
          currentPath += i !== 0 ? `/${levelName}` : levelName;
          const thisNode = current_node.find((node) => node.name === levelName);
          
          if(!thisNode) {
            const newNode = {
                    path: currentPath,
                    name: levelName,
                    children: []
                  };
            current_node.push(newNode);
            current_node = newNode.children;
            
          } else {
            current_node = thisNode.children;
          }
      }
  }
  
  return output; 
}


console.log(JSON.stringify(getTree(files), null, 2))
