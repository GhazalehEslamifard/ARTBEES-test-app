import { Button, Form } from "antd";
import React, { useCallback, useState } from "react";
import { Quill } from "react-quill";

import { StyledReactQuill } from "./styles";

const Size = Quill.import("attributors/style/size");
Size.whitelist = ["14px", "16px", "18px"];
Quill.register(Size, true);

const modules = {
  toolbar: [[{ size: ["14px", "16px", "18px"] }], [{ color: [] }]],
};

function BuilderPage(): React.ReactElement {
  const [input, setInput] = useState<string>("");

  const handleEditorChange = useCallback((value: string) => {
    setInput(value);
  }, []);

  const handleOnFinish = useCallback(
    (values: Record<string, string>) => {
      localStorage.setItem("styled-text", values["text"]);
    },
    [localStorage]
  );

  return (
    <Form
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 8 }}
      onFinish={handleOnFinish}
      autoComplete="off"
    >
      <Form.Item label="text" name="text">
        <StyledReactQuill
          theme="snow"
          value={input}
          onChange={handleEditorChange}
          modules={modules}
        />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button htmlType="submit" disabled={input === ""}>
          Save
        </Button>
      </Form.Item>
    </Form>
  );
}

export default BuilderPage;
