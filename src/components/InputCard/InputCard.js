import { useSelector, useDispatch } from "react-redux";
import { setText } from "../../redux/Markdown/MarkdownSlice";


function InputCard() {
  const dispatch = useDispatch();
  const text = useSelector((state) => state.markdown.text);
  const exampleText = useSelector((state) => state.markdown.exampleText);
  const hint = useSelector((state) => state.markdown.hintStatus);
  const finalText = hint ? exampleText : text;

  const handleText = (e) =>{
    dispatch(setText({text : e.target.value}))
  }

  return (
    <div className="input-box">
      <textarea value={finalText} type="text" onChange={handleText} />
    </div>
  );
}

export default InputCard;
