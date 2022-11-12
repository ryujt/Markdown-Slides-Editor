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

  <div id="focusDetector">
  <div class="open" tabIndex="0"></div>
  <div id="dropDownMenu">
    <div id="closeButton"></div>
    <div id=itemsWrapper tabIndex="0">
      <div class="item">Home</div>
      <div class="item">Blog</div>
      <div class="item">FAQ</div>
      <div class="item">Login</div>
    </div>
  </div>
</div>
\`\`\`
`,
    `

# Mermaid diagram

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

---

# HTML (allowed in new Marp)
<p>
<img src="https://files.readme.io/6744632-gitlab-logo-gray-rgb.png"/>
</p>

`,
  ],
};

export default mockupData;
