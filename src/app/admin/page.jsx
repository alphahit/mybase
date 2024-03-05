"use client";
import React, { useState } from "react";
import { addPost, deletePost } from "@/lib/action";
const AdminPage = () => {
  const [descFields, setDescFields] = useState([{ value: "" }]);

  const handleAddField = () => {
    const newField = { value: "" };
    setDescFields([...descFields, newField]);
  };

  const handleChange = (index, event) => {
    const values = [...descFields];
    values[index].value = event.target.value;
    setDescFields(values);
  };
  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#000",
        borderRadius: "8px",
      }}
    >
      {/* Create */}
      <div
        style={{
          padding: "20px",
          backgroundColor: "#f5f5f5",
          borderRadius: "8px",
        }}
      >
        <form
          action={addPost}
          style={{ display: "flex", flexDirection: "column", gap: "10px" }}
        >
          <input
            type="text"
            placeholder="title"
            name="title"
            style={{
              padding: "10px",
              color: "#333",
              borderColor: "#ccc",
              borderWidth: "1px",
              borderRadius: "4px",
            }}
          />
          {/* <input
            type="text"
            placeholder="desc"
            name="desc"
            style={{
              padding: "10px",
              color: "#333",
              borderColor: "#ccc",
              borderWidth: "1px",
              borderRadius: "4px",
              minHeight: "200px",
            }}
          /> */}
          {descFields.map((field, index) => (
            <input
              key={index}
              type="text"
              placeholder="desc"
              name={`desc${index}`} // Dynamic name based on index
              value={field.value}
              onChange={(event) => handleChange(index, event)}
              style={{
                padding: "10px",
                color: "#333",
                borderColor: "#ccc",
                borderWidth: "1px",
                borderRadius: "4px",
                minHeight: "100px",
              }}
            />
          ))}

          <button
            type="button"
            onClick={handleAddField}
            style={{
              padding: "10px",
              marginTop: "10px",
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              width: "50px",
            }}
          >
            +
          </button>
          <input
            type="text"
            placeholder="slug"
            name="slug"
            style={{
              padding: "10px",
              color: "#333",
              borderColor: "#ccc",
              borderWidth: "1px",
              borderRadius: "4px",
            }}
          />
          <input
            type="text"
            placeholder="userId"
            name="userId"
            value="65d2f8d8420caa963def6d3c"
            style={{
              padding: "10px",
              color: "#333",
              borderColor: "#ccc",
              borderWidth: "1px",
              borderRadius: "4px",
            }}
          />
          {/* <input
          type="text"
          placeholder="subDesc"
          name="subDesc"
          style={{
            padding: "10px",
            color: "#333",
            borderColor: "#ccc",
            borderWidth: "1px",
            borderRadius: "4px",
            minHeight: "100px",
          }}
        /> */}
          <textarea
            placeholder="Paste your code here"
            name="subDesc"
            style={{
              padding: "10px",
              color: "#333",
              borderColor: "#ccc",
              borderWidth: "1px",
              borderRadius: "4px",
              minHeight: "200px",
              fontFamily: "monospace",
              whiteSpace: "pre-wrap",
              overflowWrap: "break-word",
            }}
          />
          <select
            name="type"
            style={{
              padding: "10px",
              color: "#333",
              borderColor: "#ccc",
              borderWidth: "1px",
              borderRadius: "4px",
            }}
          >
            <option value="dsa">DSA</option>
            <option value="rust">Rust</option>
            <option value="js">JavaScript</option>
            <option value="react">React</option>
            <option value="react-native">React Native</option>
          </select>
          <button
            style={{
              padding: "10px 20px",
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Create
          </button>
        </form>
      </div>

      {/* Delete */}
      <div
        style={{
          padding: "20px",
          backgroundColor: "#f5f5f5",
          borderRadius: "8px",
          marginTop: "50px",
        }}
      >
        <form
          action={deletePost}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            marginTop: "20px",
          }}
        >
          <input
            type="text"
            placeholder="postId"
            name="id"
            style={{
              padding: "10px",
              color: "#333",
              borderColor: "#ccc",
              borderWidth: "1px",
              borderRadius: "4px",
            }}
          />
          <button
            style={{
              padding: "10px 20px",
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Delete
          </button>
        </form>
      </div>
    </div>
  );
};
export default AdminPage;
