// src/App.tsx
import React, { useState } from 'react';
import Button from './Button';
import { FaBeer, FaCoffee } from 'react-icons/fa'; // Example icons from react-icons

const App: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const handleClick = (variant: string, color: string) => {
    alert(`${color} ${variant} button clicked!`);
  };

  const handleLoadingClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert('Loading finished!');
    }, 2000); // Simulate a loading delay
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 space-y-4">
      <Button 
        variant="contained" 
        color="danger" 
        btnText="Danger Button" 
        onClick={() => handleClick('Contained', 'Danger')} 
      />
      <Button 
        variant="outlined" 
        color="info" 
        btnText="Info Button" 
        onClick={() => handleClick('Outlined', 'Info')} 
        endIcon={<FaCoffee />} // End icon
        startIcon={<FaBeer />} // Start icon


      />
      <Button 
        variant="text" 
        color="success" 
        btnText="Success Button" 
        onClick={() => handleClick('Text', 'Success')} 

      />
      <Button 
        variant="contained" 
        color="warning" 
        btnText="Loading Button" 
        loading={loading} 
        onClick={handleLoadingClick} 
      />
      <Button 
        variant="outlined" 
        color="info" 
        btnText="Disabled Button" 
        disabled={true} 
      />
      <Button 
        variant="text" 
        color="danger" 
        btnText="Disabled Text Button" 
        disabled={true} 
      />
    </div>
  );
};

export default App;