import React from 'react';

function Members() {
  return (
    <div className="Members">
      <div>
        <div className="Member">
          <div className="MemberStatus offline" />
          Мишген
        </div>
        <div className="Member">
          <div className="MemberStatus online" />
          cleverbot
        </div>
      </div>
    </div>
  );
}

export default Members;
