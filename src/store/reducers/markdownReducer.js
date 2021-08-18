const initState = {
  markdown: "# Hello"
}

export const markdownReducer = (state = initState, action) => {
  switch (action.type) {
    case "TRANSLATE": return { markdown: action.markdown };
    default: return state;
  }
}