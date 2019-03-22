import React from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import "./styling/SingleSong.css";

class AddComment extends React.Component{
  constructor(){
    super()
    this.state = {
      commentInput: ""
    }
  }


handleComment = (e) => {
this.setState({
  commentInput: e.target.value
})
}

async addComment() {
 const {data} = await axios.post("/comments", {
   comment_body: this.state.commentInput,
   user_id: this.props.currentUser.id,
   song_id: this.props.song.songid
 })
 this.setState({
   allComments: this.props.allComments.concat(data),
      // we update the todo list with the new todo
   commentInput: ""
      // we empty out the text input area
  })
}

render(){
  return(
    <form onSubmit={(e) => {
      e.preventDefault();
      if(this.state.commentInput){
        this.addComment()
      }}}>
      <div className="bigCommentDiv">
        <div className="commentInput">
          <input type="text" placeholder="Add a comment" value={this.state.commentInput} onChange={this.handleComment} />
        </div>
        <div >
          <input type="submit" value="Add Comment" className="addCommentButton" />
        </div>
      </div>
      </form>

  )
}
}

export default AddComment;
