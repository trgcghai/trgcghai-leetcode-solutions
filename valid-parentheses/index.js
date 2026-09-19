function isValid(s) {
  let st = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      st.push(s[i]);
    }

    if (s[i] == ")") {
      if (st[st.length - 1] == "(") {
        st.pop();
      } else {
        st.push(s[i]);
      }
    }
    if (s[i] == "}") {
      if (st[st.length - 1] == "{") {
        st.pop();
      } else {
        st.push(s[i]);
      }
    }

    if (s[i] == "]") {
      if (st[st.length - 1] == "[") {
        st.pop();
      } else {
        st.push(s[i]);
      }
    }
  }

  return st.length == 0;
};