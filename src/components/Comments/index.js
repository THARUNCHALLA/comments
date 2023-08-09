import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import './index.css'

import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {
    name: '',
    comment: '',
    final: [],
    count: 0,
  }

  finalOutput = () => {
    const {name, comment, count} = this.state
    if (name !== '' && comment !== '') {
      const content = {
        id: uuidv4(),
        name,
        comment,
        colors: initialContainerBackgroundClassNames[count],
        isFavorite: true,
      }
      this.setState(prevState => ({
        final: [...prevState.final, content],
        name: '',
        comment: '',
        count: prevState.count + 1,
      }))
    }
  }

  toggleIsFavorite = id => {
    this.setState(prevState => ({
      final: prevState.final.map(eachContact => {
        if (id === eachContact.id) {
          return {...eachContact, isFavorite: !eachContact.isFavorite}
        }
        return eachContact
      }),
    }))
  }

  toggleIsFavorite1 = id => {
    const {final} = this.state
    const filter = final.filter(each => each.id !== id)
    this.setState({final: filter})
  }

  textarea = event => {
    this.setState({comment: event.target.value})
  }

  input1 = event => {
    this.setState({name: event.target.value})
  }

  Submit = event => {
    event.preventDefault()
  }

  render() {
    const {final, name, comment} = this.state

    return (
      <div>
        <div className="firstContainer">
          <form className="container" onSubmit={this.onAddContact}>
            <h1 className="heading">Comments</h1>
            <p className="para">say something about 4.0 technologies</p>
            <input
              type="text"
              placeholder="Your Name"
              onChange={this.input1}
              value={name}
            />
            <br />
            <textarea
              cols="40"
              rows="6"
              placeholder="Your Comment"
              onChange={this.textarea}
              value={comment}
            />
            <button type="submit" className="button" onClick={this.finalOutput}>
              Add Comment
            </button>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
            className="firstImg"
          />
        </div>
        <hr className="head12" />
        <div className="lastContainer">
          <button type="button" className="firstButton">
            {final.length}
          </button>
          <p>comments</p>
        </div>

        <ul>
          {final.map(each => (
            <CommentItem
              user={each}
              key={each.id}
              toggleIsFavorite={this.toggleIsFavorite}
              toggleIsFavorite1={this.toggleIsFavorite1}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default Comments
