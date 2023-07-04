import { useState } from "react";

function UserCard(props) {
    let { name, address, avatar, posts, followers } = props;
    let [followBtn, setFollowBtn] = useState(false)
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }}>
            <div
                style={{
                    width: "500px",
                    height: "300px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    border: "1px solid black",
                    backgroundColor:"lightyellow"
                }}>
                <img src={avatar} alt={name} style=
                    {{
                        width: "150px",
                        height: "150px",
                        borderRadius: "50%"
                    }} />
                <div style={{ margin: "1rem" }}>
                    <div>
                        <h2>{name}</h2>
                        <p>{address}</p>
                    </div>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <div style={{ padding: "1rem" }}>
                            <h3>Posts</h3>
                            <p>{posts}</p>
                        </div>
                        <div style={{ padding: "1rem" }}>
                            <h3>Followers</h3>
                            <p>{followers}</p>
                        </div>
                    </div>
                </div>
                <div style={{ margin: "1rem" }}>
                    <button
                        onClick={() => setFollowBtn(!followBtn)}
                        style={{
                            padding: "0.5rem",
                            fontWeight: followBtn ? "bold" : "",
                            borderRadius: "0.5rem",
                        }}
                    >
                        {followBtn ? "following" : "follow"}

                    </button>
                </div>
            </div>
        </div>
    )
}
export default UserCard;