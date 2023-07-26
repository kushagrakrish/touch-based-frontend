import React from "react";
import UserProfile from "./components/UserProfile";
import { Button } from "@chakra-ui/react";
import AppButton from "./components/app-button";

const App = () => {
  return (
    <>
      <div className='pb-5'>
        <UserProfile />
        <AppButton variant={"solid"}>Hello</AppButton>
      </div>
    </>
  );
};

export default App;
