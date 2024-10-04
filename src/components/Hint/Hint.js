import {useDispatch, useSelector} from 'react-redux'
import {toggleHintStatus} from '../../redux/Markdown/MarkdownSlice'

function Hint() {
    const dispatch = useDispatch()
    const hintStatus = useSelector((state)=> state.markdown.hintStatus)
    const style = hintStatus ? "bg" : ""
  return (
    <div className='hint-box'>
        <div className={`hint ${style}`}onClick={() => dispatch(toggleHintStatus())}>
            ?
        </div>
    </div>
  )
}

export default Hint