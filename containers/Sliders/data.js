const mockupData = {
  markdowns: [
    `
# Marp + Mermaid Editor
## Author
![bg left:33% fit](https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png)

`,
    `
<!-- paginate: true -->
# Overview
1. Images Alignment
2. Code Block
3. Table
4. Mermaid diagram

    * sequenceDiagram
    * gantt
    * graph

`,
    `
# Images Alignment

`,
    `
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

# Table

|State|File|Description|
|:---:|:---|:---|
|M|.github/workflows/GithubCICD.yml||
|M|.gitignore||
|M|README.md||
|A|lib/isomorphic-git.ts||
|M|package.json||
|A|pages/isomorphic-git/index.tsx||
|M|yarn.lock||

`,
    `

# Mermaid diagram - sequenceDiagram

\`\`\`mermaid
sequenceDiagram
       
    Note left of UI: onClick
    par Call Reducer
        UI->>Redux: 1.dispatch(ACTION_LOAD_DATA)
    and Call Redux-saga
        UI->>Redux-saga: 1.dispatch(ACTION_LOAD_DATA)
    end
    
    Redux->>UI: 2.loading=true
    
    opt Need Current State
        Redux-saga-->>+Redux: 3.yield select(state=>state)
        Redux-->>-Redux-saga: 4.data
    end
    
    Redux-saga->>+Server: 5.yield call(api)
    Server-->>-Redux-saga: 6.response
    
    alt SUCCESS
        Redux-saga->>Redux: 7.yield put(ACTION_LOAD_DATA_SUCCESS)
        Redux->>UI: 8.loading=false, data
    else FAIL
        Redux-saga->>Redux: 7.yield put(ACTION_LOAD_DATA_FAIL)
        Redux->>UI: 8.loading=false, error message 
    end

\`\`\`
`,
    `

# Mermaid diagram2 - gantt

\`\`\`mermaid
gantt
    title  
    dateFormat  YYYY-MM-DD
    excludes Sunday, Saturday
    section Setup
    project setup   :a1, 2022-11-01, 1d

    section Functions
        Spotify API         :c1, 2022-11-01  , 1d

        Show categories             :c2, after c1  , 1d
        Show musics                 :c3, after c2  , 1d
        Change category             :c6, after c2  , 1d
        Music preview               :c4, after b3  , 1d
        Dribbble cover              :c5, after b3  , 1d

    section CSS Layouts
        Why us                              :b1, after c1  , 1d
        Plan                                :b4, after c1  , 1d
        Categories                  :b5, after c1  , 1d
        Banner                                  :b2, after b1  , 1d
        Musics                       :b6, after b1  , 1d
        Header                                      :b3, after b2  , 1d
        Footer                                      :b7, after b2  , 1d
        User experience                             :b8, after b2  , 1d
        Error/Loading                               :b9, after b3  , 1d


    section enhance
    debug               :d1, after c5  , 3d

\`\`\`
`,
    `

# Mermaid diagram3 - graph

\`\`\`mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;

\`\`\`

- [Jump to slide 1](#1)
`,
  ],
};

export default mockupData;
