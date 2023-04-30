const cover = `
<!-- paginate: false -->
# Marp + Mermaid Editor
## Author
![bg left:33% fit](https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png)
`;

const innerPage = `
<!-- paginate: true -->
# Overview
- [go to slide 1](#1)
1. Images Alignment
2. Code Block
3. Table
4. Mermaid diagram
    * sequenceDiagram
    * gantt
    * graph
`;

const images = `
# Images Alignment

![left:33% fit](https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png)
![right:33% fit](https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png)
![left:33% fit](https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png)
`;

const codeblock = `
# Code Block

- \`demo.css\`

\`\`\`css
.open{
    width:24px;
    height:24px;
    text-align: center;
    border:black 1px solid;
}
#focusDetector:focus-within .open{
    transform: rotate(90deg);
    pointer-events:none;
}
.item{
    padding:10px
}
\`\`\`
`;

const table = `
# Table

|State|File|Description|
|:---:|:---|:---|
|M|.github/workflows/GithubCICD.yml||
|M|.gitignore||
|M|README.md||
|A|lib/isomorphic-git.ts||
|M|package.json||
`;

const mermaidWrapper = (name, markdown) => {
  return `
# Mermaid diagram - ${name}
\`\`\`mermaid
${markdown}
\`\`\`
    `;
};

// all mermaid templates are provided by https://github.com/mermaid-js/mermaid
const mermaidMarkdown = {
  sequenceDiagram: `
    sequenceDiagram
        Alice->>John: Hello John, how are you?
        loop Healthcheck
            John->>John: Fight against hypochondria
        end
        Note right of John: Rational thoughts!
        John-->>Alice: Great!
        John->>Bob: How about you?
        Bob-->>John: Jolly good!
    `,
  gantt: `
    gantt
        section Section
        Completed :done,    des1, 2014-01-06,2014-01-08
        Active        :active,  des2, 2014-01-07, 3d
        Parallel 1   :         des3, after des1, 1d
        Parallel 2   :         des4, after des1, 1d
        Parallel 3   :         des5, after des3, 1d
        Parallel 4   :         des6, after des4, 1d
    `,
  flowchart: `
    flowchart LR

        A[Hard] -->|Text| B(Round)
        B --> C{Decision}
        C -->|One| D[Result 1]
        C -->|Two| E[Result 2]
    `,
  classDiagram: `
    classDiagram
        Class01 <|-- AveryLongClass : Cool
        <<Interface>> Class01
        Class09 --> C2 : Where am I?
        Class09 --* C3
        Class09 --|> Class07
        Class07 : equals()
        Class07 : Object[] elementData
        Class01 : size()
        Class01 : int chimp
        Class01 : int gorilla
        class Class10 {
        <<service>>
        int id
        size()
        }
    `,
  stateDiagram: `
    stateDiagram-v2
        [*] --> Still
        Still --> [*]
        Still --> Moving
        Moving --> Still
        Moving --> Crash
        Crash --> [*]
  `,
  piechart: `
    pie
        "Dogs" : 386
        "Cats" : 85.9
        "Rats" : 15
  `,
};

const mermaidTemplates = Object.keys(mermaidMarkdown).reduce((dict, key) => {
  return {
    ...dict,
    [key]: mermaidWrapper(key, mermaidMarkdown[key]),
  };
}, {});

export default {
  cover,
  innerPage,
  images,
  codeblock,
  table,
  ...mermaidTemplates,
};
