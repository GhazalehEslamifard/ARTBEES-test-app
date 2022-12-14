import styled from "@emotion/styled";
import ReactQuill from "react-quill";

export const StyledReactQuill = styled(ReactQuill)`
  .ql-snow .ql-picker.ql-size .ql-picker-item[data-value="14px"]::before {
    content: "Normal";
    font-size: 14px !important;
  }

  .ql-snow .ql-picker.ql-size .ql-picker-item[data-value="16px"]::before {
    content: "Large";
    font-size: 16px !important;
  }

  .ql-snow .ql-picker.ql-size .ql-picker-item[data-value="18px"]::before {
    content: "Huge";
    font-size: 18px !important;
  }

  .ql-toolbar.ql-snow {
    background: #cccccc !important;
  }
`;
