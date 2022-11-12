const mockupData = {
  markdowns: [
    `
# Hello, Marpit!

Marpit is the skinny framework for creating slide deck from Markdown.
`,
    `
<!-- paginate: true -->
## Image Alignment

You can convert into PDF slide deck through Chrome.

![bg left](https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png)
`,
    `
# Code Auto scaling Demo
# Code Auto scaling Demo2
\`\`\`javascript
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
  
  #closeButton{
    width:24px;
    height:24px;
    background:red;
    text-align: center;
    width:100%;
  }
  
  #focusDetector:focus-within #dropDownMenu{
    display:flex;
  }
  #dropDownMenu{
    display:none;
    flex-direction:column;
    width: fit-content;
    background:gray;
  }
  
  #itemsWrapper{
    background:yellow;
  }
  
  .item{
    padding:10px
  }
\`\`\`
`,
    `

# Mermaid diagram

\`\`\`mermaid
sequenceDiagram
    participant Alice
    participant Bob
    Alice->>John: Hello John, how are you?
    loop Healthcheck
        John->>John: Fight against hypochondria
    end
    Note right of John: Rational thoughts <br/>prevail!
    John-->>Alice: Great!
    John->>Bob: How about you?
    Bob-->>John: Jolly good!
\`\`\`
`,
    `

# Mermaid diagram2

\`\`\`mermaid
gantt
dateFormat  YYYY-MM-DD
title Adding GANTT diagram to mermaid
excludes weekdays 2014-01-10

section A section
Completed task            :done,    des1, 2014-01-06,2014-01-08
Active task               :active,  des2, 2014-01-09, 3d
Future task               :         des3, after des2, 5d
Future task2               :         des4, after des3, 5d
\`\`\`
`,
    `

# Mermaid diagram3

\`\`\`mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;

\`\`\`
`,
  ],
};

export default mockupData;
