/* eslint-disable react-hooks/exhaustive-deps */
import { gql, useMutation, useQuery } from '@apollo/client'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CREATE_MESSAGE = gql`
    mutation CreateMessage( $title: String, $content: String, $author: String) {
        createMessage(title:$title, content:$content, author:$author)    {
                title
                content
                author
            }
      }
    
`

const UPDATE_MESSAGE = gql`
    mutation UpdateMessage($_id: ID, $title: String, $content: String, $author: String) {
        updateMessage(_id:$_id, title:$title, content:$content, author:$author)    {
                title
                content
                author
            }
      }
    
`

const GET_MESSAGE_BY_ID = gql`
    query Message($_id: ID) {
      message(_id:$_id) {
        _id
        title
        content
        author
      }
    }
  `

const initialState = {
    author: "",
    title: "",
    content: ""
}
function MessageForm() {

    const [newMessage, SetNewMessage] = useState(initialState)
    const [createMessage] = useMutation(CREATE_MESSAGE)
    const [updateMessage] = useMutation(UPDATE_MESSAGE)
    const { _id } = useParams()
    console.log(_id);
    const { data, error } = useQuery(GET_MESSAGE_BY_ID, { variables: { _id } })
    if (error) console.log(error.message)

    useEffect(() => {
        if (_id === "0") SetNewMessage(initialState);
    }, [])

    useEffect(() => {
        if (data) SetNewMessage(data.message);
    }, [data])


    const handlechange = e => {
        e.preventDefault();
        SetNewMessage({
            ...newMessage,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (_id === "0") await createMessage({ variables: newMessage });
        else await updateMessage({ variables: newMessage });
        window.location.href = "/"
    }

    return <div className="row justify-content-center">
        <div className="col-md-6 ofse-md-3">
            <h3 className='text-center text-info'>{_id === "0" ? "Create " : "Edit "}Message</h3>
            <div className="card">
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group mb-3">
                            <input
                                type="text"
                                name="author"
                                placeholder='Author'
                                className='form-control'
                                onChange={handlechange}
                                value={newMessage.author}
                            />
                        </div>
                        <div className="form-group mb-3">
                            <input
                                type="text"
                                name="title"
                                placeholder='write a title'
                                className='form-control'
                                onChange={handlechange}
                                value={newMessage.title}
                            />
                        </div>
                        <div className="form-group mb-3">
                            <textarea
                                row="3"
                                name="content"
                                placeholder='Content'
                                className='form-control'
                                onChange={handlechange}
                                value={newMessage.content}
                            ></textarea>
                        </div>
                        <div className="d-grid gap-2">
                            <button className={`btn ${_id === "0" ? "btn-primary" : "btn-success"}`} type="submit">
                                {_id === "0" ? "Save" : "edit"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
}

export default MessageForm;