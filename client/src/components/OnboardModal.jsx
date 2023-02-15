import { useState, useEffect } from 'react';
import Modal from 'react-modal';

import styles from '../styles';
import CustomButton from './CustomButton';
import { useGlobalContext } from '../context';
import { GetParams, SwitchNetwork } from '../utils/onboard.js';

const OnboardModal = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const { updateCurrentWalletAddress } = useGlobalContext();
  const [step, setStep] = useState(-1);

  async function resetParams() {
    const currentStep = await GetParams();
    setStep(currentStep.step);
    setIsOpen(currentStep.step !== -1);
  }

  useEffect(() => {
    resetParams();

    window?.ethereum?.on('chainChanged', () => {
      resetParams();
    });

    window?.ethereum?.on('accountsChanged', () => {
      resetParams();
    });
  }, []);

  const generateStep = (st) => {
    switch (st) {
      case 0:
        return (
          <>
            <p className={styles.modalText}>
              You don't have Wallet installed!
              <br>Better to use Fireblocks Wallet!</br>{' '}
            </p>
            <CustomButton
              title='Fireblocks'
              handleClick={() =>
                window.open('https://www.fireblocks.com/', '_blank')
              }
            />
          </>
        );

      case 1:
        return (
          <>
            <p className={styles.modalText}>You haven't connected your account!</p>
            <CustomButton
              title='Connect Account'
              handleClick={updateCurrentWalletAddress}
            />
          </>
        );

      case 2:
        return (
          <>
            <p className={styles.modalText}>
              You're on a different network. Switch to Goerli.
            </p>
            <CustomButton
              title='Switch'
              handleClick={SwitchNetwork}
            />
          </>
        );

      case 3:
        return (
          <>
            <p className={styles.modalText}>
              Oops, you don't have enough Goerli in your account
            </p>
            <CustomButton
              title='Grab some test assets'
              handleClick={() =>
                window.open('https://goerli-faucet.pk910.de/', '_blank')
              }
            />
          </>
        );

      default:
        return <p className={styles.modalText}>Good to go!</p>;
    }
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      className={`absolute inset-0 ${styles.flexCenter} flex-col ${styles.glassEffect}`}
      overlayClassName='Overlay'>
      {generateStep(step)}
    </Modal>
  );
};

export default OnboardModal;
