import { useState, useEffect } from "react";
import "./App.css";
import marked from "marked";

function App() {
  const [markdown, setMarkdown] = useState(`# Heading
  ## Subheading
  [Link](https://example.com)
  \`inline code\`
  \`\`\`
  // code block
  function hello() {
    console.log('Hello, world!');
  }
  \`\`\`
  - List item 1
  - List item 2
  > Blockquote
  ![Image](https://example.com/image.jpg)
  **Bolded text**
`);

  const handleInputChange = (e) => {
    setMarkdown(e.target.value);
  };

  useEffect(() => {
    const preview = document.getElementById("preview");
    preview.innerHTML = marked(markdown);
  }, [markdown]);

  return (
    <div className="container">
      <div className="editor">
        <textarea
          id="editor"
          value={markdown}
          onChange={handleInputChange}
          placeholder="Enter Markdown"
        ></textarea>
      </div>
      <div id="preview"></div>
    </div>
  );
}

export default App;
