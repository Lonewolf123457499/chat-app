// import React from 'react'

const Message = () => {
  return (
    <div className="chat chat-end">
      <div className="chat-image avtar">
        <div className=" w-10 rounded-full">
          <img
            src={
              "https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg"
            }
            alt="tailwind css chat-bubble image"
          />
        </div>
      </div>
      <div className={"chat-bubble text-white bg-rose-300"}> Hi! what upp?</div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        13:56
      </div>
    </div>
  );
}

export default Message;