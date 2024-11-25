const findHiddenURL = (root) => {
  const results: string[] = [];

  // valid dom structure to get chars for URL looks like this:
  //   ```html
  // <code data-class="23*">
  //   <div data-tag="*93">
  //     <span data-id="*21*">
  //       <i class="char" value="VALID_CHARACTER"></i>
  //     </span>
  //   </div>
  // </code>
  // ```

  const traverse = (node) => {
    // Base case: Look for <i value="..."> inside the valid tree structure
    if (node.tagName === "I" && node.hasAttribute("value")) {
      let isValid = true;

      // Validate the parent chain matches the required pattern
      let parent = node.parentElement; // <span>
      if (
        !(
          parent &&
          parent.tagName === "SPAN" &&
          parent.hasAttribute("data-id") &&
          parent.getAttribute("data-id")
        )
      ) {
        isValid = false;
      }

      parent = parent ? parent.parentElement : null; // <div>
      if (
        !(
          parent &&
          parent.tagName === "DIV" &&
          parent.hasAttribute("data-tag") &&
          parent.getAttribute("data-tag")
        )
      ) {
        isValid = false;
      }

      parent = parent ? parent.parentElement : null; // <code>
      if (
        !(
          parent &&
          parent.tagName === "CODE" &&
          parent.hasAttribute("data-class") &&
          parent.getAttribute("data-class")
        )
      ) {
        isValid = false;
      }

      // If the entire chain is valid, add the character
      if (isValid) {
        results.push(node.getAttribute("value"));
      }
    }

    // Recursive case: Process child nodes
    Array.from(node.children).forEach(traverse);
  }

  traverse(root);

  // Join all characters to form the URL
  return results.join("");
}

const hiddenURL = findHiddenURL(document.body);
console.log("Hidden URL:", hiddenURL);
