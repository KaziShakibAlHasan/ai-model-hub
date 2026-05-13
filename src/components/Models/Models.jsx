import React, { use } from "react";
import ModelCard from "../ModelCard/ModelCard";


const Models = ({ modelPromise }) => {
  const models = use(modelPromise);
  
  return (
    <div className="container mx-auto">
      <div className="py-20 t text-center space-y-1.5">
        <h2 className="text-5xl font-bold">Choose Your AI Model</h2>
        <p>One Subscription gives you access to all frontier AI models</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {
           models.map( model => <ModelCard model={model}></ModelCard>)
        }
      </div>
    </div>
  );
};

export default Models;

