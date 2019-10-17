import React from 'react';

const TeamMemberCard = props => {
    // console.log(props);
    return (
        <div>
           { props.memberList.map( (member,index) => (
                // console.log("This is member", member)
                <div style = {{border: "2px solid black",width: "25%"}} key = {index} >
                    <h2>{member.name}</h2>
                    <h3>{member.email}</h3>
                    <h3>{member.role}</h3>
                </div>
            ))}

        </div>
    );
}

export default TeamMemberCard;