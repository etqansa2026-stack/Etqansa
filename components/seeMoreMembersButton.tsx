"use client";
import React, { useState } from "react";
import Button2 from "./ui/Button2";

function SeeMoreMembersButton() {
  const [numberOfLifeMem, setnumberOfLifeMem] = useState<number>(0);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const params = new URLSearchParams();

    if (numberOfLifeMem > 0) {
        console.log("numberOfLifeMem: ",numberOfLifeMem);
        
 params.set("#ofLifeMem", numberOfLifeMem.toString());
    window.location.href = `${window.location.pathname}?${params.toString()}`;
    }
      
  };

  return (
    <div>
      <form method="Get" onSubmit={onSubmit}>
        <Button2
          onClick={() => {
            setnumberOfLifeMem(numberOfLifeMem + 8);
          }}
        >
          See More
        </Button2>
      </form>
    </div>
  );
}

export default SeeMoreMembersButton;
