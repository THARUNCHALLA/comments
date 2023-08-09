import './index.css'
import {formatDistanceToNow} from 'date-fns'

const ha = formatDistanceToNow(new Date())
const CommentItem = props => {
  const {user, toggleIsFavorite, toggleIsFavorite1} = props
  const {name, comment, colors, isFavorite, id} = user

  const onclick = () => {
    toggleIsFavorite(id)
  }
  const onclick1 = () => {
    toggleIsFavorite1(id)
  }
  const isFact = isFavorite
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
  const css = isFavorite ? 'kl' : 'kl1'
  return (
    <li className="container2">
      <div className="Con">
        <button type="button" className={`${colors} kl`}>
          {name[0]}
        </button>
        <div>
          <div className="ha">
            <h1 className="heading1">
              {name}
              <span className="harani">{ha}</span>
            </h1>
            <p className="Rohit">{comment}</p>
          </div>
        </div>
      </div>
      <div className="buttons">
        <button type="button" className={`image12 ${css}`} onClick={onclick}>
          <img src={isFact} alt="like" />
          Like
        </button>
        <button
          type="button"
          className="image12"
          onClick={onclick1}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default CommentItem
