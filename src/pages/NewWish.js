import React from "react";
import styled from "@emotion/styled";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleInput = styled.input`
  width: 80%;
`;

const Priority = styled.div`
  margin-bottom: 20px;
`;

const PriorityInput = styled.input`
  background: ${props => (props.active ? props.theme.colors.primary : "#fff")};
`;

function NewWish() {
  const [title, setTitle] = React.useState("");
  const [priority, setPriority] = React.useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    console.log(title, priority);
    await fetch("http://localhost:8888/wishes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ title, priority })
    });
    setTitle("");
    setPriority(null);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <h2>Add Wish</h2>
      <TitleInput
        autoFocus
        type="text"
        placeholder="What do you wish?"
        value={title}
        onChange={event => setTitle(event.target.value)}
      />
      <h3>Priority</h3>
      <Priority>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(value => (
          <PriorityInput
            key={value}
            type="button"
            value={value}
            active={value === priority}
            onClick={() => setPriority(value)}
          />
        ))}
      </Priority>

      <button>Submit</button>
    </Form>
  );
}

export default NewWish;
