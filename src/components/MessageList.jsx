import { gql, useQuery, useMutation } from '@apollo/client'
import { Link } from 'react-router-dom'

const GET_MESSAGES = gql`
    query {
      messages {
        _id
        title
        content
        author
      }
    }
  `

const DELETE_MESSAGES = gql`
  mutation DeleteMessage( $_id: ID) {
        deleteMessage(_id:$_id)    {
                title
            }
      }
`

function MessageList() {
  const { loading, error, data } = useQuery(GET_MESSAGES)
  const [deleteMessage] = useMutation(DELETE_MESSAGES)
  if (loading) return <p>loading messages</p>
  if (error) return <p>error happens</p>

  const handleDelete = async (e) => {
    e.preventDefault()
    await deleteMessage({ variables: { _id: e.target.id } })
    window.location.reload()
  }

  return <div className="row justify-content-center">
    <div className="col-md-6 ofse-md-3">
      {data.messages.length > 0 ?
        data.messages.map(({ _id, title, content, author }) => <div key={_id} className="card m-2">
          <div className="card-body text-center text-primary">
            <div className="card-header">
              <h4>{title}</h4>
            </div>
            <p>{content}</p>
            <p>{author}</p>
            <Link to={`/messageform/${_id}`}>
              <button
                id={_id}
                type="button"
                className='btn btn-success mx-3'
              >
                edit
              </button>
            </Link>
            <button
              id={_id}
              type="button"
              className='btn btn-danger mx-3'
              onClick={handleDelete}
            >
              delete
            </button>
          </div>
        </div>)
        : <span>List empty</span>}
    </div>
  </div>
}

export default MessageList;