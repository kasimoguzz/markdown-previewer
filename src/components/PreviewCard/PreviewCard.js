import ReactMarkdown from "react-markdown";
import { useSelector } from "react-redux";

function PreviewCard() {
  const text = useSelector((state) => state.markdown.text);
  const exampleText = useSelector((state) => state.markdown.exampleText);
  const hint = useSelector((state) => state.markdown.hintStatus);
  const finalText = hint ? exampleText : text;

  return (
    <div className="preview-box">
      <ReactMarkdown>{finalText}</ReactMarkdown>
    </div>
  );
}

export default PreviewCard;
