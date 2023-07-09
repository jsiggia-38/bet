import React from 'react';
import { useParams } from 'react-router-dom';
import './EditPost.css'
import { supabase } from '../client';
import { useState } from 'react';

const EditPost = ({data}) => {

    const { id } = useParams();

    
    const post = data.filter(item => item.id === parseInt(id))[0];
    const [updatedPost, setUpdatedPost] = useState(post);
    console.log(data);

    const updatePost = async (event) => {
        event.preventDefault();

        await supabase.from('Posts').update(updatedPost).eq('id', id);

        window.location = "/";
    }

    const deletePost = async (event) => {
        event.preventDefault();

        await supabase.from('Posts').delete().eq('id', id);


        window.location = "/";
    }


    const onChange = event => {
        const { name, value } = event.target;
        setUpdatedPost(prevState => ({
          ...prevState,
          [name]: value
        }));
      };





    return (
        <div>
            <form onSubmit = {updatePost}>
                <label for="title">Title</label> <br />
                <input type="text" id="title" name="title" value={updatedPost.title} onChange = {onChange}/><br />
                <br/>

                <label for="author">Author</label><br />
                <input type="text" id="author" name="author" value={updatedPost.author} onChange = {onChange}/><br />
                <br/>

                <label for="description">Description</label><br />
                <textarea rows="5" cols="50" id="description" name = "description" value={updatedPost.description} onChange = {onChange}>
                </textarea>
                <br/>
                <input type="submit" value="Submit" />
                <button className="deleteButton" onClick={deletePost}>Delete</button>
            </form>
        </div>
    )
}

export default EditPost