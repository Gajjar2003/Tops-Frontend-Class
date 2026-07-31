
import React, { useState } from "react";

function CreatePlaylist() {

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    const [nameError, setNameError] = useState("");
    const [descriptionError, setDescriptionError] = useState("");

    function handleSubmit(e) {
        e.preventDefault();


        setNameError("");
        setDescriptionError("");

        let isValid = true;

     
        if (name.trim() === "") {
            setNameError("Playlist name is required");
            isValid = false;
        }

        if (description.trim() === "") {
            setDescriptionError("Description is required");
            isValid = false;
        }

        if (isValid) {
            alert("Playlist created successfully!");

            setName("");
            setDescription("");
        }
    }

    return (
        <div className="container mt-5">

            <div
                className="card p-4 mx-auto"
                style={{ maxWidth: "450px" }}
            >

                <h2 className="text-center mb-4">
                    Create Playlist 🎵
                </h2>

                <form onSubmit={handleSubmit}>

                    {/* Playlist Name */}
                    <div className="mb-3">

                        <label className="form-label">
                            Playlist Name
                        </label>

                        <input
                            type="text"
                            className="form-control"
                            placeholder="My Playlist"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />

                        {nameError && (
                            <p className="text-danger mt-1">
                                {nameError}
                            </p>
                        )}

                    </div>


                  
                    <div className="mb-3">

                        <label className="form-label">
                            Description
                        </label>

                        <textarea
                            className="form-control"
                            rows="4"
                            placeholder="Add a description"
                            value={description}
                            onChange={(e) =>
                                setDescription(e.target.value)
                            }
                        ></textarea>

                        {descriptionError && (
                            <p className="text-danger mt-1">
                                {descriptionError}
                            </p>
                        )}

                    </div>


                    <button
                        type="submit"
                        className="btn btn-success w-100"
                    >
                        Create Playlist
                    </button>

                </form>

            </div>

        </div>
    );
}

export default CreatePlaylist;

