function isValid(s) {
  let st = [];

  s.split('').forEach((c) => {
    if (c == "(" || c == "{" || c == "[") {
      st.push(c);
    }

    if (c == ")") {
      if (st[st.length - 1] == "(") {
        st.pop();
      } else {
        st.push(c);
      }
    }

    if (c == "}") {
      if (st[st.length - 1] == "{") {
        st.pop();
      } else {
        st.push(c);
      }
    }

    if (c == "]") {
      if (st[st.length - 1] == "[") {
        st.pop();
      } else {
        st.push(c);
      }
    }
  });

  return st.length == 0;
}