import React, { useState } from "react";
import { Actor, Identity, ActorSubclass } from "@dfinity/agent";
import { AuthClient } from "@dfinity/auth-client";
import { canisterId, createActor } from "../../declarations/aichain";
import { useLocation, useNavigate } from "react-router-dom";
import { _SERVICE } from "../../declarations/aichain/aichain.did";
export const AuthContext = React.createContext<{
  Auth: any;
  actor: ActorSubclass<_SERVICE> | undefined;
  setActor: any;
  iiAuth: boolean;
  setIIAuth: any;
  changeAuthStatus: any;
  handleAuthenticated: (arg0: any) => any;
  loggedIn: boolean;
  setLoggedIn: any;
  pipelineInit: boolean;
  setPipelineInit: any;
  llmStatus: string;
  setLlmStatus: any;
  llmBoolStatus: boolean;
  setLlmBoolStatus: any;
  llmReply: string;
  setLlmReply: any;
  useLLM: boolean;
  setUseLLM: any;
}>({
  Auth: undefined,
  actor: undefined,
  setActor: undefined,
  iiAuth: false,
  setIIAuth: false,
  changeAuthStatus: undefined,
  handleAuthenticated: undefined,
  loggedIn: false,
  setLoggedIn: undefined,
  pipelineInit: false,
  setPipelineInit: undefined,
  llmStatus: undefined,
  setLlmStatus: undefined,
  llmBoolStatus: undefined,
  setLlmBoolStatus: undefined,
  llmReply: "",
  setLlmReply: undefined,
  useLLM: false,
  setUseLLM: undefined,
});

export const AuthProvider = ({ children }) => {
  // const tour_ = useContext(ShepherdTourContext);
  const [actor, setActor] = useState<ActorSubclass<_SERVICE>>();
  const [iiAuth, setIIAuth] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [pipelineInit, setPipelineInit] = useState(false);
  const [llmStatus, setLlmStatus] = useState(
    "Initializinig web language model and webGPU, this might take a while, if webGPU is not enabled on your browser, please enable it to allow this feature work..."
  );
  const navigate = useNavigate();
  const location = useLocation();
  const [llmBoolStatus, setLlmBoolStatus] = useState(false);
  const [llmReply, setLlmReply] = useState("");
  const [useLLM, setUseLLM] = useState(false);

  async function Auth(e) {
    e.preventDefault();
    const authClient = await AuthClient.create();
    if (await authClient.isAuthenticated()) {
      handleAuthenticated(authClient);
      if (location.pathname === "/") {
        navigate("/");
      }
      setIIAuth(true);
    }

    const loginButton = document.getElementById(
      "loginButton"
    ) as HTMLButtonElement;

    const days = BigInt(1);
    const hours = BigInt(24);
    const nanoseconds = BigInt(3600000000000);

    await authClient.login({
      onSuccess: async () => {
        console.log('success')
        handleAuthenticated(authClient);
        navigate("/");
        setIIAuth(true);
      },
      identityProvider: process.env.LOCAL_II_CANISTER,
      maxTimeToLive: days * hours * nanoseconds,
    });
  }

  async function handleAuthenticated(authClient: AuthClient) {
    const identity =
      (await authClient.getIdentity()) as unknown as Identity;

    const whoami_actor = createActor(canisterId as string, {
      agentOptions: {
        identity,
      },
    });
    setActor(whoami_actor);

    // Invalidate identity then render login when user goes idle
    authClient.idleManager?.registerCallback(() => {
      Actor.agentOf(whoami_actor)?.invalidateIdentity?.();
    });
  }

  const changeAuthStatus = () => {
    setIIAuth((prevState) => prevState !== prevState);
  };

  return (
    <AuthContext.Provider
      value={{
        Auth,
        actor,
        setActor,
        iiAuth,
        setIIAuth,
        handleAuthenticated,
        changeAuthStatus,
        loggedIn,
        setLoggedIn,
        pipelineInit,
        setPipelineInit,
        llmStatus,
        setLlmStatus,
        llmBoolStatus,
        setLlmBoolStatus,
        llmReply,
        setLlmReply,
        useLLM,
        setUseLLM,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
