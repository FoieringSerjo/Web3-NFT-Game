import React, { useState, useEffect } from 'react';

import { useGlobalContext } from '../context';
import { PageHOC, CustomInput, CustomButton } from '../components';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const { contract, walletAddress, setShowAlert } = useGlobalContext();
  const [playerName, setPlayerName] = useState('');
  const navigate = useNavigate();

  const handleClick = async () => {
    try {
      console.log({ contract });
      const playerExists = await contract.isPlayer(walletAddress);

      if (!playerExists) {
        await contract.registerPlayer(playerName, playerName);

        setShowAlert({
          status: true,
          type: 'info',
          message: `${playerName} is being registered`,
        });
      }
    } catch (error) {
      setShowAlert({
        status: true,
        type: 'failure',
        message: 'Something went wrong, check Elastic',
      });
    }
  };

  useEffect(() => {
    const checkForPlayerToken = async () => {
      const playerExists = await contract.isPlayer(walletAddress);
      const playerTokenExists = await contract.isPlayerToken(walletAddress);

      console.log({ playerExists, playerTokenExists });

      if (playerExists && playerTokenExists) navigate('/create-battle');
    };

    if (contract) checkForPlayerToken();
  }, [contract]);

  return (
    <div className='flex flex-col'>
      <CustomInput
        label='Name'
        placeholder='Enter your player name'
        value={playerName}
        handleValueChange={setPlayerName}
      />
      <CustomButton
        title='Register'
        handleClick={handleClick}
        restStyles='mt-6'
      />
    </div>
  );
};

export default PageHOC(
  Home,
  <>
    Welcome to Fireblocks <br /> NFT Game
  </>,
  <>
    Connect your wallet to start playing <br /> the ultimate Fireblocks NFT Card Game
  </>
);
