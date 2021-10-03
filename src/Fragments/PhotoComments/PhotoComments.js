import React from 'react'
import { useSelector } from 'react-redux'
import PhotoCommentsForm from '../PhotoCommentsForm/PhotoCommentsForm'
import { CommentsContainer } from './style'

const PhotoComments = ({id, comments}) => {
    const {data} = useSelector(state => state.Login)
    const [Comments, setComments] = React.useState(() => comments)

    const commentSection = React.useRef(null)

    React.useEffect(() => {
        commentSection.current.scrollTop = commentSection.current.scrollHeight
    }, [Comments])

    return (
        <>
            <CommentsContainer ref={commentSection}>
                {Comments.map((comment) => (
                <li key={comment.comment_ID}>
                <b>{comment.comment_author}: </b>
                <span>{comment.comment_content}</span>
                </li>
                ))}
            </CommentsContainer>
            {data && <PhotoCommentsForm id={id} setComments={setComments} />}
        </>
    )
}

export default PhotoComments